<template>
	<main>
		<div>
			<TEXT />
		</div>
	</main>
</template>

<script setup>
import TEXT from 'components/text.vue'
</script>

<style lang="less">
*,
body,
html {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	border: 0;
	background: 0 0;
	word-wrap: break-word;
	text-decoration: none;
	-webkit-tap-highlight-color: transparent;
	font-family: Titillium Web, -apple-system, system-ui, BlinkMacSystemFont,
		Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
		Helvetica Neue, sans-serif;
}

body {
	position: relative;
	background: #21252b;
}

a,
span {
	color: hsla(0, 0%, 100%, 0.19);
	text-decoration: none;
	font-weight: lighter;
	font-size: 12px;
	position: relative;
}

main {
	position: relative;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	> div {
		text-align: center;
		min-width: 300px;
		> div {
			margin-top: 15px;
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
}

button {
	position: relative;
	height: 37px;
	color: #7e8a97;
	background: hsla(213deg, 100%, 50%, 2%);
	padding: 5px 24px 5px 24px;
	font-size: 16px;
	line-height: 24px;
	border-radius: 3px;
	font-weight: 500;
	user-select: none;
	cursor: pointer;
	display: flex;
	outline: none;
	align-items: center;
	margin: auto 0;
}

button:before,
button:after,
button > :first-child:before,
button > :first-child:after {
	position: absolute;
	width: 10px;
	height: 10px;
	border-color: #dee5ef;
	border-style: solid;
	content: ' ';
	border-radius: 1px;
}
button:before {
	top: 0;
	left: 0;
	border-width: 2px 0 0 2px;
}
button:after {
	top: 0;
	right: 0;
	border-width: 2px 2px 0 0;
}
button > :first-child:before {
	bottom: 0;
	right: 0;
	border-width: 0 2px 2px 0;
}
button > :first-child:after {
	bottom: 0;
	left: 0;
	border-width: 0 0 2px 2px;
}

button:hover {
	transform: scale(1.06);
}

:not(body) {
	transition: all 0.5s cubic-bezier(0.22, 0.58, 0.12, 0.98);
}
::-webkit-scrollbar {
	width: 6px;
	height: 6px;
	border-radius: 6px;
	background: rgba(0, 0, 0, 0.05);
	-webkit-appearance: none;
}

::-webkit-scrollbar-button,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
	display: none;
	background: 0 0;
}

::-webkit-scrollbar-button,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
	display: none;
	background: 0 0;
}

::-webkit-scrollbar-thumb {
	width: 4px;
	height: 4px;
	border-radius: 6px;
	background-color: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-button,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
	display: none;
	background: 0 0;
}

::-webkit-scrollbar-button,
::-webkit-scrollbar-corner,
::-webkit-scrollbar-track,
::-webkit-scrollbar-track-piece {
	display: none;
	background: 0 0;
}

::selection {
	background: #333;
	color: #fff;
}
</style>
