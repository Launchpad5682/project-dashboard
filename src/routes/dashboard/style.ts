import { css } from '@emotion/react';
import { boxShadow } from '../../library/constants';

export const dashboardContainer = css`
	display: grid;
	height: 800px;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: 140px repeat(2, 1fr);
	gap: 3rem;
	padding: 2rem 1rem;
`;

export const totalRevenueContainer = css`
	${boxShadow}
	grid-column: 1/4;
	grid-row: 2/3;
	display: flex;
	min-height: 0;
	width: 100%;
`;

export const budgetContainer = css`
	${boxShadow}
	grid-column: 4/6;
	grid-row: 2/3;
	display: flex;
	min-height: 0;
	width: 100%;
`;

export const teamMoodContainer = css`
	grid-column: 6/-1;
	grid-row: 1/3;
`;

export const bottomContainer = css`
	grid-column: 1/-1;
	grid-row: 3/-1;
`;
