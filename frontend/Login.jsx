function Login(){
    return(
       
        <div>
            <h1>Dairy Management System</h1>


            <form>
                <input type="email" placeholder="Enter Email" required /> <br /><br />
                <input type="password" placeholder="Enter Password" required /> <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    
    )
}

export default Login;