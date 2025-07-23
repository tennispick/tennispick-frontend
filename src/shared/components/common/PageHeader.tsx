import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Button from '@/shared/components/common/Button';

type Props = {
  title: string;
  link?: string;
};

const PageHeader = ({ title, link = '' }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const detailPathName = pathName?.split('/')[2];

  const handleGoBack = () => router.push(link);

  return (
    <div className="flex h-10 text-lg font-semibold border-b border-gray-200 mb-3 justify-between">
      {title}
      {detailPathName && (
        <Button
          variant="outline"
          size="sm"
          label={'목록으로 가기'}
          onClick={handleGoBack}
        />
      )}
    </div>
  );
};

export default PageHeader;
