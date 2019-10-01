import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { Button } from "./Button";
import { CSSTransition } from "react-transition-group";

const Dropdown = styled.div`
  position: absolute;
  top: 50px;
  background: white;
  border-radius: ${p => p.theme.Surface.radius.base};
  box-shadow: ${props => props.theme.Surface.shadow.high};
  z-index: 10;
  right: 0;
`;

const Wrapper = styled.div`
  position: relative;

  .amino-pop-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .amino-pop-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 150ms, transform 150ms;
  }
  .amino-pop-exit {
    opacity: 1;
    transform: scale(1);
  }
  .amino-pop-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 150ms, transform 150ms;
  }
`;

type Props = {
  trigger?: React.ReactNode;
};

// TODO: click off listener

export const MenuButton: React.FC<Props> = props => {
  const { trigger, children } = props;

  const [open, setOpen] = useState(false);
  const node = useRef<any>();

  const toggle = () => setOpen(o => !o);

  const handleClick = (e: any) => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Wrapper ref={node}>
      <Button onClick={toggle}>{trigger ? trigger : "Open"}</Button>

      <CSSTransition unmountOnExit in={open} timeout={150} classNames="amino-pop">
        <Dropdown>{children}</Dropdown>
      </CSSTransition>
    </Wrapper>
  );
};
