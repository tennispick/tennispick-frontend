import styled from "@emotion/styled";
import IntroContainer from "@components/login/Intro";
import LoginContainer from "@components/login/Login";

// import dynamic from "next/dynamic";
// const LoginContainer = dynamic(() => import('@components/login/Login'), { ssr: false }); 

const Login = () => {

  console.log("로그인 페이지")

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