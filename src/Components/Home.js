// import React, { Fragment, useState, useEffect, useRef  ,useCallback} from 'react'

// import { useDispatch ,useSelector} from 'react-redux'
// import {getProducts ,deleteProducts} from '../actions/Productaction'
// import {  useMatch ,useLocation ,useNavigate ,Link}  from 'react-router-dom'
// import {addCartact } from '../actions/cartAction'
// import axios from 'axios'
// import Prooduct from '../Components/Prooduct'
// import { Button } from 'react-bootstrap'

// import Age from '../Components/Age'

// const Home = () => {

//     const [currentPage, setCurrentPage] = useState(1)
//     const [price, setPrice] = useState([1, 1000])
//     const [category, setCategory] = useState('')
//     const [rating, setRating] = useState(1)
//    const[name,setNmae]=useState('')

//     const rendercount= useRef('')

// const [dataCat,setdataCat]=useState([ ])

//     useEffect(()=>{
//       rendercount.current=name
//     },[name])

//     const categories = [
//         'Electronics',
//         'Cameras',
//         'Laptops',
//         'Accessories',
//         'Headphones',
//         'Food',
//         "Books",
//         'Clothes/Shoes',
//         'Beauty/Health',
//         'Sports',
//         'Outdoor',
//         'Home'
//     ]

//     // const alert = useAlert();
//     // const dispatch = useDispatch();
//   ///  const refNumber = useSelector((state) => state.loginDetails);
//     const productdata =useSelector((sel)=>sel.productReducer)
//     const dwdwdw =useSelector((wdw)=>wdw.cartReducer)

//     const { products,loading }= productdata
//     const {cart ,test  ,hai}= dwdwdw

//     console.log("hai",hai)

//     const[count,setcount]=useState(1)

//    const dispatch =useDispatch()

//    useEffect(()=>{

//     dispatch(getProducts())

//    }, [])

//    const handleClick =  async(id)=> {

//      await  dispatch(deleteProducts(id))

//      await  dispatch(getProducts())

//    }

//    const handleClickadd =(e) =>{

// dispatch(addCartact(e))

//    }
// console.log(cart)

// let developer ={name:"vinoo"}
// let develope2={...developer}

// develope2.name="xxxx"

// const obk = {
// name :"wdwd",
// testwcw:"wdjwdjqwojdoqp",
// qty:11

// }

// // lexail scope:
// let a =333

// function testq (){ /// own execution context

// console.log(a)

// }

// testq()

// function init() {
//   var name = 'Mozilla';
// //  console.log(uuuu)
//   // name is a local variable created by init
//   function displayName() {
//     let uuuu ="qwdpjqwdjqod"
//     //alert(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// // let spread = {...obk ,name:"xxxxs" ,qty:obk.qty+11
// // }

// // console.log(spread ,"psredas")

// const Employee = {
//   firstname:"vini",
//   lastName:"Mtest",
//   getfullanme: function (){

// console.log(`${this.firstname} ,"haiiiiiii"}`)

//   }

//   }

//   const Customer = {
//     firstname:"vnodhdon",
//     lastName:"Mtest",

//     }
// const {firstname ,lastName}=Customer

// console.log(firstname,"ho790097907")

//   Employee.getfullanme.bind(Customer)

// if(true){
//  let reee=555
//  console.log(reee,"dhqwodqpwodupqdupqdu")

// }

// let original={

//   name:"john",
//   id:22,
// gert : function (){

//   return this.name

// },

//   hai:{
//     dwdwd:"dwdwdw",
//     wdwqdqwdqd:5555
//   }

// }

// //  let copy = Object.assign({},original);

// // // console.log(copy,"copysss")
// // //   console.log(original ,"original")

// // copy.hai.dwdwd="iswar-dwdiw=-d=qw-i-qdi="

// // console.log(copy,"copysss")
// //   console.log(original ,"original")

//   async function testcustomer (){

//     try {
//       let res=   await axios.get("https://jsonplaceholder.typcode.com/todos")

// if(res.status===200){

// }

//     } catch (error) {

// console.log(error)

//     }

