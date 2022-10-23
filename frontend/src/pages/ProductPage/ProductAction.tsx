export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL";
export const GET_PRODUCT_LOADING = "GET_PRODUCT_LOADING";


export const GetProductInfo = (data: any) => {
    console.log("call action" + data);
    
    return {
        type: GET_PRODUCT,
        payload: data
    }
}

