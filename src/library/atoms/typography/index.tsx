/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';
import { ReactNode } from 'react';
import { colors } from '../../constants/colors';
import * as classNames from './style';

type FontSize = 'T100' | 'T200' | 'T300' | 'T400' | 'T500';
type FontWeight = 'extralight' | 'light' | 'regular' | 'semibold' | 'bold';

interface Props {
	fontWeight?: FontWeight;
	size?: FontSize;
	color?: string;
	noMargin?: boolean;
	style?: SerializedStyles;
	children: ReactNode | string;
}

interface TypographyProps extends Props {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const fontSizeInspector = (size: FontSize): number => {
	switch (size) {
		case 'T500':
			return 6;
		case 'T400':
			return 4;
		case 'T300':
			return 3;
		case 'T200':
			return 2;
		case 'T100':
		default:
			return 1.5;
	}
};

const fontWeightInspector = (fontWeight: FontWeight): number => {
	switch (fontWeight) {
		case 'extralight':
			return 200;
		case 'light':
			return 300;
		case 'regular':
			return 400;
		case 'semibold':
			return 600;
		case 'bold':
			return 700;
		default:
			return 400;
	}
};

function Typography(props: TypographyProps) {
	const {
		tag,
		size = 'T100',
		fontWeight = 'regular',
		color = colors.black.B1,
		noMargin = false,
		style = '',
		children,
	} = props;

	const Tag = tag;
	const fontSize = fontSizeInspector(size);
	const fontWeightInNumber = fontWeightInspector(fontWeight);

	return (
		<Tag
			css={[classNames.typography(fontSize, fontWeightInNumber, color), style]}
		>
			{children}
		</Tag>
	);
}

function P({ children, ...props }: Props) {
	return (
		<Typography tag="p" fontWeight="regular" size="T100" {...props}>
			{children}
		</Typography>
	);
}

function H2({ children, ...props }: Props) {
	return (
		<Typography tag="p" fontWeight="semibold" size="T300" {...props}>
			{children}
		</Typography>
	);
}

export { P, H2 };
