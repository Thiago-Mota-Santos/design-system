import * as CheckboxPrimary from "@radix-ui/react-checkbox";
import React from "react";
import { CheckBoxIndicator, CheckBoxRoot, CheckIcon } from "./styles";

export interface CheckBoxProps {}

const CheckBox: React.FC<CheckBoxProps> = ({}) => {
  return (
    <CheckBoxRoot>
      <CheckBoxIndicator asChild>
        <CheckIcon />
      </CheckBoxIndicator>
    </CheckBoxRoot>
  );
};

export default CheckBox;
