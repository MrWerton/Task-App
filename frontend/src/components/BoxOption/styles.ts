import styled from 'styled-components';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {IoMdArrowDropup} from 'react-icons/io'
export const Container = styled.div`
    width: 40px;
    height: 62px;
    border-radius: 10px;
    background-color: #111827;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 30px;
    right: 0px;
    box-shadow: 1px 2px 1px rgba(0,0,0,0.5);
    gap: 10px;
    
    
`;
export const IconEdit  = styled(AiFillEdit)`

`;
export const IconDelete = styled(AiFillDelete)`

`;
export const Arrow = styled(IoMdArrowDropup)`
    transform: translate(23deg);
    position: absolute;
    top: -15px;
    right: -6px;
    font-size: 30px;
    color: #111827;

`;



