'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@components/common/Input';
import Divider from '@components/common/Divider';
import Button from '@components/common/Button';
import useInput from '@hooks/useInput';
import { setCookie } from '@lib/cookie';
import { useRecoilState } from 'recoil';
import { userState } from '@lib/recoil/userState';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
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
    <section className={css({ width: '50%' })}>
      <LoginContainer>
        <LoginTitle>Ten Sports</LoginTitle>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              id={'id'}
              label={'아이디'}
              variant={'labelBox'}
              css={{ width: '60%', height: '48px' }}
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
              css={{ width: '60%', height: '48px' }}
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
              css={{
                width: '60%',
                margin: '0 0 16px 0',
                fontWeight: 500,
                color: 'var(--white100)',
                backgroundColor: 'var(--blue300)',
                border: 0,
              }}
            />
            <Button
              label={'문의하기'}
              variant={'radiusBtn'}
              css={{
                width: '60%',
                fontWeight: 500,
                color: 'var(--white100)',
                backgroundColor: 'var(--navy100)',
                border: 0,
              }}
            />
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
      </LoginContainer>
    </section>
  );
};

const LoginContainer = styled('div', {
  base: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    width: '80%',
    minHeight: '360px',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
  },
});
const LoginTitle = styled('div', {
  base: {
    fontSize: '40px',
    fontWeight: 600,
    color: 'var(--business-color)',
    margin: '0 0 36px 0',
  },
});

export default Login;
