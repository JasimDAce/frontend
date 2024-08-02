'use client'
import axios from "axios";
import { Formik } from "formik";
import { useParams, useRouter} from "next/navigation";
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

  const submitForm = (values,{setSubmitting}) =>{
    console.log(values)
    axios.put('http://localhost:5000/product/updatebyid/'+id,values)
    .then((result) => {
      console.log(result.status);
      router.back();
      toast.success("Updated Successfully")
      
    }).catch((err) => {
      console.log(err.status) 
      toast.error("Not Updated")
      setSubmitting(false);
    });
  }
  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className="text-center font-bold mt-5 text-3xl ">Update Product</h1>
     
      {userData !== null? (<Formik initialValues={userData} onSubmit={submitForm}>
        {(updateProduct) => {
          return(<form
            onSubmit={updateProduct.handleSubmit}
            action=""
            className="flex flex-col justify-right text-start bg-gray-500 p-14 pt-6 gap-4 rounded-lg mt-10"
           
             
          >
            <h1 className="text-center text-3xl font-bold pb-3 text-white">
              Products
            </h1>
            <div className="flex flex-col">
            <label className="text-white" htmlFor="">
              Product Name
            </label>
            <input
              id="product"
              onChange={updateProduct.handleChange}
              value = {updateProduct.values.product}
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
              onChange={updateProduct.handleChange}
              value = {updateProduct.values.price}
              className=" px-2 rounded-sm outline-none"
              type="text"
            />
           
            </div>
            
            <div className="flex flex-col">
              <label className="text-white" htmlFor="">
                Variant
              </label>
              <input
               
                id="variant"
                onChange={updateProduct.handleChange}
              value = {updateProduct.values.variant}
                className="px-2 rounded-sm outline-none"
                type="text"
              />
              
            </div>
            <div className="flex flex-col">
            <label className="text-white" htmlFor="">
              Weight
            </label>
            <input
              
              id="weight"
              onChange={updateProduct.handleChange}
              value = {updateProduct.values.weight}
              className="px-2 rounded-sm outline-none"
              type="text"
            />
           
            </div>
            
            <button className="rounded-sm bg-blue-500 font-semibold" type="submit">Submit</button>
          </form>)
        }}
      </Formik>)
      
       :<p>Loading...</p>}
             
     </div>
  )};


export default UpdateProduct