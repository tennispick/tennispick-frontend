'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Input from 'src/이전 파일들/components/common/Input';
import Divider from 'src/이전 파일들/components/common/Divider';
import useInput from 'src/이전 파일들/hooks/useInput';
import { setCookie } from 'src/shared/lib/cookie';
import { useRecoilState } from 'recoil';
import { userState } from 'src/이전 파일들/lib/recoil/userState';
import { css } from 'styled-system/css';
import { useLoginMutation } from '../mutate/login';
import useCenterPaymentSettingStore from 'src/이전 파일들/lib/zustand/center';
import TenButton from 'src/shared/ui/TenButton';
import useUserStore from 'src/shared/lib/store/userStore';

const Login = () => {
  const router = useRouter();
  const [login, onChangeLogin] = useInput({
    id: '',
    password: '',
  });

  const { setCenterPaymentSetting } = useCenterPaymentSettingStore();
  const [, setUserState] = useRecoilState(userState);
  const { setAdminInfo } = useUserStore();

  const handleMutateSuccess = (data: any) => {
    if (data.accessToken !== '' && data.accessToken !== undefined) {
      setCookie(data.accessToken);

      if (data?.payload) {
        const { payload } = data;

        setAdminInfo(payload);
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
    <div className="absolute top-[45%] left-1/2 min-h-[640px] w-[560px] text-center transform -translate-x-1/2 -translate-y-1/2 bg-white px-20 pt-20 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
      <div className="font-bold text-business text-4xl mb-9">테니스 픽</div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            id={'id'}
            label="아이디"
            variant="labelBox"
            className="w-auto h-12"
          >
            <Input.TextField
              name={'id'}
              placeholder={'아이디를 입력해주세요.'}
              value={login.id}
              ref={null}
              onChange={onChangeLogin}
            />
          </Input>
          <Input label="비밀번호" variant="labelBox" className="w-auto h-12">
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
          {/* <Button
            type={'submit'}
            label={'로그인'}
            variant={'radiusBtn'}
            css={{
              width: '60%',
              margin: '0 0 16px 0',
              fontWeight: 500,
              color: 'var(--white100)',
              backgroundColor: 'var(--blue300)',
              border: 0,
            }}
          /> */}
          <TenButton
            type="submit"
            label="로그인"
            className="block w-full mb-3"
          />
          <TenButton label="문의하기" className="block w-full mb-3" />
          {/* <Button
            label={'문의하기'}
            variant={'radiusBtn'}
            css={{
              width: '60%',
              fontWeight: 500,
              color: 'var(--white100)',
              backgroundColor: 'var(--navy100)',
              border: 0,
            }}
          /> */}
        </div>
      </form>
      <Divider width={'60%'} content={'또는'} />
      <span
        className={css({
          color: 'var(--navy100)',
          fontWeight: 600,
          margin: '0 8px 0 0',
          cursor: 'pointer',
        })}
      >
        이용약관
      </span>
      <span
        className={css({
          color: 'var(--navy100)',
          fontWeight: 600,
          margin: '0 0 0 8px',
          cursor: 'pointer',
        })}
      >
        개인정보 처리방침
      </span>
    </div>
  );
};

export default Login;
