import { CustomerDetailData } from '@apis/customer/customer.type';
import { Input, Select } from '@/shared/components/index';
import { getYearList, getMonthList, getDayList } from 'src/shared/utils/date';
import {
  ProfileManIcon,
  ProfileWomanIcon,
  DeleteWhiteIcon,
  EditWhiteIcon,
} from '@icons/index';
import CustomerInputRow from '@/shared/components/customer/detail/InputRow';
import CustomerSelectRow from '@/shared/components/customer/detail/SelectRow';
import { deleteCustomer } from '@apis/customer/customer.api';
import { useQueryClient } from '@tanstack/react-query';
import IconButton from '@/shared/components/button/IconButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChangeEventHandler, useState } from 'react';
import { passwordRegex } from 'src/shared/utils/validation';
import { FormError } from '@/shared/components/FormError';
import { useUpdateCustomerDetailMutation } from '../mutate/profile';

const schema = z
  .object({
    password: z
      .string()
      .regex(passwordRegex, {
        message: '비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함해야 합니다.',
      })
      .or(z.literal('')),
    passwordConfirm: z.string().optional(),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다.',
        path: ['passwordConfirm'],
      });
    }
  });

type CustomerFormSchema = z.infer<typeof schema>;
type Props = {
  customerId: string;
  customer: CustomerDetailData;
};

const CustomerInfo = ({ customerId, customer }: Props) => {
  const queryClient = useQueryClient();
  const {
    name,
    birth,
    email,
    phone,
    sex,
    profileImageUrl,
    digitalSignatureImageUrl,
  } = customer;
  const [year, month, date] = birth.split('-');
  const { yearArray } = getYearList();
  const { monthArray } = getMonthList();
  const { dateArray } = getDayList();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const profileImage = profileImageUrl
    ? profileImageUrl
    : sex === 'man'
      ? ProfileManIcon.src
      : ProfileWomanIcon.src;
  const { mutate } = useUpdateCustomerDetailMutation(customerId);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormSchema>({
    resolver: async (data, context, options) =>
      zodResolver(schema)(data, context, options),
  });

  const handleDeleteCustomerClick = async () => {
    if (!window.confirm('정말로 삭제하시겠습니까?')) return;
    const { data } = await deleteCustomer({ customerId });
    if (data.affectedRows > 0) {
      alert('회원이 삭제되었어요.');
      queryClient.invalidateQueries({
        queryKey: ['customer'],
        exact: true,
      });
    } else {
      alert('회원 삭제에 실패했어요.\n관리자에게 문의해주세요.');
    }
    window.location.href = '/customer';
  };

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

  const handleFormSubmit = (data: CustomerFormSchema) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const typedKey = key as keyof CustomerFormSchema;
      formData.append(key, data[typedKey] as string);
    });
    file && formData.append('file', file);
    mutate(formData);
  };

  return (
    <form
      className="flex h-[35%] border-b border-gray-200 mb-4 gap-6"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="w-1/5 h-[calc(100%-84px)]">
        <Input
          label={' '}
          id={'profileImage'}
          variant="file"
          className="w-40 h-40 mx-auto"
          style={{
            backgroundImage: `url(${preview ? preview : profileImage})`,
          }}
        >
          <Input.TextField type={'file'} onChange={handleFileChange} />
        </Input>
        <div className="text-center border border-gray-200 w-[calc(75%-48px)] h-[52px] leading-[52px] mx-auto mt-4 align-middle rounded-lg">
          {digitalSignatureImageUrl ?? '서명없음'}
        </div>
      </div>
      <div className="flex w-2/5 flex-col gap-4 pl-6">
        <CustomerInputRow
          name="name"
          rowHeadLabel="이름"
          placeholder="성명을 입력해주세요."
          defaultValue={name}
          disabled={true}
        />
        <CustomerSelectRow
          name="birth"
          rowHeadLabel="생년월일"
          selectChildren={
            <>
              <Select
                key="year"
                name="year"
                className="w-[calc(((75%-48px)/3)-4px)]"
                defaultValue={year}
                disabled={true}
              >
                {yearArray.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </Select>
              <Select
                key="month"
                name="month"
                className="w-[calc(((75%-48px)/3)-4px)] mx-1.5"
                defaultValue={month}
                disabled={true}
              >
                {monthArray.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </Select>
              <Select
                key="date"
                name="date"
                className="w-[calc(((75%-48px)/3)-4px)]"
                defaultValue={date}
                disabled={true}
              >
                {dateArray.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </Select>
            </>
          }
        />
        <CustomerInputRow
          name="email"
          rowHeadLabel="이메일"
          placeholder="이메일을 입력해주세요."
          defaultValue={email}
          disabled={true}
        />
        <CustomerInputRow
          name="phone"
          rowHeadLabel="연락처"
          placeholder="연락처를 입력해주세요."
          defaultValue={phone}
          disabled={true}
        />
        <CustomerSelectRow
          name="성별"
          rowHeadLabel="성별"
          selectChildren={
            <Select
              key="sex"
              name="sex"
              className="w-[calc((75%-48px)/2)]"
              defaultValue={sex}
              disabled={true}
            >
              <option value="man">남자</option>
              <option value="woman">여자</option>
            </Select>
          }
        />
      </div>
      <div className="flex w-2/5 flex-col gap-4">
        <div className="h-[calc(((100%/5)*4)-16px)]">
          <CustomerInputRow
            {...register('password')}
            type={'password'}
            name={'password'}
            rowHeadLabel={'비밀번호'}
            placeholder={'비밀번호를 입력해주세요.'}
            defaultValue={''}
            className={`h-[calc(100%/5)] ${errors.password ? 'mb-2' : 'mb-4'}`}
          />
          {errors.password?.message && (
            <FormError
              error={errors.password.message}
              className="mb-2 ml-1/4 px-1"
            />
          )}
          <CustomerInputRow
            {...register('passwordConfirm')}
            type={'password'}
            name={'passwordConfirm'}
            rowHeadLabel={'비밀번호 확인'}
            placeholder={'비밀번호를 다시 입력해주세요.'}
            defaultValue={''}
            className={`h-[calc(100%/5)] ${errors.passwordConfirm ? 'mb-2' : 'mb-4'}`}
          />
          {errors.passwordConfirm?.message && (
            <FormError
              error={errors.passwordConfirm.message}
              className="mb-2 ml-1/4 px-1"
            />
          )}
        </div>
        <div className="flex justify-end gap-2">
          <IconButton
            iconAlign="left"
            iconAlt={'delete customer info'}
            iconSrc={DeleteWhiteIcon}
            variant="negative"
            size="lg"
            label={'정보 삭제하기'}
            onClick={handleDeleteCustomerClick}
          />
          <IconButton
            type="submit"
            iconAlign="left"
            iconAlt={'edit customer info'}
            iconSrc={EditWhiteIcon}
            variant="primary"
            size="lg"
            label={'정보 수정하기'}
          />
        </div>
      </div>
    </form>
  );
};

export default CustomerInfo;
