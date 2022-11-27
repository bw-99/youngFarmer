export const GET_PROFILE = "GET_PROFILE";

export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAIL = "GET_PROFILE_FAIL";
export const GET_PROFILE_LOADING = "GET_PROFILE_LOADING";

export const getProfileAction = (uid:string) => {
    return {
        type: GET_PROFILE,
        payload: uid
    }
}

export const STORE_SAGA = "GET_FOLLWED_STORE";

export const GET_FOLLWED_STORE = "GET_FOLLWED_STORE";
export const GET_FOLLWED_STORE_SUCCESS = "GET_FOLLWED_STORE_SUCCESS";
export const GET_FOLLWED_STORE_FAIL = "GET_FOLLWED_STORE_FAIL";

export const FOLLWING_STORE = "FOLLWING_STORE";
export const FOLLWING_STORE_SUCCESS = "FOLLWING_STORE_SUCCESS";
export const FOLLWING_STORE_FAIL = "FOLLWING_STORE_FAIL";

export const FOLLWING_CANCEL_STORE = "FOLLWING_CANCEL_STORE";
export const FOLLWING_CANCEL_STORE_SUCCESS = "FOLLWING_CANCEL_STORE_SUCCESS";
export const FOLLWING_CANCEL_STORE_FAIL = "FOLLWING_CANCEL_STORE_FAIL";

export const getFollwedStore = (uid: string) => {
    return {
        type: STORE_SAGA,
        payload: {
            type: GET_FOLLWED_STORE,
            payload: {
                uid: uid,
            }
        }

    }
}

export const setFollwingStore = (uid: string, store_id: number) => {
    return {
        type: STORE_SAGA,
        payload: {
            type: FOLLWING_STORE,
            payload: {
                uid: uid,
                store_id: store_id
            }
        }
    }
}

export const cancelFollwingStore = (uid: string, store_id: number) => {
    return {
        type: STORE_SAGA,
        payload: {
            type: FOLLWING_CANCEL_STORE,
            payload: {
                uid: uid,
                store_id: store_id
            }
        }
    }
}