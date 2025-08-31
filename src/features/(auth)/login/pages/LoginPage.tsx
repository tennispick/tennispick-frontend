// import Login from '../components/Login';

import TenButton from "@/shared/components/TenButton";
import { TenTextField } from "@/shared/components/TenTextField";

const LoginPage = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-[540px] mx-auto pt-[200px]">
        <div className="text-[24px] font-bold">Ten Sports</div>
        <form className="mt-[34px]">
          <div className="flex flex-col gap-y-[10px]">
            <TenTextField placeholder="아이디를 입력해주세요." className="max-w-[412px] h-12" />
            <TenTextField placeholder="비밀번호를 입력해주세요." className="max-w-[412px] h-12" />
          </div>
          <div className="flex flex-col gap-y-[10px] mt-[22px]">
            <TenButton variant="primary" className="max-w-[412px] h-12">로그인</TenButton>
            <TenButton className="max-w-[412px] h-12">문의하기</TenButton>
          </div>
        </form>
      </div>
      {/* <Login /> */}
    </div>
  );
};

export default LoginPage;
