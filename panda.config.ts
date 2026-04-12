import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	preflight: true,
	include: ['./src/**/*.{js,ts,svelte}'],
	exclude: [],
	outdir: 'styled-system',

	staticCss: {
		themes: ['steamLegacy', 'steamModern', 'windows10']
	},

	themes: {
		steamLegacy: {
			tokens: {
				colors: {
					surface: {
						root: { value: '#1a1a1a' },
						base: { value: '#1b2426' },
						panel: { value: '#1e1e1e' },
						card: { value: '#1e2d2f' },
						cardHover: { value: '#243436' },
						elevated: { value: '#252525' },
						input: { value: '#111111' },
						sectionHead: { value: '#1a2729' },
						sidebar: { value: '#1e1e1e' },
						topBar: { value: '#252525' },
						titleBar: { value: '#1a1a1a' },
						footer: { value: '#171717' }
					},
					text: {
						bright: { value: '#ffffff' },
						primary: { value: '#c6d4df' },
						secondary: { value: '#8f98a0' },
						muted: { value: '#738895' },
						dim: { value: '#4a6a7a' },
						rank: { value: '#4a7010' }
					},
					accent: {
						DEFAULT: { value: '#75b022' },
						hover: { value: '#90ba3c' },
						dim: { value: '#4a7010' },
						deep: { value: '#3d5a1f' },
						glow: { value: 'rgba(117, 176, 34, 0.15)' },
						price: { value: '#acf24d' },
						link: { value: '#57cbde' },
						saleBg: { value: '#4a7010' }
					},
					status: {
						online: { value: '#57cbde' },
						ingame: { value: '#90ba3c' },
						away: { value: '#856c20' },
						offline: { value: '#555555' }
					},
					border: {
						DEFAULT: { value: '#0d0d0d' },
						subtle: { value: '#111111' },
						light: { value: '#2a3a3e' },
						accent: { value: '#4a7010' }
					}
				},
				radii: {
					DEFAULT: { value: '2px' },
					sm: { value: '1px' }
				},
				fonts: {
					ui: { value: 'Arial, Helvetica, sans-serif' }
				},
				fontSizes: {
					xs: { value: '10px' },
					sm: { value: '11px' },
					base: { value: '12px' },
					nav: { value: '12px' }
				},
				durations: {
					DEFAULT: { value: '0.1s' }
				},
				transitions: {
					DEFAULT: { value: 'all 0.1s ease' }
				}
			}
		},

		steamModern: {
			tokens: {
				colors: {
					surface: {
						/* --gpSystemDarkestGrey */
						root: { value: '#0e141b' },
						/* footer background — store.css #footer */
						base: { value: '#171a21' },
						/* --gpStoreDarkerGrey — primary page bg, body.v6 */
						panel: { value: '#1b2838' },
						/* --gpStoreDarkGrey */
						elevated: { value: '#2a475e' },
						card: { value: '#213347' },
						/* capsule card bg — .store_capsule radial-gradient center */
						capsule: { value: '#283645' },
						capsuleHover: { value: '#3b4955' },
						row: { value: '#1b2838' },
						rowAlt: { value: '#1e2d3f' },
						rowHover: { value: '#24405a' },
						/* search box — .searchbox */
						input: { value: '#316282' },
						/* blue action btn — .btnv6_blue_blue_innerfade gradient */
						btnPrimary: { value: 'rgba(47, 137, 188, 1)' },
						btnPrimaryEnd: { value: 'rgba(23, 67, 92, 1)' },
						btnPrimaryHover: { value: 'rgba(102, 192, 244, 1)' },
						btnPrimaryHoverEnd: { value: 'rgba(47, 137, 188, 1)' },
						/* green "add to cart" btn — .btnv6_green_white_innerfade */
						btnGreen: { value: 'rgba(121, 153, 5, 1)' },
						btnGreenEnd: { value: 'rgba(83, 105, 4, 1)' },
						btnGreenHover: { value: 'rgba(164, 208, 7, 1)' },
						btnGreenHoverEnd: { value: 'rgba(107, 135, 5, 1)' },
						/* ghost btn border handled via border tokens */
						header: { value: '#1b2838' },
						/* store header bar — div#store_header */
						headerBar: { value: '#3b3938' },
						sidebar: { value: '#15202e' },
						/* --gpSystemDarkGrey — search suggest dropdown */
						dropdown: { value: '#3d4450' },
						dropdownHover: { value: '#212d3d' },
						tooltip: { value: '#c2c2c2' },
						chrome: { value: '#101318' },
						avatarStart: { value: '#2a6591' },
						avatarEnd: { value: '#1b4a6b' },
						appAvatarStart: { value: '#2a475e' },
						appAvatarEnd: { value: '#1b2838' },
						/* tag pill bg — .app_tag */
						tag: { value: '#384959' },
						tagHover: { value: 'rgba(38, 54, 69, 0.6)' },
						/* discount badge bg — .discount_pct */
						discountBadge: { value: '#4c6b22' },
						/* modal/popup overlay */
						overlay: { value: 'rgba(0, 0, 0, 0.3)' },
						/* active nav tab bg — .store_nav .tab:hover */
						navActive: { value: 'rgba(255, 255, 255, 0.08)' }
					},
					text: {
						bright: { value: '#ffffff' },
						/* body.v6 color */
						primary: { value: '#c6d4df' },
						/* --gpStoreLightGrey / .breadcrumbs a */
						secondary: { value: '#8f98a0' },
						/* --gpStoreGrey */
						muted: { value: '#4e697d' },
						disabled: { value: '#3a5068' },
						/* nav tab text — .store_nav .tab > span */
						nav: { value: '#e5e5e5' },
						/* searchbox input text — .searchbox input */
						input: { value: '#eeeeee' },
						/* tag pill text — .app_tag */
						tag: { value: '#b0aeac' },
						tagHover: { value: 'rgba(227, 234, 239, 1)' },
						/* green btn text — .btnv6_green_white_innerfade */
						btnGreen: { value: '#d2e885' },
						/* blue btn text — .btnv6_blue_blue_innerfade */
						btnBlue: { value: '#a4d7f5' },
						/* breadcrumb text */
						breadcrumb: { value: '#56707f' },
						/* discount price — .discount_final_price */
						discount: { value: '#beee11' },
						/* original price strikethrough — .discount_original_price */
						priceOriginal: { value: '#738895' },
						/* search placeholder — .searchbox input.default */
						placeholder: { value: '#305d8a' },
						/* footer links text */
						footer: { value: '#61686d' }
					},
					accent: {
						/* --gpColor-ChalkyBlue — classic 2018 link/accent */
						DEFAULT: { value: '#66c0f4' },
						/* --gpColor-DustyBlue */
						dim: { value: '#417a9b' },
						/* --gpColor-LightBlue */
						bright: { value: '#b3dfff' },
						/* --gpColor-Blue — newer interactive blue */
						blue: { value: '#1a9fff' },
						blueHi: { value: '#00bbff' },
						glow: { value: 'rgba(102, 192, 244, 0.15)' },
						glowSubtle: { value: 'rgba(102, 192, 244, 0.1)' },
						/* --gpColor-Yellow */
						gold: { value: '#ffc82c' },
						/* --gpColor-Green */
						green: { value: '#5ba32b' },
						greenHi: { value: '#59bf40' },
						/* --gpColor-Red */
						red: { value: '#d94126' },
						redHi: { value: '#ee563b' },
						/* --gpColor-Orange */
						orange: { value: '#e35e1c' },
						purple: { value: '#9c72b5' },
						/* lighter text variants for delta indicators / progress fills */
						greenText: { value: '#59bf40' },
						redText: { value: '#ee563b' },
						goldText: { value: '#ffc82c' },
						/* darker variants for gradient endpoints */
						greenDark: { value: '#3c7022' },
						redDark: { value: '#843030' },
						goldDark: { value: '#8a6810' },
						/* status colors */
						online: { value: '#57cbde' },
						ingame: { value: '#90ba3c' },
						golden: { value: '#e4ca63' },
						offline: { value: '#898989' }
					},
					border: {
						/* --gpStoreDarkGrey */
						DEFAULT: { value: '#2a475e' },
						light: { value: '#3c6080' },
						/* ghost btn border — .btnv6_white_transparent span */
						ghost: { value: 'rgba(255, 255, 255, 0.4)' },
						ghostHover: { value: 'rgba(255, 255, 255, 1)' },
						/* search box border */
						input: { value: 'rgba(0, 0, 0, 0.3)' },
						/* footer rule — #footer .rule */
						footer: { value: '#363c44' },
						/* search suggest match — .search_suggest .match */
						suggest: { value: '#13242e' },
						/* fictional client chrome accent — not sourced from Steam web CSS */
						chrome: { value: '#0a0f16' }
					},
					divider: { value: '#1a2d40' },
					shadow: {
						/* --gpShadow-* */
						sm: { value: '0px 2px 2px #0000003d' },
						md: { value: '0px 3px 6px #0000003d' },
						lg: { value: '0px 12px 16px #0000003d' },
						xl: { value: '0px 24px 32px #0000003d' },
						/* tag pill shadow — .app_tag box-shadow */
						tag: { value: '1px 1px 0 0 #000000' }
					}
				},
				radii: {
					/* --gpCorner-Large */
					DEFAULT: { value: '3px' },
					/* --gpCorner-Medium — buttons */
					sm: { value: '2px' },
					/* --gpCorner-Small */
					xs: { value: '1px' }
				},
				fonts: {
					/* Steam uses Motiva Sans, not Source Sans. Body fallback is Arial. */
					ui: {
						value: '"Motiva Sans", Arial, Helvetica, sans-serif'
					}
				},
				fontSizes: {
					xs: { value: '11px' },
					sm: { value: '12px' },
					base: { value: '13px' },
					md: { value: '14px' },
					lg: { value: '15px' },
					/* --gpText-HeadingSmall */
					heading: { value: '18px' },
					/* --gpText-HeadingMedium */
					headingMd: { value: '22px' },
					/* --gpText-HeadingLarge / h2.pageheader */
					headingLg: { value: '26px' }
				},
				sizes: {
					navHeight: { value: '35px' },
					/* div#store_header */
					headerHeight: { value: '66px' },
					sidebarW: { value: '200px' },
					/* .page_content */
					contentMaxW: { value: '940px' }
				},
				spacing: {
					/* --gpSpace-Gutter */
					gutter: { value: '24px' },
					/* --gpSpace-Gap */
					gap: { value: '12px' }
				},
				durations: {
					DEFAULT: { value: '0.15s' },
					fast: { value: '0.1s' }
				},
				transitions: {
					DEFAULT: { value: 'all 0.15s ease' },
					fast: { value: 'all 0.1s ease' },
					color: { value: 'color 0.15s ease, background 0.15s ease' }
				}
			},
			semanticTokens: {
				colors: {
					layerchart: {
						surface100: { value: '#213347' },
						surface200: { value: '#1b2838' },
						surface300: { value: '#2a475e' },
						surfaceContent: { value: '#c6d4df' }
					}
				}
			}
		},

		windows10: {
			tokens: {
				colors: {
					desktop: {
						bg: { value: '#2d7ab8' },
						gradientStart: { value: '#1a6eb0' },
						gradientEnd: { value: '#0f4e8a' }
					},
					surface: {
						base: { value: '#ffffff' },
						panel: { value: 'rgba(242, 242, 242, 0.97)' },
						elevated: { value: '#f5f5f5' },
						hover: { value: '#f5f5f5' },
						input: { value: '#ffffff' },
						ribbon: { value: '#f2f2f2' },
						sidebar: { value: '#f7f7f7' },
						statusBar: { value: '#f2f2f2' },
						card: { value: '#fafafa' },
						chip: { value: '#e3f0fb' },
						notifCard: { value: '#ffffff' },
						btnDefault: { value: '#e1e1e1' },
						btnHoverTint: { value: '#e5f1fb' },
						taskbar: { value: 'rgba(0, 0, 0, 0.78)' },
						taskbarHover: { value: 'rgba(255, 255, 255, 0.12)' },
						taskbarIconHover: { value: 'rgba(255, 255, 255, 0.1)' },
						taskbarActiveNotif: { value: 'rgba(0, 120, 215, 0.3)' },
						desktopIconHover: { value: 'rgba(0, 120, 215, 0.4)' },
						appTile: { value: 'rgba(255, 255, 255, 0.15)' },
						appTileHover: { value: 'rgba(255, 255, 255, 0.25)' },
						launcher: { value: 'rgba(255, 255, 255, 0.12)' },
						qa: { value: 'rgba(0, 0, 0, 0.07)' },
						qaHover: { value: 'rgba(0, 0, 0, 0.12)' },
						qaActive: { value: 'rgba(0, 120, 215, 0.18)' },
						qaActiveHover: { value: 'rgba(0, 120, 215, 0.26)' },
						qaArea: { value: 'rgba(235, 235, 235, 0.8)' },
						drawerBackdrop: { value: 'rgba(0, 0, 0, 0.3)' },
						titleBarInactive: { value: '#f2f2f2' },
						explorerToolbar: { value: '#f5f5f5' },
						explorerAddressBar: { value: '#ffffff' },
						settingsCategory: { value: '#f7f7f7' },
						settingsCategoryHover: { value: '#eaeaea' },
						settingsCategoryActive: { value: '#e0e8f0' }
					},
					text: {
						bright: { value: '#ffffff' },
						primary: { value: '#1a1a1a' },
						secondary: { value: '#444444' },
						muted: { value: '#666666' },
						disabled: { value: '#888888' },
						heading: { value: '#111111' },
						titleBarInactive: { value: '#999999' },
						desktopIcon: { value: '#ffffff' },
						taskbar: { value: 'rgba(255, 255, 255, 0.85)' },
						taskbarBright: { value: 'rgba(255, 255, 255, 0.9)' },
						taskbarSubtle: { value: 'rgba(255, 255, 255, 0.75)' },
						taskbarMuted: { value: 'rgba(255, 255, 255, 0.5)' },
						taskbarDim: { value: 'rgba(255, 255, 255, 0.7)' }
					},
					accent: {
						DEFAULT: { value: '#0078d7' },
						hover: { value: '#106ebe' },
						dim: { value: '#005a9e' },
						glow: { value: 'rgba(0, 120, 215, 0.18)' },
						subtle: { value: 'rgba(0, 120, 215, 0.06)' },
						red: { value: '#e81123' },
						redSubtle: { value: '#fff0f0' },
						green: { value: '#107c10' }
					},
					border: {
						DEFAULT: { value: 'rgba(0, 0, 0, 0.08)' },
						medium: { value: 'rgba(0, 0, 0, 0.12)' },
						light: { value: '#e0e0e0' },
						input: { value: '#ababab' },
						inputHover: { value: '#767676' },
						chip: { value: '#b8d8f5' },
						launcher: { value: 'rgba(255, 255, 255, 0.2)' },
						window: { value: '#aaaaaa' },
						section: { value: '#e8e8e8' },
						dashed: { value: '#ababab' }
					},
					divider: { value: 'rgba(0, 0, 0, 0.07)' },
					shadow: {
						window: { value: 'rgba(0, 0, 0, 0.18)' },
						windowFocused: { value: 'rgba(0, 0, 0, 0.28)' },
						desktopIcon: { value: 'rgba(0, 0, 0, 0.6)' },
						drawer: { value: 'rgba(0, 0, 0, 0.35)' }
					}
				},
				radii: {
					DEFAULT: { value: '0px' }
				},
				fonts: {
					ui: {
						value: '"Segoe UI", system-ui, -apple-system, Arial, sans-serif'
					}
				},
				fontSizes: {
					xs: { value: '10.5px' },
					sm: { value: '11px' },
					base: { value: '12.5px' },
					md: { value: '13px' }
				},
				sizes: {
					taskbarHeight: { value: '48px' }
				},
				durations: {
					DEFAULT: { value: '0.12s' },
					fast: { value: '0.1s' },
					standard: { value: '0.25s' },
					enter: { value: '0.25s' },
					exit: { value: '0.167s' },
					panel: { value: '0.15s' },
					drawer: { value: '0.25s' }
				},
				transitions: {
					DEFAULT: { value: 'all 0.12s ease' },
					fast: { value: 'all 0.1s ease' }
				},
				spacing: {
					titleBarHeight: { value: '32px' }
				}
			}
		}
	},

	globalCss: {
		/* LayerChart surface tokens — injected globally so the Tailwind shim in app.css can reference them */
		':root': {
			'--color-surface-100': '#213347',
			'--color-surface-200': '#1b2838',
			'--color-surface-300': '#2a475e',
			'--color-surface-content': '#c7d5e0'
		},

		/* Windows 10 desktop simulation animations — uses authentic UWP easing curves */
		'@keyframes win10-window-open': {
			from: { opacity: '0', transform: 'scale(0.95)' },
			to: { opacity: '1', transform: 'scale(1)' }
		},
		'@keyframes win10-window-close': {
			from: { opacity: '1', transform: 'scale(1)' },
			to: { opacity: '0', transform: 'scale(0.95)' }
		},
		'@keyframes win10-window-minimize': {
			from: { opacity: '1', transform: 'scale(1) translateY(0)' },
			to: { opacity: '0', transform: 'scale(0.9) translateY(20px)' }
		},
		'@keyframes win10-drawer-slide-in': {
			from: { transform: 'translateX(100%)' },
			to: { transform: 'translateX(0)' }
		},
		'@keyframes win10-drawer-slide-out': {
			from: { transform: 'translateX(0)' },
			to: { transform: 'translateX(100%)' }
		},
		'@keyframes win10-fade-in': {
			from: { opacity: '0' },
			to: { opacity: '1' }
		},
		'@keyframes win10-fade-out': {
			from: { opacity: '1' },
			to: { opacity: '0' }
		}
	}
});
