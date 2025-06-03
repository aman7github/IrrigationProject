
import React, { createContext, useState } from 'react'

export const timeContext = createContext()

const ContextProvider = ({children}) => {
  
    const realTimeToMillitryFn=()=>{  
        let currentTime = new Date().toLocaleTimeString('en-GB', {hour12: false,});
        let [h1,m1,s1]= currentTime.split(":")
        return `${h1}${m1}${s1}`
    }

    const [realTime,setRealTime] = useState(realTimeToMillitryFn())   
    const [data,setData] = useState([])
    const [filterData,setFilterData]=useState([])
    const [numPlots,setNumPlots] = useState(0)  
    const [returnVal,setReturnVal] = useState(false)


    return <timeContext.Provider value={{realTimeToMillitryFn,realTime,setRealTime,
                            data,setData,filterData,setFilterData,numPlots,setNumPlots,setReturnVal,returnVal }}  >
             {children}
          </timeContext.Provider>
}

export default ContextProvider