import { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    size: "md",
  },
} as Meta<ButtonProps>;

export const Small: StoryObj<ButtonProps> = {
  args: {
    children: "Create Account",
  },
};
