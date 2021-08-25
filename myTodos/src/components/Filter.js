import React from 'react'

function Filter(props) {

        const selectHandler=(e)=>{
        props.setSelect(e.target.value);
        props.selectHandler(e.target.value);

    }
    return (
        <div className='filterContainer'>
            <select className='filter' value={props.select} onChange={selectHandler}>
                <option value="All">All</option>
                <option value="completed">completed</option>
                <option value="unCompleted">unCompleted</option>
            </select>
            
        </div>
    )
}

export default Filter
