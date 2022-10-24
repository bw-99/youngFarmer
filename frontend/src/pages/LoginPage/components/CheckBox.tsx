import checkIcon from "../../../assets/images/btn-checkbox-1@3x.png";
import checkNotIcon from "../../../assets/images/btn-checkbox-2@3x.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const CheckBoxIcon = () => {
    const [ischecked, setIschecked] = useState(false);
    // position: absolute;
    // top: 0px;
    // right: 0px;
    // z-index: 20;
    return (
        <div>
            style={{ padding: ischecked ? "3px" : "10px" }}
            width={ischecked ? "20px" : "16px"}
            height={ischecked ? "20px" : "16px"}
            onClick={() => { setIschecked(!ischecked); } }
            src={ischecked ? checkIcon : checkNotIcon}
        </div>

    );
}