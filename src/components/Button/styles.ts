import styled from 'styled-components';
import { ButtonProps } from './index';

export const Container = styled.button<ButtonProps>`
 padding: 16px 12px;
 background-color: cyan;
 border-radius: 4px;
 font-weight: 600;
 color: #000;

&:hover{
    cursor: pointer;
    
}


`;
