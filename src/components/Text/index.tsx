import React, { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

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
  const Component = asChild ? Slot : "span";

  return (
    <>
      <Span size={size} {...props}>
        {children}
      </Span>
    </>
  );
};

export default Text;
