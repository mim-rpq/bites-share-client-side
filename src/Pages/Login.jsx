
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Spinner from '../Components/Spinner';
import SocialLogin from '../Components/SocialLogin';
import { AuthContext } from '../Provider/AuthContext';
import signInLottie from '../assets/lottie/Eat Kind.json'
import Lottie from 'lottie-react';


const Login = () => {

    const { signIn, setUser, user, userLoading } = use(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [passwordInput, setPasswordInput] = useState('')
    const [emailInput, setEmailInput] = useState('');
    const navigate = useNavigate();
    const location = useLocation()



    const handleLogin = (e) => {
        e.preventDefault()



        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            toast.error('Please fill in both email and password');
            return
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.")
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters.")
            return;
        }





        signIn(email, password)
            .then((result) => {
                const user = result.user
                setUser(user);
                toast.success('Login successful!')
                navigate(`${location.state ? location.state : '/'}`);

            })

            .catch((error) => {
                const code = error.code;
                // console.log(code);

                if (code === 'auth/invalid-credential') {
                    toast.error('Invalid email or password. Please try again.');
                } else if (code === 'auth/user-not-found') {
                    toast.error('No account found with this email address.');
                } else if (code === 'auth/wrong-password') {
                    toast.error('Incorrect password.');
                } else if (code === 'auth/invalid-email') {
                    toast.error('Invalid email format.');
                } else if (code === 'auth/too-many-requests') {
                    toast.error('Too many attempts. Try again later.');
                } else {
                    toast.error('Something went wrong. Try again later.');
                }
            })


    }

    if (userLoading, user) return <Spinner />;
    return (
        <>
            <div className='flex lg:flex-row flex-col justify-center min-h-screen   my-12 md:my-20 lg:my-0 items-center'>
                <div className=" py-5 bg-white p-2 w-full max-w-md shadow-2xl ">

                    <h2 className='md:text-4xl text-2xl font-bold text-center py-5  text-primary
                    '>Please Login!</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            {/* email  */}
                            <label className="label 
                             text-md">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="border text-md 
                                 focus:outline-none  
                                 border-primary py-4 rounded-md placeholder-gray-300 px-3"
                                placeholder="Email "
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                            />

                            {/* password  */}
                            <div className='relative'>
                                <label className="label  text-md mt-2 ">Password</label>
                                <input name='password' onChange={(e) => setPasswordInput(e.target.value)} type={showPassword ? 'text' : 'password'} className="border border-primary text-md focus:outline-none  w-full py-4 rounded-md placeholder-gray-300 px-3" placeholder="Password" />
                                {passwordInput.length > 0 &&
                                    <button type='button'
                                        onClick={() => { setShowPassword(!showPassword) }}
                                        className='absolute top-1/2 right-6'>{showPassword ?
                                            <FaEyeSlash size={15} color='black' /> :
                                            <FaEye size={15} color='black'></FaEye>}

                                    </button>
                                }
                            </div>

                            <div className='mt-1'><a className="link link-hover text-secondary underline underline-offset-1  ">Forgot password?</a></div>
                            <button type='submit' className="btn  mt-4 bg-primary hover:bg-secondary outline-0 text-white">Login</button>


                        </fieldset>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='font-semibold text-center mt-3 text-primary'>Don't have an account? Please <Link to='/auth/register' className='text-secondary underline'>Register</Link></p>
                </div>

                <div>
                    <Lottie style={{ width: '400px', height: '400px' }} animationData={signInLottie} loop={true}></Lottie>

                </div>

            </div>

        </>
    );
};

export default Login;