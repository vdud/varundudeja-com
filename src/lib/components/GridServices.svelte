<script lang="ts">
	const clickServiceLink = (id: string) => {
		console.log(id);

		setTimeout(() => {
			const serviceBox = document.getElementById(id);
			serviceBox?.scrollIntoView({ behavior: 'smooth' });
		}, 300);
	};
</script>

<div class="gridOf8Items">
	<div class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/portfolio-website-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>Portfolio Websites</h2>
			<p>For New or Established Businesses.</p>
			<a on:click={clickServiceLink.bind(globalThis, 'PortfolioId')} href="/services"
				>Checkout Now ↗</a
			>
		</div>
	</div>

	<div class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/ecommerce-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>E-commerce Websites</h2>
			<p>For product based business who wish to sell online.</p>
			<a on:click={clickServiceLink.bind(globalThis, 'EcomId')} href="/services">Checkout Now ↗</a>
		</div>
	</div>

	<div class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/listing-website-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>Listing Websites</h2>
			<p>For creating an online marketplace.</p>
			<a on:click={clickServiceLink.bind(globalThis, 'ListingId')} href="/services"
				>Checkout Now ↗</a
			>
		</div>
	</div>

	<div class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/seo-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>SEO Optimization</h2>
			<p>To rank your business higher on Google.</p>
			<a on:click={clickServiceLink.bind(globalThis, 'SEOId')} href="/services">Checkout Now ↗</a>
		</div>
	</div>

	<div class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/website-maintainance-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>Website Maintainance</h2>
			<p>Monthly Maintenance for any website.</p>
			<a on:click={clickServiceLink.bind(globalThis, 'WebMaintainId')} href="/services"
				>Checkout Now ↗</a
			>
		</div>
	</div>

	<div class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/wordpress-speed.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>Wordpress Speed</h2>
			<p>To build a social media presence.</p>
			<a on:click={clickServiceLink.bind(globalThis, 'WordSpeedId')} href="/services"
				>Checkout Now ↗</a
			>
		</div>
	</div>

	<div class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/design-branding-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>Design & Branding</h2>
			<p>On the go design services.</p>
			<a on:click={clickServiceLink.bind(globalThis, 'DesignId')} href="/services">Checkout Now ↗</a
			>
		</div>
	</div>

	<div class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/consult-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>Consult (FREE)</h2>
			<p>Get clarity on all your website doubts.</p>
			<a on:click={clickServiceLink.bind(globalThis, 'ConsultId')} href="/services"
				>Checkout Now ↗</a
			>
		</div>
	</div>
</div>

<style>
	.imgText > a {
		padding: 0.3rem 1rem;
		margin-top: 0.6rem;
		background-color: #ddd;
		border-radius: 25px;
		font-size: clamp(0.7rem, 1vw, 0.9rem);
		transition: all 0.3s ease-in-out;

		bottom: 0;
		right: 0;
	}
	.imgText > a:hover {
		background-color: #ccc;
		box-shadow: var(--boxShadows);
	}
	.ImgCont {
		height: 70%;
	}
	.imgText {
		height: 30%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: center;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.serviceContainer {
		height: clamp(300px, 40vh, 400px);
		/* overflow: hidden; */
		margin: 2rem 0;
		/* width: calc(100% - 10px); */
		background-color: #eee;
		/* border-radius: 15px; */
		/* padding: 20px; */
		/* border: 0.1px solid #aaa; */
		transition: all 0.3s ease-in-out;
	}
	/* .serviceContainer:hover {
		box-shadow: var(--boxShadowsBlur);
		scale: 1.02;
		background-color: #fff;
	} */

	.gridOf8Items {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-gap: 10px;
		/* background-color: #2196F3; */
		padding: 10px;
	}

	.imgText > p {
		margin: 0;
		font-size: clamp(0.6rem, 1vw, 0.8rem);
	}

	.imgText > h2 {
		font-family: 'Walkway-SemiBold';
		font-size: clamp(0.8rem, 10vw, 1.24rem);
		margin: 0;
		margin-bottom: 0.6rem;

		color: var(--primary);
	}

	@media screen and (max-width: 768px) {
		.serviceContainer {
			display: flex;
			height: 200px;
			padding: 0 1rem;
			margin: 0.6rem 0;
		}

		.ImgCont {
			height: 100%;
			width: 40%;
		}
		.imgText {
			height: 100%;
			width: 60%;
			justify-content: center;
			align-items: start;
			text-align: left;
			/* padding: 0.6rem; */
			transform: translateX(5%);
		}
		.gridOf8Items {
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(8, 1fr);
			width: 85%;
			margin-left: 5%;
			/* border: 1px solid #aaa; */
		}
	}
</style>
