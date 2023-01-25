/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { MoodEmoji } from '../../../contexts/data-context/types';
import * as classNames from './style';

interface Props {
	step: number;
	emoji: MoodEmoji;
	min?: number;
	max?: number;
	value: number;
	onChange: (e: any) => void;
}

export function Slider(props: Props) {
	const { step, emoji, value, min = 0, max = 10, onChange = () => {} } = props;
	const [left, setLeft] = useState<number>(0);

	useEffect(() => {
		const updatedLeft = Number(((value - min) * 100) / (max - min));
		setLeft(updatedLeft);
	}, [max, min, value]);

	return (
		<div css={classNames.sliderContainer}>
			<input
				type="range"
				step={step}
				value={value}
				min={min}
				max={max}
				onChange={onChange}
				css={classNames.slider}
			/>
			<div css={classNames.thumb(left)}>{emoji}</div>
		</div>
	);
}
