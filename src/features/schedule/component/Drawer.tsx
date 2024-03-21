import { Button } from '@components/index';
import { EditWhiteIcon, DeleteWhiteIcon } from '@icons/index';

type Props = {
  customer: any;
};

const ScheduleDrawer = ({ customer }: Props) => {
  console.log(customer);

  return (
    <>
      <div></div>
      <div
        css={{
          position: 'fixed',
          bottom: '20px',
        }}
      >
        <Button
          label={'스케줄 수정하기'}
          variant={'iconBtn'}
          src={EditWhiteIcon}
          css={{
            width: 'calc(40vw - 40px)',
            justifyContent: 'center',
            border: 0,
            backgroundColor: 'var(--business-active-color)',
            color: 'var(--white100)',
            padding: '12px 16px',
            margin: '0 0 12px 0',
          }}
        />
        <Button
          label={'스케줄 삭제하기'}
          variant={'iconBtn'}
          src={DeleteWhiteIcon}
          css={{
            width: 'calc(40vw - 40px)',
            justifyContent: 'center',
            border: 0,
            backgroundColor: 'var(--red200)',
            color: 'var(--white100)',
            padding: '12px 16px',
          }}
        />
      </div>
    </>
  );
};

export default ScheduleDrawer;
