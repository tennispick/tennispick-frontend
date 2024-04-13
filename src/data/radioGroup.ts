// 환불수단 일치여부
const isRefundMatchRadioGroup = [
  {
    name: 'refundMethod',
    label: '일치',
    value: 'match',
  },
  {
    name: 'refundMethod',
    label: '불일치(수단 변경)',
    value: 'misMatch',
  },
];

const refundRangeRadioGroup = [
  {
    name: 'refundRange',
    label: '일부환불',
    value: 'part',
  },
  {
    name: 'refundRange',
    label: '전액환불',
    value: 'full',
  },
];

export { isRefundMatchRadioGroup, refundRangeRadioGroup };
