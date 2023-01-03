import { Meta, StoryObj } from "@storybook/react";
import Heading from "./index";
import { HeadingProps } from "./index";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    size: "md",
  },
} as Meta<HeadingProps>;

export const Small: StoryObj<HeadingProps> = {
  args: {
    children: "testing small",
    size: "sm",
  },
};

export const Medium: StoryObj<HeadingProps> = {
  args: {
    children: "testing medium",
    size: "md",
  },
};
export const Large: StoryObj<HeadingProps> = {
  args: {
    children: "testing large",
    size: "lg",
  },
};
