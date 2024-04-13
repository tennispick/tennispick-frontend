import InputRow from './InputRow';
import {
  isRefundMatchRadioGroup,
  refundRangeRadioGroup,
} from '@data/radioGroup';
import { CustomerPaymentRefundData } from '@apis/payment/payment.type';
import {
  transferDiscountType,
  transferPaymentType,
} from '@features/customer/util/payment';
import { addNumberCommas } from '@utils/numberForm';
import CustomerModalReceiptContainer from './ReceiptContainer';
import { LessonListQueryData } from '@features/lesson/type/lesson.type';
import useInput from '@hooks/useInput';
import { refundTypeList } from '@features/customer/data/paymentRefund';
import { FormEvent, useEffect } from 'react';
import { createCustomerRefund } from '@apis/payment/payment.api';
import { useRouter } from 'next/navigation';

type Props = {
  customerId: string;
  checkedItem: CustomerPaymentRefundData;
  lessonList: LessonListQueryData[];
};

const CustomerModalRefundContainer = ({
  customerId,
  checkedItem,
  lessonList,
}: Props) => {
  const router = useRouter();

  const [formData, onChangeFormData, setFormData] = useInput({
    refundMethod: 'match',
    refundType: 'card',
    refundRange: 'part',
    refundPrice: 0,
  });

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentFormData = new FormData(e.currentTarget);
    const { refundMethod, refundRange } = Object.fromEntries(
      currentFormData.entries(),
    );

    refundMethod === 'match' &&
      currentFormData.append('refundType', checkedItem.type);
    refundRange === 'full' &&
      currentFormData.append('refundPrice', String(checkedItem.totalPrice));
    currentFormData.append('customerId', customerId);
    currentFormData.append('paymentRefundHistoryId', String(checkedItem.id));
    currentFormData.append('lessonId', String(checkedItem.lessonId));
    currentFormData.append('totalPrice', String(checkedItem.totalPrice));
    currentFormData.append(
      'remainPrice',
      String(
        checkedItem.totalPrice - Number(currentFormData.get('refundPrice')),
      ),
    );

    const { data } = await createCustomerRefund(currentFormData);

    if (data.affectedRows > 0) alert('환불이 성공적으로 진행되었어요.');
    else alert('환불에 실패했어요.\n관리자에게 문의해주세요.');

    router.refresh();
  };

  // TODO remove useEffect
  useEffect(() => {
    if (formData.refundMethod === 'match') {
      setFormData({
        ...formData,
        refundType: checkedItem.type,
      });
    }
  }, [formData.refundMethod]);

  // TODO remove useEffect
  useEffect(() => {
    if (formData.refundRange === 'full') {
      setFormData({
        ...formData,
        refundPrice: checkedItem.totalPrice,
      });
    }
  }, [formData.refundRange]);

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
              type="text"
              disabled={true}
              value={checkedItem.lessonName}
            />
            <InputRow
              name="type"
              label="결제유형"
              type="text"
              disabled={true}
              value={transferPaymentType(checkedItem.type)}
            />
            <InputRow
              name="discountType"
              label="할인유형"
              type="text"
              disabled={true}
              value={transferDiscountType(checkedItem.discountType)}
            />
            <InputRow
              name="discountPrice"
              label="할인금액"
              type="text"
              disabled={true}
              value={String(checkedItem.discountPrice)}
            />
            <InputRow
              name="totalPrice"
              label="결제금액"
              type="text"
              disabled={true}
              value={String(addNumberCommas(checkedItem.totalPrice))}
            />
          </div>
          <div css={{ width: '50%' }}>
            <InputRow
              name="refundMethod"
              label="환불수단"
              type="radio"
              radioGroup={isRefundMatchRadioGroup}
              onChange={onChangeFormData}
            />
            <InputRow
              name="refundType"
              label="환불유형"
              type="select"
              options={refundTypeList}
              value={
                formData.refundMethod === 'match'
                  ? checkedItem.type
                  : formData.refundType
              }
              onChange={onChangeFormData}
              disabled={formData.refundMethod === 'match'}
            />
            <InputRow
              name="refundRange"
              label="환불범위"
              type="radio"
              radioGroup={refundRangeRadioGroup}
              onChange={onChangeFormData}
            />
            <InputRow
              name="refundPrice"
              label="환불금액"
              type="text"
              placeholder={'환불 금액을 입력해주세요.'}
              value={
                formData.refundRange === 'full'
                  ? checkedItem.totalPrice
                  : formData.refundPrice
              }
              onChange={onChangeFormData}
              disabled={formData.refundRange === 'full'}
            />
          </div>
        </div>
      </div>
      <CustomerModalReceiptContainer
        type={'refund'}
        lesson={lessonList.find(({ id }) => id === checkedItem.lessonId)}
        paymentType={checkedItem.type}
        discountType={checkedItem.discountType}
        discountPrice={checkedItem.discountPrice}
        refundType={formData.refundType}
        refundRange={formData.refundRange}
        refundPrice={formData.refundPrice}
        price={checkedItem.totalPrice}
      />
    </form>
  );
};

export default CustomerModalRefundContainer;
