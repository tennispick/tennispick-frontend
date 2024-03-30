import { SetStateAction } from '@/types/index';
import { FormEvent } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import { EditWhiteIcon } from '@icons/index';

import useInput from '@hooks/useInput';
import { Button, Input, Select } from '@components/index';
import { createLesson } from '@apis/lesson/lesson.api';

type Props = {
  setShowModal: SetStateAction<boolean>;
};

const LessonModal = ({ setShowModal }: Props) => {
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
        setShowModal(false);
        router.refresh();
      }
    } else return false;
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <InputWrapper label={'레슨권 이름'}>
        <TextField
          name={'name'}
          placeholder={'레슨권 이름을 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.name.isRequired}
          requiredText={'레슨권 이름이 입력되지 않았어요.'}
        />
      </InputWrapper>
      <InputWrapper label={'총 레슨횟수'}>
        <TextField
          name={'lessonCount'}
          placeholder={'총 레슨 횟수를 입력해주세요. ex)3 '}
          onChange={onChangeFormData}
          requiredStatus={formData.lessonCount.isRequired}
          requiredText={'총 레슨 횟수가 입력되지 않았어요.'}
        />
      </InputWrapper>
      <InputWrapper label={'가격'}>
        <TextField
          name={'price'}
          placeholder={'레슨권 가격 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.price.isRequired}
          requiredText={'가격이 입력되지 않았어요.'}
        />
      </InputWrapper>
      <div css={{ display: 'flex' }}>
        <div css={{ width: 'calc(50%)' }}>
          <div>평일/주말 여부</div>
          <Row>
            <Select
              name={'isWeekday'}
              width={'calc(70% - 4px)'}
              defaultValue={formData.isWeekday.value}
              onChange={onChangeFormData}
            >
              <option value={'weekday'}>평일</option>
              <option value={'weekend'}>주말</option>
            </Select>
          </Row>
        </div>
        <div css={{ width: 'calc(50%)', padding: '0 0 0 16px' }}>
          <div>수강권 유형</div>
          <Row>
            <Select
              name={'type'}
              width={'calc(70% + 12px)'}
              defaultValue={formData.type.value}
              onChange={onChangeFormData}
            >
              <option value={'private'}>개인</option>
              <option value={'group'}>그룹</option>
            </Select>
          </Row>
        </div>
      </div>
      <InputWrapper label={'1회 레슨시간'}>
        <TextField
          name={'time'}
          placeholder={'1회 레슨시간을 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.time.isRequired}
          requiredText={'1회 레슨시간이 입력되지 않았어요.'}
        />
      </InputWrapper>
      <InputWrapper label={'일주일 당 레슨횟수'}>
        <TextField
          name={'timesAweek'}
          placeholder={'일주일 당 레슨횟수을 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.timesAweek.isRequired}
          requiredText={'일주일 당 레슨횟수가 입력되지 않았어요.'}
        />
      </InputWrapper>
      <InputWrapper label={'레슨권 설명'}>
        <TextField
          name={'description'}
          placeholder={'레슨권 설명을 입력해주세요.'}
          onChange={onChangeFormData}
        />
      </InputWrapper>
      <Button
        type={'submit'}
        variant={'iconBtn'}
        label={'레슨권 생성하기'}
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

export default LessonModal;
