import React from 'react'
import Classes from './login.module.css';

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
        <h1 className = 'text-3xl text-center mt-10'>Login Page</h1>
        <button className={Classes.loginBtn}>Login</button>
        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia corporis nostrum assumenda ea voluptate ad! Dignissimos, sit recusandae natus officiis error nisi nobis vel voluptatem odio ullam illo voluptatibus, labore repudiandae, consequuntur asperiores quisquam sed! Facere voluptatibus obcaecati molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eligendi eius aliquid nobis nihil, at repudiandae eum alias, maxime amet saepe inventore omnis. Reiciendis repellat voluptatibus, odio deserunt nam adipisci.</p>
    </div>
  )
}

export default Login;