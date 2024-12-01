import Link from 'next/link';
import Image from 'next/image';
import { NavigationList } from 'app/src/mocks/navigation';
import Calendar from 'app/src/components/home/Calendar';
import { useState } from 'react';
import { Modal, Portal } from 'app/src/components/index';
import ScheduleByDate from 'app/src/features/layer/scheduleByDate/screen/ScheduleByDate';
import Logo from '@icons/white_bg_logo.svg';
import useMobile from 'app/src/hooks/useMobile';
import { cn } from 'app/src/lib/utils';
import { useRouter } from 'next/navigation';

type Props = {
  firstPathName: string;
};

const NavigationLayout = ({ firstPathName }: Props) => {

  const router = useRouter();
  const [day, setDay] = useState<Date>(new Date());
  const [openModal, setOpenodal] = useState<boolean>(false);
  const isMobile = useMobile();

  const handleCloseModalClick = () => setOpenodal(false);

  const handleDateClick = (day: Date) => {
    setOpenodal(true);
    setDay(day);
  };

  return (
    <div className="relative w-[240px] bg-white">
      <ul className="relative p-[10px] overflow-y-scroll">
        {NavigationList.map((item) => (
          <li
            key={item.id}
            className={cn(
              "flex items-center gap-[10px] p-4 mb-2 rounded-lg cursor-pointer transition-colors duration-150",
              firstPathName === item.path ? "bg-[#F6F6F6]" : "hover:bg-[#F6F6F6]"
            )}
            onClick={() => router.push(`/${item.path}`)}
          >
            {item.src('w-5 h-5 text-[#565A60]')}
            <span className="text-[#565A60]">{item.label}</span>
          </li>
        ))}
      </ul>
      <div className="relative h-[250px]">
        {!isMobile && (
          <Calendar
            // className={!isNavSpread ? 'hidden' : ''}
            handleClick={handleDateClick}
          />
        )}
      </div>
      {openModal && (
        <Portal id={'portal'}>
          <Modal
            title={'스케줄 등록'}
            titleContainer={false}
            className="w-[calc(100vw-3%)] h-[calc(100vh-5%)] top-1/2 p-0"
          >
            <ScheduleByDate
              day={day}
              handleCloseModalClick={handleCloseModalClick}
            />
          </Modal>
        </Portal>
      )}
    </div>
  );
};

export default NavigationLayout;
