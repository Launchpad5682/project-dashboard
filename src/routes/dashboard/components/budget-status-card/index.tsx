/** @jsxImportSource @emotion/react */

import Icon from 'react-icons-kit';
import { Avatar, P, ProgressBar } from '../../../../library';
import { colors } from '../../../../library/constants/colors';
import * as classNames from './style';

import { ic_dangerous } from 'react-icons-kit/md/ic_dangerous';
import { ic_done_all_twotone } from 'react-icons-kit/md/ic_done_all_twotone';

export interface BudgetStatusCardDataType {
	title: string;
	subTitle: string;
	totalBudget: number;
	profitability: number;
	actualHours: number;
	solidHours: number;
}

interface Props {
	data: BudgetStatusCardDataType;
	currency: '€';
}

export function BudgetStatusCard(props: Props) {
	const { data, currency } = props;
	const {
		title,
		subTitle,
		totalBudget,
		profitability,
		actualHours,
		solidHours,
	} = data;

	const overBudget =
		solidHours - actualHours < 0 ? Math.abs(actualHours - solidHours) : false;

	const completedInTime = actualHours === solidHours;

	return (
		<div css={classNames.budgetStatusContainer}>
			<div css={classNames.titleAvatarContainer}>
				<div css={classNames.titleContainer}>
					<P size="T200" fontWeight="bold">
						{title}
					</P>
					<P size="T100" fontWeight="light">
						{subTitle}
					</P>
				</div>
				<Avatar />
			</div>
			<div css={classNames.budgetContainer}>
				<P fontWeight="extralight">Total Budget</P>
				<P>
					{totalBudget}
					{currency}
				</P>
			</div>
			<div css={classNames.budgetContainer}>
				<P fontWeight="extralight">Profitability(100%)</P>
				<P
					fontWeight={profitability < 0 ? 'semibold' : 'regular'}
					color={profitability < 0 ? colors.red.R1 : ''}
				>
					{profitability}
					{currency}
				</P>
			</div>
			<div css={classNames.progressBarContainer}>
				{overBudget || completedInTime ? (
					<Icon
						icon={overBudget ? ic_dangerous : ic_done_all_twotone}
						size={24}
						css={classNames.indicatorContaeinr(Boolean(overBudget))}
					/>
				) : null}
				<ProgressBar progress={(actualHours / solidHours) * 100} />
			</div>
			<div css={classNames.hoursContainer}>
				<P fontWeight="extralight">Actual hours: {actualHours}</P>
				<P
					fontWeight={overBudget ? 'semibold' : 'regular'}
					color={overBudget ? colors.red.R1 : ''}
				>
					{overBudget
						? `${overBudget} hours over Budget`
						: `${solidHours} solid hours`}
				</P>
			</div>
		</div>
	);
}
