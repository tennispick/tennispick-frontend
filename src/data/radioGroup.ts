// 환불수단 일치여부
const isRefundMatchRadioGroup = [
  {
    name: 'isRefundMatch',
    label: '일치',
    value: 'match',
  },
  {
    name: 'isRefundMatch',
    label: '불일치(수단 변경)',
    value: 'misMatch',
  },
];

const refundRangeRadioGroup = [
  {
    name: 'refundRange',
    label: '전액환불',
    value: 'full',
  },
  {
    name: 'refundRange',
    label: '일부환불',
    value: 'part',
  },
];

export { isRefundMatchRadioGroup, refundRangeRadioGroup };
