/** @jsxImportSource @emotion/react */
import { ic_add_task } from 'react-icons-kit/md/ic_add_task';
import { ic_download_outline } from 'react-icons-kit/md/ic_download_outline';
import { ic_date_range } from 'react-icons-kit/md/ic_date_range';
import { ic_filter_list_twotone } from 'react-icons-kit/md/ic_filter_list_twotone';
import { Button, P } from '../../../../library';

import * as classNames from './style';
import { SerializedStyles } from '@emotion/react';
import {
	BudgetStatusCard,
	BudgetStatusCardDataType,
} from '../budget-status-card';

interface Props {
	style?: SerializedStyles;
}

const budgetStatusData: BudgetStatusCardDataType[] = [
	{
		title: 'Insurance App',
		subTitle: 'Verti',
		totalBudget: 70000,
		profitability: -2500,
		actualHours: 1100,
		solidHours: 1000,
	},
	{
		title: 'Neo',
		subTitle: 'Bankia',
		totalBudget: 70000,
		profitability: 4000,
		actualHours: 500,
		solidHours: 1000,
	},
	{
		title: 'VR Website',
		subTitle: 'Barca',
		totalBudget: 70000,
		profitability: 4000,
		actualHours: 1100,
		solidHours: 2000,
	},
	{
		title: 'VR Website',
		subTitle: 'Barca',
		totalBudget: 70000,
		profitability: 4000,
		actualHours: 1100,
		solidHours: 1100,
	},
];

export function BudgetStatusContainer(props: Props) {
	const { style = '' } = props;

	return (
		<div css={[classNames.container, style]}>
			<div css={classNames.titleContainer}>
				<P size="T300">Budget Status</P>
				<Button icon={ic_add_task}>Add New Project</Button>
				<Button icon={ic_download_outline} type="transparent">
					Download Report
				</Button>
				<Button icon={ic_date_range} type="transparent">
					dd/mm/yyyy-dd/mm/yyyy
				</Button>
				<Button icon={ic_filter_list_twotone} type="transparent">
					Filter
				</Button>
			</div>
			<div css={classNames.cardsContainer}>
				{budgetStatusData.map((data, key) => (
					<BudgetStatusCard data={data} currency="€" key={key} />
				))}
			</div>
		</div>
	);
}
