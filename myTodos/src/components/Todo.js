import React from 'react'
import {BsTrashFill} from 'react-icons/bs'
import {MdModeEdit} from 'react-icons/md'



function Todo(props) {
    return (
        <div className={`todo ${props.isComplete ? 'complete' : null} `} >
            <p onClick={props.completeHandler}>{props.text}</p>
            <div>
                <button onClick={props.editHandler} > <MdModeEdit/> </button>
                <button onClick={props.removeHandler}> <BsTrashFill/> </button>
            </div>

        </div>
    )
}

export default Todo;
