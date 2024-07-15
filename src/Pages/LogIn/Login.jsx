import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useForm } from "react-hook-form";
import SocialLogIn from "./SocialLogIn";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || '/';

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then(result => {
        if (result.user) {
          navigate(from);
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src="https://i.ibb.co/Lpw0zQY/admin-login-removebg-preview.png" alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
              <SocialLogIn></SocialLogIn>
            </form>
            <p className="my-4 text-center">
              New to Foodking restaurant? <Link className="text-orange-500 font-bold" to='/signup'>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
