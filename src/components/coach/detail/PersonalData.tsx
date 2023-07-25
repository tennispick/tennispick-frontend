import Divider from "@components/common/Divider";
import Input from "@components/common/Input";
import Select from "@components/common/Select";
import styled from "@emotion/styled";

const PersonalData = ({ ...props }) => {
  return (
    <section {...props}>
      <div
        css={{
          position: 'relative',
          height: '40%'
        }}
      >
        <Input>
          <Input.TextField
            type={'file'}
          />
        </Input>
      </div>
      <Divider />
      <div
        css={{
          position: 'relative',
          height: '60%'
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
          <InputItem>
            <Input.TextField
              placeholder={'성명을 입력해주세요.'}
            />
          </InputItem>
        </Row>
        <Row>
          <InputHead>성별</InputHead>
          <InputItem>
            <Input.TextField
              placeholder={'성명을 입력해주세요.'}
            />
          </InputItem>
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
          <Select>
            <option>전체</option>
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
const InputItem = styled(Input)({
  position: 'relative',
  width: '75%',
  height: '100%'
})

export default PersonalData;