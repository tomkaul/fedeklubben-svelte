<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style>
	button {
		background: none;
		border: none;
		/* border-bottom: 2px solid white; */
		border-radius: 0;
		margin: 0;
		color: #999;
	}
	
	.selected {
		/* border-bottom: 3px solid teal; */
		color: white;
		background-color: darkgreen;
		font-weight: normal;
	}
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>