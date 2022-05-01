import React, { Fragment, useState, useEffect ,} from 'react'
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







const Home = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [price, setPrice] = useState([1, 1000])
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState(0)

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
    const {cart}= dwdwdw

console.log("cart",cart)

   const dispatch =useDispatch()



   useEffect(()=>{

    dispatch(getProducts())


   },[])
   
   const handleClick =  async(id)=> {
    
     await  dispatch(deleteProducts(id))

     await  dispatch(getProducts())

   }

   const handleClickadd =(e) =>{

dispatch(addCartact(e))






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

        </Fragment>
    )
}

export default Home