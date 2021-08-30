import React, { useState , useEffect } from 'react'

function Transaction({ transaction , filterTransaction , filteredTransaction }) {

    const [searchInput, setSearchInput] = useState('');

    const searchHandler=(e)=>{
        setSearchInput(e.target.value);
        filterTransaction(e.target.value)

    }
    useEffect(() => {
        filterTransaction(searchInput)
       
    }, [transaction])

    return (
        <div className='transaction-container'>
            {transaction.length > 0 &&

               
                <input type='serach'
                    className='searchBar'
                    placeholder='search transaction ...'
                    value={searchInput}
                    onChange={searchHandler} >
                </input>
               

            }
            { filteredTransaction.length>0 ? filteredTransaction.map(trans => {
                return (
                    
                    <div className='tranaction' style={{ borderRight: trans.type === 'expense' ? '.4rem solid red' : '.4rem solid green' }} key={trans.id} >
                        <p>{trans.desc}</p>
                        <span>{trans.type === 'expense' ? '- ' : '+ '}{trans.amount} $</span>
                    </div>
                    
                )

            }) : <p className='empty' >empty...!</p> }

        </div>
    )
}

export default Transaction
