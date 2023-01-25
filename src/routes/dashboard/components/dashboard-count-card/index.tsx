/** @jsxImportSource @emotion/react */
import Icon from 'react-icons-kit';
import { P } from '../../../../library/atoms/typography';
import { colors } from '../../../../library/constants/colors';
import * as classNmaes from './style';

interface Props {
	icon: string;
	count: number;
	title: string;
	danger?: boolean;
}

export function DashcoardCountCard(props: Props) {
	const { icon, count, title, danger = false } = props;
	return (
		<div css={classNmaes.dashboardCountCard(danger)}>
			<Icon icon={icon} size={30} css={classNmaes.iconContainer(danger)} />
			<P
				size="T500"
				fontWeight="bold"
				color={danger ? colors.white : colors.black.B1}
			>
				{count}
			</P>
			<P color={danger ? colors.white : colors.black.B1}>{title}</P>
		</div>
	);
}
