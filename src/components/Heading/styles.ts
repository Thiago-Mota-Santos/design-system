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
import styled from 'styled-components';
import { HeadingProps } from './index';


const sizes ={
    sm: {
        'font-size': '20px'
    },
    md:{
        'font-size': '24px'
    },
    lg:{
        'font-size': '32px'
    }
}

export const Container = styled.h2<HeadingProps>`
 color: white;
 font-size: 16px;
 ${(props) =>sizes[props.size || 'md']}
`;


