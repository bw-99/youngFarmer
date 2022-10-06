import styled from "styled-components"

export const LiveTitleText = styled.div`
font-family: AppleSDGothicNeo;
font-size: 22px;
font-weight: 800;
color: #272727;
line-height: normal;
`


export const LiveTitleArrow = styled.img`
width: 20px;
height: 20px;
`


export const LiveTitle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 2px;
padding: 0 8px 0 8px;
`


export const LiveItemImage = styled.img`
    width: 343px;
    height: 400px;
    border-radius: 12px;
    object-fit: cover;
`

export const LiveItemCoverTextDate = styled.div`
  opacity: 0.9;
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 500;
  color: #cccccc;
  padding: 30px 0 6px 16px;
`

export const LiveItemCover = styled.div`
    width: 343px;
    height: 400px;
    border-radius: 12px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.7));
    position: absolute;
    z-index: 10;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


export const LiveItemCoverTextMain = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  color: #ffffff;
  padding: 0 0 0 16px;
`


export const LiveItemCoverBottom = styled.div`
  height: 80px;
  border-radius: 12px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.06);
  border: solid 1px #efefef;
  background-color: #ffffff;
  margin: 0 16px 16px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 7px 0 7px;
`

export const LiveItemCoverBottomImage = styled.img`
  width: 66px;
  height: 66px;
  object-fit: cover;
  border-radius: 12px;
`

export const LiveItemCoverBottomTitle = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 15px;
  font-weight: 500;
  color: #272727;
`

export const LiveItemCoverBottomCost = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 800;
  color: #272727;
`
export const LiveItemCoverBottomDiscount = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: bold;
  color: #fb6159;
  margin-left: 6px;
`
