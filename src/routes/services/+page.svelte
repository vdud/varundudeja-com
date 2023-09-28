<script lang="ts">
	import { contactMessage } from '$lib/stores/contactMessage';

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
		content="All the services that I provide, from web design to SEO and digital marketing. Specializing in e-commerce web design and SEO. Boost your online store's visibility and revenue with our tailored solutions."
	/>
</svelte:head>

<div id="serviceBox">
	<br /><br />
	<div class="allHeadersForId">
		<h1>All Services</h1>
	</div>

	<br /><br />

	<p class="centered">
		<span style="opacity: .6;"
			>I offer meticulously tailored packages designed specifically for your unique business needs.</span
		>
		<strong>
			Discover these user-centric services below, thoughtfully designed to benefit businesses of
			every size and type.</strong
		>
	</p>

	<div class="imgDiv im1" id="PortfolioId">
		<div class="middleGradient md4" />

		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->

				<p class="col firstText">For New or Established Businesses,</p>
				<h1 class="secondHeader">Artist</h1>
				<p class="timelineText">TIMELINE: 2/3 WEEKS*</p>
				<p class="descripTxt">
					For emerging stars, put your best foot forward and exhibit your offerings to the world
					through your dynamic portfolio website.
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
		<strong>A portfolio website</strong>
		<span style="opacity: .6;"
			>is a collection of an individual's or a company's work, accomplishments, skills, and
			experiences,
		</span> presented in an organized and visually appealing manner.
	</p>
	<br />
	<p class="centered">
		<strong> Perfect for </strong>
		<span style="opacity: .6;">
			Creative Professionals, Writers and Journalists, Web Developers and Designers, Architects and
			Interior & Fashion Designers, Freelancers and Consultants
		</span>
	</p>

	<br />
	<p class="centered" style="opacity: .8;">
		If you want to do an online business or sell products online which includes a payment system and
		all the legal procedures then you should consider an e-commerce package below
	</p>

	<div class="imgDiv im2" id="EcomId">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">for product based business who wish to sell online,</p>
				<h1 class="secondHeader">Web Entrepreneur</h1>
				<p class="timelineText">TIMELINE: 3/4 WEEKS*</p>
				<p class="descripTxt">
					This package is tailor-made for e-commerce enterprises seeking a distinctive and
					personalized online store. It's designed to captivate their ideal customers, drive
					increased sales, and deliver superior conversion rates.
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
		<strong style="opacity: .6;">An ecommerce website</strong>
		<span style="opacity: .4;">
			is specifically designed for online buying and selling of products or services.
		</span>
	</p>
	<br />
	<p class="centered">
		<strong>A listing website,</strong>
		<span style="opacity: .6;"
			>on the other hand, focuses on providing a comprehensive directory or catalog of various
			items, services, or resources.
		</span>that may or may not include payment system.
	</p>
	<br />

	<div class="imgDiv im2" id="ListingId">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">for creating an online marketplace,</p>
				<h1 class="secondHeader">Real Estate</h1>
				<p class="timelineText">TIMELINE: 3/4 WEEKS*</p>
				<p class="descripTxt">
					This package is designed with real estate agents, hoteliers, and all local listing
					businesses in mind. It empowers them to establish a comprehensive online presence for
					their entire operation.
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

	<p class="centered" style="opacity: .5;">
		A listing website is an online platform that serves as a directory or catalog of various items,
		services, or resources.
	</p>
	<br />
	<p class="centered" style="opacity: .7;">
		<span style="opacity: .6;">While</span> <strong>SEO (Search Engine Optimization)</strong> refers
		to the process of optimizing a website or its content to improve its visibility and ranking on search
		engine result pages (SERPs).
	</p>

	<div class="imgDiv im2" id="SEOId">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">To rank your business higher on Google,</p>
				<h1 class="secondHeader">Get Views by SEO</h1>
				<p class="timelineText">TIMELINE: 2 WEEKS*</p>
				<p class="descripTxt">
					Facing Challenges Ranking Higher on Google? I'll enhance your existing website, ensuring
					it's equipped with all the necessary SEO tools for success!
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

	<p class="centered" style="opacity: .6;">
		The goal of SEO is to increase organic (non-paid) traffic to a website by making it more search
		engine-friendly
	</p>

	<br />

	<p class="centered">
		If you want more than just SEO Optimization then you should consider choosing one of the monthly
		packages that I provide in <strong>Website Maintainance</strong>, <br /> <br />
		<span style="opacity: .7;"
			>which refers to the tasks required to keep your website functioning properly and up to date.</span
		>
	</p>

	<div class="imgDiv im2" id="WebMaintainId">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">Monthly Maintenance for any website,</p>
				<h1 class="secondHeader">Website Engineering</h1>
				<p class="timelineText">TIMELINE: Monthly*</p>
				<p class="descripTxt">
					These are meticulously crafted website maintenance packages designed to cater to your
					specific needs, going beyond just SEO.
				</p>

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
		<span style="opacity: .6;"
			>If you want to improve or optimize your website speed in one time go,</span
		>
		without having monthly maintainance, then you should checkout my
		<strong>Wordpress Speed Optimization</strong> package.
	</p>

	<br />

	<p class="centered">
		Explore my <strong>Design & Branding</strong> Package – it's custom-crafted to elevate your web aesthetics.
	</p>

	<br /><br />
	<div class="imgDiv im2" id="DesignId">
		<div class="middleGradient md5" />
		<div class="absText">
			<div class="headerText">
				<!-- <ImgDiv {value}> -->
				<p class="col firstText">On the go design services,</p>
				<h1 class="secondHeader">Design & Branding</h1>
				<p class="timelineText">TIMELINE: Based on scope*</p>
				<p class="descripTxt">
					Some of our creative offerings go beyond the standard packages, offering a range of
					services that can also be provided individually.
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
		Everything checked out 🧾 still can't make up your mind? or you have goals that only you can
		explain, don't hesitate to book a consultancy call with me.
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
					have several question on how Website, SEO & SMM works? Send a message to book a free
					consultancy call with me
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

	<p class="centered" style="opacity: .8;">
		You're still here? 🤔 I'm sure you have a lot of questions, I've tried to answer most of them.
	</p>
	<br />
	<p class="centered">
		<span style="opacity: .6;">Maybe Checkout my</span>
		<a href="/blogs" style="color: blue;"><strong>Blogs</strong></a> section if you want to start on
		your own.
		<span style="opacity: .6;"
			>Or you can always contact me to get some lessons in coding and web.designing</span
		>
	</p>
	<br />
	<h2 style="text-align: center;">Thank You 🙏🏽</h2>
	<br />
</div>

<style>
	.InquireBtn span {
		padding-bottom: 1rem;
	}
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
