import React, { ReactNode } from "react";
import { Container } from "./styles";

export interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Button;
