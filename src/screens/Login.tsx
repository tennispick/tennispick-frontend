'use client';

import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import camelcaseKeys from 'camelcase-keys';

import { Section } from '@/app/layout';
import { TenButton, TenInput } from '@/shared/ui';
import { setCookie } from '@/shared/lib/cookie';

import { LoginSchemaType } from '@/features/auth/type';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/features/auth/schema';
import { useLoginMutation } from '@/features/auth/api/mutations';
import { LoginResponse } from '@/features/auth/type/login.type';
import { useUserStore } from '@/shared/lib/store/userStore';

import useCenterPaymentSettingStore from '@/shared/lib/store/centerStore';
import { TenSpinner } from '@/shared/ui/TenSpinner';

const LoginScreen = () => {
  const router = useRouter();
  const { setAdminInfo } = useUserStore();
  const { setCenterPaymentSetting } = useCenterPaymentSettingStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const handleMutateSuccess = (response: LoginResponse) => {
    const { accessToken, payload } = camelcaseKeys(response, { deep: true });
    const {
      salaryOption,
      salary,
      totalSalesOption,
      totalSales,
      individualSalesOption,
      individualSales,
      settlementRateOption,
      settlementRate,
      vatOption,
      insuranceOption,
    } = payload;

    setCookie(accessToken);
    setAdminInfo(payload);
    setCenterPaymentSetting({
      salaryOption,
      salary,
      totalSalesOption,
      totalSales,
      individualSalesOption,
      individualSales,
      settlementRateOption,
      settlementRate,
      vatOption,
      insuranceOption,
    });

    router.push('/');
  };

  const { mutate, isPending } = useLoginMutation(handleMutateSuccess);

  const handleLogin = async (data: LoginSchemaType) => mutate(data);

  return (
    <Section className="w-screen h-screen bg-white-300">
      <div className="flex items-center justify-center">
        <div className="px-[64px] py-[100px] min-w-[520px] mt-12 bg-white-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-lg">
          {isPending && <TenSpinner.Full />}
          <div className="font-bold text-2xl mb-10">테니스 픽 관리자 센터</div>
          <div className="font-medium text-xl mb-10">로그인</div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div>
              <div className="pl-1 mb-2">아이디</div>
              <Controller
                control={control}
                name="id"
                render={({ field }) => (
                  <TenInput
                    type="text"
                    placeholder="아이디를 입력해주세요."
                    wrapperClassName="mb-5"
                    className="mb-3"
                    errors={errors.id}
                    {...field}
                  />
                )}
              />
              <div className="pl-1 mb-2">비밀번호</div>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <TenInput
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    wrapperClassName="mb-5"
                    className="mb-3"
                    errors={errors.password}
                    {...field}
                  />
                )}
              />
            </div>
            <TenButton
              type="submit"
              label="로그인"
              className="block w-[96px] ml-auto mt-3 mb-10"
            />
          </form>
          <div className="flex justify-center gap-4">
            <span>이용약관</span>
            <span>개인정보 처리방침</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LoginScreen;
