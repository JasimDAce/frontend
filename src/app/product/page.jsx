import React from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";

// const SignupSchema = Yup.object().shape({
//     name: Yup.string()
//       .min(2, "Too Short!")
//       .max(50, "Too Long!")
//       .required("Name is required"),
//     email: Yup.string().email("Invalid email").required("Required"),
//     confirmPassword: Yup.string().oneOf(
//       [Yup.ref("password"), null],
//       "Passwords must match"
//     ),
//     password: Yup.string()
//       .required("Please Enter your password")
//       .matches(
//         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
//       )
  
//       // .matches(/[a-z]/,'must include lowercase')
//       // .matches(/[A-Z]/,'must contain uppercase')  
//       ,
//   });

const Product = () => {
   // const router = useRouter();
    const signupForm = useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: (values ,{resetForm ,setSubmitting}) => {
        console.log(values);
        // send values to backend
        //making a request on backend to save data
        //fetch or we can use axios 
        //install axios
        //https is secure and we have to have a certificate to use it
        //fetch we have to set it in json in axios we dont need it
        axios.post('http://localhost:5000/user/add',values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success('User Registered Successfully');
          //router.push('it is used to redirect to any page')
          router.push('/');
        }).catch((err) => {
          console.log(err);
          if(err.response.data.code === 11000){
            toast.error('Email already exists');
          }
          setSubmitting(false);
        });
      },
      validationSchema: SignupSchema,
    });
  
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-500'>
        <form action="" className='flex flex-col justify-right text-start items-center bg-gray-400 p-10'>
            <label htmlFor="">Product Name</label>
            <input className='px-2' type="text" />
            <label htmlFor="">Price</label>
            <input className='px-2' type="text" />
            <label htmlFor="">Color</label>
            <input className='px-2' type="text" />
            <label htmlFor="">Weight</label>
            <input className='px-2' type="text" />
            <label htmlFor="">Variant</label>
            <input className='px-2' type="text" />
        </form>
    </div>
  )
}

export default Product