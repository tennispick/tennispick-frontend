import { CommonFormInputType } from '@features/schedule/type/schedule.type';
import styled from '@emotion/styled';
import { SetStateAction } from '@/types/index';
import { NormalList as List } from '@components/index';
import { getCustomerLessonHistory } from '@apis/customer/customer.api';

type CommonInputType = Pick<
  CommonFormInputType,
  'customer' | 'lesson' | 'lessonType'
>;

type Props = {
  setFormData: SetStateAction<CommonFormInputType>;
  setKeyword: SetStateAction<string>;
  setCustomerId: SetStateAction<string>;
  setShowModal: SetStateAction<boolean>;
  autoSearchKeyword: Array<{
    id: string;
    name: string;
  }>;
} & CommonInputType;

const ScheduleModalSearchInputAutoCompleteSearchDropdown = ({
  lessonType,
  customer,
  setFormData,
  setKeyword,
  setCustomerId,
  autoSearchKeyword,
  setShowModal,
}: Props) => {
  const onClickCustomerHandler = async (id: string, name: string) => {
    setFormData((prev: CommonFormInputType) => {
      const customerItem =
        lessonType === 'private' && customer.length > 0
          ? [{ id, name }]
          : [...prev.customer, { id, name }];
      return {
        ...prev,
        customer: customerItem,
      };
    });

    setCustomerId(id);
    setKeyword('');

    const response = await getCustomerLessonHistory({
      customerId: id,
      page: 1,
    });
    const { data } = response;

    if (data.lessonHistory.length > 0) setShowModal(true);
  };

  return (
    <AutoCompleteSearch>
      <List.UnOrderList css={{ padding: '4px 0', margin: '0' }}>
        {autoSearchKeyword.map(({ id, name }) => {
          return (
            <List
              key={id}
              css={{
                padding: '8px 12px',
                ':hover': {
                  borderRadius: '4px',
                },
              }}
              onClick={() => onClickCustomerHandler(id, name)}
            >
              {name}
            </List>
          );
        })}
      </List.UnOrderList>
    </AutoCompleteSearch>
  );
};

const AutoCompleteSearch = styled.div({
  position: 'absolute',
  width: '80%',
  minHeight: '40px',
  maxHeight: '180px',
  top: '50px',
  left: 0,
  backgroundColor: 'var(--white100)',
  boxShadow: '0px 8px 12px 0px rgba(0, 0, 0, 0.25)',
  border: '1px solid var(--grey100)',
  borderRadius: '8px',
  overflowY: 'scroll',
  zIndex: 1,
});

export default ScheduleModalSearchInputAutoCompleteSearchDropdown;
