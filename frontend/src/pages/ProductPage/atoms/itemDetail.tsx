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
  height: 2px;
  background-color: #fb6159;
`


export const ImageBox = styled.img`
  /* max-width: calc(625px - 16px - 16px); */
  object-fit: contain;
  width: 100%;
  /* width: calc(100vw - 32px); */
  margin: 8px 0;
`

export const ItemReviewTitle = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: 600;
  color: #272727;
`

export const ItemReviewButton = styled.div`
  width: 88px;
  height: 38px;
  border-radius: 8px;
  background-color: #f5f5f5;
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 500;
  color: #444444;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemReviewStar = styled.img`
  width: 20px;
  height: 20.7px;
  object-fit: contain;
`

export const ItemReviewScore = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 500;
  color: #939393;
`

export const SepLine = styled.div`
  height: 1px;
  background-color: #efefef;
`

export const ReviewerPhoto = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
`

export const ReviewerNickname = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: bold;
  color: #444444;
`

export const EachRateStar = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 1px;
`

export const EachRateStarScore = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 600;
  color: #6b6b6b;
`


export const ReviewContent = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  line-height: 22px;
  color: #6b6b6b;
  width: calc((100vw - 16px - 16px) - 88px - 16px);
  max-height: 66px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ReviewPhoto = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 12px;
  object-fit: cover;
`

export const ContentDate = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  color: #b5b5b5;
`

export const QuestionNickname = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: bold;
  color: #444444;
`

export const QuestionUnansweredButton = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 15px;
  background-color: #c3c3c3;

  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const QuestionAnsweredButton = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 15px;
  background-color: rgba(251, 97, 89, 0.1);

  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: 600;
  color: #fb6159;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const QuestionLockIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`


export const QuestionContent = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  color: #6b6b6b;

  width: calc((100vw - 16px - 16px) - 88px - 16px);
  max-height: 66px;
  overflow: hidden;
  text-overflow: ellipsis;
`