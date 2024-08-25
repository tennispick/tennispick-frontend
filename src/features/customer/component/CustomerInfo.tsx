import { CustomerDetailData } from '@apis/customer/customer.type';
import { Input, Select } from '@components/index';
import { getYearList, getMonthList, getDayList } from '@utils/date';
import {
  ProfileManIcon,
  ProfileWomanIcon,
  DeleteWhiteIcon,
  EditWhiteIcon,
} from '@icons/index';
import CustomerInputRow from '@components/customer/detail/InputRow';
import CustomerSelectRow from '@components/customer/detail/SelectRow';
import { deleteCustomer } from '@apis/customer/customer.api';
import { useQueryClient } from '@tanstack/react-query';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';
import IconButton from '@components/button/IconButton';

type Props = {
  customerId: string;
  customer: CustomerDetailData;
};

const CustomerInfo = ({ customerId, customer }: Props) => {
  const queryClient = useQueryClient();

  const {
    name,
    birth,
    email,
    phone,
    sex,
    profileImageUrl,
    digitalSignatureImageUrl,
  } = customer;

  const [year, month, date] = birth.split('-');
  const { yearArray } = getYearList();
  const { monthArray } = getMonthList();
  const { dateArray } = getDayList();

  const handleDeleteCustomerClick = async () => {
    if (!window.confirm('정말로 삭제하시겠습니까?')) return;

    const { data } = await deleteCustomer({ customerId });
    if (data.affectedRows > 0) {
      alert('회원이 삭제되었어요.');
      queryClient.invalidateQueries({
        queryKey: ['customer'],
        exact: true,
      });
    } else alert('회원 삭제에 실패했어요.\n관리자에게 문의해주세요.');

    // TODO useMutation으로 변경
    window.location.href = '/customer';
  };

  const checkSexProfileImageUrl =
    sex === 'man' ? ProfileManIcon.src : ProfileWomanIcon.src;

  return (
    <div
      className={flex({
        height: '35%',
        borderBottom: '1px solid var(--grey100)',
        margin: '0 0 16px 0',
        gap: '24px',
      })}
    >
      <div
        className={css({
          width: '20%',
          height: 'calc(100% - 84px)',
        })}
      >
        <Input
          label={' '}
          id={'profileImage'}
          variant="file"
          style={{
            backgroundImage: profileImageUrl ?? checkSexProfileImageUrl,
          }}
        >
          <Input.TextField type={'file'} />
        </Input>
        <div
          className={css({
            textAlign: 'center',
            border: '1px solid var(--grey100)',
            width: 'calc(75% - 48px)',
            height: '52px',
            lineHeight: '52px',
            margin: '16px auto 16px auto',
            verticalAlign: 'middle',
            borderRadius: '8px',
          })}
        >
          {digitalSignatureImageUrl ?? '서명없음'}
        </div>
      </div>
      <div
        className={flex({
          width: '40%',
          flexDirection: 'column',
          gap: '16px',
          padding: '0 0 0 24px',
        })}
      >
        <CustomerInputRow
          name="name"
          rowHeadLabel="이름"
          placeholder="성명을 입력해주세요."
          defaultValue={name}
          disabled={true}
        />
        <CustomerSelectRow
          name="birth"
          rowHeadLabel="생년월일"
          selectChildren={
            <>
              <Select
                key="year"
                name="year"
                width="calc(((75% - 48px) / 3) - 4px)"
                defaultValue={year}
                disabled={true}
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
                key="month"
                name="month"
                width="calc(((75% - 48px) / 3) - 4px)"
                margin={'0 6px'}
                defaultValue={month}
                disabled={true}
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
                key="date"
                name="date"
                width="calc(((75% - 48px) / 3) - 4px)"
                defaultValue={date}
                disabled={true}
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
          name="email"
          rowHeadLabel="이메일"
          placeholder="이메일을 입력해주세요."
          defaultValue={email}
          disabled={true}
        />
        <CustomerInputRow
          name="phone"
          rowHeadLabel="연락처"
          placeholder="연락처를 입력해주세요."
          defaultValue={phone}
          disabled={true}
        />
        <CustomerSelectRow
          name="성별"
          rowHeadLabel="성별"
          selectChildren={
            <Select
              key="sex"
              name="sex"
              width="calc((75% - 48px) / 2)"
              disabled={true}
            >
              <option value="man">남자</option>
              <option value="woman">여자</option>
            </Select>
          }
        />
      </div>
      <div
        className={flex({ width: '40%', flexDirection: 'column', gap: '16px' })}
      >
        <div className={css({ height: 'calc(((100% / 5) * 4) - 16px)' })}>
          <CustomerInputRow
            type={'password'}
            name={'password'}
            rowHeadLabel={'비밀번호'}
            placeholder={'비밀번호를 입력해주세요.'}
            defaultValue={''}
            css={css.raw({ height: 'calc(100% / 5)', marginBottom: '16px' })}
          />
          <CustomerInputRow
            type={'password'}
            name={'passwordConfirm'}
            rowHeadLabel={'비밀번호 확인'}
            placeholder={'비밀번호를 다시 입력해주세요.'}
            defaultValue={''}
            css={css.raw({ height: 'calc(100% / 5)', marginBottom: '16px' })}
          />
        </div>
        <Flex justifyContent="end" gap="8px">
          <IconButton
            iconAlign="left"
            iconAlt={'delete customer info'}
            iconSrc={DeleteWhiteIcon}
            variant="negative"
            size="lg"
            label={'정보 삭제하기'}
            onClick={handleDeleteCustomerClick}
          />
          <IconButton
            iconAlign="left"
            iconAlt={'edit customer info'}
            iconSrc={EditWhiteIcon}
            variant="primary"
            size="lg"
            label={'정보 수정하기'}
          />
        </Flex>
      </div>
    </div>
  );
};

export default CustomerInfo;
