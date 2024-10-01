import Input from '@components/input/Input';
import RadioSelectorGroup from '@widgets/RadioSelectorGroup';
import { css } from 'styled-system/css';
import BlockContainer from './BlockContainer';
import ItemRow from './ItemRow';
import {
  individualSalesRadioGroup,
  insuranceRadioGroup,
  settlementRateRadioGroup,
  totalSalesRadioGroup,
  vatRadioGroup,
} from '@features/setting/data/payment';
import Button from '@components/button/Button';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormError } from '@components/FormError';
import { useEffect } from 'react';
import { PaymentSettingSchema } from '@features/setting/util/zod';
import { useUpdatePaymentSettingMutation } from '@features/setting/mutation/settingMutation';

export type PaymentFormSchema = z.infer<typeof PaymentSettingSchema>;

type Props = {
  data: PaymentFormSchema;
};

const SettingPayment = ({ data }: Props) => {
  const {
    salary,
    totalSalesOption,
    totalSales,
    individualSalesOption,
    settlementRateOption,
    vatOption,
    insuranceOption,
  } = data;
  const { mutate } = useUpdatePaymentSettingMutation();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    clearErrors,
    formState: { errors },
  } = useForm<PaymentFormSchema>({
    defaultValues: {
      salary: salary,
      totalSalesOption: totalSalesOption,
      totalSales: totalSales,
      individualSalesOption: individualSalesOption,
      settlementRateOption: settlementRateOption,
      vatOption: vatOption,
      insuranceOption: insuranceOption,
    },
    resolver: zodResolver(PaymentSettingSchema),
  });

  const isDisabledTotalSales =
    useWatch({ name: 'totalSalesOption', control }) !== 'totalSalesAll';
  const isDisabledIndividualSales =
    useWatch({ name: 'individualSalesOption', control }) !==
    'individualSalesAll';
  const isDisabledSettlementRate =
    useWatch({ name: 'settlementRateOption', control }) !==
    'settlementRateApply';

  useEffect(() => {
    if (isDisabledTotalSales) {
      setValue('totalSales', undefined);
      clearErrors('totalSales');
    }
  }, [isDisabledTotalSales, setValue, clearErrors]);

  useEffect(() => {
    if (isDisabledIndividualSales) {
      setValue('individualSales', undefined);
      clearErrors('individualSales');
    }
  }, [isDisabledIndividualSales, setValue, clearErrors]);

  useEffect(() => {
    if (isDisabledSettlementRate) {
      setValue('settlementRate', undefined);
      clearErrors('settlementRate');
    }
  }, [isDisabledSettlementRate, setValue, clearErrors]);

  const handleFormSubmit = (data: PaymentFormSchema) => mutate({ ...data });

  return (
    <form
      className={css({ margin: '24px 0 0 0' })}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Button
        type="submit"
        label="저장하기"
        size="md"
        variant="primary"
        className={css({
          position: 'absolute',
          right: 0,
          zIndex: 1,
        })}
      />
      <BlockContainer
        title="기본 지급 항목"
        subTitle="코치님에게 정산되는 지급 항목이에요."
      >
        <ItemRow label="기본급">
          <Input
            {...register('salary')}
            type="text"
            className={css({
              minWidth: '320px',
              height: '40px',
              fontSize: '0.9rem',
              border: '1px solid var(--grey300)',
              borderRadius: '8px',
              padding: '6px 32px 6px 12px',
              margin: '0 0 0 8px',
            })}
            placeholder="기본급여를 입력해주세요."
          />
          {errors.salary?.message && (
            <FormError
              error={errors.salary?.message}
              className={css({ margin: '0 0 0 8px' })}
            />
          )}
        </ItemRow>
      </BlockContainer>
      <BlockContainer
        title="변동 지급 항목"
        subTitle="코치의 활동에 따라서 달라질 있는 지급 항목이에요. 개별적용을 하게 되면, 코치 관리에서 각 코치님별로 인센티브를 설정하게 되요."
      >
        <ItemRow label="총 매출 인센티브 (단위: %)">
          <Controller
            name="totalSalesOption"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioSelectorGroup
                name="totalSalesOption"
                checkedItem={value}
                handleCheckedChange={(selectedValue) =>
                  onChange(selectedValue.currentTarget.id)
                }
                data={totalSalesRadioGroup}
              />
            )}
          />
          <Input
            {...register('totalSales')}
            type="text"
            className={css({
              minWidth: '320px',
              height: '40px',
              fontSize: '0.9rem',
              border: '1px solid var(--grey300)',
              borderRadius: '8px',
              padding: '6px 32px 6px 12px',
              margin: '0 0 0 8px',
            })}
            placeholder="총 매출 인센티브를 입력해주세요. (단위: %)"
            disabled={isDisabledTotalSales}
          />
          {errors.totalSales?.message && (
            <FormError
              error={errors.totalSales?.message}
              className={css({ margin: '0 0 0 8px' })}
            />
          )}
        </ItemRow>
        <ItemRow label="개별 인센티브 (단위: %)">
          <Controller
            name="individualSalesOption"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioSelectorGroup
                name="individualSales"
                checkedItem={value}
                handleCheckedChange={(selectedValue) =>
                  onChange(selectedValue.currentTarget.id)
                }
                data={individualSalesRadioGroup}
              />
            )}
          />
          <Input
            {...register('individualSales')}
            type="text"
            className={css({
              minWidth: '320px',
              height: '40px',
              fontSize: '0.9rem',
              border: '1px solid var(--grey300)',
              borderRadius: '8px',
              padding: '6px 32px 6px 12px',
              margin: '0 0 0 8px',
            })}
            placeholder="개별 인센티브를 입력해주세요. (단위: %)"
            disabled={isDisabledIndividualSales}
          />
          {errors.individualSales?.message && (
            <FormError
              error={errors.individualSales?.message}
              className={css({ margin: '0 0 0 8px' })}
            />
          )}
        </ItemRow>
      </BlockContainer>
      <BlockContainer
        title="과세 항목"
        subTitle={
          '코치님의 매출에서 적용되는 세금과 정산 비율을 설정해요.\n정산 비율을 적용하게 되면, 매출에서 입력한 정산비율만큼 정산이 되고,적용 하지 않으면 매출에서 아래 세금이 적용된 금액으로 정산해요.'
        }
      >
        <ItemRow label="정산비율 (단위: %)">
          <Controller
            name="settlementRateOption"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioSelectorGroup
                name="settlementRate"
                checkedItem={value}
                handleCheckedChange={(selectedValue) =>
                  onChange(selectedValue.currentTarget.id)
                }
                data={settlementRateRadioGroup}
              />
            )}
          />
          <Input
            {...register('settlementRate')}
            type="text"
            className={css({
              minWidth: '320px',
              height: '40px',
              fontSize: '0.9rem',
              border: '1px solid var(--grey300)',
              borderRadius: '8px',
              padding: '6px 32px 6px 12px',
              margin: '0 0 0 8px',
            })}
            placeholder="정산비율을 입력해주세요. (단위: %)"
            disabled={isDisabledSettlementRate}
          />
          {errors.settlementRate?.message && (
            <FormError
              error={errors.settlementRate?.message}
              className={css({ margin: '0 0 0 8px' })}
            />
          )}
        </ItemRow>
        <ItemRow label="부가세(원천징수 3.3%)">
          <Controller
            name="vatOption"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioSelectorGroup
                name="settlementRate"
                checkedItem={value}
                handleCheckedChange={(selectedValue) =>
                  onChange(selectedValue.currentTarget.id)
                }
                data={vatRadioGroup}
              />
            )}
          />
        </ItemRow>
        <ItemRow label="4대 보험 적용여부">
          <Controller
            name="insuranceOption"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioSelectorGroup
                name="insurance"
                checkedItem={value}
                handleCheckedChange={(selectedValue) =>
                  onChange(selectedValue.currentTarget.id)
                }
                data={insuranceRadioGroup}
              />
            )}
          />
        </ItemRow>
      </BlockContainer>
    </form>
  );
};

export default SettingPayment;
