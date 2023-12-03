import { Dispatch, FormEvent, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

import useInput from '@hooks/useInput';
import { Button, Input } from '@components/index';
import { generateCourt } from '@queries/index';
import { EditWhiteIcon } from '@icons/index';

const GenerateModal = ({
	setShowModal,
}: {
	setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
	const router = useRouter();
	const [formData, onChangeFormData, setFormData] = useInput({
		name: {
			value: '',
			isRequired: false,
		},
		floor: {
			value: '',
			isRequired: false,
		},
		description: {
			value: '',
		},
	});

	const onSubmitHandler = async (e: FormEvent) => {
		e.preventDefault();

		let isCheck = true;
		const formDataKeys = Object.keys(formData);
		for (let key of formDataKeys) {
			let prevData = { ...formData };
			const item = prevData[key];

			if (item.value === '' && item.isRequired !== undefined) {
				prevData[key].isRequired = true;
				isCheck = false;
			}
			setFormData(prevData);
		}

		if (isCheck) {
			const { data } = await generateCourt(formData);
			if (data.affectedRows > 0) {
				alert('생성이 완료되었습니다.');
				console.log(setShowModal);
				setShowModal(false);
				router.refresh();
			}
		} else return false;
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<InputWrapper label={'코트 이름'}>
				<TextField
					name={'name'}
					placeholder={'코트 이름을 입력해주세요.'}
					onChange={onChangeFormData}
					requiredStatus={formData.name.isRequired}
					requiredText={'코트 이름이 입력되지 않았어요.'}
				/>
			</InputWrapper>
			<InputWrapper label={'위치(층수)'}>
				<TextField
					name={'floor'}
					placeholder={'위치(층수)를 입력해주세요. ex)3 '}
					onChange={onChangeFormData}
					requiredStatus={formData.floor.isRequired}
					requiredText={'위치(층수)가 입력되지 않았어요.'}
				/>
			</InputWrapper>
			<InputWrapper label={'코트 설명(선택)'}>
				<TextField
					name={'description'}
					placeholder={'코트 설명을 입력해주세요.'}
					onChange={onChangeFormData}
				/>
			</InputWrapper>
			<Button
				type={'submit'}
				variant={'iconBtn'}
				label={'코트 생성하기'}
				src={EditWhiteIcon}
				css={{
					position: 'relative',
					width: '100%',
					justifyContent: 'center',
					border: 0,
					backgroundColor: 'var(--business-sub-color)',
					color: 'var(--white100)',
					padding: '12px 16px',
					margin: '96px 0 0 0',
				}}
			/>
		</form>
	);
};

const InputWrapper = styled((props: any) => <Input {...props} />)({
	margin: '0 0 28px 0',

	label: {
		display: 'block',
	},
});
const TextField = styled((props: any) => <Input.TextField {...props} />)({
	width: '60%',
	padding: '10px 0 10px 10px',
	margin: '12px 0 0 0',
});

export default GenerateModal;
