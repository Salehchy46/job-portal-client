import Lottie from 'lottie-react';
import signInLottie from '../../assets/Lotties/signInLottie.json'
import React from 'react';

const SignIn = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={signInLottie}></Lottie>
                    <p className="text-red-600 ml-4 text-center">{regError}</p>
                    <p className="text-green-600 ml-4 text-center">{success}</p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Regiter</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SignIn;