<script lang="ts">
	import '$lib/assets/app.css';
	import AfterHeader from '../lib/components/AfterHeader.svelte';
	import Header from '../lib/components/Header.svelte';
</script>

<div class="layout">
	<div class="absHello">powered by vercel</div>

	<!-- LayoutBox -->
	<div class="layoutBox">
		<!-- container -->
		<div class="header" id="extendHeader">
			<Header />
		</div>

		<div class="afterHeader">
			<div class="afterHeadeBox afterHeadeBoxLeft">
				<AfterHeader />
			</div>

			<div class="afterHeadeBox afterHeadeBoxRight">
				<slot />
			</div>
		</div>
	</div>
</div>

<style>
	.afterHeadeBoxLeft {
		border-right: 1px solid #000;
		background-color: #eee;
		width: 45%;
	}
	.afterHeadeBoxRight {
		overflow-y: scroll;
		width: 55%;
	}
	.afterHeader {
		display: flex;
		height: calc(100% - 90px);
	}
	/* .afterHeadeBox { */
	/* } */
	.absHello {
		position: absolute;
		bottom: 4%;
		left: 0;
		font-family: 'Walkway-SemiBold';

		width: 100%;
		height: 10%;
		z-index: 1;

		display: flex;
		opacity: 0.7;
		color: #888;
		justify-content: center;
		align-items: end;
	}
	.header {
		height: 90px;
		position: relative;
		border-bottom: 1px solid #000;
		transition: all 0.5s ease-in-out;
	}
	.layoutBox {
		width: 90%;
		height: 80%;
		margin: calc(5% - 2px);
		background-color: #eee;
		/* background-color: rgb(83, 162, 30); */
		overflow: hidden;
		border-radius: 15px;
		border: 2px solid #fff;

		box-shadow: var(--boxShadows);
		z-index: 2;
	}
	.layout {
		height: 100vh;
		background-color: #fff;

		position: relative;

		display: flex;
		justify-content: center;
	}

	@media screen and (max-width: 768px) {
		.absHello {
			align-items: start;
		}
		.afterHeader {
			flex-direction: column;
		}
		.afterHeadeBox {
			height: auto;
		}
		.layoutBox {
			overflow-y: scroll;
		}
		.afterHeadeBox {
			width: 100%;
		}
		.afterHeadeBoxRight {
			overflow-y: visible;
		}
		.afterHeadeBoxLeft {
			border-right: 0;
			/* width: 100%; */
		}
	}
</style>
