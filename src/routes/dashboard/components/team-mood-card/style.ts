import { css } from '@emotion/react';
import { colors } from '../../../../library/constants/colors';

export const teamMoodCardContainer = css`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-bottom: 1rem;
	border-bottom: 1px ${colors.black.B2} solid;
`;

export const avatarNameContainer = css`
	display: flex;
	gap: 5px;
	align-items: center;
	justify-content: flex-start;
`;
