'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import googleLogo from '../icons/google.svg';
import facebookLogo from '../icons/facebook.svg';
import '../../globals.css';

export default function Login() {
	const [state, setState] = useState({
		email: ' ',
		password: ' ',
		rememberMe: 'false'	
	});
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [generalError, setGeneralError] = useState('');

	const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const noCyrillicRegex = /^[^\u0400-\u04FF]*$/;
        return emailRegex.test(email) && noCyrillicRegex.test(email);
    };

	const validatePassword = (password:string): boolean => {
		// Минимальная длина 8 символов
		const minLength = 8;
	  
		// Регулярное выражение для проверки на наличие различных типов символов
		const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	  
		return password.length >= minLength && regex.test(password);
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (generalError === 'Invalid password or email') {
			setGeneralError('');
		}
		
		if (!state.email && e.target.name === 'email') {
            setEmailError('Email is required');
        } else if (!validateEmail(state.email) && e.target.name === 'email') {
            setEmailError('Invalid email address');
        } else if (e.target.name !== 'email') {
			setEmailError('');
		} else {
            setEmailError('');
        }

		if (!state.password && e.target.name === 'password') {
            setPasswordError('Password is required');
        } else if (!validatePassword(state.password) && e.target.name === 'password') {
            setPasswordError('Invalid password');
        } else if (e.target.name !== 'password') {
			setPasswordError('');
		} else {
            setPasswordError('');
        }

		setState({ ...state, [e.target.name]: e.target.value });
	}
	
	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (emailError || passwordError) {
			setPasswordError('')
			setEmailError('')
			setGeneralError('Invalid password or email')
		}
    };
	
	// const handleForm = (event:any) => {
	// 	setState(event.target.value) {}
	// }
	
	// function Submit() {
	// 	const { pending } = useFormStatus();
	// 	return (
	// 		<button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
	// 			Sign in</button>
	// 	);
	// }

	return (
		<section className="bg-gray-50 h-full box-border">
			<div className="flex flex-col items-center justify-center px-6 py-11 mx-auto md:h-screen lg:py-0">
				<a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
					<img className="w-8 h-8 mr-2" src="https://cdn-icons-png.flaticon.com/128/2773/2773663.png" alt="logo"/>
					Yoga  
				</a>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
							Sign in to your account
						</h1>
						<form className="space-y-4 md:space-y-6" action="#">
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
								<input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@domain.com" required/>
								{emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
							</div>
							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
								<input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required/>
								{passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
								{generalError && <p className="text-red-500 text-lg mt-1">{generalError}</p>}
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input onChange={handleChange} name="rememberMe" id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"/>
									</div>
									<div className="ml-3 text-sm">
										<label htmlFor="remember" className="text-gray-500">Remember me</label>
									</div>
								</div>
								<a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
							</div>
							<div className="divider">OR</div>
                            <div className='flex justify-around flex-wrap gap-4'>
                                <button className="btn"><Image src={googleLogo} alt="google_logo" width={34.5} height={34.5}></Image>Login with Google</button>
                                <button className="btn"><Image src={facebookLogo} alt="facebook_logo" width={20} height={20}></Image>Login with Facebook</button>
                            </div>
							<button onClick={handleSubmit} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
	 						Sign in</button>
							<p className="text-sm font-light text-gray-500">
								Don’t have an account yet? <Link href="./register" className="font-medium text-primary-600 hover:underline">Sign up</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
