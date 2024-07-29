"use client";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";

const BasicSchema = yup.object().shape({
  product: yup.string().max(25).required("Required"),
  price: yup.number().required("Required").positive("Price should be positive"),
  variant: yup.string().required("Required").max(15),
  weight: yup.number().required("Required"),
});

const onSubmit = () =>{
  console.log("submitted")
}

const Product = () => {
  const { values, handleBlur, handleChange, handleSubmit,errors,touched } = useFormik({
    initialValues: {
      product: "",
      price: "",
      variant: "",
      weight: "",
    },
    validationSchema: BasicSchema,
    onSubmit,
  });
  console.log(errors);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-700">
      <form
        action=""
        className="flex flex-col justify-right text-start bg-gray-500 p-14 pt-6 gap-4 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-bold pb-3 text-white">
          Products
        </h1>
        <div className="flex flex-col">
        <label className="text-white" htmlFor="">
          Product Name
        </label>
        <input
          value={values.product}
          onChange={handleChange}
          id="product"
          className="px-2 rounded-sm outline-none"
          type="text"
        />
        {touched.product && (
          <p className=" text-xs text-red-600 mt-2" id="email-error">
          {errors.product}
        </p>
        )}
        </div>
        
        
        <div className="flex flex-col">
        <label className="text-white" htmlFor="">
          Price
        </label>
        <input
          id="price"
          value={values.price}
          onChange={handleChange}
          className=" px-2 rounded-sm outline-none"
          type="text"
        />
        {touched.price && (
          <p className=" text-xs text-red-600 mt-2" id="email-error">
          {errors.price}
        </p>
        )}
        </div>
        
        <div className="flex flex-col">
          <label className="text-white" htmlFor="">
            Variant
          </label>
          <input
            value={values.variant}
            onChange={handleChange}
            id="variant"
            className="px-2 rounded-sm outline-none"
            type="text"
          />
          {touched.variant && (
          <p className=" text-xs text-red-600 mt-2" id="email-error">
          {errors.variant}
        </p>
        )}
        </div>
        <div className="flex flex-col">
        <label className="text-white" htmlFor="">
          Weight
        </label>
        <input
          value={values.weight}
          onChange={handleChange}
          id="weight"
          className="px-2 rounded-sm outline-none"
          type="text"
        />
        {touched.weight && (
          <p className=" text-xs text-red-600 mt-2" id="email-error">
          {errors.weight}
        </p>
        )}
        </div>
        
        <button className="rounded-sm bg-blue-500 font-semibold">Submit</button>
      </form>
    </div>
  );
};

export default Product;
