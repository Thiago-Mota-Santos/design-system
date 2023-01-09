import styled from 'styled-components'
import { ButtonProps } from './index';

export const Container = styled.button<ButtonProps>`
 padding: 16px 12px;
 background-color: #81d8f7;
 border-radius: 4px;
 font-weight: 600;
 color: #000;
 font-size: 16px;
 width: 100%;

&:hover{
    cursor: pointer;
    background: #9BE1FB;
    transition: background 0.2s ease-out;
    
}


`;
