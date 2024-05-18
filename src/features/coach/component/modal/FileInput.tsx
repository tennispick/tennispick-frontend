import Image from 'next/image';
import uploadIcon from '@icons/drive_folder_upload.svg';
import { ChangeEventHandler, useState } from 'react';

const PREVIEW_IMAGE_WIDTH_SIZE = 117;
const PREVIEW_IMAGE_HEIGHT_SIZE = 156;

type Props = {
  onChangeFileHandler: (file: File) => void;
};

const FileInput = ({ onChangeFileHandler }: Props) => {
  const [preview, setPreview] = useState<string | null>(null);

  const onChangeFileInputHandler: ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    onChangeFileHandler(file);
  };

  return (
    <div>
      <div>프로필 이미지 업로드(선택)</div>
      <div
        css={{
          display: 'flex',
          alignItems: 'end',
          height: preview ? `${PREVIEW_IMAGE_HEIGHT_SIZE}px` : 'auto',
          margin: '12px 0',
        }}
      >
        {preview && (
          <Image
            src={preview}
            alt="preview image"
            width={PREVIEW_IMAGE_WIDTH_SIZE}
            height={PREVIEW_IMAGE_HEIGHT_SIZE}
            css={{ margin: '0 16px 0 0' }}
          />
        )}
        <input
          id="image"
          type="file"
          accept="image/jpeg,image/jpg"
          onChange={onChangeFileInputHandler}
          css={{
            position: 'absolute',
            visibility: 'hidden',
            width: 0,
            height: 0,
          }}
        />
        <label
          htmlFor="image"
          css={{
            display: 'flex',
            alignItems: 'center',
            width: 'calc(100% - 160px)',
            height: '44px',
            padding: '10px 0 10px 10px',
            borderRadius: 8,
            border: '1px solid var(--grey300)',
            cursor: 'pointer',
          }}
        >
          <Image src={uploadIcon} alt="upload icon" width={24} height={24} />
          <div css={{ margin: '0 0 0 8px' }}>이미지를 첨부해주세요.</div>
        </label>
      </div>
    </div>
  );
};

export default FileInput;
