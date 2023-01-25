/** @jsxImportSource @emotion/react */
import { ParentSize } from '@visx/responsive';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { P } from '../../../atoms/typography';
import { colors } from '../../../constants/colors';
import { Text } from '@visx/text';

interface PieChartDataType {
	category: string;
	label: string;
	usage: number;
	color: string;
}

interface PieChartProps {
	data: PieChartDataType[];
	margin?: { top: number; left: number; right: number; bottom: number };
}
interface ChartProps extends PieChartProps {
	height: number;
	width: number;
}

const defaultMargin = { top: 35, right: 35, left: 35, bottom: 20 };

function Chart(props: ChartProps) {
	const { width, height, margin = defaultMargin, data } = props;

	if (width < 10) return null;
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;
	const radius = Math.min(innerWidth, innerHeight) / 2;
	const centerY = innerHeight / 2;
	const centerX = innerWidth / 2;
	const donutThickness = 30;

	return (
		<svg width={width} height={height}>
			<Group top={centerY + margin.top} left={centerX + margin.left}>
				<Pie
					data={data}
					pieValue={(d) => d.usage}
					outerRadius={radius}
					innerRadius={radius - donutThickness}
					cornerRadius={3}
					padAngle={0.005}
				>
					{(pie) =>
						pie.arcs.map((arc) => {
							const [centroidX, centroidY] = pie.path.centroid(arc);
							return (
								<g key={arc.data.label}>
									<path d={pie.path(arc) as string} fill={arc.data.color} />
									<Text
										x={centroidX}
										y={centroidY}
										dy=".33em"
										textAnchor="middle"
										stroke={colors.white}
										css={{
											fontSize: '1.8rem',
										}}
									>
										{arc.data.label}
									</Text>
								</g>
							);
						})
					}
				</Pie>
				<Text
					textAnchor="middle"
					stroke={colors.black.B1}
					css={{
						fontSize: '6rem',
						fontWeight: 'bold',
					}}
				>
					5
				</Text>
				<Text
					textAnchor="middle"
					y={20}
					stroke={colors.black.B2}
					css={{
						fontSize: '2rem',
					}}
				>
					Total Projects
				</Text>
			</Group>
		</svg>
	);
}

export function PieChart(props: PieChartProps) {
	const { data, ...rest } = props;

	return (
		<div
			css={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				minHeight: 0,
				height: '100%',
				paddingBottom: '10px',
				flexWrap: 'wrap',
			}}
		>
			<div
				css={{
					flex: 1,
					minHeight: 0,
					minWidth: 0,
					width: '100%',
					height: '100%',
				}}
			>
				<ParentSize>
					{({ width, height }) => (
						<Chart height={height} width={width} data={data} {...rest} />
					)}
				</ParentSize>
			</div>
			<div
				css={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				{data.map(({ category, color }) => (
					<span
						key={category}
						css={{ display: 'flex', alignItems: 'center', gap: 5 }}
					>
						<span
							css={{
								backgroundColor: color,
								width: '10px',
								height: '10px',
								borderRadius: '50%',
							}}
						/>
						<P>{category}</P>
					</span>
				))}
			</div>
		</div>
	);
}
