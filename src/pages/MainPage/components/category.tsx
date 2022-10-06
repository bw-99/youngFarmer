import { CategoryBox, CategoryIconBox, CategoryIcon, CategoryText, CategoryBottomLine } from "../atoms/atoms";

import categoryBest from "../../../assets/images/category-best@3x.png";
import categoryDiscount from "../../../assets/images/category-discount@3x.png";
import categorySeasonal from "../../../assets/images/category-seasonal@3x.png";
import categoryVegitable from "../../../assets/images/category-vegitable@3x.png";
import categoryHealthy from "../../../assets/images/category-healthy@3x.png";


export const CategoryComponent = () => {
    return (
        <div>
                <CategoryBox>
                    <CategoryIconBox>
                        <CategoryIcon src={categoryBest}></CategoryIcon>
                        <CategoryText> BEST </CategoryText>
                    </CategoryIconBox>

                    <CategoryIconBox>   
                        <CategoryIcon src={categoryDiscount}></CategoryIcon>
                        <CategoryText> 할인중% </CategoryText>
                    </CategoryIconBox>

                    <CategoryIconBox>   
                        <CategoryIcon src={categorySeasonal}></CategoryIcon>
                        <CategoryText> 제철과일 </CategoryText>
                    </CategoryIconBox>

                    <CategoryIconBox>   
                        <CategoryIcon src={categoryVegitable}></CategoryIcon>
                        <CategoryText> 채소 </CategoryText>
                    </CategoryIconBox>

                    <CategoryIconBox>   
                        <CategoryIcon src={categoryHealthy}></CategoryIcon>
                        <CategoryText> 무농약 </CategoryText>
                    </CategoryIconBox>
                </CategoryBox>
                <CategoryBottomLine />
            </div>
    );
}