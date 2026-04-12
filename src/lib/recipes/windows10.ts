/**
 * Shared PandaCSS recipes for the windows10 era.
 * Import these instead of duplicating css() calls across pages.
 */
import { css, cva, sva } from 'styled-system/css';

export const btn = cva({
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '26px',
		padding: '0 14px',
		border: '1px solid token(colors.border.input)',
		background: 'surface.ribbon',
		fontFamily: 'ui',
		fontSize: 'sm',
		color: 'text.secondary',
		cursor: 'pointer',
		transition: 'all token(durations.fast) ease',
		_hover: {
			background: 'border.light',
			borderColor: 'border.inputHover'
		}
	},
	variants: {
		visual: {
			primary: {
				background: 'accent',
				color: 'text.bright',
				borderColor: 'accent',
				_hover: {
					background: 'accent.hover',
					borderColor: 'accent.hover'
				}
			}
		}
	}
});

export const input = css({
	width: '100%',
	height: '30px',
	padding: '0 8px',
	fontFamily: 'ui',
	fontSize: 'base',
	border: '1px solid token(colors.border.input)',
	background: 'surface.notifCard',
	color: 'text.primary',
	outline: 'none',
	transition: 'border-color token(durations.fast) ease',
	borderRadius: 'DEFAULT',
	appearance: 'none',
	_focus: {
		borderColor: 'accent',
		boxShadow: '0 0 0 1px token(colors.accent)'
	},
	_hover: {
		'&:not(:focus)': {
			borderColor: 'border.inputHover'
		}
	}
});

export const textarea = css({
	width: '100%',
	height: '72px',
	padding: '6px 8px',
	fontFamily: 'ui',
	fontSize: 'base',
	border: '1px solid token(colors.border.input)',
	background: 'surface.notifCard',
	color: 'text.primary',
	outline: 'none',
	transition: 'border-color token(durations.fast) ease',
	borderRadius: 'DEFAULT',
	appearance: 'none',
	resize: 'vertical',
	lineHeight: '1.5',
	_focus: {
		borderColor: 'accent',
		boxShadow: '0 0 0 1px token(colors.accent)'
	},
	_hover: {
		'&:not(:focus)': {
			borderColor: 'border.inputHover'
		}
	}
});

export const label = css({
	display: 'block',
	fontSize: 'sm',
	color: 'text.muted',
	fontWeight: '600',
	marginBottom: '4px'
});

export const titleBar = sva({
	slots: ['root', 'left', 'text', 'controls', 'btn', 'closeBtn'],
	base: {
		root: {
			height: '32px',
			background: 'accent',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '0 0 0 12px',
			userSelect: 'none',
			flexShrink: '0'
		},
		left: {
			display: 'flex',
			alignItems: 'center',
			gap: '8px'
		},
		text: {
			fontSize: 'sm',
			color: 'text.bright',
			fontWeight: '400'
		},
		controls: {
			display: 'flex',
			height: '32px'
		},
		btn: {
			width: '46px',
			height: '32px',
			border: 'none',
			background: 'none',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			transition: 'background token(durations.fast) ease',
			_hover: {
				background: 'surface.taskbarHover'
			}
		},
		closeBtn: {
			width: '46px',
			height: '32px',
			border: 'none',
			background: 'none',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			transition: 'background token(durations.fast) ease',
			_hover: {
				background: 'accent.red'
			}
		}
	}
});

export const experienceCard = sva({
	slots: ['root', 'header', 'num', 'removeBtn'],
	base: {
		root: {
			border: '1px solid token(colors.border.light)',
			background: 'surface.card',
			padding: '12px 14px',
			marginBottom: '10px'
		},
		header: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginBottom: '10px'
		},
		num: {
			fontSize: 'sm',
			fontWeight: '700',
			color: 'text.disabled',
			letterSpacing: '0.06em',
			textTransform: 'uppercase'
		},
		removeBtn: {
			background: 'none',
			border: '1px solid token(colors.border.light)',
			padding: '2px 10px',
			fontFamily: 'ui',
			fontSize: 'sm',
			color: 'text.muted',
			cursor: 'pointer',
			transition: 'all token(durations.fast) ease',
			_hover: {
				borderColor: 'accent.red',
				color: 'accent.red',
				background: 'accent.redSubtle'
			}
		}
	}
});

export const addEntryBtn = css({
	display: 'flex',
	alignItems: 'center',
	gap: '7px',
	background: 'none',
	border: '1px dashed token(colors.border.dashed)',
	padding: '8px 14px',
	fontFamily: 'ui',
	fontSize: 'sm',
	color: 'text.muted',
	cursor: 'pointer',
	width: '100%',
	transition: 'all token(durations.fast) ease',
	marginTop: '2px',
	_hover: {
		borderColor: 'accent',
		color: 'accent',
		background: 'accent.subtle'
	}
});
