"use client";

import {AiOutlineMail, AiFillLock, AiFillEye, AiFillEyeInvisible, AiOutlineLoading3Quarters} from "react-icons/ai";
import { useState, useEffect } from "react";

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [userData, setUserData] = useState({
        userIdentification: "",
        password: ""
    })

    const onChangeFn = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value})
    }

    useEffect(() => {
        const isUserData = Object.values(userData).every(el => Boolean(el))
        isUserData ? setDisabled(false) : setDisabled(true)
    }, [userData])

    const onSubmit = () => {
        setSubmit(true)
        setDisabled(true)
    }

    const {userIdentification, password} = userData;

    return (
        <div className="w-4/5 flex flex-col items-start justify-between p-4 max-h-[650px] gap-10">
            <div className="font-lightbold text-3xl capitalize text-center self-center flex flex-col">
            <span className="text-4xl">Farmers Angadi</span> 
            <span className="text-secondary">
                welcomes you
            </span>
            </div>
            <section className="flex flex-col items-center justify-between w-full h-full gap-8">

                <div className="w-3/4 flex flex-row items-center justify-center bg-tertiary rounded-xl">
                    <AiOutlineMail className="w-20"/>
                    <input onChange={onChangeFn} value={userIdentification} name="userIdentification" className="w-full h-14 outline-0 pr-6 rounded-xl" placeholder="Enter Email / Username"/>
                </div>

                <div className="w-3/4 flex flex-row items-center justify-center bg-tertiary rounded-xl">
                    <AiFillLock className="w-20"/>
                    <input onChange={onChangeFn} value={password} name="password" className="w-full h-14 outline-0 pr-6 rounded-xl" placeholder="Enter Password" type={showPassword ? "text": "password"}/>
                    {showPassword ? <AiFillEyeInvisible className="w-20 cursor-pointer" onClick={() => setShowPassword(!showPassword)}/> : <AiFillEye className="w-20 cursor-pointer" onClick={() => setShowPassword(!showPassword)}/>}
                </div>

                <button className={`w-3/5 bg-primary font-bold p-4 rounded-xl flex items-center justify-center gap-5 ${disabled ? "cursor-not-allowed bg-[#e9e9e9] text-tertiary" : "cursor-pointer hover:bg-tertiary hover:text-secondary duration-300 focus:ring-[1px] focus:ring-secondary focus:cursor-not-allowed text-tertiary"}`} 
                onClick={onSubmit}
                disabled={disabled}
                >Login
                {submit ? <AiOutlineLoading3Quarters className="animate-spin text-xl"/> : null}
                </button>
            </section>
        </div>
    )
}

export default LoginForm;
