
import categoryBest from "../../assets/images/category-best@3x.webp";
import categoryDiscount from "../../assets/images/category-discount@3x.webp";
import categorySeasonal from "../../assets/images/category-seasonal@3x.webp";
import categoryVegitable from "../../assets/images/category-vegitable@3x.webp";
import categoryHealthy from "../../assets/images/category-healthy@3x.webp";
import styled from "styled-components";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchFilterTryAction } from "../../pages/SearchPage/SearchDertailAction";
import { useNavigate } from "react-router-dom";

const CategoryBox = styled.div`
  padding: 26px 16px 38px 16px;
  display: flex;
  overflow: auto;
  scrollbar-width: none;
`

const CategoryIconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`



const CategoryIcon = styled.img`
max-width: calc(625px - 16px - 16px);
    width: 34px;
    height: 34px;
    padding: 13px;
    background-color: #efefef;
    border-radius: 50%;

    object-fit: contain;
    src: ${(props:any) => props.src};
`

const CategoryText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #272727;
  margin-top: 8px;
`


const CategoryTextBold = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 8px;
  color: #f25672;
`

const CategoryBottomLine = styled.div`
  height: 1px;
  background-color: #efefef;
  margin: 0 16px;
`

export const CategoryComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    return (
        <div>
                <CategoryBox>
                    <CategoryIconBox onClick={() => {
                      let searchFilter = {
                        filter : {
                          is_best: true
                        }
                      }
                      navigate(`/search/ ?searchFilter=${JSON.stringify(searchFilter)}`)
                    }}>
                        <CategoryIcon src={categoryBest}></CategoryIcon>
                        <CategoryText> BEST </CategoryText>
                    </CategoryIconBox>

                    <CategoryIconBox onClick={() => {
                      let searchFilter = {
                        filter : {
                          is_sale: true
                        }
                      }
                      navigate(`/search/ ?searchFilter=${JSON.stringify(searchFilter)}`)
                    }}>   
                        <CategoryIcon src={categoryDiscount}></CategoryIcon>
                        <div style={{display:"flex"}}>
                            <CategoryText> 할인중 </CategoryText>
                            <CategoryTextBold>%</CategoryTextBold>
                        </div>
                    </CategoryIconBox>

                    <CategoryIconBox onClick={() => {
                      let searchFilter = {
                        filter : {
                          is_ontime: true
                        }
                      }
                      navigate(`/search/ ?searchFilter=${JSON.stringify(searchFilter)}`)
                    }}>   
                        <CategoryIcon src={categorySeasonal}></CategoryIcon>
                        <CategoryText> 제철과일 </CategoryText>
                    </CategoryIconBox>

                    <CategoryIconBox onClick={() => {
                      let searchFilter = {
                        filter : {
                          is_vegitable: true
                        }
                      }
                      navigate(`/search/ ?searchFilter=${JSON.stringify(searchFilter)}`)
                    }}>   
                        <CategoryIcon src={categoryVegitable}></CategoryIcon>
                        <CategoryText> 채소 </CategoryText>
                    </CategoryIconBox>

                    <CategoryIconBox onClick={() => {
                      let searchFilter = {
                        filter : {
                          is_nonpesticide: true
                        }
                      }
                      navigate(`/search/ ?searchFilter=${JSON.stringify(searchFilter)}`)
                    }}>   
                        <CategoryIcon src={categoryHealthy}></CategoryIcon>
                        <CategoryText> 무농약 </CategoryText>
                    </CategoryIconBox>
                </CategoryBox>
                <CategoryBottomLine />
            </div>
    );
}