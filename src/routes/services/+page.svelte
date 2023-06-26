<script lang="ts">
	import ImgDiv from '$lib/components/imgDiv.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let defaultPng = '/default.png';
	let leftSide = 'left';
	let RightSide = 'right';
</script>

<div id="serviceBox">
	<div class="allHeadersForId">
		<h1>All Services</h1>
	</div>

	<div class="imgDiv">
		<ImgDiv {defaultPng} {leftSide}>
			<p class="col firstText">for creating an online marketplace,</p>
			<h1 class="secondHeader">Listing Website</h1>
			<p class="timelineText">TIMELINE: 3/4 WEEKS*</p>
			<p class="descripTxt">
				This package is suited for real estate agents, hotel agents, or any local listing businesses
				that want to establish their entire business online.
			</p>
			<p class="descripTxt colBox">WHAT'S INCLUDED?</p>
			<ul>
				<li class="descripTxt">Hello</li>
				<li class="descripTxt">Hello</li>
				<li class="descripTxt">Hello</li>
			</ul>
			<button class="InquireBtn"> Inquire Now</button>
		</ImgDiv>
	</div>

	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, consectetur officia dolore
		repellendus incidunt atque officiis consequatur reiciendis accusamus ipsum provident numquam
		tenetur animi delectus nam corrupti esse, dolorum neque!
	</p>

	<div class="imgDiv">
		<ImgDiv {defaultPng} {RightSide}>
			<p class="col firstText">for creating an online marketplace,</p>
			<h1 class="secondHeader">Listing Website</h1>
			<p class="timelineText">TIMELINE: 3/4 WEEKS*</p>
			<p class="descripTxt">
				This package is suited for real estate agents, hotel agents, or any local listing businesses
				that want to establish their entire business online.
			</p>
			<p class="descripTxt colBox">WHAT'S INCLUDED?</p>
			<ul>
				<li class="descripTxt">Hello</li>
				<li class="descripTxt">Hello</li>
				<li class="descripTxt">Hello</li>
			</ul>
			<button class="InquireBtn"> Inquire Now</button>
		</ImgDiv>
	</div>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at officiis unde voluptate
		consequuntur consequatur dolor, nemo reprehenderit quisquam quas aliquid molestias repudiandae
		delectus qui beatae ex illo rem fuga?
	</p>
</div>

<style>
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
		position: relative;

		margin: 1.3rem 0;
		border-top: 1px dotted #3333;
		border-bottom: 1px dotted #3333;

		overflow: hidden;
	}
</style>
