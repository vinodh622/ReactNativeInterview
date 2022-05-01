import React, { Fragment, useState, useEffect } from 'react'
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
// import {getProducts} from '../actions/Productaction'
// import {  useMatch ,useLocation ,useNavigate}  from 'react-router-dom'




const Review = () => {

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


   const dispatch =useDispatch()



   useEffect(()=>{

    


   },[dispatch])
   


    return (
        <Fragment>
           

<div className='container'>


<h1>wdwwdwdwdw</h1>

</div>

        </Fragment>
    )
}

export default Review