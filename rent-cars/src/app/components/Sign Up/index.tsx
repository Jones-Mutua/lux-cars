// import './App.css';
import React ,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Img5 from '../../assents/images/undraw_By_the_road_re_vvs7.svg'

const Register = styled.div`
background: url(${Img5});

`



type UserSubmitForm = {
  fullname: string;
  nationalId: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

export  function SignUp() {
 
     const [fullname, setFullname ] = useState('');
    //  const [username, setUsername ] = useState('');
     const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
     const [ nationalId, setNationalId ] = useState('');
    //  const [ acceptTerms, setAcceptTerms ] = useState('');
     const [ confirmPassword, setConfirmPassword ] = useState('');



  
  const validationSchema = Yup.object().shape({

    fullname: Yup.string().required('Fullname is required'),
    nationalId: Yup.string()
      .required('NationalId is required')
      .min(7, 'NationalId must be at least 7 ')
      .max(20, 'NationalId must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    // acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = () => {
    // console.log(JSON.stringify(data, null, 2));

    axios.post("http://localhost:2500/api/auth/signup",{
   email,
   fullname,
   nationalId,
   password,
  //  nationalid,
  //  acceptTerms,
   confirmPassword,

})
.then((res)=> {
  console.log(res.data);
})
.catch((err) => {
  console.log(err.message)
});

  };


  return (
    <Register className="text-sm h-full  w-full font-bold text-gray-900   block" >
       <div className="max-w-md w-full mx-auto">
                <div className="text-3xl font-bold
            text-gray-900 mt-4 text-center">Create an Acount </div>
               {/* <div className="text-center font-medium text-xl" >
                   <Link className="text-blue-500 hover:text-blue-900" to="/login">or Login here</Link>
                </div> */}
    
            </div>
            <div>
           
    <div className="max-w-md w-full mx-auto mt-4 bg-transparent p-8 border border-blue-300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="text-sm font-bold text-gray-900 block">Full Name</label>
          <input
          onChange={e => setFullname(e.target.value)}
            type="text"
            value={fullname}
            {...register}
            className={`w-full p-2 border border-blue-300 rounded mt-1 ${errors.fullname ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.fullname?.message}</div>
        </div>

        <div className="form-group">
          <label className="text-sm font-bold text-gray-900 block">National Id</label>
          <input
          value={nationalId}
          onChange={e => setNationalId(e.target.value)}
            type="text"
            {...register}
            className={`w-full p-2 border border-blue-300 rounded mt-1 ${errors.nationalId? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.nationalId?.message}</div>
        </div>

        <div className="form-group">
          <label className="text-sm font-bold text-gray-900 block">Email</label>
          <input
          value={email}
          onChange={e => setEmail(e.target.value)}
            type="text"
            {...register}
            className={`w-full p-2 border border-blue-300 rounded mt-1 ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="form-group">
          <label className="text-sm font-bold text-gray-900 block">Password</label>
          <input
          onChange={e => setPassword(e.target.value)}
            type="password"
            value={password}
            {...register}
            className={`w-full p-2 border border-blue-300 rounded mt-1 ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group">
          <label className="text-sm font-bold text-gray-900 block">Confirm Password</label>
          <input
          onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            autoComplete="off"
            value={confirmPassword}
            {...register}
            className={`w-full p-2 border border-blue-300 rounded mt-1 ${
              errors.confirmPassword ? 'is-invalid' : ''
            }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>
        <div className="flex items-center justify-between">
        <div className="flex items-center ">
        
           <p   className="ml-2 text-sm text-gray-600 ">
            I  agree to the Terms
          </p> 
         
         

       </div>
       
        </div>

        <div className="form-group" >
          <button onClick={onSubmit} type="submit" className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-md text-white btn btn-primary">
            <Link  to="/">Register</Link>
          </button>
          <div className="font-medium  text-sm  text-blue-500" 
          
          
          >
          <Link to="/login">Already have an acount</Link>
          </div>

          <button
            type="button"
            onClick={() => reset()}
            className="text-sm text-blue-500 float-right"
          >
            Reset
          </button>
        </div>
      </form>
    </div>

   
   </div>
    </Register>
  );
};








