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

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;

    a{  
        padding: 10px;
        font-size: 28px;
        transition: ease-in-out 0.2s;
        border-radius: 50%; 
        &:hover{
            color: #1F2937;
            background-color: rgba(255, 255, 255, 0.4);
            box-shadow: 3px 0px 10px 5px rgba(255, 255, 255, 0.2);
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