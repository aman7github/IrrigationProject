
 export const TimeAlertFn=(sTime,eTime,realTime)=>{
        if(sTime.length<6 || eTime.length<6){
            alert("Time Should Be In 6 Digits ,Not Less Or More To Digits .")
            return false
        }else if(sTime.slice(0,2)>23 ||sTime.slice(2,4)>=60 || sTime.slice(4,6)>=60){
            alert("Can Not Be More Than Start Time Hours '23' And Minute And Second '59' ")
            return false
        }else if(sTime.slice(0,2)>23 ||eTime.slice(2,4)>=60 || eTime.slice(4,6)>=60){
             alert("Can Not Be More Than End Time Hours '23' And Minute And Second '59' ")
             return false
         }else if(sTime<realTime){
            alert(`Entered Time Should Not Be Less Than Current Time. The Current Time is ${realTime}`)
            return false
         }else if(eTime<sTime){
             alert("start time is less than the end time, it implies that the irrigation cycle spans across two different days, and the total runtime will exceed 12 hours. This is considered a long-duration irrigation schedule.")
             return true
         }else{
           return true
       
         }
    }


      export const timeToSecondsFn=(time)=>{
      const h1 = time.slice(0, 2);
      const m1 = time.slice(2, 4);
      const s1 = time.slice(4, 6);
      let timeInSec = Number(h1) * 3600 + Number(m1) * 60 + Number(s1);
      return timeInSec
    }

     
       export const secondsToTimeFn=(time,runtime)=>{
                  let timeInSecond = timeToSecondsFn(time)
                  let totalSeconds = timeInSecond+(runtime*60)
      
                    let h = Math.floor(totalSeconds / 3600);
                    h=h<10?`0${h}`:h
                    let m = Math.floor((totalSeconds % 3600) / 60);
                    m=m<10?`0${m}`:m
                    let s = totalSeconds % 60;
                    s=s<10?`0${s}`:s
                    console.log(`${h}${m}${s}`)
                    return `${h}${m}${s}`
          }



      export const realTimeToMillitryFn=()=>{  
        let currentTime = new Date().toLocaleTimeString('en-GB', {hour12: false,});
        let [h1,m1,s1]= currentTime.split(":")
        return `${h1}${m1}${s1}`
    }

     export const generateIrrigationTable =  (sTime,eTime,runtime,interval,plots,motors,setData,setFilterData,realTime,setTotalIrrigatedPlots)=>{
         
       
        let isValid = TimeAlertFn(sTime,eTime,realTime)
        console.log('check for time', isValid);
        
        if(!isValid){
            setTotalIrrigatedPlots(0)
            setData([])
            setFilterData([])
            return
        }
      
 
          const totalStartTime = timeToSecondsFn(sTime)
          const totalEndTime = timeToSecondsFn(eTime)
        
          let diff =  totalEndTime - totalStartTime
          let iterationTime = (Number(runtime)+Number(interval))*60
          if(iterationTime>1440){
            return alert(`Entered Runtime and Interval Is Together More Than 1 Day. It Should Less Than 1440 Mintues Which Is 1 Day In Mintues`)
          }
          
          let numberOfIteration = Math.abs(Math.ceil(diff/iterationTime))
    
          let plotArray = Array(Number(plots)).fill(1).map((_,i)=>{
                return `D${i+1}`
          })
         
          let motorArray = Array(Number(motors)).fill(1).map((_,i)=>{
                return `M${i+1}`
          })
    
           let result=[], index=0, t1=0, t2=Number(runtime),count=0
    
           for(let i=0;i<numberOfIteration;i++){
                   let innerRound=1 , motorNumber=0 , plotNumber=0
                while(innerRound<=plots){

                  if(motorNumber>=motors){
                      motorNumber=0
                      t1=t2
                      t2+=Number(runtime)
                  }
                 
                  let obj={
                    index:index,
                    plot:plotArray[plotNumber],
                    startTime: secondsToTimeFn(sTime,t1),
                    endTime:secondsToTimeFn(sTime,t2),
                    RunBy:motorArray[motorNumber],
                  }
                  count++
                 result.push(obj)
                 index++, plotNumber++, innerRound++, motorNumber++
               }
    
                t1=t2+Number(interval), t2=t1+Number(runtime)
    
          }    
               setTotalIrrigatedPlots(count)
               setData(result)
               setFilterData(result)

           }