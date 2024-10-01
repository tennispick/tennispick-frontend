import { styled } from 'styled-system/jsx';
import Intro from '../component/Intro';
import Login from '../component/Login';

const LoginScreen = () => {
  return (
    <Container>
      <Intro />
      <Login />
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

export default LoginScreen;
