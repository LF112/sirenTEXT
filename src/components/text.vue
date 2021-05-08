<template>
	<p text ref="aims">Hello World!</p>
	<p text ref="test">Hello World!</p>
	<div>
		<button @click="run">
			重播
			<hr />
		</button>
	</div>
</template>

<script>
export default {
	methods: {
		run() {
			this.sirenAn(this.$refs.aims)
		},
		sirenAn(el, text = '') {
			const context = text == '' ? el.textContent : text
			let Placeholder = ''
			for (let i = 0; i < context.length * 2 + 5; i++)
				Placeholder = Placeholder + '/'
			this.$refs.test.textContent = Placeholder
		}
	}
}
</script>

<style scoped>
[text] {
	color: #e2e4e8;
	font-size: 2em;
	user-select: none;
	white-space: nowrap;
	font-weight: 600;
	letter-spacing: 2px;
}
</style>
