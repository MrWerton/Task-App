import styled from 'styled-components';
import {IoIosCloseCircle} from 'react-icons/io'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(17,24,39,0.81);
    position: fixed;
    z-index: 111111;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;
export const Box = styled.div`
position: relative;
    background-color: #1F2937;
    width: 400px;
    height: 450px;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const IconClose = styled(IoIosCloseCircle)`
    position: absolute;
    right: 15px;
    top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 40px;
    color: #dadada;
    cursor: pointer;
`
export const Button = styled.button`
    margin-top: 20px;
    padding: 12px 30px;
    color: #111827;
    background-color: #dadada;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`
export const Form = styled.form`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    input{
        margin-top: 10px;
        background-color: #111827;
        border-radius: 10px;
        padding: 10px;
    }
    textarea{
        margin-top: 10px;
        background-color: #111827;
        border-radius: 10px;
        padding: 10px;
        height: 120px;
    }

`