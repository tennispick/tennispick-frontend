import { z } from 'zod';
import {
  individualSalesRadioGroup,
  insuranceRadioGroup,
  settlementRateRadioGroup,
  totalSalesRadioGroup,
  vatRadioGroup,
} from '../data/payment';

const numberCasting = z.coerce
  .number({ message: '숫자만 입력해주세요.' })
  .min(1, { message: '0원 보다 큰 숫자를 입력해야 해요.' });
const enumCasting = <T extends { id: string }>(array: Array<T>) =>
  z.enum([...array.map((item) => item.id)] as [string, ...string[]]);

export const PaymentSettingSchema = z
  .object({
    salary: numberCasting,
    totalSalesOption: enumCasting(totalSalesRadioGroup),
    totalSales: numberCasting.optional(),
    individualSalesOption: enumCasting(individualSalesRadioGroup),
    individualSales: numberCasting.optional(),
    settlementRateOption: enumCasting(settlementRateRadioGroup),
    settlementRate: numberCasting.optional(),
    vatOption: enumCasting(vatRadioGroup),
    insuranceOption: enumCasting(insuranceRadioGroup),
  })
  .superRefine(
    (
      {
        totalSalesOption,
        totalSales,
        individualSalesOption,
        individualSales,
        settlementRateOption,
        settlementRate,
      },
      ctx,
    ) => {
      if (totalSalesOption === 'totalSalesAll' && !totalSales) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '총 매출 인센티브를 입력해주세요.',
          path: ['totalSales'],
        });
      }

      if (individualSalesOption === 'individualSalesAll' && !individualSales) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '개별 인센티브를 입력해주세요.',
          path: ['individualSales'],
        });
      }

      if (settlementRateOption === 'settlementRateApply' && !settlementRate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '정산비율을 입력해주세요.',
          path: ['settlementRate'],
        });
      }
    },
  );
