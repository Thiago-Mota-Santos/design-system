import { Meta, StoryObj } from "@storybook/react";
import Footer, { FooterProps } from "../components/Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  args: {
    children: "Thzinh 2022, todos os direitos reservados",
  },
} as Meta<FooterProps>;

export const Default: StoryObj<FooterProps> = {
  args: {},
};
