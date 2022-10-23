import styled from "styled-components";

export const ProfilePhotoAtom = styled.div`
    position: relative;
    width: 84px;
    height: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProfilePhoto = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`
export const ProfilePhotoChangeIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  /* background-color: #fb6159; */
`

export const ProfilePhotoChange = styled.div`
  width: 32px;
  height: 32px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px #fb6159;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;
  right: 0;
`

export const ProfileNickname = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  color: #272727;
`


export const ProfileNicknameSub = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #6b6b6b;
`

export const ProfileEmail = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #979797;
`


export const ProfileFuncMenu = styled.div`
  height: 80px;
  border-radius: 12px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const ProfileFuncMenuIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`

export const ProfileFuncMenuText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: #272727;
`

export const ProfileFuncMenuDivider = styled.div`
  width: 1px;
  height: 30px;
  background-color: #dfdfdf;
`