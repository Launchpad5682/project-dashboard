/** @jsxImportSource @emotion/react */
import {
	AnimatedAxis, // any of these can be non-animated equivalents
	AnimatedGrid,
	AnimatedLineSeries,
	XYChart,
} from '@visx/xychart';
import { ParentSize } from '@visx/responsive';
import { colors } from '../../../constants/colors';

const tickLabelOffset = 10;

const accessors = {
	xAccessor: (d: { x: string | number; y: number }) => d.x,
	yAccessor: (d: { x: string | number; y: number }) => d.y,
};

interface Props {
	data: { x: string; y: number }[];
}

export function LineChart(props: Props) {
	const { data } = props;

	return (
		<ParentSize>
			{({ width, height }) => (
				<XYChart
					height={height}
					width={width}
					xScale={{ type: 'band' }}
					yScale={{ type: 'linear' }}
				>
					<g style={{ fontSize: '20rem', padding: 10, margin: 0 }}>
						<AnimatedAxis
							orientation="bottom"
							tickLabelProps={() => ({ dy: tickLabelOffset })}
						/>
						<AnimatedAxis
							orientation="left"
							numTicks={data.length}
							tickLabelProps={() => ({ dx: -10 })}
							hideZero
						/>
					</g>
					<text
						x="18"
						y="35"
						stroke={colors.black.B2}
						css={{
							fontSize: '1.2rem',
						}}
					>
						Cost $
					</text>
					<AnimatedGrid numTicks={data.length} animationTrajectory="outside" />
					<AnimatedLineSeries
						dataKey="Line 1"
						data={data}
						stroke={colors.green.G1}
						strokeWidth={3}
						{...accessors}
					/>
				</XYChart>
			)}
		</ParentSize>
	);
}
