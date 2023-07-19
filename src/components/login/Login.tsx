import styled from "@emotion/styled";
import Input from "@components/common/Input";
import Divider from '@components/common/Divider';
import Button from "@components/common/Button";

const Login = () => {

  const onSubmitHandler = () => {

  }

  return (
    <section
      css={{
        position: "relative",
        width: "50%",
      }}
    >
      <LoginContainer>
        <LoginTitle>Ten Sports</LoginTitle>
        <form onSubmit={onSubmitHandler}>
          <div>
            <Input
              id={"id"}
              label={"아이디"}
              variant={"labelBox"}
              css={{
                width: '60%',
                height: '48px',
              }}
            >
              <Input.TextField placeholder={"아이디를 입력해주세요."} ref={null} />
            </Input>
            <Input
              id={"naming"}
              label={"비밀번호"}
              variant={"labelBox"}
              css={{
                width: '60%',
                height: '48px'
              }}
            >
              <Input.TextField placeholder={"비밀번호를 입력해주세요."} ref={null} />
            </Input>
          </div>
          <div>
            <Button
              label={'로그인'}
              variant={'radiusBtn'}
              css={{
                disaplay: 'block',
                width: '60%',
                margin: '0 0 16px 0',
                fontWeight: '500',
                color: 'var(--basic-white-color)',
                backgroundColor: 'var(--basic-vivid-blue-color)',
                border: 0
              }}
              onClick={() => {}}
            />
            <Button
              label={"문의하기"}
              variant={'radiusBtn'}
              css={{
                disaplay: 'block',
                width: '60%',
                fontWeight: '500',
                color: 'var(--basic-white-color)',
                backgroundColor: 'var(--basic-navy-color)',
                border: 0
              }}
              onClick={() => {}}
            />
          </div>
        </form>
        <Divider width={'60%'} content={"또는"} />
        <span
          css={{
            color: 'var(--basic-navy-color)',
            fontWeight: '600',
            margin: '0 8px 0 0',
            cursor: 'pointer'
          }}
          onClick={() => {}}
        >아이디 찾기</span>
        <span
          css={{
            color: 'var(--basic-navy-color)',
            fontWeight: '600',
            margin: '0 0 0 8px',
            cursor: 'pointer'
          }}
          onClick={() => {}}
        >비밀번호 찾기</span>
      </LoginContainer>
    </section>
  )
};

const LoginContainer = styled.div({
  position: "absolute",
  top: "45%",
  left: "50%",
  width: '80%',
  minHeight: '360px',
  textAlign: 'center',
  transform: "translate(-50%, -50%)",
});
const LoginTitle = styled.div({
  fontSize: "40px",
  fontWeight: "600",
  color: "var(--business-color)",
  margin: "0 0 36px 0"
});

export default Login;