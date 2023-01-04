import React, { ReactNode } from "react";

import { Span } from "./styles";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

const Text: React.FC<TextProps> = ({
  size = "md",
  children,
  asChild,
  ...props
}) => {
  return (
    <>
      <Span size={size} {...props}>
        {children}
      </Span>
    </>
  );
};

export default Text;
