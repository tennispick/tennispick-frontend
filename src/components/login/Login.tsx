import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styled from "@emotion/styled";
import Input from "@components/common/Input";
import { UseFormProps } from "@interfaces/common";

const Login = () => {

  const schema = yup.object().shape({

  })

  const { register, handleSubmit, formState: { errors } }: UseFormProps = useForm({
    resolver: yupResolver(schema)
  })

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
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div>
            <Input
              {...register('id')}
              id={"id"}
              label={"아이디"}
              designType={"labelBox"}
              css={{
                width: '60%',
                height: '48px',
              }}
            >
              <Input.TextField placeholder={"아이디를 입력해주세요."} />
            </Input>
            <Input
              id={"naming"}
              label={"비밀번호"}
              designType={"labelBox"}
              css={{
                width: '60%',
                height: '48px'
              }}
            >
              <Input.TextField placeholder={"비밀번호를 입력해주세요."} />
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
  top: "40%",
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