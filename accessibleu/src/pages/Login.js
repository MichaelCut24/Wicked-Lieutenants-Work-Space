import './Login.css'

function Login() {
    return (
        <div className="page m-auto flex flex-row border border-1 border-black">
            <div className="relative w-1/2 border border-1 border-black">
                <div className="wlcmsg absolute mt-1/4 h-1/3 w-80 border border-1 border-black">
                    <h2>Welcome to AccessibleU</h2>
                    <p>If you are a registerd university student in Texas looking to
                    access AccessibleU, please log in using your university email address. 
                    This service is exclusively available to university students in Texas.</p>   
                    <p>If you encounter any issues or have questions, please contact our support team at 
                    <a href="mailto:support@[yourprojectemail.com]"> supportemail</a>.</p>
                </div> 
            </div>

            <div className="relative w-1/2 border border-1 border-black">
                <div className="form absolute h-80 w-80 border border-1 border-black"> 
                    <center> <h1> AccessibleU </h1> </center> 
                    <form>
                        <div className=" flex flex-col container"> 
                            <input type="text" placeholder="Enter your school email" name="username" required/>
                            <input type="password" placeholder="Password" name="password" required/>
                            <button type="submit">Login</button> 
                        </div>   
                    </form> 
                </div>
            </div>    
        </div>      
    );
}

export default Login;