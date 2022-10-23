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