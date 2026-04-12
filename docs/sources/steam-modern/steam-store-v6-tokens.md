# Steam Store v6 Design Tokens — 2018 Era

Extracted from live Steam CDN CSS files (stable across ~2016–2022).
These represent the "v6" store design era with navy/cyan palette.

## Sources

- `store.akamai.steamstatic.com/public/css/v6/store.css` — store-specific rules
- `store.akamai.steamstatic.com/public/shared/css/shared_global.css` — CSS custom properties
- `store.akamai.steamstatic.com/public/shared/css/buttons.css` — button system
- `community.akamai.steamstatic.com/public/shared/css/motiva_sans.css` — font-face declarations
- `partner.steamgames.com/doc/store/assets/standard` — official capsule dimensions

---

## Colors

### Store Blue-Grey Scale (`--gpStore*` custom properties)

```
--gpStoreLightestGrey: #CCD8E3
--gpStoreLighterGrey:  #A7BACC
--gpStoreLightGrey:    #7C8EA3
--gpStoreGrey:         #4E697D
--gpStoreDarkGrey:     #2A475E
--gpStoreDarkerGrey:   #1B2838   /* primary page background */
--gpStoreDarkestGrey:  #000F18
```

### System Greyscale (`--gpSystem*`)

```
--gpSystemLightestGrey: #DCDEDF
--gpSystemLighterGrey:  #B8BCBF
--gpSystemLightGrey:    #8B929A
--gpSystemGrey:         #67707B
--gpSystemDarkGrey:     #3D4450
--gpSystemDarkerGrey:   #23262E
--gpSystemDarkestGrey:  #0E141B
```

### Accent Colors (`--gpColor-*`)

```
--gpColor-Blue:       #1A9FFF    /* interactive blue (newer) */
--gpColor-BlueHi:     #00BBFF
--gpColor-ChalkyBlue: #66C0F4   /* classic 2018-era link/accent */
--gpColor-DustyBlue:  #417A9B
--gpColor-LightBlue:  #B3DFFF
--gpColor-Green:      #5BA32B
--gpColor-GreenHi:    #59BF40
--gpColor-Orange:     #E35E1C
--gpColor-Red:        #D94126
--gpColor-RedHi:      #EE563B
--gpColor-Yellow:     #FFC82C
```

### User Status Colors

```
offline: #898989
online:  #57CBDE
in-game: #90BA3C
golden:  #E4CA63
```

### Hardcoded Values (from store.css selectors)

```css
/* Page backgrounds */
body.v6                    background: #1b2838
#footer                    background: #171a21

/* Text */
body.v6                    color: #c6d4df
a                          color: #ffffff
a:hover                    color: #66c0f4

/* Nav tab text */
.store_nav .tab > span     color: #e5e5e5; font-size: 13px
.store_nav .tab:hover      color: #ffffff

/* Nav gradient */
#store_nav_area .store_nav_bg  background: linear-gradient(90deg,
    rgba(62, 103, 150, 0.919) 11.38%,
    rgba(58, 120, 177, 0.8) 25.23%,
    rgb(15, 33, 110) 100%)

/* Search box */
.searchbox                 background-color: #316282; border: 1px solid rgba(0,0,0,0.3)
.searchbox input           color: #eeeeee
.searchbox input.default   color: #305d8a; font-style: italic

/* Search suggest dropdown */
.popup_body.search_v2      background: #3D4450
.match.match_v2:hover      background: #DCDEDF; color: #151515
.search_suggest .match     height: 44px; border-top: 1px solid #13242e
.search_suggest .match:hover   background: #212d3d

/* Prices and discounts */
.discount_pct              color: #BEEE11; background: #4c6b22; font-weight: 500
.discount_final_price      color: #BEEE11; font-size: 15px
.discount_original_price   color: #738895; font-size: 11px; /* strikethrough via pseudo-element */

/* Tag pills */
.app_tag                   color: #b0aeac; background-color: #384959; border-radius: 3px;
                           box-shadow: 1px 1px 0 0 #000000; font-size: 11px
.hover_tag_row .app_tag    background-color: rgba(38, 54, 69, 0.6);
                           color: rgba(227, 234, 239, 1); font-size: 11px

/* Breadcrumbs */
.breadcrumbs               color: #56707f; font-size: 12px
.breadcrumbs a             color: #8f98a0

/* Footer */
#footer .rule              border-top: 1px solid #363c44
#footer .valve_links a     color: #C6D4DF; font-size: 13px
#footer .valve_links       color: #61686D
```

### Gradients

```
--gpGradient-StoreBackground:   linear-gradient(180deg, #2A475E 0%, #1B2838 80%)
--gpGradient-LibraryBackground: radial-gradient(farthest-corner at 40px 40px, #3D4450 0%, #23262E 80%)
```

---

## Typography

### Font Families

```css
/* Body default */
body.v6    font-family: Arial, Helvetica, sans-serif; font-size: 12px

/* Headings and promoted UI */
body.v6 h2   font-family: "Motiva Sans", Sans-serif; font-weight: 300; font-size: 14px
body.v6 h3   font-family: "Motiva Sans", Sans-serif; font-weight: normal; font-size: 22px
body.v6 h2.pageheader  font-family: "Motiva Sans"; font-size: 34px; font-weight: 700

/* System-wide primary stack */
primary:    "Motiva Sans", Arial, Sans-serif
with-emoji: "Motiva Sans", "Twemoji", "Noto Sans", Helvetica, sans-serif
code:       Consolas, monospace
```

### Motiva Sans Weights

