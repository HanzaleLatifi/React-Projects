import React,{useState,useEffect} from 'react'
import OverView from './OverView';
import Transaction from './Transaction';

function ExpenseApp() {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transaction, setTransaction] = useState([]);
    const [filteredTransaction , setFilteredTransaction ]=useState(transaction); //for search filter

    const addTransaction=(formValues)=>{
        const newObj={...formValues , id:Date.now()};
        setTransaction([...transaction , newObj]);

    }
    useEffect(() => {
        let exp=0 ; 
        let inc=0 ;
        transaction.forEach((t)=>{t.type==='expense'? exp+=parseFloat(t.amount) : inc+=parseFloat(t.amount) });

        setExpense(exp);
        setIncome(inc);
        
        
    }, [transaction])

    const filterTransaction=(searchInput)=>{
        if(searchInput===''){
            setFilteredTransaction(transaction);
            return
        }
        const filtering=transaction.filter(t=>t.desc.toLowerCase().includes(searchInput.toLowerCase()));
        setFilteredTransaction(filtering)
    }
    


    return (
        <section className='app-container'>
            <OverView income={income} expense={expense} addTransaction={addTransaction}/>
            <Transaction transaction={transaction} filterTransaction={filterTransaction} filteredTransaction={filteredTransaction}/>            
        </section>
    )
}

export default ExpenseApp
