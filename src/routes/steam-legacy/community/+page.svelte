<script lang="ts">
import { css } from 'styled-system/css';
import {
	subNav,
	sectionHeader,
	activityItem as activityItemSva,
	communityHeader as communityHeaderSva,
	discussionItem as discussionItemSva
} from '$lib/recipes/steam-legacy';
const { data } = $props();

let activeSubTab = $state('Home');

const sn = subNav();
const sh = sectionHeader();
const ai = activityItemSva();
const ch = communityHeaderSva();
const di = discussionItemSva();

const activityFeed = css({ background: 'surface.base' });
const discussionsList = css({ background: 'surface.base' });
</script>

<!-- Sub-nav -->
<div class={sn.root}>
	{#each data.subTabs as tab, i (tab)}
		{#if i > 0}<span class={sn.sep}>|</span>{/if}
		<button
			type="button"
			class={sn.tab}
			data-selected={activeSubTab === tab || undefined}
			onclick={() => (activeSubTab = tab)}
		>
			{tab}
		</button>
	{/each}
</div>

<!-- Community header -->
<div class={ch.root}>
	<div class={ch.title}>Friend Activity</div>
	<div class={ch.subtitle}>What your friends have been up to</div>
</div>

<!-- Activity feed -->
<div class={activityFeed}>
	{#each data.activity as item, i (i)}
		<div class={ai.root}>
			<div class={ai.iconCol}>
				<div class={ai.typeIcon}>{item.icon}</div>
			</div>
			<div class={ai.avatar} style="background: {item.userBg}">{item.userInit}</div>
			<div class={ai.body}>
				<div class={ai.line}>
					<span class={ai.user}>{item.user}</span>
					<span class={ai.action}> {item.action} </span>
					<span class={ai.target}>{item.target}</span>
				</div>
				{#if item.detail}
					<div class={ai.detail}>{item.detail}</div>
				{/if}
			</div>
			<div class={ai.time}>{item.time}</div>
		</div>
	{/each}
</div>

<!-- Trending discussions -->
<div class={sh.root}>
	<span class={sh.title}>▶ Trending Discussions</span>
</div>
<div class={discussionsList}>
	{#each data.discussions as disc (disc.title)}
		<div class={di.root}>
			<span class={di.game}>{disc.game}</span>
			<span class={di.title}>{disc.title}</span>
			<span class={di.replies}>{disc.replies} replies</span>
			<span class={di.views}>{disc.views} views</span>
		</div>
	{/each}
</div>
