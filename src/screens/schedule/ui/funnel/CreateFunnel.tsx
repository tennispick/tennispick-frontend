import { useFunnel } from '@use-funnel/browser';
import { Customer, LessonType } from 'src/shared/types';

type CustomerStep = {
  lessonType: LessonType;
  customers: Customer[];
};

const CreateFunnel = () => {
  const funnel = useFunnel<{
    customerStep: CustomerStep;
  }>({
    id: 'schedule-register-funnel',
    initial: {
      step: 'customerStep',
      context: {
        lessonType: LessonType.PRIVATE,
        customers: [],
      },
    },
  });

  return (
    <funnel.Render
      customerStep={({ context }) => {
        console.log(context);
        return (
          <div>
            <p>{context.lessonType}</p>
          </div>
        );
      }}
    />
  );
};

export default CreateFunnel;
