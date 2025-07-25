import { Dispatch, FormEvent, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidV4 } from 'uuid';

import { EditWhiteIcon } from '@icons/index';
import useInput from '@hooks/useInput';
import { Input, Select } from '@/shared/components/index';
import { generateCustomer } from '@queries/index';
import { getYearList, getMonthList, getDayList } from 'src/shared/utils/date';
import {
  emailRegex,
  passwordRegex,
  phoneNumberRegex,
} from 'src/shared/utils/validation';
import IconButton from '@/shared/components/button/IconButton';

type Props = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const GenerateModal = ({ setOpenModal }: Props) => {
  const { yearArray, year } = getYearList();
  const { monthArray, month } = getMonthList();
  const { dateArray, date } = getDayList();

  const router = useRouter();
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
      isRequired: false,
    },
  });

  const onSubmitHandler = async (e: FormEvent) => {
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
      const { data } = await generateCustomer(formData);
      if (data.affectedRows > 0) {
        alert('생성이 완료되었습니다.');
        setOpenModal(false);
        router.refresh();
      }
    } else return false;
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input label={'이메일'} className="mb-4 block">
        <Input.TextField
          name={'email'}
          placeholder={'이메일을 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.email.isRequired}
          requiredText={'이메일이 입력되지 않았어요.'}
          isRegexCheck={
            formData.email.value !== '' &&
            !emailRegex.test(formData.email.value)
          }
          regexText={'이메일의 형식이 아니에요.'}
          className="w-[60%] h-[calc(0.95rem_*_2.725)] pl-2.5 pt-2.5 mt-2"
        />
      </Input>
      <Input label={'비밀번호'} className="mb-4 block">
        <Input.TextField
          type={'password'}
          name={'password'}
          placeholder={'비밀번호를 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.password.isRequired}
          requiredText={'비밀번호가 입력되지 않았어요.'}
          isRegexCheck={
            formData.password.value !== '' &&
            !passwordRegex.test(formData.password.value)
          }
          regexText={'영문, 숫자, 특수문자를 포함해서 8~25자리를 충족해주세요.'}
          className="w-[60%] h-[calc(0.95rem_*_2.725)] pl-2.5 pt-2.5 mt-2"
        />
      </Input>
      <Input label={'비밀번호 확인'} className="mb-4 block">
        <Input.TextField
          type={'password'}
          name={'passwordConfirm'}
          placeholder={'비밀번호를 다시 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.passwordConfirm.isRequired}
          requiredText={'비밀번호를 다시 한 번 확인해주세요.'}
          className="w-[60%] h-[calc(0.95rem_*_2.725)] pl-2.5 pt-2.5 mt-2"
        />
      </Input>
      <Input label={'이름'} className="mb-4 block">
        <Input.TextField
          name={'name'}
          placeholder={'이름을 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.name.isRequired}
          requiredText={'이름이 입력되지 않았어요.'}
          className="w-[60%] h-[calc(0.95rem_*_2.725)] pl-2.5 pt-2.5 mt-2"
        />
      </Input>
      <div>생년월일</div>
      <div className="flex h-[46px] items-center py-1 leading-[30px] my-2 mb-3">
        <Select
          name={'year'}
          width={'calc(20% - 4px)'}
          key={uuidV4()}
          defaultValue={formData.year.value}
          onChange={onChangeFormData}
        >
          {yearArray.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
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
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
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
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </Select>
      </div>
      <div>성별</div>
      <div className="flex h-[46px] items-center py-1 leading-[30px] my-2 mb-3">
        <Select
          name={'sex'}
          width={'calc(30% - 4px)'}
          defaultValue={formData.sex.value}
          onChange={onChangeFormData}
        >
          <option value={'man'}>남자</option>
          <option value={'woman'}>여자</option>
        </Select>
      </div>
      <Input label={'연락처'} className="mb-4 block">
        <Input.TextField
          name={'phoneNumber'}
          placeholder={'연락처를 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.phoneNumber.isRequired}
          requiredText={'연락처를 입력하지 않았어요.'}
          isRegexCheck={
            formData.phoneNumber.value !== '' &&
            !phoneNumberRegex.test(formData.phoneNumber.value)
          }
          regexText={'연락처의 형식이 아니에요.'}
          className="w-[60%] h-[calc(0.95rem_*_2.725)] pl-2.5 pt-2.5 mt-2"
        />
      </Input>
      <IconButton
        type="submit"
        iconAlign="left"
        iconSrc={EditWhiteIcon}
        iconAlt="customer"
        variant="primary"
        size="lg"
        label={'회원 등록하기'}
        className="ml-auto"
      />
    </form>
  );
};

export default GenerateModal;
