import React from 'react';

const Task  = ({id,txt,remove, disabled}) => {
    return(
        <div className='cardTask' key={id}>
            <input type="checkbox" onChange={disabled} className="checkbox"/>
            <p>{txt}</p>
            <div className="btnBlock">
                <button className="btn" onClick={remove}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )
};
export default Task;