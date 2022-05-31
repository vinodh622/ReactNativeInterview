
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
