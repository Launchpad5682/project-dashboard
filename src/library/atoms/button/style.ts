import { css, SerializedStyles } from '@emotion/react';
import { borderRadius } from '../../constants';
import { colors } from '../../constants/colors';

export const buttonContainer = (
	postionIcon: 'right' | 'left',
	type: 'solid' | 'transparent',
): SerializedStyles =>
	css`
		display: flex;
		flex-direction: ${postionIcon === 'right' ? 'row-reverse' : 'row'};
		color: ${type === 'solid' ? colors.white : colors.green.G1};
		background-color: ${type === 'solid' ? colors.green.G1 : 'transparent'};
		border-radius: ${borderRadius}px;
		border: ${type === 'transparent' ? `2px solid ${colors.green.G1}` : 'none'};
		padding: 4px 10px;
		align-items: center;
		gap: 10px;
	`;
