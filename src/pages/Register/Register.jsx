import Lottie from "lottie-react";
import registerLottie from '../../assets/registerLottie.json'
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import AuthContext from "../../context/AuthContext/AuthContext";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*(|/)]/.test(password);

        const user = { email, password };
        console.log(user);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })

        setRegError('');
        setSuccess('');

        if (password.length < 10) {
            setRegError('Password must contain at least 10 Character.')
            return;
        }
        if (!hasUpperCase) {
            setRegError('Password must contain at least an Upper Case Letter.')
            return;
        }
        if (!hasLowerCase) {
            setRegError('Password must contain at least a Lower Case Letter.')
            return;
        }
        if (!hasNumber) {
            setRegError('Password must contain at least a Number.')
            return;
        }
        if (!hasSpecial) {
            setRegError('Password must contain a Special Character.')
            return;
        }
        if (password.length > 9 && hasUpperCase && hasLowerCase && hasNumber && hasSpecial) {
            setSuccess('Password is set successfully.')
            return;
        }

        
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registerLottie}></Lottie>
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

export default Register;