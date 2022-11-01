import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";


import { collection, doc, setDoc, getDoc, query, orderBy, limit, getDocs, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";

function PurchasePage(props: any) {
    return (
        <div> 안녕하세요.</div>
        );    
}

export default PurchasePage;