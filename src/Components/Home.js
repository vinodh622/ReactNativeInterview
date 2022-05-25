import React, { Fragment, useState, useEffect, useRef  ,useCallback} from 'react'

import { useDispatch ,useSelector} from 'react-redux'
import {getProducts ,deleteProducts} from '../actions/Productaction'
import {  useMatch ,useLocation ,useNavigate ,Link}  from 'react-router-dom'
import {addCartact } from '../actions/cartAction'
import axios from 'axios'
import Prooduct from '../Components/Prooduct'
import { Button } from 'react-bootstrap'

import Age from '../Components/Age'





const Home = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([1, 1000])
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState(1)
   const[name,setNmae]=useState('')

    const rendercount= useRef('')

const [dataCat,setdataCat]=useState([ ])



  

    useEffect(()=>{
      rendercount.current=name
    },[name])

    const categories = [
        'Electronics',
        'Cameras',
        'Laptops',
        'Accessories',
        'Headphones',
        'Food',
        "Books",
        'Clothes/Shoes',
        'Beauty/Health',
        'Sports',
        'Outdoor',
        'Home'
    ]

    // const alert = useAlert();
    // const dispatch = useDispatch();
  ///  const refNumber = useSelector((state) => state.loginDetails);
    const productdata =useSelector((sel)=>sel.productReducer)
    const dwdwdw =useSelector((wdw)=>wdw.cartReducer)


    const { products,loading }= productdata
    const {cart ,test  ,hai}= dwdwdw

    console.log("hai",hai)

    const[count,setcount]=useState(1)


   const dispatch =useDispatch()



   useEffect(()=>{

    dispatch(getProducts())


   }, [])



   
   const handleClick =  async(id)=> {
    
     await  dispatch(deleteProducts(id))

     await  dispatch(getProducts())

   }

   const handleClickadd =(e) =>{

    
dispatch(addCartact(e))






   }
console.log(cart)




let developer ={name:"vinoo"}
let develope2={...developer}

develope2.name="xxxx"



const obk = {
name :"wdwd",
testwcw:"wdjwdjqwojdoqp",
qty:11


}

// lexail scope:
let a =333

function testq (){ /// own execution context

console.log(a)

}


testq()



function init() {
  var name = 'Mozilla'; 
//  console.log(uuuu)
  // name is a local variable created by init
  function displayName() { 
    let uuuu ="qwdpjqwdjqod"
    //alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// let spread = {...obk ,name:"xxxxs" ,qty:obk.qty+11
// }


// console.log(spread ,"psredas")

const Employee = {
  firstname:"vini",
  lastName:"Mtest",
  getfullanme: function (){

console.log(`${this.firstname} ,"haiiiiiii"}`)

  }
  
  }

  const Customer = {
    firstname:"vnodhdon",
    lastName:"Mtest",
   
    
    }
const {firstname ,lastName}=Customer

console.log(firstname,"ho790097907")

  Employee.getfullanme.bind(Customer)


if(true){
 let reee=555
 console.log(reee,"dhqwodqpwodupqdupqdu")

}




  
  
  
  
  
  
  
  async function testcustomer (){
    
    try {
      let res=   await axios.get("https://jsonplaceholder.typcode.com/todos")
     
if(res.status===200){

 
}


      
    } catch (error) {
      
console.log(error)


    }
  




  
  
  
  
  }
  
  const  tester = async ()=>{
  
  
   
  
  
  
  
  }
  useEffect(()=>{

    testcustomer()

  },[])
  
  



 


  
  
  
  





  const arr= [
    {"id":1,
    "price":444,
    "Qty":1
    },
    
    {"id":123,
    "price":442.67,
    "Qty":1
    },
      
    {"id":12344,
    "price":44.5,
    "Qty":1
    }
    
    ]
    


    let ui  = arr.reduce((a,c)=> a+ c.price*c.Qty ,0)

   // console.log("total",ui.toFixed(2))


    let ass =[]
  
  
    for (let index = 0; index < arr.length; index++) {
  
      ass.push({index})


      
    }

    
      const eee= Object.keys(arr).map((key, index) => {
                return {
                  quantity: arr[key].Qty,
                  product: arr[key].price,

                };

              })

       



const eff = async ()=>{
try {
  const res = await  axios.post("http://localhost:8000/api/getcategory")

setdataCat(res.data.data)
  



} catch (error) {
  console.log(error,"e00wf[pepl")
}

 


}


    
useEffect(()=>{


 // eff()




return ()=>{

}


},[])



function myfunc(){

console.log(this);
}
let obnn ={
  name:"vinofhhf"
}
myfunc =myfunc.bind(obnn)



myfunc();




const renderCat =(cat)=>{
let ctaaa = []
for(let cats of cat){

  ctaaa.push(<li key={cats.name}>
    
    
    
    {cats.name}
    
    {cats.children.length  > 0 ? ( <ul>{renderCat(cats.children)} </ul>)   : null}
    
    
    </li>)


  
}

return ctaaa;





}

const countage = useCallback(()=>{


  setRating(rating+1)

},[rating])  



const tewdwdst = useCallback(()=>{

  setcount(count+1)




},[count])  



console.log(curry(11)(12)());   



function curry(a){

return function(b){

 if( b!==undefined){
  return curry(a+b)

 }  
else {
  return a;
}


}


  
  }







    return (
        <Fragment>
           

<div className='container'>


<div className='row' >
<Link to="Review">Invoices</Link>

{products.length===0 ? <h1>xsx</h1> :
products.map((e)=>{

return (

<div key={e._id} className='col-md-4'  >
    <div > 
<h5>{e.name}</h5>
<h4>{e.price}</h4>
<h4>Toatl reviews :{e.numOfReviews}</h4>
</div>

<button onClick={()=>handleClick(e._id)}>
   Delete
      </button>

      <button  onClick={()=>handleClickadd(e)}  >
   Add
      </button>

    </div>

)



})


}

</div>

</div>


<input     onChange={e=>setNmae(e.target.value)} value={name} />


<div>My name is {test} </div>


<ul>

{renderCat(dataCat)}



</ul>


<h1>{count}</h1>



<Prooduct tewdwdst={tewdwdst}   />;






<Age countage={countage} rating={rating} />







        </Fragment>
    )
}

export default  React.memo(Home)


