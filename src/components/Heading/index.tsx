import React, { ReactNode } from "react";

import { Container } from "./styles";

export interface HeadingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  size = "md",
  children,
  asChild,
  ...props
}) => {
  return (
    <>
      <Container size={size} {...props}>
        {children}
      </Container>
    </>
  );
};

export default Heading;
