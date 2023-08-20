import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";

import Modal from "@components/layer/Modal";
import { PageHeader, Button, CourtList, Input, DetailCourt, Portal } from "@components/index";
import { EditWhiteIcon } from "@icons/index";
import { generateCourt, getCourtQuery } from "@queries/index";
import useInput from "@hooks/useInput";
import RightSideContainer from "@components/layer/RightSideContainer";

const CourtPage = () => {

  // lessonType={tabList[tabList.findIndex(e => e.id === currentTab)].value}

  const router = useRouter();
  const { data } = getCourtQuery();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [courtId, setCourtId] = useState<string>('');
  const [showRightSide, setShowRightSide] = useState<boolean>(false);

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
  })

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    let isCheck = true;
    const formDataKeys = Object.keys(formData);
    for(let key of formDataKeys){

      let prevData = {...formData};
      const item = prevData[key];

      if(item.value === '' && item.isRequired !== undefined){
        prevData[key].isRequired = true;
        isCheck = false;
      }
      setFormData(prevData);
    }

    if(isCheck){
      const { data } = await generateCourt(formData);
      if(data.affectedRows > 0){
        alert('생성이 완료되었습니다.');
        setShowModal(false);
        router.refresh();
      }
    }
    else return false;
  }

  return (
    <>
      <PageHeader title={"코트 목록"} />
      <Button
        variant={'iconBtn'}
        label={'코트 생성하기'}
        src={EditWhiteIcon}
        css={{
          border: 0,
          backgroundColor: 'var(--business-sub-color)',
          color: 'var(--basic-white-color)',
          padding: '12px 16px',
          margin: '0 12px 0 auto',
        }}
        onClick={() => setShowModal(true)}
      />
      {data && <CourtList data={data.data} setCourtId={setCourtId} setShowRightSide={setShowRightSide} />}
      {
        showModal &&
        <Portal id={'portal'}>
          <Modal
            title={"코트 생성"}
            showModal={showModal}
            setShowModal={setShowModal}
          >
            <form onSubmit={onSubmitHandler}>
              <InputWrapper label={'코트 이름'} >
                <TextField
                  name={'name'}
                  placeholder={'코트 이름을 입력해주세요.'}
                  onChange={onChangeFormData}
                  requiredStatus={formData.name.isRequired}
                  requiredText={'코트 이름이 입력되지 않았어요.'}
                />
              </InputWrapper>
              <InputWrapper label={'위치(층수)'} >
                <TextField
                  name={'floor'}
                  placeholder={'위치(층수)를 입력해주세요. ex)3 '}
                  onChange={onChangeFormData}
                  requiredStatus={formData.floor.isRequired}
                  requiredText={'위치(층수)가 입력되지 않았어요.'}
                />
              </InputWrapper>
              <InputWrapper label={'코트 설명(선택)'} >
                <TextField
                  name={'description'}
                  placeholder={'코트 설명을 입력해주세요.'}
                  onChange={onChangeFormData}
                />
              </InputWrapper>
              <Button
                type={'submit'}
                variant={'iconBtn'}
                label={'코트 생성하기'}
                src={EditWhiteIcon}
                css={{
                  position: 'relative',
                  width: '100%',
                  justifyContent: 'center',
                  border: 0,
                  backgroundColor: 'var(--business-sub-color)',
                  color: 'var(--basic-white-color)',
                  padding: '12px 16px',
                  margin: '96px 0 0 0',
                }}
              />
            </form>
          </Modal>
        </Portal>
      }
      {
        showRightSide &&
        <Portal
          id={'rightSide'}
        >
          <RightSideContainer
            title={'코트 상세정보'}
            showRightSide={showRightSide}
            setShowRightSide={setShowRightSide}
          >
            <DetailCourt id={courtId} />
          </RightSideContainer>
        </Portal>
      }
    </>
  )
};

const InputWrapper = styled(Input)({
  margin: '0 0 28px 0',

  label: {
    display: 'block'
  }
})
const TextField = styled(Input.TextField)({
  width: '60%',
  padding: '10px 0 10px 10px',
  margin: '12px 0 0 0'
})

export default CourtPage;