import { useState } from "react";
import styled from "@emotion/styled";

import { PageHeader, Button, CourtList, Input, } from "@components/index";
import Portal from "@components/Portal";
import Modal from "@components/layer/Modal";
import { EditWhiteIcon } from "@icons/index";
import { getCourtQuery } from "@queries/court";

const CourtPage = () => {

  // lessonType={tabList[tabList.findIndex(e => e.id === currentTab)].value}

  const { data } = getCourtQuery();
  const [showModal, setShowModal] = useState<boolean>(false);

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
      {data && <CourtList data={data.data} />}
      {
        showModal &&
        <Portal id={'portal'}>
          <Modal
            title={"코트 생성"}
            showModal={showModal}
            setShowModal={setShowModal}
          >
            <InputWrapper label={'코트 이름'} >
              <TextField placeholder={'코트 이름을 입력해주세요.'} />
            </InputWrapper>
            <InputWrapper label={'위치(층수)'} >
              <TextField placeholder={'위치(층수)를 입력해주세요. ex)3 '} />
            </InputWrapper>
            <InputWrapper label={'코트 설명(선택)'} >
              <TextField placeholder={'코트 설명을 입력해주세요.'} />
            </InputWrapper>
          </Modal>
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