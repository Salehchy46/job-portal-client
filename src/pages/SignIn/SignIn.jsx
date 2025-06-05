import Lottie from 'lottie-react';
import signInLottie from '../../assets/Lotties/signInLottie.json'
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SignIn = () => {

    const { logInUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        logInUser(email, password)
            .then(result => {
                console.log('sign in', result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={signInLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Log In now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Log In</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;