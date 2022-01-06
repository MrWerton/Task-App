import styled from 'styled-components';
export const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: #111827;
    z-index: 111;
    width: 100vw;
    height: 80px;
    border-bottom: 2px solid #1F2937;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 266px;
    @media (max-width: 1000px) {
        padding:0 50px;
    }
`;

export const Nav = styled.nav`    
    a{
        font-size: 28px;
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