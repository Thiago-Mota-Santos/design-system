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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  background: #181A1B;
  height: 40px;


  >p{
    color: #BB83E6;
    font-size: 12px;
    font-family: Domine, Arial, Helvetica, sans-serif;
  }
`;