//   }

//   const  tester = async ()=>{

//   }
//   useEffect(()=>{

//     testcustomer()

//   },[])

//  const data=[1,2,4,8]

//  function multiply2(x){

//   return x*2

//   }
//   function multiply4(x){

//     return x*4

//   }

//  function calc (d ,func ){
//  let df = []

//  for(let i=0;i < d.length ;i++){

//   df.push(func(d[i]))

//  }

// return df

//  }

// console.log(calc(data ,multiply2))
// console.log(calc(data ,multiply4))

//   const emp={

//     fName:"Vino",
//  secName:"M",
// dob:2-5-1993,
// address:{
//   addr1:"test111",
//   addr2:"test322222"
// }

//   }

// const cloneEmp= emp

// const ty = {
//   ...cloneEmp ,fName:"bindu" ,address:{
//     ...cloneEmp.address ,addr1:"v5767677676"
//   }
// }

// // console.log(ty)

// Promise.all([])
// Promise.race([])

//   const arr= [
//     {"id":1,
//     "price":444,
//     "Qty":1
//     },

//     {"id":123,
//     "price":442.67,
//     "Qty":1
//     },

//     {"id":12344,
//     "price":44.5,
//     "Qty":1
//     }

//     ]

//     // let ui  = arr.reduce((a,c)=> a+ c.price*c.Qty ,0)

// useEffect(()=>{

// var form = new FormData()

// form.append('kr',fef)

// fetch("https://jsonplaceholder.typicode.com/users",{
//   method: 'GET',
//   headers: new Headers({
//      Accept:"application/json",
//     "Content-Type":'multipart/form-data'
//   }),
//   body:form
// })
// .then((e)=>e.json())
// .then((res)=>{

//   res = res.map(item => {

//     item.isSelect = false;

//     return item;
//   });

// // console.log(res)

// })
// .catch((e)=>console.log(e))

// return  ()=>{

// }

// },[])

//    // console.log("total",ui.toFixed(2))

//     let ass =[]

//     for (let index = 0; index < arr.length; index++) {

//       ass.push({index})

//     }

//       const eee= Object.keys(arr).map((key, index) => {
//                 return {
//                   quantity: arr[key].Qty,
//                   product: arr[key].price,

//                 };

//               })

// const eff = async ()=>{
// try {
//   const res = await  axios.post("http://localhost:8000/api/getcategory")

// setdataCat(res.data.data)

// } catch (error) {
//   console.log(error,"e00wf[pepl")
// }

// }

// useEffect(()=>{

//  // eff()

// return ()=>{

// }

// },[])

// function myfunc(){

// console.log(this);
// }
// let obnn ={
//   name:"vinofhhf"
// }
// myfunc =myfunc.bind(obnn)

// myfunc();

// const renderCat =(cat)=>{
// let ctaaa = []
// for(let cats of cat){

//   ctaaa.push(<li key={cats.name}>

//     {cats.name}

//     {cats.children.length  > 0 ? ( <ul>{renderCat(cats.children)} </ul>)   : null}

//     </li>)

// }

// return ctaaa;

// }

// const countage = useCallback(()=>{

//   setRating(rating+1)

// },[rating])

// const tewdwdst = useCallback(()=>{

//   setcount(count+1)

// },[count])

// console.log(curry(11)(12)());

// function curry(a){

// return function(b){

//  if( b!==undefined){
//   return curry(a+b)

//  }
// else {
//   return a;
// }

// }

//   }

//     return (
//         <Fragment>

// <div className='container'>

// <div className='row' >
// <Link to="Review">Invoices</Link>

// {products.length===0 ? <h1>xsx</h1> :
// products.map((e)=>{

// return (

// <div key={e._id} className='col-md-4'  >
//     <div >
// <h5>{e.name}</h5>
// <h4>{e.price}</h4>
// <h4>Toatl reviews :{e.numOfReviews}</h4>
// </div>

// <button onClick={()=>handleClick(e._id)}>
//    Delete
//       </button>

//       <button  onClick={()=>handleClickadd(e)}  >
//    Add
//       </button>

