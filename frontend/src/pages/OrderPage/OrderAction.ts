export const SEND_ORDER = "SEND_ORDER";

export const SAVE_IMP_PARAM = "SAVE_IMP_PARAM";

export const saveImpParam = (impParam:any) => {
    return{
        type: SAVE_IMP_PARAM,
        payload: impParam
    }
}