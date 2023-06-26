<script lang="ts">
	export let defaultPng = '';
	export let leftSide = '';
	export let RightSide = '';
	let rowReverse = '';
	let whichSide = '';
	let reflected = 0;

	if (leftSide === 'left' && RightSide === '') {
		reflected = -1;
		whichSide = 'right';
		rowReverse = 'row';
	} else {
		reflected = 1;
		whichSide = 'left';
		rowReverse = 'row-reverse';
	}
</script>

<div class="absText" style="{whichSide}:0;">
	<div class="headerText">
		<slot />
	</div>
</div>
<div class="ImgBox" style="flex-direction: {rowReverse}">
	<img
		style="
transform: scaleX({reflected});
-webkit-transform: scaleX({reflected});"
		src={defaultPng}
		alt="default file"
	/>
</div>

<style>
	.ImgBox {
		height: 400px;
		width: 100%;
		display: flex;
	}
	.headerText {
		width: 90%;
		/* margin-top: 1rem; */
	}
	.absText {
		position: absolute;
		top: 0;
		width: clamp(300px, 60%, 600px);
		margin: 1rem;
		/* padding: 1rem 0; */
		height: 350px;
		overflow: hidden;
		overflow-y: scroll;
		display: flex;
		justify-content: center;
		z-index: 1;
		background-color: #3331;
		border-radius: 6px;
		border: 1px solid #3338;
		box-shadow: var(--boxShadowsBlur);
		/* border-bottom: 3px solid #000; */
	}
	img {
		height: 100%;
	}
</style>
