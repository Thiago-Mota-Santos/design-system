import { Meta, StoryObj } from "@storybook/react";
import TextInput, { TextInputProps } from "../components/TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
  args: {
    placeholder: "Digite seu email",
    type: "email",
  },
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {};
