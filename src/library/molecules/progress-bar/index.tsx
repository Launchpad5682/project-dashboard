/** @jsxImportSource @emotion/react */
import { colors } from '../../constants/colors';
import * as classNames from './style';

interface Props {
	progress: number;
}

export function ProgressBar(props: Props) {
	const { progress } = props;

	const colorHelper = (): string => {
		if (progress > 100) return colors.red.R2;
		if (progress < 100) return colors.green.G2;
		return colors.yellow.Y2;
	};

	return (
		<div css={classNames.progressContainer(colorHelper())}>
			<div css={classNames.progressUpdate(progress, colorHelper())} />
		</div>
	);
}
