import React, { useState } from 'react';
import "../index.css"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function HidePassword() {
    const [typeStatus, setTypeStatus] = useState("password");

    const secretPass = <AiFillEye className='absolute right-3 top-2 lg:top-3  w-5 h-5 cursor-pointer' />

    const showPass = <AiFillEyeInvisible className='absolute right-3 top-2 lg:top-3 w-5 h-5 cursor-pointer' />

    const [typePass, setTypePass] = useState("secret")

    const changePassType = () => {
        setTypeStatus(typeStatus === "password" ? "text" : "password")
        setTypePass(typePass === "secret" ? "show" : "secret")
    }

    return (
        <div className='relative w-full'>

            <input type={typeStatus} className='input' id="loginPassword" />

            { /* Icons */}

            <div onClick={changePassType}>
                {typePass === "secret" ? secretPass : showPass}
            </div>



        </div>
    )
}

export default HidePassword