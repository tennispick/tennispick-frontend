import { flex } from 'styled-system/patterns';
import { css } from 'styled-system/css';
import { useGetCourtListQuery } from '@features/court/query/courtQuery';

const CourtContainer = () => {
  const { data } = useGetCourtListQuery({});

  return (
    <div className={css({ padding: '0 0 12px 0' })}>
      <ul className={flex({})}>
        {data &&
          data?.map(({ id, name }) => {
            return (
              <li
                key={id}
                className={css({
                  backgroundColor: `var(--black100)`,
                  color: 'var(--white100)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  margin: '0 8px 0 0',
                })}
              >
                <span>{name}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CourtContainer;
