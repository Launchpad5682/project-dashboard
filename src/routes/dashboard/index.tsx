/** @jsxImportSource @emotion/react */
import { LineChart } from '../../library/molecules/charts/line-chart';
import * as classNames from './style';

import { ic_grid_on_outline } from 'react-icons-kit/md/ic_grid_on_outline';
import { ic_done_all_twotone } from 'react-icons-kit/md/ic_done_all_twotone';
import { ic_hearing_outline } from 'react-icons-kit/md/ic_hearing_outline';
import { ic_dangerous } from 'react-icons-kit/md/ic_dangerous';
import { ic_nature_people_outline } from 'react-icons-kit/md/ic_nature_people_outline';

import { DashcoardCountCard } from './components/dashboard-count-card';
import { PieChart } from '../../library/molecules/charts/pie-chart';
import { colors } from '../../library/constants/colors';
import { BudgetStatusContainer } from './components/budget-status-container';
import { TeamMoodContainer } from './components/team-mood-container';
import { ChartContainer } from '../../library';

const dashboardCounts = [
	{
		icon: ic_grid_on_outline,
		count: 5,
		title: 'Total Projects',
	},
	{
		icon: ic_done_all_twotone,
		count: 1,
		title: 'Completed',
	},
	{
		icon: ic_hearing_outline,
		count: 3,
		title: 'Ongoing',
	},
	{
		icon: ic_dangerous,
		count: 1,
		title: 'Delayed',
		danger: true,
	},
	{
		icon: ic_nature_people_outline,
		count: 5,
		title: 'Employees',
	},
];

export function Dashboard() {
	return (
		<div css={classNames.dashboardContainer}>
			{dashboardCounts.map(({ count, icon, title, danger }, _) => (
				<DashcoardCountCard
					count={count}
					icon={icon}
					title={title}
					danger={danger}
					key={title}
				/>
			))}

			<div css={classNames.totalRevenueContainer}>
				<ChartContainer title="Total Revenue" switchModes={['Month', 'Week']}>
					<LineChart
						data={[
							{ x: '19 June', y: 0 },
							{ x: '20 June', y: 1000 },
							{ x: '21 June', y: 3500 },
							{ x: '22 June', y: 3200 },
							{ x: '23 June', y: 4000 },
							{ x: '24 June', y: 5500 },
							{ x: '25 June', y: 6500 },
						]}
					/>
				</ChartContainer>
			</div>
			<div css={classNames.budgetContainer}>
				<ChartContainer
					title="Budget"
					switchModes={['Profitability', 'Status']}
				>
					<PieChart
						data={[
							{
								category: 'Over Budget',
								label: '19%',
								usage: 19,
								color: colors.red.R1,
							},
							{
								category: 'On Budget',
								label: '33%',
								usage: 33,
								color: colors.violet.V1,
							},
							{
								category: 'Under Budget',
								label: '48%',
								usage: 48,
								color: colors.teal.T1,
							},
						]}
					/>
				</ChartContainer>
			</div>
			<TeamMoodContainer style={classNames.teamMoodContainer} />
			<BudgetStatusContainer style={classNames.bottomContainer} />
		</div>
	);
}
