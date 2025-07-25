import { Dispatch, FormEvent, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

import useInput from '@hooks/useInput';
import { Input } from '@/shared/components/index';
import { generateCourt } from '@queries/index';
import { EditWhiteIcon } from '@icons/index';
import IconButton from '@/shared/components/button/IconButton';

type Props = {
  setOpenModal?: Dispatch<SetStateAction<boolean>>;
};

const GenerateModal = ({ setOpenModal }: Props) => {
  const router = useRouter();
  const [formData, onChangeFormData, setFormData] = useInput({
    name: {
      value: '',
      isRequired: false,
    },
    floor: {
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
      const { data } = await generateCourt(formData);
      if (data.affectedRows > 0) {
        alert('생성이 완료되었습니다.');
        setOpenModal?.(false);
        router.refresh();
      } else {
        alert('코트 생성에 실패했습니다.');
      }
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input label={'코트 이름'} className="mb-7 block">
        <Input.TextField
          name={'name'}
          placeholder={'코트 이름을 입력해주세요.'}
          onChange={onChangeFormData}
          requiredStatus={formData.name.isRequired}
          requiredText={'코트 이름이 입력되지 않았어요.'}
          className="w-[60%] h-[calc(0.95rem_*_2.725)] pl-2.5 pt-2.5 mt-3"
        />
      </Input>
      <Input label={'위치(층수)'} className="mb-7 block">
        <Input.TextField
          name={'floor'}
          placeholder={'위치(층수)를 입력해주세요. ex)3 '}
          onChange={onChangeFormData}
          requiredStatus={formData.floor.isRequired}
          requiredText={'위치(층수)가 입력되지 않았어요.'}
          className="w-[60%] h-[calc(0.95rem_*_2.725)] pl-2.5 pt-2.5 mt-3"
        />
      </Input>
      <Input label={'코트 설명(선택)'} className="mb-7 block">
        <Input.TextField
          name={'description'}
          placeholder={'코트 설명을 입력해주세요.'}
          onChange={onChangeFormData}
          className="w-[60%] h-[calc(0.95rem_*_2.725)] pl-2.5 pt-2.5 mt-3"
        />
      </Input>
      <IconButton
        type="submit"
        iconAlign="left"
        iconSrc={EditWhiteIcon}
        iconAlt="court"
        size="full"
        label={'코트 생성하기'}
        variant="primary"
        className="ml-auto"
      />
    </form>
  );
};

export default GenerateModal;
