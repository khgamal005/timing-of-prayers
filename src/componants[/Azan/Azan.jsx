import React from 'react'
import Card from '../Card'
import { memo } from 'react';

const Azan = ({data}) => {
    let date =new Date();
    let today =date.getDate()-1
const one =  data[today]?.timings?.Fajr
const two = data[today]?.timings?.Dhuhr
const three =  data[today]?.timings?.Asr
const four = data[today]?.timings?.Maghrib
const five =  data[today]?.timings?.Isha
const milady =  data[today]?.date?.gregorian?.date
const hijri =  data[today]?.date?.hijri?.date


    

  return (
    <>
               <div className="date d-flex justify-content-between">
                <div className="hijri">
                    <h4>التاريخ الميلادى</h4>
                    <p>{milady}</p>
                </div>
                <div className="hijri">
                    <h4>التاريخ الهجرى</h4>
                    <p>{hijri}</p>
                </div>
               </div>
             { 
  
             <div className="row">
            <div className="col-md-12 ">
            <div className="main-card d-flex    ">
 
            <Card>
            <div className="fagr d-flex p-2 align-items-center">
            <span>{five} </span>
                <h4>اذان العشاء
                </h4>
            </div>
            </Card>
            <Card>
            <div className="fagr d-flex p-2 align-items-center">
            <span>{four} </span>
                <h4>اذان المغرب
                </h4>
            </div>
            </Card>
            <Card>
            <div className="fagr d-flex p-2 align-items-center">
            <span>{three} </span>
                <h4>اذان العصر
                </h4>
            </div>
            </Card>
            <Card>
            <div className="fagr d-flex p-2 align-items-center">
            <span>{two} </span>
                <h4>اذان الظهر
                </h4>
            </div>
            </Card>
            <Card>
            <div className="fagr d-flex p-2 align-items-center">
            <span>{one} </span>
                <h4>اذان الفجر
                </h4>
            </div>
            </Card>
        </div>
            </div>
        </div> }
    {/* {times} */}
    </>
  )
}

export default memo(Azan)