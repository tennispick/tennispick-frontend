import { Dispatch, SetStateAction } from 'react';
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";

import useInput from "@hooks/useInput";
import { Button, Input } from "@components/index";
import { EditWhiteIcon } from "@icons/index";

const GenerateModal = ({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) => {

  const onSubmitHandler = () => {

  }

  return (
    <form onSubmit={onSubmitHandler}>
      <InputWrapper
        label={'이메일'}
      >
        <TextField
          placeholder={'이메일을 입력해주세요.'}
        />
      </InputWrapper>
      <InputWrapper
        label={'비밀번호'}
      >
        <TextField
          type={'password'}
          placeholder={'비밀번호를 입력해주세요.'}
        />
      </InputWrapper>
      <InputWrapper
        label={'비밀번호 확인'}
      >
        <TextField
          type={'password'}
          placeholder={'비밀번호를 다시 입력해주세요.'}
        />
      </InputWrapper>
      <InputWrapper
        label={'이름'}
      >
        <TextField
          placeholder={'이름을 입력해주세요.'}
        />
      </InputWrapper>
      <InputWrapper
        label={'생년월일'}
      >
        <TextField
          placeholder={'생년월일 입력해주세요.'}
        />
      </InputWrapper>
      <InputWrapper
        label={'성별'}
      >
        <TextField
          placeholder={'이름을 입력해주세요.'}
        />
      </InputWrapper>
      <InputWrapper
        label={'연락처'}
      >
        <TextField
          placeholder={'연락처를 입력해주세요.'}
        />
      </InputWrapper>
      <Button
        type={'submit'}
        variant={'iconBtn'}
        label={'회원 등록하기'}
        src={EditWhiteIcon}
        css={{
          position: 'relative',
          width: '100%',
          justifyContent: 'center',
          border: 0,
          backgroundColor: 'var(--business-sub-color)',
          color: 'var(--basic-white-color)',
          padding: '12px 16px',
          margin: '36px 0 0 0',
        }}
      />
    </form>
  )
}

const InputWrapper = styled((props: any) => <Input {...props} />)({
  margin: '0 0 16px 0',

  label: {
    display: 'block'
  }
})
const TextField = styled((props: any) => <Input.TextField {...props} />)({
  width: '60%',
  padding: '10px 0 10px 10px',
  margin: '8px 0 0 0'
})

export default GenerateModal;