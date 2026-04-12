/**
 * Shared PandaCSS recipes for the steam-modern era.
 * Import these instead of duplicating css() calls across pages.
 */
import { css, cva, sva } from 'styled-system/css';
import { grid } from 'styled-system/patterns';

export const btn = cva({
	base: {
		display: 'inline-flex',
		alignItems: 'center',
		gap: '6px',
		padding: '6px 14px',
		fontSize: 'sm',
		fontWeight: '600',
		borderRadius: 'DEFAULT',
		cursor: 'pointer',
		border: 'none',
		transition: 'token(transitions.DEFAULT)',
		textTransform: 'uppercase',
		letterSpacing: '0.05em',
		fontFamily: 'ui'
	},
	variants: {
		visual: {
			primary: {
				background:
					'linear-gradient(180deg, token(colors.surface.btnPrimary) 0%, token(colors.surface.btnPrimaryMid) 50%, token(colors.surface.btnPrimaryEnd) 100%)',
				color: '#fff',
				border: '1px solid token(colors.border.btnPrimary)',
				textShadow: '0 1px 2px rgba(0, 0, 0, 0.4)',
				_hover: {
					background:
						'linear-gradient(180deg, token(colors.surface.btnPrimaryHover) 0%, token(colors.surface.btnPrimaryHoverMid) 50%, token(colors.surface.btnPrimaryHoverEnd) 100%)'
				}
			},
			secondary: {
				background:
					'linear-gradient(180deg, token(colors.surface.btnSecondary) 0%, token(colors.surface.btnSecondaryEnd) 100%)',
				color: 'text.primary',
				border: '1px solid token(colors.border)',
				textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)',
				_hover: {
					background:
						'linear-gradient(180deg, token(colors.surface.btnSecondaryHover) 0%, token(colors.surface.btnSecondaryHoverEnd) 100%)'
				}
			}
		}
	},
	defaultVariants: { visual: 'secondary' }
});

export const badge = cva({
	base: {
		display: 'inline-block',
		padding: '2px 7px',
		fontSize: '10px',
		fontWeight: '700',
		borderRadius: 'DEFAULT',
		textTransform: 'uppercase',
		letterSpacing: '0.04em',
		whiteSpace: 'nowrap'
	},
	variants: {
		color: {
			green: {
				background: 'rgba(79, 168, 50, 0.2)',
				color: 'accent.greenText',
				border: '1px solid rgba(79, 168, 50, 0.3)'
			},
			red: {
				background: 'rgba(201, 64, 64, 0.2)',
				color: 'accent.redText',
				border: '1px solid rgba(201, 64, 64, 0.3)'
			},
			yellow: {
				background: 'rgba(213, 165, 27, 0.2)',
				color: 'accent.goldText',
				border: '1px solid rgba(213, 165, 27, 0.3)'
			},
			blue: {
				background: 'rgba(102, 192, 244, 0.15)',
				color: 'accent',
				border: '1px solid rgba(102, 192, 244, 0.3)'
			},
			gray: {
				background: 'rgba(85, 107, 125, 0.2)',
				color: 'text.muted',
				border: '1px solid rgba(85, 107, 125, 0.3)'
			}
		}
	}
});

export const panel = sva({
	slots: ['root', 'header', 'body'],
	base: {
		root: {
			background: 'surface.panel',
			border: '1px solid token(colors.border)',
			borderRadius: 'DEFAULT'
		},
		header: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '10px 14px',
			background: 'rgba(0, 0, 0, 0.15)',
			borderBottom: '1px solid token(colors.border)',
			fontSize: 'sm',
			fontWeight: '700',
			textTransform: 'uppercase',
			letterSpacing: '0.08em',
			color: 'text.secondary'
		},
		body: {
			padding: '14px'
		}
	}
});

export const dataTable = css({
	width: '100%',
	borderCollapse: 'collapse',
	fontSize: '12.5px',
	'& th': {
		textAlign: 'left',
		padding: '8px 12px',
		fontSize: '10px',
		fontWeight: '700',
		letterSpacing: '0.1em',
		textTransform: 'uppercase',
		color: 'text.muted',
		borderBottom: '1px solid token(colors.border)',
		background: 'rgba(0, 0, 0, 0.2)',
		whiteSpace: 'nowrap'
	},
	'& td': {
		padding: '7px 12px',
		borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
		color: 'text.primary'
	},
	'& tr:last-child td': {
		borderBottom: 'none'
	},
	'& tbody tr:hover': {
		background: 'surface.rowHover'
	}
});

export const searchBar = sva({
	slots: ['root', 'wrapper', 'icon', 'input'],
	base: {
		root: {
			display: 'flex',
			alignItems: 'center',
			gap: '8px',
			padding: '12px 16px',
			background: 'rgba(0, 0, 0, 0.15)',
			borderBottom: '1px solid token(colors.border)',
			flexWrap: 'wrap'
		},
		wrapper: {
			position: 'relative',
			display: 'flex',
			alignItems: 'center'
		},
		icon: {
			position: 'absolute',
			left: '9px',
			color: 'text.muted',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center'
		},
		input: {
			flex: '1',
			minWidth: '200px',
			background: 'surface.input',
			border: '1px solid token(colors.border)',
			color: 'text.primary',
			padding: '5px 10px 5px 30px',
			fontSize: 'sm',
			borderRadius: 'DEFAULT',
			fontFamily: 'ui',
			outline: 'none',
			_focus: {
				borderColor: 'token(colors.accent.dim)'
			}
		}
	}
});

