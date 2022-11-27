import { ProductDataType } from "../../reducers/ProductReducer"

export type StoreDataType = {
    background_photo:string,
    category: string[],
    description: string,
    name: string,
    photo: string,
    store_id: number,
}


export type StoreProductDataType = {
    background_photo:string,
    category: string[],
    description: string,
    name: string,
    photo: string,
    store_id: number,
    product_list: ProductDataType[]
}