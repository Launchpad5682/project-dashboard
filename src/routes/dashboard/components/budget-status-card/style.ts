import { css } from '@emotion/react';
import { borderRadius, boxShadow } from '../../../../library/constants';
import { colors } from '../../../../library/constants/colors';

export const budgetStatusContainer = css`
	${boxShadow}
	background-color: ${colors.white};
	border-radius: ${borderRadius}px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	width: 100%;
`;

export const titleAvatarContainer = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const titleContainer = css``;

export const budgetContainer = css`
	display: flex;
	width: 70%;
	justify-content: space-between;
`;

export const progressBarContainer = css`
	position: relative;
`;

export const indicatorContaeinr = (overBudget: boolean) => css`
	position: absolute;
	right: 0;
	top: -3.2rem;
	color: ${overBudget ? colors.red.R1 : colors.green.G1};
`;

export const hoursContainer = css`
	display: flex;
	justify-content: space-between;
`;
