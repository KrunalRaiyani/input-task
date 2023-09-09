import { createContext, useState } from "react";

let AppContext = createContext()


let AppProvider = (props) => {



    // input items array
    const [itemArr, setItemArr] = useState([{
        id: Date.now()
    }])

    // add new item
    let addItem = () => {
        setItemArr(itemArr.concat({ id: Date.now() }))
    }

    // remove item
    let removeItem = (id) => {
        if (itemArr.length > 1) {
            let filterArr = itemArr.filter((e) => {
                return id !== e.id
            })
            setItemArr(filterArr)
        }
    }

    // input value add
    let addValue = (id,value)=>{

        let copyArr = JSON.parse(JSON.stringify(itemArr))
        
        copyArr.map((e)=>{
          e.id === id && (e.value = value)
        })
        setItemArr(copyArr)
    }

    return (
        <AppContext.Provider value={{ itemArr, addItem, removeItem,addValue }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }