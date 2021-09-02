import styled from "styled-components";

export const Featured = styled.section`
    height:100vh;
    background-size:cover;
    background-position:center;
    color: #FFF;
    
    .featured--vertical {
        width: inherit;
        height:inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);
    }

    .featured--horizontal {
        width:inherit;
        height:inherit;
        background: linear-gradient(to right, #111 20%, transparent 70%);
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding-left:30px;
        padding-bottom:30px;
        padding-top:70px;
    }

    .featured--name {
        font-size:60px;
        font-weight:bold;
    }

    .featured--info {
        font-size:18px;
        font-weight:bold;
        margin-top:15px;

        .featured--points, .featured--year, .featured--seasons {
            margin-right:15px;
            display:inline-block;
        } 

        .featured--points {
            color: #46d469;
        }

        .featured--description {
            margin-top:15px
            font-size:20px;
            color:#999;
            max-width:40%;
        }

        .featured--buttons {
            margin-top:15px;
        }

        .featured--watchButton,
        .featured--mylistButton {
            display: inline-block;
            font-size: 20px;
            font-weight:bold;
            padding:15px 25px;
            border-radius:5px;
            text-decoration:none;
            margin-right:15px;
            opacity:1;
            transition: all .2s ease;

            &:hover {
                opacity:.7;
            }
        }

        .featured--watchButton {
            background-color: #FFF;
            color: #000;
        }
        .featured--mylistButton {
            background-color: #333;
            color: #FFF;
        }

        .featured--genres {
            margin-top: 15px;
            font-size:18px;
            color: #999;
        }

    }

    @media (max-width: 770px) {
        height: 110vh;

        .featured--name {
            font-size:40px;
        }
        .featured--info {
            font-size: 16px;

            .featured--description {
                font-size:14px;
                max-width:100%;
                margin-right:10px;
                margin-top:5px;
            }

            .featured--watchButton,
            .featured--mylistButton {
                font-size:16px;
            }
            
            .featured--genres {
                font-size:14px;
            }
        }
        
    }
`;