import React from 'react';

const AddTaskForm = (props) => {
    return (
            <div className="toDo">
                <img className="img" src={props.img} alt="sad"/>
                <input type="text" className="inputTask"  placeholder="Add new task" onChange={props.onChange}/>
                <button className="btnTask"  onClick={props.onClick}><i class="far fa-plus-square"></i>
                   </button>
            </div>
    )
};

export default AddTaskForm;