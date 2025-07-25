import { SetStateAction } from '@/types/index';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { EditWhiteIcon } from '@icons/index';

import useInput from '@hooks/useInput';
import { Input, Select } from '@/shared/components/index';
import { createLesson } from '@apis/lesson/lesson.api';
import IconButton from '@/shared/components/button/IconButton';

type Props = {
  setOpenModal: SetStateAction<boolean>;
};

const LessonModal = ({ setOpenModal }: Props) => {
  const router = useRouter();

  const [formData, onChangeFormData, setFormData] = useInput({
    name: {
      value: '',
      isRequired: false,
    },
    lessonCount: {
      value: '',
      isRequired: false,
    },
    price: {
      value: '',
      isRequired: false,
    },
    isWeekday: {
      value: 'weekday',
    },
    type: {
      value: 'private',
    },
    time: {
      value: '',
      isRequired: false,
    },
    timesAweek: {
      value: '',
      isRequired: false,
    },
    description: {
      value: '',
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
      setFormData(prevData);
    }

    if (isCheck) {
      const { data } = await createLesson(formData);
      if (data.affectedRows > 0) {
        alert('생성이 완료되었습니다.');
        setOpenModal(false);
        router.refresh();
      }
    } else return false;
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="text-sm mb-3">
        <label className="block">레슨권 이름</label>
        <div className="w-1/2 p-[10px_0_10px_10px] mt-3">
          <input
            name={'name'}
            placeholder={'레슨권 이름을 입력해주세요.'}
            onChange={onChangeFormData}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {formData.name.isRequired && (
            <span className="text-red-500 text-xs">
              레슨권 이름이 입력되지 않았어요.
            </span>
          )}
        </div>
      </div>

      <div className="text-sm mb-3">
        <label className="block">총 레슨횟수</label>
        <div className="w-1/2 p-[10px_0_10px_10px] mt-3">
          <input
            name={'lessonCount'}
            placeholder={'총 레슨 횟수를 입력해주세요. ex)3 '}
            onChange={onChangeFormData}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {formData.lessonCount.isRequired && (
            <span className="text-red-500 text-xs">
              총 레슨 횟수가 입력되지 않았어요.
            </span>
          )}
        </div>
      </div>

      <div className="text-sm mb-3">
        <label className="block">가격</label>
        <div className="w-1/2 p-[10px_0_10px_10px] mt-3">
          <input
            name={'price'}
            placeholder={'레슨권 가격 입력해주세요.'}
            onChange={onChangeFormData}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {formData.price.isRequired && (
            <span className="text-red-500 text-xs">
              가격이 입력되지 않았어요.
            </span>
          )}
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <div>평일/주말 여부</div>
          <div className="flex items-center h-[46px] leading-[30px] py-1 my-2 mb-3">
            <Select
              name={'isWeekday'}
              width={'calc(70% - 4px)'}
              defaultValue={formData.isWeekday.value}
              onChange={onChangeFormData}
            >
              <option value={'weekday'}>평일</option>
              <option value={'weekend'}>주말</option>
            </Select>
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <div>수강권 유형</div>
          <div className="flex items-center h-[46px] leading-[30px] py-1 my-2 mb-3">
            <Select
              name={'type'}
              width={'calc(70% + 12px)'}
              defaultValue={formData.type.value}
              onChange={onChangeFormData}
            >
              <option value={'private'}>개인</option>
              <option value={'group'}>그룹</option>
            </Select>
          </div>
        </div>
      </div>

      <div className="text-sm mb-3">
        <label className="block">1회 레슨시간</label>
        <div className="w-1/2 p-[10px_0_10px_10px] mt-3">
          <input
            name={'time'}
            placeholder={'1회 레슨시간을 입력해주세요.'}
            onChange={onChangeFormData}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {formData.time.isRequired && (
            <span className="text-red-500 text-xs">
              1회 레슨시간이 입력되지 않았어요.
            </span>
          )}
        </div>
      </div>

      <div className="text-sm mb-3">
        <label className="block">일주일 당 레슨횟수</label>
        <div className="w-1/2 p-[10px_0_10px_10px] mt-3">
          <input
            name={'timesAweek'}
            placeholder={'일주일 당 레슨횟수을 입력해주세요.'}
            onChange={onChangeFormData}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {formData.timesAweek.isRequired && (
            <span className="text-red-500 text-xs">
              일주일 당 레슨횟수가 입력되지 않았어요.
            </span>
          )}
        </div>
      </div>

      <div className="text-sm mb-3">
        <label className="block">레슨권 설명</label>
        <div className="w-1/2 p-[10px_0_10px_10px] mt-3">
          <input
            name={'description'}
            placeholder={'레슨권 설명을 입력해주세요.'}
            onChange={onChangeFormData}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      <IconButton
        type="submit"
        iconAlign="left"
        iconSrc={EditWhiteIcon}
        iconAlt="customer"
        variant="primary"
        size="lg"
        label={'레슨권 생성하기'}
        full={true}
        className="ml-auto"
      />
    </form>
  );
};

export default LessonModal;
