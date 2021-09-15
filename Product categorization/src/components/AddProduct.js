import { useState } from 'react'

function AddProduct({ groups, addNewProduct }) {
    const [product, setProduct] = useState({ name: "", group: "other" })

    const changeHandler = (e) => {
        setProduct({ ...product, name: e.target.value })

    }
    const selectHandler = (e) => {
        setProduct({ ...product, group: e.target.value })

    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(product.name==='' || !product.name){
            alert("Enter name of product")
            return
        }
        addNewProduct(product)
        setProduct({ ...product, name: "" })

    }

    return (
        <div className="AddProduct">

            <p>Add Product</p>

            <form onSubmit={submitHandler}>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: '1.5rem' }}>
                    <label>select group :</label>
                    <select onChange={selectHandler}>
                        {groups.map(group => {
                            return <option key={group} value={group.toLowerCase()}> {group} </option>
                        })}
                    </select>
                </div>

                <div style={{ display: 'flex' }}>
                    <input value={product.name} onChange={changeHandler} ></input>
                    <button type="submit">+</button>
                </div>



            </form>

        </div>
    )
}

export default AddProduct
