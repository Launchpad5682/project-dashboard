/** @jsxImportSource @emotion/react */
import * as classNames from './style';

interface Props {
	src?: string;
	altText?: string;
}

export function Avatar(props: Props) {
	const {
		src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		altText,
	} = props;

	return (
		<span css={classNames.avatarContainer}>
			{src ? (
				<img src={src} alt={altText} css={classNames.avatarImage} />
			) : null}
		</span>
	);
}
