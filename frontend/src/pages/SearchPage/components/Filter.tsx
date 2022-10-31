import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { SearchHistoryType, SearchHistoryTypeList } from "../SearchConstants";
import { json } from "stream/consumers";
import { SearchDeleteAction } from "../SearchActions";
import {BottomImg, WonSpan,FlowSpan,FilterBoxSpan,BottomBox,FilterBox,FilterButtonApplyBox,FilterButtonApplySpan,FilterButtonResetBox,FilterButtonResetSpan,FilterCategoryBox,FilterCategoryBoxSpan,FilterLabelBox,FilterLabelBoxSpan,FilterPriceBox,FilterPriceInput,FilterPriceWonLabel,FilterTitleBox,FilterpriceBoxInner} from "../atoms/FilterItem"
import MultiRangeSlider from "./MultiRangeSlider"
import { SEARCH_FILTER } from "../../../reducers/SearchReducer";


export const FilterComponent = () => {
    // const [filter, setFilter] = useState<SEARCH_FILTER>({
    //     entire: false,
    //     best: false,
    //     discount:false,
    //     ontimeFruit: false,
    //     vegatable: false,
    //     nonPesticide: false
    // });
    const [entire, setEntire] = useState(false);
    const [best, setBest] = useState(false);
    const [discount, setDiscount] = useState(false);
    const [ontimeFruit, setOntimeFruit] = useState(false);
    const [vegatable, setVegatable] = useState(false);
    const [nonPesticide, setNonPesticide] = useState(false);


    const filterList =[
        {
            title: "전체",
            isActive: entire,
            onclick: () => {
                setEntire(!entire);
            }
        },
        {   
            title: "BEST",
            isActive: best,
            onclick: () => {
                setBest(!best);
            }
        },
        {   
            title: "할인중",
            isActive: discount,
            onclick: () => {
                setDiscount(!discount);
            }
        },
        {   
            title: "제철과일",
            isActive: ontimeFruit,
            onclick: () => {
                setOntimeFruit(!ontimeFruit);
            }
        },
        {   
            title: "채소",
            isActive: vegatable,
            onclick: () => {
                setVegatable(!vegatable);
            }
        },
        {   
            title: "무농약",
            isActive: nonPesticide,
            onclick: () => {
                setNonPesticide(!nonPesticide);
            }
        }
    ]


    return(
        <FilterBox onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            }}>
            <FilterTitleBox  style={{marginTop: "12px"}}>
                <FilterBoxSpan>
                    상세 필터
                </FilterBoxSpan>
               {/* x이미지 */}
            </FilterTitleBox>

            <FilterLabelBox style={{marginTop:"24px", marginBottom: "16px"}}>
                <FilterLabelBoxSpan>
                    카테고리
                </FilterLabelBoxSpan>
            </FilterLabelBox>


            <div style={{display:"flex",flexWrap:"wrap"}}>
                {
                    filterList.map((value) => {
                        return(
                            <FilterCategoryBox 
                            style=
                            
                            {{
                                border:  value.isActive ? "solid 1px #fb6159": "solid 1px #f5f5f5",
                                backgroundColor: value.isActive ? "#ffffff" : "#f5f5f5"}}
                            onClick={()=>{
                                value.onclick();
                            }}>
                                <FilterCategoryBoxSpan>
                                    {value.title}
                                </FilterCategoryBoxSpan>
                            </FilterCategoryBox>
                        )
                    })
                }
            </div>

            <FilterLabelBox style={{marginTop:"24px", marginBottom: "16px"}}>
                <FilterLabelBoxSpan>
                    가격
                </FilterLabelBoxSpan>
            </FilterLabelBox>

            <div style={{height:"auto", display:"flex",flexWrap:"wrap", alignItems:"center"}}>
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

            <div style={{display:"flex",backgroundColor:"#efefef",  height: "1px", marginTop:"24px",marginBottom:"24px"}}>
                <span></span>
            </div>
            <div style={{ height:"15px"}}>
                <MultiRangeSlider min={0} max={500000} />
            </div>
            <div style={{display:"flex",height:"auto",marginTop:"50px"}}>
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

        </FilterBox>
        
    )
}


const FilterBoxComp = () => {
    return (
        <></>
    )   
}