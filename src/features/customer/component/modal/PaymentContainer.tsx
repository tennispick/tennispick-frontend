import styled from '@emotion/styled';
import InputRow from './InputRow';
import {
  discountTypeList,
  paymentTypeList,
} from '@features/customer/data/paymentRefund';
import CustomerModalReceiptContainer from './ReceiptContainer';
import useInput from '@hooks/useInput';
import { ChangeEvent } from 'react';
import { LessonType } from '@/types/lesson';

type Props = {
  lessonList: LessonType[];
  totalPrice: (price: number, disCountPrice: number) => number;
};

const CustomerModalPaymentContainer = ({ lessonList, totalPrice }: Props) => {
  const [formData, onChangeFormData, setFormData] = useInput({
    name: lessonList[0]?.id || '',
    paymentType: paymentTypeList[0]?.value || '',
    discountType: discountTypeList[0]?.value || '',
    discountPrice: 0,
  });

  const onChangeOnlyNumberInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const numberRegex = /[^0-9]/g;
    const { value } = e.target;
    if (numberRegex.test(value)) return;
    const onlyNumber = value.replace(numberRegex, '');

    const targetLesson = lessonList.find(({ id }) => id === formData.name);

    if (Number(onlyNumber) > Number(targetLesson?.price?.replace(',', ''))) {
      alert('할인금액은 상품금액보다 클 수 없어요.');
      return;
    }

    setFormData({
      ...formData,
      [e.target.name]: onlyNumber,
    });
  };

  return (
    <div css={{ width: '100%', display: 'flex' }}>
      <div
        css={{
          width: '70%',
          padding: '16px 28px',
          height: '100%',
          borderRight: '1px solid var(--grey100)',
        }}
      >
        <div css={{ display: 'flex', height: 'calc(100% - 24px)' }}>
          <div css={{ width: '50%' }}>
            <InputRow
              name="name"
              label="상품명"
              type="select"
              options={lessonList?.map(({ id, name }: LessonType) => ({
                value: id,
                label: name,
              }))}
              onChange={onChangeFormData}
            />
            <InputRow
              name="paymentType"
              label="결제유형"
              type="select"
              options={paymentTypeList?.map(({ value, label }) => ({
                value,
                label,
              }))}
              onChange={onChangeFormData}
            />
            <InputRow
              name="discountType"
              label="할인유형"
              type="select"
              options={discountTypeList?.map(({ value, label }) => ({
                value,
                label,
              }))}
              onChange={onChangeFormData}
            />
            <InputRow
              name="discountPrice"
              label="할인금액"
              type="text"
              placeholder="할인 금액을 입력해주세요."
              onChange={onChangeOnlyNumberInputHandler}
              value={formData.discountPrice}
            />
          </div>
        </div>
        <PaymentDescription>
          <span>미수금 금액: 미수금 금액에 대한 설명</span>
          <span>결제 예정일: 결제 예정일에 대한 설명</span>
          <span>실제 결제일: 실제 결제일에 대한 설명</span>
        </PaymentDescription>
      </div>
      <CustomerModalReceiptContainer
        type={'payment'}
        lesson={lessonList.find(({ id }) => id === Number(formData.name))}
        paymentType={formData.paymentType}
        discountType={formData.discountType}
        discountPrice={formData.discountPrice}
        totalPrice={totalPrice}
      />
    </div>
  );
};

const PaymentDescription = styled.div({
  position: 'absolute',
  height: '40px',
  bottom: 0,
  span: {
    color: 'var(--red200)',
    margin: '0 24px 0 0',
    fontWeight: 600,

    '::before': {
      content: "'*'",
      position: 'relative',
      top: '2px',
      margin: '0 4px 0 0',
    },
  },
});

export default CustomerModalPaymentContainer;
