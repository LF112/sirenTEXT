function TEXT(e, t, n) {
	n.d(t, 'a', function () {
		return O
	})
	var r = n('k1fw'),
		a = n('WmNS'),
		i = n.n(a),
		o = n('9og8'),
		u = n('tJVT'),
		c = n('q1tI'),
		s = n.n(c),
		l = n('LvDl'),
		f = n('TSYQ'),
		d = n.n(f),
		p = n('B3ds'),
		h = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(
			''
		),
		v = 'ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ〇口甲乙丙丁戊己庚辛壬癸'.split(
			''
		),
		m = 'あぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺーヾ'.split(
			''
		),
		g = n('GIeP'),
		y = n.n(g),
		b = n('3omt')

	function E(e) {
		return e[Object(l['random'])(0, e.length - 1, !1)]
	}

	function w(e) {
		return ' ' === e || '-' === e || '/' === e || "'" === e
	}

	function _(e) {
		return Object(p['d'])(e) || Object(p['e'])(e) || Object(p['f'])(e)
	}
	var O = function (e) {
		var t = e.content,
			n = e.color,
			a = e.fontSize,
			l = e.fontClass,
			f = void 0 === l ? '' : l,
			g = e.fontStyle,
			O = void 0 === g ? {} : g,
			x = e.expandDuration,
			S = void 0 === x ? 100 : x,
			T = e.expandedHold,
			C = void 0 === T ? 50 : T,
			k = e.flashTimes,
			A = void 0 === k ? 14 : k,
			j = e.flashInterval,
			P = void 0 === j ? 20 : j,
			R = e.charPlaceHolder,
			M = void 0 === R ? '/' : R,
			L = e.delay,
			N = void 0 === L ? 0 : L,
			I = e.onFlashStart,
			D = void 0 === I ? p['g'] : I,
			F = e.onFlashDone,
			U = void 0 === F ? p['g'] : F,
			B = e.rolling,
			V = e.trigger,
			W = Object(c['useState'])(' '),
			G = Object(u['a'])(W, 2),
			H = G[0],
			z = G[1]
		return (
			Object(c['useEffect'])(
				function () {
					var e = !1
					D()
					var n = (t || ' ').toString().split(''),
						r = setTimeout(
							Object(o['a'])(
								i.a.mark(function r() {
									var o, u, c, s, l, f, d
									return i.a.wrap(function (r) {
										while (1)
											switch ((r.prev = r.next)) {
												case 0:
													a(''),
														(o = 0),
														(u = S / n.length),
														(c = i.a.mark(function t(r) {
															var o
															return i.a.wrap(function (t) {
																while (1)
																	switch ((t.prev = t.next)) {
																		case 0:
																			if (!e) {
																				t.next = 2
																				break
																			}
																			return t.abrupt('return', {
																				v: void 0
																			})
																		case 2:
																			return (
																				(o = n[r]),
																				w(o)
																					? a(function (e) {
																							return e + o
																					  })
																					: _(o)
																					? a(function (e) {
																							return e + M + M
																					  })
																					: a(function (e) {
																							return e + M
																					  }),
																				(t.next = 6),
																				Object(p['i'])(u)
																			)
																		case 6:
																		case 'end':
																			return t.stop()
																	}
															}, t)
														})),
														(s = 0)
												case 5:
													if (!(s < n.length)) {
														r.next = 13
														break
													}
													return r.delegateYield(c(s), 't0', 7)
												case 7:
													if (((l = r.t0), 'object' !== typeof l)) {
														r.next = 10
														break
													}
													return r.abrupt('return', l.v)
												case 10:
													s++, (r.next = 5)
													break
												case 13:
													return (r.next = 15), Object(p['i'])(C)
												case 15:
													;(f = {}), (d = '')
												case 17:
													if (d === t.toString() || e) {
														r.next = 25
														break
													}
													return (
														(d = n
															.map(function (e, t) {
																return w(e)
																	? e
																	: t >= o
																	? _(e)
																		? M + M
																		: M
																	: (void 0 === f[t] && (f[t] = A),
																	  f[t]
																			? (f[t]--,
																			  Object(p['d'])(e)
																					? E(v)
																					: Object(p['e'])(e) ||
																					  Object(p['f'])(e)
																					? E(m)
																					: E(h))
																			: e)
															})
															.join('')),
														o++,
														a(d),
														(r.next = 23),
														Object(p['i'])(P)
													)
												case 23:
													r.next = 17
													break
												case 25:
													U()
												case 26:
												case 'end':
													return r.stop()
											}
									}, r)
								})
							),
							N
						)
					return function () {
						;(e = !0), clearTimeout(r)
					}

					function a(t) {
						return !e && (z(t), !0)
					}
				},
				[t]
			),
			s.a.createElement(
				'div',
				{
					className: d()(f, y.a.flashText),
					style: Object(r['a'])(
						Object(r['a'])({}, O),
						{},
						{
							fontSize: a,
							color: n
						}
					)
				},
				s.a.createElement(b['a'], {
					content: H,
					trigger: V,
					rolling: B && H === t.toString()
				})
			)
		)
	}
}
