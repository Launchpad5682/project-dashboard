/** @jsxImportSource @emotion/react */
import Icon from 'react-icons-kit';
import { colors } from '../../constants/colors';
import { P } from '../typography';
import * as classNames from './style';

interface Props {
	children: string;
	icon?: string;
	positionIcon?: 'left' | 'right';
	type?: 'solid' | 'transparent';
	onClick?: () => void;
}

export function Button(props: Props) {
	const {
		children,
		icon,
		positionIcon = 'left',
		type = 'solid',
		onClick = () => {},
	} = props;

	return (
		<button
			css={classNames.buttonContainer(positionIcon, type)}
			type="button"
			onClick={onClick}
		>
			{icon ? (
				<Icon
					icon={icon}
					color={type === 'solid' ? colors.white : colors.green.G1}
					size={20}
				/>
			) : null}
			<P color={type === 'solid' ? colors.white : colors.green.G1}>
				{children}
			</P>
		</button>
	);
}
