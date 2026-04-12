<script lang="ts">
import { css } from 'styled-system/css';

let { children } = $props();

const main = css({
	flex: '1',
	overflow: 'hidden auto',
	background: 'surface.base'
});
</script>

<div class={main}>
	{@render children()}
</div>
