import React, { useEffect, useState } from "react";
import { AddPhotoAtom, AddPhotoDefaultAtom, UploadPhotoAtom, UploadPhotoDeleteAtom, UploadPhotoDeleteIconAtom, UploadPhotoShadowAtom } from "../atoms/reviewPhoto"
import deleteIcon from "../../../assets/images/btn-close-16-px@3x.webp";
import gallery from "../../../assets/images/icon-gallery-20-px@3x.webp";


type ReviewPhotoParam = {
    reviewPhotos: FileList | null,
    setReviewPhotos: any
}

export const ReviewPhotoComp = ({reviewPhotos, setReviewPhotos}:ReviewPhotoParam) => {
    let fileInput:any = React.createRef();

    const [dummy, setDummy] = useState<any>();

    const deletePhoto = (photo:any) => {
        if(reviewPhotos) {
            let originPhotoList = [];
            for (let index = 0; index < reviewPhotos!.length; index++) {
                const element = reviewPhotos[index];
                if(element!.name != photo.alt) {
                    originPhotoList.push(element);
                }
            }
            setReviewPhotos(originPhotoList);
        }
    }

    useEffect(() => {
        if(reviewPhotos) {
            let photoList = [];
            for (let index = 0; index < reviewPhotos!.length; index++) {
                const element = reviewPhotos[index];
                photoList.push({
                    src: URL.createObjectURL(element!),
                    alt: element!.name,
                    ...element
                })
                
            }
            setDummy(photoList);
        }
    }, [reviewPhotos])
    
    return (
        <div style={{
            marginTop:"20px",
            padding: "0 16px",
            display:"flex",
            flexWrap: "nowrap",
            overflow: "auto"
        }}>
            <AddPhotoAtom 
            style={{marginRight: "6px"}}
            onClick={()=>{
                fileInput.current.click();
            }}>
                <AddPhotoDefaultAtom src={gallery}/>
                <input 
                    type='file' 
                    ref={fileInput}
                    accept='image/jpg,impge/png,image/jpeg,image/gif' 
                    name='review_photo' 
                    style={{display:"none"}}
                    onChange={(e) => {
                        console.log(e.target.files);
                        setReviewPhotos(e.target.files);
                    }}
                        multiple>
                </input>
            </AddPhotoAtom>

            {
                dummy?
                dummy.map((photo:any) => {
                    return (
                        <div style={{
                            margin: "0 6px",
                            position: "relative"}}>
                            <UploadPhotoAtom src={photo.src} alt={photo.alt} />
                            <UploadPhotoShadowAtom />
                            <UploadPhotoDeleteAtom onClick={()=>{
                                deletePhoto(photo);
                            }}>
                                <UploadPhotoDeleteIconAtom src={deleteIcon}/>
                            </UploadPhotoDeleteAtom>

                        </div>
                    )
                })
                :
                <></>
            }

        </div>
    )
}