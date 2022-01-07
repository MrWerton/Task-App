import styled from 'styled-components';

export const Container = styled.div`
    padding: 4px 0;
    height: 100%;
    width: 100%;
    gap: 15px;
    display: flex;
    flex-direction: column;
    animation-name: list;
    animation-duration: 1s;
    transition: 2s ease-in-out;
    @keyframes list {
        from{
            filter: opacity(0);
        }
        to{
            filter: opacity(1);
        }
        
    }
`;
