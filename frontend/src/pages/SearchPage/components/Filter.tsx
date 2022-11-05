import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { SearchHistoryType, SearchHistoryTypeList } from "../SearchConstants";
import { json } from "stream/consumers";
import { SearchDeleteAction, SearchFilterCloseAction } from "../SearchActions";
import {BottomImg, WonSpan,FlowSpan,FilterBoxSpan,BottomBox,FilterBox,FilterButtonApplyBox,FilterButtonApplySpan,FilterButtonResetBox,FilterButtonResetSpan,FilterCategoryBox,FilterCategoryBoxSpan,FilterLabelBox,FilterLabelBoxSpan,FilterPriceBox,FilterPriceInput,FilterPriceWonLabel,FilterTitleBox,FilterpriceBoxInner} from "../atoms/FilterItem"
import MultiRangeSlider from "./MultiRangeSlider"
import { SEARCH_FILTER } from "../../../reducers/SearchReducer";
import { searchFilterTryAction } from "../SearchDertailAction";
import { useNavigate, useParams } from "react-router-dom";


export const FilterComponent = () => {
    const params = useParams();
    const navigate = useNavigate();
    // const [filter, setFilter] = useState<SEARCH_FILTER>({
    //     entire: false,
    //     best: false,
    //     discount:false,
    //     ontimeFruit: false,
    //     vegatable: false,
    //     nonPesticide: false
    // });
    const dispatch = useDispatch();

    const [entire, setEntire] = useState(false);
    const [best, setBest] = useState(false);
    const [sale, setSale] = useState(false);
    const [ontime, setOntime] = useState(false);
    const [vegatable, setVegatable] = useState(false);
    const [nonPesticide, setNonPesticide] = useState(false);

    // const [maxLimit, setMaxLimit] = useState(100000);

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);

    const makeFilter = () => {
        let obj:any = {};
        if(best){
            obj["is_best"] = best;
        }
        if(sale){
            obj["is_sale"] = sale;
        }
        if(nonPesticide) {
            obj["is_nonpesticide"] = nonPesticide;
        }
        if(ontime) {
            obj["is_ontime"] =ontime;
        }
        if(vegatable){
            obj["is_vegitable"] = vegatable;
        }
        return obj;
    }

    const makePriceRange = () => {
        return {
            minPrice: minPrice,
            maxPrice: maxPrice
        }
    }


    const filterList =[
        // {
        //     title: "전체",
        //     isActive: entire,
        //     onclick: () => {
        //         setEntire(!entire);
        //     }
        // },
        {   
            title: "BEST",
            isActive: best,
            onclick: () => {
                setBest(!best);
            }
        },
        {   
            title: "할인중",
            isActive: sale,
            onclick: () => {
                setSale(!sale);
            }
        },
        {   
            title: "제철과일",
            isActive: ontime,
            onclick: () => {
                setOntime(!ontime);
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
                <FilterPriceBox style={{marginLeft: "6px"}}>
                    <FilterpriceBoxInner>
                        <FilterPriceInput  placeholder="최소금액" disabled={true} value={minPrice.toLocaleString("kr")}></FilterPriceInput>
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
                        <FilterPriceInput placeholder="최대금액" disabled={true} value={maxPrice.toLocaleString("kr")}></FilterPriceInput>
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
                {/* <h1> {minPrice} </h1> */}
                <MultiRangeSlider minPrice={0} maxPrice={100000} setMinPrice={setMinPrice} setMaxPrice = {setMaxPrice} />
            </div>
            <div style={{display:"flex",height:"auto",marginTop:"50px"}}>
                <FilterButtonResetBox>
                    {/* Resetimg */}
                    <FilterButtonResetSpan>
                        초기화
                    </FilterButtonResetSpan>
                </FilterButtonResetBox>
                <FilterButtonApplyBox onClick={()=> {
                    let filter = makeFilter();
                    let priceRange = makePriceRange();
                    let searchFilter = {
                        filter: filter,
                        priceRange: priceRange
                    }
                    
                    console.log(searchFilter);
                    navigate(`/search/${params.search}?searchFilter=${JSON.stringify(searchFilter)}`)
                    
                    // dispatch(searchFilterTryAction(params.search!, filter, priceRange));
                    dispatch(SearchFilterCloseAction());
                }}>
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