import './Login.css'

function Login() {
    return (
        <div className=" mt-20 w-3/4 m-auto flex flex-row place-content-around">
                <div className="login h-1/3 w-5/12 border border-1 border-black">
                    <h2>Welcome to AccessibleU</h2>
                    <p>To access AccessibleU, please log in using your university email address. This service is exclusively available to university students in Texas.</p>   
                    <p>If you encounter any issues or have questions, please contact our support team at <a href="mailto:support@[yourprojectemail.com]">support@[yourprojectemail.com]</a>.</p>
                </div>
                <div className=" h-1/3 w-5/12 border border-1 border-black"> 
                    <p></p>
                    <form>
                        <div className=" flex flex-col container"> 
                            <input type="text" placeholder="Enter your school email" name="username" required/>
                            <input type="password" placeholder="Password" name="password" required/>
                            <button type="submit">Login</button> 
                        </div> 
                        <center> <h1> AccessibleU </h1> </center> 
                    </form> 
                </div>
        </div>      
    );
}

export default Login;