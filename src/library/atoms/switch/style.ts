import { css } from '@emotion/react';
import { borderRadius } from '../../constants';
import { colors } from '../../constants/colors';

export const switchContainer = css`
	display: flex;
	align-items: center;
	gap: 1rem;
	/* justify-content: space-between; */
`;

export const switchButton = css`
	background-color: ${colors.black.B2};
	border-radius: ${borderRadius}px;
	height: 8px;
	width: 3rem;
	border: none;
	position: relative;
`;

export const toggle = (mode: 'on' | 'off') => css`
	left: ${mode === 'on' ? 'auto' : 0};
	right: ${mode === 'off' ? 'auto' : 0};
	border-radius: 50%;
	background-color: ${colors.white};
	box-shadow: 2px 2px 2px ${colors.black.B2};
	height: 2rem;
	width: 2rem;
	position: absolute;
	transform: translateY(-50%);
	cursor: pointer;
`;
