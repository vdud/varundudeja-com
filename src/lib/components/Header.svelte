<script lang="ts">
	const showMenu = () => {
		const ulList = document.getElementById('ulList') as HTMLUListElement;
		const extendHeader = document.getElementById('extendHeader') as HTMLDivElement;

		if (extendHeader.style.height === '130px') {
			extendHeader.style.height = '90px';
			ulList.style.opacity = '0';
			setTimeout(() => {
				ulList.style.display = 'none';
			}, 200);
		} else {
			extendHeader.style.height = '130px';
			ulList.style.display = 'flex';
			setTimeout(() => {
				ulList.style.opacity = '1';
			}, 200);
		}
	};
</script>

<div class="header">
	<div class="headerh2">
		<a href="/">
			<h2>varun<span style="color:var(--primary); font-family:Roboto;">.</span>dudeja</h2>
		</a>
	</div>
	<div class="headerMenu">
		<nav class="list">
			<ul class="ulList" id="ulList">
				<li>
					<a
						class="aListHeader"
						on:click={() => {
							setTimeout(() => {
								const contactBox = document.getElementById('projectBox');
								contactBox?.scrollIntoView({ behavior: 'smooth' });
							}, 300);
						}}
						href="/">Projects</a
					>
				</li>
				<li>
					<a
						class="aListHeader"
						on:click={() => {
							setTimeout(() => {
								const contactBox = document.getElementById('serviceBox');
								contactBox?.scrollIntoView({ behavior: 'smooth' });
							}, 300);
						}}
						href="/services">Services</a
					>
				</li>
				<li>
					<a
						class="aListHeader"
						on:click={() => {
							setTimeout(() => {
								const contactBox = document.getElementById('blogBox');
								contactBox?.scrollIntoView({ behavior: 'smooth' });
							}, 300);
						}}
						href="/blogs">Blogs</a
					>
				</li>
				<li>
					<a
						class="aListHeader"
						on:click={() => {
							setTimeout(() => {
								const contactBox = document.getElementById('contactBox');
								contactBox?.scrollIntoView({ behavior: 'smooth' });
							}, 300);
						}}
						href="/mytech">My Tech</a
					>
				</li>
			</ul>
		</nav>

		<div class="menuIconOnly">
			<button on:click={showMenu}> <i class="fa fa-bars" /></button>
		</div>
	</div>
</div>

<style>
	.fa-bars {
		font-size: 1.2rem;
	}
	.aListHeader {
		padding: 5px 15px;
		transition: all 0.3s ease-in-out;
		border-radius: 0.2rem;
	}
	.aListHeader:hover {
		background-color: var(--primary);
		color: #fff;
	}
	.ulList {
		display: flex;
		justify-content: space-around;
		list-style: none;
		transition: all 0.3s ease-in-out;
	}
	.headerh2 {
		width: 30%;
		margin-left: 1rem;
		/* border-right: 1px dotted #0005; */
	}
	.headerMenu {
		width: 70%;
		text-align: right;
		margin-right: 1rem;
	}
	.header {
		height: 90px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.menuIconOnly {
		display: none;
	}
	/* .list {
		display: flex;
	} */

	@media screen and (max-width: 768px) {
		.headerh2 {
			width: 50%;
		}
		.menuIconOnly {
			display: block;
		}
		.list {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			margin: 5% 0;
			/* overflow: hidden;
			overflow-x: scroll; */
		}
		.ulList {
			display: none;
			opacity: 0;
			justify-content: space-around;
			margin: 0;
			padding: 0;

			/* width: 1000px; */
		}
	}
</style>
