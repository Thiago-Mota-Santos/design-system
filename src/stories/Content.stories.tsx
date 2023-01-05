import { Meta, StoryObj } from "@storybook/react";
import Card from "../components/Card";
import Content, { ContentProps } from "../components/Content";

export default {
  title: "Components/Content",
  component: Content,
  args: {
    children: (
      <Card
        img_url={"https://avatars.githubusercontent.com/u/22632046?s=280&v=4"}
        title={"Conheça sobre o incrível StoryBook"}
        subtitle={
          "Uma ferramenta que vem ganhando muita popularidade entre os devs"
        }
        description={
          "O Storybook é uma ferramenta muito boa para gestão de componentes no react e no ecossistema javascript em si, ela vem ganhando muito espaço nos últimos tempos principalmente quando se trata de design system, ela tem se tornando algo que é indispensável para as empresas e tem integração com os diversos tipos de sistemas!!! Muito incrível mesmo"
        }
        href={"/"}
      />
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ContentProps>;

export const Default: StoryObj<ContentProps> = {
  args: {},
};
