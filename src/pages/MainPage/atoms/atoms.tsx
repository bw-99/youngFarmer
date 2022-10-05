import styled from "styled-components"

export const AppBar = styled.div`
  height: 56px;
  display: flex;
  justify-content: flex-end;
`

export const AppBarIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 16px 8px 16px 8px;
  src: ${(props:any) => props.src}
`

export const TopGradationBox = styled.div`
    height: 310px;
    margin: 0 0 150px;
    padding: 0 0 51px;
    background-image: linear-gradient(to bottom, #fdeae6, #fdeae6 63%, rgba(253, 234, 230, 0.73) 80%, rgba(253, 234, 230, 0));
`

export const DiscountBox = styled.div`
  width: 94px;
  height: 28px;
  border-radius: 4px;
  background-color: rgb(251, 97, 89, 0.15);
  margin: 20px 0px 14px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DiscountText = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 13px;
    font-weight: 600;
    color: #fb6159;
`

export const MainTextLight = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  color: #272727;
  line-height: 1.5;
`


export const MainTextBold = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
  color: #272727;
  line-height: 1.5;
`

export const DiscountPeriod = styled.div`
  opacity: 0.8;
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 500;
  color: #444444;
  margin: 8px 0px 0px 0px;
`

//! 이거 투명도 왜이러냐 ㅅㅂ
export const DiscountImageBox = styled.img`
  height: 287px;
  width: 100vw;
  opacity: 1.0;
`

export const CategoryBox = styled.div`
  padding: 26px 16px 38px 16px;
  display: flex;
  overflow: auto;
  scrollbar-width: none;
`

export const CategoryIconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`



export const CategoryIcon = styled.img`
    width: 34px;
    height: 34px;
    padding: 13px;
    background-color: #efefef;
    border-radius: 50%;

    object-fit: contain;
    src: ${(props:any) => props.src}
`

export const CategoryText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #272727;
  margin-top: 8px;
`

export const CategoryBottomLine = styled.div`
  height: 1px;
  background-color: #efefef;
`

// recommendRightArrow