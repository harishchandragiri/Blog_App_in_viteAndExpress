import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userContext } from './App';


export default function Login() {

    const {setUser, setVal} = useContext(userContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Navigate = useNavigate();

    const submitDetails = (e) => {
        e.preventDefault();
            axios.post('http://localhost:3001/login', {email, password}, {withCredentials:true})
            .then(res => {
                if(res.data==='Success'){
                    // Navigate('/');         
                     //To refresh the page use it
                     window.location.href ='/';   //  For it remove the below code from above
                    // setVal(email);
                    // setUser(res.data);
                }
            })
            .catch(err => console.log(err))
    }
  return (
    <div className='flex justify-center'>
        <div className='flex flex-col w-[400px] bg-[#ddecf1] mt-16 m-10 border-2 rounded-[7px] p-[5px]'>
            <h3 className='flex justify-center underline rounded-[5px] px-32 m-1 my-2 font-bold'><span>Login</span></h3>
            <form onClick={submitDetails}>
                <div className='flex flex-col mx-2 justify-center'>
                    <label htmlFor="email" className='block rounded-[5px] px-32 m-1'>Email:</label>
                    <input className='w-[370px] border border-black rounded-[5px]' type="email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col mx-2 justify-center'>
                    <label htmlFor="password" className='block rounded-[5px] px-32 m-1 '>Password:</label>
                    <input className='w-[370px] border border-black rounded-[5px]' type="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className='flex my-1 justify-center'>
                <button className='block border-2 cursor-pointer border-black rounded-[5px] w-[370px] m-1 bg-sky-400'>Login</button>
                </div>
            </form>
                <p className='block rounded-[5px] underline px-24 m-1'>Already have account?</p>
            <div className='flex justify-center'>
                <button className='block text-blue-700 font-bold w-[370px] m-1'><Link to="/register">Register</Link ></button>
            </div>
        </div>
    </div>
  )
}