export const actionLink = cva({
	base: {
		color: 'accent',
		fontSize: '11px',
		cursor: 'pointer',
		marginRight: '8px',
		_hover: {
			textDecoration: 'underline'
		}
	},
	variants: {
		color: {
			red: { color: 'accent.redText' },
			green: { color: 'accent.green' }
		}
	}
});

export const userAvatar = cva({
	base: {
		width: '24px',
		height: '24px',
		borderRadius: 'DEFAULT',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '9px',
		fontWeight: '700',
		color: '#fff',
		verticalAlign: 'middle',
		marginRight: '6px'
	},
	variants: {
		visual: {
			user: {
				background:
					'linear-gradient(135deg, token(colors.surface.avatarStart), token(colors.surface.avatarEnd))'
			},
			app: {
				background:
					'linear-gradient(135deg, token(colors.surface.appAvatarStart), token(colors.surface.appAvatarEnd))',
				border: '1px solid token(colors.border)',
				fontSize: '12px',
				fontWeight: '400'
			}
		}
	},
	defaultVariants: { visual: 'user' }
});

export const filterSelect = css({
	background: 'surface.input',
	border: '1px solid token(colors.border)',
	color: 'text.secondary',
	padding: '5px 8px',
	fontSize: 'sm',
	borderRadius: 'DEFAULT',
	fontFamily: 'ui',
	cursor: 'pointer',
	outline: 'none'
});

export const filterLabel = css({
	color: 'text.muted',
	fontSize: '11px',
	textTransform: 'uppercase',
	letterSpacing: '0.08em'
});

export const progressBar = sva({
	slots: ['track', 'fill'],
	base: {
		track: {
			height: '6px',
			background: 'rgba(0, 0, 0, 0.3)',
			borderRadius: '1px',
			overflow: 'hidden'
		},
		fill: {
			height: '100%',
			background: 'linear-gradient(90deg, token(colors.accent.dim), token(colors.accent))',
			borderRadius: '1px',
			transition: 'width 1s ease'
		}
	},
	variants: {
		color: {
			green: {
				fill: {
					background:
						'linear-gradient(90deg, token(colors.accent.greenDark), token(colors.accent.green))'
				}
			},
			red: {
				fill: {
					background:
						'linear-gradient(90deg, token(colors.accent.redDark), token(colors.accent.red))'
				}
			},
			gold: {
				fill: {
					background:
						'linear-gradient(90deg, token(colors.accent.goldDark), token(colors.accent.gold))'
				}
			}
		}
	}
});

export const twoCol = css({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	gap: '16px',
	margin: '16px 20px'
});

export const pageHeader = sva({
	slots: ['root', 'title', 'subtitle', 'actions'],
	base: {
		root: {
			background:
				'linear-gradient(180deg, token(colors.surface.card) 0%, token(colors.surface.headerGradientEnd) 100%)',
			borderBottom: '1px solid token(colors.divider)',
			padding: '16px 24px 14px',
			display: 'flex',
			alignItems: 'flex-end',
			justifyContent: 'space-between'
		},
		title: {
			fontSize: '20px',
			fontWeight: '300',
			color: 'text.bright',
			letterSpacing: '0.02em'
		},
		subtitle: {
			fontSize: 'sm',
			color: 'text.muted',
			marginTop: '2px'
		},
		actions: {
			display: 'flex',
			gap: '8px'
		}
	}
});

export const cellText = cva({
	base: {},
	variants: {
		tone: {
			secondary: { color: 'text.secondary' },
			muted: { color: 'text.muted', fontSize: '11px' },
			disabled: { color: 'text.disabled', fontSize: '11px' }
		}
	}
});

export const dataRow = css({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	padding: '7px 0',
	borderBottom: '1px solid token(colors.divider)',
	'&:last-child': { borderBottom: 'none' }
});

export const delta = cva({
	base: {
		marginTop: '4px',
		fontSize: '11px'
	},
	variants: {
		direction: {
			up: { color: 'accent.green' },
			down: { color: 'accent.red' }
		}
	}
});

export const metricCard = sva({
	slots: ['root', 'label', 'value', 'delta'],
	base: {
		root: {
			background: 'surface.panel'
		},
		label: {
			fontSize: '10px',
			textTransform: 'uppercase',
			letterSpacing: '0.1em',
			color: 'text.muted',
			fontWeight: '700',
			marginBottom: '6px'
		},
		value: {
			fontWeight: '300',
			color: 'text.bright',
			lineHeight: '1'
		},
		delta: {
			marginTop: '4px',
			fontSize: '11px'
		}
	},
	variants: {
		size: {
			sm: {
				root: { padding: '14px 16px' },
				value: { fontSize: '22px' }
			},
			lg: {
				root: { padding: '16px 20px', position: 'relative' },
				value: {
					fontSize: '26px',
					letterSpacing: '-0.02em',
					'& span': { fontSize: '14px', fontWeight: '400', color: 'text.secondary' }
				}
			}
		}
	},
	defaultVariants: { size: 'sm' }
});

export const entityName = css({ fontSize: '12.5px', fontWeight: '600' });
export const entityId = css({ color: 'text.muted', fontSize: '10px', paddingLeft: '32px' });

export const metricsGrid = (columns: number) =>
	grid({
		columns,
		gap: '1px',
		background: 'divider',
		borderBottom: '1px solid token(colors.divider)'
	});
