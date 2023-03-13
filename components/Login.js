import React, {useState} from "react";
import { useAuth } from "../context/AuthContext";   

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [logginIn, setLoggingIn] = useState(true);

    const { signup, login, currentUser } = useAuth();

    async function submitHandler() {
        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        if(logginIn) {

            try {
                await login(email, password)
            } catch (error) {
                setError("icorect email or password")
            }

            return  
        }
        await signup(email, password)
    }

    return (
        <div className="flex-1 flex flex-col justify-center items-center text-xs sm:text-sm gap-2 sm:gap-4 ">

            <h1 className = "font-extrabold text-2xl sm:text-4xl select-none">{logginIn ? "LOGIN" : "REGISTER"}</h1>

            {error && <div className="border border-solid w-full text-center text max-w-[40ch] border-rose-300 text-rose-300 py-2">error</div>}

            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type="text" placeholder="email address" className="outline-none text-slate-900
            p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300"></input>

            <input value = {password} onChange = {(e) => setPassword    (e.target.value)} type="password" placeholder="password" className="outline-none text-slate-900 
            p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300"></input>

            <button onClick={submitHandler } className='w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 
            relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full 
            after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900'>
                <h2 className="relative z-20 ">
                    SUBMIT 
                </h2>
            </button>

            <h2 onClick={() => setLoggingIn(!logginIn)} className = "duration-300 hover:scale-125 cursor-pointer select-none">
                {!logginIn ? "Login" : "Register"}
                </h2>
        </div>
    );
}