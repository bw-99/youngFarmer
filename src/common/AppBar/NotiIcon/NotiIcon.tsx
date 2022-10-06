import styled from "styled-components";
import alarm from "../../../assets/images/alarm@3x.png";

const AppBarIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 16px 8px 16px 8px;
  src: ${(props:any) => props.src}
`

export const NotiComponent = () => {
    return (
        <AppBarIcon src={alarm} alt="" />
    );
}