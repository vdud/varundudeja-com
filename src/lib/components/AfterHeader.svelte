<div class="leftSide">
	<div class="imgAbs">
		<img class="imgCont" src="/dp.webp" alt="Varun Dudeja" />
	</div>
	<div class="topHeader">
		<h3 class="col">
			Web <span class="spanSeo">.</span> Coding <span class="spanSeo">.</span> 3D
		</h3>
		<h1 class="middleHeaderH1">
			Crafting Powerful Websites and Forging a Resilient Online Identity.
		</h1>
	</div>
	<!-- <div class="middleHeader"> -->
	<!-- </div> -->

	<div class="loopingOuter">
		<div class="loopingInner">
			{#each { length: 3 } as _}
				<h1 class="loopingTxt">
					<span>
						Welcome to my page, where you'll see my work and learn more about how you can improve
						your digital presence by making an exceptional display of your work.
					</span>

					<span>Here are some reviews from my clients:</span>

					<span class="color">David:</span>
					"Varun is a great guy. He helped me with my website, and I'm very happy with the results. I
					would recommend him to anyone who wants to improve their online presence."

					<span class="color">Jenny:</span>
					"Made my life easier by giving me support throughout the completion of the website and creating
					customized tools for emailing all the prospects."

					<span class="color">Brendon:</span>
					"Very technical guy with a wealth of knowledge on the latest technologies to use on the website."

					<span>
						As you can see, I have a good knowledge of the latest web technologies, and I'm always
						learning new things to provide the best service to my clients.
					</span>
				</h1>
			{/each}
		</div>
	</div>

	<div class="footerTextBtn">
		<a
			href="/contact"
			on:click={() => {
				setTimeout(() => {
					const contactBox = document.getElementById('contactBox');
					contactBox?.scrollIntoView({ behavior: 'smooth' });
				}, 100);
			}}
			class="inqBtn">Get in Touch</a
		>
		<a
			href="/services"
			on:click={() => {
				setTimeout(() => {
					const serviceBox = document.getElementById('serviceBox');
					serviceBox?.scrollIntoView({ behavior: 'smooth' });
				}, 100);
			}}
			class="inqBtn">See Services</a
		>
	</div>
</div>

<style>
	.loopingOuter {
		width: 100%;
		overflow: hidden;
		/* padding: 1rem 0; */
		/* transform: rotateZ(-10deg); */
		/* scale: 1.2; */
		/* margin-top: 5vh; */
	}
	.loopingInner {
		display: flex;
		justify-content: left;
		align-items: center;
	}
	span {
		font-family: 'Walkway-SemiBold';
	}
	.color {
		color: var(--primary);
	}
	.loopingTxt {
		/* inline */
		margin: 0;
		padding: 0;
		font-size: 1rem;
		/* no wrap */
		white-space: nowrap;

		animation: endlessScroll 300s linear infinite;
		opacity: 0.3;
	}
	@keyframes endlessScroll {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.col {
		font-size: clamp(0.8rem, 1vw, 3rem);
	}
	.middleHeader {
		z-index: 3;
	}
	.imgCont {
		height: 100%;
	}
	.imgAbs {
		position: absolute;
		height: clamp(100px, 70vw, 333px);
		bottom: 0;
		/* right: 30px; */
		z-index: 100;
		width: 100%;
		/* background-color: red; */
		display: flex;
		justify-content: center;
		align-items: center;
		/* background-color: #0000; */
		pointer-events: none;
	}
	.inqBtn {
		background-color: #eee;
		font-family: 'Walkway-SemiBold';
		padding: 5px 10px;
		color: #000;
		border: 2px solid var(--primary);
		border-radius: 20px;
		font-size: clamp(1rem, 2vw, 1.5rem);
		transition: all 0.1s ease-in-out;
		box-shadow: var(--boxShadows);
		border-top: 6px solid var(--primary);
	}
	.inqBtn:hover {
		background-color: var(--primary);
		padding: 5px 15px;
		border-top: 3px solid var(--primary);

		border-radius: 30px;
	}
	p,
	h3,
	h1 {
		margin: 1.5rem;
	}
	.middleHeaderH1 {
		font-size: clamp(2rem, 2vw, 6rem);
		/* margin: 5%; */
	}
	.footerTextBtn {
		position: absolute;
		bottom: 0;
		width: 90%;
		display: flex;
		margin: 1rem 0;
		justify-content: space-between;
		z-index: 101;
	}
	.topHeader {
		width: 100%;
		/* margin: 5% 0; */
		z-index: 4;
	}
	.spanSeo {
		font-family: 'Roboto';
	}

	.leftSide {
		width: 100%;
		height: 100%;
		overflow: hidden;
		/* overflow-y: scroll; */

		display: flex;
		flex-direction: column;

		justify-content: start;
		align-items: center;

		position: relative;
		/* margin: 5% 0; */
	}
	@media screen and (max-width: 768px) {
		.leftSide {
			height: 70vh;
		}
	}
</style>
