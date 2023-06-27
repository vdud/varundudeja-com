<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Varun : Portfolio : Web Designer : SEO</title>
	<meta
		name="description"
		content="Portfolio Website for a coder, web designer, search engine optimisation and digital marketer."
	/>
</svelte:head>

<div id="projectBox">
	<br /><br />
	<br /><br />
	<h2>How can I help you...</h2>
	<br /><br />
	<div class="helpFlex">
		<div class="helpCont helpCont1">
			<div class="number">
				<h1>1</h1>
				<h1 class="col">;</h1>
			</div>
			<div class="description">
				<h3>Need a new customized website?</h3>
				<p>Build a Unique and Tailored Website for Your Needs.</p>
			</div>
		</div>
		<div class="helpCont helpCont2">
			<div class="number">
				<h1>2</h1>
				<h1 class="col">;</h1>
			</div>
			<div class="description">
				<h3>Want to drive more traffic & engagement</h3>
				<p>Boost Your Website Traffic and Reach Your Target Audience.</p>
			</div>
		</div>
		<div class="helpCont helpCont3">
			<div class="number">
				<h1>3</h1>
				<h1 class="col">;</h1>
			</div>
			<div class="description">
				<h3>Want to maintain your website?</h3>
				<p>Ensure the Smooth Operation and Upkeep of Your Website.</p>
			</div>
		</div>
	</div>
	<br /><br />
	<h2>Some personal projects</h2>
	<br /><br />

	<div class="imgDiv im2">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<h1>Hello</h1>
				<!-- </ImgDiv> -->
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis, eos laboriosam
					quam placeat unde alias laborum perspiciatis debitis eaque provident reiciendis,
					dignissimos ab? Quasi quas sed corporis sint inventore.
				</p>
			</div>
		</div>
		<div class="ImgBox">
			<img src="/work-images-blender/goa-rental-2.webp" alt="default file" />
		</div>
	</div>
	<br /><br />
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam consectetur asperiores
		similique. Facilis necessitatibus fuga iure sit, distinctio provident voluptatem placeat
		suscipit! Natus autem optio, voluptatum non saepe enim cumque!
	</p>

	<div class="imgDiv im2">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<h1>Hello</h1>
				<!-- </ImgDiv> -->
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis, eos laboriosam
					quam placeat unde alias laborum perspiciatis debitis eaque provident reiciendis,
					dignissimos ab? Quasi quas sed corporis sint inventore.
				</p>
			</div>
		</div>
		<div class="ImgBox">
			<img src="/work-images-blender/tech.webp" alt="default file" />
		</div>
	</div>

	<br /><br />
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa sed necessitatibus in nisi
		voluptatibus omnis quam, quos error, dignissimos laboriosam earum, quia doloremque enim repellat
		odio nesciunt quae fugiat dolorem.
	</p>

	<div class="imgDiv im2">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<h1>Hello</h1>
				<!-- </ImgDiv> -->
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis, eos laboriosam
					quam placeat unde alias laborum perspiciatis debitis eaque provident reiciendis,
					dignissimos ab? Quasi quas sed corporis sint inventore.
				</p>
			</div>
		</div>
		<div class="ImgBox">
			<img src="/work-images-blender/wassup-world.webp" alt="default file" />
		</div>
	</div>

	<br /><br />
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae perferendis nesciunt
		exercitationem possimus dolore consequatur nam id harum nemo tempora corrupti ipsum, dignissimos
		aut veniam velit natus minima! Consequuntur.
	</p>
	<h1>Thankyou</h1>
</div>

<style>
	.number {
		width: 100%;
		height: 30%;

		display: flex;
		align-items: end;
		justify-content: center;
	}
	.number > h1 {
		font-family: 'Walkway-SemiBold';
		font-size: 5rem;
		margin: 0;
	}
	.description {
		width: 100%;
		height: 70%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		text-align: center;
	}
	.description > h3 {
		font-family: 'Walkway-Expand-UltraBold';
		font-size: 1.1rem;
		color: #000;
	}
	.description > p {
		font-family: 'Walkway-SemiBold';
		font-size: 0.8rem;
		color: #888;
	}
	.helpFlex {
		display: flex;
		/* height: 200px; */
	}
	/* .helpCont1 {
		background-color: red;
	}
	.helpCont2 {
		background-color: green;
	}
	.helpCont3 {
		background-color: blue;
	} */
	.helpCont {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
	}
	p,
	h2,
	h3 {
		margin: 0.3rem 0.6rem;
	}
	h2 {
		text-align: center;
	}
	@media screen and (max-width: 768px) {
		.helpFlex {
			flex-direction: column;
			height: 500px;
		}
		.helpCont {
			flex-direction: row;
		}
		.number {
			width: 20%;
			align-items: center;
			justify-content: end;
			height: 100%;
		}
		.description {
			height: 100%;
			width: 80%;
			align-items: start;
			justify-content: center;
			text-align: left;
		}
	}

	.middleGradient {
		width: 100%;
		height: 100%;
		/* background-color: red; */
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		transform: translateY(30%);
		pointer-events: none;
	}
	.md5 {
		background-image: linear-gradient(0deg, #eee0 20%, var(--primary-grad1) 50%, #eee0);
	}
	.ImgBox {
		height: 80%;
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
		/* background-color: #fff3; */
		/* border-radius: 6px; */
		/* border: 1px solid #3338; */
		/* box-shadow: var(--boxShadowsBlur); */
		/* border-bottom: 3px solid #000; */
	}
	img {
		height: 100%;
	}
	p,
	h1 {
		margin: 0.6rem;
	}

	button {
		padding: 0;
	}
	li {
		list-style: none;
	}

	.imgDiv {
		width: 100%;
		height: clamp(300px, 75vh, 600px);
		position: relative;

		margin: 1.3rem 0;
		/* border-top: 1px dotted #3333;
		border-bottom: 1px dotted #3333; */

		/* overflow: hidden; */
		/* background-color: #ddd; */
	}
</style>
