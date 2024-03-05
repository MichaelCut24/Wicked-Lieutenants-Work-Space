// LOGIN PAGE
import './Login.css'
import PopCreate from './login-components/PopCreate.js';
import LoginState from './login-components/firebase-auth/LoginState.js';
import SignInForm from './login-components/firebase-auth/SignIn.js';
import FirebaseGoogle from './login-components/firebase-auth/FirebaseGoogle.js';

import Post from './home-components/Post.js';

function Login() {
    return (
        <>
            <div className="page flex flex-row">{/* Whole page container */}
                <div className="relative w-2/3 "> {/* Left half of page divider */}
                    <div className="wlcmsg absolute mt-1/4"> {/* Login message container */}
                        <div className='flex flex-row'>
                            <h2>Welcome to</h2>
                            <h1> AccessibleU </h1>    
                        </div>
                        <p className='mt-4'>If you are a registerd university student in Texas looking to
                        access AccessibleU, please log in using your university email address.</p>
                        <p className='mt-4'>This service is exclusively available to university students in Texas.</p>   
                        <p className='mt-4'>If you encounter any issues or have questions, please contact our support team at 
                        <a href="mailto:support@[yourprojectemail.com]"> supportemail</a>.</p>                
                    </div> 
                </div>


                <div className="relative w-1/2"> {/* Right half of page divider */}
                    <div className="form absolute border boder-1 border-black"> {/* Login form container */}
                        <div className=" flex flex-col container"> 
                            <SignInForm/>
                            
                            <div className='third_party mt-4'> {/* Third Party login options divider */}
                                <FirebaseGoogle/>
                            </div>
                        </div>  
                        {/* This is for the Create Account Popup. */}
                        <div className="PopCreate">
                            <PopCreate/>
                        </div>
                    </div>

                    <div>
                        <LoginState/>
                    </div>   
                </div> 
            </div>
            <div className='w-1/2 m-96'>
                <Post/>
            </div>
        </>
    );
}

export default Login;