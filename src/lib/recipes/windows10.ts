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

export const desktopWindow = sva({
	slots: [
		'positioner',
		'content',
		'header',
		'title',
		'control',
		'controlBtn',
		'closeBtn',
		'body',
		'resizeTrigger'
	],
	base: {
		positioner: {
			/* position managed by FloatingPanel with strategy="absolute" */
		},
		content: {
			background: 'surface.base',
			border: '1px solid token(colors.border.window)',
			display: 'flex',
			flexDirection: 'column',
			boxShadow: '0 4px 20px token(colors.shadow.window)',
			outline: 'none',
			overflow: 'hidden',
			'&[data-state="open"]': {
				animation: 'win10-window-open 0.15s ease-out'
			},
			'&[data-state="closed"]': {
				animation: 'win10-window-close 0.12s ease-in'
			}
		},
		header: {
			height: 'titleBarHeight',
			background: 'accent',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '0 0 0 12px',
			userSelect: 'none',
			flexShrink: '0',
			cursor: 'grab',
			'&:active': { cursor: 'grabbing' }
		},
		title: {
			display: 'flex',
			alignItems: 'center',
			gap: '8px',
			fontSize: 'sm',
			color: 'text.bright',
			fontWeight: '400',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap'
		},
		control: {
			display: 'flex',
			height: 'titleBarHeight',
			flexShrink: '0'
		},
		controlBtn: {
			width: '46px',
			height: 'titleBarHeight',
			border: 'none',
			background: 'none',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'text.bright',
			transition: 'background token(durations.fast) ease',
			_hover: { background: 'surface.taskbarHover' }
		},
		closeBtn: {
			width: '46px',
			height: 'titleBarHeight',
			border: 'none',
			background: 'none',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'text.bright',
			transition: 'background token(durations.fast) ease',
			_hover: { background: 'accent.red' }
		},
		body: {
			flex: '1',
			overflow: 'auto',
			display: 'flex',
			flexDirection: 'column'
		},
		resizeTrigger: {
			position: 'absolute',
			'&[data-axis="n"], &[data-axis="s"]': {
				height: '6px',
				left: '0',
				right: '0',
				cursor: 'ns-resize'
			},
			'&[data-axis="n"]': { top: '-3px' },
			'&[data-axis="s"]': { bottom: '-3px' },
			'&[data-axis="e"], &[data-axis="w"]': {
				width: '6px',
				top: '0',
				bottom: '0',
				cursor: 'ew-resize'
			},
			'&[data-axis="e"]': { right: '-3px' },
			'&[data-axis="w"]': { left: '-3px' },
			'&[data-axis="ne"], &[data-axis="nw"], &[data-axis="se"], &[data-axis="sw"]': {
				width: '10px',
				height: '10px'
			},
			'&[data-axis="ne"]': { top: '-3px', right: '-3px', cursor: 'nesw-resize' },
			'&[data-axis="nw"]': { top: '-3px', left: '-3px', cursor: 'nwse-resize' },
			'&[data-axis="se"]': { bottom: '-3px', right: '-3px', cursor: 'nwse-resize' },
			'&[data-axis="sw"]': { bottom: '-3px', left: '-3px', cursor: 'nesw-resize' }
		}
	}
});

export const drawerStyles: Record<string, string> = {
	backdrop: css({
		position: 'fixed',
		top: '0',
		left: '0',
		right: '0',
		bottom: 'token(sizes.taskbarHeight)',
		background: 'surface.drawerBackdrop',
		zIndex: '50',
		'&[data-state="open"]': {
			animation: 'win10-fade-in 0.25s ease'
		},
		'&[data-state="closed"]': {
			animation: 'win10-fade-out 0.2s ease'
		}
	}),
	positioner: css({
		position: 'fixed',
		top: '0',
		left: '0',
		right: '0',
		bottom: 'token(sizes.taskbarHeight)',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'stretch',
		zIndex: '50'
	}),
	content: css({
		width: '344px',
		maxHeight: 'none',
		background: 'surface.panel',
		borderLeft: '1px solid token(colors.border.medium)',
		display: 'flex',
		flexDirection: 'column',
		fontFamily: 'ui',
		color: 'text.primary',
		outline: 'none',
		'&[data-state="open"]': {
			animation: 'win10-drawer-slide-in 0.25s cubic-bezier(0.32, 0.72, 0, 1)'
		},
		'&[data-state="closed"]': {
			animation: 'win10-drawer-slide-out 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
		}
	})
};

export const taskbarStyles = {
	root: css({
		background: 'surface.taskbar',
		height: 'taskbarHeight',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '0 10px 0 4px',
		flexShrink: '0',
		backdropFilter: 'blur(20px)',
		zIndex: '100'
	}),
	left: css({
		display: 'flex',
		alignItems: 'center',
		gap: '0'
	}),
	right: css({
		display: 'flex',
		alignItems: 'center',
		height: 'taskbarHeight'
	}),
	startBtn: css({
		width: '48px',
		height: 'taskbarHeight',
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'text.taskbarBright',
		transition: 'background token(durations.fast) ease',
		_hover: { background: 'surface.taskbarHover' }
	}),
	searchBox: css({
		height: 'taskbarHeight',
		padding: '0 10px',
		display: 'flex',
		alignItems: 'center',
		gap: '6px',
		color: 'text.taskbarMuted',
		fontSize: 'md',
		border: '1px solid token(colors.surface.taskbarHover)',
		cursor: 'text',
		minWidth: '180px'
	}),
	appIcon: css({
		width: '44px',
		height: 'taskbarHeight',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		background: 'none',
		border: 'none',
		color: 'text.taskbarSubtle',
		transition: 'background token(durations.fast) ease, box-shadow token(durations.fast) ease',
		_hover: { background: 'surface.taskbarIconHover' }
	}),
	appIconActive: css({
		color: 'text.bright',
		boxShadow: '0 -2px 0 token(colors.accent) inset'
	}),
	sysTray: css({
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		gap: '8px',
		height: '100%',
		color: 'text.taskbar',
		cursor: 'default'
	}),
	clock: css({
		textAlign: 'right',
		lineHeight: '1.3',
		padding: '0 6px'
	}),
	clockTime: css({
		fontSize: 'md',
		color: 'text.taskbarBright'
	}),
	clockDate: css({
		fontSize: 'sm',
		color: 'text.taskbarDim'
	}),
	notifBtn: css({
		width: '44px',
		height: 'taskbarHeight',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
		background: 'none',
		border: 'none',
		color: 'text.bright',
		position: 'relative',
		transition: 'background token(durations.fast) ease',
		_hover: { background: 'surface.taskbarIconHover' }
	}),
	notifBtnActive: css({
		background: 'surface.taskbarActiveNotif'
	}),
	notifBadge: css({
		position: 'absolute',
		top: '6px',
		right: '6px',
		width: '14px',
		height: '14px',
		background: 'accent',
		borderRadius: 'full',
		fontSize: '9px',
		color: 'text.bright',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: '600'
	})
} satisfies Record<string, string>;
