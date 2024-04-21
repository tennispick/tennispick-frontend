import { ImageContainer as Image } from '@styles/styles';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';

type Props = {
  onClickCloseModalHandler: () => void;
};

const ScheduleModalRecentHistoryModalHeader = ({ onClickCloseModalHandler }: Props) =>{
  return(
    <div css={{ display: 'flex' }}>
      <div css={{ margin: '0 0 28px 0'}}>
        <div css={{ margin: '0 0 12px 0', fontSize: '1.125rem', fontWeight: 600 }}>최근 수강이력</div>
        <div>회원의 최근 수강이력을 확인할 수 있어요.</div>
      </div>
      <Image
        src={CancelBtnIcon}
        alt={'close button'}
        width={36}
        height={36}
        position={'absolute'}
        top={0}
        right={0}
        cursor={'pointer'}
        onClick={onClickCloseModalHandler}
      />
    </div>
  )
};

export default ScheduleModalRecentHistoryModalHeader;