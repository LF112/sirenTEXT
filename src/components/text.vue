<template>
	<p text ref="aims"></p>
	<div>
		<button @click="run">
			重播
			<hr />
		</button>
	</div>
</template>

<script>
export default {
	mounted() {
		this.sirenAn(this.$refs.aims, 'Hello World!')
	},
	methods: {
		run() {
			this.sirenAn(this.$refs.aims, 'Hello World!')
		},
		sirenAn(el, text = '') {
			const randArr = [
				'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(
					''
				),
				'あぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺーヾ'.split(
					''
				),
				'ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ〇口甲乙丙丁戊己庚辛壬癸'.split(
					''
				)
			]

			el.innerHTML = ''

			let SlashIndex = 0
			let content = ''
			let SlashCount = 0

			const Fn1 = () => {
				el.innerHTML += '/'
				if (el.innerHTML.length < text.length) setTimeout(Fn1, 15)
				else {
					content = el.innerHTML.split('')
					SlashIndex = el.innerHTML.length
					setTimeout(Fn2, 100)
				}
			}

			Fn1()

			let Done = false
			let doneCount = 0
			const RSP = text.split('')
			const Fn2 = () => {
				doneCount = 0
				for (let i = 0; SlashCount > i; i++) {
					if (!Done) {
						const IS = randArr[Math.round(Math.random() * 2)]
						content[i] = IS[Math.floor(Math.random() * IS.length)]
					} else if (doneCount < RSP.length) {
						content[i] = RSP[doneCount]
						doneCount++
					} else content[i] = ''
				}
				el.innerHTML = content.join('')
				if (SlashCount < SlashIndex) setTimeout(Fn2, 20)
				else if (!Done) {
					SlashCount = 0
					content = el.innerHTML.split('')
					SlashIndex = el.innerHTML.length

					setTimeout(Fn2, 20)
					Done = true
				}
				SlashCount++
			}
		}
	}
}
</script>

<style scoped>
[text] {
	font-family: 'Geometos', 'Sans-Bold', 'SourceHanSansCN-Bold';
	color: #e2e4e8;
	font-size: 2em;
	user-select: none;
	white-space: nowrap;
	font-weight: 600;
	letter-spacing: 2px;
	text-align: left;
}
</style>
