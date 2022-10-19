import styled from "styled-components"


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
