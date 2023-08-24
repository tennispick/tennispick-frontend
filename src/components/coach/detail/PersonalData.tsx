import styled from "@emotion/styled";

import { Divider, Input, Select } from "@components/index";
import { ProfileManIcon } from '@icons/index';

interface DataProps {
  data: any;
}

const PersonalData = ({ data, ...props }: DataProps) => {
  return (
    <section {...props}>
      <div
        css={{
          position: 'relative',
          height: '50%'
        }}
      >
        <Input
          label={' '}
          id={'profileImage'}
          variant={'file'}
          src={ProfileManIcon.src}
        >
          <Input.TextField
            type={'file'}
          />
        </Input>
      </div>
      <Divider />
      <div
        css={{
          position: 'relative',
          height: 'auto',
        }}
      >
        <Row>
          <InputHead>이름</InputHead>
          <InputItem>
            <Input.TextField
              placeholder={'성명을 입력해주세요.'}
            />
          </InputItem>
        </Row>
        <Row>
          <InputHead>생년월일</InputHead>
          <Select width={'calc(25% - 4px)'}>
            <option>코치</option>
          </Select>
          <Select width={'calc(25% - 4px)'} margin={'0 6px'} >
            <option>코치</option>
          </Select>
          <Select width={'calc(25% - 4px)'} >
            <option>코치</option>
          </Select>
        </Row>
        <Row>
          <InputHead>성별</InputHead>
          <Select width={'40%'} >
            <option>남자</option>
            <option>여자</option>
          </Select>
        </Row>
        <Row>
          <InputHead>연락처</InputHead>
          <InputItem>
            <Input.TextField
              placeholder={'연락처를 입력해주세요.'}
            />
          </InputItem>
        </Row>
        <Row>
          <InputHead>직책</InputHead>
          <Select width={'40%'} >
            <option>코치</option>
          </Select>
        </Row>
      </div>
    </section>
  )
}

const Row = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '46px',
  lineHeight: '30px',
  padding: '4px 12px',
  margin: '12px 0'
})
const InputHead = styled.div({
  fontSize: '1rem',
  fontWeight: '600',
  width: '25%',
  padding: '4px 0'
})
const InputItem = styled((props: any) => <Input {...props} />)({
  position: 'relative',
  width: '75%',
  height: '100%'
})

export default PersonalData;