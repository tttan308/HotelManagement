import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../api/";

const Login = () => {
  const handleGoogleLogin = () => {
    // Implement Google login logic
    console.log("Google login clicked");
  };

  const handleGitHubLogin = () => {
    // Implement GitHub login logic
    console.log("GitHub login clicked");
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await apiLogin(data);
    console.log(response);
    if (response.access_token) {
      let localStorageData = window.localStorage.getItem(
        "persist:hotelmanagement/user"
      );
      localStorageData = JSON.parse(localStorageData);
      if (!localStorageData) localStorageData = {};
      localStorageData.token = JSON.stringify(response.access_token);
      window.localStorage.setItem(
        "persist:hotelmanagement/user",
        JSON.stringify(localStorageData)
      );
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              type="submit"
              value="Sign In"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mt-4">
            you don't have an account?{" "}
            <a
              href="/signup"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              signup
            </a>
          </div>

          <div className="mt-4 flex flex-col justify-center gap-2">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="button"
              onClick={handleGoogleLogin}
            >
              Sign In with Google
            </button>
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleGitHubLogin}
            >
              Sign In with GitHub
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
