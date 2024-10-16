import React, { useEffect, useMemo, useState } from 'react'
import { users } from './constant';

const HomePage = () => {

  const [data,setData] = useState([]);
  const parseDate = (dob) => {
    const [day,month,year] = dob.split('-');
    return new Date(year,month -1 , day);
  }

  useEffect(()=>{
  const sortData = users.sort((a,b)=> parseDate(b.DOB) - parseDate(a.DOB));
  setData(sortData);
  },[]);

  const tableData = useMemo(()=>{
   return (
    <>
    { data.length > 0 && data.map((list,index)=>
        <tr key={index}>
          <td>{list.FirstName}</td>
          <td>{list.LastName}</td>
          <td>{list.EmpID}</td>
          <td>{list.DOB}</td>
          <td>{list.phone}</td>
        </tr>
      )
    }
    </>
    )
  },[data])

  return (
  <>
    <table>
      <tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>EmpID</th>
        <th>Email</th>
        <th>DOB</th>
        <th>phone</th>
      </tr>
      {tableData}
    </table>
  </>
  )
}


export default HomePage;