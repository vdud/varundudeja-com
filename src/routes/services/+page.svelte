<script lang="ts">
	import { contactMessage } from '$lib/stores/contactMessage';
	import type { PageData } from './$types';

	export let data: PageData;

	let value = '/default.png';

	let maintainanceTier = 1;

	const sendInq = (data: any) => {
		setTimeout(() => {
			$contactMessage = data;
		}, 300);
	};
</script>

<svelte:head>
	<title>Services</title>
	<meta
		name="description"
		content="All the services that I provide, from web design to SEO and digital marketing."
	/>
</svelte:head>

<div id="serviceBox">
	<br /><br />
	<div class="allHeadersForId">
		<h1>All Services</h1>
	</div>

	<br /><br />

	<p class="centered">
		I have perfectly tailored packages for your business. Explore these user-focused services below
		that work for businesses of all shapes and sizes.
	</p>

	<div class="imgDiv im1" id="PortfolioId">
		<div class="middleGradient md4" />

		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">For New or Established Businesses,</p>
				<h1 class="secondHeader">Portfolio Websites</h1>
				<p class="timelineText">TIMELINE: 2/3 WEEKS*</p>
				<p class="descripTxt">
					Are you wanting to grow your business, attract ideal clients, multiply your revenue &
					stand-out from all your competitors? This is the plan you choose.
				</p>
				<p class="descripTxt colBox">WHAT'S INCLUDED?</p>
				<ul>
					<li class="descripTxt">Premium customized Web Design</li>
					<li class="descripTxt">5 Page website design</li>
					<li class="descripTxt">Extra Pages (Coming Soon, 404 page, Privacy policy etc)</li>
					<li class="descripTxt">Mobile + Tablet Responsive</li>
					<li class="descripTxt">Blog & Newsletter Subscription setup</li>
					<li class="descripTxt">Social Media Integration + Instagram feed</li>
					<li class="descripTxt">Whatsapp Chat Integration</li>
				</ul>
				<a
					href="/contact"
					on:click={sendInq.bind(
						globalThis,
						'Hello Varun! \nI would like to get some information on building a Portfolio website, '
					)}
					class="InquireBtn"
				>
					<span>Inquire Now</span></a
				>
				<!-- </ImgDiv> -->
			</div>
		</div>
		<div class="ImgBox">
			<img src="/work-images-blender/personal-portfolio.webp" alt="default file" />
		</div>
	</div>

	<p class="centered">
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, consectetur officia dolore
		repellendus incidunt atque officiis consequatur reiciendis accusamus ipsum provident numquam
		tenetur animi delectus nam corrupti esse, dolorum neque!
	</p>

	<div class="imgDiv im2" id="EcomId">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">for product based business who wish to sell online,</p>
				<h1 class="secondHeader">E-Commerce Websites</h1>
				<p class="timelineText">TIMELINE: 3/4 WEEKS*</p>
				<p class="descripTxt">
					This package is suited for e-commerce businesses that are looking for a unique &
					customized online store, to attract their dream customers, generate more sales & have
					better conversions!
				</p>
				<p class="descripTxt colBox">WHAT'S INCLUDED?</p>
				<ul>
					<li class="descripTxt">Premium customized Web Design</li>
					<li class="descripTxt">Mandatory pages included</li>
					<li class="descripTxt">Unlimited categories & Products Capacity</li>
					<li class="descripTxt">20 product entries included</li>
					<li class="descripTxt">Whatsapp Chat & Social Media Integration + Instagram Feed</li>
					<li class="descripTxt">Checkout + Payment Setup</li>
					<li class="descripTxt">Notification Emails + GST invoice + Tax Setup</li>
					<li class="descripTxt">Discount coupon feature</li>
					<li class="descripTxt">Shipping Setup + Shipping Labels setup</li>
				</ul>
				<a
					href="/contact"
					on:click={sendInq.bind(
						globalThis,
						'Hello Varun! \nI would like to get some information on building a E-commerce website, '
					)}
					class="InquireBtn"
				>
					<span>Inquire Now</span></a
				>
				<!-- </ImgDiv> -->
			</div>
		</div>
		<div class="ImgBox">
			<img src="/work-images-blender/e-commerce.webp" alt="default file" />
		</div>
	</div>

	<p class="centered">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at officiis unde voluptate
		consequuntur consequatur dolor, nemo reprehenderit quisquam quas aliquid molestias repudiandae
		delectus qui beatae ex illo rem fuga?
	</p>

	<div class="imgDiv im2" id="ListingId">
		<div class="middleGradient md5" />
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
					<li class="descripTxt">Premium customized Web Design</li>
					<li class="descripTxt">Listing Categories & Pages</li>
					<li class="descripTxt">Mandatory Pages Included</li>
					<li class="descripTxt">Extra Pages (Coming Soon, 404 page, Privacy policy etc)</li>
					<li class="descripTxt">Mobile + Tablet Responsive</li>
					<li class="descripTxt">Blog & Newsletter Subscription setup</li>
					<li class="descripTxt">Social Media Integration + Instagram feed</li>
					<li class="descripTxt">Whatsapp Chat Integration</li>
				</ul>
				<a
					href="/contact"
					on:click={sendInq.bind(
						globalThis,
						'Hello Varun! \nI would like to get some information on building a Listing website, '
					)}
					class="InquireBtn"
				>
					<span>Inquire Now</span></a
				>
				<!-- </ImgDiv> -->
			</div>
		</div>
		<div class="ImgBox">
			<img src="/work-images-blender/listing-websites.webp" alt="default file" />
		</div>
	</div>

	<p class="centered">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at officiis unde voluptate
		consequuntur consequatur dolor, nemo reprehenderit quisquam quas aliquid molestias repudiandae
		delectus qui beatae ex illo rem fuga? lor
	</p>

	<div class="imgDiv im2" id="SEOId">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">To rank your business higher on Google,</p>
				<h1 class="secondHeader">SEO Optimization</h1>
				<p class="timelineText">TIMELINE: 2 WEEKS*</p>
				<p class="descripTxt">
					Struggling To Rank Higher On Google? I will work on your existing website to ensure all
					proper SEO tools are in place!
				</p>
				<p class="descripTxt colBox">WHAT'S INCLUDED?</p>
				<ul>
					<li class="descripTxt">SEO Audit of Your Current Website</li>
					<li class="descripTxt">Keyword Research & Competitor Analysis</li>
					<li class="descripTxt">Technical SEO</li>
					<li class="descripTxt">Proper Meta Tags (Page Titles & Descriptions), Image Meta</li>
					<li class="descripTxt">Google Analytics & Search Console setup</li>
					<li class="descripTxt">Google my Business optimisation</li>
				</ul>
				<a
					href="/contact"
					on:click={sendInq.bind(
						globalThis,
						'Hello Varun! \nI would like to get some information on how to rank my website on top of google searches, '
					)}
					class="InquireBtn"
				>
					<span>Inquire Now</span></a
				>
				<!-- </ImgDiv> -->
			</div>
		</div>
		<div class="ImgBox">
			<img src="/work-images-blender/seo.webp" alt="default file" />
		</div>
	</div>

	<p class="centered">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at officiis unde voluptate
		consequuntur consequatur dolor, nemo reprehenderit quisquam quas aliquid molestias repudiandae
		delectus qui beatae ex illo rem fuga?
	</p>

	<div class="imgDiv im2" id="WebMaintainId">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">Monthly Maintenance for any website,</p>
				<h1 class="secondHeader">Website Maintainance</h1>
				<p class="timelineText">TIMELINE: Monthly*</p>
				<p class="descripTxt">These are packages for website maintenance curated for your needs.</p>

				<div class="threeBtn">
					<button
						class={maintainanceTier === 1 ? 'active' : ''}
						on:click={() => {
							maintainanceTier = 1;
						}}
					>
						Tier 1
						{#if maintainanceTier === 1}
							<div class="downArrow" />
						{/if}
					</button>

					<button
						class={maintainanceTier === 2 ? 'active' : ''}
						on:click={() => {
							maintainanceTier = 2;
						}}
					>
						Tier 2
						{#if maintainanceTier === 2}
							<div class="downArrow" />
						{/if}
					</button>

					<button
						class={maintainanceTier === 3 ? 'active' : ''}
						on:click={() => {
							maintainanceTier = 3;
						}}
					>
						Tier 3
						{#if maintainanceTier === 3}
							<div class="downArrow" />
						{/if}
					</button>
				</div>

				<div class="allTierData">
					<p>
						<strong>Basic Services:</strong> CMS updates, Database Updates, Plugin Updates, Regular Full
						Website Backups
					</p>
					<p>
						<strong>Security:</strong> Detect / Resolve Virus Attacks, SSL check, Troubleshoot software
						compatibility issues
					</p>
					{#if maintainanceTier === 1}
						<p>
							<strong> Price (paid monthly):</strong> ₹1250/month. |
							<strong> Price (paid annually):</strong> ₹1000/ month
						</p>
					{/if}

					{#if maintainanceTier === 2 || maintainanceTier === 3}
						<p>
							<strong>Development:</strong> Website Updates like adding Images/ content (5 / month),Resolve
							Compatibility issues with updates
						</p>
						{#if maintainanceTier !== 3}
							<p>
								<strong> Price (paid monthly):</strong> ₹2500/month. |
								<strong> Price (paid annually):</strong> ₹2000/ month
							</p>
						{/if}
					{/if}

					{#if maintainanceTier === 3}
						<p>
							<strong>On Page SEO:</strong> Image Optimization, Content Optimization*, Robot.txt, sitemap,
							Analytics, Url Structure, Headings & Meta Optimization*
						</p>
						<p>
							<strong> Price (paid monthly):</strong> ₹5000/month. |
							<strong> Price (paid annually):</strong> ₹4000/ month
						</p>
					{/if}
				</div>
				<a
					href="/contact"
					on:click={sendInq.bind(
						globalThis,
						`Hello Varun! \nI would like to get some information on custom website maintenance plan, \nTier number ${maintainanceTier} seems a good base to start, `
					)}
					class="InquireBtn"
				>
					<span>Inquire Now</span></a
				>

				<!-- </ImgDiv> -->
			</div>
		</div>
		<div class="ImgBox">
			<img src="/work-images-blender/website-maintainance.webp" alt="default file" />
		</div>
	</div>

	<p class="centered">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at officiis unde voluptate
		consequuntur consequatur dolor, nemo reprehenderit quisquam quas aliquid molestias repudiandae
		delectus qui beatae ex illo rem fuga?
	</p>

	<div class="imgDiv im2" id="WordSpeedId">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">To build a social media presence,</p>
				<h1 class="secondHeader">Wordpress Speed Optimization</h1>
				<p class="timelineText">TIMELINE: 2 WEEKS*</p>
				<p class="descripTxt">
					Make your website speed optimized so you don't have to lose out on potential customers.
					Also, faster websites improve SEO which means your website will be seen further up in the
					Google search results.
				</p>
				<p class="descripTxt colBox">WHAT'S INCLUDED?</p>
				<ul>
					<li class="descripTxt">Image Compression</li>
					<li class="descripTxt">Minifying CSS & JS</li>
					<li class="descripTxt">Loading JS Asynchronously</li>
					<li class="descripTxt">Disable Unnecessary Assets</li>
					<li class="descripTxt">Simplifying Page Structure</li>
					<li class="descripTxt">Removing Unnecessary Plugins</li>
				</ul>
				<a
					href="/contact"
					on:click={sendInq.bind(
						globalThis,
						'Hello Varun! \nI would like to get some information on improving my wordpress website, optimizing it and all the good things, '
					)}
					class="InquireBtn"
				>
					<span>Inquire Now</span></a
				>
				<!-- </ImgDiv> -->
			</div>
		</div>
		<div class="ImgBox">
			<img src="/work-images-blender/wordpress-speed.webp" alt="default file" />
		</div>
	</div>

	<p class="centered">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at officiis unde voluptate
		consequuntur consequatur dolor, nemo reprehenderit quisquam quas aliquid molestias repudiandae
		delectus qui beatae ex illo rem fuga?
	</p>

	<div class="imgDiv im2" id="DesignId">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">On the go design services,</p>
				<h1 class="secondHeader">Design & Branding</h1>
				<p class="timelineText">TIMELINE: Based on scope*</p>
				<p class="descripTxt">
					Few of the creative offerings extend far beyond the base packages, hence providing a list
					of services that can be offered individually.
				</p>
				<p class="descripTxt colBox">WHAT'S INCLUDED?</p>
				<ul>
					<li class="descripTxt">Brand Logo Design</li>
					<li class="descripTxt">Brand collateral (business card and letterhead)</li>
					<li class="descripTxt">Social Media Posts design</li>
					<li class="descripTxt">Email Marketing Templates</li>
					<li class="descripTxt">Additional Website Pages</li>
				</ul>
				<a
					href="/contact"
					on:click={sendInq.bind(
						globalThis,
						'Hello Varun! \nI would like to get some information on Design and Branding, '
					)}
					class="InquireBtn"
				>
					<span>Inquire Now</span></a
				>
				<!-- </ImgDiv> -->
			</div>
		</div>
		<div class="ImgBox">
			<img src="/work-images-blender/design-branding.webp" alt="default file" />
		</div>
	</div>

	<p class="centered">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at officiis unde voluptate
		consequuntur consequatur dolor, nemo reprehenderit quisquam quas aliquid molestias repudiandae
		delectus qui beatae ex illo rem fuga?
	</p>

	<div class="imgDiv im2" id="ConsultId">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">Get clarity on all your website doubts,</p>
				<h1 class="secondHeader">Consultancy Call : 1 on 1</h1>
				<p class="timelineText">TIMELINE: 1 Hour*</p>
				<p class="descripTxt">
					Unsure of what you need? Feeling stuck with your website but can't figure it out? Do you
					have several question on how Website, SEO & SMM works? Book a 40 mins Consultation call &
					get all your queries solved
				</p>
				<a
					href="/contact"
					on:click={sendInq.bind(
						globalThis,
						'Hello Varun! \nI would like to schedule a call to discuss about my project and vision, so we can have a blueprint, '
					)}
					class="InquireBtn"
				>
					<span>Inquire Now</span></a
				>
				<!-- </ImgDiv> -->
			</div>
		</div>
		<div class="ImgBox">
			<img src="/work-images-blender/consultancy.webp" alt="default file" />
		</div>
	</div>

	<p class="centered">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at officiis unde voluptate
		consequuntur consequatur dolor, nemo reprehenderit quisquam quas aliquid molestias repudiandae
		delectus qui beatae ex illo rem fuga?
	</p>
	<br />
</div>

<style>
	.InquireBtn {
		background-color: #eee;
		padding: 0.6rem 0.9rem;
		border-radius: 0.3rem;
		transition: all 0.2s ease-in-out;
		color: black;
		border: 1px solid #3338;
		font-size: 0.8rem;
		width: fit-content;
	}
	.InquireBtn:hover {
		background-color: var(--primary);
		color: #fff;
		box-shadow: var(--boxShadowsBlur);
		padding: 0.6rem 1.6rem;
		border-radius: 25px;
	}

	.allTierData {
		border: 1px solid #aaa;
	}
	.allTierData > p {
		margin: 1rem;
	}
	.downArrow {
		position: absolute;
		/* height: 1rem; */
		bottom: -1rem;
		left: 50%;
		transform: translateX(-50%);

		width: 0;
		height: 0;
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;

		border-top: 20px solid black;
	}
	.threeBtn {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		background-color: #ddd;
		/* overflow: hidden; */
		margin: 0;
		margin-bottom: 25px;
	}
	.threeBtn > button {
		margin: 0;
		/* background-color: black; */
		width: 33%;
		height: 3rem;

		position: relative;
	}
	.active {
		background-color: black;
		color: white;
	}
	.centered {
		width: 80%;
		text-align: center;
		margin-left: 10%;
	}
	.middleGradient {
		width: 100%;
		height: 100%;
		/* background-color: red; */
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		transform: translateY(40%);
		pointer-events: none;
	}
	.md4 {
		background-image: linear-gradient(0deg, #eee0 20%, var(--primary-grad1) 50%, #eee0);
		/* 4.5 */
	}
	.md5 {
		background-image: linear-gradient(0deg, #eee0 20%, var(--primary-grad1) 50%, #eee0);
	}
	#serviceBox {
		background-color: #eee;
	}
	.ImgBox {
		height: clamp(300px, 100vw, 600px);

		width: 100%;
		position: absolute;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: row-reverse;
	}
	.headerText {
		width: 90%;
		display: flex;
		flex-direction: column;
		/* position: relative; */
		/* margin-top: 1rem; */
	}
	.headerText > p,
	.headerText > h1,
	.headerText > a,
	.headerText > button,
	.headerText > ul {
		margin: 0.5rem 0;
	}
	.absText {
		position: absolute;
		top: 0;
		width: clamp(300px, 60%, 560px);
		margin: 1rem;
		/* padding-bottom: 1rem; */
		/* height: clamp(300px, 65vh, 500px); */
		height: auto;

		max-height: 65vh;
		overflow: hidden;
		overflow-y: scroll;
		display: flex;
		justify-content: center;
		z-index: 1;
		background-color: #fff4;
		border-radius: 6px;
		border: 1px solid #fff7;
		/* box-shadow: var(--boxShadowsBlur); */
		/* border-bottom: 3px solid #000; */
		transition: all 0.3s ease-in-out;
	}
	.absText:hover {
		background-color: #fff;
		border: 1px solid #aaa8;
		box-shadow: var(--boxShadowsBlur);
	}
	img {
		height: 100%;
	}
	.colBox {
		background-color: #ddd;
		box-shadow: var(--boxInsetShadows);
		padding: 3px 9px;
		width: max-content;
		border-radius: 4px;
		color: #000;
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
		font-size: clamp(1.6rem, 2vw, 2.5rem);
		font-family: 'Walkway-Expand-UltraBold';
		letter-spacing: 2px;
	}
	.firstText {
		font-size: 0.6rem;
		font-family: 'Walkway-Black';
		/* word-spacing: normal; */
	}
	p,
	h1,
	button,
	ul {
		margin: 0.3rem 2rem;
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
		height: clamp(500px, 80vh, 900px);
		position: relative;

		margin: 1.3rem 0;
		/* border-top: 1px dotted #3333;
		border-bottom: 1px dotted #3333; */

		/* overflow: hidden; */
		/* background-color: #ddd; */
	}
</style>
