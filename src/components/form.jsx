import React, { useCallback, useContext, useState } from 'react'
import { timeContext } from '../context/contextProvider'
import { generateIrrigationTable } from '../functions/functions'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const Form = () => {

        let obj={
                plots:'',
                motors:'',
                sTime:'',
                eTime:'',
                runtime:'',
                interval:''
           }

       const [formData,setFormData] = useState(obj)
       const{plots,motors,sTime,eTime,runtime,interval} = formData
       const {setData,setFilterData,setNumPlots,realTime,setTotalIrrigatedPlots}   = useContext(timeContext)

   
     
     

      const handleForm=(e)=>{
        
        if(e.target.name==='sTime' && e.target.value.length>6){
           return alert('Start Time Length Can Not Be More Than 6 Digits')
        }else  if(e.target.name==='eTime' && e.target.value.length>6){
           return alert('End Time Length Can Not Be More Than 6 Digits')
        }else  if(e.target.name==='runtime' && e.target.value>1440){
           return alert('Can Not Set RunTime More Than 1 day which is 1440 in minutes')
        }else  if(e.target.name==='interval' && e.target.value>1440){
           return alert('Can Not Set interval More Than 1 day which is 1440 in minutes')
        }else{
            setFormData({...formData,[e.target.name]:e.target.value})
        }

      }
         
        const handleSubmit=()=>{
         
          generateIrrigationTable(sTime,eTime,runtime,interval,plots,motors,setData,setFilterData,realTime,setTotalIrrigatedPlots)
           
              setFormData({
                plots:'',
                motors:'',
                sTime:'',
                eTime:'',
                runtime:'',
                interval:''
           })
         setNumPlots(plots)
   
       }
   

  return <>

  <Grid container spacing={2} direction={'column'} width={{base:"90%",sm:"90%",md:"60%",lg:"50%"}} justifySelf={'center'} 
          justifyContent={'center'} alignItems={'center'}  sx={{minHeight:'15rem'}}  >

   <Grid container spacing={2} onSubmit={handleSubmit}  justifyContent={'center'} alignItems={'center'}  >
      <TextField  variant="outlined" label="Number of Plots" type='number' name='plots' value={plots}
          onChange={handleForm}  />

      <TextField type='number' label='Number of motors' name='motors' value={motors}
      onChange={handleForm} 
      />

       <TextField type="number" label='Start Time e.g. - 043500' placeholder="e.g. - 043000" name='sTime'  value={sTime} 
        onChange={handleForm} 
     
       />

       <TextField type="number" label='End Time e.g. - 063000' placeholder="" name='eTime'  value={eTime}
         onChange={handleForm}
      />

      <TextField type="number" label='RunTime In Minutes' placeholder="In minutes" name='runtime'value={runtime}
      onChange={handleForm}  />

      <TextField type="number" label='Interval In Minutes' placeholder="In minutes" name='interval'value={interval} 
      onChange={handleForm} />

</Grid>
    <Button variant="contained" sx={{width:"50%",backgroundColor:"rgb(82, 190, 252)"}} onClick={handleSubmit} >Submit</Button>
</Grid>  
  
  </>
}

export default Form