import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 2px solid #1F2937;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Nav = styled.nav`    
    a{
        font-size: 36px;
        &:not(:nth-child(1)){
            margin-left: 15px;
        }
    }
`
export const Logo = styled.div`
   display: flex;
   align-items: center;
   gap: 15px;
   h1{
       font-size: 40px;
   }
    img{
        width: 40px;
        height: 40px;
    }
`