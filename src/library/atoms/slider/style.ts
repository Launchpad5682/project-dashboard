import { css } from '@emotion/react';
import { colors } from '../../constants/colors';

export const sliderContainer = css`
	position: relative;
	width: 100%;
`;

export const slider = css`
	appearance: none;
	background-color: ${colors.black.B2};
	width: 100%;
	height: 4px;
	z-index: 2;
	::-webkit-slider-thumb {
		appearance: none;
		position: relative;
		height: 2rem;
		width: 2rem;
		background-color: transparent;
		cursor: pointer;
		z-index: 4;
		border-radius: 50%;
		border: none;
	}
	::-moz-range-thumb {
		appearance: none;
		position: relative;
		height: 2rem;
		width: 2rem;
		background-color: transparent;
		cursor: pointer;
		z-index: 10;
		border-radius: 50%;
		border: none;
	}
`;

export const thumb = (left: number) => css`
	color: white;
	position: absolute;
	border-radius: 4px;
	left: ${left};
	left: calc(${left}% + (${-2 - left * 0.15}px));
	transform: translateY(-35%);
	font-size: 2rem;
	top: 0;
	z-index: 1;
	cursor: pointer;
	user-select: none;
`;
