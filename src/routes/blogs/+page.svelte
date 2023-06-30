<script lang="ts">
	import TopBlogs from '$lib/components/TopBlogs.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const dataBody = JSON.parse(data.body);

	const allDataBlogs = dataBody.allBlogs;
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
