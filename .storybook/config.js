import { addDecorator } from "@storybook/react";
import { Global } from "./styles/global";

addDecorator((storyFn) => (
  <>
    <Global />
    {storyFn()}
  </>
));
