<div class="leftSide">
	<div class="imgAbs">
		<img class="imgCont" src="/dp.webp" alt="Varun Dudeja" />
	</div>
	<div class="topHeader">
		<h3 class="col">WebSite <span class="spanSeo">.</span> SEO</h3>
		<h1 class="middleHeaderH1">Creating impactful websites & building a strong online presence</h1>
	</div>
	<!-- <div class="middleHeader"> -->
	<!-- </div> -->

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
	.middleHeader {
		z-index: 3;
	}
	.imgCont {
		height: 100%;
	}
	.imgAbs {
		position: absolute;
		height: clamp(333px, 50vh, 366px);
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
		background-color: black;
		padding: 5px 10px;
		color: white;
		border: 4px solid var(--primary);
		border-radius: 20px;
		font-size: clamp(1.4rem, 2vw, 3rem);
		transition: all 0.3s ease-in-out;
	}
	.inqBtn:hover {
		background-color: var(--primary);
	}
	p,
	h3,
	h1 {
		margin: 0.6rem;
	}
	.middleHeaderH1 {
		font-size: clamp(2rem, 2vw, 6rem);
		/* margin: 5%; */
	}
	.footerTextBtn {
		position: absolute;
		bottom: 0;
		width: 95%;
		display: flex;
		margin: 1rem 0;
		justify-content: space-between;
		z-index: 101;
	}
	.topHeader {
		width: 100%;
		margin: 5% 0;
		z-index: 4;
	}
	.spanSeo {
		font-family: 'Roboto';
	}

	.leftSide {
		width: 100%;
		height: 100%;
		overflow-y: scroll;

		display: flex;
		flex-direction: column;

		justify-content: start;
		align-items: center;

		position: relative;
		/* margin: 5% 0; */
	}
	@media screen and (max-width: 768px) {
		.leftSide {
			height: 600px;
		}
	}
</style>
