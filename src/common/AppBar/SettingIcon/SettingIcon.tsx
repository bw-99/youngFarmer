import styled from "styled-components";
import setting from "../../../assets/images/btn-dots-three@3x.png";

const AppBarIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 16px 16px 16px 8px;
  src: ${(props:any) => props.src}
`

export const SettingComponent = () => {
    return (
        <AppBarIcon src={setting} alt="" />
    );
}