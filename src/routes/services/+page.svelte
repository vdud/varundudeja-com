<script lang="ts">
	import ImgDiv from '$lib/components/imgDiv.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let value = '/default.png';
</script>

<svelte:head>
	<title>Services</title>
	<meta
		name="description"
		content="All the services that I provide, from web design to SEO and digital marketing."
	/>
</svelte:head>

<div id="serviceBox">
	<div class="allHeadersForId">
		<h1>All Services</h1>
	</div>

	<div class="imgDiv im1">
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">for creating an online marketplace,</p>
				<h1 class="secondHeader">Listing Website</h1>
				<p class="timelineText">TIMELINE: 3/4 WEEKS*</p>
				<p class="descripTxt">
					This package is suited for real estate agents, hotel agents, or any local listing
					businesses that want to establish their entire business online.
				</p>
				<p class="descripTxt colBox">WHAT'S INCLUDED?</p>
				<ul>
					<li class="descripTxt">Hello</li>
					<li class="descripTxt">Hello</li>
					<li class="descripTxt">Hello</li>
				</ul>
				<button class="InquireBtn"> Inquire Now</button>
				<!-- </ImgDiv> -->
			</div>
		</div>
		<div class="ImgBox">
			<img src={value} alt="default file" />
		</div>
	</div>

	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, consectetur officia dolore
		repellendus incidunt atque officiis consequatur reiciendis accusamus ipsum provident numquam
		tenetur animi delectus nam corrupti esse, dolorum neque!
	</p>

	<div class="imgDiv im2">
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">for creating an online marketplace,</p>
				<h1 class="secondHeader">Listing Website</h1>
				<p class="timelineText">TIMELINE: 3/4 WEEKS*</p>
				<p class="descripTxt">
					This package is suited for real estate agents, hotel agents, or any local listing
					businesses that want to establish their entire business online.
				</p>
				<p class="descripTxt colBox">WHAT'S INCLUDED?</p>
				<ul>
					<li class="descripTxt">Hello</li>
					<li class="descripTxt">Hello</li>
					<li class="descripTxt">Hello</li>
				</ul>
				<button class="InquireBtn"> Inquire Now</button>
				<!-- </ImgDiv> -->
			</div>
		</div>
		<div class="ImgBox">
			<img src={value} alt="default file" />
		</div>
	</div>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at officiis unde voluptate
		consequuntur consequatur dolor, nemo reprehenderit quisquam quas aliquid molestias repudiandae
		delectus qui beatae ex illo rem fuga?
	</p>
</div>

<style>
	#serviceBox {
		background-color: #eee;
	}
	.ImgBox {
		height: 60%;
		width: 100%;
		position: absolute;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: row-reverse;
	}
	.headerText {
		width: 90%;
		/* margin-top: 1rem; */
	}
	.absText {
		position: absolute;
		top: 0;
		width: clamp(300px, 60%, 560px);
		margin: 1rem;
		/* padding: 1rem 0; */
		height: 350px;
		overflow: hidden;
		overflow-y: scroll;
		display: flex;
		justify-content: center;
		z-index: 1;
		background-color: #1111;
		border-radius: 6px;
		border: 1px solid #3338;
		/* box-shadow: var(--boxShadowsBlur); */
		/* border-bottom: 3px solid #000; */
	}
	img {
		height: 100%;
	}
	.colBox {
		background-color: black;
		padding: 3px 9px;
		width: max-content;
		border-radius: 4px;
		color: #fff;
	}
	.InquireBtn {
		background-color: #000;
		padding: 0.6rem 0.9rem;
		border-radius: 0.3rem;
		transition: all 0.3s ease-in-out;
		color: white;
	}
	.InquireBtn:hover {
		background-color: var(--primary);
		color: #fff;
		box-shadow: var(--boxShadows);
	}
	.descripTxt {
		font-size: 0.8rem;
		line-height: 1.3rem;
		letter-spacing: 1px;
		font-family: 'Walkway-SemiBold';
	}
	.timelineText {
		font-size: 0.6rem;
		font-family: 'Walkway-SemiBold';
		letter-spacing: 2px;
	}
	.secondHeader {
		font-size: clamp(1.4rem, 2vw, 2.5rem);
		font-family: 'Walkway-Expand-UltraBold';
		letter-spacing: 2px;
	}
	.firstText {
		font-size: 0.7rem;
		font-family: 'Walkway-Black';
		/* word-spacing: normal; */
	}
	p,
	h1,
	button,
	ul {
		margin: 0.6rem;
	}

	ul,
	button {
		padding: 0;
	}
	li {
		list-style: none;
	}
	ul li::before {
		content: '✓ ';
	}

	.imgDiv {
		width: 100%;
		height: clamp(300px, 60vh, 600px);
		position: relative;

		margin: 1.3rem 0;
		border-top: 1px dotted #3333;
		border-bottom: 1px dotted #3333;

		overflow: hidden;
	}
	.im1 {
		background-color: #0b51b411;
	}
	.im2 {
		background-color: #b40b8711;
	}
</style>
