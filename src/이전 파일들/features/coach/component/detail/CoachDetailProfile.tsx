import { Divider, Input, Select } from 'src/이전 파일들/components/index';
import {
  ProfileManIcon,
  ProfileWomanIcon,
} from 'src/이전 파일들/assets/icons/index';
import { CoachDetailData } from 'src/이전 파일들/apis/coach/coach.type';
import { birthSplit } from 'src/이전 파일들/utils/split';
import { transferSexType } from 'src/이전 파일들/utils/switch';
import { useColor } from 'react-color-palette';

import ColorPalettePicker from 'src/widgets/ColorPalettePicker';
import { css } from 'styled-system/css';
import { Flex, styled } from 'styled-system/jsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FormError } from 'src/이전 파일들/components/FormError';
import {
  passwordRegex,
  phoneNumberRegex,
} from 'src/이전 파일들/utils/validation';
import { ChangeEventHandler, useState } from 'react';
import { useUpdateCoachDetailMutation } from '@/이전 파일들/features/coach/mutate/coach';

const schema = z
  .object({
    phone: z
      .string()
      .trim()
      .min(10, { message: '전화번호는 10자리 이상이어야 합니다.' })
      .regex(phoneNumberRegex, { message: '올바른 전화번호 형식이 아닙니다.' }),
    password: z
      .string()
      .regex(passwordRegex, {
        message: '비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함해야 합니다.',
      })
      .or(z.literal('')),
    passwordConfirm: z.string().optional(),
    salary: z.coerce.number({ message: '숫자만 입력해주세요.' }).optional(),
    position: z.string(),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password && password !== passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다.',
        path: ['passwordConfirm'],
      });
    }
  });

export type CoachFormSchema = z.infer<typeof schema>;

type Props = {
  coachId: string;
  data: CoachDetailData;
  salary: number;
  salaryOption: string;
};

