import { symbol } from "prop-types";
import styled from "styled-components";

export const IndexSelectedText = styled.div`
  
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #272727;
`

export const IndexNotSelectedText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 600;  
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #979797;
`

export const IndexNotSelectedLine = styled.div`
  height: 1px;
  background-color: #efefef;
`

export const IndexSelectedLine = styled.div`
  /* width: 114px; */
  height: 2px;
  background-color: #fb6159;
`

export const ProductCategoryTitleBox = styled.div`
  height: 24px;
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #272727;
  display:flex;
  margin-top: 30px;
  margin-bottom: 16px;
  align-items:center;
  justify-content:space-between;
`

export const ProdcutPopularBox = styled.div`
display:flex;
flex-direction:column;
margin-left:16px;
`

export const ProductPopularImg = styled.img`
  width:124px;
  height:124px;
  border-radius: 12px;
  object-fit: cover;
`


export const ProductPopularImgWrap = styled.div`
  width: 124px;
  height: 60px;
  border-radius: 12px;
  opacity: 0.6;
  position: absolute;
  z-index: 10;
  background-image: linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0));
`


export const ProductTitle = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 15px;
  width: 124px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #444;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ProductPrice = styled.div`
font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #272727;
`

export const ProductSale = styled.div`
font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fb6159;
  margin-left:6px;
`

export const ProductFilter = styled.div`
width: 66px;
  height: 36px;
  border-radius: 18px;
  background-color: #efefef;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #6b6b6b;
`

export const LineDraw = styled.div`
height: 1px;
background-color: #efefef;
margin:30px 0px 30px 0px;
`

export const ProdcutRecentBox = styled.div`
display:flex;
flex-direction:column;
`

export const ProductRecentImg = styled.div`
width:165px;
height:165px;
background-color:black;
`

export const ProductOrigin = styled.div`
font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #979797;
`