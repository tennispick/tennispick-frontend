import { Dispatch, FormEvent, SetStateAction, useEffect } from 'react';
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { v4 as uuidV4 } from "uuid";

import { EditWhiteIcon } from "@icons/index";
import useInput from "@hooks/useInput";
import { Button, Input, Select } from "@components/index";
import { generateCustomer } from "@queries/index";
import { getYearList, getMonthList, getDayList } from '@utils/date';
import { emailRegex, passwordRegex, phoneNumberRegex } from '@utils/validation';

const GenerateModal = ({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) => {

  // Date Array List
  const { yearArray, year } = getYearList();
  const { monthArray, month } = getMonthList();
  const { dateArray, date } = getDayList();

  const router = useRouter();
  const [formData, onChangeFormData, setFormData] = useInput({
    email: {
      value: '',
      isRequired: false
    },
    password: {
      value: '',
      isRequired: false
    },
    passwordConfirm:{
      value: '',
      isRequired: false
    },
    name: {
      value: '',
      isRequired: false
    },
    year: {
      value: year,
    },
    month: {
      value: month,
    },
    date: {
      value: date,
    },
    sex: {
      value: 'man',
    },
    phoneNumber: {
      value: '',
      isRequired: false
    }
  })

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    let isCheck = true;
    const formDataKeys = Object.keys(formData);
    for (let key of formDataKeys) {

      let prevData = { ...formData };
      const item = prevData[key];

      if (item.value === '' && item.isRequired !== undefined) {
        prevData[key].isRequired = true;
        isCheck = false;
      }

      if(key === 'passwordConfirm'){
        if(item.value !== prevData['password'].value){
          prevData[key].isRequired = true;
          isCheck = false;  
        }
      }
      setFormData(prevData);
    }

    if (isCheck) {
      const { data } = await generateCustomer(formData);
      if (data.affectedRows > 0) {
        alert('생성이 완료되었습니다.');
        console.log(setShowModal);
        setShowModal(false);
        router.refresh();
      }
    }
    else return false;
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <InputWrapper
        label={'이메일'}
      >
        <TextField
          name={'email'}
          placeholder={'이메일을 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.email.isRequired}
          requiredText={'이메일이 입력되지 않았어요.'}
          isRegexCheck={formData.phoneNumber.value !=='' && !emailRegex.test(formData.email.value)}
          regexText={'이메일의 형식이 아니에요.'}
        />
      </InputWrapper>
      <InputWrapper
        label={'비밀번호'}
      >
        <TextField
          type={'password'}
          name={'password'}
          placeholder={'비밀번호를 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.password.isRequired}
          requiredText={'비밀번호가 입력되지 않았어요.'}
          isRegexCheck={formData.phoneNumber.value !=='' && !passwordRegex.test(formData.password.value)}
          regexText={'영문, 숫자, 특수문자를 포함해서 8~25자리를 충족해주세요.'}
        />
      </InputWrapper>
      <InputWrapper
        label={'비밀번호 확인'}
      >
        <TextField
          type={'password'}
          name={'passwordConfirm'}
          placeholder={'비밀번호를 다시 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.passwordConfirm.isRequired}
          requiredText={'비밀번호를 다시 한 번 확인해주세요.'}
        />
      </InputWrapper>
      <InputWrapper
        label={'이름'}
      >
        <TextField
          name={'name'}
          placeholder={'이름을 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.name.isRequired}
          requiredText={'이름이 입력되지 않았어요.'}
        />
      </InputWrapper>
      <div>생년월일</div>
      <Row>
        <Select
          name={'year'}
          width={'calc(20% - 4px)'}
          key={uuidV4()}
          defaultValue={formData.year.value}
          onChange={onChangeFormData}
        >
          {yearArray.map((item, index) => {
            return(
              <option key={index} value={item}>
                {item}
              </option>
            )
          })}
        </Select>
        <Select
          name={'month'}
          width={'calc(20% - 4px)'}
          margin={'0 6px'}
          key={uuidV4()}
          defaultValue={formData.month.value}
          onChange={onChangeFormData}
        >
          {monthArray.map((item, index) => {
            return(
              <option key={index} value={item}>
                {item}
              </option>
            )
          })}
        </Select>
        <Select
          name={'date'}
          width={'calc(20% - 4px)'}
          key={uuidV4()}
          defaultValue={formData.date.value}
          onChange={onChangeFormData}
        >
          {dateArray.map((item, index) => {
            return(
              <option key={index} value={item}>
                {item}
              </option>
            )
          })}
        </Select>
      </Row>
      <div>성별</div>
      <Row>
        <Select
          name={'sex'}
          width={'calc(30% - 4px)'}
          defaultValue={formData.date.sex}
          onChange={onChangeFormData}
        >
          <option value={'man'}>남자</option>
          <option value={'woman'}>여자</option>
        </Select>
      </Row>
      <InputWrapper
        label={'연락처'}
      >
        <TextField
          name={'phoneNumber'}
          placeholder={'연락처를 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.phoneNumber.isRequired}
          requiredText={'연락처를 입력하지 않았어요.'}
          isRegexCheck={formData.phoneNumber.value !=='' && !phoneNumberRegex.test(formData.phoneNumber.value)}
          regexText={'연락처의 형식이 아니에요.'}
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

const Row = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '46px',
  lineHeight: '30px',
  padding: '4px 0',
  margin: '8px 0 12px 0'
})
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