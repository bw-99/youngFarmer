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


