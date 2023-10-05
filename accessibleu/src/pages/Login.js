import './Login.css'

function Login() {
    return (
        <div className=" mt-20 w-full flex flex-row place-content-around">
                <div className="inline-block h-1/3 w-1/2 border border-1 border-black">
                    LOGO
                </div>
                <div className=" h-1/3 w-1/4 border border-1 border-black"> 
                    <center> <h1> Student Login Portal </h1> </center> 
                    <form>
                        <div className=" flex flex-col container"> 
                            <label>Username : </label> 
                            <input type="text" placeholder="Enter Username" name="username" required/>
                            <label>Password : </label> 
                            <input type="password" placeholder="Enter Password" name="password" required/>
                            <button type="submit">Login</button> 
                        </div> 
                    </form> 
                </div>
        </div>      
    );
}

export default Login;