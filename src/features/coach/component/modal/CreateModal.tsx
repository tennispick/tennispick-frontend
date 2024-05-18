import { Button, Input, Select } from '@components/index';
import styled from '@emotion/styled';
import useInput from '@hooks/useInput';
import { EditWhiteIcon } from '@icons/index';
import { getYearList, getMonthList, getDayList } from '@utils/date';
import { FormEventHandler, useState } from 'react';
import { emailRegex, passwordRegex, phoneNumberRegex } from '@utils/validation';
import FileInput from './FileInput';
import { createCoach } from '@apis/coach/coach.api';
import { useRouter } from 'next/navigation';

type Props = {
  onCloseModal: () => void;
};

const CoachCreateModal = ({ onCloseModal }: Props) => {
  const router = useRouter();

  const { yearArray, year } = getYearList();
  const { monthArray, month } = getMonthList();
  const { dateArray, date } = getDayList();

  const [file, setFile] = useState<File | null>(null);
  const [formData, onChangeFormData, setFormData] = useInput({
    email: {
      value: '',
      isRequired: false,
    },
    password: {
      value: '',
      isRequired: false,
    },
    passwordConfirm: {
      value: '',
      isRequired: false,
    },
    name: {
      value: '',
      isRequired: false,
    },
    phoneNumber: {
      value: '',
      isRequired: false,
    },
  });

  const onCheckInputRegexTestHandler = (value: string, regex: RegExp) =>
    value !== '' && !regex.test(value);

  const onChangeFileInputHandler = (rowFile: File) => setFile(rowFile);

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    let isCheck = true;
    const formDataKeys = Object.keys(formData);

    for (const key of formDataKeys) {
      const prevData = { ...formData };
      const item = prevData[key];

      if (item.value === '' && item.isRequired !== undefined) {
        prevData[key].isRequired = true;
        isCheck = false;
      }

      if (key === 'passwordConfirm') {
        if (item.value !== prevData['password'].value) {
          prevData[key].isRequired = true;
          isCheck = false;
        }
      }

      setFormData(prevData);
    }

    if (isCheck) {
      const currentFormData = new FormData(e.currentTarget);
      file && currentFormData.append('file', file);

      const { data } = await createCoach(currentFormData);

      if (data.affectedRows > 0) {
        alert('생성이 완료되었어요.');
      } else {
        alert('생성에 실패했어요.\n관리자에게 문의해주세요.');
      }
      onCloseModal();
      router.refresh();
    } else return false;
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <InputWrapper label="이메일">
          <TextField
            name="email"
            placeholder="이메일을 입력해주세요."
            onChange={onChangeFormData}
            requiredStatus={formData.email.isRequired}
            requiredText="이메일이 입력되지 않았어요."
            isRegexCheck={onCheckInputRegexTestHandler(
              formData.email.value,
              emailRegex,
            )}
            regexText="이메일의 형식이 아니에요."
          />
        </InputWrapper>
        <InputWrapper label="비밀번호">
          <TextField
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangeFormData}
            requiredStatus={formData.password.isRequired}
            requiredText="비밀번호가 입력되지 않았어요."
            isRegexCheck={onCheckInputRegexTestHandler(
              formData.password.value,
              passwordRegex,
            )}
            regexText="영문, 숫자, 특수문자를 포함해서 8~25자리를 충족해주세요."
          />
        </InputWrapper>
        <InputWrapper label={'비밀번호 확인'}>
          <TextField
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호를 다시 입력해주세요."
            onChange={onChangeFormData}
            requiredStatus={formData.passwordConfirm.isRequired}
            requiredText="비밀번호를 다시 한 번 확인해주세요."
          />
        </InputWrapper>
        <InputWrapper label="성명">
          <TextField
            name="name"
            placeholder="성명을 입력해주세요."
            onChange={onChangeFormData}
            requiredStatus={formData.name.isRequired}
            requiredText="성명이 입력되지 않았어요."
          />
        </InputWrapper>
        <div>생년월일</div>
        <Row>
          <Select name="year" width="calc(20% - 4px)" defaultValue={year}>
            {yearArray.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <Select
            name="month"
            width="calc(20% - 4px)"
            margin="0 6px"
            defaultValue={month}
          >
            {monthArray.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <Select name="date" width="calc(20% - 4px)" defaultValue={date}>
            {dateArray.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Row>
        <div>성별</div>
        <Row>
          <Select name="sex" width="calc(30% - 4px)">
            <option value="man">남자</option>
            <option value="woman">여자</option>
          </Select>
        </Row>
        <InputWrapper label="연락처">
          <TextField
            name="phoneNumber"
            placeholder="연락처를 입력해주세요."
            onChange={onChangeFormData}
            requiredStatus={formData.phoneNumber.isRequired}
            requiredText="연락처를 입력하지 않았어요."
            isRegexCheck={onCheckInputRegexTestHandler(
              formData.phoneNumber.value,
              phoneNumberRegex,
            )}
            regexText="연락처의 형식이 아니에요."
          />
        </InputWrapper>
        <div>직책</div>
        <Row>
          <Select name="position" width="calc(30% - 4px)">
            <option value="coach">코치</option>
            <option value="admin">관리자</option>
          </Select>
        </Row>
        <FileInput onChangeFileHandler={onChangeFileInputHandler} />
        <Button
          type="submit"
          variant="iconBtn"
          label="코치 등록하기"
          src={EditWhiteIcon}
          css={{
            position: 'relative',
            width: '100%',
            justifyContent: 'center',
            border: 0,
            backgroundColor: 'var(--business-sub-color)',
            color: 'var(--white100)',
            padding: '12px 16px',
            margin: '36px 0 0 0',
          }}
        />
      </form>
    </>
  );
};

const Row = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '46px',
  lineHeight: '30px',
  padding: '4px 0',
  margin: '8px 0 12px 0',
});
const InputWrapper = styled((props: any) => <Input {...props} />)({
  margin: '0 0 12px 0',

  label: {
    display: 'block',
  },
});
const TextField = styled((props: any) => <Input.TextField {...props} />)({
  width: '50%',
  padding: '10px 0 10px 10px',
  margin: '12px 0 0 0',
});

export default CoachCreateModal;
