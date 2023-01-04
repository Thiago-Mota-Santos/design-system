import React, { InputHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Button: React.FC<TextInputProps> = (props: TextInputProps) => {
  return <Container {...props} />;
};

export default Button;
