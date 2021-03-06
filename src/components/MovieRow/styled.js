import styled from 'styled-components';

export const MovieRow = styled.div`
    margin-bottom:30px;

    h2 {
        margin: 0px 0px 0px 30px;
    }

    &:hover .movieRow--left,
    &:hover .movieRow--right {
        opacity:1;
    }

    .movieRow--left,
    .movieRow--right
    {
        position:absolute;
        width:40px;
        height:225px;
        background: rgba(0,0,0, .6);
        z-index:99;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        opacity:0;
        transition: all .5s ease;
    }
    .movieRow--left{
        left:0;
    }
    .movieRow--right{
        right:0;
    }

    .movieRow--listarea {
        overflow-x:hidden;
        padding-left:30px;
    }
    .movieRow--list {
        transition: all ease .5s;
    }
    .movieRow--item {
        display:inline-block;
        width:150px;
        cursor:pointer;

        img {
            width:100%;
            transform: scale(.9);
            transition: all .2s ease;
        }

        img:hover {
            transform:scale(1);
        }
    }

    @media (max-width: 770px) {
        .movieRow--left,
        .movieRow--right {
            opacity: 1;
        }
    }
`;