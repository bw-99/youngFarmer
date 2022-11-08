import { PurchaseDataType } from "../../reducers/PurchaseReducer"

export const CLOSE_MODAL = "SELECT_PRODUCT";
export const OPEN_MODAL = "OPEN_MODAL";
export const SELECT_WEIGHT = "SELECT_WEIGHT";
export const SELECT_NUMBER_OF_ITEM = "SELECT_NUMBER_OF_ITEM";
export const SELECT_WANNA_PAVE = "SELECT_WANNA_PAVE";


export const closeModalAction = (data: PurchaseDataType) => {
    console.log("Close Modal");
    return {
        type: CLOSE_MODAL,
        payload: {
            ...data,
            open_modal: false,
        },    
    }
}

export const openModalAction = (data: PurchaseDataType) => {
    return {
        type: OPEN_MODAL,   
        payload: {
            ...data,
            open_modal: true,
        },
    }
}

export const selectWeight = (data: PurchaseDataType, str: string | null) => {
    let tem = data.select_num;
    if (!str && data.select_item_info!.item_weight) {
        tem--;
    } else if (str && !data.select_item_info!.item_weight) {
        tem++;
    }

    return {
        type: SELECT_WEIGHT,
        payload: {
            ...data,
            select_num: tem,
            select_item_info: {
                ...data.select_item_info,
                item_weight: str
            }
        }
    }
}

export const selectNumberOfItem = (data: PurchaseDataType, str: string | null) => {
    let tem = data.select_num;
    if (!str && data.select_item_info!.number_of_item) {
        tem--;
    } else if (str && !data.select_item_info!.number_of_item){
        tem++;
    }

    return {
        type: SELECT_WEIGHT,
        payload: {
            ...data,
            select_num: tem,
            select_item_info: {
                ...data.select_item_info,
                number_of_item: str
            }
        }
    }
}

export const selectWannaPave = (data: PurchaseDataType, str: string | null) => {
    let tem = data.select_num;
    if (!str && data.select_item_info!.wanna_pave) {
        tem--;
    } else if (str && !data.select_item_info!.wanna_pave) {
        tem++;
    }

    return {
        type: SELECT_WEIGHT,
        payload: {
            ...data,
            select_num: tem,
            select_item_info: {
                ...data.select_item_info,
                wanna_pave: str
            }
        }
    }
}