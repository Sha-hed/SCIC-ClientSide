import { useContext } from "react";
import { AuthContext } from "../route/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {

    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
            .then((result) => {
                toast('User Created Successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log(result)
                navigate('/')
            })
            .catch((error) => console.log(error.message))
    }

    return (
        <div className="min-h-screen">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                    </div>
                    <div className="w-[400px] h-[400px] p-5 bg-base-100 shrink-0 shadow-2xl rounded-xl">
                        <form onSubmit={handleSubmit} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                        <p className="text-center">Already Have an Account? Please<Link to={'/signUp'} className="btn btn-link">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;