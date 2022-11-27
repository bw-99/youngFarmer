import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { cancelFollwingStore, setFollwingStore } from "../../pages/MyPage/MyAction";
import { RootState } from "../../reducers";
import { FirebaseAuth } from './../../index';


 const FarmerFollowButton = styled.div`
  width: 66px;
  height: 36px;
  border-radius: 18px;
  background-color: #fb6159;
  border: solid 1px #fb6159;
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items:center;
  justify-content: center;
`
 const FarmerAlreadyFollowedButton = styled.div`
  width: 66px;
  height: 36px;
  border-radius: 18px;
  border: solid 1px #fb6159;
  background-color: #ffffff;
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #fb6159;
  display: flex;
  align-items:center;
  justify-content: center;
`

type StoreIdParam = {
    store_id: number
}


export const FollowButton = ({store_id}:StoreIdParam) => {
    const dispatch = useDispatch();
    
    const followSelector: number[] = useSelector((state:RootState) =>
        state.StoreFollowReducer.store_list
    ); 

    useEffect(() => {
        setIsFollowed(followSelector.includes(store_id));
    }, [followSelector])

    const [isFollowed, setIsFollowed] = useState(false);

    return (
        <>
        {
            isFollowed?
            <FarmerAlreadyFollowedButton onClick={(e) => {
                e.stopPropagation();
                dispatch(cancelFollwingStore(FirebaseAuth.currentUser!.uid!, store_id));
            }}> 팔로우 </FarmerAlreadyFollowedButton>
            :
            <FarmerFollowButton onClick={(e) => {
                e.stopPropagation();
                dispatch(setFollwingStore(FirebaseAuth.currentUser!.uid!, store_id));
            }}> 팔로우 </FarmerFollowButton>
        }
        </>
        
    )
}