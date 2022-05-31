import React,{useState,useEffect } from 'react'

export default function Country({data}) {

   
  return (

    <div  className="tableSection">
    <table>
    <thead>   
  <tr>
    <th>Country</th>
    <th>Official</th>
    <th>Population</th>
    <th>Subregion</th>
    <th>Status</th>
    <th>Flag</th>
  </tr>
  </thead>
  <tbody>

{data.map((e)=>{

return (
    <tr>
         <td>{e.name.common}</td>
    <td>{e.name.official}</td>
    <td>{e.population}</td>
    <td>{e.subregion}</td>
    <td>{e.status}</td>

    <td>
         <img  className='flagImg'
     src={e.coatOfArms.png}
      alt="new"
      />
      </td>

    </tr>
)

   






})}



</tbody>

  
</table>
</div>
  )
}
