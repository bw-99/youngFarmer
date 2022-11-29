import { Timestamp } from 'firebase/firestore';

export type ChatBoxType = {
    profile_list: ChatProfileType[],
    last_chat: string,
    id: string,
}

export type ChatProfileType = {
    uid: string,
    photo: string
}

export type ChatBoxSrcType = {
    uid_list: string[],
    store_id: number,
    messages: string[],
    id: string
}

export type ChatDataType = {
    uid: string,
    chat: string,
    time_created: Timestamp,
    profile: ChatProfileType,
    from_me: boolean
}