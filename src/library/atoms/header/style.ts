import { css, SerializedStyles } from '@emotion/react';
import { screenMaxWidth } from '../../constants';
import { colors } from '../../constants/colors';

export const headerContainer = css`
	background-color: ${colors.primary};
	height: 7rem;
`;

export const headerElementsContainer = css`
	width: 100%;
	height: 100%;
	max-width: ${screenMaxWidth}px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const brandHeading = css`
	text-transform: uppercase;
`;

export const brandHeadingHighlight = css`
	font-size: 3rem;
	color: ${colors.teal.T1};
`;

export const navBar = css`
	display: flex;
	flex-direction: row;
	list-style: none;
	gap: 2rem;
`;

export const linkItem = (activeLink: boolean): SerializedStyles => css`
	text-decoration: ${activeLink ? 'underline' : 'none'};
	text-decoration-color: ${colors.teal.T1};
	text-underline-offset: 5px;
`;

export const profileAndNotificationContainer = css`
	display: flex;
	align-items: center;
	gap: 2rem;
	height: 100%;
`;

export const notificationIcon = css`
	color: ${colors.white};
	position: relative;
	display: inline-flex;
	width: 30px;
	height: 30px;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	padding: 4px;
`;

export const notificationDot = css`
	border-radius: 50%;
	width: 10px;
	height: 10px;
	background-color: ${colors.red.R1};
	position: absolute;
	top: 2px;
	right: 2px;
`;

export const profileImageContainer = css`
	display: inline-flex;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background-color: ${colors.red.R2};
`;

export const profileSection = css`
	display: flex;
	align-items: center;
	gap: 1rem;
	color: ${colors.white};
`;
