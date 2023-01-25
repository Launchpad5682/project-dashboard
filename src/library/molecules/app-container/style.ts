import { css } from '@emotion/react';
import { colors } from '../../constants/colors';

export const appContainer = css`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	background-color: ${colors.background};
`;
