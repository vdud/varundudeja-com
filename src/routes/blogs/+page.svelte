<script lang="ts">
	import TopBlogs from '$lib/components/TopBlogs.svelte';
	import { onDestroy, onMount } from 'svelte';
	import type { PageData } from './$types';
	import { afterHeader } from '$lib/stores/afterHeader';

	export let data: PageData;

	const dataBody = JSON.parse(data.body);

	const allDataBlogs = dataBody.allBlogs;

	onMount(() => {
		afterHeader.set(false);
	});
	onDestroy(() => {
		afterHeader.set(true);
	});
</script>

<br /><br />
<div class="allBogs">
	<TopBlogs allBlogs={allDataBlogs} />
</div>

<style>
	.allBogs {
		width: 90%;
		margin: 0 auto;
	}
</style>
