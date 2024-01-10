import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    // type ValuePiece = Date | null;
    
    // type Value = ValuePiece | [ValuePiece, ValuePiece];
 const [value, onChange] = useState(new Date());
  return (
    <div className=' border-4 shadow-md w-96 px-2 bg-blue-800 rounded-xl'>
<Calendar onChange={onChange} value={value} />
</div>
  )
}

export default Calender




