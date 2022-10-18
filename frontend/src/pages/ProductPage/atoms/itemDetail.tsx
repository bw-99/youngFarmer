import styled from "styled-components";

export const IndexSelectedText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #272727;
`

export const IndexNotSelectedText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #979797;
`



export const IndexNotSelectedLine = styled.div`
  height: 1px;
  background-color: #efefef;
`

export const IndexSelectedLine = styled.div`
  width: 114px;
  height: 2px;
  background-color: #fb6159;
`


export const ImageBox = styled.img`
  object-fit: contain;
  width: calc(100vw - 32px);
  margin: 8px 0;
`