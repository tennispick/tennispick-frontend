import {
	Children,
	ForwardedRef,
	cloneElement,
	forwardRef,
	InputHTMLAttributes,
	ReactElement,
} from 'react';
import { ObjectProps } from '@interfaces/common';

interface InputProps {
	id?: string;
	variant?: 'default' | 'labelBox' | 'file';
	label?: string;
	src?: string;
	children: ReactElement | never[];
}

const Input = ({
	id,
	variant = 'default',
	label,
	children,
	...props
}: InputProps): ReactElement => {
	// TODO Text Length

	const child = Children.only(children);

	return (
		<div
			css={{
				position: 'relative',
				...CONTAINER_VARIANT_STYLE[variant],
			}}
			{...props}
		>
			{label && (
				<label
					htmlFor={id}
					css={{
						...LABEL_VARIANT_STYLE[variant],
						background: props.src ? `url("${props.src}") no-repeat center` : '',
						backgroundSize: props.src ? 'contain' : '',
					}}
				>
					{label}
				</label>
			)}
			{cloneElement(child, {
				id,
				...child.props,
				css: {
					...INPUT_TEXTFIELD_VARIANT_STYLE[variant],
					...child.props.css,
				},
			})}
		</div>
	);
};

interface InputAttributeProps extends InputHTMLAttributes<HTMLInputElement> {
	requiredStatus?: boolean;
	requiredText?: string;
	isRegexCheck?: boolean;
	regexText?: string;
}

Input.TextField = forwardRef(
	(
		{ ...props }: InputAttributeProps,
		ref: ForwardedRef<HTMLInputElement>,
	): ReactElement<InputHTMLAttributes<HTMLInputElement>> => {
		const {
			requiredStatus,
			requiredText,
			isRegexCheck,
			regexText,
			...otherProps
		} = props;

		return (
			<>
				<input
					type={props.type ? props.type : 'text'}
					ref={ref}
					{...otherProps}
					// css={otherProps.css}
				/>
				{requiredStatus && (
					<div
						css={{
							margin: '8px 0 0 4px',
							color: 'var(--red200)',
							fontWeight: 500,
						}}
					>
						{requiredText}
					</div>
				)}
				{isRegexCheck && (
					<div
						css={{
							margin: '8px 0 0 4px',
							color: 'var(--red200)',
							fontWeight: 500,
						}}
					>
						{regexText}
					</div>
				)}
			</>
		);
	},
);

Input.TextField.displayName = 'Input.TextField';

const CONTAINER_VARIANT_STYLE: ObjectProps<object> = {
	default: {},
	labelBox: {
		margin: '0 auto 24px auto',
		border: '1px solid var(--grey100)',
		borderRadius: '4px',
		padding: '10px 16px 6px 16px',
	},
	file: {
		width: '100%',
		height: '100%',
	},
};

const LABEL_VARIANT_STYLE: ObjectProps<object> = {
	default: {},
	labelBox: {
		display: 'block',
		position: 'absolute',
		top: '-10px',
		left: '14px',
		padding: '0 12px',
		fontWeight: '500',
		color: 'var(--business-color)',
		backgroundColor: 'var(--white100)',
		zIndex: '2',
	},
	file: {
		position: 'relative',
		display: 'block',
		width: '100%',
		height: '100%',
	},
};

const INPUT_TEXTFIELD_VARIANT_STYLE: ObjectProps<object> = {
	default: {
		position: 'relative',
		width: '100%',
		height: '100%',
		padding: '2px 0 2px 10px',
		fontSize: '0.95rem',
		border: '1px solid var(--grey300)',
		borderRadius: '8px',
		outline: 0,
		zIndex: '1',
	},
	labelBox: {
		position: 'relative',
		width: '100%',
		height: '100%',
		padding: '0 0 0 10px',
		fontSize: '0.9rem',
		border: 0,
		outline: 0,
		zIndex: '1',
	},
	file: {
		display: 'none',
	},
};

export default Input;
