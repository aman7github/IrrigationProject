import React, { useCallback,  useContext,  useEffect, useRef, useState } from 'react'
import IrrigationTable from '../components/table'
import Form from '../components/form'
import FilterDiv from '../components/filterDiv'
import Grid from '@mui/material/Grid';


const Irrigation = () => {

console.log('parent render');

return<>
<Grid container direction={'column'} columns={3} rowGap={2} 
  justifyContent={'center'} alignItems={'center'} sx={{minHeight:'35rem'}} >
   <Form  />
   <FilterDiv />
   
   <IrrigationTable  /> 
</Grid>
</>

}

export default Irrigation