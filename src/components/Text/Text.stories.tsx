import { Meta, StoryObj } from "@storybook/react";
import Text, { TextProps } from "./index";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    size: "md",
  },
} as Meta<TextProps>;

export const Small: StoryObj<TextProps> = {
  args: {
    children: "testing small",
    size: "sm",
  },
};

export const Medium: StoryObj<TextProps> = {
  args: {
    children: "testing medium",
    size: "md",
  },
};
export const Large: StoryObj<TextProps> = {
  args: {
    children: "testing large",
    size: "lg",
  },
};
