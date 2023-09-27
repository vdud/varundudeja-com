<script lang="ts">
	import { afterHeader } from '$lib/stores/afterHeader';
	import { onDestroy, onMount } from 'svelte';

	onMount(() => {
		afterHeader.set(false);
	});
	onDestroy(() => {
		afterHeader.set(true);
	});
</script>

<div class="myTech">
	<h1>MY TECH 🧑🏻‍💻</h1>
	<a
		target="_blank"
		href="https://www.amazon.in/MSI-GeForce-Ventus-256-bIt-Graphic/dp/B096SLQK6N/ref=sr_1_7?keywords=3060+ti&amp;qid=1695796562&amp;sr=8-7&_encoding=UTF8&tag=vrxui-21&linkCode=ur2&linkId=d4a2bd8704c9cb01117084f8752f69be&camp=3638&creative=24630"
	>
		<div class="h2"><h2>1. MSI 3060 Ti</h2></div>
		<img src="/mytech/msi-3060.webp" alt="3060" />
	</a>

	<a
		target="_blank"
		href="https://www.amazon.in/2022-Apple-MacBook-Laptop-chip/dp/B0B3C6FBPF/ref=sr_1_1_sspa?crid=3CQ6H9A08DS8Y&amp;keywords=macbook+air+m2&amp;qid=1695797635&amp;sprefix=macbook+air+m%252Caps%252C266&amp;sr=8-1-spons&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;psc=1&_encoding=UTF8&tag=vrxui-21&linkCode=ur2&linkId=ae04522e2bb392655cd77e636d93927e&camp=3638&creative=24630"
	>
		<div class="h2"><h2>2. Macbook Air M2</h2></div>
		<img src="/mytech/macbook-m2.webp" alt="macbook-air-m2" />
	</a>

	<a
		target="_blank"
		href="https://www.amazon.in/gp/product/B08M3QCXKP/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&amp;psc=1&_encoding=UTF8&tag=vrxui-21&linkCode=ur2&linkId=84e31189069a378ec6ce34810f41e997&camp=3638&creative=24630"
	>
		<div class="h2"><h2>3. Insta 360</h2></div>
		<img src="/mytech/insta-360.webp" alt="insta-360-webp-transparent" />
	</a>

	<a
		target="_blank"
		href="https://www.amazon.in/gp/product/B085YDG6Z9/ref=ppx_yo_dt_b_asin_image_o04_s00?ie=UTF8&amp;psc=1&_encoding=UTF8&tag=vrxui-21&linkCode=ur2&linkId=1b50a72f2ad2b4cf554252ba401c8d40&camp=3638&creative=24630"
	>
		<div class="h2"><h2>4. Mechanical Keyboard</h2></div>
		<img src="/mytech/gamedias.webp" alt="gamedias-keyboard-mechanical-webp-transparent" />
	</a>

	<a
		target="_blank"
		href="https://www.amazon.in/gp/product/B07FQ4Q5DH/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&amp;psc=1&_encoding=UTF8&tag=vrxui-21&linkCode=ur2&linkId=b86fb166bbae75ca77bd0dbb5458264e&camp=3638&creative=24630"
	>
		<div class="h2"><h2>5. Kindle</h2></div>
		<img src="/mytech/kindle.webp" alt="kindle-webp-transparent" />
	</a>

	<a
		target="_blank"
		href="https://www.amazon.in/gp/product/B07WKM7VLZ/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&amp;psc=1&_encoding=UTF8&tag=vrxui-21&linkCode=ur2&linkId=26300d0ef67ce37026868c0c1bee8558&camp=3638&creative=24630"
	>
		<div class="h2"><h2>6. Microphone</h2></div>
		<img src="/mytech/microphone.webp" alt="microphone-moana-webp-transparent" />
	</a>

	<a
		target="_blank"
		href="https://www.amazon.in/gp/product/B07MNSYX31/ref=ppx_yo_dt_b_asin_title_o08_s00?ie=UTF8&amp;psc=1&_encoding=UTF8&tag=vrxui-21&linkCode=ur2&linkId=491cb87ea94b2fe0fdc3b4cced634c54&camp=3638&creative=24630"
	>
		<div class="h2"><h2>7. Gaming Remote</h2></div>
		<img src="/mytech/gaming.webp" alt="gaming-remote-webp-transparent" />
	</a>
</div>

<style>
	.myTech {
		width: 100%;
		margin: 0;
		text-align: center;
	}
	.myTech a {
		width: calc(90% - 2px);
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100px;
		margin: 1rem 5%;
		border: 1px solid #000;

		cursor: pointer;
	}
	.myTech a img {
		width: 30%;
		height: 100%;
		object-fit: contain;
	}
	.myTech a .h2 {
		width: 70%;
		height: 100%;
		display: flex;
		justify-content: left;

		align-items: center;
		border-right: 1px solid #000;
	}
	.myTech a .h2 h2 {
		margin-left: 1rem;
	}
</style>
