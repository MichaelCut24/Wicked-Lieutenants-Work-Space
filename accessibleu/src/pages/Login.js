// LOGIN PAGE

// NOTE: Everything in the className part is tailwind CSS, yall can delete everything in it once
// Lgin.css is created. Go to https://v2.tailwindcss.com/docs/ to lookup the syntax and
// convert tailwind into Login.css if Danny has not done it( he will eventually). Or yall can just delete everything
// and start over.

import './Login.css'

function Login() {
    return (
        <div className="page flex flex-row"> {/* Whole page container */}
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
                    <form>
                        <div className=" flex flex-col container"> 
                            <input type="text" placeholder="Enter your school email" name="username" required/>
                            <input type="password" placeholder="Password" name="password" required/>
                            <center><button type="submit">Login</button> </center>
                        </div>   
                    </form> 
                    <center><img src='./AccessibleU-logos.jpeg' alt="logo"/></center>
                </div>
            </div>    
        </div>      
    );
}

export default Login;