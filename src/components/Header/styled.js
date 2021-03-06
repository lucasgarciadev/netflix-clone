import styled from 'styled-components';

export const HeaderArea = styled.header`
    position:fixed;
    z-index:999;
    top:0;
    left:0;
    right:0;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 30px;
    background:transparent;
    transition: all .5s ease;

    &.black {
        background-color:#141414;
    }

    .header--logo {
        height:50px;  
        
        img {
            height:100%;
        }
    }
    .header--user {
        height:45px;  
        
        img {
            height:100%;
            border-radius:3px;
        }
    } 
`;