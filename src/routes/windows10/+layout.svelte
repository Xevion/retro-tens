<script lang="ts">
import { css } from 'styled-system/css';

let { children } = $props();

const shell = css({
	fontFamily: 'ui',
	fontSize: 'base',
	color: 'text.primary',
	minHeight: '100vh'
});
</script>

<div data-panda-theme="windows10" class={shell}>
	{@render children()}
</div>
