export const SAVE_ALL_ORDER_LIST = "SAVE_ALL_ORDER_LIST";

export const saveAllOrderList = (payload: any) => {
    return {
        type: SAVE_ALL_ORDER_LIST,
        payload: payload
    }
}

export const GET_ALL_ORDER_LIST = "GET_ALL_ORDER_LIST";
export const GET_READY_ORDER_LIST = "GET_READY_ORDER_LIST";
export const GET_ON_DELIVER_ORDER_LIST = "GET_ON_DELIVER_ORDER_LIST";
export const GET_DELIVER_COMPLETE_ORDER_LIST = "GET_DELIVER_COMPLETE_ORDER_LIST";
export const GET_REFUND_ORDER_LIST = "GET_REFUND_ORDER_LIST";

export const getAllOrderList = () => {
    console.log("getAllOrderList");
    
    return {
        type: GET_ALL_ORDER_LIST
    }
}

export const getReadyOrderList = () => {
    console.log("getReadyOrderList");

    return {
        type: GET_READY_ORDER_LIST
    }
}

export const getOnDeliverOrderList = () => {
    return {
        type: GET_ON_DELIVER_ORDER_LIST
    }
}

export const getDeliverCompleteOrderList = () => {
    return {
        type: GET_DELIVER_COMPLETE_ORDER_LIST
    }
}

export const getRefuncOrderList = () => {
    return {
        type: GET_REFUND_ORDER_LIST
    }
}
