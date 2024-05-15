import { Button, Input, Select } from '@components/index';
import styled from '@emotion/styled';
import { EditWhiteIcon } from '@icons/index';

type Props = {
  onCloseModal: () => void;
};

const CoachCreateModal = ({ onCloseModal }: Props) => {
  const onSubmitHandler = () => {};

  return (
    <form onSubmit={onSubmitHandler}>
      <InputWrapper label="성명">
        <TextField
          name="name"
          placeholder="성명을 입력해주세요."
          // onChange={onChangeFormData}
          // requiredStatus={formData.name.isRequired}
          requiredText="성명이 입력되지 않았어요."
        />
      </InputWrapper>
      <div>생년월일</div>
      <Row>
        <Select
          name="year"
          width="calc(20% - 4px)"
          // key={uuidV4()}
          // defaultValue={formData.year.value}
          // onChange={onChangeFormData}
        >
          <option value={'private'}>개인</option>
          <option value={'group'}>그룹</option>
        </Select>
        <Select
          name="month"
          width="calc(20% - 4px)"
          margin="0 6px"
          // key={uuidV4()}
          // defaultValue={formData.month.value}
          // onChange={onChangeFormData}
        >
          <option value={'private'}>개인</option>
          <option value={'group'}>그룹</option>
        </Select>
        <Select
          name="date"
          width="calc(20% - 4px)"
          // key={uuidV4()}
          // defaultValue={formData.date.value}
          // onChange={onChangeFormData}
        >
          <option value="private">개인</option>
          <option value="group">그룹</option>
        </Select>
      </Row>
      <div>성별</div>
      <Row>
        <Select
          name="sex"
          width="calc(30% - 4px)"
          // defaultValue={formData.sex.value}
          // onChange={onChangeFormData}
        >
          <option value="man">남자</option>
          <option value="woman">여자</option>
        </Select>
      </Row>
      <InputWrapper label="연락처">
        <TextField
          name="phoneNumber"
          placeholder="연락처를 입력해주세요."
          // onChange={onChangeFormData}
          // requiredStatus={formData.phoneNumber.isRequired}
          requiredText="연락처를 입력하지 않았어요."
          // isRegexCheck={
          //   formData.phoneNumber.value !== '' &&
          //   !phoneNumberRegex.test(formData.phoneNumber.value)
          // }
          regexText="연락처의 형식이 아니에요."
        />
      </InputWrapper>
      <div>직책</div>
      <Row>
        <Select
          name="sex"
          width="calc(30% - 4px)"
          // defaultValue={formData.sex.value}
          // onChange={onChangeFormData}
        >
          <option value="coach">코치</option>
          <option value="admin">관리자</option>
        </Select>
      </Row>
      {/* File Component */}
      <InputWrapper type="file" label="프로필 이미지 업로드(선택)">
        <TextField
          name="profileImage"
          placeholder="레슨권 이름을 입력해주세요."
          requiredText="레슨권 이름이 입력되지 않았어요."
        />
      </InputWrapper>
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
