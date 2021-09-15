import { useState, useEffect } from 'react'

function ShowProducts({ groups, products }) {
    const [selectGroup, setSelectGroup] = useState('other')
    const [filteredProducts, setFilteredProducts] = useState([])

    const selectHandler = (e) => {
        setSelectGroup(e.target.value);
    }
    const filterFunction = () => {
        const Filter = products.filter(f => f.group === selectGroup);
        setFilteredProducts(Filter)
    }
    useEffect(() => {
        filterFunction()
    }, [selectGroup, products])




    return (
        <div className="ShowProducts">
            <select onChange={selectHandler} value={selectGroup}>
                {groups.map(group => {
                    return <option key={group} value={group.toLowerCase()}> {group} </option>
                })}

            </select>
            <div className="ProductList">
                {filteredProducts.length ? filteredProducts.map(item => {
                    return (
                        <div key={item.id} className="Product">
                            <p>{item.name}</p>
                        </div>
                    )
                }) : <p className="Empty">empty ... !</p>}


            </div>
            
            <p className="ProductLength">{`Count : ${filteredProducts.length}`}</p>


        </div>
    )
}

export default ShowProducts
