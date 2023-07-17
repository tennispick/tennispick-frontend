import Input from "@components/common/Input";
import styled from "@emotion/styled";

const Login = () =>{

  console.log("로그인 컴포넌트");

  return(
    <section
      css={{
        position: "relative",
        width: "50%",
      }}
    >
      <LoginContainer>
        <div>타이틀</div>
        <form>
          <div>
            <Input>
              <Input.Label />
            </Input>
          </div>
          <div>버튼영역</div>
        </form>
        <div>또는</div>
        <div>아이디 비밀번호 찾기 영역</div>
      </LoginContainer>
    </section>
  )
};

const LoginContainer = styled.div({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
});

export default Login;