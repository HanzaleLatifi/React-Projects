import React,{useState} from 'react'
import Form from './Form';

function OverView({expense , income , addTransaction}) {
    const [isShowForm, setIsShowForm] = useState(false);
    return (
        <div className='overView'>
            <div className='balance'>Balance:{income-expense}</div>
            <div className='inc-exp-container' >
                <span className="income" >Income: {income}</span>
                <span className='expense'>Expense: {expense}</span>
            </div>
            <button className='newTrans' onClick={()=>setIsShowForm(!isShowForm)} >New Transaction</button>   
            {isShowForm && <Form addTransaction={addTransaction}/>}  
        </div>
        
    )
}

export default OverView
