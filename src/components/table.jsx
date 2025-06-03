import React, { useContext, useEffect, useState } from 'react'
import { timeContext } from '../context/contextProvider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const IrrigationTable = () => {

    const {setRealTime,realTimeToMillitryFn,realTime,data} = useContext(timeContext)

    useEffect(() => {
     let id =setInterval(()=>{
           setRealTime(realTimeToMillitryFn())
         },1000)
        
         return ()=>clearInterval(id)   
    }, []);

    const pick=(el)=>{
     return realTime<el.startTime?"orange":realTime<el.endTime?"rgb(82, 190, 252)":"green"
    }
      const backgroundcolor=(el)=>{
     return realTime<el.startTime?"rgb(236, 230, 215)":realTime<el.endTime?"rgb(220, 234, 242)":"rgb(221, 236, 222)"
    }
                                   
   console.log('hey', realTime);
   

  return<>

  <Grid container justifyContent={'center'} alignItems={'center'}  direction='column' rowGap={'2rem'} sx={{ width:{xs:"98%",sm:"98%",md:"90%",lg:"85%"}
  , minHeight:"10rem" , backgroundColor:"rgb(82, 190, 252)", color:"white"   }}>
        
        <Grid sx={{color:"white",fontSize:"1.9rem"}} justifyContent={'center'} alignItems={'center'}   marginTop="5rem" >Irrigation System</Grid>
  
   <TableContainer component={Paper} sx={{ width:{xs:"90%",sm:"90%",md:"80%",lg:"80%"}, 
              borderRadius:"1rem",color:"gray",padding:"1rem"  }} >
     <Table  size="small" aria-label="a dense table">
        <TableHead>
            <TableRow sx={{fontSize:"8rem"}}>
                <TableCell  >S.N.</TableCell>
                <TableCell  >Plot</TableCell>
                <TableCell  >RunBy</TableCell>
                <TableCell  >Start Time</TableCell>
                <TableCell  >End Time</TableCell>
                <TableCell  >Status</TableCell>
            </TableRow>
        </TableHead>
        <TableBody  >


            {

            data?.map((el,i)=>{
            
                 return <TableRow key={i+Math.random()}  >
                              <TableCell  >{el.index+1}</TableCell>
                              <TableCell  >{el.plot}</TableCell>
                              <TableCell  >{el.RunBy}</TableCell>
                              <TableCell >{el.startTime}</TableCell>
                              <TableCell >{el.endTime}</TableCell>
                              <TableCell sx={{color:pick(el),borderBottom:"1px solid rgb(245, 245, 245)", backgroundColor:backgroundcolor(el),borderRadius:"1rem"}} >
                                {realTime<el.startTime?"Pending":realTime<el.endTime?"In Progress" :"Completed" }
                              </TableCell>
                             </TableRow>
                        
      
              })
            }
        </TableBody>
     </Table>
  </TableContainer>


  </Grid>
  </>
}

export default IrrigationTable















  //  <table>
  //       <thead>
  //           <tr>
  //               <th>S.N.</th>
  //               <th>Plot</th>
  //               <th>RunBy</th>
  //               <th>Start Time</th>
  //               <th>End Time</th>
  //               <th>Status</th>
  //           </tr>
  //       </thead>
  //       <tbody>


  //           {

  //           data?.map((el,i)=>{
            
  //                return <tr key={i+Math.random()} >
  //                             <td>{el.index+1}</td>
  //                             <td>{el.plot}</td>
  //                             <td>{el.RunBy}</td>
  //                             <td>{el.startTime}</td>
  //                             <td>{el.endTime}</td>
  //                             <td>{realTime<el.startTime?"Pending":realTime<el.endTime?"In Progress"
  //                                  :"Completed" }
  //                             </td>
  //                            </tr>
                        
      
  //             })
  //           }
  //       </tbody>
  //    </table>