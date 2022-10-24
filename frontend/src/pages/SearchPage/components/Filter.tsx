import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { SearchHistoryType, SearchHistoryTypeList } from "../SearchConstants";
import { json } from "stream/consumers";
import { SearchDeleteAction } from "../SearchActions";
import {BottomImg, WonSpan,FlowSpan,FilterBoxSpan,BottomBox,FilterBox,FilterButtonApplyBox,FilterButtonApplySpan,FilterButtonResetBox,FilterButtonResetSpan,FilterCategoryBox,FilterCategoryBoxSpan,FilterLabelBox,FilterLabelBoxSpan,FilterPriceBox,FilterPriceInput,FilterPriceWonLabel,FilterTitleBox,FilterpriceBoxInner} from "../atoms/FilterItem"
import MultiRangeSlider from "./MultiRangeSlider"


export const FilterComponent = () => {

    
    return(
        <FilterBox>
            <FilterTitleBox>
                <FilterBoxSpan>
                    상세 필터
                </FilterBoxSpan>
               {/* x이미지 */}
            </FilterTitleBox>
            <div>
                <FilterLabelBox>
                    <FilterLabelBoxSpan>
                        카테고리
                    </FilterLabelBoxSpan>
                </FilterLabelBox>
            </div>


            <div style={{display:"flex",width:"359px",flexWrap:"wrap"}}>
                <FilterCategoryBox>
                    <FilterCategoryBoxSpan>
                        전체
                    </FilterCategoryBoxSpan>
                </FilterCategoryBox>
                <FilterCategoryBox style={{marginLeft:"6px"}}>
                    <FilterCategoryBoxSpan>
                        BEST
                    </FilterCategoryBoxSpan>
                </FilterCategoryBox>
                <FilterCategoryBox>
                    <FilterCategoryBoxSpan>
                        할인중                     
                    </FilterCategoryBoxSpan>
                </FilterCategoryBox>
                <FilterCategoryBox style={{marginLeft:"6px"}}>
                    <FilterCategoryBoxSpan>
                        제철과일
                    </FilterCategoryBoxSpan>
                </FilterCategoryBox>
                <FilterCategoryBox>
                    <FilterCategoryBoxSpan>
                        채소
                    </FilterCategoryBoxSpan>
                </FilterCategoryBox>
                <FilterCategoryBox style={{marginLeft:"6px"}}>
                    <FilterCategoryBoxSpan>
                        무농약
                    </FilterCategoryBoxSpan>
                </FilterCategoryBox>
            </div>
            <div>
                <FilterLabelBox>
                    <FilterLabelBoxSpan>
                        가격
                    </FilterLabelBoxSpan>
                    <div style={{width:"359px",height:"auto", display:"flex"}}>
                        <FilterPriceBox>
                            <FilterpriceBoxInner>
                                <FilterPriceInput></FilterPriceInput>
                                <WonSpan>
                                    원
                                </WonSpan>
                            </FilterpriceBoxInner>
                        </FilterPriceBox>
                        <FlowSpan>
                            ~
                        </FlowSpan>
                        <FilterPriceBox>
                            <FilterpriceBoxInner>
                                <FilterPriceInput></FilterPriceInput>
                                <WonSpan>
                                    원
                                </WonSpan>
                            </FilterpriceBoxInner>
                        </FilterPriceBox>
                    </div>
                </FilterLabelBox>
            </div>

            <div style={{display:"flex",backgroundColor:"#efefef", width:"343px", height: "1px", marginTop:"24px",marginBottom:"24px"}}>
                <span></span>
            </div>
            <div style={{ width:"359px",height:"15px"}}>
                <MultiRangeSlider min={0} max={500000} />
            </div>
            <div style={{display:"flex", width:"375px",height:"auto",marginTop:"50px"}}>
                <FilterButtonResetBox>
                    {/* Resetimg */}
                    <FilterButtonResetSpan>
                        초기화
                    </FilterButtonResetSpan>
                </FilterButtonResetBox>
                <FilterButtonApplyBox>
                    <FilterButtonApplySpan>
                        적용하기
                    </FilterButtonApplySpan>
                </FilterButtonApplyBox>
            </div>

            <BottomBox>
                <BottomImg></BottomImg>
            </BottomBox>
        </FilterBox>
        
    )
}

