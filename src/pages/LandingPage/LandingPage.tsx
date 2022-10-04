import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useLocation, useNavigate} from 'react-router-dom';
import {RootState} from "../../reducers";
import {createTask, getMain} from "./LandingActions";
import {taskItem, taskItemList} from "./LandingConstants";


function LandingPage() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const taskRemain: taskItem[] = useSelector((state : RootState) => state.remainTaskReducer.tasks);
    const [createTaskFlag, setCreateTaskFlag] = useState(false);
    const [taskInput, setTaskInput] = useState("");

    const onClickHandler = () => {};
    const onClickRegisterHandler = () => {
        navigate("/register")
    };

    const createTaskOnClickHandler = () => {
        setCreateTaskFlag(!createTaskFlag);

        if (createTaskFlag) {
            dispatch(createTask({
                title: taskInput, isFinished: false} as taskItem));
        }
    }

    const taskInputOnclickHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTaskInput(e.target.value);
    }

    function makeTaskUI(taskRemain : taskItem[]) {
        let taskUiList: JSX.Element[] = [];
        for (let index = 0; index < taskRemain.length; index++) {
            taskUiList.push (<div is-finished={
                taskRemain[index].isFinished
            }> {
                taskRemain[index].title
            }</div>)
        }
        return taskUiList;
    }

    return (<div>
        <h2>2022년 10월 4일</h2>
        <div>
            <span>할 일 {
                taskRemain.length
            }개 남음</span>
        </div>
        <div> {
            makeTaskUI(taskRemain)
        } </div>
        {
        createTaskFlag ? <input type="text" onChange={taskInputOnclickHandler}/> : null
    }
        <button onClick={createTaskOnClickHandler}> {
            createTaskFlag ? "제출하기" : "할 일 추가하기"
        }</button>

    </div>);

}

export default LandingPage;
