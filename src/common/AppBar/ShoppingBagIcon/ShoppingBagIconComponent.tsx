import styled from "styled-components";
import shoppingBag from "../../../assets/images/shopping_bag@3x.png";

const AppBarIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 16px 16px 16px 8px;
  src: ${(props:any) => props.src}
`


export const ShoppingBagIconComponent = () => {
    return (
        <AppBarIcon src={shoppingBag} alt="" />
    );
}