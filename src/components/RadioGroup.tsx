import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Radio } from "./Radio";
import { Density } from "../styles/Density";

const RadioContainer = styled.div`
  * {
    margin-bottom: ${Density.spacing.sm};
  }

  *:last-of-type {
    margin-bottom: 0;
  }
`;

type Props = {
  items: Array<any>;
  onChange?: any;
  itemValuePath?: string;
  itemLabelPath?: string;
};

export const RadioGroup: React.FC<Props> = props => {
  const { items, onChange, itemValuePath, itemLabelPath } = props;

  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (onChange && items[active]) {
      const value = itemValuePath ? items[active][itemValuePath] : items[active].value;
      onChange(value);
    }
  }, [active]);

  const checked = (index: number) => {
    return index === active;
  };

  const radios = items.map((el: any, index: number) => {
    const label = itemLabelPath ? el[itemLabelPath] : el.label;

    return (
      <Radio checked={checked(index)} onChange={() => setActive(index)} key={index} label={label} />
    );
  });

  return <RadioContainer>{radios}</RadioContainer>;
};
