import { Button, Input, Select } from '@/shared/components/index';
import useInput from '@hooks/useInput';
import { EditWhiteIcon } from '@icons/index';
import { getYearList, getMonthList, getDayList } from 'src/shared/utils/date';
import { FormEventHandler, useState } from 'react';
import {
  emailRegex,
  passwordRegex,
  phoneNumberRegex,
} from 'src/shared/utils/validation';
import FileInput from './FileInput';
import { createCoach } from '@apis/coach/coach.api';
import { useRouter } from 'next/navigation';

type Props = {
  setOpenModal: (open: boolean) => void;
};

const CoachCreateModal = ({ setOpenModal }: Props) => {
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
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
      setOpenModal(false);
      router.refresh();
    } else return false;
  };

  return (
    <>
      <form
        id="coachCreateForm"
        onSubmit={handleSubmit}
        className="h-[calc(90%-(1.2rem+16px))] overflow-y-auto mb-4"
      >
        <div className="mb-3">
          <label className="block">이메일</label>
          <div className="w-1/2 h-[calc(0.95rem*2.725)] py-[10px] pl-[10px] pr-0 mt-2">
            <input
              name="email"
              placeholder="이메일을 입력해주세요."
              onChange={onChangeFormData}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {formData.email.isRequired && (
              <span className="text-red-500 text-xs">이메일이 입력되지 않았어요.</span>
            )}
            {onCheckInputRegexTestHandler(formData.email.value, emailRegex) && (
              <span className="text-red-500 text-xs">이메일의 형식이 아니에요.</span>
            )}
          </div>
        </div>
        
        <div className="mb-3">
          <label className="block">비밀번호</label>
          <div className="w-1/2 h-[calc(0.95rem*2.725)] py-[10px] pl-[10px] pr-0 mt-2">
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangeFormData}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {formData.password.isRequired && (
              <span className="text-red-500 text-xs">비밀번호가 입력되지 않았어요.</span>
            )}
            {onCheckInputRegexTestHandler(formData.password.value, passwordRegex) && (
              <span className="text-red-500 text-xs">영문, 숫자, 특수문자를 포함해서 8~25자리를 충족해주세요.</span>
            )}
          </div>
        </div>
        
        <div className="mb-3">
          <label className="block">비밀번호 확인</label>
          <div className="w-1/2 h-[calc(0.95rem*2.725)] py-[10px] pl-[10px] pr-0 mt-2">
            <input
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호를 다시 입력해주세요."
              onChange={onChangeFormData}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {formData.passwordConfirm.isRequired && (
              <span className="text-red-500 text-xs">비밀번호를 다시 한 번 확인해주세요.</span>
            )}
          </div>
        </div>
        
        <div className="mb-3">
          <label className="block">성명</label>
          <div className="w-1/2 h-[calc(0.95rem*2.725)] py-[10px] pl-[10px] pr-0 mt-2">
            <input
              name="name"
              placeholder="성명을 입력해주세요."
              onChange={onChangeFormData}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {formData.name.isRequired && (
              <span className="text-red-500 text-xs">성명이 입력되지 않았어요.</span>
            )}
          </div>
        </div>
        
        <div>생년월일</div>
        <div className="flex items-center h-[46px] leading-[30px] py-1 my-2 mb-3">
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
        </div>
        
        <div>성별</div>
        <div className="flex items-center h-[46px] leading-[30px] py-1 my-2 mb-3">
          <Select name="sex" width="calc(30% - 4px)">
            <option value="man">남자</option>
            <option value="woman">여자</option>
          </Select>
        </div>
        
        <div className="mb-3">
          <label className="block">연락처</label>
          <div className="w-1/2 h-[calc(0.95rem*2.725)] py-[10px] pl-[10px] pr-0 mt-2">
            <input
              name="phoneNumber"
              placeholder="연락처를 입력해주세요."
              onChange={onChangeFormData}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {formData.phoneNumber.isRequired && (
              <span className="text-red-500 text-xs">연락처를 입력하지 않았어요.</span>
            )}
            {onCheckInputRegexTestHandler(formData.phoneNumber.value, phoneNumberRegex) && (
              <span className="text-red-500 text-xs">연락처의 형식이 아니에요.</span>
            )}
          </div>
        </div>
        
        <div>직책</div>
        <div className="flex items-center h-[46px] leading-[30px] py-1 my-2 mb-3">
          <Select name="position" width="calc(30% - 4px)">
            <option value="coach">코치</option>
            <option value="admin">관리자</option>
          </Select>
        </div>
        
        <FileInput onChangeFileHandler={onChangeFileInputHandler} />
      </form>
      
      <Button
        type="submit"
        form="coachCreateForm"
        variant="iconBtn"
        label="코치 등록하기"
        src={EditWhiteIcon}
        className="relative w-full justify-center border-0 bg-sky-400 text-white py-3 px-4"
      />
    </>
  );
};

export default CoachCreateModal;
