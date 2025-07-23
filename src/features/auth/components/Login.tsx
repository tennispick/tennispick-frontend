'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/shared/components/common/Input';
import Divider from '@/shared/components/common/Divider';
import Button from '@/shared/components/common/Button';
import useInput from '@hooks/useInput';
import { setCookie } from '@lib/cookie';
import { useRecoilState } from 'recoil';
import { userState } from '@lib/recoil/userState';
import { useLoginMutation } from '../mutate/login';
import useCenterPaymentSettingStore from '@lib/zustand/center';

const Login = () => {
  const router = useRouter();
  const [login, onChangeLogin] = useInput({
    id: '',
    password: '',
  });

  const { setCenterPaymentSetting } = useCenterPaymentSettingStore();
  const [, setUserState] = useRecoilState(userState);

  const handleMutateSuccess = (data: any) => {
    if (data.accessToken !== '' && data.accessToken !== undefined) {
      setCookie(data.accessToken);

      if (data?.payload) {
        const { payload } = data;

        setUserState(payload);
        setCenterPaymentSetting({
          salaryOption: payload.salaryOption,
          salary: payload.salary,
          totalSalesOption: payload.totalSalesOption,
          totalSales: payload.totalSales,
          individualSalesOption: payload.individualSalesOption,
          individualSales: payload.individualSales,
          settlementRateOption: payload.settlementRateOption,
          settlementRate: payload.settlementRate,
          vatOption: payload.vatOption,
          insuranceOption: payload.insuranceOption,
        });
      }

      router.push('/');
    }
  };

  const { mutate } = useLoginMutation(handleMutateSuccess);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    mutate({ ...login });
  };

  return (
    <section className="relative w-1/2">
      <div className="absolute top-1/2 left-1/2 w-4/5 min-h-[360px] text-center -translate-x-1/2 -translate-y-1/2">
        <div className="text-4xl font-semibold text-[--business-color] mb-9">
          Ten Sports
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              id={'id'}
              label={'아이디'}
              variant={'labelBox'}
              className="w-3/5 h-12"
            >
              <Input.TextField
                name={'id'}
                placeholder={'아이디를 입력해주세요.'}
                value={login.id}
                ref={null}
                onChange={onChangeLogin}
              />
            </Input>
            <Input
              label={'비밀번호'}
              variant={'labelBox'}
              className="w-3/5 h-12"
            >
              <Input.TextField
                type={'password'}
                name={'password'}
                placeholder={'비밀번호를 입력해주세요.'}
                value={login.password}
                ref={null}
                onChange={onChangeLogin}
              />
            </Input>
          </div>
          <div>
            <Button
              type={'submit'}
              label={'로그인'}
              variant={'radiusBtn'}
              className="w-3/5 mb-4 font-medium text-[--white100] bg-[--blue300] border-0"
            />
            <Button
              label={'문의하기'}
              variant={'radiusBtn'}
              className="w-3/5 font-medium text-[--white100] bg-[--navy100] border-0"
            />
          </div>
        </form>
        <Divider width={'60%'} content={'또는'} />
        <span className="text-[--navy100] font-semibold mr-2 cursor-pointer">
          이용약관
        </span>
        <span className="text-[--navy100] font-semibold ml-2 cursor-pointer">
          개인정보 처리방침
        </span>
      </div>
    </section>
  );
};

export default Login;
