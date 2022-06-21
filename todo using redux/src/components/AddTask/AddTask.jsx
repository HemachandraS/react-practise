import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./addTask.module.css";
import { v4 as uuidv4 } from 'uuid';
import { addTaskData } from "../../redux/action";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair
  
  console.log(uuidv4());
  const dispatch = useDispatch();
  const [data, setData] = useState({id:uuidv4(),text:"",done:false,count:1})
  function fieldHandler(e) { 
    const { name, value } = e.target
    setData({...data,[name]:value,id:uuidv4()})
  }
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={fieldHandler} name="text" />
      <button data-testid="add-task-button" onClick={() => {
        if (data.text == "") { 
          return
        }
        dispatch(addTaskData(data))
      }}>Add Todo</button>
    </div>
  );
};

export default AddTask;
