import styled from "styled-components";


export const AddPhotoAtom = styled.div`
  min-width: 88px;
  width: 88px;
  height: 88px;
  border-radius: 12px;
  border: solid 1px #fb6159;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AddPhotoDefaultAtom = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`

export const DefaultPhotoAtom = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`


export const UploadPhotoAtom = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 12px;
  object-fit: cover;
`


export const UploadPhotoShadowAtom = styled.div`
  width: 88px;
  height: 46px;
  opacity: 0.8;
  background-image: linear-gradient(to bottom, #000000, rgba(0, 0, 0, 0));
  position: absolute;
  border-radius: 12px;
  top: 0px;
`

export const UploadPhotoDeleteIconAtom = styled.img`
  width: 16px;
  height: 16px;
  object-fit: cover;
  
`

export const UploadPhotoDeleteAtom = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 6px;
  right: 6px;
  border-radius: 50%;
`