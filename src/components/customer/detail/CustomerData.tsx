import styled from '@emotion/styled';
import { v4 as uuidV4 } from 'uuid';

import { Divider, Input, Select } from '@components/index';
import { ProfileManIcon } from '@icons/index';
import { getYearList, getMonthList, getDayList } from '@utils/date';

type DataProps = {
  data: {
    id: string;
    center_id: number;
    email: string;
    password: string | null;
    name: string;
    birth: string;
    sex: string;
    phone: string;
    address: string | null;
    addressDetail: string | null;
    termsAgree: string;
  };
};

const CustomerData = ({ data }: DataProps) => {
  const [year, month, date] = data.birth.split('-');
  const { yearArray } = getYearList();
  const { monthArray } = getMonthList();
  const { dateArray } = getDayList();

  return (
    <section
      css={{
        position: 'relative',
        width: '35%',
        height: '100%',
      }}
    >
      <div
        css={{
          position: 'relative',
          height: '22.5%',
        }}
      >
        <Input
          label={' '}
          id={'profileImage'}
          variant={'file'}
          src={ProfileManIcon.src}
        >
          <Input.TextField type={'file'} />
        </Input>
      </div>
      <Divider margin={'16px 0'} />
      {/* Data Container */}
      <div
        css={{
          position: 'relative',
          height: 'auto',
        }}
      >
        <Row>
          <InputHead>이메일</InputHead>
          <InputItem>
            <Input.TextField
              placeholder={'이메일을 입력해주세요.'}
              defaultValue={data.email}
            />
          </InputItem>
        </Row>
        <Row>
          <InputHead>비밀번호</InputHead>
          <InputItem>
            <Input.TextField
              type={'password'}
              placeholder={'비밀번호를 입력해주세요.'}
            />
          </InputItem>
        </Row>
        <Row>
          <InputHead>이름</InputHead>
          <InputItem>
            <Input.TextField
              placeholder={'성명을 입력해주세요.'}
              defaultValue={data.name}
            />
          </InputItem>
        </Row>
        <Row>
          <InputHead>생년월일</InputHead>
          <Select
            name={'year'}
            width={'calc((80% / 3) - 4px)'}
            key={uuidV4()}
            defaultValue={year}
            // onChange={onChangeFormData}
          >
            {yearArray.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
          <Select
            name={'month'}
            width={'calc((80% / 3) - 4px)'}
            margin={'0 6px'}
            key={uuidV4()}
            defaultValue={month}
            // onChange={onChangeFormData}
          >
            {monthArray.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
          <Select
            name={'date'}
            width={'calc((80% / 3) - 4px)'}
            key={uuidV4()}
            defaultValue={date}
            // onChange={onChangeFormData}
          >
            {dateArray.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </Select>
        </Row>
        <Row>
          <InputHead>성별</InputHead>
          <Select
            name={'sex'}
            width={'calc((80% / 3) - 4px)'}
            defaultValue={data.sex}
            // onChange={onChangeFormData}
          >
            <option value={'man'}>남자</option>
            <option value={'woman'}>여자</option>
          </Select>
        </Row>
        <Row>
          <InputHead>연락처</InputHead>
          <InputItem>
            <Input.TextField
              placeholder={'연락처를 입력해주세요.'}
              defaultValue={data.phone}
            />
          </InputItem>
        </Row>
        <Row
          css={{
            height: 'auto',
            alignItems: 'start',
          }}
        >
          <InputHead css={{ padding: 0 }}>주소&#40;선택&#41;</InputHead>
          <div
            css={{
              position: 'relative',
              width: '80%',
            }}
          >
            <InputItem
              css={{
                width: '100%',
                height: '38px',
                margin: '0 0 12px 0',
              }}
            >
              <Input.TextField
                placeholder={'성명을 입력해주세요.'}
                css={{
                  width: '100%',
                }}
              />
            </InputItem>
            <InputItem
              css={{
                width: '100%',
                height: '38px',
              }}
            >
              <Input.TextField placeholder={'상세 주소를 입력해주세요.'} />
            </InputItem>
          </div>
        </Row>
        <Row>
          <InputHead>키&#40;선택&#41;</InputHead>
          <InputItem css={{ width: '30%' }}>
            <Input.TextField placeholder={'키를 입력해주세요.'} />
          </InputItem>
          <InputHead css={{ padding: '0 12px' }}>
            몸무게&#40;선택&#41;
          </InputHead>
          <InputItem css={{ width: '30%' }}>
            <Input.TextField placeholder={'몸무게를 입력해주세요.'} />
          </InputItem>
        </Row>
        <Row>
          <InputHead>약관동의여부</InputHead>
          <InputItem css={{ fontWeight: 600 }}>
            <>{data.termsAgree === 'agree' ? '동의' : '비동의'}</>
          </InputItem>
        </Row>
      </div>
    </section>
  );
};

const Row = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '46px',
  lineHeight: '38px',
  padding: '4px 12px',
  margin: '8px 0',
});
const InputHead = styled.div({
  fontSize: '1rem',
  fontWeight: '600',
  width: '20%',
  padding: '4px 0',
});
const InputItem = styled((props: any) => <Input {...props} />)({
  position: 'relative',
  width: '80%',
  height: '100%',
});

export default CustomerData;
