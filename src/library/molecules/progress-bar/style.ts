import { css } from '@emotion/react';
import { colors } from '../../constants/colors';

export const progressContainer = (state: 'red' | 'yellow' | 'green') => css`
	width: 100%;
	height: 1.6rem;
	border-radius: 2rem;
	background-color: ${state === 'red'
		? colors.red.R2
		: state === 'green'
		? colors.green.G2
		: colors.yellow.Y2};
`;

export const progressUpdate = (
	progress: number,
	state: 'red' | 'green' | 'yellow',
) => css`
	height: 100%;
	width: ${progress > 100 ? 100 : progress}%;
	background-color: ${state === 'red'
		? colors.red.R1
		: state === 'green'
		? colors.green.G1
		: colors.yellow.Y1};
	border-radius: ${progress >= 100 ? '2rem' : '2rem 0 0 2rem'};
`;
