import styled from "styled-components";

export const BottomBoxAtom = styled.div`
  height: 82px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0 -4px 12px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  position: fixed; 
  bottom: 0;
  z-index: 1000;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BottomBoxLikeIcon = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`

export const BottomBoxLikeText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #979797;
`

export const BottomBoxShoppingCart = styled.div`
  width: 144px;
  height: 50px;
  border-radius: 28px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;

  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #6b6b6b;

  display: flex;
  align-items: center;
  justify-content: center;
`


export const BottomBoxBuy = styled.div`
  width: 144px;
  height: 50px;
  border-radius: 28px;
  background-image: linear-gradient(to bottom, #fb6159, #ed3e3e);

  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`