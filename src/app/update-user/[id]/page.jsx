"use client";
import axios from "axios";
import { Formik } from "formik";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const { id } = useParams(); //what does this line means??
  const [userData, setuserData] = useState(null);
  const getUserData = async () => {
    const res = await axios.get("http://localhost:5000/user/getbyid/" + id);
    console.log(res.data);
    setuserData(res.data);
  };
  useEffect(() => {
    getUserData();
  }, []);

  const submitForm = (values, { resetForm, setSubmitting }) => {
    console.log(values);
    axios
      .put("http://localhost:5000/user/update/" + id, values)
      .then((response) => {
        console.log(response.status);
        resetForm();
        toast.success("User Updated Successfully");
        //router.push('it is used to redirect to any page')
        //router.push('/');
      })
      .catch((err) => {
        console.log(err);

        toast.error("Not Updated");

        setSubmitting(false);
      });
  };

  return (
    <div className="max-w-[80%] mx-auto">
      <h1 className="text-center font-bold mt-5 text-3xl ">Update User</h1>

      {userData !== null ? (
        <Formik initialValues={userData} onSubmit={{ submitForm }}>
          {(updateform) => {
            return (
              <form
                onSubmit={updateform.handleSubmit}
                action=""
                className="flex flex-col justify-right text-start bg-gray-500 p-14 pt-6 gap-4 rounded-lg mt-6"
              >
                <div className="flex flex-col">
                  <label className="text-white" htmlFor="">
                    Name
                  </label>
                  <input
                    id="name"
                    onChange={updateform.handleChange}
                    value={updateform.values.name}
                    className="px-2 rounded-sm outline-none"
                    type="text"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white" htmlFor="">
                    Email
                  </label>
                  <input
                    id="email"
                    onChange={updateform.handleChange}
                    value={updateform.values.email}
                    type="email"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white" htmlFor="">
                    Password
                  </label>
                  <input
                    id="password"
                    onChange={updateform.handleChange}
                    value={updateform.values.password}
                    className="px-2 rounded-sm outline-none"
                    type="password"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white" htmlFor="">
                    City
                  </label>
                  <input
                    id="city"
                    onChange={updateform.handleChange}
                    value={updateform.values.city}
                    className="px-2 rounded-sm outline-none"
                    type="text"
                  />
                </div>

                <button
                  className="rounded-sm bg-blue-500 font-semibold"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default UpdateUser;
