import React, { Fragment, useState, useEffect, useRef  ,useCallback} from 'react'
// import Pagination from 'react-js-pagination'
// import Slider from 'rc-slider'
// import 'rc-slider/assets/index.css';

// import MetaData from './layout/MetaData'
// import Product from './product/Product'
// import Loader from './layout/Loader'

// import { useDispatch, useSelector } from 'react-redux'
// import { useAlert } from 'react-alert';
// import { getProducts } from '../actions/productActions'

// const { createSliderWithTooltip } = Slider;
// const Range = createSliderWithTooltip(Slider.Range)
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
    const {cart ,test}= dwdwdw

    const[count,setcount]=useState(1)


   const dispatch =useDispatch()



   useEffect(()=>{

    dispatch(getProducts())


   }, [test])



   
   const handleClick =  async(id)=> {
    
     await  dispatch(deleteProducts(id))

     await  dispatch(getProducts())

   }

   const handleClickadd =(e) =>{

    
dispatch(addCartact(e))






   }

let developer ={name:"vinoo"}
let develope2={...developer}

develope2.name="xxxx"
















  
  
  
  
  
  
  
  
  
  
  async function testcustomer (){
    
    try {
      let res=   await axios.get("https://jsonplaceholder.typcode.com/todos")
console.log(res)
     
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
    "price":442,
    "Qty":12
    },
      
    {"id":12344,
    "price":4444442,
    "Qty":12333
    }
    
    ]
    
    

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


