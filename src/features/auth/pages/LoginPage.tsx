import Intro from '../components/Intro';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex">
      <Intro />
      <Login />
    </div>
  );
};

export default LoginPage;
