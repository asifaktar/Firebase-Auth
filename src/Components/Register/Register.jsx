

import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';



const Register = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate();


    const handelSubmitRegister = (e) =>{
        e.preventDefault();
        e.target.reset();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password,name);

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            navigate("/");
        })
        .catch(error =>{
            console.log(error.message)
            alert('এই ইমেইলটি দিয়ে আগে থেকেই অ্যাকাউন্ট খোলা হয়েছে।');
        })

        
    }
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content ">
                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handelSubmitRegister}>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" name="name" className="input" placeholder="Name" />
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name="password" className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </form>
                            <p>Already have an account? please <Link className='link-hover' to="/Login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;