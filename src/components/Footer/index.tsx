import React, { ReactNode } from "react";

import { Container } from "./styles";

export interface FooterProps {
  children?: ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <Container>
      <p>{children}</p>
    </Container>
  );
};

export default Footer;
