import styled from "@emotion/styled";
import IntroContainer from "@components/login/Intro";
import LoginContainer from "@components/login/Login";

const Login = () => {
  return (
    <Container>
      <IntroContainer />
      <LoginContainer />
    </Container>
  )
}
const Container = styled.div({
  position: "relative",
  width: "100vw",
  height: "100vh",
  display: "flex",
});

export default Login;