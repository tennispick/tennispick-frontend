import { PageHeader } from '@components/index';
import { Button } from '@components/index';
import { LessonDetailData } from '../type/lesson.type';
import { DeleteWhiteIcon, EditWhiteIcon } from '@icons/index';
import LessonDetailInputField from '../component/LessonDetailInputField';
import { deleteLesson } from '@apis/lesson/lesson.api';

type Props = {
  data: LessonDetailData;
};

const LessonDetail = ({ data }: Props) => {
  const onClickDeleteLessonHandler = async () =>
    await deleteLesson(`${data.id}`);

  const onClickEditLessonHandler = async () => {};

  return (
    <form css={{ position: 'relative', height: '100%' }}>
      <PageHeader title={`레슨권: ${data.name}`} />
      <div css={{ display: 'flex', height: '88%' }}>
        <LessonDetailInputField data={data} />
        {/* TODO */}
        {/* <>다른 영역</> */}
      </div>
      <div css={{ display: 'flex', justifyContent: 'end' }}>
        <Button
          label={'정보 삭제하기'}
          variant={'iconBtn'}
          src={DeleteWhiteIcon}
          css={{
            border: 0,
            backgroundColor: 'var(--red200)',
            color: 'var(--white100)',
            padding: '12px 16px',
            margin: '0 12px 0 0',
          }}
          onClick={onClickDeleteLessonHandler}
        />
        <Button
          label={'정보 수정하기'}
          variant={'iconBtn'}
          src={EditWhiteIcon}
          css={{
            border: 0,
            backgroundColor: 'var(--business-active-color)',
            color: 'var(--white100)',
            padding: '12px 16px',
          }}
          onClick={onClickEditLessonHandler}
        />
      </div>
    </form>
  );
};

export default LessonDetail;
