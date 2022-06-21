export const ADDDATA = "ADDDATA";
export const DELETEDATA = "DELETEDATA";
export const ADDTASKDATA = "ADDTASKDATA";
export const ADDTASKDATA1 = "ADDTASKDATA1";


export const addData = (val) => {
    console.log(val)
  return { type: ADDDATA, payload: val };
};
export const deleteData = (val) => {
    console.log(val)
  return { type: DELETEDATA, payload: val };
};
export const addTaskData = (val) => {
    console.log(val)
  return { type: ADDTASKDATA, payload: val };
};
export const addTaskData1 = (val) => {
    console.log(val)
  return { type: ADDTASKDATA1, payload: val };
};
