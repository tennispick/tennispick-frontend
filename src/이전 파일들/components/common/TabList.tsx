import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

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
      <Lists
        className={css({
          borderBottom: borderBottom ? '1px solid var(--grey100)' : '',
        })}
      >
        {list &&
          list.length > 0 &&
          list.map((item: any) => {
            const isActive = item.id === state;
            return (
              <List
                key={item.id}
                value={item.id}
                onClick={() => setState(item.id)}
                className={css({
                  color: isActive ? 'var(--black100)' : 'var(--deactive-color)',
                  fontWeight: isActive ? '500' : '300',
                  borderBottom: isActive ? '2px solid var(--black100)' : '',
                })}
              >
                {item.name}
              </List>
            );
          })}
      </Lists>
      {buttonElement && (
        <div className={css({ position: 'absolute', top: '2%', right: '0' })}>
          {buttonElement}
        </div>
      )}
    </Container>
  );
};

const Container = styled('div', {
  base: {
    padding: '8px 0 0 0',
    margin: '6px 0 0 0',
  },
});

const Lists = styled('ul', {
  base: {
    display: 'flex',
    alignItems: 'center',
  },
});

const List = styled('li', {
  base: {
    margin: '0 36px 0 0',
    padding: '8px 0 12px 0',
    cursor: 'pointer',
  },
});

export default TabList;
