import { SetStateAction } from '../../types';
import DoubleLeftArrow from '@icons/paging_double_left_arrow.svg';
import SingleLeftArrow from '@icons/paging_single_left_arrow.svg';
import SingleRightArrow from '@icons/paging_single_right_arrow.svg';
import DoubleRightArrow from '@icons/paging_double_right_arrow.svg';
import DoubleLeftDisabledArrow from '@icons/paging_double_left_disabled_arrow.svg';
import SingleLeftDisabledArrow from '@icons/paging_single_left_disabled_arrow.svg';
import SingleRightDisabledArrow from '@icons/paging_single_right_disabled_arrow.svg';
import DoubleRightDisabledArrow from '@icons/paging_double_right_disabled_arrow.svg';
import Image from 'next/image';

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
    <div className="flex items-center justify-center mt-4">
      <Image
        src={currentSet > 1 ? DoubleLeftArrow : DoubleLeftDisabledArrow}
        alt="double left arrow"
        width={28}
        height={28}
        className={currentSet > 1 ? 'cursor-pointer' : 'cursor-not-allowed'}
        onClick={() => (currentSet > 1 ? setCurrentPage(1) : null)}
      />
      <Image
        src={currentSet > 1 ? SingleLeftArrow : SingleLeftDisabledArrow}
        alt="single left arrow"
        width={28}
        height={28}
        className={currentSet > 1 ? 'cursor-pointer' : 'cursor-not-allowed'}
        onClick={() =>
          currentSet > 1 ? setCurrentPage(startPage - offset) : null
        }
      />
      <ul className="flex items-center">
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => i + startPage,
        ).map((page) => (
          <li
            key={page}
            className={`w-7 h-7 p-1 text-center mx-0.5 rounded-full cursor-pointer ${
              currentPage === page
                ? 'text-[var(--business-color)] font-semibold'
                : 'text-[var(--grey300)] font-normal'
            }`}
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
        className={
          currentSet < totalSets ? 'cursor-pointer' : 'cursor-not-allowed'
        }
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
        className={
          currentSet < totalSets ? 'cursor-pointer' : 'cursor-not-allowed'
        }
        onClick={() =>
          currentSet < totalSets ? setCurrentPage(totalPage) : null
        }
      />
    </div>
  );
};

export default Pagination;
