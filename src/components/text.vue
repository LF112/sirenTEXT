<template>
	<p text ref="aims">Hello World!</p>
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
            const delay = 0 //延迟执行 | 暂停多少毫秒再执行
			
            const An = setTimeout(() => {
                while (1)
                    switch ((r.prev = r.next)) {

                    }
            }, delay)

            console.log(An)
            clearTimeout(An) // 执行前先消除
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
