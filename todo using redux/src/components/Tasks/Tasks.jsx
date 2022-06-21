import React, { useEffect } from "react";
import styles from "./tasks.module.css";
import data from "../../data/tasks.json";
import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../redux/action";
const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addData(data));
  }, []);
  const todoData = useSelector((store) => store.todo);
  console.log('todoData:', todoData)
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {todoData.map((ele, ind) => (
          <Task props={ele} key={ele.id} />
        ))}
      </ul>
      {todoData.length == 0 ? (
        <div data-testid="tasks-empty" className={styles.empty}>
          {/* Show when No Tasks are present */}
          Please Add Some Thing
        </div>
      ) : null}
    </>
  );
};

export default Tasks;
