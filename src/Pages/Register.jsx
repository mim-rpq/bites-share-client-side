import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import SocialLogin from '../Components/SocialLogin';
import Spinner from '../Components/Spinner';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthContext';

const Register = () => {
    const { createUser, setUser, userLoading, updateUserProfile } = use(AuthContext);
    const [showPassword, setShowPassword] = useState(false)
    const [passwordInput, setPasswordInput] = useState('')
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, email, photoURL, password);

        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegExp.test(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }
        if (password.length < 8) {
            toast.error('Password must be at least 8 characters long.');
            return;
        }

        if (!/[a-z]/.test(password)) {
            toast.error('Password must include at least one lowercase letter.');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            toast.error('Password must include at least one uppercase letter.');
            return;
        }

        if (!/[0-9]/.test(password)) {
            toast.error('Password must include at least one number.');
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user

                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoURL })
                        toast.success('User created successfully')
                        navigate('/');
                    })

            })

            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            })

    }




    if (userLoading) return <Spinner />;
    return (
        <>
            <div className='flex justify-center py-16 px-4   min-h-screen items-center'>
                <div className=" bg-white border border-primary p-2 w-full max-w-md shadow-2xl ">

                    <h2 className='md:text-3xl font-bold text-center py-3 text-primary'>Register now!</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">

                            {/* name  */}
                            <label className="label  text-primary text-md">Name</label>
                            <input name='name' type="text" className="border text-md text-primary focus:outline-none border-primary w-full py-4 rounded-md placeholder-gray-400 px-3" placeholder="Name" required />
                            {/* photo url  */}
                            <label className="label mt-2  text-primary text-md">Photo URL</label>
                            <input name='photoUrl' type="text" className="border text-md text-primary focus:outline-none border-primary w-full py-4 rounded-md placeholder-gray-400 px-3" placeholder="Photo URL" required />
                            {/* email  */}
                            <label className="label mt-2 text-primary text-md">Email</label>
                            <input name='email' type="email" className="border text-md text-primary focus:outline-none border-primary w-full py-4 rounded-md placeholder-gray-400 px-3" placeholder="Email" required />
                            {/* password */}
                            <label className="label mt-2 text-primary text-md">Password</label>
                            <div className='relative'>
                                <input name='password'
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                    type={showPassword ? 'text' : 'password'} className="border text-md text-primary focus:outline-none border-primary w-full py-4 rounded-md placeholder-gray-400 px-3" placeholder="Password" />
                                {
                                    passwordInput.length > 0 && <button
                                        type='button' onClick={() => { setShowPassword(!showPassword) }}
                                        className='absolute top-1/3 right-6'>{showPassword ?
                                            <FaEyeSlash color='black' size={15} /> :
                                            <FaEye color='black' size={15}></FaEye>}</button>
                                }
                            </div>

                            <button type='submit' className="btn  mt-4 bg-primary outline-0 text-white hover:bg-secondary">Register</button>


                            <SocialLogin></SocialLogin>
                            <p className=' text-primary font-semibold text-center mt-3'>Already have an account? Please <Link to='/auth/login' className='text-secondary underline'>Login</Link></p>


                        </fieldset>
                    </form >
                </div>
            </div>

        </>
    );
};

export default Register;