import React,{useState} from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { loginUser } from "../api";

const SignIn = () => {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });
  const navigate=useNavigate()
  console.log("SignIn");

  function handleSubmit(e) {
    e.preventDefault()
    loginUser(loginFormData)
        .then(data => {
            localStorage.setItem("loggedin", true)
            navigate('/')
        })
        .catch(err => {
        })
        .finally(() => {
        })
}

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData(prev=>({
        ...prev,
        [name]:value
    }))
  }

  return (
    <>
    <p className="ml-56 mt-4">username:-saksham, password:-123</p>
      <div className="bg-slate-500 max-h-full">
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      for="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your username
                    </label>
                    <input
                      type="username"
                      name="username"
                      id="username"
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="username"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-blue-700  bg-slate-100  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <NavLink
                      to={"/signup"}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;
