import { css } from '@emotion/react';
import { borderRadius, boxShadow } from '../../../../library/constants';
import { colors } from '../../../../library/constants/colors';

export const dashboardCountCard = (danger: boolean) => css`
	${boxShadow}
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: ${borderRadius}px;
	background-color: ${colors.white};
	position: relative;
	background-color: ${danger ? colors.red.R2 : colors.white};
	
`;

export const iconContainer = (danger: boolean) => css`
	position: absolute;
	top: 1rem;
	left: 1rem;
	color: ${danger ? colors.red.R1 : colors.teal.T1};
`;
