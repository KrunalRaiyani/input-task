import React, { useContext } from 'react'
import { AppContext } from '../context/context'

const Input = (props) => {

    const context = useContext(AppContext)
    let {addItem,removeItem,addValue} = context


    let handleChange = (e)=>{
        addValue(props.id,e.target.value)
    }



  return (
      <div className="input-group mb-3">
          <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" style={{border:"2px solid #9a9a9a"}} onChange={handleChange} />
          <button className="input-group-text btn btn-primary" onClick={()=>addItem()}>Add Item</button>
          <button className="input-group-text btn btn-danger" onClick={()=>removeItem(props.id)}>Remove</button>
      </div>

  )
}

export default Input