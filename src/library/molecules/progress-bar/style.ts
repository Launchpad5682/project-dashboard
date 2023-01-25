import { css } from '@emotion/react';
import { colors } from '../../constants/colors';

export const progressContainer = (color: string) => css`
	width: 100%;
	height: 1.6rem;
	border-radius: 2rem;
	background-color: ${color};
`;

export const progressUpdate = (progress: number, color: string) => css`
	height: 100%;
	width: ${progress > 100 ? 100 : progress}%;
	background-color: ${color};
	border-radius: ${progress >= 100 ? '2rem' : '2rem 0 0 2rem'};
`;
