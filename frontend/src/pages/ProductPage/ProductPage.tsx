import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { AppFrame } from "../../App";


import { AppBarComponentNoBack, AppBarComponentProduct, AppBarComponentSearch } from "../../common/AppBar/AppBar";



import { BottomBarComp } from "./components/BottomBar";
import { ItemDetailComp } from "./components/itemDetail";
import { ItemInfoComp } from "./components/itemInfo";
import { TopImageComp } from "./components/topImage";
import { closeModalAction } from "./PurchaseAction"
/*import { PaymentPageComp } from "./components/PaymentPage"*/

import { useDispatch, useSelector } from "react-redux";
import { GetProductInfo } from "./ProductAction";
import { ProductDataType } from "../../reducers/ProductReducer";
import { RootState } from "../../reducers";
import { PurchaseComp } from "./components/purchase";

function ProductPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const selector: ProductDataType = useSelector((state:RootState) =>
        state.ProductInfoReducer!.productInfo
    );  

    const modalselector: any = useSelector((state: RootState) =>
        state.PurchaseReducer.purchaseInfo
    );

    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        dispatch(closeModalAction(modalselector));
        dispatch(GetProductInfo(params.productId));
    }, [])

    useEffect(() => {
        if (modalselector) {
            setOpen(modalselector.open_modal);
        }
    }, [modalselector.open_modal]);

    if (selector && selector.product_id == Number(params.productId)) {
        return (
            <AppFrame>
                {/*<PaymentPageComp />*/}
                <AppBarComponentProduct />
                <TopImageComp />
                <ItemInfoComp />
                <ItemDetailComp />
                {
                    isOpen  ? <PurchaseComp /> : <></>
                }
                <BottomBarComp product_id={selector.product_id} />
                    {/* <BottomNavigationBar /> */}
            </AppFrame>
        );
    }
    else{
        return (
            <AppFrame>
                {/*<PaymentPageComp />*/}
            </AppFrame>
        )
    }   

    
}

export default ProductPage;