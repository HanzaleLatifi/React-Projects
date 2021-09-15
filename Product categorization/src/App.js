import './App.css'
import {useState} from 'react'
import AddGroup from './components/AddGroup'
import AddProduct from './components/AddProduct'
import ShowProducts from './components/ShowProducts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [products, setProducts] = useState([]) 
  const [groups , setGroups]=useState(['other',])

  const addNewGroup=(groupName)=>{ // get name from AddGroup component
      
      setGroups([...groups,groupName])
  }
  
  const addNewProduct=(newProduct)=>{ //get from Add Product component
    const newObj={...newProduct , id:Math.floor(Math.random()*6000)}
    setProducts([...products ,newObj])
  }


  return (
    <div className="App" >
      <section className="LeftSection">
        <AddGroup addNewGroup={addNewGroup} />
        <AddProduct addNewProduct={addNewProduct} groups={groups}/>
        <ToastContainer className="Toast"/>
      </section>
      <section className="RightSection">
        <ShowProducts groups={groups} products={products} setProducts={setProducts}/>
      </section>
      
    </div>
  );
}

export default App;
