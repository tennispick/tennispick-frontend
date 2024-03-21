import React from 'react';
import styled from '@emotion/styled';
import { CSS_TYPE } from '@styles/styles';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  list?: any;
  borderBottom?: boolean;
  buttonElement?: React.ReactNode;
};

const TabList = ({
  state,
  setState,
  list,
  borderBottom,
  buttonElement,
}: Props) => {
  return (
    <Container>
      <Lists borderBottom={borderBottom ? '1px solid var(--grey100)' : ''}>
        {list &&
          list.length > 0 &&
          list.map((item: any) => {
            const isActive = item.id === state;
            return (
              <List
                key={item.id}
                value={item.id}
                onClick={() => setState(item.id)}
                color={
                  isActive
                    ? 'var(--black100)'
                    : 'var(--deactive-color)'
                }
                fontWeight={isActive ? '500' : '300'}
                borderBottom={
                  isActive ? '2px solid var(--black100)' : ''
                }
              >
                {item.name}
              </List>
            );
          })}
      </Lists>
      {buttonElement && (
        <div css={{ position: 'absolute', top: '2%', right: '0' }}>
          {buttonElement}
        </div>
      )}
    </Container>
  );
};

const Container = styled.div<CSS_TYPE>({
  position: 'relative',
  padding: '8px 0 0 0',
  margin: '6px 0 0 0',
});
const Lists = styled.ul<CSS_TYPE>(
  {
    display: 'flex',
    alignItems: 'center',
  },
  (props) => ({
    borderBottom: props.borderBottom,
  }),
);
const List = styled.li<CSS_TYPE>(
  {
    margin: '0 36px 0 0',
    padding: '8px 0 12px 0',
    cursor: 'pointer',
  },
  (props) => ({
    color: props.color,
    fontWeight: props.fontWeight,
    borderBottom: props.borderBottom,
  }),
);

export default TabList;
