import React, {useRef} from 'react';
import Axios from 'axios';
import '../styles/login.css';


export default function Login() {
    const formRef=useRef();
    const handleLogin=(e)=>{
        e.preventdefault();
        const body={
            email:formRef.current.email.value,
            password:formRef.current.password.value
        }
        Axios.post("/",body).then(r=>{
            localStorage.setItem('token',r.data.token);
        });

    }
  return (
    <div>
        <form ref={formRef}>
            <div className='form'>
                <img className='logo' src='https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1200&q=75' alt='img'/>
                <p>Login with your email & password</p>
                <label className='email'>Email</label><br/>
                <input type="email" name='email' className='mail' placeholder='abc@gmail.com' />
                <br/>
                <label className='password'>Password</label>
                <br/>
                <input type="password" name='password'className='input-password' placeholder='********'/><br/>
                <button className='button' onClick={(e)=>handleLogin(e)}>Login</button>
                <button className=' button1'>login with Google</button>
                <button className=' button2'>login with Mobile</button>

            </div>
            
        </form>
    </div>
  )
}
