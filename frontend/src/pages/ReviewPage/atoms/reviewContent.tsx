import styled from "styled-components";

export const ReveiwContent = styled.textarea`
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  line-height: 26px;
  color: #444444;
  resize: none;
  border: none;
  outline: none;
  .scroll::-webkit-scrollbar {
    display: block;
  }
  width: calc(100vw - 32px);
  max-width: calc(625px - 32px);
  margin: 0px 16px 0 16px;
`

export const ReviewSepLine = styled.div`
  /* width: 343px; */
  flex :1;
  height: 1px;
  background-color: #efefef;
`