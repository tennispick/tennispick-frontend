import { CustomerDetailData } from '@apis/customer/customer.type';
import { Input, Select, Button } from '@components/index';
import { getYearList, getMonthList, getDayList } from '@utils/date';
import { ProfileManIcon, DeleteWhiteIcon, EditWhiteIcon } from '@icons/index';
import CustomerInputRow from '@components/customer/detail/InputRow';
import CustomerSelectRow from '@components/customer/detail/SelectRow';

type Props = {
  id: string;
  customer: CustomerDetailData;
};

const CustomerInfo = ({ id, customer }: Props) => {
  const [year, month, date] = customer.birth.split('-');
  const { yearArray } = getYearList();
  const { monthArray } = getMonthList();
  const { dateArray } = getDayList();

  const onClickDeleteCustomerHandler = () => {
    console.log(id);
  };

  const onClickEditCustomerHandler = () => {};

  return (
    <div css={{ position: 'relative', display: 'flex', height: '35%' }}>
      <div
        css={{
          position: 'relative',
          width: '20%',
          height: '50%',
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
        <div
          css={{
            textAlign: 'center',
            border: '1px solid var(--grey100)',
            width: '60%',
            height: '40%',
            margin: '10% auto 0 auto',
          }}
        ></div>
      </div>
      <div
        css={{
          position: 'relative',
          width: '40%',
          padding: '0 0 0 24px',
        }}
      >
        <CustomerInputRow
          name={'name'}
          rowHeadLabel={'이름'}
          placeholder={'성명을 입력해주세요.'}
          defaultValue={customer.name}
        />
        <CustomerSelectRow
          name={'birth'}
          rowHeadLabel={'생년월일'}
          selectChildren={
            <>
              <Select
                key={'year'}
                name={'year'}
                width={'calc((60% / 3) - 4px)'}
                defaultValue={year}
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
                key={'month'}
                name={'month'}
                width={'calc((60% / 3) - 4px)'}
                margin={'0 6px'}
                defaultValue={month}
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
                key={'date'}
                name={'date'}
                width={'calc((60% / 3) - 4px)'}
                defaultValue={date}
              >
                {dateArray.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </Select>
            </>
          }
        />
        <CustomerInputRow
          name={'email'}
          rowHeadLabel={'이메일'}
          placeholder={'이메일을 입력해주세요.'}
          defaultValue={customer.email}
        />
        <CustomerInputRow
          name={'phone'}
          rowHeadLabel={'연락처'}
          placeholder={'연락처를 입력해주세요.'}
          defaultValue={customer.phone}
        />
        <CustomerSelectRow
          name={'성별'}
          rowHeadLabel={'성별'}
          selectChildren={
            <Select
              key={'sex'}
              name={'sex'}
              width={'calc(((60% / 3) * 2) - 4px)'}
            >
              <option value={'man'}>남자</option>
              <option value={'woman'}>여자</option>
            </Select>
          }
        />
      </div>
      <div css={{ position: 'relative', width: '40%' }}>
        <div>
          <CustomerInputRow
            type={'password'}
            name={'password'}
            rowHeadLabel={'비밀번호'}
            placeholder={'비밀번호를 입력해주세요.'}
            defaultValue={''}
          />
          <CustomerInputRow
            type={'password'}
            name={'passwordConfirm'}
            rowHeadLabel={'비밀번호 확인'}
            placeholder={'비밀번호를 다시 입력해주세요.'}
            defaultValue={''}
          />
          <div css={{ position: 'relative', display: 'flex' }}>
            <CustomerInputRow
              name={'height'}
              rowHeadLabel={'키(선택)'}
              placeholder={'키를 입력해주세요.'}
              defaultValue={customer.height ?? ''}
            />
            <CustomerInputRow
              name={'weight'}
              rowHeadLabel={'몸무게(선택)'}
              placeholder={'몸무게를 입력해주세요.'}
              defaultValue={customer.weight ?? ''}
              rowHeadStyle={{ width: '100px', margin: '0 0 0 20px' }}
            />
          </div>
          <div css={{ position: 'relative', display: 'flex' }}>
            <CustomerInputRow
              name={'address'}
              rowHeadLabel={'주소(선택)'}
              placeholder={'우편번호 찾기'}
              defaultValue={customer.address ?? ''}
            />
            <CustomerInputRow
              name={'addressDetail'}
              rowHeadLabel={'상세주소'}
              placeholder={'상세 주소를 입력해주세요.'}
              defaultValue={customer.addres_detail ?? ''}
              rowHeadStyle={{ width: '100px', margin: '0 0 0 20px' }}
            />
          </div>
        </div>
        <div css={{ display: 'flex', justifyContent: 'end' }}>
          <Button
            label={'정보 삭제하기'}
            variant={'iconBtn'}
            src={DeleteWhiteIcon}
            css={{
              border: 0,
              backgroundColor: 'var(--red200)',
              color: 'var(--white100)',
              padding: '12px 16px',
              margin: '0 12px 0 0',
            }}
            onClick={onClickDeleteCustomerHandler}
          />
          <Button
            label={'정보 수정하기'}
            variant={'iconBtn'}
            src={EditWhiteIcon}
            css={{
              border: 0,
              backgroundColor: 'var(--business-active-color)',
              color: 'var(--white100)',
              padding: '12px 16px',
            }}
            onClick={onClickEditCustomerHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
