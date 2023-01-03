import styled from 'styled-components';
import { HeadingProps } from './index';


const sizes ={
    sm: {
        'font-size': '20px'
    },
    md:{
        'font-size': '22px'
    },
    lg:{
        'font-size': '24px'
    }
}

export const Container = styled.h2<HeadingProps>`
 color: white;
 font-size: 16px;
 ${(props) =>sizes[props.size || 'md']}
`;


