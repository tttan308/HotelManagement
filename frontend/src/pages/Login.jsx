import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        username: username,
        password: password
      });

      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic
    console.log("Google login clicked");
  };

  const handleGitHubLogin = () => {
    // Implement GitHub login logic
    console.log("GitHub login clicked");
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-xs'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <h1 className='text-center font-bold text-xl mb-5'>Đăng nhập</h1>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
              Tên đăng nhập
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Tên đăng nhập'
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
              Mật khẩu
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='Mật khẩu'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className='flex items-center justify-between'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
              onClick={handleLogin}
            >
              Đăng nhập
            </button>
          </div>

          <div className='mt-4'>
            Bạn chưa có tài khoản?{" "}
            <a href='/signup' className='text-blue-600 dark:text-blue-500 hover:underline'>
              Đăng ký
            </a>
          </div>

          <div className='mt-4 flex flex-col justify-center gap-2'>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ' type='button' onClick={handleGoogleLogin}>
              Đăng nhập với Google
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button' onClick={handleGitHubLogin}>
              Đăng nhập với GitHub
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
