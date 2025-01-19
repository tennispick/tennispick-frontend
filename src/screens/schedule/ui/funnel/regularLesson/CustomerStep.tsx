import { TenButton, TenToggleRadio } from "@/shared/ui";
import { Field } from "../Field";
import { SelectedCustomers } from "./SelectedCustomers";
import { TenInfoNote } from "@/shared/ui";
import { TenAutoCompleteInput } from "@/shared/ui/input";
import { useEffect, useState } from "react";
import { useCustomersQuery } from "@/features/customer/api/queries";
import { CreateRegularLessonFunnelContext } from "../../CreateRegularLesson";
import { Customer, LessonType } from "@/shared/types";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { TenSelect } from "@/shared/ui/TenSelect";
import { useLessonTicketsQuery } from "@/features/lessonTicket/api/queries";
import { transformDataToSelectOptions } from "@/shared/utils/format";


interface Props {
  handleNext?: ({ lessonType, customers, lessonTicket, scheduleType }: Required<CreateRegularLessonFunnelContext["customerStep"]>) => void;
}

export const CustomerStep = ({ handleNext }: Props) => {

  const [keyword, setKeyword] = useState<string>('');
  const [selectedCustomers, setSelectedCustomers] = useState<Customer[]>([]);

  const { isLoading, data: customers } = useCustomersQuery({
    keyword,
  })

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomers(prev => {
      const isSelected = prev.find(item => item.id === customer.id);
      if (!isSelected) return [...prev, customer];
      return prev;
    });

    setKeyword('');
  }

  const { formState: { errors }, setError, clearErrors, control, getValues } = useFormContext();

  const handleClick = () => {
    let isError = false;

    const lessonType = selectedCustomers.length > 1 ? LessonType.GROUP : LessonType.PRIVATE;
    const lessonTicket = getValues('lessonTicket');
    const scheduleType = getValues('scheduleType');

    if (!selectedCustomers || selectedCustomers.length === 0) {
      setError('customers', { message: '회원을 선택해주세요.' });
      isError = true;
    }

    if (!lessonTicket) {
      setError('lessonTicket', { message: '수강권을 선택해주세요.' });
      isError = true;
    }

    if (isError) return;

    handleNext?.({
      lessonType,
      customers: selectedCustomers.map(customer => ({ customer })),
      lessonTicket,
      scheduleType
    });
  };

  useEffect(() => {
    if (selectedCustomers && selectedCustomers.length > 0) {
      clearErrors('customers');
    }
  }, [selectedCustomers])

  return (
    <section className="relative h-[calc(100%-24px)]">
      <div className="h-[calc(100%-76px)]">
        <Field
          className="pt-0"
          label="강습 유형"
          note={
            <TenInfoNote
              type="info"
              items={[
                <div>
                  <div className="mb-1">강습 유형은 선택한 회원의 수에 따라서 개인, 그룹이 자동으로 선택되요.</div>
                  <div>개인 강습: 선택회원이 1명</div>
                  <div>그룹 강습: 선택회원이 2명 이상</div>
                </div>
              ]}
            />
          }
        >
          <TenToggleRadio
            className="mb-3"
            labelClassName="cursor-not-allowed"
            checkedItem={selectedCustomers.length > 1 ? 'group' : 'individual'}
            group={[
              {
                label: '개인 강습',
                value: 'individual'
              },
              {
                label: '그룹 강습',
                value: 'group'
              }
            ]}
          />
        </Field>
        <Field label="회원 검색" errors={errors.customers as FieldError}>
          <TenAutoCompleteInput
            placeholder="회원 이름을 입력해주세요."
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            isLoading={isLoading}
            data={customers}
            errors={errors.customers as FieldError}
            children={
              customers?.map((customer) => (
                <div
                  key={customer.id}
                  className="px-3 py-2 hover:cursor-pointer hover:bg-white-400"
                  onClick={() => handleSelectCustomer(customer)}
                >
                  {customer.name}
                </div>
              ))
            }
          />
        </Field>
        {selectedCustomers && selectedCustomers.length > 0 &&
          <SelectedCustomers
            data={selectedCustomers}
            handleRemoveCustomer={(id) => setSelectedCustomers(prev => prev.filter(customer => customer.id !== id))}
          />}
        <LessonTicketSelect />
        <Field
          className="pt-0"
          label="스케줄 등록 유형"
        >
          <Controller
            name="scheduleType"
            defaultValue="individual"
            control={control}
            render={({ field }) => (
              <TenToggleRadio
                className="mb-3"
                checkedItem={field.value ?? "individual"}
                group={[
                  {
                    label: '개별 등록',
                    value: 'individual'
                  },
                  {
                    label: '일괄 등록',
                    value: 'collective'
                  }
                ]}
                {...field}
              />
            )}
          />
        </Field>
      </div>
      <div className="mt-4 text-right">
        <TenButton
          type="button"
          label="다음"
          onClick={handleClick}
        />
      </div>
    </section>
  )
}

const LessonTicketSelect = () => {

  const { formState: { errors }, clearErrors, control } = useFormContext();

  // TODO 회원의 수강권 목록 조회해서 Label 수정
  const { data } = useLessonTicketsQuery();

  const LessonTickets = transformDataToSelectOptions({
    data: data?.data || [],
    labelKey: 'name',
    valueKey: 'id',
  });

  return (
    <Field
      className="pt-0"
      label="수강권"
      note={
        <TenInfoNote
          type="info"
          items={[
            <div>{`(결제) 표기가 없는 수강권은 후불 결제로 진행해야 해요.`}</div>
          ]}
        />
      }
    >
      <Controller
        control={control}
        name="lessonTicket"
        render={({ field: { onChange, ...field } }) => (
          <TenSelect
            className="mb-3 w-[240px]"
            placeholder="수강권 선택"
            data={LessonTickets}
            errors={errors.lessonTicket as FieldError}
            onChange={(value) => {
              onChange(value);
              if (value) {
                clearErrors('lessonTicket');
              }
            }}
            {...field}
          />
        )}
      />
    </Field>
  )
};