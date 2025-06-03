import React, { useContext, useRef, useState } from 'react'
import { timeContext } from '../context/contextProvider'
import Grid from '@mui/material/Grid';
import '../CSS/style.css'

const FilterDiv = () => {
    
  const {filterData,data,setData,realTime,numPlots} = useContext(timeContext)


  const filterByStatus=(val)=>{

     let statusData = filterData.map((el)=>{
        let status= realTime < el.startTime
        ? "pending"
        : realTime < el.endTime
        ? "in progress"
        : "completed";
        return {...el,status}
     })
     
      if (val === "") {
        setData(statusData)
      } else {
        const filtered = statusData.filter((el) => el.status === val);
        setData(filtered);
      }
   
   }

    const filterByPlots=(val)=>{
      if(val===''){
        setData(filterData)
      }else{
         let res = filterData.filter((el)=>{
          return el.plot===val
          })
         setData(res)
      }

    }



  
  return <>
  
      <div  className='InputContainer' >
        <select className="InputBox" onChange={(e)=>{filterByStatus(e.target.value)}} >
        <option  value="" >Filter By Status</option>
        <option  value="pending"  >Pending</option>
        <option value="in progress"  >In Progress</option>
        <option value="completed" >Complete</option>
        </select>
   
       <select  className="InputBox" name="filterOption" id="" onChange={(e)=>{filterByPlots(e.target.value)}}   >
        <option value="" >Fliter By Plots</option>
         {
                Array(Number(numPlots)).fill(1).map((el, i) => (
                 <option key={i} value={`D${i + 1}`}> 
                      {`D${i + 1}`}
                 </option>
                ))
         }
      </select>
   </div>
  
  </>
}

export default FilterDiv




  // <Grid  border='1px solid green' justifyContent={'center'} alignItems={'center'}
  //          sx={{width:'100%'}}  >   
     
  //   <Grid>
  //     <FormControl name="filterOption" sx={{width:"100%"}}  >
  //       <InputLabel id="demo-select-small-label" >Filter By Status</InputLabel>
  //       <Select onChange={(e)=>{filterByStatus(e.target.value)}} >
  //       <MenuItem value="">Remove Filter</MenuItem>
  //       <MenuItem  value="pending">Pending</MenuItem>
  //       <MenuItem value="in progress">In Progress</MenuItem>
  //       <MenuItem value="completed">Complete</MenuItem>
  //       </Select>
  //     </FormControl>
  //   </Grid>

  //    <Grid>
  //      <FormControl name="filterOption" sx={{width:"100%"}} >
  //      <InputLabel id="demo-select-small-label">Filter By Plots</InputLabel>
  //      <Select name="filterOption" id="" onChange={(e)=>{filterByPlots(e.target.value)}}  >
  //       <MenuItem value="">Remove Filter</MenuItem>
  //        {
  //               Array(Number(numPlots)).fill(1).map((el, i) => (
  //                <MenuItem key={i} value={`D${i + 1}`}> 
  //                     {`D${i + 1}`}
  //                </MenuItem>
  //               ))
  //        }
  //     </Select>
  //     </FormControl>
  //   </Grid>
  //     </Grid> 