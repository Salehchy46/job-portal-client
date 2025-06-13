import React, { useContext } from 'react';
import AuthContext from './AuthContext';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn w-full'>Google</button>
        </div>
    );
};

export default SocialLogin;