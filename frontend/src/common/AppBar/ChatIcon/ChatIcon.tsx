import styled from "styled-components";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ChatPageIconOff from "../../../assets/images/btn-tabbar-chat-off@3x.png";
import { StoreDataType, StoreProductDataType } from "../../../pages/StorePage/StoreType";
import { getDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../..";
import { RootState } from "../../../reducers";
import { MyPageDataType } from "../../../reducers/MypageReducer";

const AppBarIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 16px 16px 16px 8px;
  src: ${(props:any) => props.src};
`


export const ChatIconComponent = (props: StoreProductDataType) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [storeInfo, setStoreInfo] = useState<StoreProductDataType>({
      background_photo: location.state.props.background_photo,
      category: location.state.props.category,
      description: location.state.props.description,
      name: location.state.props.name,
      photo: location.state.props.photo,
      store_id: location.state.props.store_id,
      product_list: location.state.props.product_list
  });

  const userInfo: MyPageDataType = useSelector((state: RootState) =>  
      state.ProfileReducer!.mypageInfo
  );

  useEffect(() => {
      if(userInfo) {
          makeChatDatebase();
      }
  }, [userInfo]);

  const makeChatDatebase = async () => {
      //check whether the group(chats in firestore) exists, if not create
      const combinedId = storeInfo!.store_id + userInfo.uid;

      try {
          const res = await getDoc(doc(db, "chat", combinedId));

          if (!res.exists()) {
              //create a chat in chats collection
              await setDoc(doc(db, "chat", combinedId), { messages: [] });

              //create user chat
              const userChatRes = await getDoc(doc(db, "userChat", userInfo.uid));
              if (!userChatRes.exists()) {
                  await setDoc(doc(db, "userChat", userInfo.uid), {
                      [combinedId + ".userInfo"]: {
                          uid: storeInfo?.store_id,
                          displayName: storeInfo?.name,
                          photoURL: storeInfo?.photo,
                      },
                      [combinedId + ".date"]: serverTimestamp(),
                  });
              }
          }
      } catch (err) { }
  };
    
    return (
        <Link to={"/chat2"} state={{ props: props }} >
            <AppBarIcon src={ChatPageIconOff}  />
      </Link>
    );
}

export const ChatWhiteIconComponent = (props: StoreProductDataType) => {
  return (
      <Link to={"/chat2"} state={{ props: props }}>
          <AppBarIcon src={ChatPageIconOff} alt="" />
    </Link>
  );
}