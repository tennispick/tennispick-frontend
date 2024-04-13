import styled from '@emotion/styled';
import InputRow from './InputRow';
import {
  discountTypeList,
  paymentTypeList,
} from '@features/customer/data/paymentRefund';
import CustomerModalReceiptContainer from './ReceiptContainer';
import useInput from '@hooks/useInput';
import { ChangeEvent, useEffect } from 'react';
import { FormEvent } from 'react';
import { createCustomerPayment } from '@apis/payment/payment.api';
import { useRouter } from 'next/navigation';
import { LessonListQueryData } from '@features/lesson/type/lesson.type';

type Props = {
  customerId: string;
  lessonList: LessonListQueryData[];
  totalPrice: (price: number, disCountPrice: number) => number;
};

const CustomerModalPaymentContainer = ({
  customerId,
  lessonList,
  totalPrice,
}: Props) => {
  const router = useRouter();

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

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentFormData = new FormData(e.currentTarget);

    const { discountPrice } = Object.fromEntries(currentFormData.entries());
    const lessonId = Number(currentFormData.get('name'));
    const selectedLesson = lessonList.find(
      ({ id }: { id: number }) => id === lessonId,
    );

    const price = selectedLesson
      ? selectedLesson.price.replaceAll(',', '')
      : '';

    if (!discountPrice) currentFormData.append('discountPrice', '0');

    currentFormData.append('type', 'payment');
    currentFormData.append('customerId', customerId);
    currentFormData.append(
      'totalPrice',
      totalPrice(Number(price), Number(discountPrice ?? '0')).toString(),
    );

    const { data } = await createCustomerPayment(currentFormData);
    if (data.affectedRows > 0)
      alert('결제가 성공적으로 진행되었어요.\n스케줄 등록을 진행해주세요.');
    else alert('결제에 실패했어요.\n관리자에게 문의해주세요.');

    router.refresh();
  };

  useEffect(() => {
    if (formData.discountType === 'none')
      setFormData({ ...formData, discountPrice: 0 });
  }, [formData.discountType]);

  return (
    <form css={{ width: '100%', display: 'flex' }} onSubmit={onSubmitHandler}>
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
              options={lessonList?.map(({ id, name }) => ({
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
              disabled={formData.discountType === 'none'}
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
    </form>
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
