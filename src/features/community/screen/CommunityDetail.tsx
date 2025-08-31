'use client';

import { Input, PageHeader } from '@/shared/components/index';

type Props = {
  id: string;
};

const CommunityDetailScreen = ({}: Props) => {
  return (
    <>
      <PageHeader title={'공지사항'} link="/community" />
      <div className="h-[calc(100%_-_52px)]">
        <div>
          <div className="flex h-[46px] items-center px-3 py-1 leading-[38px] my-2">
            <div className="w-[10%] px-1 py-0 text-base font-semibold">
              제목
            </div>
            <Input.TextField
              className="h-full"
              placeholder={'공지사항의 제목을 입력해주세요.'}
            />
          </div>
          <div className="flex h-[46px] items-center px-3 py-1 leading-[38px] my-2">
            <div className="w-[10%] px-1 py-0 text-base font-semibold">
              게시글 유형
            </div>
            <Input
              label={'일반'}
              id={'normal'}
              className="h-full bg-[#a5dc86] text-[rgba(0,0,0,0.6)] text-sm leading-none text-center px-4 py-2 -mr-px border border-[rgba(0,0,0,0.2)] shadow-[inset_0_1px_3px_rgba(0,0,0,0.3),0_1px_rgba(255,255,255,0.1)] transition-all duration-100 ease-in-out hover:cursor-pointer"
            >
              <Input.TextField
                type={'radio'}
                name={'noticeType'}
                className="absolute w-px h-px overflow-hidden border-0 clip-rect-0 checked:bg-[#a5dc86] checked:shadow-none"
                defaultChecked
              />
            </Input>
            <Input label={'공지'} id={'notice'} className="h-full">
              <Input.TextField type={'radio'} name={'noticeType'} />
            </Input>
          </div>
          <div className="flex h-[46px] items-center px-3 py-1 leading-[38px] my-2">
            <div className="w-[10%] px-1 py-0 text-base font-semibold">
              내용
            </div>
            <Input.TextField
              className="h-full"
              placeholder={'공지사항의 제목을 입력해주세요.'}
            />
          </div>
          <div className="flex h-[46px] items-center px-3 py-1 leading-[38px] my-2">
            <div className="w-[10%] px-1 py-0 text-base font-semibold">
              첨부파일
            </div>
            <Input.TextField type={'file'} className="h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityDetailScreen;
