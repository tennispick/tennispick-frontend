import { SetStateAction } from '../types';
import DoubleLeftArrow from '@icons/paging_double_left_arrow.svg';
import SingleLeftArrow from '@icons/paging_single_left_arrow.svg';
import SingleRightArrow from '@icons/paging_single_right_arrow.svg';
import DoubleRightArrow from '@icons/paging_double_right_arrow.svg';
import DoubleLeftDisabledArrow from '@icons/paging_double_left_disabled_arrow.svg';
import SingleLeftDisabledArrow from '@icons/paging_single_left_disabled_arrow.svg';
import SingleRightDisabledArrow from '@icons/paging_single_right_disabled_arrow.svg';
import DoubleRightDisabledArrow from '@icons/paging_double_right_disabled_arrow.svg';
import Image from 'next/image';
import { css } from 'styled-system/css';
import { flex } from 'styled-system/patterns';

type Props = {
  totalPage: number;
  currentPage: number;
  setCurrentPage: SetStateAction<number>;
  offset?: number;
};

const Pagination = ({
  totalPage,
  currentPage,
  setCurrentPage,
  offset = 10,
}: Props) => {
  const totalSets = Math.ceil(totalPage / offset);
  const currentSet = Math.ceil(currentPage / offset);

  const startPage = (currentSet - 1) * offset + 1;
  const endPage = Math.min(startPage + offset - 1, totalPage);

  return (
    <div
      className={flex({
        alignItems: 'center',
        justifyContent: 'center',
        margin: '16px 0 0 0',
      })}
    >
      <Image
        src={currentSet > 1 ? DoubleLeftArrow : DoubleLeftDisabledArrow}
        alt="double left arrow"
        width={28}
        height={28}
        className={css({ cursor: currentSet > 1 ? 'pointer' : 'not-allowed' })}
        onClick={() => (currentSet > 1 ? setCurrentPage(1) : null)}
      />
      <Image
        src={currentSet > 1 ? SingleLeftArrow : SingleLeftDisabledArrow}
        alt="single left arrow"
        width={28}
        height={28}
        className={css({ cursor: currentSet > 1 ? 'pointer' : 'not-allowed' })}
        onClick={() =>
          currentSet > 1 ? setCurrentPage(startPage - offset) : null
        }
      />
      <ul className={flex({ alignItems: 'center' })}>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => i + startPage,
        ).map((page) => (
          <li
            key={page}
            className={css({
              width: '28px',
              height: '28px',
              padding: '4px 8px',
              textAlign: 'center',
              margin: '0 2px',
              borderRadius: '50%',
              color:
                currentPage === page
                  ? 'var(--business-color)'
                  : 'var(--grey300)',
              fontWeight: currentPage === page ? 600 : 400,
              cursor: 'pointer',
            })}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </li>
        ))}
      </ul>
      <Image
        src={
          currentSet < totalSets ? SingleRightArrow : SingleRightDisabledArrow
        }
        alt="single right arrow"
        width={28}
        height={28}
        className={css({
          cursor: currentSet < totalSets ? 'pointer' : 'not-allowed',
        })}
        onClick={() =>
          currentSet < totalSets ? setCurrentPage(startPage + offset) : null
        }
      />
      <Image
        src={
          currentSet < totalSets ? DoubleRightArrow : DoubleRightDisabledArrow
        }
        alt="double right arrow"
        width={28}
        height={28}
        className={css({
          cursor: currentSet < totalSets ? 'pointer' : 'not-allowed',
        })}
        onClick={() =>
          currentSet < totalSets ? setCurrentPage(totalPage) : null
        }
      />
    </div>
  );
};

export default Pagination;
