import styled from "styled-components"

export const RecommnedTitleText = styled.div`
font-family: AppleSDGothicNeo;
font-size: 22px;
font-weight: 800;
color: #272727;
line-height: normal;
`


export const RecommnedTitleArrow = styled.img`
width: 20px;
height: 20px;
src: ${(props:any) => props.src}
`

export const RecommnedTitle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 16px;
`
export const RecommendList = styled.div`
  padding: 15px 16px 42px 16px;
  display: flex;
  flex-direction: row;
  overflow: auto;
`

export const RecommendItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 13px;
`

export const RecommendItemBox = styled.div`
  width: 154px;
  height: 154px;
  border-radius: 12px;
  position: relative;
`

export const RecommendItemCover = styled.div`
  width: 154px;
  height: 60px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  position: relative;
  z-index: 10;
  top: -158px;
  border-radius: 12px;
`

export const RecommendItemLike = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 20;
`

// export const RecommendItemNotLike = styled.img`
//   width: 30px;
//   height: 30px;
//   object-fit: contain;
//   position: absolute;
//   top: 0px;
//   right: 0px;
//   padding: 10px;
//   z-index: 20;
// `


export const RecommendItemImage = styled.img`
width: 154px;
height: 154px;
background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
border-radius: 12px;
object-fit: cover;
src: ${(props:any) => props.src}
position: relative;
z-index: 1;
`



export const RecommendItemTextInfoSource = styled.div`
font-family: AppleSDGothicNeo;
font-size: 12px;
font-weight: 500;
color: #979797;
margin-top: 10px;
`


export const RecommendItemTextInfoTitle= styled.div`
font-family: AppleSDGothicNeo;
font-size: 15px;
font-weight: 500;
color: #272727;
margin-top: 4px;
`
export const RecommendItemTextInfoPrice = styled.div`
font-family: AppleSDGothicNeo;
font-size: 16px;
font-weight: 800;
color: #272727;
`

export const RecommendItemTextInfoPriceDiscount = styled.div`
font-family: AppleSDGothicNeo;
font-weight: bold;
color: #fb6159;
margin-left: 6px;
`