
import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    

    const handelSubmitLogin = (e) => {
        e.preventDefault()
        console.log("button was click..");
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        loginUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content ">
                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handelSubmitLogin}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                            <p>New to website? please <Link className='link-hover' to="/Register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;