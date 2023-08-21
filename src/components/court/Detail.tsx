import { Dispatch, SetStateAction, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";

import useInput from "@hooks/useInput";
import { Input, Button } from '@components/index';
import { deleteCourtDetailInfo, getCourtDetailQuery, updateCourtDetailInfo } from "@queries/index";
import { EditWhiteIcon, DeleteWhiteIcon } from "@icons/index";

interface CourtDetailProps {
  id: string;
  setShowRightSide: Dispatch<SetStateAction<boolean>>;
}

const DetailCourt = ({ id, setShowRightSide }: CourtDetailProps) => {

  const { data } = getCourtDetailQuery(id);

  const router = useRouter();
  const [formData, onChangeFormData, setFormData] = useInput({
    name: {
      value: '',
      isRequired: false
    },
    floor: {
      value: '',
      isRequired: false
    },
    description: {
      value: ''
    }
  });

  const onModifyHandler = async () => {

    let isCheck = true;
    const formDataKeys = Object.keys(formData);
    for (let key of formDataKeys) {

      let prevData = { ...formData };
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
        setShowRightSide(false);
        router.refresh();
      }
      else alert('다시 시도해주세요.');
    }
    else return false;
  }

  const onDeleteHandler = async () => {
    const { data } = await deleteCourtDetailInfo(id);

    if (data.affectedRows > 0) {
      alert('삭제 되었습니다.');
      setShowRightSide(false);
      router.refresh();
    }
    else alert('다시 시도해주세요.');
  }

  useEffect(() => {
    if (data) {

      let prevData = { ...data.data[0] };
      let spreadFormData = { ...formData };
      const formDataKeys = Object.keys(formData);

      for (let key of formDataKeys) {

        let item = spreadFormData[key];
        item.value = prevData[key] ? prevData[key] : '';

        if (item.isRequired && item.isRequired !== undefined) item.isRequired = true;
      }
    }
  }, [data])

  return (
    <>
      {
        data &&
        <>
          <InputWrapper
            label={'코트 이름'}
          >
            <TextField
              name={'name'}
              placeholder={'코트 이름을 입력해주세요.'}
              defaultValue={data.data[0].name}
              onChange={onChangeFormData}
              requiredStatus={formData.name.isRequired}
              requiredText={'코트 이름이 입력되지 않았어요.'}
            />
          </InputWrapper>
          <InputWrapper
            label={'위치(층수)'}
          >
            <TextField
              name={'floor'}
              placeholder={'위치(층수)를 입력해주세요. ex)3 '}
              defaultValue={data.data[0].floor}
              onChange={onChangeFormData}
              requiredStatus={formData.floor.isRequired}
              requiredText={'위치(층수)가 입력되지 않았어요.'}
            />
          </InputWrapper>
          <InputWrapper
            label={'코트 설명(선택)'}
          >
            <TextField
              name={'description'}
              placeholder={'코트 설명을 입력해주세요.'}
              defaultValue={data.data[0].description ? data.data[0].description : undefined}
              onChange={onChangeFormData}
            />
          </InputWrapper>
          <div
            css={{
              position: 'fixed',
              bottom: '20px'
            }}
          >
            <Button
              label={'코트 수정하기'}
              variant={'iconBtn'}
              src={EditWhiteIcon}
              css={{
                width: 'calc(40vw - 40px)',
                justifyContent: 'center',
                border: 0,
                backgroundColor: 'var(--business-active-color)',
                color: 'var(--basic-white-color)',
                padding: '12px 16px',
                margin: '0 0 12px 0'
              }}
              onClick={onModifyHandler}
            />
            <Button
              label={'코트 삭제하기'}
              variant={'iconBtn'}
              src={DeleteWhiteIcon}
              css={{
                width: 'calc(40vw - 40px)',
                justifyContent: 'center',
                border: 0,
                backgroundColor: 'var(--basic-red2-color)',
                color: 'var(--basic-white-color)',
                padding: '12px 16px'
              }}
              onClick={onDeleteHandler}
            />
          </div>
        </>
      }
    </>
  )
}

const InputWrapper = styled((props: any) => <Input {...props} />)({
  margin: '0 0 28px 0',

  label: {
    display: 'block'
  }
})
const TextField = styled((props: any) => <Input.TextField {...props} />)({
  width: '60%',
  padding: '10px 0 10px 10px',
  margin: '12px 0 0 0'
})

export default DetailCourt;