| Weight | CSS Value | File |
|---|---|---|
| Thin | 200 | MotivaSans-Thin.ttf |
| Light | 300 | MotivaSans-Light.ttf |
| Regular | 400 | MotivaSans-Regular.ttf |
| Medium | 500 | MotivaSans-Medium.ttf |
| Bold | 700 | MotivaSans-Bold.ttf |
| Black | 900 | MotivaSans-Black.ttf |
| Regular Italic | 400 italic | MotivaSans-RegularItalic.ttf |
| Light Italic | 300 italic | MotivaSans-LightItalic.ttf |
| Bold Italic | 700 italic | MotivaSans-BoldItalic.ttf |

### Type Scale (`--gpText-*`)

```
--gpText-HeadingLarge:  700 26px/1.4
--gpText-HeadingMedium: 700 22px/1.4
--gpText-HeadingSmall:  700 18px/1.4
--gpText-BodyLarge:     400 16px/1.4
--gpText-BodyMedium:    400 14px/1.4
--gpText-BodySmall:     400 12px/1.4
```

Observed font sizes in selectors: 11px, 12px (body), 13px (nav, footer), 14px, 15px (discount), 16px, 22px, 34px.

---

## Layout

### Page Structure

```css
.page_content              max-width: 940px; margin: 0 auto
div#store_header .content  width: 940px; margin: 0 auto
div#store_header           height: 66px; background-color: #3b3938; min-width: 940px
#store_nav_area            position: absolute; top: 24px; height: 49px
.store_nav                 height: 35px; display: flex
.page_content_ctn          background-color: #000; padding: 25px 0

/* Game detail page columns */
div.leftcol                width: 65%; float: left
div.rightcol               width: 308px; margin-left: 14px; float: right
```

### Spacing & Radii

```
--gpSpace-Gutter: 24px  (scales to calc(24px + 2vw) at 1280px+)
--gpSpace-Gap:    12px
--gpCorner-Small:  1px
--gpCorner-Medium: 2px
--gpCorner-Large:  3px
```

### Shadows

```
--gpShadow-Small:  0px 2px 2px #0000003D
--gpShadow-Medium: 0px 3px 6px #0000003D
--gpShadow-Large:  0px 12px 16px #0000003D
--gpShadow-XLarge: 0px 24px 32px #0000003D
```

### Responsive Breakpoints

```css
@media screen and (max-width: 910px)   /* primary */
@media screen and (max-width: 600px)   /* mobile */
```

---

## Component Patterns

### Buttons

All buttons: `border: none; border-radius: 2px; cursor: pointer; display: inline-block`.
Inner `<span>` provides the gradient layer.

**Green "Add to Cart":**
```css
.btnv6_green_white_innerfade {
    color: #D2E885;
    background: linear-gradient(rgba(121, 153, 5, 1), rgba(83, 105, 4, 1));
}
:hover {
    color: #fff;
    background: linear-gradient(rgba(164, 208, 7, 1), rgba(107, 135, 5, 1));
}
```

**Blue action:**
```css
.btnv6_blue_blue_innerfade {
    color: #A4D7F5;
    background: linear-gradient(rgba(47, 137, 188, 1), rgba(23, 67, 92, 1));
}
:hover {
    background: linear-gradient(rgba(102, 192, 244, 1), rgba(47, 137, 188, 1));
}
```

**Ghost/transparent:**
```css
.btnv6_white_transparent {
    color: #fff;
    background: transparent;
}
span { border: 1px solid rgba(255, 255, 255, 0.4) }
:hover span { border: 1px solid rgba(255, 255, 255, 1) }
```

**Size modifiers:**
```css
.btn_large  { font-size: 16px; line-height: 40px; padding: 0 15px }
.btn_medium { font-size: 15px; line-height: 30px; padding: 0 15px }
.btn_small  { font-size: 12px; line-height: 20px; padding: 0 15px }
.btn_tiny   { font-size: 11px; line-height: 17px; padding: 0 7px }
```

### Store Capsule Cards

```css
.store_capsule {
    display: inline-block;
    width: 229px;
    background: radial-gradient(62.67% 62.67% at 62.67% 100%, #3D4856 0%, #283645 100%);
}
/* aspect ratio: 231:132 via padding-top: 57.3% */
:hover {
    background: radial-gradient(62.67% 62.67% at 62.67% 100%, #6B737D 0%, #3B4955 100%);
}
.store_capsule .title { color: #c7d5e0; font-size: 13px }
.discount_prices { background-color: rgba(20, 31, 44, 0.4); border-radius: 1px }
```

### Search Result Row

```html
<a class="search_result_row" href="/app/...">
    <div class="search_result_image_ctn">
        <img class="search_capsule" src="...capsule_231x87.jpg" />
    </div>
    <div class="responsive_search_name_combined">
        <span class="title">Game Name</span>
        <div class="search_tags">...</div>
    </div>
    <div class="col search_released">Nov 16, 2004</div>
    <div class="col search_rating">...</div>
    <div class="col search_price">$9.99</div>
</a>
```

Search capsule image: **231×87px** displayed (462×174px source, 2x retina).

### Tab Item

```css
.tab_item {
    background: rgba(0, 0, 0, 0.2);
    height: 69px;
}
:hover { background: rgba(0, 0, 0, 0.4) }
.tab_item_name { color: #c7d5e0; font-size: 1.25em }
```

---

## Official Capsule Dimensions

From Steamworks documentation:

| Asset | Dimensions | Usage |
|---|---|---|
| Header Capsule | 920 × 430px | Store page top, Daily Deals |
| Small Capsule (source) | 462 × 174px | Search results (displayed 231×87) |
| Main Capsule | 1232 × 706px | Homepage carousel |
| Vertical Capsule | 748 × 896px | Seasonal sales |
| Page Background | 1438 × 810px | App detail page bg |
| Bundle Header | 707 × 232px | Bundle pages |
