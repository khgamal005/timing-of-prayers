import React, { useCallback, useEffect, useState } from 'react'
import Azan from './Azan'
import axios from 'axios'
import {towns} from '../../data/Data'

const Moaqit = () => {
    const [madina, setmadina] = useState('alex')
    const [data, setData] = useState([])
    const [city, setCity] = useState('الاسكندرية')
    const [country, setCountry] = useState('egypt')
    

 

    const value=towns.map((el ,idx)=>(
        <option key={idx} value={el.arabicName}>{el.arabicName}</option>
    ))
    const date=new Date()
    let year =date.getFullYear()
    let month =date.getMonth()+1
 


         const getTimes= useCallback(()=>{
                async function getPrarers(){
                    let res =await axios.get(`https://api.aladhan.com/v1/calendarByCity/${year}/${month}`,{
                        params : {
                              city:madina,
                              country:country
                            
                        }
                    })
                   
                    setData(res.data.data)
                   }
            getPrarers()
            },[year, month, madina, country])

            useEffect(() => {
         
                getTimes()
              
               }, [getTimes])

         
               const onChangeHandeler=(e)=>{
                for (const town of towns) {
                    if(town.arabicName===e.target.value){
                        setmadina(prev=>prev=town.name)
                       setCity(e.target.value)
                       setCountry((prev=>prev=town.country))
                    }
                }
               }
        
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-10">
            <div className="main d-flex flex-column justify-content-center align-items-center my-5" >
    <div className="town">
        <h2 className='fw-bold fs-4'> اسم المدينة : {city}</h2>
    </div>
    <div className="azan  my-5  w-100 text-center container">
    <Azan data={data}/>
    </div>
<div className="input ">
    <select className=' select px-5 py-2 rounded-pill ' onChange={onChangeHandeler} >
       
            {value}
    </select>
    <label  className='m-5 p-5  fw-bold fs-2'>  : اختر المدينة</label>

</div>

    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Moaqit