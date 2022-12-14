import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchDeleteAction, SearchFilterCloseAction } from "../SearchActions";
import {BottomImg, WonSpan,FlowSpan,FilterBoxSpan,BottomBox,FilterBox,FilterButtonApplyBox,FilterButtonApplySpan,FilterButtonResetBox,FilterButtonResetSpan,FilterCategoryBox,FilterCategoryBoxSpan,FilterLabelBox,FilterLabelBoxSpan,FilterPriceBox,FilterPriceInput,FilterPriceWonLabel,FilterTitleBox,FilterpriceBoxInner} from "../atoms/FilterItem"
import MultiRangeSlider from "./MultiRangeSlider"
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
        //     title: "??????",
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
            title: "?????????",
            isActive: sale,
            onclick: () => {
                setSale(!sale);
            }
        },
        {   
            title: "????????????",
            isActive: ontime,
            onclick: () => {
                setOntime(!ontime);
            }
        },
        {   
            title: "??????",
            isActive: vegatable,
            onclick: () => {
                setVegatable(!vegatable);
            }
        },
        {   
            title: "?????????",
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
                    ?????? ??????
                </FilterBoxSpan>
               {/* x????????? */}
            </FilterTitleBox>

            <FilterLabelBox style={{marginTop:"24px", marginBottom: "16px"}}>
                <FilterLabelBoxSpan>
                    ????????????
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
                    ??????
                </FilterLabelBoxSpan>
            </FilterLabelBox>

            <div style={{height:"auto", display:"flex",flexWrap:"wrap", alignItems:"center"}}>
                <FilterPriceBox style={{marginLeft: "6px"}}>
                    <FilterpriceBoxInner>
                        <FilterPriceInput  placeholder="????????????" disabled={true} value={minPrice.toLocaleString("kr")}></FilterPriceInput>
                        <WonSpan>
                            ???
                        </WonSpan>
                    </FilterpriceBoxInner>
                </FilterPriceBox>
                <FlowSpan>
                    ~
                </FlowSpan>
                <FilterPriceBox>
                    <FilterpriceBoxInner>
                        <FilterPriceInput placeholder="????????????" disabled={true} value={maxPrice.toLocaleString("kr")}></FilterPriceInput>
                        <WonSpan>
                            ???
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
                        ?????????
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
                        ????????????
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