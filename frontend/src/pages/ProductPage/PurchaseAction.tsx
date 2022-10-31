export const CLOSE_MODAL = "SELECT_PRODUCT";
export const OPEN_MODAL = "OPEN_MODAL";
export const SELECT_WEIGHT = "SELECT_WEIGHT";
export const SELECT_NUMBER_OF_ITEM = "SELECT_NUMBER_OF_ITEM";
export const SELECT_WANNA_PAVE = "SELECT_WANNA_PAVE";


export const closeModalAction = (data: any) => {
    console.log("Close Modal");
    return {
        type: CLOSE_MODAL,
        payload: {
            ...data,
            open_modal: false,
        },    
    }
}

export const openModalAction = (data: any) => {
    return {
        type: OPEN_MODAL,   
        payload: {
            ...data,
            open_modal: true,
        },
    }
}

export const selectWeight = (data: any, num: number) => {
    return {
        type: SELECT_WEIGHT,
        payload: {
            ...data,
            select_item_info: {
                ...data.select_item_info,
                item_weight: num
            }
        }
    }
}

export const selectNumberOfItem = (data: any, num: number) => {
    return {
        type: SELECT_WEIGHT,
        payload: {
            ...data,
            select_item_info: {
                ...data.select_item_info,
                number_of_item: num
            }
        }
    }
}

export const selectWannaPave = (data: any, num: number) => {
    return {
        type: SELECT_WEIGHT,
        payload: {
            ...data,
            select_item_info: {
                ...data.select_item_info,
                wanna_pave: num
            }
        }
    }
}