/*eslint
"no-restricted-imports": [
    "error",
    {
      "paths": [{
        "name": "styled-components",
        "message": "Please import from styled-components/macro."
      }],
      "patterns": [
        "!styled-components/macro"
      ]
    }
  ]
  */
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

import styled from 'styled-components';


export const CheckBoxRoot = styled(Checkbox.Root)`
    width: 24px;
    height: 24px;
    padding: 2px;
    background: #202024;
    border-radius: 4px;

`

export const CheckBoxIndicator = styled(Checkbox.Indicator)`

`

export const CheckIcon = styled(Check)`
    width: 19px;
    height: 19px;
    font-weight: bold;
    color: #81d8f7;

`;

