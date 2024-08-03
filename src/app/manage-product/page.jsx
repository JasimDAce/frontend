'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'


const ManageProduct = () => {
    const [productData, setproductData] = useState([]);


    const deleteUser = (id) => {
      axios.delete('http://localhost:5000/product/deletebyid/' + id)
      .then((result) => {
        toast.success('User Deleted Successfully');
        fetch();
      }).catch((err) => {
        console.log(err);
        toast.error('Failed to Delete')
        
      });
    }
    const fetch = async () =>{
     const res = await axios.get('http://localhost:5000/product/getall')
        console.table(res.data);
        setproductData(res.data)
    }

    useEffect(() => {
      fetch();
    }, [])
    
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <thead className="bg-gray-50 dark:bg-neutral-800">
              <tr>
               
                <th scope="col" className="ps-6 py-3 text-start">
                  <label
                    htmlFor="hs-at-with-checkboxes-main"
                    className="flex"
                  >
                    
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      id="hs-at-with-checkboxes-main"
                    />
                    <span className="sr-only">Checkbox</span>
                  </label>
                </th>
                <th
                  scope="col"
                  className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                >
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Product Name
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                    Weight in kg
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                    Variant
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Portfolio
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Price
                    </span>
                  </div>
                </th>
                <th colSpan={2} scope="col" className="px-6 py-3 text-end" />
              </tr>
            </thead>
            <tbody className="dark:bg-neutral-800  divide-y divide-gray-200 dark:divide-neutral-700">
                {
                    
                    productData.map(user=>{
                        return (
                            <tr key= {user._id}>
                <td className="size-px whitespace-nowrap">
                  <div className="ps-6 py-3">
                    <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                      <input
                        type="checkbox"
                        className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="hs-at-with-checkboxes-1"
                      />
                      <span className="sr-only">Checkbox</span>
                    </label>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                    <div className="flex items-center gap-x-3">
                      
                      <div className="grow">
                        <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                          {user.product}
                        </span>
                        
                      </div>
                    </div>
                  </div>
                </td>
                <td className="h-px w-72 whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      {user.price}
                    </span>
                    
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                     {user.variant}
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <div className="flex items-center gap-x-3">
                      <span className="text-xs text-gray-500 dark:text-neutral-500">
                        1/5
                      </span>
                      <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="text-sm text-gray-500 dark:text-neutral-500">
                      {(user.weight)}
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-1.5">
                    
                    <Link
                      className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                      href={"/update-product/"+ user._id}
                    >
                      Edit
                    </Link>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-1.5">
                    <button
                      className="inline-flex items-center gap-x-1 text-sm text-white px-2
                      bg-red-600 decoration-2 font-medium rounded-md "
                      href="#"
                      onClick={() => { deleteUser(user._id)}}
                    >
                      Delete
                    </button>
                  </div>
                </td>
                  </tr>
                        )
                    })
                }
              
       
            </tbody>
          </table>
  )
}

export default ManageProduct