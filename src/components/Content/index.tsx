import { ReactNode } from "react";

import { Container } from "./styles";

export interface ContentProps {
  children?: ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
}