const CoachDetailProfile = ({
  coachId,
  data,
  salary: centerSalary,
  salaryOption,
}: Props) => {
  const { name, email, phone, sex, position, birth, salary, profileImageUrl } =
    data;
  const [year, month, date] = birthSplit(birth);

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [color, setColor] = useColor(data.color);
  const profileImage = profileImageUrl
    ? profileImageUrl
    : sex === 'man'
      ? ProfileManIcon.src
      : ProfileWomanIcon.src;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CoachFormSchema>({
    resolver: async (data, context, options) =>
      zodResolver(schema)(data, context, options),
  });

  const { mutate } = useUpdateCoachDetailMutation(coachId);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    setFile(file);
  };

  const handleFormSubmit = (data: CoachFormSchema) => {
    if (confirm('정말 수정하시겠습니까?') === false) return;

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const typedKey = key as keyof CoachFormSchema;
      formData.append(key, data[typedKey] as string);
    });

    file && formData.append('file', file);
    formData.append('color', color.hex);
    if (salaryOption !== 'individualSalary')
      formData.set('salary', `${centerSalary}`);

    mutate(formData);
  };

  return (
    <form
      id="coachForm"
      className={css({
        width: '30%',
        height: '100%',
        padding: '0 32px 0 0',
      })}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div>
        <Input
          label=" "
          id="profileImage"
          variant="file"
          className={css({
            width: '5.725vw',
            height: '5.725vw',
            margin: '0 auto',
          })}
          style={{
            backgroundImage: preview ? preview : profileImage,
          }}
        >
          <Input.TextField type={'file'} onChange={handleFileChange} />
        </Input>
        <div
          className={css({
            textAlign: 'center',
            margin: '20px 0',
            fontSize: '1.125rem',
            fontWeight: 600,
          })}
        >
          {email}
        </div>
        <Flex>
          <StaticProfileContainer>
            <StaticProfileValue>{name}</StaticProfileValue>
            <StaticProfleKey>이름</StaticProfleKey>
          </StaticProfileContainer>
          <StaticProfileContainer>
            <StaticProfileValue>{transferSexType(sex)}</StaticProfileValue>
            <StaticProfleKey>성별</StaticProfleKey>
          </StaticProfileContainer>
          <StaticProfileContainer>
            <StaticProfileValue>{`${year}.${month}.${date}`}</StaticProfileValue>
            <StaticProfleKey>생년월일</StaticProfleKey>
          </StaticProfileContainer>
        </Flex>
      </div>
      <Divider margin="24px 0" />
      <ItemRow>
        <InputHead>코치 고유 색상</InputHead>
        <InputItem className={css({ width: '40%' })}>
          <ColorPalettePicker color={color} setColor={setColor} />
        </InputItem>
      </ItemRow>
      <ItemRow>
        <InputHead>연락처</InputHead>
        <InputItem>
          <Input.TextField
            {...register('phone')}
            placeholder="연락처를 입력해주세요."
            defaultValue={phone}
          />
        </InputItem>
      </ItemRow>
      {errors.phone?.message && (
        <FormError
          error={errors.phone.message}
          className={css({ margin: '0 0 0 35%', padding: '0 4px' })}
        />
      )}
      <ItemRow>
        <InputHead>비밀번호</InputHead>
        <InputItem>
          <Input.TextField
            {...register('password')}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
        </InputItem>
      </ItemRow>
      {errors.password?.message && (
        <FormError
          error={errors.password.message}
          className={css({ margin: '0 0 0 35%', padding: '0 4px' })}
        />
      )}
      <ItemRow>
        <InputHead>비밀번호 확인</InputHead>
        <InputItem>
          <Input.TextField
            {...register('passwordConfirm')}
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
          />
        </InputItem>
      </ItemRow>
      {errors.passwordConfirm?.message && (
        <FormError
          error={errors.passwordConfirm.message}
          className={css({ margin: '0 0 0 35%', padding: '0 4px' })}
        />
      )}
      <ItemRow>
        <InputHead>기본 급여</InputHead>
        <InputItem>
          <Input.TextField
            {...register('salary')}
            type="text"
            placeholder="기본 급여를 입력해주세요."
            defaultValue={
              salaryOption === 'individualSalary' ? salary : centerSalary
            }
            disabled={salaryOption !== 'individualSalary'}
          />
        </InputItem>
      </ItemRow>
      {errors.salary?.message ? (
        <FormError
          error={errors.salary.message}
          className={css({ margin: '0 0 0 35%', padding: '0 4px' })}
        />
      ) : (
        <div
          className={css({
            width: '65%',
            margin: '0 0 0 35%',
            padding: '0 0 0 4px',
            fontSize: '0.825rem',
            wordBreak: 'keep-all',
            color: 'var(--red100)',
          })}
        >
          미 입력시, 센터에서 설정한 급여가 적용되요.
        </div>
      )}
      <ItemRow>
        <InputHead>직책</InputHead>
        <Select {...register('position')} width={'40%'} defaultValue={position}>
          <option value="">선택</option>
          <option value="coach">코치</option>
        </Select>
      </ItemRow>
    </form>
  );
};

const ItemRow = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    height: '46px',
    lineHeight: '30px',
    padding: '4px 12px',
    margin: '12px 0',
  },
});
const InputHead = styled('div', {
  base: {
    width: '35%',
    fontSize: '1rem',
    fontWeight: 600,
    padding: '4px 0',
  },
});
const InputItem = styled(Input, {
  base: {
    width: '65%',
    height: '100%',
  },
});
const StaticProfileContainer = styled('div', {
  base: {
    width: 'calc(100% / 3)',
    textAlign: 'center',
  },
});

const StaticProfleKey = styled('div', {
  base: { color: 'var(--grey1500)' },
});

const StaticProfileValue = styled('div', {
  base: {
    margin: '0 0 8px 0',
    fontSize: '1.125rem',
    fontWeight: 600,
  },
});

export default CoachDetailProfile;
