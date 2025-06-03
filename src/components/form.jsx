import React, { useCallback, useContext, useState } from 'react'
import { timeContext } from '../context/contextProvider'
import { generateIrrigationTable } from '../functions/functions'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
       const {setData,setFilterData,setNumPlots,realTime,returnVal,setReturnVal}   = useContext(timeContext)

   
     
     

      const handleForm=(e)=>{
          setFormData({...formData,[e.target.name]:e.target.value})
      }
         
        const handleSubmit=()=>{
         
          generateIrrigationTable(sTime,eTime,runtime,interval,plots,motors,setData,setFilterData,realTime,setReturnVal,returnVal)
           
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

      <TextField type="number" label='RunTime' placeholder="In minutes" name='runtime'value={runtime}
      onChange={handleForm}  />

      <TextField type="number" label='Interval' placeholder="In minutes" name='interval'value={interval} 
      onChange={handleForm} />

</Grid>

    <Button variant="contained" sx={{width:"50%",backgroundColor:"rgb(82, 190, 252)"}} onClick={handleSubmit} >Submit</Button>
</Grid>  
  
  </>
}

export default Form