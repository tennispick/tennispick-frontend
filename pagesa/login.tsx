import IntroContainer from '@components/login/Intro';
import LoginContainer from '@components/login/Login';
import { styled } from 'styled-system/jsx';

const Login = () => {
  return (
    <Container>
      <IntroContainer />
      <LoginContainer />
    </Container>
  );
};
const Container = styled('div', {
  base: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
  },
});
export default Login;
