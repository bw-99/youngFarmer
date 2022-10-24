import styled from "styled-components"

export const ImageTop =  styled.div`
    
    opacity: 0;
    transition-duration: 1s ease;
`

export const ImageTopActive = styled(ImageTop)`
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
`

export const ImageSize = styled.img`
    height: 375px;
    object-fit: cover;
    width: 100vw;
    position: absolute;
    z-index: -10;
    top: 0;
`


export const ImageCover = styled.div`
height: 146px;
opacity: 0.6;
position: absolute;
z-index: -10;
width: 100vw;
top: 0;
background-image: linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0.88) 31%, rgba(0, 0, 0, 0));
`

export const BottomBox = styled.div`
border-radius: 12px;
background-color: rgba(0, 0, 0, 0.5);
margin-top: 270px;
display: flex;
justify-content: center;
align-items: center;
`

export const BottomBoxCurPage = styled.div`
font-family: AppleSDGothicNeo;
font-size: 13px;
font-weight: bold;
color: #ffffff;
`

export const BottomBoxTotalPage = styled.div`
opacity: 0.5;
font-family: AppleSDGothicNeo;
font-size: 13px;
font-weight: 500;
color: #ffffff;
`