//     </div>

// )

// })

// }

// </div>

// </div>

// <input     onChange={e=>setNmae(e.target.value)} value={name} />

// <div>My name is {test} </div>

// <ul>

// {renderCat(dataCat)}

// </ul>

// <h1>{count}</h1>

// <Prooduct tewdwdst={tewdwdst}   />;

// {/* <Age countage={countage} rating={rating} />
//  */}

//         </Fragment>
//     )
// }

// export default  React.memo(Home)

import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import Country from "../Components/Country";
import { Container } from "react-bootstrap";
import DatePicker from "react-datepicker";

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .is(["john", "johnDoe"])

    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),

  region: Yup.string().required("Choose Country"),

  age: Yup.number().min(18).required("Minimum Age 18"),

  check: Yup.bool()
    .oneOf([true], "Accept Terms & Conditions is required")
    .required("Accept Terms & Conditions is required"),
});

export default function Home() {
  const [selectedYear, setSelectedYear] = useState("");
  const [startDate, setStartDate] = useState("");
  const [load, setLoad] = useState(false);
  const [TableVisible, setTablevisible] = useState(false);
  const [data, setData] = useState([]);

  const country = [
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
  ];

  const handleYearChange = (selectedYear, values) => {
    setSelectedYear(selectedYear);
  };

  const onChoose = (value) => {
    setLoad(true);
    setTablevisible(false);

    fetch(`https://restcountries.com/v3.1/region/${value.region}`)
      .then((e) => e.json())
      .then((res) => {
        setData(res);
        setLoad(false);
        setTablevisible(true);
      })

      .catch((e) => console.log(e));
  };

  return (
    <div className="mainSection">
      <div className="formBox">
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            region: "",
            age: "",
            check: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            onChoose(values);
          }}
        >
          {({
            errors,
            touched,
            handleChange,
            values,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
          }) => (
            <Form>
              <label className="label">Full Name</label>

              <Field name="fullname" />
              {errors.fullname && touched.fullname ? (
                <div>
                  {" "}
                  <p className="error">{errors.fullname}</p>
                </div>
              ) : null}

              <label className="label">Email</label>

              <Field name="email" type="email" />
              {errors.email && touched.email ? (
                <div>
                  {" "}
                  <p className="error"> {errors.email}</p>{" "}
                </div>
              ) : null}

              <label className="label">Age</label>

              <Field name="age" type="age" />
              {errors.age && touched.age ? (
                <div>
                  {" "}
                  <p className="error"> {errors.age}</p>{" "}
                </div>
              ) : null}

              {/* <label className="label">Choose Country</label>

<Field component="select"  placeholder="wdwqdqwd"  name="region" >
<option value={"Africa"}>Africa</option>

<option value={"Africa"}>Africa</option>
<option value={"Americans"}>Americans</option>
<option value={"Asia"}>Asia</option>
<option value={"Europe"}>Europe</option>


</Field>

{errors.region && touched.region ? (
  <div>
    {" "}
    <p className="error"> {errors.region}</p>{" "}
  </div>
) : null} */}

              <label className="label">Choose Country</label>

              <Select
                value={selectedYear}
                onChange={(selectedOption) => {
                  // setFieldValue(values)
                  handleYearChange(selectedOption, values);

                  values.region = selectedOption.value;
                  handleChange("region");
                }}
                name="region"
                options={country}
                className="selectDrop"
              />

              {errors.region && touched.region ? (
                <div>
                  {" "}
                  <p className="error">{errors.region}</p>
                </div>
              ) : null}

              <div className="checkConditions">
                <Field name="check" type="checkbox" />

                <p> I Accept Terms and Conditions.</p>
              </div>

              {errors.check && touched.check ? (
                <div>
                  {" "}
                  <p className="error"> {errors.check}</p>{" "}
                </div>
              ) : null}

              <p></p>

              <button type="submit" className="commonButton">
                <p className="btnColor">Submit</p>
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <br></br>

      {load ? <h4>Loading....</h4> : null}

      {TableVisible ? <Country data={data} /> : null}
    </div>
  );
}
