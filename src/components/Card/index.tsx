import React, { ReactNode } from "react";

import { Wrapper, ImagePreview, Title, ReadMore } from "./styles";

export interface CardProps {
  img_url: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

const Card: React.FC<CardProps> = ({
  img_url,
  title,
  subtitle,
  description,
  href,
}) => {
  return (
    <Wrapper>
      <ImagePreview src={img_url} alt={title} />
      <Title>{title}</Title>
      <header>
        <p>{subtitle}</p>
        <p>{description}</p>
        <ReadMore href={href}>Leia mais</ReadMore>
      </header>
    </Wrapper>
  );
};

export default Card;
