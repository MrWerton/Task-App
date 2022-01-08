import styled from 'styled-components';
import {FiMoreHorizontal, FiMoreVertical} from 'react-icons/fi'

export const Container = styled.div`
    width: 100%;
    height: auto;
    background: #1F2937;
    border-radius: 10px;
    
    
`;
export const Wrapper = styled.div`
    font-size: 22px;
    color: #dadada;
    gap: 15px;
    display: flex;
    align-items: center;
`

export const CheckBox = styled.div`
    font-size: 22px;
    cursor: pointer;
    .checked{
        color: #9FE09E;
    }
    .unCheked{
        color: #FF5E5E;
    }
    background-color: none;
    border: none;
  
    
`
export const Description = styled.p`
    font-size: 16px;
    color: #dadada;

`

interface IDoneProps{
    done: boolean
}

export const Header = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 15px;
        align-items: center;

`

export const Title = styled.div(({done}: IDoneProps)=>(`
    text-decoration:  ${!done?'none':'line-through'};
    font-size: 24px;
    color: #dadada;
`
))
export const Content = styled.div`
    font-size: 16px;
    color: #dadada;
    padding: 15px;
    display: flex;
    align-items: center;

`
export const Option = styled.div`
    font-size: 16px;
    color: #dadada;
    position: relative;

`
export const IconMore = styled(FiMoreHorizontal)`
    font-size: 26px;
    color: #dadada;
    cursor: pointer;
    z-index: 10;
    

`

