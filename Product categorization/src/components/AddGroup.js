import {useState} from 'react'
import { toast } from 'react-toastify';


function AddGroup({addNewGroup}) {
    const [gruopName, setGruopName] = useState('');
    
    const changeHandler=(e)=>{
        setGruopName(e.target.value)

    }
    const submitHandler=(e)=>{
        e.preventDefault() ; 
        if( !gruopName){
            alert('please Enter name of group')
            return
        }
        addNewGroup(gruopName)
        toast.success(`Group ${gruopName} Added`)
        setGruopName('')


    }

    return (
        <div className="AddGroup">
            <p>Add Group</p>
            <form onSubmit={submitHandler}>
                <input value={gruopName} onChange={changeHandler}></input>
                <button type="submit">+</button>
            </form>
            
        </div>
    )
}

export default AddGroup
