<script lang="ts">
	import { fileUrl, postImage, siteName, siteUrl } from '$lib/api/config';
	import { afterHeader } from '$lib/stores/afterHeader.js';
	import { onDestroy, onMount } from 'svelte';

	export let data;

	let image = `${postImage}${encodeURIComponent(data.frontmatter.title)}.png`;

	onMount(() => {
		afterHeader.set(false);
	});
	onDestroy(() => {
		afterHeader.set(true);
	});
</script>

<svelte:head>
	<title>{data.frontmatter.title}</title>

	<meta content={data.frontmatter.description} name="description" />

	<meta content={data.frontmatter.title} property="og:title" />
	<meta content={image} property="og:image" />
	<meta content={siteUrl} property="og:url" />
	<meta content={data.frontmatter.description} property="og:description" />
	<meta content={siteName} property="og:site_name" />

	<!-- <meta content={twitterHandle} name="twitter:creator" /> -->
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={data.frontmatter.title} name="twitter:title" />
	<meta content={data.frontmatter.description} name="twitter:description" />
	<meta content={image} name="twitter:image" />
</svelte:head>

<br /><br />

<div class="dataContent prose">
	<a href="/blogs" class="goBackToBlogs"> ← Back to Blogs </a>
	<br />
	{@html data.content}
</div>

<style>
	.goBackToBlogs {
		background-color: #ddd;
		/* margin: 0 10%; */
		padding: 0.6rem 1rem;
		border-radius: 25px;
		border: 1px solid #aaa;
		box-shadow: var(--boxShadowsBlur);
	}
	.prose {
		margin: 5px;
		width: 80%;
		margin-left: 10%;
		margin-bottom: 60px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
