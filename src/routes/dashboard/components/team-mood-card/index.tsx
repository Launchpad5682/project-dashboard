/** @jsxImportSource @emotion/react */
import {
	DataContextInterface,
	useDataContext,
} from '../../../../contexts/data-context';
import { PersonMood } from '../../../../contexts/data-context/types';
import { Avatar, P } from '../../../../library';
import { Slider } from '../../../../library/atoms/slider';
import * as classNames from './style';

interface Props {
	data: PersonMood;
}

export function TeamMoodCard(props: Props) {
	const { data } = props;

	const { id, avatarURL, name, department, value, mood } = data;

	const { dispatch } = useDataContext() as DataContextInterface;

	const onChangeHandler = (e: any) => {
		dispatch({
			type: 'UPDATE_MOOD_VALUE',
			payload: { id, value: e.target.value },
		});
	};

	return (
		<div css={classNames.teamMoodCardContainer}>
			<div css={classNames.avatarNameContainer}>
				<Avatar src={avatarURL} />
				<div>
					<P fontWeight="semibold">{name}</P>
					<P size="T100" fontWeight="extralight">
						{department}
					</P>
				</div>
			</div>
			<Slider step={1} emoji={mood} value={value} onChange={onChangeHandler} />
		</div>
	);
}
