import styled from "styled-components";



export const ItemText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: 800;
  color: #272727;
`
export const ItemCountText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: 800;
  color: #272727;
  margin-bottom: 1px;
  padding-left: 6.5px;
`

export const ItemUnitList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 6.5px 15px 6.5px;
`


export const ItemImage = styled.img`
  width: 165px;
  height: 165px;
  border-radius: 12px;
  object-fit: cover;
`

export const ItemCover = styled.div`
  width: 165px;
  height: 60px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  position: absolute;
  border-radius: 12px;
  z-idnex: 10;
  top: 0px;
  `



export const ItemTextInfoSource = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: 500;
  color: #979797;
  margin-top: 14px;
`

export const ItemTextInfoTitle = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 15px;
  text-overflow: elapsis;
  white-space:nowrap;
  font-weight: 500;
  color: #444444;
  margin: 4px 0 8px 0;
`

export const ItemTextInfoPrice = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 800;
  color: #272727;
`

export const ItemTextInfoPriceDiscount = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: bold;
  color: #fb6159;
  margin-left: 6px;
`

export const ItemOrderShoppingBagButton = styled.div`
  width: 165px;
  height: 38px;
  border-radius: 19px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
`

export const ItemOrderShoppingBagButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`

export const ItemOrderShoppingBagButtonText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  color: #444444;
  font-weight: 400;
  font-style: normal;
  margin-left: 6px;
`

export const ItemLike = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 20;
`