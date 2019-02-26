import React, { useEffect, useState } from "react";

import { IDataConstraints } from "../schemas/IDataConstraints";
import { Input } from "./Input";
import { InputGroup } from "./InputGroup";

export enum FieldType {
  Text,
  Select,
  Number
}

interface IFormField {
  type: FieldType;
  constraints?: IDataConstraints;
  label?: string;
  placeholder?: string;
}

type Props = {
  fields: [IFormField];
  onChange?: any;
  onValidate?: any;
  data?: [any];
};

export const Form: React.FC<Props> = props => {
  const { fields, data, onChange, onValidate } = props;

  let initialFormData = {} as any;

  Object.keys(fields).map((f: string) => {
    initialFormData[f] = (data && data[f as any]) || "";
  });

  const [formData, setFormData] = useState({ ...initialFormData });
  const [previousFormData, setPreviousFormData] = useState({ ...initialFormData });

  useEffect(() => {
    onChange && onChange(formData);
    onValidate && onValidate(validateForm());
  }, [formData]);

  /**
   * Updates local form state based on input value
   * @param e Event
   * @param field Form field
   */
  const fieldChanged = (e: any, field: string) => {
    setPreviousFormData(formData);
    setFormData({
      ...formData,
      [field as any]: e.target.value
    });
  };

  /**
   * Validates all fields in this form
   */
  const validateForm = () => {
    let valid = true;

    for (const field in fields) {
      valid = validate(field, fields[field]);
    }

    return valid;
  };

  /**
   * Validates a single form field (but doesn't show required fields red on page laod)
   * @param fieldName Name of the field (for lookup)
   * @param field Form field object
   */
  const validateForUI = (fieldName: string, field: IFormField) => {
    const { constraints } = field;

    if (constraints === undefined) {
      return true;
    }

    if (
      constraints.required &&
      (previousFormData[fieldName].length > 0 && formData[fieldName].length === 0)
    ) {
      return false;
    }

    return true;
  };

  /**
   * Validates a single form field
   * @param fieldName Name of the field (for lookup)
   * @param field Form field object
   */
  const validate = (fieldName: string, field: IFormField) => {
    let valid = validateForUI(fieldName, field);
    const { constraints } = field;

    if (constraints && constraints.required && formData[fieldName].length === 0) {
      valid = false;
    }

    return valid;
  };

  /**
   * Transforms a single IFormField into JSX
   * @param fieldName Name of the field (for lookup)
   * @param field Form field object
   * @param key Key (from iterator)
   */
  const renderField = (fieldName: string, field: IFormField, key: number) => {
    const fieldProps = {
      label: field.label,
      placeholder: field.placeholder
    };

    switch (field.type) {
      case FieldType.Text:
        return (
          <InputGroup key={key}>
            <Input
              {...fieldProps}
              valid={validateForUI(fieldName, field)}
              value={formData[fieldName as any]}
              onChange={(e: any) => fieldChanged(e, fieldName)}
            />
          </InputGroup>
        );
    }
  };

  let formFields: Array<React.ReactNode> = [];

  Object.keys(fields).forEach((field: any, index: number) => {
    formFields.push(renderField(field, fields[field], index));
  });

  return <form>{formFields}</form>;
};
