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
        className={`flex items-end my-3 ${
          preview ? `h-[${PREVIEW_IMAGE_HEIGHT_SIZE}px]` : 'h-auto'
        }`}
      >
        {preview && (
          <Image
            src={preview}
            alt="preview image"
            width={PREVIEW_IMAGE_WIDTH_SIZE}
            height={PREVIEW_IMAGE_HEIGHT_SIZE}
            className="mr-4"
          />
        )}
        <input
          id="image"
          type="file"
          accept="image/jpeg,image/jpg"
          onChange={onChangeFileInputHandler}
          className="absolute invisible w-0 h-0"
        />
        <label
          htmlFor="image"
          className="flex items-center w-[calc(100%-160px)] h-11 py-[10px] pl-[10px] pr-0 rounded-lg border border-gray-300 cursor-pointer"
        >
          <Image src={uploadIcon} alt="upload icon" width={24} height={24} />
          <div className="ml-2">이미지를 선택해주세요</div>
        </label>
      </div>
    </div>
  );
};

export default FileInput;
