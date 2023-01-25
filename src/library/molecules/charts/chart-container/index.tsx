/** @jsxImportSource @emotion/react */
import { ReactElement, ReactNode, useState } from 'react';
import { Switch } from '../../../atoms/switch';
import { P } from '../../../atoms/typography';
import * as classNames from './style';

interface Props {
	title: string;
	children: ReactNode | ReactElement;
	switchModes: string[];
}

export function ChartContainer(props: Props) {
	const { title, children, switchModes } = props;

	// must be moved to dispatch, will update the chart data accordingly
	const [mode, setMode] = useState<'on' | 'off'>('on');

    // replace with dispatch
	const clickHandler = () => setMode((prev) => (prev === 'on' ? 'off' : 'on'));

	return (
		<div css={classNames.chartContainer}>
			<div css={classNames.titleContainer}>
				<P fontWeight="semibold">{title}</P>
				<Switch
					clickHandler={clickHandler}
					mode={mode}
					off={switchModes[0]}
					on={switchModes[1]}
				/>
			</div>
			{children}
		</div>
	);
}
