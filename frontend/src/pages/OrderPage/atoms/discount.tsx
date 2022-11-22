import styled from "styled-components";

export const DiscountTitleAtom = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: bold;
  color: #272727;
`

export const DiscountContentLabel = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #414141;
`

export const DiscountContentDropdown = styled.select`
  border-radius: 8px;
  height: 42px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
  flex: 1;
  width: calc(100vw - 84px - 16px);
  max-width: calc(625px - 84px - 16px);
`

export const DiscountPointInput = styled.input`
  height: 42px;
  border-radius: 8px;
  border: solid 1px #dfdfdf;
  background-color: #ffffff;
  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }    

  font-family: AppleSDGothicNeo;
  font-size: 14px;
  line-height: 16px;
  color: #b1b1b1;
  width: calc(100vw - 96px - 140px);
  max-width: calc(625px - 96px - 140px);
`


export const DiscountPointInputLabel = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  color: #272727;

`

export const DiscountPoint = styled.button`
  width: 72px;
  height: 42px;
  border-radius: 8px;
  background-color: #efefef;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #6b6b6b;
`