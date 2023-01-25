import { css } from '@emotion/react';
import { borderRadius, boxShadow } from '../../../../library/constants';
import { colors } from '../../../../library/constants/colors';

export const container = css`
	${boxShadow}
	border-radius: ${borderRadius}px;
	background-color: ${colors.white};
	display: flex;
	flex-direction: column;
	padding: 1rem;
	justify-content: space-between;
	overflow-y: auto;
`;
