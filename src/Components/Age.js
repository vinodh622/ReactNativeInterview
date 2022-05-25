import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Age = ({ countage, rating }) => {

  console.log("98898889088909880809");

const eef = ()=>{

console.log("why?????")
}


  return (
    <div>

      <h1>{rating}</h1>

      <Button onClick={()=>eef()}>agees</Button>


    </div>
  );
};

export default React.memo(Age);
