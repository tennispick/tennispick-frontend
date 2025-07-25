import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import useInput from '@hooks/useInput';
import { Input } from '@/shared/components/index';
import {
  deleteCourtDetailInfo,
  getCourtDetailQuery,
  updateCourtDetailInfo,
} from '@queries/index';
import { EditWhiteIcon, DeleteWhiteIcon } from '@icons/index';
import IconButton from '@/shared/components/button/IconButton';

type Props = {
  id: string;
  handleHideRightSideClick: () => void;
};

const DetailCourt = ({ id, handleHideRightSideClick }: Props) => {
  const { data } = getCourtDetailQuery(id);

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

  const handleCourtModifyClick = async () => {
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
      const { data } = await updateCourtDetailInfo(id, formData);

      if (data.affectedRows > 0) {
        alert('수정 되었습니다.');
        handleHideRightSideClick();
        router.refresh();
      } else alert('다시 시도해주세요.');
    } else return false;
  };

  const handleDeleteCourtClick = async () => {
    const { data } = await deleteCourtDetailInfo(id);

    if (data.affectedRows > 0) {
      alert('삭제 되었습니다.');
      handleHideRightSideClick;
      router.refresh();
    } else alert('다시 시도해주세요.');
  };

  useEffect(() => {
    if (data) {
      const prevData = { ...data.data[0] };
      const spreadFormData = { ...formData };
      const formDataKeys = Object.keys(formData);

      for (const key of formDataKeys) {
        const item = spreadFormData[key];
        item.value = prevData[key] ? prevData[key] : '';

        if (item.isRequired && item.isRequired !== undefined)
          item.isRequired = true;
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {data && (
        <>
          <div className="h-[calc(100%_-_48px)]">
            <Input label={'코트 이름'} className="mb-7 block">
              <Input.TextField
                name={'name'}
                placeholder={'코트 이름을 입력해주세요.'}
                defaultValue={data.data[0].name}
                onChange={onChangeFormData}
                requiredStatus={formData.name.isRequired}
                requiredText={'코트 이름이 입력되지 않았어요.'}
                className="w-[60%] !pl-2.5 !pt-2.5 mt-3"
              />
            </Input>
            <Input label={'위치(층수)'} className="mb-7 block">
              <Input.TextField
                name={'floor'}
                placeholder={'위치(층수)를 입력해주세요. ex)3 '}
                defaultValue={data.data[0].floor}
                onChange={onChangeFormData}
                requiredStatus={formData.floor.isRequired}
                requiredText={'위치(층수)가 입력되지 않았어요.'}
                className="w-[60%] !pl-2.5 !pt-2.5 mt-3"
              />
            </Input>
            <Input label={'코트 설명(선택)'} className="mb-7 block">
              <Input.TextField
                name={'description'}
                placeholder={'코트 설명을 입력해주세요.'}
                defaultValue={
                  data.data[0].description
                    ? data.data[0].description
                    : undefined
                }
                onChange={onChangeFormData}
                className="w-[60%] !pl-2.5 !pt-2.5 mt-3"
              />
            </Input>
          </div>
          <div className="relative flex w-full gap-4">
            <IconButton
              iconAlign="left"
              iconSrc={EditWhiteIcon}
              iconAlt="modify court"
              variant="primary"
              size="half"
              label={'코트 수정하기'}
              onClick={handleCourtModifyClick}
            />
            <IconButton
              iconAlign="left"
              iconSrc={DeleteWhiteIcon}
              iconAlt="delete court"
              variant="negative"
              size="half"
              label={'코트 삭제하기'}
              onClick={handleDeleteCourtClick}
            />
          </div>
        </>
      )}
    </>
  );
};

export default DetailCourt;
