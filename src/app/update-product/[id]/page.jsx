'use client'

import axios from "axios";
import { Formik } from "formik";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateProduct = () => {
  const { id } = useParams(); //what does this line means??
  const [userData, setuserData] = useState(null);
  const router = useRouter();
  const getUserData = async () => {
    const res = await axios.get("http://localhost:5000/product/getbyid/" + id);
    console.log(res.data);
    setuserData(res.data);
  };
  useEffect(() => {
    getUserData();
  }, []);

  const submitForm = (values, {setSubmitting }) => {
    console.log(values);
    axios
      .put("http://localhost:5000/product/updatebyid/" + id, values)
      .then((response) => {
        console.log(response.status);
        router.back();
        toast.success("User Updated Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Not Updated");
        setSubmitting(false);
      });
  };
  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className="text-center font-bold mt-5 text-3xl ">Update Product</h1>
      {userData !== null ? (
        <Formik initialValues={userData} onSubmit={ submitForm }>
          {(updateform) => {
            return (
              <form
              action=""
              className="flex flex-col justify-right text-start bg-gray-500 p-14 pt-6 gap-4 rounded-lg"
              onSubmit={updateform.handle}
               
            >
              <h1 className="text-center text-3xl font-bold pb-3 text-white">
                Products
              </h1>
              <div className="flex flex-col">
              <label className="text-white" htmlFor="">
                Product Name
              </label>
              <input
                value={updateform.values.product}
                onChange={updateform.handleChange}
                id="product"
                className="px-2 rounded-sm outline-none"
                type="text"
              />
             
              </div>
              
              
              <div className="flex flex-col">
              <label className="text-white" htmlFor="">
                Price
              </label>
              <input
                id="price"
                value={updateform.values.price}
                onChange={updateform.handleChange}
                className=" px-2 rounded-sm outline-none"
                type="text"
              />
             
              </div>
              
              <div className="flex flex-col">
                <label className="text-white" htmlFor="">
                  Variant
                </label>
                <input
                  value={updateform.values.variant}
                  onChange={updateform.handleChange}
                  id="variant"
                  className="px-2 rounded-sm outline-none"
                  type="text"
                />
                
              </div>
              <div className="flex flex-col">
              <label className="text-white" htmlFor="">
                Weight
              </label>
              <input
                value={updateform.values.weight}
                onChange={updateform.handleChange}
                id="weight"
                className="px-2 rounded-sm outline-none"
                type="text"
              />
             
              </div>
              
              <button className="rounded-sm bg-blue-500 font-semibold" type="submit">Submit</button>
            </form>
          );
        }} </Formik>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  };

export default UpdateProduct