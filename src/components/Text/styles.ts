import styled from 'styled-components';
import { TextProps } from './index';


const sizes ={
    sm: {
        'font-size': '16px'
    },
    md:{
        'font-size': '18px'
    },
    lg:{
        'font-size': '20px'
    }
}

export const Span = styled.span<TextProps>`
 color: var(--cyan-300);
 font-size: 16px;
 ${(props) =>sizes[props.size || 'md']}
`;


