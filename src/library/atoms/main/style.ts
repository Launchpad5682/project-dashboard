import { css } from '@emotion/react';
import { screenMaxWidth } from '../../constants';

export const mainContainer = css`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow-y: auto;
`;

export const mainElementsContainer = css`
	margin: 0 auto;
	width: 100%;
	max-width: ${screenMaxWidth}px;
	height: 100%;
`;
