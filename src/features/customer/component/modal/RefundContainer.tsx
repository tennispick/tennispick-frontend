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
import { ChangeEventHandler, FormEvent, useEffect, useState } from 'react';
import { createCustomerRefund } from '@apis/payment/payment.api';
import { useRouter } from 'next/navigation';
import ConfirmModal from '@components/layer/ConfirmModal';
import { Input } from '@components/index';
import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';

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
  const {
    id,
    lessonId,
    type,
    totalPrice,
    lessonName,
    discountType,
    discountPrice,
  } = checkedItem;

  const router = useRouter();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [formData, onChangeFormData, setFormData] = useInput({
    refundMethod: 'match',
    refundType: 'card',
    refundRange: 'part',
    refundPrice: 0,
    reason: '',
  });

  // TODO name로 그냥 넣을 수 있을 것 같은데
  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentFormData = new FormData(e.currentTarget);
    const { refundMethod, refundRange } = Object.fromEntries(
      currentFormData.entries(),
    );

    refundMethod === 'match' && currentFormData.append('refundType', type);
    refundRange === 'full' &&
      currentFormData.append('refundPrice', String(totalPrice));
    currentFormData.append('customerId', customerId);
    currentFormData.append('paymentRefundHistoryId', String(id));
    currentFormData.append('lessonId', String(lessonId));
    currentFormData.append('totalPrice', String(totalPrice));
    currentFormData.append(
      'remainPrice',
      String(totalPrice - Number(currentFormData.get('refundPrice'))),
    );
    currentFormData.append('reason', formData.reason);

    const { data } = await createCustomerRefund(currentFormData);

    if (data.affectedRows > 0) alert('환불이 성공적으로 진행되었어요.');
    else alert('환불에 실패했어요.\n관리자에게 문의해주세요.');

    router.refresh();
  };

  const onChangeOnlyInputHandler: ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    const { name, value } = e.target;

    const onlyNumber = value.replace(/[^0-9]/g, '');

    if (totalPrice < Number(onlyNumber)) return;

    setFormData((prev: any) => ({ ...prev, [name]: onlyNumber }));
  };

  // TODO remove useEffect
  useEffect(() => {
    if (formData.refundMethod === 'match') {
      setFormData({
        ...formData,
        refundType: type,
      });
    }
  }, [formData.refundMethod]);

  // TODO remove useEffect
  useEffect(() => {
    if (formData.refundRange === 'full') {
      setFormData({
        ...formData,
        refundPrice: totalPrice,
      });
    }
  }, [formData.refundRange]);

  return (
    <form
      id="refundForm"
      className={flex({ width: '100%' })}
      onSubmit={onSubmitHandler}
    >
      <div
        className={css({
          width: '70%',
          padding: '16px 28px',
          height: '100%',
          borderRight: '1px solid var(--grey100)',
        })}
      >
        <div className={flex({ height: 'calc(100% - 24px)' })}>
          <div className={css({ width: '50%' })}>
            <InputRow
              name="name"
              label="상품명"
              type="text"
              disabled={true}
              value={lessonName}
            />
            <InputRow
              name="type"
              label="결제유형"
              type="text"
              disabled={true}
              value={transferPaymentType(type)}
            />
            <InputRow
              name="discountType"
              label="할인유형"
              type="text"
              disabled={true}
              value={transferDiscountType(discountType)}
            />
            <InputRow
              name="discountPrice"
              label="할인금액"
              type="text"
              disabled={true}
              value={String(discountPrice)}
            />
            <InputRow
              name="totalPrice"
              label="결제금액"
              type="text"
              disabled={true}
              value={String(addNumberCommas(totalPrice))}
            />
          </div>
          <div className={css({ width: '50%' })}>
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
                formData.refundMethod === 'match' ? type : formData.refundType
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
                  ? totalPrice
                  : formData.refundPrice
              }
              onChange={onChangeOnlyInputHandler}
              disabled={formData.refundRange === 'full'}
            />
          </div>
        </div>
      </div>
      <CustomerModalReceiptContainer
        type={'refund'}
        lesson={lessonList.find(({ id }) => id === lessonId)}
        paymentType={type}
        discountType={discountType}
        discountPrice={discountPrice}
        refundType={formData.refundType}
        refundRange={formData.refundRange}
        refundPrice={formData.refundPrice}
        price={totalPrice}
        onClickRefundHandler={() => setOpenModal(true)}
      />
      {openModal && (
        <ConfirmModal
          formId="refundForm"
          title="환불사유 입력"
          subTitle="결제 내역에 대한 환불 사유를 입력해주세요."
          onCancelHandler={() => setOpenModal(false)}
          onClickDisabled={formData.reason === ''}
        >
          <Input>
            <Input.TextField
              name="reason"
              placeholder="환불 사유를 입력해주세요."
              className={css({ padding: '16px' })}
              onChange={onChangeFormData}
            />
          </Input>
        </ConfirmModal>
      )}
    </form>
  );
};

export default CustomerModalRefundContainer;
