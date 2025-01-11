import { TenButton, TenToggleRadio } from "@/shared/ui";
import { Field } from "../Field";
import { SelectedCustomers } from "./SelectedCustomers";
import { TenInfoNote } from "@/shared/ui";
import { TenAutoCompleteInput } from "@/shared/ui/input";
import { useEffect, useState } from "react";
import { useCustomerAvailableLessons, useCustomersQuery } from "@/features/customer/api/queries";

interface Props {
  onNext: () => void;
}

export const CustomerStep = ({ onNext }: Props) => {
  const [keyword, setKeyword] = useState<string>('');

  const { isLoading, data: customers } = useCustomersQuery({
    keyword,
  })

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
                  <div>회원이 1명인 경우 개인 강습으로 설정되고, 2명 이상인 경우 그룹 강습으로 설정되요.</div>
                </div>
              ]}
            />
          }
        >
          <TenToggleRadio
            className="mb-3"
            labelClassName="cursor-not-allowed"
            checkedItem="individual"
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
        <Field label="회원 검색" >
          <TenAutoCompleteInput
            placeholder="회원 이름을 입력해주세요."
            onChange={(e) => setKeyword(e.target.value)}
            isLoading={isLoading}
            data={customers}
          />
        </Field>
        <SelectedCustomers data={[]} />
      </div>
      <div className="mt-4 text-right">
        <TenButton
          type="button"
          label="다음"
          onClick={onNext}
        />
      </div>
    </section>
  )
}