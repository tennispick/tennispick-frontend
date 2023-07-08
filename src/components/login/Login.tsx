import styled from "@emotion/styled";

const Login = () =>{
  return(
    <Container>
      <LoginContainer>
        로그인 야미
      </LoginContainer>
    </Container>
  )
};

const Container = styled.div({
  position: "relative",
  width: "50%",
});
const LoginContainer = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
});

export default Login;