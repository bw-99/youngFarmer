export const CART_TRY = "CART_TRY";

export const CART_ADD_TRY = "CART_ADD_TRY";
export const CART_ADD_SUCCESS = "CART_ADD_SUCCESS";
export const CART_ADD_FAIL = "CART_ADD_FAIL";

export const CART_CANCEL_TRY = "CART_CANCEL_TRY";
export const CART_CANCEL_SUCCESS = "CART_CANCEL_SUCCESS";
export const CART_CANCEL_FAIL = "CART_CANCEL_FAIL";

export const GET_CART = "GET_CART";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAIL = "GET_CART_FAIL";

export const cartAddAction = (product_id:number, sub_info: any) => {
    return {
        type: CART_TRY,
        payload: {
            type: CART_ADD_TRY,
            product_id: product_id,
            sub_info: sub_info
        }
    };
}

export const cartCancelAction = (product_id:number) => {
    console.log("cart cancel action");

    return {
        type: CART_TRY,
        payload: {
            type: CART_CANCEL_TRY,
            product_id: product_id,
        }
    };
}

export const getCartAction = (uid:string) => {
    console.log("get cart action");
    
    return {
        type: CART_TRY,
        payload: {
            type: GET_CART,
            uid: uid
        }
    }
}