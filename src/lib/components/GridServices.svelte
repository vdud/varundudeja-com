<div class="gridOf8Items">
	<a href="/services" class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/portfolio-website-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>Portfolio Websites</h2>
		</div>
	</a>

	<a href="/services" class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/ecommerce-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>E-commerce Websites</h2>
		</div>
	</a>

	<a href="/services" class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/listing-website-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>Listing Websites</h2>
		</div>
	</a>

	<a href="/services" class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/seo-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>SEO Optimization</h2>
		</div>
	</a>

	<a href="/services" class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/website-maintainance-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>Website Maintainance</h2>
		</div>
	</a>

	<a href="/services" class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/wordpress-speed.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>Wordpress Speed</h2>
		</div>
	</a>

	<a href="/services" class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/design-branding-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>Design & Branding</h2>
		</div>
	</a>

	<a href="/services" class="serviceContainer">
		<div class="ImgCont">
			<img src="/work-images-blender/logos/consult-logo.webp" alt="" />
		</div>
		<div class="imgText">
			<h2>Consult</h2>
		</div>
	</a>
</div>

<style>
	.ImgCont {
		height: 70%;
	}
	.imgText {
		height: 30%;
		text-align: center;
		font-size: clamp(0.6rem, 1vw, 0.8rem);
		display: flex;
		justify-content: center;
		align-items: end;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.serviceContainer {
		height: clamp(100px, 40vh, 300px);
		overflow: hidden;
		/* width: calc(100% - 10px); */
		background-color: #eee;
		/* border-radius: 15px; */
		/* padding: 20px; */
		border: 0.1px solid #aaa;
		transition: all 0.3s ease-in-out;
	}
	.serviceContainer:hover {
		box-shadow: var(--boxShadowsBlur);
		scale: 1.02;
		background-color: #fff;
	}

	.gridOf8Items {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-gap: 5px;
		/* background-color: #2196F3; */
		padding: 10px;
	}

	@media screen and (max-width: 768px) {
		.gridOf8Items {
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(8, 1fr);
		}
	}
</style>
