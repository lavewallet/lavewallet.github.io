webpackJsonp([0], [, , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = {
		headerHeight: "75px",
		paddingOut: "50px",
		paddingOutMobile: "15px",
		paddingContent: "40px",
		paddingContentMobile: "25px",
		leftColumn: "250px",
		leftColumnMobile: "300px",
		media: {
			first: "@media screen and (max-width: 1000px)",
			second: "@media screen and (max-width: 850px)",
			third: "@media screen and (max-width: 750px)",
			fourth: "@media screen and (max-width: 500px)",
			fifth: "@media screen and (max-width: 350px)"
		},
		infoColor: {
			red: "#DD0044",
			green: "#1aba6a",
			yellow: "#efa944",
			grey: "#AAAAAA"
		},
		color: {
			background1: "#f3f6f8",
			background2: "#007196",
			background3: "#0789b3",
			background4: "#e5e9eb",
			background5: "#d4dde1",
			background6: "#f6f6f6",
			background7: "#e8ecef",
			background8: "#f7f7f7",
			front1: "#8b9bae",
			front2: "#adb3bb",
			front3: "#5a6168",
			front4: "#a8b5c5",
			front5: "#617991",
			front6: "#8e9499",
			front7: "#a6b3c3",
			disabled: "#dddddd",
			disabled2: "#eeeeee",
			error: "#e71015",
			red: "#e58777",
			red2: "#c83838",
			red3: "#DD0044",
			red4: "#cc0033",
			green1: "#1aba6a",
			black: "#000",
			grey1: "#aaaaaa",
			grey2: "#efefef",
			grey3: "#c8c8c8"
		}
	}
}, , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.LOCALSTORAGE_CUSTOMS = t.LOCALSTORAGE_ASSETSEXPORTED = t.LOCALSTORAGE_ASSETS = t.LOCALSTORAGE_FIAT = t.LOCALSTORAGE_NETWORK = t.recovery_phrase_words = t.minpassword = t.TIMEOUT_BETWEEN_EACH_FAIL_FETCH_FEE = t.TIMEOUT_BETWEEN_EACH_GETBALANCE = t.TIMEOUT_UPDATE_ALL_BALANCES = t.TIMEOUT_FETCH_PRICES_TIMEOUT = t.TIMEOUT_FETCH_PRICES = t.KEYS_TO_REMOVE_WHEN_EXPORTING = t.TESTNET = t.MAINNET = t.NORMAL = t.ERROR = t.ALERT = t.OK = t.TYPE_ERC20 = t.TYPE_COIN = void 0, t.ASSET_LOGO = function(e) {
		return "/static/image/coins/" + e + ".svg"
	};
	var r, o = n(2),
		a = (r = o) && r.__esModule ? r : {
			default: r
		};
	t.TYPE_COIN = "монеты", t.TYPE_ERC20 = "erc20", t.OK = a.default.infoColor.green, t.ALERT = a.default.infoColor.yellow, t.ERROR = a.default.infoColor.red, t.NORMAL = a.default.infoColor.grey, t.MAINNET = 0, t.TESTNET = 1, t.KEYS_TO_REMOVE_WHEN_EXPORTING = ["summary", "balance", "id"], t.TIMEOUT_FETCH_PRICES = 3e4, t.TIMEOUT_FETCH_PRICES_TIMEOUT = 5e3, t.TIMEOUT_UPDATE_ALL_BALANCES = 12e4, t.TIMEOUT_BETWEEN_EACH_GETBALANCE = 500, t.TIMEOUT_BETWEEN_EACH_FAIL_FETCH_FEE = 1e4, t.minpassword = 8, t.recovery_phrase_words = 12, t.LOCALSTORAGE_NETWORK = "network", t.LOCALSTORAGE_FIAT = "fiat", t.LOCALSTORAGE_ASSETS = "assets", t.LOCALSTORAGE_ASSETSEXPORTED = "assetsExported", t.LOCALSTORAGE_CUSTOMS = "customs"
}, , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o = n(7),
		a = n(218),
		i = n(37),
		l = n(11),
		s = n(377),
		d = (r = s) && r.__esModule ? r : {
			default: r
		},
		u = n(27),
		c = n(4);
	var f = Number((0, u.localStorageGet)(c.LOCALSTORAGE_NETWORK)) || c.MAINNET,
		p = (0, o.register)({
			network: f,
			fiat: (0, u.localStorageGet)(c.LOCALSTORAGE_FIAT) || i.USD.symbol,
			assets: {},
			prices: {},
			totalAssets: (0, o.computed)(function() {
				return (0, l.getTotalAssets)(this.assets)
			}),
			balance: (0, o.computed)(function() {
				var e = this,
					t = 0,
					n = void 0;
				this.totalAssets;
				return Object.keys(this.assets).forEach(function(r) {
					(n = e.assets[r]) && (t += (e.prices[n.symbol] || 0) * (n.balance || 0))
				}), t
			}),
			menuOpen: !1,
			sideMenuOpen: !1,
			view: {},
			notifications: {},
			popups: {
				closeSession: {
					open: !1
				}
			}
		});
	(0, d.default)(p), (0, a.createLocation)((0, u.locationHref)(), p, "location"), t.default = p
}, function(e, t, n) {
	"use strict";
	var r = n(27).localStorageGet,
		o = n(4),
		a = o.MAINNET,
		i = (o.TESTNET, o.LOCALSTORAGE_NETWORK),
		l = {};
	t.Coins = l;
	var s = Number(r(i)) || a;
	["BTC", "ETH", "LTC", "ANT", "ZRX", "QTUM", "TRX", "EOS", "OMG", "BNB", "MKR", "SNT", "REP", "SALT", "QASH", "BAT", "GNT", "ETHOS", "FUN", "REQ", "KNC", "DAI"].forEach(function(e) {
		var r = n(220)("./" + e);
		r.setupNetwork(s, r.networks) && (l[e] = r, t[e] = r)
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Show = t.Route = t.Router = t.routes = t.group = void 0;
	var r, o = n(369),
		a = function(e) {
			if (e && e.__esModule) return e;
			var t = {};
			if (null != e)
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
			return t.default = e, t
		}(n(376)),
		i = n(8),
		l = (r = i) && r.__esModule ? r : {
			default: r
		};
	var s = t.group = (0, o.createGroup)();
	t.routes = {
		home: s.add((0, o.createRoute)("/")),
		settings: s.add((0, o.createRoute)("/settings")),
		add: s.add((0, o.createRoute)("/add(?filter=:filter)")),
		custom: s.add((0, o.createRoute)("/custom/:type")),
		create: s.add((0, o.createRoute)("/create/:symbol(/:step)")),
		import: s.add((0, o.createRoute)("/import/:symbol")),
		asset: s.add((0, o.createRoute)("/asset/:asset_id")),
		assetSend: s.add((0, o.createRoute)("/asset/:asset_id/send(/:step)")),
		assetAddresses: s.add((0, o.createRoute)("/asset/:asset_id/addresses")),
		assetExport: s.add((0, o.createRoute)("/asset/:asset_id/export")),
		assetChangepassword: s.add((0, o.createRoute)("/asset/:asset_id/changepassword")),
		assetDelete: s.add((0, o.createRoute)("/asset/:asset_id/delete")),
		assetSettings: s.add((0, o.createRoute)("/asset/:asset_id/settings"))
	}, t.Router = function(e) {
		return void 0 === e.location && (e.location = l.default.location), void 0 === e.group && (e.group = s), a.Router(e)
	}, t.Route = a.Route, t.Show = a.Show
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getTotalAssets = function(e) {
		return Object.keys(e).length
	}, t.convertBalance = function(e, t) {
		return y(e) * (t || 0)
	}, t.getAssetId = function(e) {
		for (var t in d.default.assets)
			if (d.default.assets[t] === e) return t
	}, t.getAsset = m, t.getAssetsAsArray = b, t.isAssetRegisteredById = v, t.isAssetRegistered = function(e, t) {
		return b().some(function(n) {
			return n.symbol === e && n.addresses.includes(t)
		})
	}, t.isAssetRegisteredBySeed = function(e, t) {
		var n = (0, f.sha3)(t).toString("hex");
		return b().some(function(t) {
			return t.symbol === e && t.hasOwnProperty("seed") && t.seed.hash === n
		})
	}, t.getAddresses = function(e) {
		var t = m(e);
		return i.Coins[t.symbol].multiaddress ? t.addresses.slice(0) : [t.address]
	}, t.isAssetWithPrivateKeyOrSeed = function(e) {
		return g(e) || w(e)
	}, t.isAssetWithPrivateKey = g, t.isAssetWithSeed = w, t.getSymbolsFromAssets = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.default.assets,
			t = Object.keys(e).map(function(t) {
				return e[t].symbol
			});
		return t.filter(function(e, n) {
			return t.indexOf(e) == n
		})
	}, t.isValidAsset = function(e) {
		try {
			var t = e.symbol,
				n = e.address,
				r = "string" == typeof n ? n : n[n.length - 1];
			return i.Coins[t].isAddress(r)
		} catch (e) {
			return !1
		}
	}, t.generateDefaultAsset = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			t = {
				label: "",
				balance: "0",
				printed: !1,
				summary: {}
			};
		t = o.util.merge(t, e), (!Array.isArray(t.addresses) || t.addresses.length < 1) && (t.addresses = [e.address]);
		return t
	}, t.generateDefaultBackup = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			t = {
				date: (0, l.now)(),
				network: d.default.network,
				v: c.version.split(".").slice(0, 2).join("."),
				assets: {},
				customs: {}
			};
		return o.util.merge(t, e)
	}, t.formatCurrency = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.default.fiat;
		return a.Fiats[n].format(e, t)
	}, t.getNextAssetId = function(e) {
		var t = e.symbol,
			n = e.addresses[0],
			r = t + "-" + n,
			o = 1,
			a = r;
		for (; d.default.assets.hasOwnProperty(a);) a = r + "-" + o++;
		return a
	}, t.getPrice = y, t.getPrivateKey = function(e, t, n) {
		var r = m(e),
			o = n || r.address,
			a = i.Coins[r.symbol];
		return w(e) ? a.decryptPrivateKeyFromSeed(o, r.addresses, r.seed, t) : a.decryptPrivateKey(o, r.private_key, t)
	}, t.getPrivateKeys = function(e, t) {
		var n = m(e),
			r = i.Coins[n.symbol],
			o = w(e),
			a = n.seed,
			l = n.addresses.slice(0);
		if (o) {
			var s = r.decryptSeed(l, a, t),
				d = r.getWalletsFromSeed({
					seed: s,
					count: l.length
				}),
				u = l.map(function(e, t) {
					return void 0 === d.find(function(t) {
						return t.address === e
					}) ? void 0 : d[t].private_key
				});
			if (u.includes(void 0)) {
				var c = r.getWalletsFromSeed({
						seed: s,
						count: l.length,
						segwit: !1
					}),
					f = c.map(function(e) {
						return e.address
					});
				u = u.map(function(e, t) {
					var n = l[t],
						r = f.indexOf(n);
					return void 0 === e ? r > -1 ? c[r].private_key : void 0 : e
				})
			}
			return u
		}
		return l.map(function(e) {
			return r.decryptPrivateKey(n.address, n.private_key, t)
		})
	}, t.getSeed = function(e, t) {
		var n = m(e);
		return i.Coins[n.symbol].decryptSeed(n.addresses, n.seed, t)
	}, t.getLabelOrAddress = function(e) {
		"string" == typeof e && (e = m(e));
		var t = i.Coins[e.symbol];
		return e.label.length > 0 ? e.label : t.formatAddress(e.address)
	}, t.getReusableSeeds = function(e) {
		var t = [],
			n = {},
			r = b().filter(function(e) {
				return e.hasOwnProperty("seed")
			});
		for (var o in r.forEach(function(e) {
				var t = e.seed.hash;
				n.hasOwnProperty(t) || (n[t] = []), n[t].push(e)
			}), n) {
			var a = n[o];
			0 === a.filter(function(t) {
				return t.symbol === e
			}).length && t.push(a)
		}
		return t
	}, t.getParamsFromLocation = function() {
		return u.group.getParams(d.default.location)
	}, t.getRouteFromLocation = function() {
		return u.group.getRoute(d.default.location)
	}, t.getAssetsBySymbol = function(e) {
		return b().filter(function(t) {
			return t.symbol === e
		})
	}, t.isBackupAssetsExported = function() {
		return "true" === (0, p.localStorageGet)(h.LOCALSTORAGE_ASSETSEXPORTED, d.default.network)
	};
	var r, o = n(7),
		a = n(37),
		i = n(9),
		l = n(187),
		s = n(8),
		d = (r = s) && r.__esModule ? r : {
			default: r
		},
		u = n(10),
		c = n(190),
		f = n(61),
		p = n(27),
		h = n(4);

	function m(e) {
		return d.default.assets[e]
	}

	function b() {
		var e = [];
		return Object.keys(d.default.assets).forEach(function(t) {
			e.push(d.default.assets[t])
		}), e
	}

	function v(e) {
		return d.default.assets.hasOwnProperty(e)
	}

	function g(e) {
		return v(e) && d.default.assets[e].hasOwnProperty("private_key")
	}

	function w(e) {
		return v(e) && d.default.assets[e].hasOwnProperty("seed")
	}

	function y(e) {
		return d.default && d.default.prices && d.default.prices[e] ? d.default.prices[e] : 0
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.createERC20 = function(e) {
		var t = e.symbol,
			n = e.name,
			f = e.color,
			p = e.contract_address,
			h = e.labels,
			m = e.coin_decimals,
			b = void 0 === m ? 18 : m,
			v = e.price_decimals,
			g = void 0 === v ? 2 : v,
			w = e.logo,
			y = void 0 === w ? (0, a.ASSET_LOGO)(t) : w,
			x = e.custom,
			_ = void 0 !== x && x,
			E = e.networks_availables,
			k = void 0 === E ? [a.MAINNET, a.TESTNET] : E,
			C = {},
			O = Math.pow(10, b);
		return {
			setupNetwork: function(e, t) {
				var n = t[e];
				return void 0 !== n && (e, c = n.api_url, u = n.url, n.url_myetherapi, !0)
			},
			urlInfo: function(e) {
				return u + "/token/" + p + "?a=" + e
			},
			format: function(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
				return (0, r.formatCoin)(e, n, t)
			},
			fetchBalance: function(e) {
				return (0, s.fetchBalance)(e, p, O)
			},
			discoverAddress: function(e) {
				var t = e.seed,
					n = e.index;
				return (0, s.discoverAddress)({
					seed: t,
					contract_address: p,
					satoshis: O,
					index: n
				})
			},
			discoverWallet: function(e, t) {
				var n = e.seed;
				return (0, s.discoverWallet)({
					seed: n,
					contract_address: p,
					satoshis: O
				}, t)
			},
			fetchTxs: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], e[0]),
					a = p + n,
					u = (0, d.addHexPrefix)((0, i.padLeft)((0, l.removeHexPrefix)(n), 64)),
					f = [],
					h = t > 0 && void 0 !== C[a] ? Promise.resolve(C[a]) : fetch(c + "?module=logs&action=getLogs&fromBlock=0&toBlock=latest&address=" + p + "&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&topic1=" + u + "&apikey=" + s.api_key).then(function(e) {
						return e.json()
					}).then(function(e) {
						return f = f.concat(e.result)
					}).then(function() {
						return fetch(c + "?module=logs&action=getLogs&fromBlock=0&toBlock=latest&address=" + p + "&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&topic2=" + u + "&apikey=" + s.api_key)
					}).then(function(e) {
						return e.json()
					}).then(function(e) {
						return f.concat(e.result)
					});
				return h.then(function(e) {
					C[a] = e;
					var t = {
						totalTxs: e.length,
						txs: []
					};
					return e.forEach(function(e) {
						var n = {
							txid: e.transactionHash,
							fees: (0, r.bigNumber)((0, l.hexToDec)(e.gasUsed)),
							time: (0, l.hexToDec)(e.timeStamp),
							value: (0, r.bigNumber)((0, l.hexToDec)((0, l.removeHexPrefix)(e.data))).div(O).toFixed()
						};
						e.topics[1].toLowerCase() === u && (n.value = "-" + n.value), t.txs.push(n)
					}), (0, o.sortBy)(t.txs, "-time"), t
				})
			},
			createSimpleTx: function(e) {
				return e.data = (0, s.getDataContractMethodCall)("transfer(address,uint256)", e.to_address, (0, r.bigNumber)(e.amount).times((0, r.bigNumber)(10).pow(b)).toString(16)), e.gas_limit = 13e4, e.to_address = p, e.amount = (0, r.bigNumber)(0), (0, s.createSimpleTx)(e)
			},
			fetchRecomendedFee: function(e) {
				return e.gas_limit = 13e4, (0, s.fetchRecomendedFee)(e)
			},
			networks: s.networks,
			networks_availables: k,
			custom: _,
			logo: y,
			symbol: t,
			name: n,
			color: f,
			labels: h,
			type: a.TYPE_ERC20,
			symbol_fee: s.symbol,
			derivation_path: s.derivation_path,
			coin_decimals: b,
			price_decimals: g,
			satoshis: O,
			removeHexPrefix: l.removeHexPrefix,
			isAddress: s.isAddress,
			isPrivateKey: s.isPrivateKey,
			getAddressFromPrivateKey: s.getAddressFromPrivateKey,
			ascii: s.ascii,
			encryptPrivateKey: s.encryptPrivateKey,
			decryptPrivateKey: s.decryptPrivateKey,
			encryptSeed: s.encryptSeed,
			decryptSeed: s.decryptSeed,
			decryptPrivateKeyFromSeed: s.decryptPrivateKeyFromSeed,
			decryptWalletFromSeed: s.decryptWalletFromSeed,
			getSendProviders: s.getSendProviders,
			urlDecodeTx: s.urlDecodeTx,
			getWalletFromSeed: s.getWalletFromSeed,
			getWalletsFromSeed: s.getWalletsFromSeed,
			formatAddress: s.formatAddress,
			cutDecimals: s.cutDecimals,
			urlInfoTx: s.urlInfoTx,
			multiaddress: s.multiaddress,
			changeaddress: s.changeaddress,
			getNextWalletFromSeed: s.getNextWalletFromSeed
		}
	}, t.ethCall = f, t.getNameContract = function(e) {
		var t = (0, s.getDataContractMethodCall)("name()");
		return f(e, t).then(function(e) {
			return e ? (0, l.decodeSolidityString)(e) : null
		})
	}, t.getSymbolContract = function(e) {
		var t = (0, s.getDataContractMethodCall)("symbol()");
		return f(e, t).then(function(e) {
			return e ? (0, l.decodeSolidityString)(e) : null
		})
	}, t.getDecimalsContract = function(e) {
		var t = (0, s.getDataContractMethodCall)("decimals()");
		return f(e, t).then(function(e) {
			return e ? (0, l.hexToDec)(e) : null
		})
	}, t.getSupplyContract = function(e) {
		var t = (0, s.getDataContractMethodCall)("totalSupply()");
		return f(e, t).then(function(e) {
			return e ? (0, l.hexToDec)(e) : null
		})
	}, t.isErc20Contract = function(e) {
		return fetch(c + "?module=contract&action=getabi&address=" + e).then(function(e) {
			return e.json()
		}).then(function(e) {
			return "1" === e.status
		})
	};
	var r = n(18),
		o = n(41),
		a = n(4),
		i = n(118),
		l = n(119),
		s = n(38),
		d = n(38),
		u = void 0,
		c = void 0;

	function f(e, t) {
		return fetch(c + "?module=proxy&action=eth_call&to=" + e + "&data=" + t).then(function(e) {
			return e.json()
		}).then(function(e) {
			return e.error || "0x" === e.result ? null : (0, l.removeHexPrefix)(e.result)
		})
	}
}, , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		l = (r = ["\n    box-sizing: content-box;\n    ", " ", ";\n"], o = ["\n    box-sizing: content-box;\n    ", " ", ";\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		s = u(n(0)),
		d = u(n(1));

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var c = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, s.default.Component), i(t, [{
			key: "render",
			value: function() {
				var e = this.props,
					t = {},
					n = "",
					r = void 0,
					o = void 0,
					i = void 0;
				return Object.keys(e).forEach(function(a) {
					a in document.body.style ? n += a + ": " + e[a] + ";\n" : (r = a.indexOf("_")) && r > -1 && (i = a.substr(0, r), o = Number(a.substr(r + 1)), i in document.body.style && (void 0 === t[o] && (t[o] = ""), t[o] += i + ": " + e[a] + ";\n"))
				}), Object.keys(t).forEach(function(e) {
					void 0 !== basic.media[e] && (n += "\n        @media " + basic.media[e] + " {\n          " + t[e] + "\n        }")
				}), s.default.createElement(f, a({
					css: n
				}, e), e.children)
			}
		}]), t
	}();
	t.default = c;
	var f = d.default.div(l, function(e) {
		return e.css
	}, function(e) {
		return e.extendTheme
	})
}, , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.fetchPrices = void 0, t.setHref = g, t.createAsset = function(e, t, n, o) {
		var a = (0, r.collect)(),
			i = (0, b.generateDefaultAsset)({
				type: e,
				symbol: t,
				address: n,
				addresses: o
			}),
			l = (0, b.getNextAssetId)(i);
		return m.default.assets[l] = i, y(), x(!1), D("createAsset", t), a.emit(), m.default.assets[l]
	}, t.changeAddress = function(e, t) {
		(0, b.getAsset)(e).address = t, y(), I(e), N(e)
	}, t.addAddress = function(e, t) {
		(0, b.getAsset)(e).addresses.push(t), y()
	}, t.setPrivateKey = function(e, t, n) {
		return w(e, t, n, !1)
	}, t.setSeed = function(e, t, n) {
		return w(e, t, n, !0)
	}, t.setPrivateKeyOrSeed = w, t.assetDelete = function(e) {
		var t = (0, r.collect)();
		delete m.default.assets[e], y(), x(!1), t.emit()
	}, t.saveAssetsLocalstorage = y, t.setAssetsExported = x, t.exportBackup = function(e) {
		var t = (0, b.generateDefaultBackup)();
		t.assets = JSON.parse(JSON.stringify(m.default.assets, function(e, t) {
			return "addresses" === (e = e.toLocaleLowerCase()) ? Array.isArray(t) && t.length > 1 ? t : void 0 : a.KEYS_TO_REMOVE_WHEN_EXPORTING.indexOf(e) > -1 ? void 0 : t
		})), t.customs = (0, f.jsonParse)((0, p.localStorageGet)(a.LOCALSTORAGE_CUSTOMS, m.default.network)), (0, p.downloadFile)({
			data: btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
			a: e,
			name: "YOU_MUST_RENAME_THIS_FOR_SECURITY"
		}), x(!0)
	}, t.importBackupFromFile = function() {
		var e = "true" === (0, p.localStorageGet)(a.LOCALSTORAGE_ASSETSEXPORTED, m.default.network);
		m.default.totalAssets > 0 && !e ? (m.default.popups.closeSession.confirm = function() {
			m.default.popups.closeSession.open = !1, _()
		}, m.default.popups.closeSession.cancel = function() {
			m.default.popups.closeSession.open = !1
		}, m.default.popups.closeSession.open = !0) : _()
	}, t.openImportAssetsFromFile = _, t.importBackup = E, t.closeSession = function() {
		var e = "true" === (0, p.localStorageGet)(a.LOCALSTORAGE_ASSETSEXPORTED, m.default.network);
		m.default.totalAssets > 0 && (e ? k() : (m.default.popups.closeSession.confirm = k, m.default.popups.closeSession.cancel = function() {
			m.default.popups.closeSession.open = !1
		}, m.default.popups.closeSession.open = !0))
	}, t.changeNetwork = function(e) {
		(0, p.localStorageSet)(a.LOCALSTORAGE_NETWORK, e), (0, p.locationHref)("/")
	}, t.forceLoseSession = k, t.addNotification = O, t.deleteNotification = P, t.changeFiat = function(e) {
		var t = (0, r.collect)();
		m.default.fiat = e, (0, p.localStorageSet)(a.LOCALSTORAGE_FIAT, e), B(), t.emit()
	}, t.updatePrice = S, t.showNotConnectionNotification = j, t.setAssetLabel = function(e, t) {
		var n = (0, r.collect)();
		m.default.assets[e].label = t, n.emit()
	}, t.updateBalance = F, t.createCustomERC20 = A, t.saveCustomLocalstorage = R, t.deleteCustomERC20 = function(e) {
		var t = (0, f.jsonParse)((0, p.localStorageGet)(a.LOCALSTORAGE_CUSTOMS, m.default.network));
		delete t[e], delete l.Coins[e], (0, p.localStorageSet)(a.LOCALSTORAGE_CUSTOMS, JSON.stringify(t), m.default.network)
	}, t.fetchWrapper = z, t.fetchAllBalances = M, t.fetchBalance = function(e) {
		var t = (0, b.getAsset)(e);
		if (void 0 !== t) return z(l.Coins[t.symbol].fetchBalance(t.address)).then(function(t) {
			return F(e, t), t
		})
	}, t.fetchFullBalance = I, t.fetchTxs = N, t.sendEventToAnalytics = D;
	v(n(0));
	var r = n(7),
		o = n(61),
		a = (v(n(2)), n(4)),
		i = n(56),
		l = n(9),
		s = n(12),
		d = n(41),
		u = n(380),
		c = n(18),
		f = n(108),
		p = n(27),
		h = n(10),
		m = v(n(8)),
		b = n(11);

	function v(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function g(e) {
		var t = (0, r.collect)();
		m.default.location.href = e, m.default.sideMenuOpen = !1, t.emit()
	}

	function w(e, t, n, a) {
		var i = (0, b.getAsset)(e),
			s = l.Coins[i.symbol][a ? "encryptSeed" : "encryptPrivateKey"],
			d = (0, r.set)(i, a ? "seed" : "private_key", s(t, n), {
				deep: !1
			});
		a && (d.hash = (0, o.sha3)(t).toString("hex")), y(), x(!1)
	}

	function y() {
		var e = JSON.stringify(m.default.assets, function(e, t) {
			return "state" === (e = e.toLocaleLowerCase()) ? void 0 : t
		});
		(0, p.localStorageSet)(a.LOCALSTORAGE_ASSETS, e, m.default.network)
	}

	function x(e) {
		(0, p.localStorageSet)(a.LOCALSTORAGE_ASSETSEXPORTED, e, m.default.network)
	}

	function _() {
		(0, p.openFile)(function(e) {
			(0, p.readFile)(e, function(e) {
				return E(e)
			})
		})
	}

	function E(e) {
		try {
			var t = JSON.parse(decodeURIComponent(escape(atob(e))));
			if (void 0 !== t.v && void 0 !== t.network || (t = (0, b.generateDefaultBackup)({
					assets: t
				})), t.network !== m.default.network) return O("You are in " + (m.default.network === a.MAINNET ? "mainnet" : "testnet") + " mode and this backup is from " + (t.network === a.MAINNET ? "mainnet" : "testnet") + ".", a.ERROR);
			var n = t.customs;
			for (var o in n) void 0 === l.Coins[o] && n[o].type === a.TYPE_ERC20 && A(n[o]);
			var i = t.assets;
			for (var s in i)(0, b.isValidAsset)(i[s]) && (i[s] = (0, b.generateDefaultAsset)(i[s]));
			var d = (0, b.getTotalAssets)(i);
			if (d > 0) {
				var u = (0, r.collect)();
				m.default.assets = i, g(h.routes.home()), O("You have imported " + d + " Assets", a.OK), y(), x(!0), M(), B(), u.emit()
			} else O("We couldn't find any Asset to Import on this JSON file", a.ERROR)
		} catch (e) {
			console.error(e), O("We couldn't parse the JSON file", a.ERROR)
		}
	}

	function k() {
		x(!0), (0, p.localStorageRemove)(a.LOCALSTORAGE_ASSETS, m.default.network), (0, p.locationHref)("/")
	}
	var C = 0;

	function O(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.OK,
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6e3;
		return m.default.notifications[C] = {
			id: C,
			text: e,
			color: t,
			timeout: n
		}, C++
	}

	function P(e) {
		delete m.default.notifications[e]
	}

	function S(e, t) {
		var n = (0, r.collect)();
		m.default.prices[e] = t, (0, p.localStorageSet)(e, (0, c.decimals)(t)), n.emit()
	}
	var T = void 0;

	function j(e) {
		e && void 0 === T ? T = O("Seems like you don't have internet connection", a.NORMAL, null) : e || void 0 === T || (P(T), T = void 0)
	}

	function F(e, t) {
		(0, b.getAsset)(e).balance = t
	}

	function A(e) {
		var t = e.symbol;
		e.type = a.TYPE_ERC20, e.custom = !0, l.Coins[t] = (0, s.createERC20)(e), R(e)
	}

	function R(e) {
		var t = (0, f.jsonParse)((0, p.localStorageGet)(a.LOCALSTORAGE_CUSTOMS, m.default.network));
		t[e.symbol] = e, (0, p.localStorageSet)(a.LOCALSTORAGE_CUSTOMS, JSON.stringify(t), m.default.network)
	}

	function z(e) {
		return e.then(function(e) {
			return j(!1), e
		}).catch(function(e) {
			return j(!0), Promise.reject(e)
		})
	}

	function M() {
		(0, b.getAssetsAsArray)().forEach(function(e, t) {
			setTimeout(function() {
				return I((0, b.getAssetId)(e))
			}, t * a.TIMEOUT_BETWEEN_EACH_GETBALANCE)
		}), setTimeout(M, a.TIMEOUT_UPDATE_ALL_BALANCES)
	}

	function I(e) {
		var t = (0, b.getAsset)(e);
		if (void 0 !== t) {
			var n = l.Coins[t.symbol],
				r = (0, b.getAddresses)(e).map(function(e) {
					return n.fetchBalance(e)
				});
			return z((0, i.resolveAll)(r)).then(function(t) {
				var n = t.reduce(function(e, t) {
					return e.add(t)
				}, (0, c.bigNumber)(0)).toFixed();
				return F(e, n), n
			})
		}
	}

	function N(e) {
		var t = Array.prototype.slice.call(arguments, 1),
			n = (0, b.getAsset)(e);
		if (void 0 !== n) {
			var o = l.Coins[n.symbol];
			return t.unshift((0, b.getAddresses)(e)), n.summary.fetching = !0, z(o.fetchTxs.apply(this, t)).then(function(e) {
				var t = (0, r.collect)();
				n.summary.fetching = !1, n.summary.totalTxs = e.totalTxs, n.summary.txs = e.txs, t.emit()
			}).catch(function(e) {
				n.summary.fetching = !1
			})
		}
	}
	M();
	var L, B = t.fetchPrices = (L = void 0, function() {
		clearTimeout(L);
		var e = (0, b.getSymbolsFromAssets)();
		e.length > 0 && (0, u.getAllPrices)(e, m.default.fiat, a.TIMEOUT_FETCH_PRICES_TIMEOUT).then(function(t) {
			e.forEach(function(e) {
				t[e].length > 0 && S(e, (0, d.median)(t[e]))
			}), L = setTimeout(B, a.TIMEOUT_FETCH_PRICES)
		})
	});

	function D() {
		if (m.default.network === a.MAINNET && "function" == typeof ga && 8 === (0, p.locationHref)().indexOf("coinfy.com")) {
			var e = Array.prototype.slice.call(arguments, 0);
			e.unshift("отправить", "получить"), ga.apply(this, e)
		}
	}
	B()
}, , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
		return typeof e
	} : function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	};
	t.decimals = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
		return Number(e).toFixed(t)
	}, t.limitDecimals = l, t.round = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			n = Math.pow(10, t);
		return Math.round(e * n) / n
	}, t.numberWithSeparation = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",";
		return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t)
	}, t.parseNumberAsString = function(e) {
		return (e = s(e)).isNaN() ? "0" : e.toFixed()
	}, t.padLeftEven = function(e) {
		return e = e.length % 2 != 0 ? "0" + e : e
	}, t.bigNumber = s, t.getRandomArbitrary = function(e, t) {
		return Math.round(Math.random() * (t - e) + e)
	}, t.formatCoin = function(e, t, n) {
		var o = void 0 === e ? "undefined" : r(e);
		"number" != o && "string" != o && (e = "0");
		return l(e, t) + " " + n
	};
	var o, a = n(219),
		i = (o = a) && o.__esModule ? o : {
			default: o
		};

	function l(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
			n = String(e),
			r = n.indexOf("."),
			o = n.length - n.indexOf(".") - 1;
		return -1 === r || o < t ? n : n.substr(0, r + (t > 1 ? t + 1 : 0))
	}

	function s(e) {
		return new i.default(String(e))
	}
	i.default.config({
		ERRORS: !1
	})
}, , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.SubLabel = t.Label = void 0;
	var r = s(["\n    font-weight: 600;\n    margin-bottom: 0px;\n    line-height: 20px;\n    color: ", ";\n    font-size: ", ";\n"], ["\n    font-weight: 600;\n    margin-bottom: 0px;\n    line-height: 20px;\n    color: ", ";\n    font-size: ", ";\n"]),
		o = s(["\n    color: ", ";\n    font-size: 12px;\n    line-height: 15px;\n"], ["\n    color: ", ";\n    font-size: 12px;\n    line-height: 15px;\n"]),
		a = l(n(1)),
		i = l(n(2));

	function l(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	t.Label = a.default.label(r, i.default.color.front3, function(e) {
		return e.size || "15px"
	}), t.SubLabel = a.default.div(o, i.default.color.front2)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.FormFieldButtonRight = t.FormFieldButtonLeft = t.FormFieldButtons = t.FormFieldRight = t.FormFieldLeft = void 0;
	var r = p(["\n    margin-bottom: 30px;\n    & > span {\n        display: block;\n        clear: both;\n    }\n"], ["\n    margin-bottom: 30px;\n    & > span {\n        display: block;\n        clear: both;\n    }\n"]),
		o = p(["\n    float: left;\n    width: calc(40% - 10px);\n    padding-right: 10px;\n    ", " {\n        float: none;\n        width: 100%;\n        padding-right: 0;\n        padding-bottom: 5px;\n    }\n"], ["\n    float: left;\n    width: calc(40% - 10px);\n    padding-right: 10px;\n    ", " {\n        float: none;\n        width: 100%;\n        padding-right: 0;\n        padding-bottom: 5px;\n    }\n"]),
		a = p(["\n    float: left;\n    width: ", ";\n    position: relative;\n    ", " {\n        float: none;\n        width: 100%;\n    }\n"], ["\n    float: left;\n    width: ", ";\n    position: relative;\n    ", " {\n        float: none;\n        width: 100%;\n    }\n"]),
		i = p(["\n    margin-left: 10px;\n    float: right;\n    width: ", ";\n"], ["\n    margin-left: 10px;\n    float: right;\n    width: ", ";\n"]),
		l = p(["\n    float: left;\n    width: ", ";\n"], ["\n    float: left;\n    width: ", ";\n"]),
		s = p(["\n    float: right;\n    width: ", ";\n"], ["\n    float: right;\n    width: ", ";\n"]);
	t.FormField = function(e) {
		var t = e.children;
		return d.default.createElement(h, null, d.default.createElement("div", null, t), d.default.createElement("span", null))
	};
	var d = f(n(0)),
		u = f(n(1)),
		c = f(n(2));

	function f(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function p(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var h = u.default.div(r);
	t.FormFieldLeft = u.default.div(o, c.default.media.fourth), t.FormFieldRight = u.default.div(a, function(e) {
		return e.width || "60%"
	}, c.default.media.fourth), t.FormFieldButtons = u.default.div(i, function(e) {
		return e.width || "auto"
	}), t.FormFieldButtonLeft = u.default.div(l, function(e) {
		return e.width || "auto"
	}), t.FormFieldButtonRight = u.default.div(s, function(e) {
		return e.width || "auto"
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		o = c(["\n    position: relative;\n"], ["\n    position: relative;\n"]),
		a = c(["\n    ", " border: 1px solid ", ";\n\n    background: ", ";\n\n\n\n    padding: ", ";\n    outline: none;\n    font-family: monospace;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05) inset;\n    box-sizing: border-box;\n    text-align: ", ";\n\n    font-weight: bold;\n    font-size: 15px;\n    color: ", ";\n    letter-spacing: 1px;\n\n    animation: ", ";\n\n    @keyframes shake {\n        10%,\n        90% {\n            transform: translate3d(-1px, 0, 0);\n        }\n\n        20%,\n        80% {\n            transform: translate3d(2px, 0, 0);\n        }\n\n        30%,\n        50%,\n        70% {\n            transform: translate3d(-4px, 0, 0);\n        }\n\n        40%,\n        60% {\n            transform: translate3d(4px, 0, 0);\n        }\n    }\n\n    &:focus {\n        box-shadow: none !important;\n        border-color: ", ";\n    }\n    ::-webkit-input-placeholder {\n        /* Chrome */\n        color: rgba(90, 97, 104, 0.4);\n    }\n    :-ms-input-placeholder {\n        /* IE 10+ */\n        color: rgba(90, 97, 104, 0.4);\n    }\n    ::-moz-placeholder {\n        /* Firefox 19+ */\n        color: rgba(90, 97, 104, 0.4);\n        opacity: 1;\n    }\n    :-moz-placeholder {\n        /* Firefox 4 - 18 */\n        color: rgba(90, 97, 104, 0.4);\n        opacity: 1;\n    }\n"], ["\n    ", " border: 1px solid ", ";\n\n    background: ", ";\n\n\n\n    padding: ", ";\n    outline: none;\n    font-family: monospace;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05) inset;\n    box-sizing: border-box;\n    text-align: ", ";\n\n    font-weight: bold;\n    font-size: 15px;\n    color: ", ";\n    letter-spacing: 1px;\n\n    animation: ", ";\n\n    @keyframes shake {\n        10%,\n        90% {\n            transform: translate3d(-1px, 0, 0);\n        }\n\n        20%,\n        80% {\n            transform: translate3d(2px, 0, 0);\n        }\n\n        30%,\n        50%,\n        70% {\n            transform: translate3d(-4px, 0, 0);\n        }\n\n        40%,\n        60% {\n            transform: translate3d(4px, 0, 0);\n        }\n    }\n\n    &:focus {\n        box-shadow: none !important;\n        border-color: ", ";\n    }\n    ::-webkit-input-placeholder {\n        /* Chrome */\n        color: rgba(90, 97, 104, 0.4);\n    }\n    :-ms-input-placeholder {\n        /* IE 10+ */\n        color: rgba(90, 97, 104, 0.4);\n    }\n    ::-moz-placeholder {\n        /* Firefox 19+ */\n        color: rgba(90, 97, 104, 0.4);\n        opacity: 1;\n    }\n    :-moz-placeholder {\n        /* Firefox 4 - 18 */\n        color: rgba(90, 97, 104, 0.4);\n        opacity: 1;\n    }\n"]),
		i = c(["\n    font-size: 10px;\n    text-align: right;\n    color: ", ";\n    font-weight: bold;\n    letter-spacing: 0.3px;\n    /* position: absolute;\n    right: 0;\n    bottom: -14px; */\n"], ["\n    font-size: 10px;\n    text-align: right;\n    color: ", ";\n    font-weight: bold;\n    letter-spacing: 0.3px;\n    /* position: absolute;\n    right: 0;\n    bottom: -14px; */\n"]);
	t.default = function(e) {
		var t = e.invalid && e.error ? l.default.createElement(h, null, e.error) : null;
		return l.default.createElement(f, null, l.default.createElement(p, r({
			type: "text"
		}, e)), t)
	};
	var l = u(n(0)),
		s = u(n(1)),
		d = u(n(2));

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function c(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var f = s.default.div(o),
		p = s.default.input(a, function(e) {
			if (e.width) return "width:" + e.width + ";"
		}, function(e) {
			return e.invalid ? d.default.color.error + " !important" : d.default.color.background4
		}, function(e) {
			return "string" == typeof e.rightIco ? "url('" + e.rightIco + "') no-repeat center right 15px / 18px #fff" : "#fff"
		}, function(e) {
			return e.padding || "10px"
		}, function(e) {
			return e["text-align"] ? e["text-align"] : "left"
		}, function(e) {
			return e.color || "#000"
		}, function(e) {
			return e.invalid ? "shake 0.82s cubic-bezier(.36,.07,.19,.97) both" : "unset"
		}, d.default.color.background3),
		h = s.default.div(i, d.default.color.error)
}, , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\n    color: ", ";\n    background-image: ", ";\n    border: 1px solid\n        ", ";\n    padding: 8px 20px 8px;\n    font-weight: bold;\n    font-size: ", ";\n    display: inline-block;\n    line-height: ", ";\n    cursor: pointer;\n    border-radius: ", ";\n    border-right: ", ";\n    width: ", ";\n    margin: ", ";\n    display: block;\n    outline: none;\n    &:hover {\n        ", ";\n    }\n    &:active {\n        background: ", ";\n    }\n    ", ";\n"], o = ["\n    color: ", ";\n    background-image: ", ";\n    border: 1px solid\n        ", ";\n    padding: 8px 20px 8px;\n    font-weight: bold;\n    font-size: ", ";\n    display: inline-block;\n    line-height: ", ";\n    cursor: pointer;\n    border-radius: ", ";\n    border-right: ", ";\n    width: ", ";\n    margin: ", ";\n    display: block;\n    outline: none;\n    &:hover {\n        ", ";\n    }\n    &:active {\n        background: ", ";\n    }\n    ", ";\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		i = s(n(1)),
		l = s(n(2));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = i.default.button(a, function(e) {
		return e.red ? "#fff" : l.default.color.front5
	}, function(e) {
		return e.red ? "linear-gradient(" + l.default.color.red3 + "," + l.default.color.red4 + ")" : "linear-gradient(#fff," + l.default.color.background1 + ")"
	}, function(e) {
		return e.red ? l.default.color.red4 : l.default.color.background5
	}, function(e) {
		return e["font-size"] ? e["font-size"] : "12px"
	}, function(e) {
		return e["line-height"] ? e["line-height"] : "20px"
	}, function(e) {
		return e["border-radius"] ? e["border-radius"] : "4px"
	}, function(e) {
		return e["border-right"] ? e["border-right"] : "auto"
	}, function(e) {
		return e.width
	}, function(e) {
		return e.margin
	}, function(e) {
		return e.disabled || e.loading ? l.default.color.disabled : e.red ? "\n        background: " + l.default.color.red3 + ";\n    " : "\n        color: " + l.default.color.background3 + ";\n        border-color: " + l.default.color.background3 + ";\n    "
	}, function(e) {
		return e.disabled || e.loading ? l.default.color.disabled : e.red ? l.default.color.red4 : l.default.color.background1
	}, function(e) {
		var t = "";
		return (e.disabled || e.loading) && (t = "\n    pointer-events: none;\n    cursor:default;\n    background-image: none;\n    background-color: " + l.default.color.disabled + ";\n    border-color: " + l.default.color.disabled + " !important;\n    color: " + l.default.color.grey1 + " !important;\n    "), e.loading && (t += "\n    background: url('" + e.loadingIco + "') no-repeat center center / 18px;\n    background-color: " + l.default.color.disabled + ";\n    color: transparent !important;\n    "), t
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
		return typeof e
	} : function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	};
	t.printTemplate = function(e) {
		arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
			n = e,
			r = window.open("about:blank", "_blank");
		r.document.write(n), setTimeout(function() {
			r.print()
		}, t)
	}, t.openUrl = function(e) {
		return window.open(e)
	}, t.selectContentElement = function(e) {
		if (document.selection) {
			var t = document.body.createTextRange();
			t.moveToElementText(e), t.select()
		} else if (window.getSelection) {
			var n = document.createRange();
			n.selectNodeContents(e), window.getSelection().removeAllRanges(), window.getSelection().addRange(n)
		}
	}, t.copyContentSelected = function() {
		document.execCommand("copy")
	}, t.localStorageSet = function(e, t) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.MAINNET;
		return e = n === o.MAINNET ? e : e + "-" + n, window.localStorage.setItem(e, t)
	}, t.localStorageGet = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MAINNET;
		return e = t === o.MAINNET ? e : e + "-" + t, window.localStorage.getItem(e)
	}, t.localStorageRemove = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MAINNET;
		return e = t === o.MAINNET ? e : e + "-" + t, window.localStorage.removeItem(e)
	}, t.openFile = function(e) {
		var t = a();
		t.addEventListener("change", function(n) {
			return i(t).forEach(e)
		}), t.click()
	}, t.createInputFile = a, t.forEachFile = i, t.readFile = function(e, t) {
		var n = new FileReader;
		n.onload = function(e) {
			return t(e.target.result)
		}, n.readAsText(e)
	}, t.downloadFile = function(e) {
		var t = e.data,
			n = e.name,
			r = e.a,
			o = e.filetype,
			a = void 0 === o ? "charset=UTF-8" : o,
			i = void 0 === r,
			l = i ? document.createElement("a") : r,
			s = new Blob([t], {
				type: a
			});
		l.href = URL.createObjectURL(s), l.download = n, i && l.click()
	}, t.addOriginUrl = function(e) {
		"/" !== e[0] && (e = "/" + e);
		return location.origin + e
	}, t.locationHref = function(e) {
		"string" == typeof e && (window.location.href = e);
		return window.location.href
	};
	var o = n(4);

	function a() {
		var e = document.createElement("input");
		e.type = "file", e.style.display = "none", document.body.insertBefore(e, document.body.childNodes[0]);
		return e.addEventListener("change", function t(n) {
			e.removeEventListener("change", t), e.parentNode.removeChild(e)
		}), e
	}

	function i(e, t) {
		var n = [];
		for (var o in e.files) {
			var a = e.files[o];
			null !== a && "object" === (void 0 === a ? "undefined" : r(a)) && n.push(a)
		}
		return n
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.RightContainerMiddle2 = t.RightContainerMiddle = t.RightContent = t.RightHeader = t.RightContainerPadding = t.RightContainerTemplate = t.RightContainer = void 0;
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = h(["\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    margin-left: ", ";\n    box-shadow: inset 4px 0 4px -2px rgba(0, 0, 0, 0.1);\n    &::-webkit-scrollbar {\n        width: 8px;\n        height: 8px;\n    }\n    &::-webkit-scrollbar-thumb {\n        background: ", ";\n        cursor: grab;\n        border-radius: 3px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n\n    & > div {\n        height: 100%;\n        width: 100%;\n    }\n\n    ", " {\n        margin-left: 0;\n        box-shadow: none;\n    }\n"], ["\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    margin-left: ", ";\n    box-shadow: inset 4px 0 4px -2px rgba(0, 0, 0, 0.1);\n    &::-webkit-scrollbar {\n        width: 8px;\n        height: 8px;\n    }\n    &::-webkit-scrollbar-thumb {\n        background: ", ";\n        cursor: grab;\n        border-radius: 3px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n\n    & > div {\n        height: 100%;\n        width: 100%;\n    }\n\n    ", " {\n        margin-left: 0;\n        box-shadow: none;\n    }\n"]),
		a = h(["\n    position: relative;\n    padding: ", ";\n    min-height: 100%;\n    box-sizing: border-box;\n    ", " {\n        padding: ", ";\n    }\n"], ["\n    position: relative;\n    padding: ", ";\n    min-height: 100%;\n    box-sizing: border-box;\n    ", " {\n        padding: ", ";\n    }\n"]),
		i = h(["\n    margin-bottom: ", ";\n    ", " {\n        margin-bottom: ", ";\n    }\n"], ["\n    margin-bottom: ", ";\n    ", " {\n        margin-bottom: ", ";\n    }\n"]),
		l = h([""], [""]),
		s = h(["\n    display: table;\n    width: 100%;\n    height: 100%;\n    & > * {\n        display: table-cell;\n        height: 100%;\n        vertical-align: middle;\n    }\n"], ["\n    display: table;\n    width: 100%;\n    height: 100%;\n    & > * {\n        display: table-cell;\n        height: 100%;\n        vertical-align: middle;\n    }\n"]),
		d = h(["\n    padding-top: 100px;\n    ", " {\n        padding: 0;\n    }\n"], ["\n    padding-top: 100px;\n    ", " {\n        padding: 0;\n    }\n"]),
		u = p(n(0)),
		c = p(n(1)),
		f = p(n(2));

	function p(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function h(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	t.RightContainer = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, u.default.Component), r(t, [{
			key: "scrollTop",
			value: function(e) {
				e && e.base && e.base.scrollTo(0, 0)
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.children;
				return u.default.createElement(m, {
					ref: this.scrollTop
				}, u.default.createElement("div", null, e))
			}
		}]), t
	}();
	var m = t.RightContainerTemplate = c.default.div(o, f.default.leftColumn, f.default.color.background4, f.default.media.first);
	t.RightContainerPadding = c.default.div(a, f.default.paddingContent, f.default.media.second, f.default.paddingContentMobile), t.RightHeader = c.default.div(i, f.default.paddingContent, f.default.media.second, f.default.paddingContentMobile), t.RightContent = c.default.div(l), t.RightContainerMiddle = c.default.div(s), t.RightContainerMiddle2 = c.default.div(d, f.default.media.second)
}, , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = d(["\n    ", " border: 1px solid ", ";\n    background-color: #ffffff;\n    font-weight: 500;\n    outline: none;\n    font-family: monospace;\n    font-size: 14px;\n    color: ", ";\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05) inset;\n    box-sizing: border-box;\n    height: 38px;\n    padding: 5px;\n\n    font-weight: bold;\n    font-size: 15px;\n    color: #000;\n    letter-spacing: 1px;\n"], ["\n    ", " border: 1px solid ", ";\n    background-color: #ffffff;\n    font-weight: 500;\n    outline: none;\n    font-family: monospace;\n    font-size: 14px;\n    color: ", ";\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05) inset;\n    box-sizing: border-box;\n    height: 38px;\n    padding: 5px;\n\n    font-weight: bold;\n    font-size: 15px;\n    color: #000;\n    letter-spacing: 1px;\n"]),
		o = d(["\n    font-size: 10px;\n    text-align: right;\n    color: ", ";\n    font-weight: bold;\n    letter-spacing: 0.3px;\n"], ["\n    font-size: 10px;\n    text-align: right;\n    color: ", ";\n    font-weight: bold;\n    letter-spacing: 0.3px;\n"]);
	t.default = function(e) {
		var t = e.invalid && e.error ? a.default.createElement(c, null, e.error) : null;
		return a.default.createElement("div", null, a.default.createElement(u, e), t)
	};
	var a = s(n(0)),
		i = s(n(1)),
		l = s(n(2));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function d(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var u = i.default.select(r, function(e) {
			if (e.width) return "width:" + e.width + ";"
		}, function(e) {
			return e.invalid ? l.default.color.error + " !important" : l.default.color.background4
		}, l.default.color.front6),
		c = i.default.div(o, l.default.color.error)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\n    margin: 0 auto;\n    width: ", ";\n    ", " {\n        width: auto;\n    }\n"], o = ["\n    margin: 0 auto;\n    width: ", ";\n    ", " {\n        width: auto;\n    }\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		i = s(n(1)),
		l = s(n(2));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = i.default.div(a, function(e) {
		return e.width || "360px"
	}, function(e) {
		return e.media || l.default.media.fourth
	})
}, , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\n    color: ", ";\n    font-size: 35px;\n    font-weight: 900;\n    margin: 0;\n    line-height: 35px;\n    ", " {\n        font-size: 27px;\n        line-height: 27px;\n    }\n"], o = ["\n    color: ", ";\n    font-size: 35px;\n    font-weight: 900;\n    margin: 0;\n    line-height: 35px;\n    ", " {\n        font-size: 27px;\n        line-height: 27px;\n    }\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		i = s(n(1)),
		l = s(n(2));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = i.default.h1(a, l.default.color.black, l.default.media.second)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Fiats = t.SGD = t.AUD = t.CAD = t.CNY = t.INR = t.JPY = t.GBP = t.EUR = t.USD = void 0;
	var r = n(18),
		o = t.USD = {
			symbol: "USD",
			name: "US Dollar",
			ascii: "$",
			format: function(e, t, n) {
				return "$" + (0, r.numberWithSeparation)((0, r.decimals)(e, t), n)
			}
		},
		a = t.EUR = {
			symbol: "EUR",
			name: "Euro",
			ascii: "€",
			format: function(e, t, n) {
				return "€" + (0, r.numberWithSeparation)((0, r.decimals)(e, t), n)
			}
		},
		i = t.GBP = {
			symbol: "GBP",
			name: "British Pound",
			ascii: "£",
			format: function(e, t, n) {
				return "£" + (0, r.numberWithSeparation)((0, r.decimals)(e, t), n)
			}
		},
		l = t.JPY = {
			symbol: "JPY",
			name: "Japanese Yen",
			ascii: "¥",
			format: function(e, t, n) {
				return "¥" + (0, r.numberWithSeparation)((0, r.decimals)(e, t), n)
			}
		},
		s = t.INR = {
			symbol: "INR",
			name: "Indian Rupee",
			ascii: "₹",
			format: function(e, t, n) {
				return "₹" + (0, r.numberWithSeparation)((0, r.decimals)(e, t), n)
			}
		},
		d = t.CNY = {
			symbol: "CNY",
			name: "Chinese Yuan Renminbi",
			ascii: "¥",
			format: function(e, t, n) {
				return "¥" + (0, r.numberWithSeparation)((0, r.decimals)(e, t), n)
			}
		},
		u = t.CAD = {
			symbol: "CAD",
			name: "Canadian Dollar",
			ascii: "$",
			format: function(e, t, n) {
				return "$" + (0, r.numberWithSeparation)((0, r.decimals)(e, t), n)
			}
		},
		c = t.AUD = {
			symbol: "AUD",
			name: "Australian Dollar",
			ascii: "$",
			format: function(e, t, n) {
				return "$" + (0, r.numberWithSeparation)((0, r.decimals)(e, t), n)
			}
		},
		f = t.SGD = {
			symbol: "SGD",
			name: "Singapore Dollar",
			ascii: "$",
			format: function(e, t, n) {
				return "$" + (0, r.numberWithSeparation)((0, r.decimals)(e, t), n)
			}
		};
	t.Fiats = {
		USD: o,
		EUR: a,
		GBP: i,
		INR: s,
		JPY: l,
		CNY: d,
		AUD: c,
		CAD: u,
		SGD: f
	}
}, function(e, t, n) {
	"use strict";
	(function(Buffer) {
		var e;
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.derivation_path = t.addHexPrefix = t.networks_availables = t.logo = t.labels = t.default_gas_limit = t.changeaddress = t.multiaddress = t.satoshis = t.price_decimals = t.coin_decimals = t.ascii = t.color = t.name = t.symbol_fee = t.symbol = t.type = t.networks = t.api_key = void 0, t.setupNetwork = function(e, t) {
			var n = t[e];
			if (void 0 !== n) return m = e, v = n.api_url, b = n.url, n.url_myetherapi, !0;
			return !1
		};
		var r = n(61);
		Object.defineProperty(t, "addHexPrefix", {
			enumerable: !0,
			get: function() {
				return r.addHexPrefix
			}
		}), t.format = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
			return (0, l.formatCoin)(e, t, g)
		}, t.cutDecimals = E, t.isAddress = function(e) {
			return (0, r.isValidAddress)(e)
		}, t.isPrivateKey = k, t.formatAddress = function(e) {
			return function(e) {
				e = e.toLowerCase().replace("0x", "");
				for (var t = (0, a.default)("keccak256").update(e).digest("hex"), n = "0x", r = 0; r < e.length; r++) parseInt(t[r], 16) >= 8 ? n += e[r].toUpperCase() : n += e[r];
				return n
			}(e)
		}, t.getAddressFromPrivateKey = C, t.getPublicFromPrivateKey = function(e) {
			return (0, r.privateToPublic)(O((0, s.removeHexPrefix)(e))).toString("hex")
		}, t.stringToBuffer = O, t.getWalletFromSeed = P, t.getWalletsFromSeed = S, t.urlInfo = function(e) {
			return b + "/address/" + e
		}, t.urlInfoTx = function(e) {
			return b + "/tx/" + e
		}, t.urlDecodeTx = function() {
			return ""
		}, t.discoverAddress = T, t.discoverWallet = function(e, t) {
			var n = e.seed,
				r = e.contract_address,
				o = e.satoshis;
			return new Promise(function(e) {
				var a = 0,
					i = [],
					l = function(e) {
						t && t(e), i.push(e.address)
					};
				! function t() {
					T({
						seed: n,
						index: a,
						contract_address: r,
						satoshis: o
					}).then(function(n) {
						var r = n.balance;
						r > 0 ? (a += 1, l(n), t()) : (0 === i.length && (a += 1, l({
							address: n.address,
							balance: 0
						})), e({
							address: i[i.length - 1],
							addresses: i,
							index: a
						}))
					})
				}()
			})
		}, t.fetchBalance = j, t.fetchTxs = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments[3], arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : y),
				r = e[0];
			return (t > 0 && void 0 !== F[r] ? Promise.resolve(F[r]) : fetch(v + "?module=account&action=txlist&address=" + r + "&startblock=0&endblock=99999999&sort=desc&apikey=" + h).then(function(e) {
				return e.json()
			})).then(function(e) {
				F[r] = e;
				var t = e.result.filter(function(e) {
						return e.value > 0
					}),
					o = {
						totalTxs: t.length,
						txs: []
					};
				return t.forEach(function(e) {
					var t = {
						txid: e.hash,
						fees: (0, l.bigNumber)(e.gasUsed).toFixed(),
						time: Number(e.timeStamp),
						confirmations: e.confirmations,
						value: (0, l.bigNumber)(e.value).div(n).toFixed()
					};
					e.from.toLowerCase() === r.toLowerCase() && (t.value = "-" + t.value), o.txs.push(t)
				}), o
			})
		}, t.fetchRecomendedFee = function(e) {
			var t = e.gas_limit,
				n = void 0 === t ? x : t,
				r = e.use_cache,
				o = void 0 !== r && r;
			return void 0 !== A[x] && o ? Promise.resolve(A[x]) : fetch(v + "?module=proxy&action=eth_gasPrice&apikey=" + h).then(function(e) {
				return e.json()
			}).then(function(e) {
				return A[x] = E((0, l.bigNumber)((0, s.hexToDec)(e.result)).times(n).div(y).toFixed())
			})
		}, t.getDataContractMethodCall = function(e) {
			var t = Array.prototype.slice.call(arguments, 1),
				n = (0, r.addHexPrefix)((0, r.sha3)(e).toString("hex").slice(0, 8));
			return n += t.map(function(e) {
				return (0, d.padLeft)((0, s.removeHexPrefix)(e), 64)
			}).join("")
		}, t.createSimpleTx = function(e) {
			var t = e.from_addresses,
				n = e.to_address,
				r = e.private_keys,
				a = e.amount,
				i = e.fee,
				d = e.gas_limit,
				u = void 0 === d ? x : d,
				c = e.data,
				f = e.current_address,
				p = t.indexOf(f),
				m = t[p],
				b = r[p];
			return fetch(v + "?module=proxy&action=eth_getTransactionCount&tag=latest&address=" + m + "&apikey=" + h).then(function(e) {
				return e.json()
			}).then(function(e) {
				var t = {
					gasLimit: (0, s.sanitizeHex)((0, s.decToHex)(u)),
					gasPrice: (0, s.sanitizeHex)((0, s.decToHex)((0, l.bigNumber)(i).times(y).div(u).round())),
					nonce: (0, s.sanitizeHex)(e.result),
					to: (0, s.sanitizeHex)(n),
					value: (0, s.sanitizeHex)((0, s.decToHex)((0, l.bigNumber)(a).times(y).round()))
				};
				"string" == typeof c && (t.data = c), console.log(t);
				var r = new o.default(t);
				return r.sign(Buffer.from(b, "hex")), (0, s.sanitizeHex)(r.serialize().toString("hex"))
			})
		}, t.encryptPrivateKey = function(e, t) {
			return (0, u.encryptAES128CTR)(e, t, !0, !0)
		}, t.decryptPrivateKey = function(e, t, n) {
			var r = (0, u.decryptAES128CTR)(t, n, !0);
			if (k(r) && C(r) === e) return r
		}, t.encryptSeed = function(e, t) {
			return (0, u.encryptAES128CTR)(e, t)
		}, t.decryptSeed = function(e, t, n) {
			var r = (0, u.decryptAES128CTR)(t, n),
				o = P({
					seed: r
				});
			if (e.includes(o.address)) return r
		}, t.decryptPrivateKeyFromSeed = function(e, t, n, r) {
			var o = R(e, t, n, r);
			if (o) return o.private_key
		}, t.getNextWalletFromSeed = function(e, t, n, r) {
			var o = R(e, t, n, r);
			if (o) return P({
				seed: o.seed,
				index: o.index + 1
			})
		}, t.decryptWalletFromSeed = R, t.getSendProviders = function() {
			return z[m === c.MAINNET ? "mainnet" : "testnet"]
		}, t.sendRawEtherscan = M;
		var o = f(n(281)),
			a = f(n(120)),
			i = n(52),
			l = n(18),
			s = n(119),
			d = n(118),
			u = n(44),
			c = n(4);

		function f(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function p(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var h = t.api_key = "GY9KKYEJF1HDEPIAIRGA66R2RIQWQXV9UZ",
			m = (t.networks = (p(e = {}, c.MAINNET, {
				api_url: "https://api.etherscan.io/api",
				url: "https://etherscan.io",
				url_myetherapi: "https://api.myetherapi.com/eth"
			}), p(e, c.TESTNET, {
				api_url: "https://ropsten.etherscan.io/api",
				url: "https://ropsten.etherscan.io",
				url_myetherapi: "https://api.myetherapi.com/rop"
			}), e), void 0),
			b = void 0,
			v = void 0;
		t.type = c.TYPE_COIN;
		var g = t.symbol = "ETH",
			w = (t.symbol_fee = g, t.name = "Ethereum", t.color = "#7a8aec", t.ascii = "", t.coin_decimals = 18),
			y = (t.price_decimals = 0, t.satoshis = Math.pow(10, w)),
			x = (t.multiaddress = !1, t.changeaddress = !1, t.default_gas_limit = 21e3),
			_ = (t.labels = "eth coin etereum", t.logo = (0, c.ASSET_LOGO)(g), t.networks_availables = [c.MAINNET, c.TESTNET], t.derivation_path = {
				mainnet: function() {
					return "m/44'/60'/0'/0/" + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
				},
				testnet: function() {
					return "m/44'/60'/0'/0/" + (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
				}
			});

		function E(e) {
			return (0, l.limitDecimals)(e, w)
		}

		function k(e) {
			return /^(0x)?([0-9a-fA-F]{64}|[0-9a-fA-F]{66}|[0-9a-fA-F]{128}|[0-9a-fA-F]{13})$/.test(e)
		}

		function C(e) {
			return (0, r.addHexPrefix)((0, r.privateToAddress)(O((0, s.removeHexPrefix)(e))).toString("hex"))
		}

		function O(e) {
			return new Buffer(e, "hex")
		}

		function P(e) {
			var t = e.seed,
				n = e.index,
				r = void 0 === n ? 0 : n,
				o = e.derived_path_function,
				a = e.passphase;
			return S({
				index: r,
				seed: t,
				derived_path_function: o,
				passphase: void 0 === a ? "" : a
			})[0]
		}

		function S(e) {
			var t = e.seed,
				n = e.index,
				o = void 0 === n ? 0 : n,
				a = e.count,
				l = void 0 === a ? 1 : a,
				s = e.derived_path_function,
				d = e.passphase,
				u = void 0 === d ? "" : d;
			void 0 === s && (s = _.mainnet);
			for (var c = [], f = (0, i.getBip32RootKey)({
					seed: t,
					passphase: u
				}); l-- > 0;) {
				var p = s(o++),
					h = f.derivePath(p).keyPair.d.toBuffer();
				c.push({
					address: (0, r.addHexPrefix)((0, r.privateToAddress)(h).toString("hex")),
					private_key: h.toString("hex")
				})
			}
			return c
		}

		function T(e) {
			var t = e.seed,
				n = e.contract_address,
				r = e.satoshis,
				o = e.index,
				a = void 0 === o ? 0 : o;
			return new Promise(function(e) {
				var o = P({
					seed: t,
					index: a
				}).address;
				j(o, n, r).then(function(t) {
					e({
						address: o,
						balance: t
					})
				})
			})
		}

		function j(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y;
			return fetch(void 0 === t ? v + "?apikey=" + h + "&module=account&action=balance&address=" + e + "&tag=latest" : v + "?apikey=" + h + "&module=account&action=tokenbalance&address=" + e + "&contractaddress=" + t + "&tag=latest").then(function(e) {
				return e.json()
			}).then(function(e) {
				var t = (0, l.bigNumber)(e.result).div(n);
				return t.isNaN() ? "0" : t.toString()
			})
		}
		var F = {};
		var A = {};

		function R(e, t, n, r) {
			for (var o, a = (0, u.decryptAES128CTR)(n, r), i = t.length - 1; i >= 0; i--)
				if ((o = P({
						seed: a,
						index: i
					})).address === e) return o.seed = a, o.index = i, o
		}
		var z = {
			mainnet: [{
				name: "Etherscan",
				url: "https://etherscan.io/pushTx",
				send: M
			}],
			testnet: [{
				name: "Etherscan",
				url: "https://ropsten.etherscan.io/pushTx",
				send: M
			}]
		};

		function M(e) {
			return fetch(v + "?module=proxy&action=eth_sendRawTransaction&hex=" + e + "&apikey=" + h).then(function(e) {
				return e.json()
			}).then(function(e) {
				return void 0 !== e.error ? Promise.reject(JSON.stringify(e.error)) : e.result
			})
		}
	}).call(t, n(6).Buffer)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\n    color: ", ";\n    margin: 0;\n    font-size: ", ";\n    font-weight: 300;\n    letter-spacing: 0.5px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n"], o = ["\n    color: ", ";\n    margin: 0;\n    font-size: ", ";\n    font-weight: 300;\n    letter-spacing: 0.5px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		i = s(n(1)),
		l = s(n(2));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = i.default.h2(a, l.default.color.grey1, function(e) {
		return e.size || "15px"
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.generateQRCode = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300,
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "black",
			r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "white";
		return new a.default({
			background: r,
			foreground: n,
			size: t,
			value: e,
			level: "H"
		}).toDataURL()
	};
	var r, o = n(401),
		a = (r = o) && r.__esModule ? r : {
			default: r
		}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
		return typeof e
	} : function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	};
	t.highest = function(e) {
		return e.reduce(function(e, t) {
			return t > e ? t : e
		})
	}, t.lowest = function(e) {
		return e.reduce(function(e, t) {
			return t < e ? t : e
		})
	}, t.median = function(e) {
		return e.reduce(function(e, t) {
			return e + t
		}) / e.length
	}, t.sum = function(e) {
		return e.length > 0 ? e.filter(function(e) {
			return "number" == typeof e && !isNaN(e)
		}).reduce(function(e, t) {
			return e + t
		}) : 0
	}, t.includesMultiple = function(e, t) {
		for (var n = 0; n < t.length; ++n)
			if (e.includes(t[n])) return !0;
		return !1
	}, t.shuffle = function(e) {
		for (var t = e.length - 1; t > 0; t--) {
			var n = Math.floor(Math.random() * (t + 1)),
				r = [e[n], e[t]];
			e[t] = r[0], e[n] = r[1]
		}
		return e
	}, t.searchInArray = function(e, t, n) {
		var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
			a = t.trim().toLowerCase(),
			i = a.split(" ").filter(function(e) {
				return e.length > 1
			});
		return a.length < o ? e : e.filter(function(e) {
			for (var t = void 0 === n ? Object.keys(e) : n, o = function(n) {
					var r = 0;
					if (t.forEach(function(t) {
							e.hasOwnProperty(t) && -1 !== e[t].toLowerCase().indexOf(i[n]) || (r += 1)
						}), r === t.length) return {
						v: !1
					}
				}, a = 0; a < i.length; ++a) {
				var l = o(a);
				if ("object" === (void 0 === l ? "undefined" : r(l))) return l.v
			}
			return !0
		})
	};
	var o, a = t.sortBy = Array.prototype.sortBy = (o = function(e, t) {
		try {
			for (var n = 0; n < t.length - 1; n++) e = e[t[n]];
			return e[t[n]]
		} catch (t) {
			return e
		}
	}, function() {
		var e, t, n, r, a = 1,
			i = arguments.length,
			l = arguments[0],
			s = [],
			d = i - 1;
		if (l.length > 0) {
			for (this instanceof Array && (l = this, d = i, a = 0); a < i; a++)(e = {}).asc = 1, e.path = arguments[a].split("."), e.isdeep = e.path.length > 1, e.name = e.path[0], "-" != e.name.charAt(0) || l[0].hasOwnProperty(e.name) || (e.asc = -1, e.name = e.path[0] = e.name.slice(1)), s.push(e);
			l.sort(function a(i, l, u) {
				if ("number" != typeof u) u = 0;
				else if (u > d - 1) return 0;
				if ((e = s[u]).isdeep ? (t = o(i, e.path), n = o(l, e.path)) : (t = i[e.name], n = l[e.name]), t === n) r = 0;
				else if ("string" == typeof t) r = (t > n ? 1 : -1) * e.asc;
				else {
					if (!("number" == typeof t || "boolean" == typeof t || t instanceof Date)) return 1;
					r = (t - n) * e.asc
				}
				return r || a(i, l, u + 1)
			})
		}
		return l
	});
	t.default = a
}, , , function(e, t, n) {
	"use strict";
	(function(Buffer) {
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.getPasswordStrength = t.randomBytes = void 0;
		var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			r = n(53);
		Object.defineProperty(t, "randomBytes", {
			enumerable: !0,
			get: function() {
				return r.randomBytes
			}
		}), t.encryptAES128CTR = function(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
				o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
				a = new Buffer(e, n ? "hex" : void 0),
				s = (0, r.randomBytes)(32),
				d = (0, r.randomBytes)(16),
				u = {
					dklen: 32,
					salt: s.toString("hex"),
					n: 8192,
					r: 8,
					p: 1
				},
				c = (0, i.default)(new Buffer(t), s, u.n, u.r, u.p, u.dklen),
				f = (0, r.createCipheriv)("aes-128-ctr", c.slice(0, 16), d),
				p = Buffer.concat([f.update(a), f.final()]),
				h = {
					ciphertext: p.toString("hex"),
					cipherparams: {
						iv: d.toString("hex")
					},
					cipher: "aes-128-ctr",
					kdf: "scrypt",
					kdfparams: u
				};
			o && (h.mac = (0, l.sha3)(Buffer.concat([c.slice(16, 32), new Buffer(p, "hex")])).toString("hex"));
			return h
		}, t.decryptAES128CTR = function(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
				o = new Buffer(e.ciphertext, "hex"),
				a = "scrypt" === e.kdf ? (0, i.default)(new Buffer(t), new Buffer(e.kdfparams.salt, "hex"), e.kdfparams.n, e.kdfparams.r, e.kdfparams.p, e.kdfparams.dklen) : (0, r.pbkdf2Sync)(new Buffer(t), new Buffer(e.kdfparams.salt, "hex"), e.kdfparams.c, e.kdfparams.dklen, "sha256"),
				l = (0, r.createDecipheriv)("aes-128-ctr", a.slice(0, 16), new Buffer(e.cipherparams.iv, "hex")),
				s = Buffer.concat([l.update(o), l.final()]);
			if (n)
				for (; s.length < 32;) s = Buffer.concat([new Buffer([0]), s]);
			return s.toString(n ? "hex" : void 0)
		}, t.encryptBIP38 = function(e, t, n) {
			var r = a.default.decode(e);
			return o.default.encrypt(r.privateKey, r.compressed, t, n)
		}, t.decryptBIP38 = function(e, t, n, r) {
			var i = o.default.decrypt(e, t, n);
			return a.default.encode(r, i.privateKey, i.compressed)
		};
		var o = s(n(364)),
			a = s(n(164)),
			i = s(n(366)),
			l = n(61);

		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.getPasswordStrength = function() {
			function t(e, t) {
				var n = 0;
				return e.forEach(function(e) {
					t.test(e) && (n += 1)
				}), n
			}
			return function(n, r, o) {
				var a = n.split(""),
					i = {
						length: n.length,
						maxscore: 4,
						score: 0,
						lowercase: 0,
						numbers: 0,
						uppercase: 0,
						specials: 0
					};
				if (i.lowercase = t(a, /^[a-z]$/), i.lowercase > 0 && (i.score += 1), i.numbers = t(a, /^\d$/), i.numbers > 0 && (i.score += 1), i.uppercase = t(a, /^[A-Z]$/), i.uppercase > 0 && (i.score += 1), i.specials = t(a, /^[^A-Za-z0-9]$/), i.specials > 0 && (i.score += 1), i.length < r && (i.score = 0), o && "object" == (void 0 === o ? "undefined" : e(o)))
					for (var l = ["length", "lowercase", "numbers", "uppercase", "specials"], s = 0, d = l.length; s < d; ++s)
						if ("length" === l[s] && i.length < r || 0 === i[l[s]]) {
							i.message = o[l[s]];
							break
						}
				return i
			}
		}()
	}).call(t, n(6).Buffer)
}, , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\n    width: 30px;\n    float: left;\n    padding-top: 5px;\n    padding-right: 10px;\n    & > img {\n        width: 30px;\n        height: 30px;\n    }\n    ", " {\n        padding-top: 2px;\n        padding-right: 5px;\n        & > img {\n            width: 25px;\n            height: 25px;\n        }\n    }\n    ", " {\n        display: none;\n    }\n"], o = ["\n    width: 30px;\n    float: left;\n    padding-top: 5px;\n    padding-right: 10px;\n    & > img {\n        width: 30px;\n        height: 30px;\n    }\n    ", " {\n        padding-top: 2px;\n        padding-right: 5px;\n        & > img {\n            width: 25px;\n            height: 25px;\n        }\n    }\n    ", " {\n        display: none;\n    }\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		i = s(n(1)),
		l = s(n(2));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = i.default.div(a, l.default.media.second, l.default.media.fourth)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\n    display: inline-block;\n    position: relative;\n    width: 16px;\n    height: 16px;\n    font-size: 11px;\n    cursor: help;\n    top: -2px;\n\n    & span {\n        display: inline-block;\n        position: absolute;\n        line-height: 16px;\n        background: ", ";\n        color: #fff;\n        text-align: center;\n        border-radius: 50%;\n        font-weight: bold;\n        width: 16px;\n        height: 16px;\n        z-index: 2;\n        border: 3px solid white;\n    }\n    &:hover span {\n        background-color: ", ";\n    }\n\n    & div {\n        width: ", ";\n        left: ", ";\n        top: ", ";\n\n        z-index: 1;\n        box-sizing: border-box;\n        display: none;\n        background: ", ";\n        color: white;\n        position: absolute;\n        border-radius: 3px;\n        text-align: ", ";\n        padding: 5px 10px;\n        font-weight: normal;\n        letter-spacing: 0.3px;\n        line-height: 16px;\n    }\n    &:hover div {\n        display: block;\n    }\n"], o = ["\n    display: inline-block;\n    position: relative;\n    width: 16px;\n    height: 16px;\n    font-size: 11px;\n    cursor: help;\n    top: -2px;\n\n    & span {\n        display: inline-block;\n        position: absolute;\n        line-height: 16px;\n        background: ", ";\n        color: #fff;\n        text-align: center;\n        border-radius: 50%;\n        font-weight: bold;\n        width: 16px;\n        height: 16px;\n        z-index: 2;\n        border: 3px solid white;\n    }\n    &:hover span {\n        background-color: ", ";\n    }\n\n    & div {\n        width: ", ";\n        left: ", ";\n        top: ", ";\n\n        z-index: 1;\n        box-sizing: border-box;\n        display: none;\n        background: ", ";\n        color: white;\n        position: absolute;\n        border-radius: 3px;\n        text-align: ", ";\n        padding: 5px 10px;\n        font-weight: normal;\n        letter-spacing: 0.3px;\n        line-height: 16px;\n    }\n    &:hover div {\n        display: block;\n    }\n"], Object.freeze(Object.defineProperties(r, {
		raw: {
			value: Object.freeze(o)
		}
	})));
	t.default = function(e) {
		var t = e.width || 200,
			n = e.position,
			r = void 0,
			o = void 0;
		if ("left" === n) r = 8 - t + "px", o = "-2px";
		else if ("right" === n) r = "16px", o = "-2px";
		else {
			r = -t / 2 + 10 + "px", o = "16px"
		}
		return i.default.createElement(u, {
			width: t + "px",
			left: r,
			top: o,
			position: e.position
		}, i.default.createElement("span", null, "?"), i.default.createElement("div", null, e.children))
	};
	var i = d(n(0)),
		l = d(n(1)),
		s = d(n(2));

	function d(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var u = l.default.div(a, s.default.color.background5, s.default.color.front3, function(e) {
		return e.width
	}, function(e) {
		return e.left
	}, function(e) {
		return e.top
	}, s.default.color.front3, function(e) {
		return "center" == e.position ? "center" : "left"
	})
}, , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getBip32RootKey = function(e) {
		var t = e.seed,
			n = e.passphase,
			a = void 0 === n ? "" : n,
			i = e.network,
			l = void 0 === i ? o.default.networks.bitcoin : i,
			s = r.default.mnemonicToSeed(t, a);
		return o.default.HDNode.fromSeedHex(s, l)
	}, t.getRandomMnemonic = function() {
		var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.recovery_phrase_words) / 3 * 32 / 8,
			t = a.default.randomBytes(e);
		return r.default.entropyToMnemonic(t)
	}, t.validateSeed = function(e) {
		return r.default.validateMnemonic(e)
	};
	var r = l(n(283)),
		o = l(n(79)),
		a = l(n(53)),
		i = n(4);

	function l(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
}, , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.fetchTimeout = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			n = void 0,
			r = void 0,
			o = void 0;
		"number" == typeof t.timeout && (o = setTimeout(function() {
			r("timeout")
		}, t.timeout));
		return new Promise(function(a, i) {
			n = function(e) {
				clearTimeout(o), a(e)
			}, r = function(e) {
				clearTimeout(o), i(e)
			}, fetch(e, t).then(n).catch(r)
		})
	}, t.resolveAll = function(e) {
		var t = [],
			n = void 0,
			r = e.length,
			o = function() {
				0 == --r && n(t)
			};
		return e.forEach(function(e) {
			return e.then(function(e) {
				t.push(e), o()
			}).catch(o)
		}), new Promise(function(e) {
			return n = e
		})
	}, t.repeatUntilResolve = function(e, t) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
				timeout: 5e3
			},
			r = void 0,
			o = n.timeout,
			a = n.onReject,
			i = new Promise(function(e) {
				r = e
			});
		return e.apply(e, t).then(r).catch(function n(i) {
			"function" == typeof a ? a(i) : console.error(e.name + ': "' + i + '" (repeating in ' + o + "ms)"), setTimeout(function() {
				e.apply(e, t).then(r).catch(n)
			}, o)
		}), i
	}, t.fetchDelay = function(e, t) {
		"number" != typeof t && (t = 1e3);
		return new Promise(function(n) {
			setTimeout(function() {
				fetch(e).then(n)
			}, t)
		})
	}, t.fetchAny = function(e) {
		var t = [],
			n = void 0,
			r = void 0,
			o = 0;
		return function a(i) {
			fetch(i).then(function(e) {
				return n(e)
			}).catch(function(n) {
				t.push(n), o < e.length - 1 ? a(e[++o]) : r(n)
			})
		}(e[o]), new Promise(function(e, t) {
			n = e, r = t
		})
	}
}, function(e, t, n) {
	"use strict";
	var r;
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.derivation_path = t.networks_availables = t.logo = t.labels = t.changeaddress = t.multiaddress = t.satoshis = t.price_decimals = t.coin_decimals = t.ascii = t.color = t.name = t.symbol_fee = t.symbol = t.type = t.networks = void 0, t.setupNetwork = function(e, t) {
		var n = t[e];
		if (void 0 !== n) return v = e, b = n.network, m = n.url, g = m + "/api", !0;
		return !1
	}, t.format = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
		return (0, s.formatCoin)(e, t, w)
	}, t.cutDecimals = E, t.toSatoshis = k, t.getWalletFromSeed = C, t.getWalletsFromSeed = O, t.validateAddress = T, t.isAddress = j, t.isSegwitAddress = F, t.isPrivateKeyBip = function(e) {
		return /^6P[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{56}$/.test(e)
	}, t.isPrivateKey = A, t.formatAddress = function(e) {
		return e.trim()
	}, t.getAddressFromPrivateKey = R, t.getSegwitAddressFromPrivateKey = z, t.urlInfo = function(e) {
		return m + "/address/" + e
	}, t.urlInfoTx = function(e) {
		return m + "/tx/" + e
	}, t.urlDecodeTx = function() {
		return "https://live.blockcypher.com/btc/decodetx/"
	}, t.encryptSeed = function(e, t) {
		return (0, l.encryptAES128CTR)(e, t)
	}, t.decryptSeed = function(e, t, n) {
		var r = (0, l.decryptAES128CTR)(t, n),
			o = C({
				seed: r
			}),
			a = C({
				seed: r,
				segwit: !1
			});
		if (e.includes(o.address) || e.includes(a.address)) return r
	}, t.encryptPrivateKey = function(e, t) {
		return (0, l.encryptAES128CTR)(e, t)
	}, t.decryptPrivateKey = function(e, t, n) {
		var r = (0, l.decryptAES128CTR)(t, n);
		if (A(r)) {
			var o = F(e) ? z(r) : R(r);
			if (o === e) return r
		}
	}, t.decryptPrivateKeyFromSeed = function(e, t, n, r) {
		var o = I(e, t, n, r);
		if (o) return o.private_key
	}, t.getNextWalletFromSeed = function(e, t, n, r) {
		var o = I(e, t, n, r);
		if (o) return C({
			seed: o.seed,
			index: o.index + 1,
			segwit: o.segwit
		})
	}, t.decryptWalletFromSeed = I, t.encryptBIP38 = function(e, t, n) {
		return (0, l.encryptBIP38)(e, t, n)
	}, t.decryptBIP38 = function(e, t, n) {
		return (0, l.decryptBIP38)(e, t, n, b.wif)
	}, t.discoverAddress = N, t.discoverWallet = function(e, t) {
		var n = e.seed;
		return new Promise(function(e) {
			var r = 0,
				o = !1,
				a = [],
				i = function(e) {
					t && t(e), a.push(e.address)
				};
			! function t() {
				N({
					seed: n,
					index: r,
					segwit: o
				}).then(function(n) {
					n.totalReceived > 0 ? (r += 1, i(n), t()) : o ? (0 === a.length && (r += 1, i({
						address: n.address,
						balance: 0
					})), e({
						address: a[a.length - 1],
						addresses: a,
						index: r,
						segwit: o
					})) : (r = 0, o = !0, t())
				})
			}()
		})
	}, t.fetchBalance = function(e) {
		return B(e).then(function(e) {
			return (0, s.bigNumber)(e.unconfirmedBalance < 0 ? e.balance + e.unconfirmedBalance : e.balance).toFixed()
		})
	}, t.fetchRecomendedFee = function(e) {
		var t = e.addresses,
			n = e.amount,
			r = void 0 === n ? 0 : n,
			o = e.outputs,
			i = void 0 === o ? 1 : o,
			l = e.use_cache,
			c = void 0 !== l && l,
			f = t.join(","),
			p = L[f];
		return (void 0 !== p && void 0 !== p.fee_per_kb && void 0 !== p.inputs && c ? Promise.resolve() : (h = a.default.SERVICES.map(function(e) {
			return a.default.fetchFee(e)
		}), (0, u.resolveAll)(h).then(function(e) {
			return e.length > 0 ? (0, d.highest)(e) : Promise.reject(null)
		})).catch(function(e) {
			return Promise.reject("BTC.fetchRecomendedFee: We couldn't fetch fee prices")
		}).then(function(e) {
			return L[f] = {
				fee_per_kb: e
			}, fetch(g + "/addrs/" + f + "/utxo?noCache=1")
		}).then(function(e) {
			return e.json()
		}).catch(function(e) {
			return Promise.reject("BTC.fetchRecomendedFee: We couldn't fetch utxo")
		}).then(function(e) {
			var t = (0, d.sortBy)(e || [], "-amount").map(function(e) {
				return e.amount
			});
			return L[f].inputs = t
		})).then(function() {
			var e = L[f],
				t = e.inputs || [],
				n = {
					amount: r || 0,
					fee_per_kb: e.fee_per_kb,
					inputs: t,
					outputs: i + 1
				};
			return function(e) {
				for (var t = e.fee_per_kb, n = e.amount, r = e.inputs, o = e.outputs, a = e.extra_bytes, i = void 0 === a ? 0 : a, l = 0, d = 0, u = 0; d < r.length && l < n; ++d) l += r[d], u += 1;
				return E((0, s.bigNumber)(10 + 148 * u + 34 * o + i).times(t).div(x).toFixed())
			}(n)
		});
		var h
	}, t.fetchTxs = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t + 25;
		return fetch(g + "/addrs/" + e.join(",") + "/txs?noScriptSig=1&noAsm=1&noSpent=0&from=" + t + "&to=" + n).then(function(e) {
			return e.json()
		}).then(function(t) {
			var n = {
				totalTxs: t.totalItems,
				txs: []
			};
			return t.items.forEach(function(t) {
				var r = t.vin.filter(function(t) {
						return e.includes(t.addr)
					}).reduce(function(e, t) {
						return e.add(t.value)
					}, (0, s.bigNumber)(0)),
					o = t.vout.filter(function(t) {
						var n = t.scriptPubKey;
						return n && n.addresses && (0, d.includesMultiple)(n.addresses, e)
					}).reduce(function(e, t) {
						return e.add(t.value)
					}, (0, s.bigNumber)(0)),
					a = {
						txid: t.txid,
						fees: (0, s.bigNumber)(t.fees),
						time: t.time,
						confirmations: t.confirmations,
						value: r.minus(o).minus(t.fees).times(-1)
					};
				a.value.gt(0) && (a.value = a.value.minus(t.fees)), a.value.gt(0) || a.value.lt(0) ? (a.fees = a.fees.toFixed(), a.value = a.value.toFixed(), n.txs.push(a)) : n.totalTxs -= 1
			}), n
		})
	}, t.createSimpleTx = function(e) {
		var t = e.from_addresses,
			n = e.to_address,
			r = e.private_keys,
			a = e.amount,
			i = e.fee,
			l = e.change_address,
			u = t[t.length - 1];
		return l = j(l) ? l : u, fetch(g + "/addrs/" + t.join(",") + "/utxo?noCache=1").then(function(e) {
			return e.json()
		}).then(function(e) {
			var u = (0, s.bigNumber)(0),
				c = (0, s.bigNumber)(a).plus(i),
				f = new o.default.TransactionBuilder(b);
			(0, d.sortBy)(e || [], "-amount").forEach(function(e, t) {
				u.lt(c) && (f.addInput(e.txid, e.vout), f.inputs[t].satoshis = e.satoshis, f.inputs[t].address = e.address, u = u.plus(e.amount))
			}), f.addOutput(n, k(a));
			var p = (0, s.bigNumber)(u).minus(a).minus((0, s.bigNumber)(i));
			return p.gt(0) && f.addOutput(l, k(p)), f.inputs.forEach(function(e, n) {
				try {
					var a = F(e.address),
						i = t.indexOf(e.address),
						l = o.default.ECPair.fromWIF(r[i], b);
					a ? f.sign(n, l, M(l), null, e.satoshis) : f.sign(n, l)
				} catch (e) {
					console.error(e)
				}
			}), console.log(f.inputs), f.build().toHex()
		})
	}, t.getSendProviders = function() {
		return D[v === c.MAINNET ? "mainnet" : "testnet"]
	}, t.sendRawTxInsight = U, t.sendRawTxBlockcypher = W;
	var o = f(n(79)),
		a = f(n(367)),
		i = n(52),
		l = n(44),
		s = n(18),
		d = n(41),
		u = n(56),
		c = n(4);

	function f(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function p(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}
	var h = t.networks = (p(r = {}, c.MAINNET, {
			network: o.default.networks.bitcoin,
			url: "https://insight.bitcoin.com"
		}), p(r, c.TESTNET, {
			network: o.default.networks.testnet,
			url: "https://test-insight.bitpay.com"
		}), r),
		m = void 0,
		b = void 0,
		v = void 0,
		g = void 0;
	t.type = c.TYPE_COIN;
	var w = t.symbol = "BTC",
		y = (t.symbol_fee = w, t.name = "Bitcoin", t.color = "#fdb033", t.ascii = "Ƀ", t.coin_decimals = 8),
		x = (t.price_decimals = 0, t.satoshis = Math.pow(10, y)),
		_ = (t.multiaddress = !0, t.changeaddress = !0, t.labels = "btc coin", t.logo = (0, c.ASSET_LOGO)(w), t.networks_availables = [c.MAINNET, c.TESTNET], t.derivation_path = {
			mainnet: function(e) {
				return "m/44'/0'/0'/0/" + e
			},
			mainnetsegwit: function(e) {
				return "m/49'/0'/0'/0/" + e
			},
			testnet: function(e) {
				return "m/44'/1'/0'/0/" + e
			},
			testnetsegwit: function(e) {
				return "m/49'/1'/0'/0/" + e
			}
		});

	function E(e) {
		return (0, s.limitDecimals)(e, y)
	}

	function k(e) {
		return Math.round(Number((0, s.bigNumber)(e).times(x)))
	}

	function C(e) {
		var t = e.seed,
			n = e.index,
			r = void 0 === n ? 0 : n,
			o = e.derived_path_function,
			a = e.passphase,
			i = void 0 === a ? "" : a,
			l = e.segwit;
		return O({
			seed: t,
			index: r,
			derived_path_function: o,
			passphase: i,
			segwit: void 0 === l || l
		})[0]
	}

	function O(e) {
		var t = e.seed,
			n = e.index,
			r = void 0 === n ? 0 : n,
			o = e.count,
			a = void 0 === o ? 1 : o,
			l = e.derived_path_function,
			s = e.passphase,
			d = void 0 === s ? "" : s,
			u = e.segwit,
			f = void 0 === u || u;
		void 0 === l && (l = v === c.MAINNET ? f ? _.mainnetsegwit : _.mainnet : f ? _.testnetsegwit : _.testnet);
		for (var p = [], h = (0, i.getBip32RootKey)({
				seed: t,
				passphase: d,
				network: b
			}); a-- > 0;) {
			var m = l(r++),
				g = h.derivePath(m),
				w = g.keyPair;
			p.push(f ? S(g.keyPair) : P(w))
		}
		return p
	}

	function P(e) {
		return {
			address: e.getAddress(),
			private_key: e.toWIF()
		}
	}

	function S(e) {
		var t = e.getPublicKeyBuffer(),
			n = o.default.crypto.hash160(t),
			r = o.default.script.witnessPubKeyHash.output.encode(n),
			a = o.default.crypto.hash160(r),
			i = o.default.script.scriptHash.output.encode(a);
		return {
			address: o.default.address.fromOutputScript(i, b),
			private_key: e.toWIF()
		}
	}

	function T(e) {
		e.symbol;
		var t = e.address,
			n = e.network;
		try {
			var r = o.default.address.fromBase58Check(t).version;
			return n.pubKeyHash === r || n.scriptHash === r
		} catch (e) {
			return !1
		}
	}

	function j(e) {
		return T({
			symbol: w,
			address: e,
			network: b
		})
	}

	function F(e) {
		var t = o.default.address.fromBase58Check(e).version;
		return t === h[c.MAINNET].network.scriptHash || t === h[c.TESTNET].network.scriptHash
	}

	function A(e) {
		try {
			return j(R(e))
		} catch (e) {
			return !1
		}
	}

	function R(e) {
		return o.default.ECPair.fromWIF(e, b).getAddress().toString()
	}

	function z(e) {
		var t = o.default.ECPair.fromWIF(e, b);
		return function(e) {
			var t = M(e),
				n = o.default.crypto.hash160(t),
				r = o.default.script.scriptHash.output.encode(n);
			return o.default.address.fromOutputScript(r, b)
		}(new o.default.ECPair(t.d))
	}

	function M(e) {
		var t = e.getPublicKeyBuffer(),
			n = o.default.crypto.hash160(t);
		return o.default.script.witnessPubKeyHash.output.encode(n)
	}

	function I(e, t, n, r) {
		for (var o, a = (0, l.decryptAES128CTR)(n, r), i = t.length - 1; i >= 0; i--) {
			if ((o = C({
					seed: a,
					index: i
				})).address === e) return o.seed = a, o.index = i, o.segwit = !0, o;
			if ((o = C({
					seed: a,
					index: i,
					segwit: !1
				})).address === e) return o.seed = a, o.index = i, o.segwit = !1, o
		}
	}

	function N(e) {
		var t = e.seed,
			n = e.index,
			r = void 0 === n ? 0 : n,
			o = e.segwit,
			a = void 0 !== o && o;
		return new Promise(function(e) {
			var n = C({
				seed: t,
				index: r,
				segwit: a
			}).address;
			B(n).then(function(t) {
				e({
					address: n,
					balance: String(t.balance),
					totalReceived: String(t.totalReceived)
				})
			})
		})
	}
	var L = {};

	function B(e) {
		return fetch(g + "/addr/" + e).then(function(e) {
			return e.json()
		}).then(function(e) {
			return e
		})
	}
	var D = {
		mainnet: [{
			name: "BlockCypher",
			url: "https://live.blockcypher.com/btc/pushtx/",
			send: W("https://api.blockcypher.com/v1/btc/main/txs/push")
		}, {
			name: "Insight",
			url: "https://insight.bitcoin.com/tx/send",
			send: U("https://insight.bitcoin.com/api/tx/send")
		}],
		testnet: [{
			name: "BlockCypher",
			url: "https://live.blockcypher.com/btc-testnet/pushtx/",
			send: W("https://api.blockcypher.com/v1/btc/test3/txs/push")
		}, {
			name: "Bitpay",
			url: "https://test-insight.bitpay.com/tx/send",
			send: U("https://test-insight.bitpay.com/api/tx/send")
		}]
	};

	function U(e) {
		return function(t) {
			var n = {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					rawtx: t
				})
			};
			return fetch(e, n).then(function(e) {
				return e.text()
			}).then(function(e) {
				try {
					return JSON.parse(e)
				} catch (t) {
					return Promise.reject(e)
				}
			}).then(function(e) {
				return e.txid
			})
		}
	}

	function W(e) {
		return function(t) {
			var n = {
				method: "POST",
				body: JSON.stringify({
					tx: t
				})
			};
			return fetch(e, n).then(function(e) {
				return e.text()
			}).then(function(e) {
				try {
					return JSON.parse(e)
				} catch (t) {
					return Promise.reject(e)
				}
			}).then(function(e) {
				return e.tx.hash
			})
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\nborder: 0;\nbackground-color: ", ";\ncolor: white;\nfont-weight: bold;\nheight: 40px;\nwidth: ", ";\nborder-radius: 4px;\nfont-size: 15px;\nletter-spacing: -0.2px;\ncursor: pointer;\noutline: none;\n&:hover {\n    background-color: ", ";\n}\n", "\n/*color: ", ";\nbackground-image: linear-gradient(#fff,#f7f9fb);\nbackground-color: #f7f9fb;\nborder: 1px solid #d4dce4;\n-webkit-transition: 0.15s ease all;\ntransition: 0.15s ease all;*/\n"], o = ["\nborder: 0;\nbackground-color: ", ";\ncolor: white;\nfont-weight: bold;\nheight: 40px;\nwidth: ", ";\nborder-radius: 4px;\nfont-size: 15px;\nletter-spacing: -0.2px;\ncursor: pointer;\noutline: none;\n&:hover {\n    background-color: ", ";\n}\n", "\n/*color: ", ";\nbackground-image: linear-gradient(#fff,#f7f9fb);\nbackground-color: #f7f9fb;\nborder: 1px solid #d4dce4;\n-webkit-transition: 0.15s ease all;\ntransition: 0.15s ease all;*/\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		i = s(n(1)),
		l = s(n(2));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = i.default.button(a, l.default.color.background2, function(e) {
		return e.width || "100%"
	}, l.default.color.background3, function(e) {
		var t = void 0;
		return (e.disabled || e.loading) && (t = "\n        pointer-events: none;\n        cursor:default;\n        background-color: " + l.default.color.disabled + " !important;\n        color: " + l.default.color.grey1 + ";\n    "), e.loading && (t += "\n        background: url('" + e.loadingIco + "') no-repeat center center / 18px;\n        color: transparent !important;\n        "), t
	}, l.default.color.front3)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\nmargin: 0 auto;\nwidth: 150px;\nheight: 150px;\nbackground-color: #EEE;\n"], o = ["\nmargin: 0 auto;\nwidth: 150px;\nheight: 150px;\nbackground-color: #EEE;\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		i = l(n(1));
	l(n(2));

	function l(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = i.default.div(a)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		i = (r = ["\n    border-radius: 4px;\n    background: #fff;\n    padding: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: 500;\n    text-align: center;\n    /*border: 1px solid ", ";\n    background: ", ";*/\n\n    & span {\n        display: inline-block;\n        font-family: monospace;\n        font-size: 16px;\n        color: ", ";\n    }\n"], o = ["\n    border-radius: 4px;\n    background: #fff;\n    padding: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: 500;\n    text-align: center;\n    /*border: 1px solid ", ";\n    background: ", ";*/\n\n    & span {\n        display: inline-block;\n        font-family: monospace;\n        font-size: 16px;\n        color: ", ";\n    }\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		})));
	t.default = function(e) {
		return l.default.createElement(f, a({}, e, {
			onClick: function(t) {
				(0, u.selectContentElement)(t.target), "function" == typeof e.onClick && e.onClick(t)
			}
		}), l.default.createElement("span", null, e.children))
	};
	var l = c(n(0)),
		s = c(n(1)),
		d = c(n(2)),
		u = n(27);

	function c(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var f = s.default.div(i, d.default.color.background1, d.default.color.background1, function(e) {
		return e.color || d.default.color.front5
	})
}, , , , , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		o = p(["\n    position: relative;\n"], ["\n    position: relative;\n"]),
		a = p(["\n    float: left;\n    width: calc(20% - 2px);\n    height: 3px;\n    background-color: ", ";\n    margin: 1px 2px 1px 0;\n    :first-child {\n        margin-left: 0;\n        width: calc(20% - 1px);\n    }\n    :last-child {\n        margin-right: 0;\n        width: calc(20% - 1px);\n    }\n"], ["\n    float: left;\n    width: calc(20% - 2px);\n    height: 3px;\n    background-color: ", ";\n    margin: 1px 2px 1px 0;\n    :first-child {\n        margin-left: 0;\n        width: calc(20% - 1px);\n    }\n    :last-child {\n        margin-right: 0;\n        width: calc(20% - 1px);\n    }\n"]),
		i = p(["\n    text-align: right;\n    color: ", ";\n    font-size: 10px;\n    font-weight: bold;\n    letter-spacing: 0.3px;\n    position: absolute;\n    right: 0;\n    bottom: -18px;\n"], ["\n    text-align: right;\n    color: ", ";\n    font-size: 10px;\n    font-weight: bold;\n    letter-spacing: 0.3px;\n    position: absolute;\n    right: 0;\n    bottom: -18px;\n"]);
	t.default = function(e) {
		var t = e.minlength,
			n = e.value || "",
			o = (0, c.getPasswordStrength)(n, t, function(e) {
				return {
					length: "Invalid. At least " + e + " characters",
					lowercase: "Add an optional lowercase letter",
					uppercase: "Add an optional upper case letter",
					numbers: "Add an optional number",
					specials: "Add an optional special character"
				}
			}(t)),
			a = 0 === n.length ? 0 : o.score + 1,
			i = h[a],
			s = void 0 == o.message ? "Excelent!" : o.message,
			d = 0 === n.length ? null : l.default.createElement(g, {
				color: i
			}, s);
		return l.default.createElement(b, null, l.default.createElement(u.default, r({}, e, {
			invalid: n.length > 0 && n.length < t
		})), l.default.createElement(m, {
			score: a,
			total: 5
		}), d)
	};
	var l = f(n(0)),
		s = f(n(1)),
		d = f(n(2)),
		u = f(n(23)),
		c = n(44);

	function f(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function p(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var h = {
		1: d.default.color.error,
		2: "#ffac01",
		3: "#cccf0c",
		4: "#89a24c",
		5: "#28bc05"
	};

	function m(e) {
		for (var t, n = e.total, r = e.score, o = [], a = 1; a <= n; ++a) t = a <= r ? h[r] : null, o.push(l.default.createElement(v, {
			color: t
		}));
		return l.default.createElement("div", null, o)
	}
	var b = s.default.div(o),
		v = s.default.div(a, function(e) {
			return e.color || "#EEE"
		}),
		g = s.default.div(i, function(e) {
			return e.color || d.default.color.front2
		})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Total = t.LoadMore = t.ResultAddress = void 0;
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = A(["\n    border-top: 2px solid ", ";\n    padding: 12px;\n    font-size: 16px;\n"], ["\n    border-top: 2px solid ", ";\n    padding: 12px;\n    font-size: 16px;\n"]),
		a = A(["\n    font-size: 13px;\n    color: ", ";\n    text-decoration: underline;\n    cursor: pointer;\n    display: block;\n    float: left;\n    &:hover {\n        color: ", ";\n    }\n"], ["\n    font-size: 13px;\n    color: ", ";\n    text-decoration: underline;\n    cursor: pointer;\n    display: block;\n    float: left;\n    &:hover {\n        color: ", ";\n    }\n"]),
		i = A(["\n    color: ", ";\n    font-weight: 900;\n    float: right;\n    font-size: 16px;\n"], ["\n    color: ", ";\n    font-weight: 900;\n    float: right;\n    font-size: 16px;\n"]),
		l = n(0),
		s = F(l),
		d = F(n(1)),
		u = n(7),
		c = F(n(2)),
		f = n(4),
		p = n(18),
		h = n(9),
		m = n(52),
		b = n(16),
		v = F(n(8)),
		g = n(11),
		w = n(10),
		y = F(n(23)),
		x = F(n(14)),
		_ = F(n(111)),
		E = F(n(404)),
		k = F(n(67)),
		C = F(n(26)),
		O = F(n(48)),
		P = F(n(199)),
		S = n(21),
		T = n(22),
		j = n(407);

	function F(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function A(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var R = {
			typing: "typing",
			addresses: "addresses"
		},
		z = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, l.Component), r(t, [{
				key: "componentWillMount",
				value: function() {
					var e = this,
						t = (0, u.collect)();
					v.default.view.step = R.typing, v.default.view.is_valid_input = !1, v.default.view.is_valid_seed = !0, v.default.view.seed_input = "", v.default.view.seed_input_error = "", v.default.view.seed_password = "", v.default.view.seed_repassword = "", v.default.view.discovering = !1, v.default.view.addresses = [], v.default.view.address_selected = 0, t.destroy(), this.observer = (0, u.createObserver)(function(t) {
						return e.forceUpdate()
					}), this.observer.observe(v.default.view), this.observer.observe(v.default.view.addresses, "length");
					var n = (0, g.getParamsFromLocation)().symbol;
					this.Coin = h.Coins.hasOwnProperty(n) ? h.Coins[n] : h.Coins.ETH, this.already_blur = !1, this.onChangeInput = this.onChangeInput.bind(this), this.onBlurInput = this.onBlurInput.bind(this), this.onChangePassword = this.onChangePassword.bind(this), this.onChangeRepassword = this.onChangeRepassword.bind(this), this.onNext = this.onNext.bind(this), this.onBack = this.onBack.bind(this), this.onChangeSelected = this.onChangeSelected.bind(this), this.onLoadMore = this.onLoadMore.bind(this), this.onSubmit = this.onSubmit.bind(this)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.observer.destroy()
				}
			}, {
				key: "shouldComponentUpdate",
				value: function() {
					return !1
				}
			}, {
				key: "onUpdateSeed",
				value: function() {
					var e = v.default.view.seed_input;
					if (e.length > 0) {
						var t = (0, u.collect)();
						v.default.view.is_valid_seed = (0, m.validateSeed)(e) && e.trim().split(/\s+/g).length === f.recovery_phrase_words, (0, g.isAssetRegisteredBySeed)(this.Coin.symbol, e) ? (v.default.view.seed_input_error = "You already have this asset", v.default.view.is_valid_input = !1) : (v.default.view.seed_input_error = "", v.default.view.is_valid_input = !0), t.emit()
					}
				}
			}, {
				key: "onChangeInput",
				value: function(e) {
					var t = (0, u.collect)(),
						n = e.target.value.trim().replace(/\s+/g, " ");
					v.default.view.seed_input = n, this.already_blur && this.onUpdateSeed(), t.emit()
				}
			}, {
				key: "onBlurInput",
				value: function(e) {
					!this.already_blur && v.default.view.seed_input.length > 0 && (this.already_blur = !0, this.onUpdateSeed())
				}
			}, {
				key: "onChangePassword",
				value: function(e) {
					v.default.view.seed_password = e.target.value
				}
			}, {
				key: "onChangeRepassword",
				value: function(e) {
					v.default.view.seed_repassword = e.target.value
				}
			}, {
				key: "onNext",
				value: function(e) {
					e.preventDefault();
					var t = v.default.view.seed_input,
						n = (0, u.collect)();
					v.default.view.step = R.addresses, this.discoverWallet(t), n.emit()
				}
			}, {
				key: "discoverWallet",
				value: function(e) {
					var t = this,
						n = (0, u.collect)(),
						r = v.default.view.addresses;
					v.default.view.discovering = !0, this.Coin.discoverWallet({
						seed: e
					}, function(e) {
						r === v.default.view.addresses && v.default.view.addresses.push(e)
					}).then(function(n) {
						r === v.default.view.addresses && (t.wallet = n, t.wallet.seed = e, v.default.view.discovering = !1)
					}), n.emit()
				}
			}, {
				key: "onLoadMore",
				value: function() {
					var e = this;
					v.default.view.discovering = !0, this.Coin.discoverAddress(this.wallet).then(function(t) {
						var n = (0, u.collect)();
						e.wallet.index += 1, v.default.view.discovering = !1, v.default.view.addresses.push(t), n.emit()
					})
				}
			}, {
				key: "onBack",
				value: function(e) {
					e.preventDefault();
					var t = (0, u.collect)();
					v.default.view.addresses = [], v.default.view.step = R.typing, t.emit()
				}
			}, {
				key: "onChangeSelected",
				value: function(e) {
					v.default.view.address_selected = e
				}
			}, {
				key: "onSubmit",
				value: function(e) {
					e.preventDefault();
					var t = (0, u.collect)(),
						n = v.default.view.seed_input,
						r = this.Coin.symbol,
						o = this.Coin.multiaddress ? this.wallet.address : v.default.view.addresses[v.default.view.address_selected].address,
						a = v.default.view.addresses.map(function(e) {
							return e.address
						}),
						i = (0, b.createAsset)(this.Coin.type, r, o, a),
						l = (0, g.getAssetId)(i);
					(0, b.setSeed)(l, n, v.default.view.seed_password), (0, b.setHref)(w.routes.asset({
						asset_id: l
					})), (0, b.addNotification)('New "' + r + '" asset has been imported'), t.emit()
				}
			}, {
				key: "render",
				value: function() {
					var e = v.default.view.addresses.reduce(function(e, t) {
						return e.add(t.balance)
					}, (0, p.bigNumber)(0));
					return s.default.createElement(M, {
						Coin: this.Coin,
						step: v.default.view.step,
						seed_input: v.default.view.seed_input,
						seed_input_error: v.default.view.seed_input_error,
						seed_password: v.default.view.seed_password,
						seed_repassword: v.default.view.seed_repassword,
						discovering: v.default.view.discovering,
						addresses: v.default.view.addresses,
						address_selected: v.default.view.address_selected,
						total: e,
						is_valid_seed: v.default.view.is_valid_seed,
						isValidForm: this.isValidForm,
						isInvalidRepassword: this.isInvalidRepassword,
						onChangeInput: this.onChangeInput,
						onBlurInput: this.onBlurInput,
						onChangePassword: this.onChangePassword,
						onChangeRepassword: this.onChangeRepassword,
						onNext: this.onNext,
						onBack: this.onBack,
						onChangeSelected: this.onChangeSelected,
						onLoadMore: this.onLoadMore,
						onSubmit: this.onSubmit
					})
				}
			}, {
				key: "isInvalidRepassword",
				get: function() {
					return v.default.view.seed_password.length > 0 && v.default.view.seed_repassword.length > 0 && v.default.view.seed_password.length === v.default.view.seed_repassword.length && v.default.view.seed_password !== v.default.view.seed_repassword
				}
			}, {
				key: "isValidForm",
				get: function() {
					return v.default.view.is_valid_input && v.default.view.seed_input.length > 0 && v.default.view.seed_password.length >= f.minpassword && v.default.view.seed_password === v.default.view.seed_repassword
				}
			}]), t
		}();

	function M(e) {
		var t = e.Coin,
			n = e.step,
			r = e.seed_input,
			o = e.seed_input_error,
			a = e.seed_password,
			i = e.seed_repassword,
			l = e.discovering,
			d = e.addresses,
			u = e.address_selected,
			c = e.total,
			p = e.is_valid_seed,
			h = e.isValidForm,
			m = e.isInvalidRepassword,
			b = e.onChangeInput,
			v = e.onBlurInput,
			g = e.onChangePassword,
			F = e.onChangeRepassword,
			A = e.onNext,
			z = e.onBack,
			M = e.onChangeSelected,
			B = e.onLoadMore,
			D = e.onSubmit;
		return s.default.createElement("div", null, s.default.createElement(w.Show, {
			if: n === R.typing
		}, s.default.createElement("div", null, s.default.createElement(T.FormField, null, s.default.createElement(T.FormFieldLeft, null, s.default.createElement(S.Label, null, "Recovery Phrase"), s.default.createElement(S.SubLabel, null, "Type your 12 words in the exact order.")), s.default.createElement(T.FormFieldRight, null, s.default.createElement(E.default, {
			width: "100%",
			value: r,
			onChange: b,
			onBlur: v,
			error: o,
			invalid: o && r.length > 0
		}), s.default.createElement(w.Show, {
			if: !p && r.length > 0
		}, s.default.createElement(P.default, null, "You typed a non-standard or invalid Recovery Phrase. But coinfy allow you to import any other format that comes from other wallets. Including other languages.")))), s.default.createElement(T.FormField, null, s.default.createElement(T.FormFieldLeft, null, s.default.createElement(S.Label, null, "Password"), s.default.createElement(O.default, null, "Make sure that you remember this. This password can't be restored because we don't store it. For security reasons you will be asked often for this password."), s.default.createElement(S.SubLabel, null, "This password encrypts your seed key.")), s.default.createElement(T.FormFieldRight, null, s.default.createElement(k.default, {
			minlength: f.minpassword,
			value: a,
			onChange: g,
			width: "100%",
			type: "password"
		}))), s.default.createElement(T.FormField, null, s.default.createElement(T.FormFieldLeft, null, s.default.createElement(S.Label, null, "Repeat Password")), s.default.createElement(T.FormFieldRight, null, s.default.createElement(y.default, {
			minlength: f.minpassword,
			error: "Пароли не совпадают",
			invalid: m,
			value: i,
			onChange: F,
			width: "100%",
			type: "password"
		}))), s.default.createElement(T.FormField, null, s.default.createElement(T.FormFieldButtons, null, s.default.createElement(C.default, {
			width: "100px",
			disabled: !h,
			onClick: A
		}, "Далее"))))), s.default.createElement(w.Show, {
			if: n === R.addresses
		}, s.default.createElement("div", null, s.default.createElement(j.ItemsList, null, d.map(function(e, n) {
			var r = t.multiaddress || !t.multiaddress && n === u;
			return s.default.createElement(j.ItemList, {
				selected: r
			}, s.default.createElement(j.ItemListInner, null, s.default.createElement(w.Show, {
				if: !t.multiaddress
			}, s.default.createElement(j.ItemListItemRadio, null, s.default.createElement(_.default, {
				onClick: function(e) {
					return M(n)
				},
				checked: r
			}))), s.default.createElement(j.ItemListItemLeft, null, e.address), s.default.createElement(j.ItemListItemRight, null, e.balance + " " + t.symbol)))
		})), s.default.createElement(I, null, s.default.createElement(w.Show, {
			if: !l
		}, s.default.createElement(N, {
			onClick: B
		}, "Загрузить больше адресов")), s.default.createElement(L, null, c, " ", t.symbol)), s.default.createElement(x.default, {
			"margin-top": "35px"
		}, s.default.createElement(T.FormField, null, s.default.createElement(T.FormFieldButtons, null, s.default.createElement(C.default, {
			width: "100px",
			loading: l,
			loadingIco: "/static/image/loading.gif",
			onClick: D
		}, "Импорт")), s.default.createElement(T.FormFieldButtons, null, s.default.createElement(C.default, {
			width: "100px",
			onClick: z
		}, "Назад")))))))
	}
	t.default = z;
	var I = t.ResultAddress = d.default.div(o, c.default.color.background1),
		N = t.LoadMore = d.default.a(a, c.default.color.background2, c.default.color.background3),
		L = t.Total = d.default.div(i, c.default.color.background2)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = b(o),
		i = (b(n(1)), n(7)),
		l = n(16),
		s = b(n(8)),
		d = n(11),
		u = n(9),
		c = (b(n(2)), n(10)),
		f = b(n(23)),
		p = b(n(26)),
		h = n(21),
		m = n(22);

	function b(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var v = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, o.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, i.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(s.default.view);
				var t = (0, i.collect)();
				s.default.view.is_valid_input = !1, s.default.view.address_input = "", s.default.view.address_input_error = "", t.destroy();
				var n = (0, d.getParamsFromLocation)().symbol;
				this.Coin = u.Coins[n], this.onChangeInput = this.onChangeInput.bind(this), this.onSubmit = this.onSubmit.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "onChangeInput",
			value: function(e) {
				var t = (0, i.collect)(),
					n = e.target.value.trim();
				s.default.view.address_input = n, this.Coin.isAddress(n) ? (0, d.isAssetRegistered)(this.Coin.symbol, n) ? (s.default.view.address_input_error = "You already have this asset", s.default.view.is_valid_input = !1) : (s.default.view.address_input_error = "", s.default.view.is_valid_input = !0) : (s.default.view.address_input_error = "Invalid address", s.default.view.is_valid_input = !1), t.emit()
			}
		}, {
			key: "onSubmit",
			value: function(e) {
				e.preventDefault();
				var t = (0, i.collect)(),
					n = s.default.view.address_input,
					r = (0, l.createAsset)(this.Coin.type, this.Coin.symbol, n);
				(0, l.setHref)(c.routes.asset({
					asset_id: (0, d.getAssetId)(r)
				})), t.emit()
			}
		}, {
			key: "render",
			value: function() {
				return a.default.createElement(g, {
					address_input: s.default.view.address_input,
					address_input_error: s.default.view.address_input_error,
					isValidForm: s.default.view.is_valid_input,
					onChangeInput: this.onChangeInput,
					onSubmit: this.onSubmit
				})
			}
		}]), t
	}();

	function g(e) {
		var t = e.address_input,
			n = e.address_input_error,
			r = e.isValidForm,
			o = e.onChangeInput,
			i = e.onSubmit;
		return a.default.createElement("div", null, a.default.createElement(m.FormField, null, a.default.createElement(m.FormFieldLeft, null, a.default.createElement(h.Label, null, "Address"), a.default.createElement(h.SubLabel, null, "Type or paste your address.")), a.default.createElement(m.FormFieldRight, null, a.default.createElement(f.default, {
			type: "text",
			width: "100%",
			value: t,
			onChange: o,
			error: n,
			invalid: n && t.length > 0
		}))), a.default.createElement(m.FormField, null, a.default.createElement(m.FormFieldButtons, null, a.default.createElement(p.default, {
			width: "100px",
			disabled: !r,
			onClick: i
		}, "Import"))))
	}
	t.default = v
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		i = (r = ["\n    ", " {\n        display: none;\n    }\n"], o = ["\n    ", " {\n        display: none;\n    }\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		l = n(0),
		s = P(l),
		d = n(7),
		u = P(n(1)),
		c = P(n(2)),
		f = (n(9), n(10)),
		p = P(n(8)),
		h = n(16),
		m = n(11),
		b = P(n(48)),
		v = (P(n(31)), P(n(14))),
		g = P(n(110)),
		w = n(28),
		y = n(415),
		x = P(n(416)),
		_ = P(n(420)),
		E = P(n(204)),
		k = P(n(429)),
		C = P(n(430)),
		O = P(n(431));

	function P(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var S = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, l.Component), a(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, d.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(p.default.location, "pathname"), this.fetchSummary()
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return this.fetchSummary(), !1
			}
		}, {
			key: "fetchSummary",
			value: function() {
				var e = (0, m.getParamsFromLocation)().asset_id,
					t = (0, m.getAsset)(e);
				this.asset_id === e || t.summary.fetching || (this.asset_id = e, (0, h.fetchTxs)(e))
			}
		}, {
			key: "onClick",
			value: function(e) {
				(0, h.setHref)(e((0, m.getParamsFromLocation)()))
			}
		}, {
			key: "render",
			value: function() {
				var e = (0, m.getParamsFromLocation)().asset_id;
				return s.default.createElement(T, {
					components: this.props,
					location: p.default.location,
					route: (0, m.getRouteFromLocation)(),
					hasPrivateKey: (0, m.isAssetWithPrivateKeyOrSeed)(e),
					hasSeed: (0, m.isAssetWithSeed)(e),
					onClick: this.onClick
				})
			}
		}]), t
	}();

	function T(e) {
		var t = e.components,
			n = (e.location, e.route),
			r = e.hasPrivateKey,
			o = e.hasSeed,
			a = e.onClick,
			i = t.Summary || _.default,
			l = t.Send || E.default,
			d = t.Addresses || k.default,
			u = t.Export || C.default,
			p = t.Settings || O.default,
			h = r ? null : s.default.createElement(j, null, s.default.createElement(b.default, {
				position: "center",
				width: 175
			}, "Нет закрытого ключа или фразы восстановления"));
		o || s.default.createElement(j, null, s.default.createElement(b.default, {
			position: "center",
			width: 175
		}, "Только для кошельков, созданных с помощью фразы восстановления"));
		return s.default.createElement(w.RightContainerPadding, null, s.default.createElement(x.default, null), s.default.createElement(w.RightContent, null, s.default.createElement(v.default, {
			"margin-bottom": c.default.paddingContent
		}, s.default.createElement(y.Menu, null, s.default.createElement(y.MenuContentItem, {
			selected: n === f.routes.asset,
			onClick: function(e) {
				return a(f.routes.asset)
			}
		}, s.default.createElement(y.MenuContentItemText, null, "Получить")), s.default.createElement(y.MenuContentItem, {
			disabled: !r,
			selected: n === f.routes.assetSend,
			onClick: function(e) {
				r && a(f.routes.assetSend)
			}
		}, s.default.createElement(y.MenuContentItemText, null, "Отправить", h)), s.default.createElement(y.MenuContentItem, {
			disabled: !r,
			selected: n === f.routes.assetExport,
			onClick: function(e) {
				r && a(f.routes.assetExport)
			}
		}, s.default.createElement(y.MenuContentItemText, null, "Экспорт", h)))), s.default.createElement(f.Router, null, s.default.createElement(f.Route, {
			is: f.routes.asset
		}, s.default.createElement(i, null)), s.default.createElement(f.Route, {
			is: f.routes.assetSend
		}, s.default.createElement(l, null)), s.default.createElement(f.Route, {
			is: f.routes.assetAddresses,
			if: o
		}, s.default.createElement(d, null)), s.default.createElement(f.Route, {
			is: f.routes.assetExport,
			if: r
		}, s.default.createElement(u, null)), s.default.createElement(f.Route, {
			is: f.routes.assetSettings
		}, s.default.createElement(p, null)), s.default.createElement(f.Route, null, s.default.createElement(w.RightContainerMiddle2, null, s.default.createElement(g.default, null, "Not found"))))))
	}
	t.default = S;
	var j = u.default.span(i, c.default.media.second)
}, , , , , , , , , , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	t.PrivateKey = function() {
		var e = "";
		return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach(function(t) {
			t.red = t.red ? "red" : "", e += t.img ? '\n        <div class="area">\n            <div class="area-qr">\n                <img width="125" src="' + t.img + '">\n            </div>\n            <div class="area-right ' + t.red + '">\n                <div class="area-title">' + t.title + '</div>\n                <div class="area-hash">' + t.hash + '</div>\n                <div class="area-description">' + t.description + "</div>\n            </div>\n        </div>\n        " : '\n        <div class="area small ' + t.red + '">\n            <div class="area-titlesmall">' + t.title + ':</div>\n            <div class="area-long">' + t.hash + "</div>\n        </div>\n        "
		}), '\n<html>\n    <head>\n    <style>\nbody {\n    font-family: sans-serif;\n    font-size: 1rem;\n    color: black;\n}\n#content {\n    /* border: 1px solid black */\n}\n.area {\n    width: 95%;\n    height: 135px;\n    clear: both;\n    margin: 0 auto 2.3em auto;\n}\n.area.small {\n    height: auto;\n}\n.area-qr {\n    float: left;\n    padding-top: 0.7em;\n    padding-right: 1em;\n}\n\n.area-title {\n    font-weight: bold;\n    font-size: 2em;\n    padding-top: 0.5em;\n    padding-bottom: 0.3em;\n}\n.area-hash {\n    color:black;\n    font-family: monospace;\n    font-weight: bold;\n    word-break: break-all;\n    font-size: 1.3em;\n}\n.area-description {\n    padding-top: 0.8em;\n    font-size: 1em;\n    font-weight: bold;\n    opacity: 0.3;\n}\n.area-titlesmall {\n    font-weight: bold;\n    font-size: 1.2em;\n}\n.area-long {\n    font-family: monospace;\n    word-break: break-all;\n}\n.red * {\n    color: #DD0033 !important\n}\n#claim {\n    text-align: center;\n    color: #CCC\n}\n    </style>\n    </head>\n    <body>\n        <div id="content">\n            ' + e + '\n            <div id="claim">COINFY.COM</div>\n        </div>\n    </body>\n</html>\n'
	}, t.Words = function(e) {
		return '\n<html>\n<head>\n    <style>\n        body {\n            font-family: sans-serif;\n            font-size: 1rem;\n            color: black;\n        }\n        #content {\n            width: 90%;\n            margin: 0 auto;\n        }\n        #logo {\n            margin-top: 20px;\n            text-align: center;\n        }\n        #info {\n            margin-top: 30px;\n            color: gray;\n            font-size: 12px;\n        }\n        #words {\n            margin-top: 20px;\n            margin-bottom: 30px;\n            font-size: 27px;\n            color: black;\n            padding: 25px;\n            text-align: center;\n            font-weight: bold;\n            border-radius: 5px;\n            background: url(\'/static/image/pattern_background.png\');\n            font-family: monospace;\n        }\n        #claim {\n            text-align: center;\n            color: #CCC\n        }\n    </style>\n</head>\n<body>\n    <div id="content">\n        <div id="logo">\n            <img src="/static/image/logo2.svg" height="40" />\n        </div>\n        <div id="info">\n            Your recovery phrase allows you to recover your asset in case of loss or damage.\n            <strong>Without it, you will not be able to access your cryptocurrency if something goes wrong.</strong>\n            Make two copies of your recovery phrase and store them in separate physical locations.\n            Please note, your recovery phrase is case sensitive and each word must be written in the correct order.\n        </div>\n        <div id="words">' + e + '</div>\n        <div id="claim">COINFY.COM</div>\n    </div>\n</body>\n</html>'
	}
}, , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
	"use strict";
	var r;
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.derivation_path = t.logo = t.labels = t.changeaddress = t.multiaddress = t.satoshis = t.price_decimals = t.coin_decimals = t.ascii = t.color = t.name = t.symbol_fee = t.symbol = t.type = t.networks = void 0, t.setupNetwork = function(e, t) {
		var n = t[e];
		if (void 0 !== n) return v = e, b = n.network, m = n.url, g = m + "/api", !0;
		return !1
	}, t.format = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
		return (0, d.formatCoin)(e, t, w)
	}, t.cutDecimals = function(e) {
		return (0, d.limitDecimals)(e, y)
	}, t.toSatoshis = E, t.getWalletFromSeed = k, t.getWalletsFromSeed = C, t.isAddress = P, t.isSegwitAddress = S, t.isPrivateKey = T, t.isPrivateKeyBip = function(e) {
		return /^6P[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{56}$/.test(e)
	}, t.formatAddress = function(e) {
		return e.trim()
	}, t.getAddressFromPrivateKey = j, t.getSegwitAddressFromPrivateKey = F, t.urlInfo = function(e) {
		return m + "/address/" + e
	}, t.urlInfoTx = function(e) {
		return m + "/tx/" + e
	}, t.urlDecodeTx = function() {
		return "https://live.blockcypher.com/btc/decodetx/"
	}, t.encryptSeed = function(e, t) {
		return (0, s.encryptAES128CTR)(e, t)
	}, t.encryptPrivateKey = function(e, t) {
		return (0, s.encryptAES128CTR)(e, t)
	}, t.decryptPrivateKey = function(e, t, n) {
		var r = (0, s.decryptAES128CTR)(t, n);
		if (T(r)) {
			var o = j(r);
			if (o === e) return r
		}
	}, t.decryptPrivateKeyFromSeed = function(e, t, n, r) {
		var o = R(e, t, n, r);
		if (o) return o.private_key
	}, t.getNextWalletFromSeed = function(e, t, n, r) {
		var o = R(e, t, n, r);
		if (o) return k({
			seed: o.seed,
			index: o.index + 1
		})
	}, t.decryptWalletFromSeed = R, t.decryptSeed = function(e, t, n) {
		var r = (0, s.decryptAES128CTR)(t, n),
			o = k({
				seed: r
			});
		if (e.includes(o.address)) return r
	}, t.encryptBIP38 = function(e, t, n) {
		return (0, s.encryptBIP38)(e, t, n)
	}, t.decryptBIP38 = function(e, t, n) {
		return (0, s.decryptBIP38)(e, t, n, b.wif)
	}, t.discoverAddress = z, t.discoverWallet = function(e, t) {
		var n = e.seed;
		return new Promise(function(e) {
			var r = 0,
				o = !1,
				a = [],
				i = function(e) {
					t && t(e), a.push(e.address)
				};
			! function t() {
				z({
					seed: n,
					index: r,
					segwit: o
				}).then(function(n) {
					n.totalReceived > 0 ? (r += 1, i(n), t()) : o ? (0 === a.length && (r += 1, i({
						address: n.address,
						balance: 0
					})), e({
						address: a[a.length - 1],
						addresses: a,
						index: r,
						segwit: o
					})) : (r = 0, o = !0, t())
				})
			}()
		})
	}, t.fetchBalance = function(e) {
		return M(e).then(function(e) {
			return (0, d.bigNumber)(e.unconfirmedBalance < 0 ? e.balance + e.unconfirmedBalance : e.balance).toString()
		})
	}, t.fetchRecomendedFee = function() {
		return fetch(g + "/utils/estimatefee").then(function(e) {
			return e.json()
		}).then(function(e) {
			return e[2]
		})
	}, t.fetchTxs = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t + 25;
		return fetch(g + "/addrs/" + e.join(",") + "/txs?noScriptSig=1&noAsm=1&noSpent=0&from=" + t + "&to=" + n).then(function(e) {
			return e.json()
		}).then(function(t) {
			var n = {
				totalTxs: t.totalItems,
				txs: []
			};
			return t.items.forEach(function(t) {
				var r = t.vin.filter(function(t) {
						return e.includes(t.addr)
					}).reduce(function(e, t) {
						return e.add(t.value)
					}, (0, d.bigNumber)(0)),
					o = t.vout.filter(function(t) {
						var n = t.scriptPubKey;
						return n && n.addresses && (0, u.includesMultiple)(n.addresses, e)
					}).reduce(function(e, t) {
						return e.add(t.value)
					}, (0, d.bigNumber)(0)),
					a = {
						txid: t.txid,
						fees: (0, d.bigNumber)(t.fees),
						time: t.time,
						confirmations: t.confirmations,
						value: r.minus(o).minus(t.fees).times(-1)
					};
				a.value.gt(0) && (a.value = a.value.minus(t.fees)), a.value.gt(0) || a.value.lt(0) ? n.txs.push(a) : n.totalTxs -= 1
			}), n
		})
	}, t.createSimpleTx = function(e) {
		var t = e.from_addresses,
			n = e.to_address,
			r = e.private_keys,
			o = e.amount,
			a = e.fee,
			l = e.change_address,
			s = t[t.length - 1];
		return l = P(l) ? l : s, fetch(g + "/addrs/" + t.join(",") + "/utxo?noCache=1").then(function(e) {
			return e.json()
		}).then(function(e) {
			var s = (0, d.bigNumber)(0),
				c = (0, d.bigNumber)(o).plus(a),
				f = new i.default.TransactionBuilder(b);
			(0, u.sortBy)(e || [], "-amount").forEach(function(e, t) {
				s.lt(c) && (f.addInput(e.txid, e.vout), f.inputs[t].satoshis = e.satoshis, f.inputs[t].address = e.address, s = s.plus(e.amount))
			}), f.addOutput(n, E(o));
			var p = (0, d.bigNumber)(s).minus(o).minus((0, d.bigNumber)(a));
			return p.gt(0) && f.addOutput(l, E(p)), f.inputs.forEach(function(e, n) {
				try {
					var o = (e.address, !1),
						a = t.indexOf(e.address),
						l = i.default.ECPair.fromWIF(r[a], b);
					o ? f.sign(n, l, A(l), null, e.satoshis) : f.sign(n, l)
				} catch (e) {
					console.error(e)
				}
			}), console.log(f.inputs), f.build().toHex()
		})
	}, t.getSendProviders = function() {
		return I[v === f.MAINNET ? "mainnet" : "testnet"]
	};
	var o, a = n(79),
		i = (o = a) && o.__esModule ? o : {
			default: o
		},
		l = n(52),
		s = n(44),
		d = n(18),
		u = n(41),
		c = (n(56), n(57)),
		f = n(4);

	function p(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}
	var h = t.networks = (p(r = {}, f.MAINNET, {
			network: i.default.networks.bitcoin,
			url: "https://bch.blockdozer.com"
		}), p(r, f.TESTNET, {
			network: i.default.networks.testnet,
			url: "https://tbch.blockdozer.com"
		}), r),
		m = void 0,
		b = void 0,
		v = void 0,
		g = void 0;
	t.type = f.TYPE_COIN;
	var w = t.symbol = "BCH",
		y = (t.symbol_fee = w, t.name = "Bitcoin Cash", t.color = "#99c361", t.ascii = "Ƀ", t.coin_decimals = 8),
		x = (t.price_decimals = 0, t.satoshis = Math.pow(10, y)),
		_ = (t.multiaddress = !0, t.changeaddress = !0, t.labels = "bch coin", t.logo = (0, f.ASSET_LOGO)(w), t.derivation_path = {
			mainnet: function(e) {
				return "m/44'/145'/0'/0/" + e
			},
			testnet: function(e) {
				return "m/44'/1'/0'/0/" + e
			}
		});

	function E(e) {
		return Math.round(Number((0, d.bigNumber)(e).times(x)))
	}

	function k(e) {
		var t = e.seed,
			n = e.index,
			r = void 0 === n ? 0 : n,
			o = e.derived_path_function,
			a = e.passphase;
		return C({
			seed: t,
			index: r,
			derived_path_function: o,
			passphase: void 0 === a ? "" : a
		})[0]
	}

	function C(e) {
		var t = e.seed,
			n = e.index,
			r = void 0 === n ? 0 : n,
			o = e.count,
			a = void 0 === o ? 1 : o,
			i = e.derived_path_function,
			s = e.passphase,
			d = void 0 === s ? "" : s;
		void 0 === i && (i = v === f.MAINNET ? _.mainnet : _.testnet);
		for (var u = [], c = (0, l.getBip32RootKey)({
				seed: t,
				passphase: d,
				network: b
			}); a-- > 0;) {
			var p = i(r++),
				h = c.derivePath(p).keyPair;
			u.push(O(h))
		}
		return u
	}

	function O(e) {
		return {
			address: e.getAddress(),
			private_key: e.toWIF()
		}
	}

	function P(e) {
		return (0, c.validateAddress)({
			symbol: w,
			address: e,
			network: b
		})
	}

	function S(e) {
		return !1
	}

	function T(e) {
		try {
			return P(j(e))
		} catch (e) {
			return !1
		}
	}

	function j(e) {
		return i.default.ECPair.fromWIF(e, b).getAddress().toString()
	}

	function F(e) {
		var t = i.default.ECPair.fromWIF(e, b);
		return function(e) {
			var t = A(e),
				n = i.default.crypto.hash160(t),
				r = i.default.script.scriptHash.output.encode(n);
			return i.default.address.fromOutputScript(r, b)
		}(new i.default.ECPair(t.d))
	}

	function A(e) {
		var t = e.getPublicKeyBuffer(),
			n = i.default.crypto.hash160(t);
		return i.default.script.witnessPubKeyHash.output.encode(n)
	}

	function R(e, t, n, r) {
		for (var o, a = (0, s.decryptAES128CTR)(n, r), i = t.length - 1; i >= 0; i--)
			if ((o = k({
					seed: a,
					index: i
				})).address === e) return o.seed = a, o.index = i, o
	}

	function z(e) {
		var t = e.seed,
			n = e.index,
			r = void 0 === n ? 0 : n;
		return new Promise(function(e) {
			var n = k({
				seed: t,
				index: r
			}).address;
			M(n).then(function(t) {
				e({
					address: n,
					balance: t.balance,
					totalReceived: t.totalReceived
				})
			})
		})
	}

	function M(e) {
		return fetch(g + "/addr/" + e).then(function(e) {
			return e.json()
		}).then(function(e) {
			return e
		})
	}
	var I = {
		mainnet: [{
			name: "Blockdozer.com",
			url: h[f.MAINNET].url + "/tx/send",
			send: N
		}],
		testnet: [{
			name: "Blockdozer.com",
			url: h[f.TESTNET].url + "/tx/send",
			send: N
		}]
	};

	function N(e) {
		var t = {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				rawtx: e
			})
		};
		return fetch(g + "/tx/send", t).then(function(e) {
			return e.text()
		}).then(function(e) {
			try {
				return JSON.parse(e)
			} catch (t) {
				return Promise.reject(e)
			}
		}).then(function(e) {
			return e.txid
		})
	}
}, function(e, t, n) {
	"use strict";
	var r;
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.derivation_path = t.networks_availables = t.logo = t.labels = t.changeaddress = t.multiaddress = t.satoshis = t.price_decimals = t.coin_decimals = t.ascii = t.color = t.name = t.symbol_fee = t.symbol = t.type = t.networks = void 0, t.setupNetwork = function(e, t) {
		var n = t[e];
		if (void 0 !== n) return v = e, b = n.network, m = n.url, g = m + "/api", !0;
		return !1
	}, t.format = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
		return (0, d.formatCoin)(e, t, w)
	}, t.cutDecimals = E, t.toSatoshis = k, t.getWalletFromSeed = C, t.getWalletsFromSeed = O, t.isAddress = T, t.isSegwitAddress = j, t.isPrivateKey = F, t.isPrivateKeyBip = function(e) {
		return /^6P[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{56}$/.test(e)
	}, t.formatAddress = function(e) {
		return e.trim()
	}, t.getAddressFromPrivateKey = A, t.getSegwitAddressFromPrivateKey = R, t.urlInfo = function(e) {
		return m + "/address/" + e
	}, t.urlInfoTx = function(e) {
		return m + "/tx/" + e
	}, t.urlDecodeTx = function() {
		return "https://live.blockcypher.com/ltc/decodetx/"
	}, t.encryptSeed = function(e, t) {
		return (0, s.encryptAES128CTR)(e, t)
	}, t.encryptPrivateKey = function(e, t) {
		return (0, s.encryptAES128CTR)(e, t)
	}, t.decryptPrivateKey = function(e, t, n) {
		var r = (0, s.decryptAES128CTR)(t, n);
		if (F(r)) {
			var o = j(e) ? R(r) : A(r);
			if (o === e) return r
		}
	}, t.decryptPrivateKeyFromSeed = function(e, t, n, r) {
		var o = M(e, t, n, r);
		if (o) return o.private_key
	}, t.getNextWalletFromSeed = function(e, t, n, r) {
		var o = M(e, t, n, r);
		if (o) return C({
			seed: o.seed,
			index: o.index + 1,
			segwit: o.segwit
		})
	}, t.decryptWalletFromSeed = M, t.decryptSeed = function(e, t, n) {
		var r = (0, s.decryptAES128CTR)(t, n),
			o = C({
				seed: r
			}),
			a = C({
				seed: r,
				segwit: !1
			});
		if (e.includes(o.address) || e.includes(a.address)) return r
	}, t.encryptBIP38 = function(e, t, n) {
		return (0, s.encryptBIP38)(e, t, n)
	}, t.decryptBIP38 = function(e, t, n) {
		return (0, s.decryptBIP38)(e, t, n, b.wif)
	}, t.discoverAddress = I, t.discoverWallet = function(e, t) {
		var n = e.seed;
		return new Promise(function(e) {
			var r = 0,
				o = !1,
				a = [],
				i = function(e) {
					t && t(e), a.push(e.address)
				};
			! function t() {
				I({
					seed: n,
					index: r,
					segwit: o
				}).then(function(n) {
					n.totalReceived > 0 ? (r += 1, i(n), t()) : o ? (0 === a.length && (r += 1, i({
						address: n.address,
						balance: 0
					})), e({
						address: a[a.length - 1],
						addresses: a,
						index: r,
						segwit: o
					})) : (r = 0, o = !0, t())
				})
			}()
		})
	}, t.fetchBalance = function(e) {
		return L(e).then(function(e) {
			return (0, d.bigNumber)(e.unconfirmedBalance < 0 ? e.balance + e.unconfirmedBalance : e.balance).toString()
		})
	}, t.fetchRecomendedFee = function(e) {
		var t = e.addresses,
			n = e.amount,
			r = void 0 === n ? 0 : n,
			o = e.outputs,
			a = void 0 === o ? 1 : o,
			i = e.use_cache,
			l = void 0 !== i && i,
			s = t.join(","),
			c = N[s];
		return (void 0 !== c && void 0 !== c.fee_per_kb && void 0 !== c.inputs && l ? Promise.resolve() : fetch("https://api.blockcypher.com/v1/ltc/main").then(function(e) {
			return e.json()
		}).then(function(e) {
			return (e.high_fee_per_kb + e.medium_fee_per_kb) / 2 / 1024
		}).catch(function(e) {
			return Promise.reject("LTC.fetchRecomendedFee: We couldn't fetch fee prices")
		}).then(function(e) {
			return console.log(e), N[s] = {
				fee_per_kb: e
			}, fetch(g + "/addrs/" + s + "/utxo?noCache=1")
		}).then(function(e) {
			return e.json()
		}).catch(function(e) {
			return Promise.reject("LTC.fetchRecomendedFee: We couldn't fetch utxo")
		}).then(function(e) {
			var t = (0, u.sortBy)(e || [], "-amount").map(function(e) {
				return e.amount
			});
			return N[s].inputs = t
		})).then(function() {
			var e = N[s],
				t = e.inputs || [],
				n = {
					amount: r || 0,
					fee_per_kb: e.fee_per_kb,
					inputs: t,
					outputs: a + 1
				};
			return function(e) {
				for (var t = e.fee_per_kb, n = e.amount, r = e.inputs, o = e.outputs, a = e.extra_bytes, i = void 0 === a ? 0 : a, l = 0, s = 0, u = 0; s < r.length && l < n; ++s) l += r[s], u += 1;
				return E((0, d.bigNumber)(10 + 148 * u + 34 * o + i).times(t).div(x).toFixed())
			}(n)
		})
	}, t.fetchTxs = function(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t + 25;
		return fetch(g + "/addrs/" + e.join(",") + "/txs?noScriptSig=1&noAsm=1&noSpent=0&from=" + t + "&to=" + n).then(function(e) {
			return e.json()
		}).then(function(t) {
			var n = {
				totalTxs: t.totalItems,
				txs: []
			};
			return t.items.forEach(function(t) {
				var r = t.vin.filter(function(t) {
						return e.includes(t.addr)
					}).reduce(function(e, t) {
						return e.add(t.value)
					}, (0, d.bigNumber)(0)),
					o = t.vout.filter(function(t) {
						var n = t.scriptPubKey;
						return n && n.addresses && (0, u.includesMultiple)(n.addresses, e)
					}).reduce(function(e, t) {
						return e.add(t.value)
					}, (0, d.bigNumber)(0)),
					a = {
						txid: t.txid,
						fees: (0, d.bigNumber)(t.fees),
						time: t.time,
						confirmations: t.confirmations,
						value: r.minus(o).minus(t.fees).times(-1)
					};
				a.value.gt(0) && (a.value = a.value.minus(t.fees)), a.value.gt(0) || a.value.lt(0) ? (a.fees = a.fees.toFixed(), a.value = a.value.toFixed(), n.txs.push(a)) : n.totalTxs -= 1
			}), n
		})
	}, t.createSimpleTx = function(e) {
		var t = e.from_addresses,
			n = e.to_address,
			r = e.private_keys,
			o = e.amount,
			a = e.fee,
			l = e.change_address,
			s = t[t.length - 1];
		return l = T(l) ? l : s, fetch(g + "/addrs/" + t.join(",") + "/utxo?noCache=1").then(function(e) {
			return e.json()
		}).then(function(e) {
			if (0 !== e.length) {
				var s = (0, d.bigNumber)(0),
					c = (0, d.bigNumber)(o).plus(a),
					f = new i.default.TransactionBuilder(b);
				(0, u.sortBy)(e, "-amount").forEach(function(e, t) {
					s.lt(c) && (f.addInput(e.txid, e.vout), f.inputs[t].satoshis = e.satoshis, f.inputs[t].address = e.address, s = s.plus(e.amount))
				}), f.addOutput(n, k(o));
				var p = (0, d.bigNumber)(s).minus(o).minus((0, d.bigNumber)(a));
				return p.gt(0) && f.addOutput(l, k(p)), f.inputs.forEach(function(e, n) {
					try {
						var o = j(e.address),
							a = t.indexOf(e.address),
							l = i.default.ECPair.fromWIF(r[a], b);
						o ? f.sign(n, l, z(l), null, e.satoshis) : f.sign(n, l)
					} catch (e) {
						console.error(e)
					}
				}), console.log(f.inputs), f.build().toHex()
			}
		})
	}, t.getSendProviders = function() {
		return B[v === f.MAINNET ? "mainnet" : "testnet"]
	};
	var o, a = n(79),
		i = (o = a) && o.__esModule ? o : {
			default: o
		},
		l = n(52),
		s = n(44),
		d = n(18),
		u = n(41),
		c = (n(56), n(57)),
		f = n(4);

	function p(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}
	var h = t.networks = (p(r = {}, f.MAINNET, {
			network: i.default.networks.litecoin,
			url: "https://insight.litecore.io"
		}), p(r, f.TESTNET, {
			network: {
				messagePrefix: "Litecoin Signed Message:\n",
				bip32: {
					public: 70711009,
					private: 70709117
				},
				pubKeyHash: 111,
				scriptHash: 58,
				wif: 239
			},
			url: "https://testnet.litecore.io"
		}), r),
		m = void 0,
		b = void 0,
		v = void 0,
		g = void 0;
	t.type = f.TYPE_COIN;
	var w = t.symbol = "LTC",
		y = (t.symbol_fee = w, t.name = "Litecoin", t.color = "#BEBEBE", t.ascii = "Ł", t.coin_decimals = 8),
		x = (t.price_decimals = 0, t.satoshis = Math.pow(10, y)),
		_ = (t.multiaddress = !0, t.changeaddress = !0, t.labels = "ltc coin", t.logo = (0, f.ASSET_LOGO)(w), t.networks_availables = [f.MAINNET, f.TESTNET], t.derivation_path = {
			mainnet: function(e) {
				return "m/44'/2'/0'/0/" + e
			},
			mainnetsegwit: function(e) {
				return "m/49'/2'/0'/0/" + e
			},
			testnet: function(e) {
				return "m/44'/1'/0'/0/" + e
			},
			testnetsegwit: function(e) {
				return "m/49'/1'/0'/0/" + e
			}
		});

	function E(e) {
		return (0, d.limitDecimals)(e, y)
	}

	function k(e) {
		return Math.round(Number((0, d.bigNumber)(e).times(x)))
	}

	function C(e) {
		var t = e.seed,
			n = e.index,
			r = void 0 === n ? 0 : n,
			o = e.derived_path_function,
			a = e.passphase,
			i = void 0 === a ? "" : a,
			l = e.segwit;
		return O({
			seed: t,
			index: r,
			derived_path_function: o,
			passphase: i,
			segwit: void 0 === l || l
		})[0]
	}

	function O(e) {
		var t = e.seed,
			n = e.index,
			r = void 0 === n ? 0 : n,
			o = e.count,
			a = void 0 === o ? 1 : o,
			i = e.derived_path_function,
			s = e.passphase,
			d = void 0 === s ? "" : s,
			u = e.segwit,
			c = void 0 === u || u;
		void 0 === i && (i = v === f.MAINNET ? c ? _.mainnetsegwit : _.mainnet : c ? _.testnetsegwit : _.testnet);
		for (var p = [], h = (0, l.getBip32RootKey)({
				seed: t,
				passphase: d,
				network: b
			}); a-- > 0;) {
			var m = i(r++),
				g = h.derivePath(m),
				w = g.keyPair;
			p.push(c ? S(g.keyPair) : P(w))
		}
		return p
	}

	function P(e) {
		return {
			address: e.getAddress(),
			private_key: e.toWIF()
		}
	}

	function S(e) {
		var t = e.getPublicKeyBuffer(),
			n = i.default.crypto.hash160(t),
			r = i.default.script.witnessPubKeyHash.output.encode(n),
			o = i.default.crypto.hash160(r),
			a = i.default.script.scriptHash.output.encode(o);
		return {
			address: i.default.address.fromOutputScript(a, b),
			private_key: e.toWIF()
		}
	}

	function T(e) {
		return (0, c.validateAddress)({
			symbol: w,
			address: e,
			network: b
		})
	}

	function j(e) {
		var t = i.default.address.fromBase58Check(e).version;
		return t === h[f.MAINNET].network.scriptHash || t === h[f.TESTNET].network.scriptHash
	}

	function F(e) {
		try {
			return T(A(e))
		} catch (e) {
			return !1
		}
	}

	function A(e) {
		return i.default.ECPair.fromWIF(e, b).getAddress().toString()
	}

	function R(e) {
		var t = i.default.ECPair.fromWIF(e, b);
		return function(e) {
			var t = z(e),
				n = i.default.crypto.hash160(t),
				r = i.default.script.scriptHash.output.encode(n);
			return i.default.address.fromOutputScript(r, b)
		}(new i.default.ECPair(t.d))
	}

	function z(e) {
		var t = e.getPublicKeyBuffer(),
			n = i.default.crypto.hash160(t);
		return i.default.script.witnessPubKeyHash.output.encode(n)
	}

	function M(e, t, n, r) {
		for (var o, a = (0, s.decryptAES128CTR)(n, r), i = t.length - 1; i >= 0; i--) {
			if ((o = C({
					seed: a,
					index: i
				})).address === e) return o.seed = a, o.index = i, o.segwit = !0, o;
			if ((o = C({
					seed: a,
					index: i,
					segwit: !1
				})).address === e) return o.seed = a, o.index = i, o.segwit = !1, o
		}
	}

	function I(e) {
		var t = e.seed,
			n = e.index,
			r = void 0 === n ? 0 : n,
			o = e.segwit,
			a = void 0 !== o && o;
		return new Promise(function(e) {
			var n = C({
				seed: t,
				index: r,
				segwit: a
			}).address;
			L(n).then(function(t) {
				e({
					address: n,
					balance: String(t.balance),
					totalReceived: String(t.totalReceived)
				})
			})
		})
	}
	var N = {};

	function L(e) {
		return fetch(g + "/addr/" + e).then(function(e) {
			return e.json()
		}).then(function(e) {
			return e
		})
	}
	var B = {
		mainnet: [{
			name: "BlockCypher",
			url: "https://live.blockcypher.com/ltc/pushtx/",
			send: (0, c.sendRawTxBlockcypher)("https://api.blockcypher.com/v1/ltc/main/txs/push")
		}, {
			name: "Litecore",
			url: "https://insight.litecore.io/tx/send",
			send: (0, c.sendRawTxInsight)("https://insight.litecore.io/api/tx/send")
		}],
		testnet: [{
			name: "Litecore.io",
			url: "https://testnet.litecore.io/tx/send",
			send: (0, c.sendRawTxInsight)("https://testnet.litecore.io/api/tx/send")
		}]
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
		return typeof e
	} : function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	};
	t.jsonParse = function(e, t) {
		var n = void 0;
		try {
			n = JSON.parse(e, t)
		} catch (e) {}
		return null !== n && "object" == (void 0 === n ? "undefined" : r(n)) ? n : {}
	}, t.keysToLowerCase = function(e) {
		return JSON.parse(e, (t = void 0, function(e, n) {
			void 0 !== t && delete t.obj[t.key];
			var r = e.toLowerCase();
			return e.length > 0 && !this.hasOwnProperty(r) && (this[r] = n, t = {
				obj: this,
				key: e
			}), n
		}));
		var t
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.DropdownItem = t.DropdownMenu = t.Dropdown = void 0;
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = c(["\n    position: relative;\n    /* z-index: 1; */\n"], ["\n    position: relative;\n    /* z-index: 1; */\n"]),
		a = c(["\n    z-index: 99;\n    width: ", ";\n    margin-left: 1px;\n    position: absolute;\n    background: white;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    display: ", ";\n    left: ", ";\n    right: ", ";\n    top: ", ";\n"], ["\n    z-index: 99;\n    width: ", ";\n    margin-left: 1px;\n    position: absolute;\n    background: white;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    display: ", ";\n    left: ", ";\n    right: ", ";\n    top: ", ";\n"]),
		i = c(["\n    position: relative;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: block;\n    text-decoration: none;\n    padding: 10px 18px;\n    font-size: 13px;\n    color: ", ";\n    background-color: ", ";\n    border-top: 1px solid ", ";\n    min-width: 90px;\n    text-align: left;\n    pointer-events: ", ";\n    &:first-child {\n        border-top: 0;\n    }\n    &:hover {\n        background-color: ", ";\n        color: ", ";\n    }\n"], ["\n    position: relative;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: block;\n    text-decoration: none;\n    padding: 10px 18px;\n    font-size: 13px;\n    color: ", ";\n    background-color: ", ";\n    border-top: 1px solid ", ";\n    min-width: 90px;\n    text-align: left;\n    pointer-events: ", ";\n    &:first-child {\n        border-top: 0;\n    }\n    &:hover {\n        background-color: ", ";\n        color: ", ";\n    }\n"]),
		l = u(n(0)),
		s = u(n(1)),
		d = u(n(2));

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function c(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	t.Dropdown = function(e) {
		function t(e) {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var n = function(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.eventJustCreated = !1, n.onOpen = n.onOpen.bind(n), n.onClose = n.onClose.bind(n), e.open && n.createEvent(), n
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, l.default.Component), r(t, [{
			key: "componentWillReceiveProps",
			value: function(e, t) {
				this.props.open !== e.open && (e.open ? this.createEvent() : this.removeEvent())
			}
		}, {
			key: "createEvent",
			value: function() {
				var e = this;
				this.eventJustCreated = !0, this.callback = function(t) {
					!e.eventJustCreated && e.dropdownmenu && e.dropdownmenu.base !== t.target && e.onClose(t), e.eventJustCreated = !1
				}, document.addEventListener("click", this.callback)
			}
		}, {
			key: "removeEvent",
			value: function() {
				document.removeEventListener("click", this.callback)
			}
		}, {
			key: "onOpen",
			value: function(e) {
				!this.props.open && this.props.onOpen && this.props.onOpen(e)
			}
		}, {
			key: "onClose",
			value: function(e) {
				this.props.open && this.props.onClose && this.props.onClose(e)
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = t.children;
				return n.forEach(function(n, r) {
					n.nodeName;
					var o = n.attributes;
					void 0 !== o && (o.ref = function(t) {
						return e.dropdownmenu = t
					}, o.visible = t.open)
				}), l.default.createElement(f, {
					onClick: this.onOpen
				}, n)
			}
		}]), t
	}();
	var f = s.default.div(o);
	t.DropdownMenu = s.default.div(a, function(e) {
		return e.width ? "calc(" + e.width + " - 2px)" : "auto"
	}, function(e) {
		return e.visible ? "block" : "none"
	}, function(e) {
		return e.left
	}, function(e) {
		return e.right
	}, function(e) {
		return e.top
	}), t.DropdownItem = s.default.a(i, function(e) {
		return e.disabled ? d.default.color.disabled : e.selected ? d.default.color.front3 : d.default.color.front1
	}, function(e) {
		return e.selected ? d.default.color.background1 : "transparent"
	}, d.default.color.background4, function(e) {
		return e.disabled ? "none" : "auto"
	}, d.default.color.background1, d.default.color.front3)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\ntext-align: center;\nfont-size: 30px;\nfont-weight: bold;\ncolor: lightgrey;\nheight:100%;\npadding: 0 40px;\n", " {\n    font-size: 20px\n}\n"], o = ["\ntext-align: center;\nfont-size: 30px;\nfont-weight: bold;\ncolor: lightgrey;\nheight:100%;\npadding: 0 40px;\n", " {\n    font-size: 20px\n}\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		i = (s(n(0)), s(n(1))),
		l = s(n(2));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = i.default.div(a, l.default.media.fourth)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		i = (r = ["\n    & input {\n        box-sizing: content-box;\n        display: none;\n    }\n    & div {\n        position: relative;\n        float: left;\n        display: block;\n        width: 13px;\n        height: 13px;\n        border-radius: 50%;\n        vertical-align: top;\n        cursor: ", ";\n        border: 3px solid\n            ", ";\n        transition: all 0.35s ease;\n        -webkit-transition: all 0.35s ease;\n        -moz-transition: all 0.55s ease;\n        -o-transition: all 0.35s ease;\n    }\n    & div:before {\n        content: '';\n        position: absolute;\n        top: 3px;\n        left: 3px;\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        background: ", ";\n        transition: all 0.35s ease;\n        -webkit-transition: all 0.35s ease;\n        -moz-transition: all 0.55s ease;\n        -o-transition: all 0.35s ease;\n    }\n"], o = ["\n    & input {\n        box-sizing: content-box;\n        display: none;\n    }\n    & div {\n        position: relative;\n        float: left;\n        display: block;\n        width: 13px;\n        height: 13px;\n        border-radius: 50%;\n        vertical-align: top;\n        cursor: ", ";\n        border: 3px solid\n            ", ";\n        transition: all 0.35s ease;\n        -webkit-transition: all 0.35s ease;\n        -moz-transition: all 0.55s ease;\n        -o-transition: all 0.35s ease;\n    }\n    & div:before {\n        content: '';\n        position: absolute;\n        top: 3px;\n        left: 3px;\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        background: ", ";\n        transition: all 0.35s ease;\n        -webkit-transition: all 0.35s ease;\n        -moz-transition: all 0.55s ease;\n        -o-transition: all 0.35s ease;\n    }\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		})));
	t.default = function(e) {
		return l.default.createElement(c, e, l.default.createElement("input", a({}, e, {
			type: "radio"
		})), l.default.createElement("div", null))
	};
	var l = u(n(0)),
		s = u(n(1)),
		d = u(n(2));

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var c = s.default.div(i, function(e) {
		return e.disabled ? "default" : "pointer"
	}, function(e) {
		return e.disabled ? d.default.color.grey1 : (e.checked, d.default.color.background3)
	}, function(e) {
		return e.checked ? e.disabled ? d.default.color.grey1 : d.default.color.background3 : "transparent"
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = y(o),
		i = (y(n(1)), n(7)),
		l = n(16),
		s = y(n(8)),
		d = n(11),
		u = n(9),
		c = (y(n(2)), n(10)),
		f = n(4),
		p = y(n(23)),
		h = y(n(31)),
		m = y(n(67)),
		b = y(n(26)),
		v = y(n(48)),
		g = n(21),
		w = n(22);

	function y(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var x = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, o.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, i.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(s.default.view);
				var t = (0, i.collect)();
				s.default.view.type_segwit = !1, s.default.view.is_valid_input = !1, s.default.view.private_input = "", s.default.view.private_input_error = "", s.default.view.private_password = "", s.default.view.private_repassword = "", t.destroy();
				var n = (0, d.getParamsFromLocation)().symbol;
				this.Coin = u.Coins[n], this.onChangeType = this.onChangeType.bind(this), this.onChangeInput = this.onChangeInput.bind(this), this.onChangePassword = this.onChangePassword.bind(this), this.onChangeRepassword = this.onChangeRepassword.bind(this), this.onSubmit = this.onSubmit.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "calculateAddress",
			value: function() {
				var e = (0, i.collect)(),
					t = s.default.view.private_input;
				if (t.length > 0 && this.Coin.isPrivateKey(t)) try {
					var n = s.default.view.type_segwit ? this.Coin.getSegwitAddressFromPrivateKey(t) : this.Coin.getAddressFromPrivateKey(t);
					(0, d.isAssetRegistered)(this.Coin.symbol, n) ? (s.default.view.private_input_error = "You already have this asset", s.default.view.is_valid_input = !1) : (s.default.view.address = n, s.default.view.private_input_error = "", s.default.view.is_valid_input = !0)
				} catch (e) {
					s.default.view.is_valid_input = !1, s.default.view.private_input_error = "Invalid private key", console.error(e)
				} else s.default.view.private_input_error = "Invalid private key", s.default.view.is_valid_input = !1;
				e.emit()
			}
		}, {
			key: "onChangeType",
			value: function(e) {
				s.default.view.type_segwit = "true" === e.target.value, this.calculateAddress()
			}
		}, {
			key: "onChangeInput",
			value: function(e) {
				s.default.view.private_input = e.target.value.trim(), this.calculateAddress()
			}
		}, {
			key: "onChangePassword",
			value: function(e) {
				s.default.view.private_password = e.target.value
			}
		}, {
			key: "onChangeRepassword",
			value: function(e) {
				s.default.view.private_repassword = e.target.value
			}
		}, {
			key: "onSubmit",
			value: function(e) {
				e.preventDefault();
				var t = (0, i.collect)(),
					n = s.default.view.address,
					r = (0, l.createAsset)(this.Coin.type, this.Coin.symbol, n),
					o = (0, d.getAssetId)(r);
				(0, l.setPrivateKey)(o, s.default.view.private_input, s.default.view.private_password), (0, l.setHref)(c.routes.asset({
					asset_id: o
				})), t.emit()
			}
		}, {
			key: "render",
			value: function() {
				return a.default.createElement(_, {
					type_segwit: s.default.view.type_segwit,
					private_input: s.default.view.private_input,
					private_input_error: s.default.view.private_input_error,
					private_password: s.default.view.private_password,
					private_repassword: s.default.view.private_repassword,
					isValidForm: this.isValidForm,
					isInvalidRepassword: this.isInvalidRepassword,
					onChangeType: this.onChangeType,
					onChangeInput: this.onChangeInput,
					onChangePassword: this.onChangePassword,
					onChangeRepassword: this.onChangeRepassword,
					onSubmit: this.onSubmit
				})
			}
		}, {
			key: "isInvalidRepassword",
			get: function() {
				return s.default.view.private_password.length > 0 && s.default.view.private_repassword.length > 0 && s.default.view.private_password.length === s.default.view.private_repassword.length && s.default.view.private_password !== s.default.view.private_repassword
			}
		}, {
			key: "isValidForm",
			get: function() {
				return s.default.view.is_valid_input && s.default.view.private_password.length >= f.minpassword && s.default.view.private_password === s.default.view.private_repassword
			}
		}]), t
	}();

	function _(e) {
		var t = e.type_segwit,
			n = e.private_input,
			r = e.private_input_error,
			o = e.private_password,
			i = e.private_repassword,
			l = e.isValidForm,
			s = e.isInvalidRepassword,
			d = e.onChangeType,
			u = e.onChangeInput,
			c = e.onChangePassword,
			y = e.onChangeRepassword,
			x = e.onSubmit;
		return a.default.createElement("div", null, a.default.createElement(w.FormField, null, a.default.createElement(w.FormFieldLeft, null, a.default.createElement(g.Label, null, "Type"), a.default.createElement(g.SubLabel, null, "Regular or Segwit.")), a.default.createElement(w.FormFieldRight, null, a.default.createElement(h.default, {
			width: "100%",
			onChange: d
		}, a.default.createElement("option", {
			value: "false",
			selected: !t
		}, "Regular (Legacy)"), a.default.createElement("option", {
			value: "true",
			selected: t
		}, "Segwit")))), a.default.createElement(w.FormField, null, a.default.createElement(w.FormFieldLeft, null, a.default.createElement(g.Label, null, "Private key"), a.default.createElement(g.SubLabel, null, "Type or paste your private key.")), a.default.createElement(w.FormFieldRight, null, a.default.createElement(p.default, {
			width: "100%",
			value: n,
			onChange: u,
			error: r,
			invalid: r && n.length > 0
		}))), a.default.createElement(w.FormField, null, a.default.createElement(w.FormFieldLeft, null, a.default.createElement(g.Label, null, "Password"), a.default.createElement(v.default, null, "Make sure that you remember this. This password can't be restored because we don't store it. For security reasons you will be asked often for this password."), a.default.createElement(g.SubLabel, null, "This password encrypts your private key.")), a.default.createElement(w.FormFieldRight, null, a.default.createElement(m.default, {
			minlength: f.minpassword,
			value: o,
			onChange: c,
			width: "100%",
			type: "password"
		}))), a.default.createElement(w.FormField, null, a.default.createElement(w.FormFieldLeft, null, a.default.createElement(g.Label, null, "Repeat Password")), a.default.createElement(w.FormFieldRight, null, a.default.createElement(p.default, {
			minlength: f.minpassword,
			error: "Passwords do not match",
			invalid: s,
			value: i,
			onChange: y,
			width: "100%",
			type: "password"
		}))), a.default.createElement(w.FormField, null, a.default.createElement(w.FormFieldButtons, null, a.default.createElement(b.default, {
			width: "100px",
			disabled: !l,
			onClick: x
		}, "Import"))))
	}
	t.default = x
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = w(o),
		i = (w(n(1)), n(7)),
		l = n(16),
		s = w(n(8)),
		d = n(11),
		u = (n(44), n(9)),
		c = w(n(2)),
		f = n(10),
		p = w(n(14)),
		h = w(n(23)),
		m = w(n(31)),
		b = w(n(26)),
		v = n(21),
		g = n(22);

	function w(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var y = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, o.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this,
					t = (0, d.getParamsFromLocation)().symbol;
				this.Coin = u.Coins[t], this.observer = (0, i.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(s.default.view);
				var n = (0, i.collect)();
				s.default.view.type_segwit = !1, s.default.view.is_valid_input = !1, s.default.view.bip_input = "", s.default.view.bip_input_error = "", s.default.view.bip_password = "", s.default.view.bip_password_error = "", s.default.view.bip_loading = !1, n.destroy(), this.onChangeType = this.onChangeType.bind(this), this.onChangeInput = this.onChangeInput.bind(this), this.onChangePassword = this.onChangePassword.bind(this), this.onSubmit = this.onSubmit.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "onChangeType",
			value: function(e) {
				s.default.view.type_segwit = "true" === e.target.value
			}
		}, {
			key: "onChangeInput",
			value: function(e) {
				var t = (0, i.collect)(),
					n = e.target.value.trim();
				s.default.view.bip_input = n, this.Coin.isPrivateKeyBip(n) ? (s.default.view.bip_input_error = "", s.default.view.is_valid_input = !0) : (s.default.view.bip_input_error = "Invalid private key", s.default.view.is_valid_input = !1), t.emit()
			}
		}, {
			key: "onChangePassword",
			value: function(e) {
				s.default.view.bip_password = e.target.value, s.default.view.bip_password_error = ""
			}
		}, {
			key: "onSubmit",
			value: function(e) {
				var t = this;
				e.preventDefault(), s.default.view.bip_loading = !0, setTimeout(function(e) {
					var n = (0, i.collect)();
					try {
						var r = s.default.view.bip_password,
							o = t.Coin.decryptBIP38(s.default.view.bip_input, r),
							a = s.default.view.type_segwit ? t.Coin.getSegwitAddressFromPrivateKey(o) : t.Coin.getAddressFromPrivateKey(o);
						if ((0, d.isAssetRegistered)(t.Coin.symbol, a)) s.default.view.bip_input_error = "You already have this asset", s.default.view.is_valid_input = !1;
						else {
							var u = (0, l.createAsset)(t.Coin.type, t.Coin.symbol, a),
								c = (0, d.getAssetId)(u);
							(0, l.setPrivateKey)(c, o, r), (0, l.setHref)(f.routes.asset({
								asset_id: (0, d.getAssetId)(u)
							}))
						}
					} catch (e) {
						e.toString().indexOf("checksum") > -1 ? s.default.view.bip_input_error = "Invalid private key" : s.default.view.bip_password_error = "Invalid password", console.error(e)
					}
					s.default.view.bip_loading = !1, n.emit()
				}, 100)
			}
		}, {
			key: "render",
			value: function() {
				return a.default.createElement(x, {
					type_segwit: s.default.view.type_segwit,
					bip_input: s.default.view.bip_input,
					bip_input_error: s.default.view.bip_input_error,
					bip_password: s.default.view.bip_password,
					bip_password_error: s.default.view.bip_password_error,
					bip_loading: s.default.view.bip_loading,
					isValidForm: this.isValidForm,
					onChangeType: this.onChangeType,
					onChangeInput: this.onChangeInput,
					onChangePassword: this.onChangePassword,
					onSubmit: this.onSubmit
				})
			}
		}, {
			key: "isValidForm",
			get: function() {
				return s.default.view.is_valid_input && s.default.view.bip_password.length > 0
			}
		}]), t
	}();

	function x(e) {
		var t = e.type_segwit,
			n = e.bip_input,
			r = e.bip_input_error,
			o = e.bip_password,
			i = e.bip_password_error,
			l = e.bip_loading,
			s = e.isValidForm,
			d = e.onChangeType,
			u = e.onChangeInput,
			w = e.onChangePassword,
			y = e.onSubmit;
		return a.default.createElement("div", null, a.default.createElement(g.FormField, null, a.default.createElement(g.FormFieldLeft, null, a.default.createElement(v.Label, null, "Type"), a.default.createElement(v.SubLabel, null, "Regular or Segwit.")), a.default.createElement(g.FormFieldRight, null, a.default.createElement(m.default, {
			width: "100%",
			onChange: d
		}, a.default.createElement("option", {
			value: "false",
			selected: !t
		}, "Regular (Legacy)"), a.default.createElement("option", {
			value: "true",
			selected: t
		}, "Segwit")))), a.default.createElement(g.FormField, null, a.default.createElement(g.FormFieldLeft, null, a.default.createElement(v.Label, null, "Private key BIP38"), a.default.createElement(v.SubLabel, null, "Type or paste your private key in BIP38 format.")), a.default.createElement(g.FormFieldRight, null, a.default.createElement(h.default, {
			type: "text",
			width: "100%",
			value: n,
			onChange: u,
			error: r,
			invalid: r && n.length > 0
		}))), a.default.createElement(g.FormField, null, a.default.createElement(g.FormFieldLeft, null, a.default.createElement(v.Label, null, "Password"), a.default.createElement(v.SubLabel, null, "The password you used to encrypt this private key.")), a.default.createElement(g.FormFieldRight, null, a.default.createElement(h.default, {
			error: i,
			invalid: i,
			value: o,
			onChange: w,
			width: "100%",
			type: "password"
		}))), a.default.createElement(g.FormField, null, a.default.createElement(g.FormFieldButtons, null, a.default.createElement(b.default, {
			width: "100px",
			disabled: !s,
			loading: l,
			loadingIco: "/static/image/loading.gif",
			onClick: y
		}, "Import"), a.default.createElement(f.Show, {
			if: l
		}, a.default.createElement(p.default, {
			"font-size": "10px",
			color: c.default.color.red
		}, "Decrypting...")))))
	}
	t.default = y
}, , , , function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "ANT",
		name: "Aragon",
		color: "#2cdee1",
		contract_address: "0x960b236a07cf122663c4303350609a66a7b288c0",
		labels: "ant ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.padLeft = function(e, t, n) {
		return n = n || "0", (e += "").length >= t ? e : new Array(t - e.length + 1).join(n) + e
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.decodeSolidityString = function(e) {
		var t = (e = i(e)).length / 64,
			n = e.substr(0, 64);
		if (3 === t && 32 === o(n)) {
			var r = o(e.substr(64, 64));
			return a(e.substr(128, 64)).substr(0, r)
		}
		return null
	}, t.decToHex = function(e) {
		return (0, r.bigNumber)(e).toString(16)
	}, t.hexToDec = o, t.hexToAscii = a, t.sanitizeHex = function(e) {
		return "" == (e = "0x" == e.substring(0, 2) ? e.substring(2) : e) ? "" : "0x" + (0, r.padLeftEven)(e)
	}, t.removeHexPrefix = i;
	var r = n(18);

	function o(e) {
		return parseInt(e, 16)
	}

	function a(e) {
		var t = "",
			n = 0,
			r = e.length;
		for ("0x" === e.substring(0, 2) && (n = 2); n < r; n += 2) {
			var o = parseInt(e.substr(n, 2), 16);
			t += String.fromCharCode(o)
		}
		return t
	}

	function i(e) {
		return e.toLowerCase().replace("0x", "")
	}
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "BAT",
		name: "Basic Attention Token",
		color: "#FC511F",
		contract_address: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
		labels: "bat ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, , , , , function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "BNB",
		name: "Binance",
		color: "#F2B940",
		contract_address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
		labels: "bnb qtum ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "DAI",
		name: "Dai",
		color: "#FECD52",
		contract_address: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
		labels: "dai maker day stable ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "EOS",
		name: "EOS",
		color: "#000000",
		contract_address: "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0",
		labels: "eos ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "ETHOS",
		name: "Ethos",
		color: "#21CEAB",
		contract_address: "0x5af2be193a6abca9c8817001f45744777db30756",
		labels: "ethereum token erc20 ecr20",
		coin_decimals: 8,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "FUN",
		name: "FunFair",
		color: "#EF3B5D",
		contract_address: "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
		labels: "fum ethereum token erc20 ecr20",
		coin_decimals: 8,
		price_decimals: 3,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "GNT",
		name: "Golem",
		color: "#032F62",
		contract_address: "0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
		labels: "gtn ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "KNC",
		name: "Kyber Network",
		color: "#61B0A3",
		contract_address: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
		labels: "kcn ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "MKR",
		name: "Maker",
		color: "#4DC6AD",
		contract_address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
		labels: "marker mrk ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "OMG",
		name: "OmiseGo",
		color: "#2159EC",
		contract_address: "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
		labels: "omg ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "QASH",
		name: "Qash",
		color: "#1A4EE4",
		contract_address: "0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6",
		labels: "qahs ethereum token erc20 ecr20",
		coin_decimals: 6,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "QTUM",
		name: "Qtum",
		color: "#6FC5EB",
		contract_address: "0x9a642d6b3368ddc662ca244badf32cda716005bc",
		labels: "qtm ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "REP",
		name: "Augur",
		color: "#5E2851",
		contract_address: "0xe94327d07fc17907b4db788e5adf2ed424addff6",
		labels: "rpe agur ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "REQ",
		name: "Request Network",
		color: "#6EE7D5",
		contract_address: "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
		labels: "rec rek ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "SALT",
		name: "Salt",
		color: "#27BABC",
		contract_address: "0x4156D3342D5c385a87D264F90653733592000581",
		labels: "sat ethereum token erc20 ecr20",
		coin_decimals: 8,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "SNT",
		name: "Status Network",
		color: "#5C71EB",
		contract_address: "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
		labels: "stn ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "TRX",
		name: "Tron",
		color: "#000000",
		contract_address: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
		labels: "tronix ethereum token erc20 ecr20",
		coin_decimals: 6,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";
	var r = n(12).createERC20,
		o = n(4).MAINNET;
	e.exports = r({
		symbol: "ZRX",
		name: "0x",
		color: "#1E2227",
		contract_address: "0xe41d2489571d322189246dafa5ebde1f4699f498",
		labels: "zrx project ethereum token erc20 ecr20",
		coin_decimals: 18,
		price_decimals: 2,
		networks_availables: [o]
	})
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		return i(e, t).getMonth() + 1
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.now = function() {
		return Math.round(Date.now() / 1e3)
	}, t.getDay = function(e, t) {
		return i(e, t).getDate()
	}, t.getMonth = r, t.getMonthText = a, t.getMonthTextShort = function(e, t) {
		return a(e, t).substr(0, 3)
	};
	var o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	function a(e, t) {
		return o[r(e, t) - 1]
	}

	function i(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		return new Date(e * (t ? 1 : 1e3))
	}
}, , , function(e, t) {
	e.exports = {
		name: "coinfy",
		version: "1.5.17",
		repository: "https://github.com/elevenyellow/coinfy",
		scripts: {
			stats: "webpack --config=./webpack/production.js --profile --json > webpack-stats.json | open https://chrisbateman.github.io/webpack-visualizer/",
			build: "webpack --config=./webpack/production.js --progress --colors --display-error-details",
			dev: "NODE_ENV=development node src/server",
			prod: "NODE_ENV=production node src/server",
			forever: "NODE_ENV=production forever start src/server.js",
			"forever-stop": "forever stop src/server.js",
			test: "babel-tape-runner --presets=react,es2015 test/*.js | faucet",
			scrapper_logos: "node scripts/scrapper_logos",
			hashes: "node scripts/hashes_github"
		},
		dependencies: {
			"bignumber.js": "5.0.0",
			bip38: "2.0.1",
			bip39crypto: "^2.6.0",
			"bitcoin-fee": "^1.0.0",
			"bitcoinjs-lib": "^3.3.2",
			crypto: "1.0.1",
			dop: "^0.26.2",
			"dop-router": "^1.5.1",
			"ethereumjs-tx": "1.3.3",
			"ethereumjs-util": "5.1.2",
			express: "4.14.0",
			instascan: "1.0.0",
			keccak: "^1.4.0",
			preact: "5.7.0",
			"preact-compat": "3.15.0",
			qrious: "4.0.2",
			"react-countup": "2.2.0",
			"react-icons": "2.2.5",
			scryptsy: "2.0.0",
			"styled-components": "2.2.0",
			wif: "2.0.6"
		},
		devDependencies: {
			"babel-cli": "^6.26.0",
			"babel-core": "^6.13.2",
			"babel-loader": "^6.2.5",
			"babel-preset-es2015": "^6.13.2",
			"babel-preset-react": "^6.11.1",
			"babel-root-slash-import": "^1.1.0",
			"babel-tape-runner": "^2.0.1",
			colors: "^1.1.2",
			emailjs: "^2.1.0",
			eslint: "^4.5.0",
			"eslint-plugin-react": "^7.3.0",
			"eslint-watch": "^3.1.2",
			express: "^4.14.0",
			faucet: "0.0.1",
			"lodash.merge": "^4.6.0",
			"node-fetch": "^2.1.2",
			path: "^0.12.7",
			prompt: "^1.0.0",
			"recursive-readdir": "^2.2.1",
			request: "^2.85.0",
			sha1: "^1.1.1",
			"sha1-file": "^1.0.0",
			tape: "^4.8.0",
			"tape-run": "^4.0.0",
			"uglify-es-webpack-plugin": "^0.10.0",
			"utf8-bytes": "0.0.1",
			webpack: "^3.12.0",
			"webpack-dev-middleware": "^1.6.1",
			"webpack-hot-middleware": "^2.12.2"
		}
	}
}, , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = c(["\n    float: left;\n    padding-top: 3px;\n"], ["\n    float: left;\n    padding-top: 3px;\n"]),
		o = c(["\n    margin-left: 33px;\n"], ["\n    margin-left: 33px;\n"]),
		a = c(["\n    text-overflow: ellipsis;\n    overflow: hidden;\n    font-weight: bold;\n    font-size: 16px;\n    color: ", ";\n    line-height: 20px;\n"], ["\n    text-overflow: ellipsis;\n    overflow: hidden;\n    font-weight: bold;\n    font-size: 16px;\n    color: ", ";\n    line-height: 20px;\n"]),
		i = c(["\n    text-overflow: ellipsis;\n    font-size: 12px;\n    color: ", ";\n    padding-top: 2px;\n    font-weight: 100;\n    letter-spacing: 0.5px;\n"], ["\n    text-overflow: ellipsis;\n    font-size: 12px;\n    color: ", ";\n    padding-top: 2px;\n    font-weight: 100;\n    letter-spacing: 0.5px;\n"]);
	t.default = function(e) {
		var t = e.logo,
			n = e.label,
			r = e.balance;
		return l.default.createElement("div", null, l.default.createElement(f, null, l.default.createElement("img", {
			src: t,
			width: "22",
			height: "22"
		})), l.default.createElement(p, null, l.default.createElement(h, null, n), l.default.createElement(m, null, r)))
	};
	var l = u(n(0)),
		s = u(n(1)),
		d = u(n(2));

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function c(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var f = s.default.div(r),
		p = s.default.div(o),
		h = s.default.div(a, d.default.color.front3),
		m = s.default.div(i, d.default.color.front2)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\n    margin: 30px 0 15px 0;\n    border-bottom: 1px dotted #e1e1e1;\n    padding-bottom: 5px;\n    color: #e1e1e1;\n    font-size: 20px;\n    font-weight: bold;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n"], o = ["\n    margin: 30px 0 15px 0;\n    border-bottom: 1px dotted #e1e1e1;\n    padding-bottom: 5px;\n    color: #e1e1e1;\n    font-size: 20px;\n    font-weight: bold;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n"], Object.freeze(Object.defineProperties(r, {
		raw: {
			value: Object.freeze(o)
		}
	})));
	t.default = function(e) {
		return i.default.createElement(d, e, e.children)
	};
	var i = s(n(0)),
		l = s(n(1));
	s(n(2));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var d = l.default.div(a)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		o = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		a = p(["\n    position: relative;\n    background-image: linear-gradient(#fff, ", ");\n    border: 1px solid\n        ", ";\n    border-radius: 4px;\n    border-right: auto;\n    margin: 0 auto;\n    display: block;\n    outline: none;\n    min-height: 37px;\n    &:hover {\n        border-color: ", ";\n    }\n    &:hover > * {\n        border-left-color: ", ";\n    }\n"], ["\n    position: relative;\n    background-image: linear-gradient(#fff, ", ");\n    border: 1px solid\n        ", ";\n    border-radius: 4px;\n    border-right: auto;\n    margin: 0 auto;\n    display: block;\n    outline: none;\n    min-height: 37px;\n    &:hover {\n        border-color: ", ";\n    }\n    &:hover > * {\n        border-left-color: ", ";\n    }\n"]),
		i = p(["\n    color: ", ";\n    font-weight: bold;\n    font-size: 13px;\n    padding: 8px 0px 8px 18px;\n    width: calc(100% - 62px);\n    line-height: 20px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n"], ["\n    color: ", ";\n    font-weight: bold;\n    font-size: 13px;\n    padding: 8px 0px 8px 18px;\n    width: calc(100% - 62px);\n    line-height: 20px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n"]),
		l = p(["\n    right: 0;\n    top: 0;\n    position: absolute;\n    padding: 8px 14px;\n    border-left: 1px solid\n        ", ";\n    box-sizing: content-box;\n\n    & span {\n        display: inline-block;\n        vertical-align: middle;\n        border-left: 6px solid transparent;\n        border-right: 6px solid transparent;\n        border-top: 7px solid ", ";\n        margin-top: -2px;\n    }\n"], ["\n    right: 0;\n    top: 0;\n    position: absolute;\n    padding: 8px 14px;\n    border-left: 1px solid\n        ", ";\n    box-sizing: content-box;\n\n    & span {\n        display: inline-block;\n        vertical-align: middle;\n        border-left: 6px solid transparent;\n        border-right: 6px solid transparent;\n        border-top: 7px solid ", ";\n        margin-top: -2px;\n    }\n"]),
		s = f(n(0)),
		d = f(n(1)),
		u = f(n(2)),
		c = n(109);

	function f(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function p(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var h = function(e) {
		function t(e) {
			! function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}(this, t);
			var n = function(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.state = {
				open: !1
			}, n
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, s.default.Component), o(t, [{
			key: "onOpen",
			value: function() {
				this.setState({
					open: !0
				})
			}
		}, {
			key: "onClose",
			value: function() {
				this.setState({
					open: !1
				})
			}
		}, {
			key: "onChange",
			value: function(e, t, n) {
				this.props.onChange({
					target: {
						value: e
					}
				}, e, t)
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = this.state,
					o = t.children || this.childrens;
				this.childrens = Array.isArray(o) ? o : [o];
				var a = -1,
					i = this.childrens.map(function(t, n) {
						var o = t.attributes;
						return o.selected && (a = n), s.default.createElement(c.DropdownItem, r({}, o, {
							onClick: function(r) {
								o.selected || e.onChange(o.value, n, t)
							}
						}), t.children)
					}),
					l = -1 === a ? "" : o[a].children;
				return s.default.createElement(c.Dropdown, {
					onOpen: this.onOpen.bind(this),
					onClose: this.onClose.bind(this),
					open: n.open
				}, s.default.createElement(m, {
					open: n.open
				}, s.default.createElement(b, {
					open: n.open
				}, l), s.default.createElement(v, {
					open: n.open
				}, s.default.createElement("span", null))), s.default.createElement(c.DropdownMenu, {
					width: "100%"
				}, i))
			}
		}]), t
	}();
	t.default = h;
	var m = d.default.div(a, u.default.color.background1, function(e) {
			return e.open ? u.default.color.background3 : u.default.color.background5
		}, u.default.color.background3, u.default.color.background3),
		b = d.default.div(i, u.default.color.front3),
		v = d.default.div(l, function(e) {
			return e.open ? u.default.color.background3 : u.default.color.background5
		}, u.default.color.front1)
}, , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\n    & > * {\n        display: none;\n    }\n    & > *:nth-child(", ") {\n        display: block;\n        ", ";\n    }\n\n    @keyframes next {\n        0% {\n            transform: translateX(100%);\n            opacity: 0;\n        }\n        100% {\n            transform: translateX(0);\n            opacity: 1;\n        }\n    }\n    @keyframes back {\n        0% {\n            transform: translateX(-100%);\n            opacity: 0;\n        }\n        100% {\n            transform: translateX(0);\n            opacity: 1;\n        }\n    }\n"], o = ["\n    & > * {\n        display: none;\n    }\n    & > *:nth-child(", ") {\n        display: block;\n        ", ";\n    }\n\n    @keyframes next {\n        0% {\n            transform: translateX(100%);\n            opacity: 0;\n        }\n        100% {\n            transform: translateX(0);\n            opacity: 1;\n        }\n    }\n    @keyframes back {\n        0% {\n            transform: translateX(-100%);\n            opacity: 0;\n        }\n        100% {\n            transform: translateX(0);\n            opacity: 1;\n        }\n    }\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		i = l(n(1));
	l(n(2));

	function l(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var s = void 0;
	t.default = i.default.div(a, function(e) {
		var t = e.active;
		return Number(void 0 === t ? 1 : t) + 1
	}, function(e) {
		var t = e.active,
			n = void 0 === t ? 1 : t,
			r = s;
		return n = Number(n) + 1, s = n, r === n || void 0 === r ? "" : r > n ? "animation: back 0.75s ease;" : "animation: next 0.75s ease;"
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\n    text-align: center;\n    /* background-color: ", ";\n    padding: 5px;\n    box-sizing: border-box;\n    border-radius: 3px; */\n\n    & .icon {\n        width: 20px;\n        /* margin-right: 8px; */\n        padding: 2px;\n        border-radius: 50%;\n        /* box-shadow: 0px 1px 0.1px rgba(0, 0, 0, 0.3); */\n    }\n    & .text {\n        color: ", ";\n        font-weight: bold;\n        font-size: 11px;\n        line-height: 11px;\n        letter-spacing: 0.3px;\n        padding-top: 7px;\n    }\n"], o = ["\n    text-align: center;\n    /* background-color: ", ";\n    padding: 5px;\n    box-sizing: border-box;\n    border-radius: 3px; */\n\n    & .icon {\n        width: 20px;\n        /* margin-right: 8px; */\n        padding: 2px;\n        border-radius: 50%;\n        /* box-shadow: 0px 1px 0.1px rgba(0, 0, 0, 0.3); */\n    }\n    & .text {\n        color: ", ";\n        font-weight: bold;\n        font-size: 11px;\n        line-height: 11px;\n        letter-spacing: 0.3px;\n        padding-top: 7px;\n    }\n"], Object.freeze(Object.defineProperties(r, {
		raw: {
			value: Object.freeze(o)
		}
	})));
	t.default = function(e) {
		var t = e.children,
			n = e.color,
			r = void 0 === n ? s.ALERT : n,
			o = d.default;
		r === s.ERROR && (o = u.default);
		return i.default.createElement(f, {
			color: r
		}, i.default.createElement("span", {
			className: "icon"
		}, i.default.createElement(o, {
			size: 20,
			color: r
		})), i.default.createElement("span", {
			className: "text"
		}, t))
	};
	var i = c(n(0)),
		l = c(n(1)),
		s = (c(n(2)), n(4)),
		d = c(n(405)),
		u = c(n(406));

	function c(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var f = l.default.div(a, function(e) {
		return e.color
	}, function(e) {
		return e.color
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = w(o),
		i = (w(n(1)), n(7)),
		l = n(16),
		s = w(n(8)),
		d = n(11),
		u = n(9),
		c = (w(n(2)), n(10)),
		f = n(4),
		p = w(n(23)),
		h = w(n(67)),
		m = w(n(26)),
		b = w(n(48)),
		v = n(21),
		g = n(22);

	function w(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var y = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, o.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, i.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(s.default.view);
				var t = (0, i.collect)();
				s.default.view.is_valid_input = !1, s.default.view.private_input = "", s.default.view.private_input_error = "", s.default.view.private_password = "", s.default.view.private_repassword = "", t.destroy();
				var n = (0, d.getParamsFromLocation)().symbol;
				this.Coin = u.Coins[n], this.onChangeInput = this.onChangeInput.bind(this), this.onChangePassword = this.onChangePassword.bind(this), this.onChangeRepassword = this.onChangeRepassword.bind(this), this.onSubmit = this.onSubmit.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "onChangeInput",
			value: function(e) {
				var t = (0, i.collect)(),
					n = e.target.value.trim();
				if (s.default.view.private_input = n, this.Coin.isPrivateKey(n)) try {
					var r = this.Coin.getAddressFromPrivateKey(n);
					(0, d.isAssetRegistered)(this.Coin.symbol, r) ? (s.default.view.private_input_error = "You already have this asset", s.default.view.is_valid_input = !1) : (s.default.view.address = r, s.default.view.private_input_error = "", s.default.view.is_valid_input = !0)
				} catch (e) {
					s.default.view.is_valid_input = !1, s.default.view.private_input_error = "Invalid private key", console.error(e)
				} else s.default.view.private_input_error = "Invalid private key", s.default.view.is_valid_input = !1;
				t.emit()
			}
		}, {
			key: "onChangePassword",
			value: function(e) {
				s.default.view.private_password = e.target.value
			}
		}, {
			key: "onChangeRepassword",
			value: function(e) {
				s.default.view.private_repassword = e.target.value
			}
		}, {
			key: "onSubmit",
			value: function(e) {
				e.preventDefault();
				var t = (0, i.collect)(),
					n = s.default.view.address,
					r = (0, l.createAsset)(this.Coin.type, this.Coin.symbol, n),
					o = (0, d.getAssetId)(r);
				(0, l.setPrivateKey)(o, s.default.view.private_input, s.default.view.private_password), (0, l.setHref)(c.routes.asset({
					asset_id: o
				})), t.emit()
			}
		}, {
			key: "render",
			value: function() {
				return a.default.createElement(x, {
					private_input: s.default.view.private_input,
					private_input_error: s.default.view.private_input_error,
					private_password: s.default.view.private_password,
					private_repassword: s.default.view.private_repassword,
					isValidForm: this.isValidForm,
					isInvalidRepassword: this.isInvalidRepassword,
					onChangeInput: this.onChangeInput,
					onChangePassword: this.onChangePassword,
					onChangeRepassword: this.onChangeRepassword,
					onSubmit: this.onSubmit
				})
			}
		}, {
			key: "isInvalidRepassword",
			get: function() {
				return s.default.view.private_password.length > 0 && s.default.view.private_repassword.length > 0 && s.default.view.private_password.length === s.default.view.private_repassword.length && s.default.view.private_password !== s.default.view.private_repassword
			}
		}, {
			key: "isValidForm",
			get: function() {
				return s.default.view.is_valid_input && s.default.view.private_password.length >= f.minpassword && s.default.view.private_password === s.default.view.private_repassword
			}
		}]), t
	}();

	function x(e) {
		var t = e.private_input,
			n = e.private_input_error,
			r = e.private_password,
			o = e.private_repassword,
			i = e.isValidForm,
			l = e.isInvalidRepassword,
			s = e.onChangeInput,
			d = e.onChangePassword,
			u = e.onChangeRepassword,
			c = e.onSubmit;
		return a.default.createElement("div", null, a.default.createElement(g.FormField, null, a.default.createElement(g.FormFieldLeft, null, a.default.createElement(v.Label, null, "Private key"), a.default.createElement(v.SubLabel, null, "Type or paste your private key.")), a.default.createElement(g.FormFieldRight, null, a.default.createElement(p.default, {
			width: "100%",
			value: t,
			onChange: s,
			error: n,
			invalid: n && t.length > 0
		}))), a.default.createElement(g.FormField, null, a.default.createElement(g.FormFieldLeft, null, a.default.createElement(v.Label, null, "Password"), a.default.createElement(b.default, null, "Make sure that you remember this. This password can't be restored because we don't store it. For security reasons you will be asked often for this password."), a.default.createElement(v.SubLabel, null, "This password encrypts your private key.")), a.default.createElement(g.FormFieldRight, null, a.default.createElement(h.default, {
			minlength: f.minpassword,
			value: r,
			onChange: d,
			width: "100%",
			type: "password"
		}))), a.default.createElement(g.FormField, null, a.default.createElement(g.FormFieldLeft, null, a.default.createElement(v.Label, null, "Repeat Password")), a.default.createElement(g.FormFieldRight, null, a.default.createElement(p.default, {
			minlength: f.minpassword,
			error: "Passwords do not match",
			invalid: l,
			value: o,
			onChange: u,
			width: "100%",
			type: "password"
		}))), a.default.createElement(g.FormField, null, a.default.createElement(g.FormFieldButtons, null, a.default.createElement(m.default, {
			width: "100px",
			disabled: !i,
			onClick: c
		}, "Import"))))
	}
	t.default = y
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		l = (r = ["\n    font-size: 11px;\n    font-weight: bold;\n    color: ", ";\n"], o = ["\n    font-size: 11px;\n    font-weight: bold;\n    color: ", ";\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		s = n(0),
		d = O(s),
		u = O(n(1)),
		c = n(7),
		f = n(27),
		p = (n(44), n(108)),
		h = n(16),
		m = O(n(8)),
		b = n(11),
		v = n(38),
		g = n(9),
		w = O(n(2)),
		y = n(10),
		x = O(n(23)),
		_ = O(n(409)),
		E = O(n(26)),
		k = n(21),
		C = n(22);
	n(133);

	function O(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var P = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, s.Component), i(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, c.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(m.default.view);
				var t = (0, c.collect)();
				m.default.view.keystore_selected = !1, m.default.view.keystore_password = "", m.default.view.keystore_password_error = "", m.default.view.keystore_invalid_error = "", t.destroy();
				var n = (0, b.getParamsFromLocation)().symbol;
				this.Coin = g.Coins.hasOwnProperty(n) ? g.Coins[n] : g.Coins.ETH, this.onChangeFile = this.onChangeFile.bind(this), this.onChangePassword = this.onChangePassword.bind(this), this.onSubmit = this.onSubmit.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "onChangeFile",
			value: function(e) {
				var t = this,
					n = e.target.files[0];
				n && (0, f.readFile)(n, function(e) {
					var n = (0, c.collect)();
					m.default.view.keystore_password_error = "", m.default.view.keystore_selected = !0;
					try {
						var r = (0, p.keysToLowerCase)(e),
							o = (0, v.formatAddress)(r.address);
						3 === r.version && (0, v.isAddress)(o) && "object" == a(r.crypto) ? (0, b.isAssetRegistered)(t.Coin.symbol, o) ? m.default.view.keystore_invalid_error = "You already have this asset" : (t.keystore = r, m.default.view.address = o, m.default.view.keystore_invalid_error = "") : m.default.view.keystore_invalid_error = "Invalid Keystore file"
					} catch (e) {
						console.error(e), m.default.view.keystore_invalid_error = "Invalid Keystore file"
					}
					n.emit()
				})
			}
		}, {
			key: "onChangePassword",
			value: function(e) {
				m.default.view.keystore_password = e.target.value, m.default.view.keystore_password_error = ""
			}
		}, {
			key: "onSubmit",
			value: function(e) {
				if (e.preventDefault(), this.keystore) {
					var t = (0, c.collect)(),
						n = m.default.view.address,
						r = m.default.view.keystore_password,
						o = this.keystore.Crypto || this.keystore.crypto;
					try {
						var a = this.Coin.decryptPrivateKey(n, o, r);
						if (a) {
							var i = (0, h.createAsset)(this.Coin.type, this.Coin.symbol, n),
								l = (0, b.getAssetId)(i);
							(0, h.setPrivateKey)(l, a, r), (0, h.setHref)(y.routes.asset({
								asset_id: l
							}))
						} else m.default.view.keystore_password_error = "Invalid password";
						t.emit()
					} catch (e) {
						return m.default.view.keystore_invalid_error = "Invalid Keystore file", t.emit(), console.error(e), !1
					}
				}
			}
		}, {
			key: "render",
			value: function() {
				return d.default.createElement(S, {
					keystore_invalid_error: m.default.view.keystore_invalid_error,
					keystore_password: m.default.view.keystore_password,
					keystore_password_error: m.default.view.keystore_password_error,
					isValidForm: this.isValidForm,
					onChangeFile: this.onChangeFile,
					onChangePassword: this.onChangePassword,
					onSubmit: this.onSubmit
				})
			}
		}, {
			key: "isValidForm",
			get: function() {
				return "" === m.default.view.keystore_invalid_error && "" === m.default.view.keystore_password_error && m.default.view.keystore_selected && m.default.view.keystore_password.length > 0
			}
		}]), t
	}();

	function S(e) {
		var t = e.keystore_invalid_error,
			n = e.keystore_password,
			r = e.keystore_password_error,
			o = e.isValidForm,
			a = e.onChangeFile,
			i = e.onChangePassword,
			l = e.onSubmit;
		return d.default.createElement("div", null, d.default.createElement(C.FormField, null, d.default.createElement(C.FormFieldLeft, null, d.default.createElement(k.Label, null, "Select file"), d.default.createElement(k.SubLabel, null, "Pick your Keystore file.")), d.default.createElement(C.FormFieldRight, null, d.default.createElement(_.default, {
			width: "100%",
			onChange: a,
			error: t,
			invalid: t
		}))), d.default.createElement(C.FormField, null, d.default.createElement(C.FormFieldLeft, null, d.default.createElement(k.Label, null, "Password"), d.default.createElement(k.SubLabel, null, "The password you used to encrypt this private key.")), d.default.createElement(C.FormFieldRight, null, d.default.createElement(x.default, {
			error: r,
			invalid: r,
			value: n,
			onChange: i,
			width: "100%",
			type: "password"
		}))), d.default.createElement(C.FormField, null, d.default.createElement(C.FormFieldButtons, null, d.default.createElement(E.default, {
			width: "100%",
			disabled: !o,
			onClick: l
		}, "Import"))))
	}
	t.default = P;
	u.default.div(l, function(e) {
		return e.invalid ? w.default.color.red3 : w.default.color.front6
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\nopacity: ", ";\n:hover {\n    opacity: ", ";\n}\n"], o = ["\nopacity: ", ";\n:hover {\n    opacity: ", ";\n}\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		i = l(n(1));
	l(n(2));

	function l(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = i.default.div(a, function(e) {
		return e.normal || .5
	}, function(e) {
		return e.hover || 1
	})
}, , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = G(["\n    font-size: 12px;\n    color: ", ";\n    &:hover {\n        color: #000;\n    }\n"], ["\n    font-size: 12px;\n    color: ", ";\n    &:hover {\n        color: #000;\n    }\n"]),
		a = G(["\n    position: absolute;\n    z-index: 1;\n    line-height: 34px;\n    font-weight: bold;\n    font-size: 12px;\n    right: 10px;\n    top: 13px;\n    color: #000;\n    pointer-events: none;\n"], ["\n    position: absolute;\n    z-index: 1;\n    line-height: 34px;\n    font-weight: bold;\n    font-size: 12px;\n    right: 10px;\n    top: 13px;\n    color: #000;\n    pointer-events: none;\n"]),
		i = G(["\n    & > div {\n        margin-bottom: 5px;\n    }\n"], ["\n    & > div {\n        margin-bottom: 5px;\n    }\n"]),
		l = G(["\n    min-height: 55px;\n    border: 3px solid ", ";\n    background-color: ", ";\n    &:hover {\n        background-color: ", ";\n    }\n    & > div {\n        float: left;\n    }\n"], ["\n    min-height: 55px;\n    border: 3px solid ", ";\n    background-color: ", ";\n    &:hover {\n        background-color: ", ";\n    }\n    & > div {\n        float: left;\n    }\n"]),
		s = G(["\n    padding: 18px 15px;\n"], ["\n    padding: 18px 15px;\n"]),
		d = G(["\n    width: calc(100% - 50px);\n"], ["\n    width: calc(100% - 50px);\n"]),
		u = G(["\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 16px;\n    padding-top: 12px;\n    color: ", ";\n"], ["\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 16px;\n    padding-top: 12px;\n    color: ", ";\n"]),
		c = G(["\n    font-size: 11px;\n    color: ", ";\n    display: inline-block;\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    &:hover {\n        text-decoration: underline;\n        color: ", ";\n    }\n    ", " {\n        display: block;\n    }\n"], ["\n    font-size: 11px;\n    color: ", ";\n    display: inline-block;\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    &:hover {\n        text-decoration: underline;\n        color: ", ";\n    }\n    ", " {\n        display: block;\n    }\n"]),
		f = G(["\n    height: ", ";\n    overflow: ", ";\n    position: relative;\n    & .text {\n        display: ", ";\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%);\n    }\n    & .overlay {\n        display: ", ";\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: rgba(255, 255, 255, 0.8);\n        width: 100%;\n        height: 100%;\n    }\n"], ["\n    height: ", ";\n    overflow: ", ";\n    position: relative;\n    & .text {\n        display: ", ";\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%);\n    }\n    & .overlay {\n        display: ", ";\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: rgba(255, 255, 255, 0.8);\n        width: 100%;\n        height: 100%;\n    }\n"]),
		p = G(["\n    padding: 10px;\n    border: 1px solid ", ";\n    border-radius: 3px;\n    & > span {\n        text-align: left;\n        word-wrap: break-word;\n        display: inline-block;\n        font-size: 10px;\n        color: ", ";\n        font-family: monospace;\n        width: 100%;\n    }\n"], ["\n    padding: 10px;\n    border: 1px solid ", ";\n    border-radius: 3px;\n    & > span {\n        text-align: left;\n        word-wrap: break-word;\n        display: inline-block;\n        font-size: 10px;\n        color: ", ";\n        font-family: monospace;\n        width: 100%;\n    }\n"]),
		h = G(["\n    font-weight: bold;\n    color: ", ";\n    text-shadow: 0px 0px 15px #ffffff;\n    font-size: 13px;\n    text-decoration: underline;\n    cursor: pointer;\n    &:hover {\n        opacity: 0.6;\n    }\n"], ["\n    font-weight: bold;\n    color: ", ";\n    text-shadow: 0px 0px 15px #ffffff;\n    font-size: 13px;\n    text-decoration: underline;\n    cursor: pointer;\n    &:hover {\n        opacity: 0.6;\n    }\n"]),
		m = G(["\n    clear: both;\n    padding-top: 5px;\n"], ["\n    clear: both;\n    padding-top: 5px;\n"]),
		b = G(["\n    float: left;\n    width: 90px;\n    font-size: 13px;\n    color: ", ";\n    user-select: auto;\n"], ["\n    float: left;\n    width: 90px;\n    font-size: 13px;\n    color: ", ";\n    user-select: auto;\n"]),
		v = G(["\n    float: ", ";\n    color: ", ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 13px;\n    font-weight: bold;\n    text-align: right;\n    user-select: auto;\n"], ["\n    float: ", ";\n    color: ", ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 13px;\n    font-weight: bold;\n    text-align: right;\n    user-select: auto;\n"]),
		g = G(["\n    position: relative;\n    width: 155px;\n    height: 155px;\n    background: #34c362;\n    border: 8px solid #54d37e;\n    border-radius: 50%;\n    text-align: center;\n    margin: 0 auto;\n    line-height: 205px;\n    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.2);\n    animation: ", ";\n    @keyframes sent {\n        0% {\n            transform: scale(.7);\n        }\n        30% {\n            transform: scale(.5);\n        }\n        100% {\n            transform: scale(1);\n        }\n    }\n\n    & img {\n        display: block;\n        position: absolute;\n        transform: translate(148px,-73px);\n        opacity: 0;\n        animation: ", ";\n        @keyframes sent2 {\n            0% {\n                transform: translate(45px,45px);\n                opacity: 1;\n            }\n            80% {\n                transform: translate(45px,45px);\n                opacity: 1;\n            }\n            85% {\n                transform: translate(35px,55px);\n                opacity: 1;\n            }\n            100% {\n                transform: translate(148px,-73px);\n                opacity: 1;\n            }\n        }\n    }\n}\n    \n"], ["\n    position: relative;\n    width: 155px;\n    height: 155px;\n    background: #34c362;\n    border: 8px solid #54d37e;\n    border-radius: 50%;\n    text-align: center;\n    margin: 0 auto;\n    line-height: 205px;\n    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.2);\n    animation: ", ";\n    @keyframes sent {\n        0% {\n            transform: scale(.7);\n        }\n        30% {\n            transform: scale(.5);\n        }\n        100% {\n            transform: scale(1);\n        }\n    }\n\n    & img {\n        display: block;\n        position: absolute;\n        transform: translate(148px,-73px);\n        opacity: 0;\n        animation: ", ";\n        @keyframes sent2 {\n            0% {\n                transform: translate(45px,45px);\n                opacity: 1;\n            }\n            80% {\n                transform: translate(45px,45px);\n                opacity: 1;\n            }\n            85% {\n                transform: translate(35px,55px);\n                opacity: 1;\n            }\n            100% {\n                transform: translate(148px,-73px);\n                opacity: 1;\n            }\n        }\n    }\n}\n    \n"]),
		w = G(["\n    color: ", ";\n    font-size: 12px;\n    font-weight: bold;\n    text-align: center;\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    letter-spacing: 0.5px;\n    &:hover {\n        color: ", ";\n    }\n"], ["\n    color: ", ";\n    font-size: 12px;\n    font-weight: bold;\n    text-align: center;\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    letter-spacing: 0.5px;\n    &:hover {\n        color: ", ";\n    }\n"]),
		y = n(0),
		x = K(y),
		_ = K(n(1)),
		E = n(7),
		k = n(4),
		C = K(n(2)),
		O = n(10),
		P = n(9),
		S = n(18),
		T = n(56),
		j = K(n(8)),
		F = n(16),
		A = n(11),
		R = K(n(14)),
		z = K(n(427)),
		M = K(n(23)),
		I = K(n(428)),
		N = K(n(26)),
		L = K(n(58)),
		B = K(n(32)),
		D = K(n(199)),
		U = K(n(198)),
		W = K(n(111)),
		H = n(21);
	K(n(48)), K(n(203));

	function K(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function G(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var Y = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, y.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this,
					t = (0, A.getParamsFromLocation)().asset_id;
				this.asset_id = t, this.asset = (0, A.getAsset)(this.asset_id), this.Coin = P.Coins[this.asset.symbol], this.send_providers = this.Coin.getSendProviders(), this.observer = (0, E.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(j.default.view), this.observer.observe(j.default.location, "pathname"), j.default.view = {
					amount: (0, S.bigNumber)(0),
					fee: (0, S.bigNumber)(0),
					balance: (0, S.bigNumber)(this.asset.balance),
					balance_fee: (0, S.bigNumber)(this.asset.balance),
					address_input: "",
					address_input_error: !1,
					amount1_input: 0,
					amount2_input: 0,
					loading_max: !1,
					fee_recomended: 0,
					fee_input: 0,
					fee_input_visible: !1,
					password_input: "",
					password_input_invalid: !1,
					change_address: void 0,
					error_when_create: !1,
					send_provider_selected: 0,
					show_tx_raw: !1,
					loading: !1,
					error_when_send: "",
					is_sent: !1
				}, this.fetchFee = this.fetchFee.bind(this), this.onChangeAddress = this.onChangeAddress.bind(this), this.onChangeAmount1 = this.onChangeAmount1.bind(this), this.onChangeAmount2 = this.onChangeAmount2.bind(this), this.onClickMax = this.onClickMax.bind(this), this.onChangeFee = this.onChangeFee.bind(this), this.onClickFee = this.onClickFee.bind(this), this.onChangePassword = this.onChangePassword.bind(this), this.onNext = this.onNext.bind(this), this.onChangeProvider = this.onChangeProvider.bind(this), this.onShowRawTx = this.onShowRawTx.bind(this), this.onSend = this.onSend.bind(this), this.fetchBalance(), this.fetchFee({}).then(function(t) {
					var n = (0, E.collect)();
					e.updateRecomendedFee(t), n.emit()
				})
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "fetchBalance",
			value: function() {
				return (0, F.fetchFullBalance)(this.asset_id).then(function(e) {
					var t = (0, E.collect)();
					return j.default.view.balance = (0, S.bigNumber)(e), j.default.view.balance_fee = (0, S.bigNumber)(e), t.emit(), e
				})
			}
		}, {
			key: "fetchFee",
			value: function(e) {
				var t = this,
					n = e.amount,
					r = e.use_cache;
				return (0, T.repeatUntilResolve)(this.Coin.fetchRecomendedFee, [{
					use_cache: r,
					amount: n,
					addresses: this.asset.addresses
				}], {
					timeout: k.TIMEOUT_BETWEEN_EACH_FAIL_FETCH_FEE
				}).then(function(e) {
					return t.Coin.cutDecimals(e)
				})
			}
		}, {
			key: "updateAmount",
			value: function(e) {
				j.default.view.amount = (0, S.bigNumber)(this.Coin.cutDecimals(e))
			}
		}, {
			key: "updateFee",
			value: function(e) {
				j.default.view.fee = (0, S.bigNumber)(this.Coin.cutDecimals(e))
			}
		}, {
			key: "updateAmounts",
			value: function(e) {
				var t = e.amount1,
					n = e.amount2,
					r = (0, E.collect)(),
					o = this.asset.symbol,
					a = (0, A.getPrice)(o);
				void 0 !== t ? (j.default.view.amount1_input = t, j.default.view.amount2_input = (0, S.limitDecimals)((0, S.bigNumber)(a).times((0, S.parseNumberAsString)(t)).toFixed(), 2)) : (j.default.view.amount2_input = n, j.default.view.amount1_input = 0 === a ? 0 : this.Coin.cutDecimals((0, S.bigNumber)((0, S.parseNumberAsString)(n)).div(a).toFixed())), this.updateAmount((0, S.parseNumberAsString)(j.default.view.amount1_input)), r.emit()
			}
		}, {
			key: "updateRecomendedFee",
			value: function(e) {
				var t = (0, E.collect)();
				j.default.view.fee_recomended = e, this.updateFee(j.default.view.fee_input_visible ? j.default.view.fee_input : j.default.view.fee_recomended), t.emit()
			}
		}, {
			key: "onChangeAmount",
			value: function(e, t) {
				var n, r, o, a = this,
					i = (0, E.collect)();
				this.updateAmounts((o = e, (r = t) in (n = {}) ? Object.defineProperty(n, r, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[r] = o, n)), this.fetchFee({
					amount: j.default.view.amount,
					use_cache: !0
				}).then(function(e) {
					a.updateRecomendedFee(e), i.emit()
				})
			}
		}, {
			key: "onChangeAmount1",
			value: function(e) {
				this.onChangeAmount(e.target.value, "amount1")
			}
		}, {
			key: "onChangeAmount2",
			value: function(e) {
				this.onChangeAmount(e.target.value, "amount2")
			}
		}, {
			key: "onClickMax",
			value: function(e) {
				var t = this,
					n = j.default.view.fee_input_visible ? (0, S.bigNumber)(j.default.view.balance_fee).minus(j.default.view.fee_input) : j.default.view.balance_fee;
				j.default.view.loading_max = !0, this.fetchFee({
					amount: n,
					use_cache: !0
				}).then(function(e) {
					var n = (0, E.collect)();
					t.updateRecomendedFee(e), t.updateAmounts({
						amount1: t.getMax.toFixed()
					}), j.default.view.loading_max = !1, n.emit()
				})
			}
		}, {
			key: "onChangeAddress",
			value: function(e) {
				var t = (0, E.collect)(),
					n = e.target.value.trim();
				j.default.view.address_input = n, j.default.view.address_input_error = !this.Coin.isAddress(n), t.emit()
			}
		}, {
			key: "onClickFee",
			value: function(e) {
				e.preventDefault();
				var t = (0, E.collect)();
				j.default.view.fee_input_visible = !j.default.view.fee_input_visible, j.default.view.fee_input = j.default.view.fee_recomended, this.updateFee(j.default.view.fee_recomended), t.emit()
			}
		}, {
			key: "onChangeFee",
			value: function(e) {
				var t = (0, E.collect)();
				this.updateFee((0, S.parseNumberAsString)(e.target.value)), j.default.view.fee_input = e.target.value, t.emit()
			}
		}, {
			key: "onChangePassword",
			value: function(e) {
				var t = (0, E.collect)();
				j.default.view.password_input_invalid = !1, j.default.view.password_input = e.target.value.trim(), t.emit()
			}
		}, {
			key: "onNext",
			value: function(e) {
				var t = this,
					n = this.asset,
					r = this.asset_id,
					o = n.address,
					a = n.addresses,
					i = j.default.view.password_input,
					l = (0, A.getPrivateKeys)(r, i),
					s = (0, E.collect)();
				if (j.default.view.error_when_create = !1, j.default.view.error_when_send = "", l[0]) {
					if (this.Coin.changeaddress && (0, A.isAssetWithSeed)(r)) {
						var d = a.indexOf(o);
						if (d === a.length - 1) {
							var u = this.Coin.getNextWalletFromSeed(n.address, n.addresses, n.seed, i);
							j.default.view.change_address = u.address
						} else j.default.view.change_address = a[d + 1]
					}
					j.default.view.loading = !0, this.Coin.createSimpleTx({
						from_addresses: a,
						to_address: j.default.view.address_input,
						private_keys: l,
						amount: j.default.view.amount,
						fee: j.default.view.fee,
						change_address: j.default.view.change_address,
						current_address: o
					}).then(function(e) {
						t.tx_raw = e;
						var n = (0, E.collect)();
						j.default.view.loading = !1, (0, F.setHref)(O.routes.assetSend({
							asset_id: t.asset_id
						}) + "/1"), n.emit()
					}).catch(function(e) {
						console.error(e);
						var t = (0, E.collect)();
						j.default.view.error_when_create = !0, j.default.view.loading = !1, t.emit()
					})
				} else j.default.view.password_input_invalid = !0;
				s.emit()
			}
		}, {
			key: "onChangeProvider",
			value: function(e) {
				j.default.view.send_provider_selected = e
			}
		}, {
			key: "onShowRawTx",
			value: function(e) {
				j.default.view.show_tx_raw = !0
			}
		}, {
			key: "onSend",
			value: function(e) {
				var t = this,
					n = this.asset_id,
					r = this.asset,
					o = this.send_providers[j.default.view.send_provider_selected],
					a = (0, E.collect)();
				j.default.view.loading = !0, j.default.view.error_when_send = "", a.emit(), o.send(this.tx_raw).then(function(e) {
					(0, F.sendEventToAnalytics)("send", t.Coin.symbol, j.default.view.amount), t.tx_id = e;
					var o = (0, E.collect)();
					j.default.view.loading = !1, j.default.view.is_sent = !0, j.default.view.balance = Number((0, S.bigNumber)(j.default.view.balance).minus(j.default.view.amount).minus(j.default.view.fee));
					var a = j.default.view.change_address;
					void 0 !== a && (r.addresses.includes(a) || (0, F.addAddress)(n, a), (0, F.changeAddress)(n, a)), o.emit()
				}).catch(function(e) {
					console.error(e);
					var t = (0, E.collect)();
					j.default.view.loading = !1, j.default.view.error_when_send = e, t.emit()
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this.asset.symbol,
					t = this.isEnoughBalance,
					n = this.isEnoughBalanceForFee,
					r = (0, A.getParamsFromLocation)().step,
					o = j.default.view.is_sent ? 2 : void 0 !== r && void 0 !== this.tx_raw ? Number(r) : 0;
				return 0 === o && delete this.tx_raw, x.default.createElement(V, {
					step: o,
					color: this.Coin.color,
					address_input: j.default.view.address_input,
					address_input_error: j.default.view.address_input_error,
					amount: j.default.view.amount.toFixed(),
					amount1_input: j.default.view.amount1_input,
					amount2_input: j.default.view.amount2_input,
					symbol_crypto: e,
					symbol_crypto_fee: this.Coin.symbol_fee,
					symbol_currency: j.default.fiat,
					fee: j.default.view.fee.toFixed(),
					fee_input: j.default.view.fee_input,
					fee_input_visible: j.default.view.fee_input_visible,
					fee_input_fiat: (0, A.formatCurrency)((0, A.convertBalance)(this.Coin.symbol_fee, j.default.view.fee.toFixed()), 2),
					fee_recomended: j.default.view.fee_recomended,
					fee_recomended_fiat: (0, A.formatCurrency)((0, A.convertBalance)(this.Coin.symbol_fee, j.default.view.fee_recomended), 2),
					total: this.getTotal.toFixed(),
					password_input: j.default.view.password_input,
					password_input_invalid: j.default.view.password_input_invalid,
					isEnoughBalance: t,
					isEnoughBalanceForFee: n,
					isValidForm: this.isValidForm && t && n,
					isFeeLowerThanRecomended: j.default.view.fee.lt(j.default.view.fee_recomended),
					error_when_create: j.default.view.error_when_create,
					send_provider_selected: j.default.view.send_provider_selected,
					send_providers: this.send_providers,
					show_tx_raw: j.default.view.show_tx_raw,
					tx_raw: this.tx_raw,
					loading: j.default.view.loading,
					error_when_send: j.default.view.error_when_send,
					tx_id: this.tx_id,
					tx_info: this.Coin.urlInfoTx(this.tx_id),
					url_decode_tx: this.Coin.urlDecodeTx(this.tx_raw),
					loading_max: j.default.view.loading_max,
					onChangeAddress: this.onChangeAddress,
					onChangeAmount1: this.onChangeAmount1,
					onChangeAmount2: this.onChangeAmount2,
					onClickMax: this.onClickMax,
					onClickFee: this.onClickFee,
					onChangeFee: this.onChangeFee,
					onChangePassword: this.onChangePassword,
					onNext: this.onNext,
					onChangeProvider: this.onChangeProvider,
					onShowRawTx: this.onShowRawTx,
					onSend: this.onSend
				})
			}
		}, {
			key: "getMax",
			get: function() {
				var e = (0, S.bigNumber)(j.default.view.balance).minus(j.default.view.fee);
				return e.gt(0) ? e : 0
			}
		}, {
			key: "getTotal",
			get: function() {
				return j.default.view.amount.plus(j.default.view.fee)
			}
		}, {
			key: "isEnoughBalance",
			get: function() {
				return this.getTotal.lte(j.default.view.balance)
			}
		}, {
			key: "isEnoughBalanceForFee",
			get: function() {
				return j.default.view.fee.lte(j.default.view.balance_fee)
			}
		}, {
			key: "isValidForm",
			get: function() {
				var e = (0, S.bigNumber)(10).pow(-1 * this.Coin.coin_decimals);
				return !j.default.view.address_input_error && j.default.view.address_input.length > 0 && j.default.view.password_input.length > 0 && j.default.view.amount.gte(e) && j.default.view.fee.gte(0) && !j.default.view.password_input_invalid
			}
		}]), t
	}();

	function V(e) {
		var t = e.step,
			n = e.color,
			r = e.address_input,
			o = e.address_input_error,
			a = e.amount,
			i = e.amount1_input,
			l = e.amount2_input,
			s = e.symbol_crypto,
			d = e.symbol_crypto_fee,
			u = e.symbol_currency,
			c = e.fee,
			f = e.fee_input_fiat,
			p = e.fee_input,
			h = e.fee_input_visible,
			m = e.fee_recomended,
			b = e.fee_recomended_fiat,
			v = e.total,
			g = e.password_input,
			w = e.password_input_invalid,
			y = e.isEnoughBalance,
			_ = e.isEnoughBalanceForFee,
			E = e.isValidForm,
			P = e.isFeeLowerThanRecomended,
			S = e.error_when_create,
			T = e.send_provider_selected,
			j = e.send_providers,
			F = e.show_tx_raw,
			A = e.tx_raw,
			K = e.loading,
			G = e.error_when_send,
			Y = e.tx_id,
			V = e.tx_info,
			re = e.url_decode_tx,
			ae = e.loading_max,
			fe = e.onChangeAddress,
			pe = e.onChangeAmount1,
			he = e.onChangeAmount2,
			me = e.onClickMax,
			be = e.onClickFee,
			ve = e.onChangeFee,
			ge = e.onChangePassword,
			we = e.onNext,
			ye = e.onChangeProvider,
			xe = e.onShowRawTx,
			_e = e.onSend;
		return x.default.createElement(B.default, {
			width: "500px",
			media: C.default.media.third
		}, x.default.createElement(U.default, {
			active: t
		}, x.default.createElement(R.default, null, x.default.createElement(R.default, null, x.default.createElement(M.default, {
			type: "text",
			value: r,
			error: "Invalid address",
			invalid: o,
			onChange: fe,
			placeholder: "Address",
			width: "100%",
			"text-align": "center"
		})), x.default.createElement(R.default, {
			"padding-top": "10px"
		}, x.default.createElement(R.default, {
			float: "left"
		}, x.default.createElement(N.default, {
			"line-height": "54px",
			width: "72px",
			"font-size": "15px",
			"border-radius": "10px 0 0 10px",
			"border-right": "1px solid transparent",
			loadingIco: "/static/image/loading.gif",
			loading: ae,
			onClick: me
		}, "Max")), x.default.createElement(R.default, {
			float: "left",
			width: "calc(100% - 72px)"
		}, x.default.createElement(I.default, {
			invalid: !y,
			error: "Not enough funds",
			value1: i,
			value2: l,
			color1: n,
			color2: "#000",
			label1: s,
			label2: u,
			onChange1: pe,
			onChange2: he
		}))), x.default.createElement(R.default, {
			clear: "both"
		}), x.default.createElement(O.Show, {
			if: h
		}, x.default.createElement(R.default, {
			"text-align": "center",
			"padding-top": "10px",
			position: "relative"
		}, x.default.createElement(X, null, f), x.default.createElement(M.default, {
			type: "text",
			value: p,
			error: "Very low fee",
			color: n,
			invalid: !1,
			onChange: ve,
			placeholder: "Network fee",
			width: "100%",
			"text-align": "center"
		}))), x.default.createElement(O.Show, {
			if: P
		}, x.default.createElement(R.default, {
			"padding-top": "10px"
		}, x.default.createElement(D.default, null, "An appropriate network fee is required to confirm this transaction. It is suggested to apply the recommended network fee."))), x.default.createElement(R.default, {
			"text-align": "center",
			padding: "10px 0"
		}, x.default.createElement(J, {
			href: "#",
			onClick: be
		}, x.default.createElement("span", null, h ? "Recommended Network Fee " : "Fee "), x.default.createElement(z.default, {
			color: n,
			"font-weight": "bold"
		}, m, " "), x.default.createElement(z.default, {
			color: "#000",
			"font-weight": "bold"
		}, b), x.default.createElement(O.Show, {
			if: s !== d
		}, x.default.createElement("span", null, " (", d, ")")))), x.default.createElement(R.default, {
			"padding-top": "10px"
		}, x.default.createElement(M.default, {
			invalid: w,
			error: "Invalid password",
			placeholder: "Password",
			type: "password",
			width: "100%",
			"text-align": "center",
			value: g,
			onChange: ge
		})), x.default.createElement(R.default, {
			"padding-top": "10px"
		}, x.default.createElement(L.default, {
			onClick: we,
			disabled: !E,
			"font-size": "14px",
			width: "100%",
			loading: K,
			loadingIco: "/static/image/loading.gif"
		}, "Next")), x.default.createElement(O.Show, {
			if: !_
		}, x.default.createElement(R.default, {
			"padding-top": "10px"
		}, x.default.createElement(D.default, {
			color: k.ERROR
		}, "This wallet does not have enough funds to afford the network fee."))), x.default.createElement(O.Show, {
			if: S
		}, x.default.createElement(R.default, {
			"padding-top": "10px"
		}, x.default.createElement(D.default, {
			color: k.ERROR
		}, "Something wrong ocurred when creating your transaction. Please, try again later.")))), x.default.createElement(R.default, null, x.default.createElement(R.default, null, x.default.createElement(le, null, x.default.createElement(se, null, "Address"), x.default.createElement(de, {
			left: !0
		}, r)), x.default.createElement(le, null, x.default.createElement(se, null, "Amount"), x.default.createElement(de, null, a, " ", s)), x.default.createElement(le, null, x.default.createElement(se, null, "Network Fee"), x.default.createElement(de, null, c, " ", d)), x.default.createElement(O.Show, {
			if: s === d
		}, x.default.createElement(le, null, x.default.createElement(se, {
			color: C.default.color.background3
		}, "Total"), x.default.createElement(de, {
			color: C.default.color.background3
		}, v, " ", s)))), x.default.createElement(R.default, {
			"padding-top": "10px",
			clear: "both"
		}, x.default.createElement(Q, null, j.map(function(e, t) {
			return x.default.createElement(q, {
				selected: t === T,
				onClick: function(e) {
					return ye(t)
				}
			}, x.default.createElement($, null, x.default.createElement(W.default, {
				checked: t === T
			})), x.default.createElement(Z, null, x.default.createElement(ee, null, e.name), x.default.createElement(te, {
				href: e.url,
				target: "_blank"
			}, e.url)))
		}))), x.default.createElement(R.default, {
			"padding-top": "10px"
		}, x.default.createElement(L.default, {
			onClick: _e,
			"font-size": "14px",
			width: "100%",
			loading: K,
			loadingIco: "/static/image/loading.gif"
		}, "Send / Broadcast")), x.default.createElement(O.Show, {
			if: "" !== G
		}, x.default.createElement(R.default, {
			"padding-top": "10px"
		}, x.default.createElement(D.default, {
			color: k.ERROR
		}, G))), x.default.createElement(R.default, {
			"padding-top": "20px",
			"text-align": "center"
		}, x.default.createElement(ne, {
			show: F,
			text: x.default.createElement(ie, {
				onClick: xe
			}, "Show raw transaction")
		}, x.default.createElement(oe, null, A), "" === re ? null : x.default.createElement(H.Label, {
			size: "11px"
		}, x.default.createElement("a", {
			href: re,
			target: "_blank"
		}, "Decode raw transaction"))))), x.default.createElement(R.default, {
			"padding-top": "10px"
		}, x.default.createElement(ue, {
			sent: 2 === t
		}, x.default.createElement("img", {
			src: "/static/image/send.svg",
			width: "60"
		})), x.default.createElement(R.default, {
			"padding-top": "20px",
			"font-size": "24px",
			"font-weight": "900",
			"text-align": "center"
		}, "Transaction Sent!"), x.default.createElement(R.default, {
			"padding-top": "10px"
		}, x.default.createElement(ce, {
			href: V,
			target: "_blank"
		}, Y)))))
	}
	t.default = Y;
	var J = _.default.a(o, C.default.color.grey1),
		X = _.default.div(a),
		Q = _.default.div(i),
		q = _.default.div(l, C.default.color.background1, function(e) {
			return e.selected ? C.default.color.background1 : "transparent"
		}, C.default.color.background1),
		$ = _.default.div(s),
		Z = _.default.div(d),
		ee = _.default.div(u, C.default.color.front3),
		te = _.default.a(c, C.default.color.grey1, C.default.color.front3, C.default.media.fourth);

	function ne(e) {
		var t = e.children,
			n = e.show,
			r = void 0 !== n && n,
			o = e.height,
			a = e.text;
		return x.default.createElement(re, {
			show: r,
			height: o
		}, x.default.createElement("div", {
			className: "overlay"
		}), x.default.createElement("div", {
			className: "text"
		}, a), x.default.createElement("div", null, t))
	}
	var re = _.default.div(f, function(e) {
		return e.show ? "auto" : e.height || "50px"
	}, function(e) {
		return e.show ? "auto" : "hidden"
	}, function(e) {
		return e.show ? "none" : "block"
	}, function(e) {
		return e.show ? "none" : "block"
	});

	function oe(e) {
		var t = e.children;
		return x.default.createElement(ae, null, x.default.createElement("span", null, t))
	}
	var ae = _.default.div(p, C.default.color.background4, C.default.color.grey1),
		ie = _.default.a(h, C.default.color.background3),
		le = _.default.div(m),
		se = _.default.div(b, function(e) {
			return e.color || C.default.color.grey1
		}),
		de = _.default.div(v, function(e) {
			return e.left ? "none" : "right"
		}, function(e) {
			return e.color || C.default.color.front3
		}),
		ue = _.default.div(g, function(e) {
			return e.sent ? "sent 2s cubic-bezier(.175, .885, .32, 1.275)" : "none"
		}, function(e) {
			return e.sent ? "sent2 3s cubic-bezier(.175, .885, .32, 1.275)" : "none"
		}),
		ce = _.default.a(w, C.default.color.background2, C.default.color.background3)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = E(o),
		i = n(7),
		l = (E(n(1)), n(9)),
		s = n(40),
		d = n(38),
		u = n(27),
		c = n(44),
		f = E(n(8)),
		p = n(11),
		h = n(10),
		m = E(n(2)),
		b = E(n(14)),
		v = E(n(26)),
		g = E(n(23)),
		w = E(n(31)),
		y = (E(n(32)), n(22)),
		x = n(21),
		_ = n(82);

	function E(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var k = {
			seed: "seed",
			privatekey: "privatekey",
			keystore: "keystore"
		},
		C = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, o.Component), r(t, [{
				key: "componentWillMount",
				value: function() {
					var e = this;
					this.observer = (0, i.createObserver)(function(t) {
						return e.forceUpdate()
					}), this.observer.observe(f.default.view);
					var t = (0, p.getParamsFromLocation)().asset_id;
					this.asset_id = t, this.is_asset_with_seed = (0, p.isAssetWithSeed)(this.asset_id), this.asset = (0, p.getAsset)(this.asset_id), this.Coin = l.Coins[this.asset.symbol], f.default.view = {
						type_export: this.is_asset_with_seed ? k.seed : k.privatekey,
						password: "",
						invalid_password: !1
					}, this.onChangeTypeExport = this.onChangeTypeExport.bind(this), this.onChangePassword = this.onChangePassword.bind(this), this.onExport = this.onExport.bind(this)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.observer.destroy()
				}
			}, {
				key: "shouldComponentUpdate",
				value: function() {
					return !1
				}
			}, {
				key: "onChangeTypeExport",
				value: function(e) {
					f.default.view.type_export = e.target.value
				}
			}, {
				key: "onChangePassword",
				value: function(e) {
					var t = (0, i.collect)();
					f.default.view.password = e.target.value, f.default.view.invalid_password = !1, t.emit()
				}
			}, {
				key: "onExport",
				value: function(e) {
					e.preventDefault();
					var t = f.default.view.type_export,
						n = (0, p.getAsset)(this.asset_id),
						r = this.asset_id,
						o = this.Coin.formatAddress(n.address),
						a = f.default.view.password,
						i = void 0;
					if (t === k.seed) {
						var l = (0, p.getSeed)(r, a);
						l ? (0, u.printTemplate)((0, _.Words)(l)) : f.default.view.invalid_password = !0
					} else if (t === k.privatekey) {
						var h = (0, p.getPrivateKey)(r, a);
						if (h) {
							var b = (0, d.getPublicFromPrivateKey)(h),
								v = [{
									img: (0, s.generateQRCode)(o),
									hash: o,
									title: "Address",
									description: "You can share this address to receive funds."
								}, {
									img: (0, s.generateQRCode)(h, void 0, m.default.color.red3),
									hash: h,
									red: !0,
									title: "Private Key",
									description: "This CAN NOT BE SHARED. If you share this you will lose your funds."
								}, {
									title: "Public Key",
									hash: b
								}];
							(0, u.printTemplate)((0, _.PrivateKey)(v))
						} else f.default.view.invalid_password = !0
					} else {
						if (this.is_asset_with_seed) {
							var g = (0, p.getPrivateKey)(this.asset_id, a);
							if (!g) return void(f.default.view.invalid_password = !0);
							i = (0, c.encryptAES128CTR)(g, a, !0, !0)
						} else i = n.private_key;
						var w = JSON.stringify({
								version: 3,
								id: o,
								address: o,
								Crypto: i
							}),
							y = "UTC--" + (new Date).toJSON().replace(/:/g, "-") + "--" + o;
						(0, u.downloadFile)({
							data: w,
							name: y
						})
					}
				}
			}, {
				key: "render",
				value: function() {
					return a.default.createElement(O, {
						type_export: f.default.view.type_export,
						is_asset_with_seed: this.is_asset_with_seed,
						password: f.default.view.password,
						invalid_password: f.default.view.invalid_password,
						onChangeTypeExport: this.onChangeTypeExport,
						onChangePassword: this.onChangePassword,
						onExport: this.onExport
					})
				}
			}]), t
		}();

	function O(e) {
		var t = e.type_export,
			n = e.is_asset_with_seed,
			r = e.password,
			o = e.invalid_password,
			i = e.onChangeTypeExport,
			l = e.onChangePassword,
			s = e.onExport;
		return a.default.createElement(b.default, null, a.default.createElement("form", null, a.default.createElement(y.FormField, null, a.default.createElement(y.FormFieldLeft, null, a.default.createElement(x.Label, null, "Format"), a.default.createElement(h.Show, {
			if: t === k.keystore
		}, a.default.createElement(x.SubLabel, null, "You have to remember your current password in order to import this asset in the future."))), a.default.createElement(y.FormFieldRight, null, a.default.createElement(w.default, {
			width: "100%",
			onChange: i
		}, a.default.createElement("option", {
			disabled: !n,
			value: k.seed,
			selected: t === k.seed
		}, "Recovery Phrase (12 words)"), a.default.createElement("option", {
			value: k.privatekey,
			selected: t === k.privatekey
		}, "Private Key"), a.default.createElement("option", {
			value: k.keystore,
			selected: t === k.keystore
		}, "Keystore file (UTC / JSON)")))), a.default.createElement(h.Show, {
			if: n || t !== k.keystore
		}, a.default.createElement(y.FormField, null, a.default.createElement(y.FormFieldLeft, null, a.default.createElement(x.Label, null, "Password"), a.default.createElement(x.SubLabel, null, "Password of this wallet.")), a.default.createElement(y.FormFieldRight, null, a.default.createElement(g.default, {
			width: "100%",
			value: r,
			onChange: l,
			type: "password",
			error: "Invalid password",
			invalid: o
		})))), a.default.createElement(y.FormField, null, a.default.createElement(y.FormFieldButtons, null, a.default.createElement(v.default, {
			onClick: s
		}, t === k.keystore ? "Download" : "Unlock and Print")))))
	}
	t.default = C
}, function(e, t, n) {
	e.exports = n(207)
}, function(e, t, n) {
	"use strict";
	var r = i(n(0)),
		o = n(0),
		a = i(n(211));

	function i(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}(0, o.render)(r.default.createElement(a.default, null), document.querySelector("#app"))
}, , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\n    height: 100%;\n    background: linear-gradient(to bottom, #007196 150px, #d7dbd5 150px);\n"], o = ["\n    height: 100%;\n    background: linear-gradient(to bottom, #007196 150px, #d7dbd5 150px);\n"], Object.freeze(Object.defineProperties(r, {
		raw: {
			value: Object.freeze(o)
		}
	})));
	t.default = function() {
		return i.default.createElement(m, null, i.default.createElement(d.default, null), i.default.createElement(c.default, null), i.default.createElement(u.default, null), i.default.createElement(f.default, null), i.default.createElement(p.default, null), i.default.createElement(s.default, null))
	};
	var i = h(n(0)),
		l = h(n(1)),
		s = (h(n(2)), h(n(217))),
		d = h(n(379)),
		u = h(n(384)),
		c = h(n(387)),
		f = h(n(391)),
		p = h(n(441));

	function h(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var m = l.default.div(a)
}, , , , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = u(o),
		i = (u(n(1)), n(7)),
		l = u(n(8)),
		s = (u(n(2)), n(378)),
		d = u(n(26));
	u(n(14));

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var c = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, o.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, i.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(l.default.popups.closeSession, "open")
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "render",
			value: function() {
				return a.default.createElement(f, {
					closeSession: l.default.popups.closeSession
				})
			}
		}]), t
	}();

	function f(e) {
		var t = e.closeSession;
		return a.default.createElement(s.PopupManager, {
			zIndex: 999
		}, a.default.createElement(s.Popup, {
			width: "400px",
			open: t.open,
			onKeyEnter: t.confirm,
			onClose: t.cancel
		}, a.default.createElement(s.PopupContent, null, a.default.createElement("strong", null, "You haven't exported your assets. If you continue you will lose any change you made. Are you sure to continue?")), a.default.createElement(s.PopupFooter, null, a.default.createElement(d.default, {
			onClick: t.cancel
		}, "Cancel"), a.default.createElement(d.default, {
			onClick: t.confirm,
			red: !0
		}, "Continue"))))
	}
	t.default = c
}, , , function(e, t, n) {
	var r = {
		"./": 9,
		"./ANT": 117,
		"./ANT.js": 117,
		"./BAT": 165,
		"./BAT.js": 165,
		"./BCH": 106,
		"./BCH.js": 106,
		"./BNB": 170,
		"./BNB.js": 170,
		"./BTC": 57,
		"./BTC.js": 57,
		"./DAI": 171,
		"./DAI.js": 171,
		"./EOS": 172,
		"./EOS.js": 172,
		"./ERC20": 12,
		"./ERC20.js": 12,
		"./ETH": 38,
		"./ETH.js": 38,
		"./ETHOS": 173,
		"./ETHOS.js": 173,
		"./FUN": 174,
		"./FUN.js": 174,
		"./GNT": 175,
		"./GNT.js": 175,
		"./KNC": 176,
		"./KNC.js": 176,
		"./LTC": 107,
		"./LTC.js": 107,
		"./MKR": 177,
		"./MKR.js": 177,
		"./OMG": 178,
		"./OMG.js": 178,
		"./QASH": 179,
		"./QASH.js": 179,
		"./QTUM": 180,
		"./QTUM.js": 180,
		"./REP": 181,
		"./REP.js": 181,
		"./REQ": 182,
		"./REQ.js": 182,
		"./SALT": 183,
		"./SALT.js": 183,
		"./SNT": 184,
		"./SNT.js": 184,
		"./TRX": 185,
		"./TRX.js": 185,
		"./ZRX": 186,
		"./ZRX.js": 186,
		"./index": 9,
		"./index.js": 9
	};

	function o(e) {
		return n(a(e))
	}

	function a(e) {
		var t = r[e];
		if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
		return t
	}
	o.keys = function() {
		return Object.keys(r)
	}, o.resolve = a, e.exports = o, o.id = 220
}, , , , , , , function(e, t) {}, , function(e, t) {}, , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {}, , , function(e, t) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
	var r = {
		"./21.co": 166,
		"./21.co.js": 166,
		"./bitpay": 167,
		"./bitpay.js": 167,
		"./blockcypher": 168,
		"./blockcypher.js": 168,
		"./btc.com": 169,
		"./btc.com.js": 169
	};

	function o(e) {
		return n(a(e))
	}

	function a(e) {
		var t = r[e];
		if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
		return t
	}
	o.keys = function() {
		return Object.keys(r)
	}, o.resolve = a, e.exports = o, o.id = 368
}, , , , , , , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function(e) {
		var t = (0, i.jsonParse)((0, l.localStorageGet)(s.LOCALSTORAGE_CUSTOMS, e.network));
		for (var n in t) r.Coins.hasOwnProperty(n) || (t[n].custom = !0, r.Coins[n] = (0, o.createERC20)(t[n]));
		var d = (0, i.jsonParse)((0, l.localStorageGet)(s.LOCALSTORAGE_ASSETS, e.network)),
			u = e.assets;
		for (var c in d) r.Coins[d[c].symbol] && (u[c] = (0, a.generateDefaultAsset)(d[c]));
		(0, a.getSymbolsFromAssets)(e.assets).forEach(function(t) {
			null !== (0, l.localStorageGet)(t) && (e.prices[t] = Number((0, l.localStorageGet)(t)))
		})
	};
	var r = n(9),
		o = n(12),
		a = n(11),
		i = n(108),
		l = n(27),
		s = n(4)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PopupFooter = t.PopupContent = t.PopupHeader = t.Popup = t.PopupManager = void 0;
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = h(["\n    box-sizing: content-box;\n    z-index: ", ";\n    position: absolute;\n"], ["\n    box-sizing: content-box;\n    z-index: ", ";\n    position: absolute;\n"]),
		a = h(["\n    display: ", ";\n    box-sizing: content-box;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    z-index: ", ";\n\n    & .eyc-background {\n        box-sizing: content-box;\n        display: table-cell;\n        vertical-align: middle;\n        background-color: rgba(0,0,0,.35);\n    }\n\n    & .eyc-popup {\n        box-sizing: content-box;\n        border-radius: 6px;\n        background-color: white;\n        width: ", ";\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: -4%;\n\n        ", " {\n            width: calc(100% - 20px);\n            margin-right: 10px;\n            margin-left: 10px;\n        }\n    }\n"], ["\n    display: ", ";\n    box-sizing: content-box;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    z-index: ", ";\n\n    & .eyc-background {\n        box-sizing: content-box;\n        display: table-cell;\n        vertical-align: middle;\n        background-color: rgba(0,0,0,.35);\n    }\n\n    & .eyc-popup {\n        box-sizing: content-box;\n        border-radius: 6px;\n        background-color: white;\n        width: ", ";\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: -4%;\n\n        ", " {\n            width: calc(100% - 20px);\n            margin-right: 10px;\n            margin-left: 10px;\n        }\n    }\n"]),
		i = h(["\n    box-sizing: content-box;\n    color: ", ";\n    padding: 15px 20px;\n    border-bottom: 1px solid ", ";\n\n    & .eyc-title {\n        box-sizing: content-box;\n        float: left;\n        font-weight: bold;\n        font-size: 18px;\n    }\n\n    & .eyc-close {\n        box-sizing: content-box;\n        float: right;\n        height: 25px;\n    }\n    & .eyc-close span {\n        box-sizing: content-box;\n        cursor: pointer;\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        overflow: hidden;\n        position: relative;\n    }\n\n    & .eyc-close span::before,\n    .eyc-close span::after {\n        box-sizing: content-box;\n        content: '';\n        position: absolute;\n        height: 3px;\n        margin-top: -2px;\n        width: 100%;\n        top: 50%;\n        left: 0;\n        background: ", ";\n    }\n    & .eyc-close:hover span::before,\n    .eyc-close:hover span::after {\n        box-sizing: content-box;\n        background: ", ";\n    }\n    & .eyc-close span::before {\n        box-sizing: content-box;\n        transform: rotate(45deg);\n    }\n    & .eyc-close span::after {\n        box-sizing: content-box;\n        transform: rotate(-45deg);\n    }\n"], ["\n    box-sizing: content-box;\n    color: ", ";\n    padding: 15px 20px;\n    border-bottom: 1px solid ", ";\n\n    & .eyc-title {\n        box-sizing: content-box;\n        float: left;\n        font-weight: bold;\n        font-size: 18px;\n    }\n\n    & .eyc-close {\n        box-sizing: content-box;\n        float: right;\n        height: 25px;\n    }\n    & .eyc-close span {\n        box-sizing: content-box;\n        cursor: pointer;\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        overflow: hidden;\n        position: relative;\n    }\n\n    & .eyc-close span::before,\n    .eyc-close span::after {\n        box-sizing: content-box;\n        content: '';\n        position: absolute;\n        height: 3px;\n        margin-top: -2px;\n        width: 100%;\n        top: 50%;\n        left: 0;\n        background: ", ";\n    }\n    & .eyc-close:hover span::before,\n    .eyc-close:hover span::after {\n        box-sizing: content-box;\n        background: ", ";\n    }\n    & .eyc-close span::before {\n        box-sizing: content-box;\n        transform: rotate(45deg);\n    }\n    & .eyc-close span::after {\n        box-sizing: content-box;\n        transform: rotate(-45deg);\n    }\n"]),
		l = h(["\n    box-sizing: content-box;\n    padding: 20px;\n    color: ", ";\n    line-height: 21px;\n    font-size: 15px;\n"], ["\n    box-sizing: content-box;\n    padding: 20px;\n    color: ", ";\n    line-height: 21px;\n    font-size: 15px;\n"]),
		s = h(["\n    box-sizing: content-box;\n    padding: 15px 20px;\n    background: ", ";\n    border-radius: 0px 0px 5px 5px;\n\n    & .eyc-buttons > * {\n        box-sizing: content-box;\n        float: right;\n        margin-left: 10px;\n    }\n"], ["\n    box-sizing: content-box;\n    padding: 15px 20px;\n    background: ", ";\n    border-radius: 0px 0px 5px 5px;\n\n    & .eyc-buttons > * {\n        box-sizing: content-box;\n        float: right;\n        margin-left: 10px;\n    }\n"]),
		d = p(n(0)),
		u = p(n(1)),
		c = p(n(2)),
		f = p(n(14));

	function p(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function h(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}

	function m(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function b(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function v(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	t.PopupManager = function(e) {
		function t(e) {
			m(this, t);
			var n = b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
			return n.onKeyDown = n.onKeyDown.bind(n), n.eventKeydown = document.addEventListener("keydown", n.onKeyDown), n
		}
		return v(t, d.default.Component), r(t, [{
			key: "onKeyDown",
			value: function(e) {
				e = e || window.event;
				this.firstPopup && (27 == e.keyCode && this.firstPopup.props.onClose ? this.firstPopup.props.onClose(e) : 13 == e.keyCode && this.firstPopup.props.onKeyEnter && this.firstPopup.props.onKeyEnter(e))
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.eventKeydown = document.removeEventListener("keydown", this.onKeyDown)
			}
		}, {
			key: "render",
			value: function() {
				var e = this,
					t = this.props,
					n = 0,
					r = !1,
					o = Array.isArray(t.children) ? t.children : [t.children];
				return delete this.firstPopup, o.forEach(function(t, o) {
					if (t) {
						var a = t.props || t.attrs;
						a.open && (a.zIndex > 0 && a.zIndex >= n ? (r = !0, n = a.zIndex, e.firstPopup = t) : r || (e.firstPopup = t))
					}
				}), d.default.createElement(g, t, t.children)
			}
		}]), t
	}();
	var g = u.default.div(o, function(e) {
			return e.zIndex
		}),
		w = (t.Popup = function(e) {
			function t(e) {
				return m(this, t), b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return v(t, d.default.Component), r(t, [{
				key: "onClickBackground",
				value: function(e) {
					this.props.onClose && this.props.onClose(e)
				}
			}, {
				key: "onClickPopup",
				value: function(e) {
					e.stopPropagation()
				}
			}, {
				key: "render",
				value: function() {
					var e = this.props;
					return d.default.createElement(w, e, d.default.createElement("div", {
						className: "eyc-background",
						onClick: this.onClickBackground.bind(this)
					}, d.default.createElement("div", {
						className: "eyc-popup",
						onClick: this.onClickPopup.bind(this)
					}, d.default.createElement("div", null, e.children))))
				}
			}]), t
		}(), u.default.div(a, function(e) {
			return e.open ? "table" : "none"
		}, function(e) {
			return e.zIndex
		}, function(e) {
			return e.width
		}, c.default.media.fourth)),
		y = (t.PopupHeader = function(e) {
			function t(e) {
				return m(this, t), b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return v(t, d.default.Component), r(t, [{
				key: "onClickClose",
				value: function(e) {
					this.props.onClose && this.props.onClose(e)
				}
			}, {
				key: "render",
				value: function() {
					var e = this.props;
					return d.default.createElement(y, e, d.default.createElement("div", {
						className: "eyc-title"
					}, e.children), d.default.createElement("div", {
						className: "eyc-close",
						onClick: this.onClickClose.bind(this)
					}, d.default.createElement("span", null)), d.default.createElement(f.default, {
						clear: "both"
					}))
				}
			}]), t
		}(), u.default.div(i, c.default.color.front3, c.default.color.background4, c.default.color.front2, c.default.color.background2)),
		x = (t.PopupContent = function(e) {
			function t(e) {
				return m(this, t), b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return v(t, d.default.Component), r(t, [{
				key: "render",
				value: function() {
					var e = this.props;
					return d.default.createElement(x, e, e.children)
				}
			}]), t
		}(), u.default.div(l, c.default.color.front3)),
		_ = (t.PopupFooter = function(e) {
			function t(e) {
				return m(this, t), b(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
			}
			return v(t, d.default.Component), r(t, [{
				key: "render",
				value: function() {
					var e = this.props,
						t = Array.isArray(e.children) ? e.children.slice(0).reverse() : e.children;
					return d.default.createElement(_, e, d.default.createElement("div", {
						className: "eyc-buttons"
					}, t), d.default.createElement(f.default, {
						clear: "both"
					}))
				}
			}]), t
		}(), u.default.div(s, c.default.color.background1))
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		i = (r = ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 4;\n"], o = ["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 4;\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		l = n(0),
		s = h(l),
		d = n(7),
		u = h(n(8)),
		c = h(n(1)),
		f = n(16),
		p = (h(n(2)), h(n(381)));

	function h(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var m = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, l.Component), a(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, d.createObserver)(function(t) {
					t.forEach(function(t) {
						var n = t.value;
						void 0 !== n && "number" == typeof n.timeout && n.timeout > 0 && setTimeout(function() {
							e.onClose(n.id)
						}, n.timeout)
					}), e.forceUpdate()
				}), this.observer.observe(u.default.notifications), this.onClose = this.onClose.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "onClose",
			value: function(e) {
				(0, f.deleteNotification)(e)
			}
		}, {
			key: "render",
			value: function() {
				return s.default.createElement(b, {
					notifications: u.default.notifications,
					onClose: this.onClose
				})
			}
		}]), t
	}();

	function b(e) {
		var t = e.notifications,
			n = e.onClose,
			r = [],
			o = void 0;
		return Object.keys(t).map(Number).reverse().forEach(function(e) {
			o = t[e], r.push(s.default.createElement(p.default, {
				key: e,
				color: o.color,
				onClose: function(t) {
					return n(e)
				}
			}, o.text))
		}), s.default.createElement(v, null, r)
	}
	t.default = m;
	var v = c.default.div(i)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getAllPrices = function(e, t, n) {
		return (0, r.resolveAll)([o(e, t, n), a(e, t, n)]).then(function(t) {
			var n = {};
			return e.forEach(function(e) {
				n[e] || (n[e] = []), t.forEach(function(t) {
					var r = t[e];
					r && "number" == typeof r && !isNaN(r) && n[e].push(r)
				})
			}), n
		})
	}, t.getPriceFromCryptocompare = o, t.getPriceFromCoinmarketcap = a;
	var r = n(56);

	function o(e, t, n) {
		var o = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=" + e.join(",") + "&tsyms=" + t;
		return (0, r.fetchTimeout)(o, {
			timeout: n
		}).then(function(e) {
			return e.json()
		}).then(function(n) {
			var r = {};
			return e.forEach(function(e) {
				n[e] && n[e][t] && (r[e] = n[e][t])
			}), r
		})
	}

	function a(e, t, n) {
		var o = "https://api.coinmarketcap.com/v1/ticker/?convert=" + t + "&limit=1000";
		return (0, r.fetchTimeout)(o, {
			timeout: n
		}).then(function(e) {
			return e.json()
		}).then(function(n) {
			for (var r = {}, o = 0, a = void 0, i = 0, l = n.length; i < l && (a = n[i], !(e.indexOf(a.symbol) > -1 && (r[a.symbol] = Number(a["price_" + t.toLowerCase()]), ++o >= e.length))); ++i);
			return r
		})
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = c(["\nposition: relative;\nbackground: ", ";\nwidth: 100%;\nbox-shadow: 0 2px 1px 1px rgba(0, 0, 0, .1) inset;\nanimation: open .75s ease;\n@keyframes open {\n    0% {\n        /* transform: translateY(-100%); */\n        margin-top: -50px;\n    }\n    100% {\n        /* transform: translateY(0); */\n        margin-top: 0;\n    }\n"], ["\nposition: relative;\nbackground: ", ";\nwidth: 100%;\nbox-shadow: 0 2px 1px 1px rgba(0, 0, 0, .1) inset;\nanimation: open .75s ease;\n@keyframes open {\n    0% {\n        /* transform: translateY(-100%); */\n        margin-top: -50px;\n    }\n    100% {\n        /* transform: translateY(0); */\n        margin-top: 0;\n    }\n"]),
		o = c(["\n    color: white;\n    text-align: center;\n    & > div {\n        letter-spacing: 1px;\n        font-size: 15px;\n        padding: 15px ", ";\n    }\n"], ["\n    color: white;\n    text-align: center;\n    & > div {\n        letter-spacing: 1px;\n        font-size: 15px;\n        padding: 15px ", ";\n    }\n"]),
		a = c(["\n    position: absolute;\n    right: 12px;\n    top: 12px;\n    cursor: pointer;\n    opacity: 0.8;\n    &:hover {\n        opacity: 1;\n    }\n"], ["\n    position: absolute;\n    right: 12px;\n    top: 12px;\n    cursor: pointer;\n    opacity: 0.8;\n    &:hover {\n        opacity: 1;\n    }\n"]);
	t.default = function(e) {
		var t = e.children,
			n = e.key,
			r = e.color,
			o = void 0 === r ? s.default.color.background2 : r,
			a = e.onClose;
		return i.default.createElement(f, {
			key: n,
			color: o
		}, i.default.createElement(p, null, i.default.createElement("div", null, t)), i.default.createElement(h, {
			onClick: a
		}, i.default.createElement(d.default, {
			size: 25,
			color: "white"
		})))
	};
	var i = u(n(0)),
		l = u(n(1)),
		s = u(n(2)),
		d = u(n(191));

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function c(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var f = l.default.div(r, function(e) {
			return e.color
		}),
		p = l.default.div(o, s.default.paddingOut),
		h = l.default.div(a)
}, , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = T(["\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    background: ", ";\n    line-height: 18px;\n    text-align: center;\n    color: white;\n    font-size: 9px;\n    letter-spacing: 0.5px;\n    z-index: 1;\n"], ["\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    background: ", ";\n    line-height: 18px;\n    text-align: center;\n    color: white;\n    font-size: 9px;\n    letter-spacing: 0.5px;\n    z-index: 1;\n"]),
		a = T(["\n    height: ", ";\n    margin: 0 ", ";\n    ", " {\n        margin: 0 ", ";\n    }\n"], ["\n    height: ", ";\n    margin: 0 ", ";\n    ", " {\n        margin: 0 ", ";\n    }\n"]),
		i = T([""], [""]),
		l = T(["\n    margin-top: 28px;\n    float: left;\n    text-align: center;\n    cursor: pointer;\n    width: 28px;\n    height: 28px;\n    min-height: 1px;\n    box-shadow: 0 0 0px 4px rgba(255, 255, 255, 0);\n    background: rgba(255, 255, 255, 0);\n    border-radius: 50%;\n    transition: 0.5s ease all;\n\n    &:hover,\n    &:active {\n        background: rgba(255, 255, 255, 0.2);\n        box-shadow: 0 0 0px 4px rgba(255, 255, 255, 0.2);\n    }\n\n    & > div {\n        display: none;\n    }\n\n    ", " {\n        & > div {\n            display: block;\n        }\n    }\n"], ["\n    margin-top: 28px;\n    float: left;\n    text-align: center;\n    cursor: pointer;\n    width: 28px;\n    height: 28px;\n    min-height: 1px;\n    box-shadow: 0 0 0px 4px rgba(255, 255, 255, 0);\n    background: rgba(255, 255, 255, 0);\n    border-radius: 50%;\n    transition: 0.5s ease all;\n\n    &:hover,\n    &:active {\n        background: rgba(255, 255, 255, 0.2);\n        box-shadow: 0 0 0px 4px rgba(255, 255, 255, 0.2);\n    }\n\n    & > div {\n        display: none;\n    }\n\n    ", " {\n        & > div {\n            display: block;\n        }\n    }\n"]),
		s = T(["\n    width: calc(100% - 60px);\n    float: left;\n    text-align: center;\n    position: relative;\n"], ["\n    width: calc(100% - 60px);\n    float: left;\n    text-align: center;\n    position: relative;\n"]),
		d = T(["\n    cursor: pointer;\n    padding-top: 10px;\n    width: 100px;\n    margin: 0 auto;\n    & div {\n        opacity: ", "};\n    }\n    &:hover div {\n        opacity: 1;\n    }\n"], ["\n    cursor: pointer;\n    padding-top: 10px;\n    width: 100px;\n    margin: 0 auto;\n    & div {\n        opacity: ", "};\n    }\n    &:hover div {\n        opacity: 1;\n    }\n"]),
		u = T(["\n    margin-top: 25px;\n    width: 30px;\n    height: 30px;\n    float: right;\n    text-align: right;\n    cursor: pointer;\n    position: relative;\n    box-shadow: 0 0 0px 4px rgba(255, 255, 255, 0);\n    background: rgba(255, 255, 255, 0);\n    border-radius: 50%;\n    transition: 0.5s ease all;\n\n    &:hover,\n    &:active {\n        background: rgba(255, 255, 255, 0.2);\n        box-shadow: 0 0 0px 4px rgba(255, 255, 255, 0.2);\n    }\n"], ["\n    margin-top: 25px;\n    width: 30px;\n    height: 30px;\n    float: right;\n    text-align: right;\n    cursor: pointer;\n    position: relative;\n    box-shadow: 0 0 0px 4px rgba(255, 255, 255, 0);\n    background: rgba(255, 255, 255, 0);\n    border-radius: 50%;\n    transition: 0.5s ease all;\n\n    &:hover,\n    &:active {\n        background: rgba(255, 255, 255, 0.2);\n        box-shadow: 0 0 0px 4px rgba(255, 255, 255, 0.2);\n    }\n"]),
		c = T(["\n    pointer-events: none;\n    display: ", ";\n    z-index: 1;\n    position: absolute;\n    right: -2px;\n    top: -10px;\n"], ["\n    pointer-events: none;\n    display: ", ";\n    z-index: 1;\n    position: absolute;\n    right: -2px;\n    top: -10px;\n"]),
		f = T(["\n    pointer-events: none;\n    display: ", ";\n    z-index: 1;\n    position: absolute;\n    top: 2px;\n    left: 99px;\n"], ["\n    pointer-events: none;\n    display: ", ";\n    z-index: 1;\n    position: absolute;\n    top: 2px;\n    left: 99px;\n"]),
		p = T(["\n    background-color: red;\n    border: 2px solid white;\n    border-radius: 50%;\n    height: 16px;\n    min-width: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    & span {\n        color: white;\n        font-weight: bold;\n        font-size: 10px;\n    }\n"], ["\n    background-color: red;\n    border: 2px solid white;\n    border-radius: 50%;\n    height: 16px;\n    min-width: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    & span {\n        color: white;\n        font-weight: bold;\n        font-size: 10px;\n    }\n"]),
		h = n(0),
		m = S(h),
		b = S(n(1)),
		v = n(7),
		g = S(n(2)),
		w = n(10),
		y = n(4),
		x = S(n(385)),
		_ = S(n(192)),
		E = S(n(386)),
		k = (n(37), n(9), n(16)),
		C = n(11),
		O = S(n(8)),
		P = (S(n(14)), n(109));

	function S(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function T(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var j = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, h.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, v.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(O.default, "menuOpen"), this.observer.observe(O.default.location, "pathname")
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "onChangeNetwork",
			value: function() {
				(0, k.changeNetwork)(y.MAINNET)
			}
		}, {
			key: "onExport",
			value: function(e) {
				(0, k.exportBackup)(e.target)
			}
		}, {
			key: "onImport",
			value: function() {
				(0, k.importBackupFromFile)()
			}
		}, {
			key: "onHome",
			value: function() {
				(0, k.setHref)(w.routes.home())
			}
		}, {
			key: "onSettings",
			value: function() {
				(0, k.setHref)(w.routes.settings())
			}
		}, {
			key: "onSideMenu",
			value: function() {
				O.default.sideMenuOpen = !0
			}
		}, {
			key: "onMenuOpen",
			value: function() {
				O.default.menuOpen = !0
			}
		}, {
			key: "onMenuClose",
			value: function() {
				O.default.menuOpen = !1
			}
		}, {
			key: "render",
			value: function() {
				return m.default.createElement(F, {
					network: O.default.network,
					sideMenuOpen: O.default.sideMenuOpen,
					onSideMenu: this.onSideMenu,
					menuOpen: O.default.menuOpen,
					showAlertBackup: !(0, C.isBackupAssetsExported)() && (0, C.getTotalAssets)(O.default.assets) > 0,
					onChangeNetwork: this.onChangeNetwork,
					onMenuOpen: this.onMenuOpen,
					onMenuClose: this.onMenuClose,
					onExport: this.onExport,
					onImport: this.onImport,
					onHome: this.onHome,
					onSettings: this.onSettings,
					totalAssets: O.default.totalAssets
				})
			}
		}]), t
	}();

	function F(e) {
		var t = e.network,
			n = (e.sideMenuOpen, e.onSideMenu),
			r = e.menuOpen,
			o = e.showAlertBackup,
			a = e.onChangeNetwork,
			i = e.onMenuOpen,
			l = e.onMenuClose,
			s = e.onExport,
			d = e.onImport,
			u = e.onHome,
			c = e.onSettings,
			f = e.totalAssets;
		return m.default.createElement(R, null, m.default.createElement(w.Show, {
			if: t === y.TESTNET
		}, m.default.createElement(A, null, m.default.createElement("span", null, "You are on Testnet mode. "), m.default.createElement("a", {
			href: "#",
			onClick: a
		}, "Click here to change to Mainnet."))), m.default.createElement(z, null, m.default.createElement(M, {
			onClick: n
		}, m.default.createElement("div", null, m.default.createElement(x.default, {
			size: 28,
			color: "white"
		}))), m.default.createElement(I, null, m.default.createElement(N, {
			isHome: O.default.location.pathname === w.routes.home(),
			onClick: u
		}, m.default.createElement("div", null, m.default.createElement(E.default, {
			size: 15,
			color: "white"
		})), m.default.createElement("img", {
			src: "/static/image/logo.svg",
			width: "80"
		}))), m.default.createElement(L, null, m.default.createElement(B, {
			visible: o
		}, m.default.createElement(U, null, m.default.createElement("span", null, "!"))), m.default.createElement(P.Dropdown, {
			onOpen: i,
			onClose: l,
			open: r
		}, m.default.createElement(_.default, {
			size: 30,
			color: "white"
		}), m.default.createElement(P.DropdownMenu, {
			right: "0"
		}, m.default.createElement(P.DropdownItem, {
			onClick: d
		}, "Import backup"), m.default.createElement(P.DropdownItem, {
			onClick: s,
			disabled: 0 === f
		}, "Export backup", " ", m.default.createElement(D, {
			visible: o
		}, m.default.createElement(U, null, m.default.createElement("span", null, "!")))), m.default.createElement(P.DropdownItem, {
			onClick: c
		}, "Settings"))))))
	}
	t.default = j;
	var A = b.default.div(o, g.default.infoColor.red),
		R = b.default.div(a, g.default.headerHeight, g.default.paddingOut, g.default.media.second, g.default.paddingOutMobile),
		z = b.default.div(i),
		M = b.default.div(l, g.default.media.first),
		I = b.default.div(s),
		N = b.default.div(d, function(e) {
			return e.isHome ? 1 : 0
		}),
		L = b.default.div(u),
		B = b.default.div(c, function(e) {
			return e.visible ? "block" : "none"
		}),
		D = b.default.div(f, function(e) {
			return e.visible ? "block" : "none"
		}),
		U = b.default.div(p)
}, , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = P(["\n    user-select: none;\n    z-index: 3;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n"], ["\n    user-select: none;\n    z-index: 3;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n"]),
		a = P(["\n    ", " {\n        transition: 0.4s ease all;\n        width: 100%;\n        height: 100%;\n        pointer-events: ", ";\n        display: block;\n        background-color: rgba(0, 0, 0, ", ");\n    }\n"], ["\n    ", " {\n        transition: 0.4s ease all;\n        width: 100%;\n        height: 100%;\n        pointer-events: ", ";\n        display: block;\n        background-color: rgba(0, 0, 0, ", ");\n    }\n"]),
		i = P(["\n    pointer-events: auto;\n    position: relative;\n    height: calc(100% - ", " - ", ");\n    width: ", ";\n    left: ", ";\n    top: ", ";\n    ", " {\n        transition: 0.4s ease all;\n        box-shadow: 4px 0 9px 0px\n            rgba(0, 0, 0, ", ");\n        width: ", ";\n        position: fixed;\n        left: ", ";\n        top: 0;\n        height: 100%;\n        background: white;\n    }\n"], ["\n    pointer-events: auto;\n    position: relative;\n    height: calc(100% - ", " - ", ");\n    width: ", ";\n    left: ", ";\n    top: ", ";\n    ", " {\n        transition: 0.4s ease all;\n        box-shadow: 4px 0 9px 0px\n            rgba(0, 0, 0, ", ");\n        width: ", ";\n        position: fixed;\n        left: ", ";\n        top: 0;\n        height: 100%;\n        background: white;\n    }\n"]),
		l = P(["\n    height: 75px;\n    background: white;\n    margin-top: -45px;\n    border-radius: 50% 50% 0 0;\n    border-bottom: 1px solid #e5e9eb;\n    & > div {\n        padding-top: 13px;\n    }\n    ", " {\n        margin-top: 0;\n    }\n"], ["\n    height: 75px;\n    background: white;\n    margin-top: -45px;\n    border-radius: 50% 50% 0 0;\n    border-bottom: 1px solid #e5e9eb;\n    & > div {\n        padding-top: 13px;\n    }\n    ", " {\n        margin-top: 0;\n    }\n"]),
		s = P(["\n    text-align: center;\n"], ["\n    text-align: center;\n"]),
		d = P(["\n    color: ", ";\n    font-weight: 900;\n    font-size: 25px;\n    line-height: 25px;\n"], ["\n    color: ", ";\n    font-weight: 900;\n    font-size: 25px;\n    line-height: 25px;\n"]),
		u = P(["\n    position: relative;\n    top: -7px;\n    font-size: 15px;\n    font-weight: bold;\n    padding-right: 1px;\n    color: ", ";\n"], ["\n    position: relative;\n    top: -7px;\n    font-size: 15px;\n    font-weight: bold;\n    padding-right: 1px;\n    color: ", ";\n"]),
		c = P(["\n    color: ", ";\n    font-size: 13px;\n    font-weight: 100;\n    letter-spacing: 0.5px;\n    text-align: center;\n"], ["\n    color: ", ";\n    font-size: 13px;\n    font-weight: 100;\n    letter-spacing: 0.5px;\n    text-align: center;\n"]),
		f = P(["\n    height: calc(100% - (60px + (75px - 45px)));\n    overflow-y: auto;\n    width: 100%;\n    &::-webkit-scrollbar {\n        width: 8px;\n        height: 8px;\n    }\n    &::-webkit-scrollbar-thumb {\n        background: ", ";\n        cursor: grab;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    ", " {\n        height: calc(100% - (60px + (75px)));\n    }\n"], ["\n    height: calc(100% - (60px + (75px - 45px)));\n    overflow-y: auto;\n    width: 100%;\n    &::-webkit-scrollbar {\n        width: 8px;\n        height: 8px;\n    }\n    &::-webkit-scrollbar-thumb {\n        background: ", ";\n        cursor: grab;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    ", " {\n        height: calc(100% - (60px + (75px)));\n    }\n"]),
		p = P(["\n    width: calc(100% - 20px);\n    padding: 10px;\n"], ["\n    width: calc(100% - 20px);\n    padding: 10px;\n"]),
		h = n(0),
		m = O(h),
		b = n(7),
		v = O(n(1)),
		g = (O(n(192)), n(10)),
		w = O(n(2)),
		y = n(37),
		x = (n(18), n(9), O(n(8))),
		_ = n(16),
		E = O(n(193)),
		k = (n(109), O(n(58))),
		C = O(n(389));

	function O(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function P(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var S = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, h.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, b.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(x.default, "sideMenuOpen"), this.observer.observe(x.default, "balance"), this.observer.observe(x.default, "totalAssets"), this.balance_start = x.default.balance, this.createRef = this.createRef.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "componentDidMount",
			value: function() {
				window.addEventListener("popstate", function(e) {
					x.default.sideMenuOpen && (x.default.sideMenuOpen = !1, history.go(1))
				}), window.addEventListener("resize", function(e) {
					x.default.sideMenuOpen && (x.default.sideMenuOpen = !1)
				});
				var e = void 0;
				this.menuElement.addEventListener("touchstart", function(t) {
					e = t.touches[0].clientX
				}, !1), this.menuElement.addEventListener("touchmove", function(t) {
					e && (e - t.touches[0].clientX > 50 && (x.default.sideMenuOpen = !1, e = null))
				}, !1)
			}
		}, {
			key: "createRef",
			value: function(e) {
				e && (this.menuElement = e.base)
			}
		}, {
			key: "onClickBackground",
			value: function() {
				x.default.sideMenuOpen = !1
			}
		}, {
			key: "render",
			value: function() {
				var e = this.balance_start;
				return this.balance_start = x.default.balance, m.default.createElement(T, {
					open: x.default.sideMenuOpen,
					onClickBackground: this.onClickBackground,
					createRef: this.createRef,
					ascii: y.Fiats[x.default.fiat].ascii,
					balance_start: e,
					balance_end: x.default.balance,
					totalAssets: x.default.totalAssets
				})
			}
		}]), t
	}();

	function T(e) {
		var t = e.open,
			n = e.onClickBackground,
			r = e.createRef,
			o = e.ascii,
			a = e.balance_start,
			i = e.balance_end,
			l = e.totalAssets;
		return m.default.createElement(j, null, m.default.createElement(A, {
			open: t,
			ref: r
		}, m.default.createElement(R, null, m.default.createElement("div", null, m.default.createElement(N, null, l, " assets"), m.default.createElement(z, null, m.default.createElement(I, null, o), m.default.createElement(M, null, m.default.createElement(E.default, {
			start: a,
			end: i,
			duration: 5,
			useEasing: !0,
			useGrouping: !0,
			separator: ","
		}))))), m.default.createElement(L, null, m.default.createElement(C.default, null)), m.default.createElement(B, null, m.default.createElement(k.default, {
			onClick: function(e) {
				(0, _.setHref)(g.routes.add())
			}
		}, "Добавить кошелек"))), m.default.createElement(F, {
			open: t,
			onClick: n
		}))
	}
	t.default = S;
	var j = v.default.div(o),
		F = v.default.div(a, w.default.media.first, function(e) {
			return e.open ? "auto" : "none"
		}, function(e) {
			return e.open ? .35 : 0
		}),
		A = v.default.div(i, w.default.paddingOut, w.default.headerHeight, w.default.leftColumn, w.default.paddingOut, w.default.headerHeight, w.default.media.first, function(e) {
			return e.open ? .2 : 0
		}, w.default.leftColumnMobile, function(e) {
			return e.open ? 0 : "-" + w.default.leftColumnMobile
		}),
		R = v.default.div(l, w.default.media.first),
		z = v.default.div(s),
		M = v.default.span(d, w.default.color.black),
		I = v.default.span(u, w.default.color.black),
		N = v.default.div(c, w.default.color.grey1),
		L = v.default.div(f, w.default.color.background4, w.default.media.first),
		B = v.default.div(p)
}, , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = u(o),
		i = n(7),
		l = (u(n(1)), u(n(2)), u(n(8))),
		s = n(11),
		d = u(n(390));

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var c = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, o.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, i.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(l.default, "assets"), this.observer.observe(l.default.assets)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "render",
			value: function() {
				return a.default.createElement(f, {
					assets: (0, s.getAssetsAsArray)()
				})
			}
		}]), t
	}();

	function f(e) {
		var t = e.assets;
		return a.default.createElement("div", null, t.map(function(e) {
			return a.default.createElement(d.default, {
				asset: e
			})
		}))
	}
	t.default = c
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		i = (r = ["\n    color: ", ";\n    border-bottom: 1px solid ", ";\n    cursor: pointer;\n    & > div:hover {\n        border-left-color: ", ";\n    }\n    & > div {\n        padding: 15px 15px;\n        border-left: 5px solid transparent;\n    }\n\n    ", ";\n"], o = ["\n    color: ", ";\n    border-bottom: 1px solid ", ";\n    cursor: pointer;\n    & > div:hover {\n        border-left-color: ", ";\n    }\n    & > div {\n        padding: 15px 15px;\n        border-left: 5px solid transparent;\n    }\n\n    ", ";\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		l = n(0),
		s = g(l),
		d = n(7),
		u = g(n(1)),
		c = n(9),
		f = (n(18), g(n(2))),
		p = n(10),
		h = (n(37), g(n(8))),
		m = n(16),
		b = n(11),
		v = g(n(194));

	function g(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var w = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, l.Component), a(t, [{
			key: "componentWillMount",
			value: function() {
				this.observe(this.props.asset), this.onClick = this.onClick.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function(e) {
				return this.props.asset !== e.asset && (this.observer.destroy(), this.observe(e.asset), !0)
			}
		}, {
			key: "observe",
			value: function(e) {
				var t = this;
				this.observer = (0, d.createObserver)(function(e) {
					return t.forceUpdate()
				}), this.observer.observe(h.default.location, "pathname"), this.observer.observe(h.default.prices), this.observer.observe(h.default.assets), this.observer.observe(e, "label"), this.observer.observe(e, "balance")
			}
		}, {
			key: "onClick",
			value: function() {
				(0, m.setHref)(p.routes.asset({
					asset_id: (0, b.getAssetId)(this.props.asset)
				}))
			}
		}, {
			key: "render",
			value: function() {
				var e = this.props.asset,
					t = (0, b.getParamsFromLocation)().asset_id,
					n = c.Coins[e.symbol];
				return s.default.createElement(y, {
					asset: this.props.asset,
					asset_id: t,
					location: h.default.location,
					balance_currency: (0, b.formatCurrency)((0, b.convertBalance)(e.symbol, e.balance)),
					logo: n.logo,
					balance_asset: n.format(e.balance, 5),
					onClick: this.onClick
				})
			}
		}]), t
	}();

	function y(e) {
		var t = e.asset,
			n = e.asset_id,
			r = (e.location, e.balance_currency),
			o = e.balance_asset,
			a = e.logo,
			i = e.onClick;
		return s.default.createElement(x, {
			onClick: i,
			selected: n === (0, b.getAssetId)(t)
		}, s.default.createElement(v.default, {
			logo: a,
			label: (0, b.getLabelOrAddress)(t),
			balance: s.default.createElement("span", null, s.default.createElement("strong", null, r), " ≈ ", o)
		}))
	}
	t.default = w;
	var x = u.default.div(i, f.default.color.front3, f.default.color.background4, f.default.color.background2, function(e) {
		if (e.selected) return "\n        cursor: inherit;\n        background: " + f.default.color.background1 + ";\n        & > div {\n            border-left-color: " + f.default.color.background2 + ";\n        }\n        "
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		i = (r = ["\n    height: calc(100% - ", " - ", ");\n    margin: 0 ", ";\n    position: relative;\n    background: white;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n\n    ", " {\n        margin: 0 ", ";\n        height: calc(\n            100% - ", " - ", "\n        );\n    }\n"], o = ["\n    height: calc(100% - ", " - ", ");\n    margin: 0 ", ";\n    position: relative;\n    background: white;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n\n    ", " {\n        margin: 0 ", ";\n        height: calc(\n            100% - ", " - ", "\n        );\n    }\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		l = n(0),
		s = z(l),
		d = z(n(1)),
		u = n(7),
		c = z(n(2)),
		f = n(10),
		p = n(4),
		h = n(9),
		m = z(n(8)),
		b = n(11),
		v = n(28),
		g = z(n(110)),
		w = z(n(392)),
		y = z(n(394)),
		x = z(n(395)),
		_ = z(n(399)),
		E = z(n(403)),
		k = z(n(408)),
		C = z(n(411)),
		O = z(n(412)),
		P = z(n(413)),
		S = z(n(414)),
		T = z(n(434)),
		j = z(n(435)),
		F = z(n(436)),
		A = z(n(437)),
		R = z(n(439));

	function z(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var M = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, l.Component), a(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, u.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(m.default, "totalAssets"), this.observer.observe(m.default.location, "pathname")
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "render",
			value: function() {
				var e = (0, b.getParamsFromLocation)(),
					t = e.asset_id,
					n = e.symbol;
				if (t && !n) {
					var r = (0, b.getAsset)(t);
					r && (n = r.symbol)
				}
				return s.default.createElement(I, {
					totalAssets: m.default.totalAssets,
					isRegistered: (0, b.isAssetRegisteredById)(t),
					symbol: n
				})
			}
		}]), t
	}();

	function I(e) {
		var t = e.totalAssets,
			n = e.isRegistered,
			r = e.symbol,
			o = h.Coins.hasOwnProperty(r);
		return s.default.createElement(N, null, s.default.createElement(v.RightContainer, null, s.default.createElement(f.Router, null, s.default.createElement(f.Route, {
			is: f.routes.home,
			if: 0 === t
		}, s.default.createElement(v.RightContainerMiddle, null, s.default.createElement(g.default, null, "Add or Import assets to start working"))), s.default.createElement(f.Route, {
			is: f.routes.home
		}, s.default.createElement(w.default, null)), s.default.createElement(f.Route, {
			is: f.routes.settings
		}, s.default.createElement(y.default, null)), s.default.createElement(f.Route, {
			is: f.routes.add
		}, s.default.createElement(x.default, null)), s.default.createElement(f.Route, {
			is: f.routes.custom
		}, s.default.createElement(R.default, null)), s.default.createElement(f.Route, {
			is: f.routes.create,
			if: o
		}, s.default.createElement(_.default, null)), s.default.createElement(f.Route, {
			is: f.routes.import,
			if: "BTC" === r
		}, s.default.createElement(E.default, null)), s.default.createElement(f.Route, {
			is: f.routes.import,
			if: "ETH" === r
		}, s.default.createElement(k.default, null)), s.default.createElement(f.Route, {
			is: f.routes.import,
			if: "LTC" === r
		}, s.default.createElement(C.default, null)), s.default.createElement(f.Route, {
			is: f.routes.import,
			if: "BCH" === r
		}, s.default.createElement(O.default, null)), s.default.createElement(f.Route, {
			is: f.routes.import,
			if: o && h.Coins[r].type === p.TYPE_ERC20
		}, s.default.createElement(P.default, null)), s.default.createElement(f.Route, {
			"path-0": "asset",
			if: n && "BTC" === r
		}, s.default.createElement(S.default, null)), s.default.createElement(f.Route, {
			"path-0": "asset",
			if: n && "ETH" === r
		}, s.default.createElement(T.default, null)), s.default.createElement(f.Route, {
			"path-0": "asset",
			if: n && "LTC" === r
		}, s.default.createElement(j.default, null)), s.default.createElement(f.Route, {
			"path-0": "asset",
			if: n && "BCH" === r
		}, s.default.createElement(F.default, null)), s.default.createElement(f.Route, {
			"path-0": "asset",
			if: n
		}, s.default.createElement(A.default, null)), s.default.createElement(f.Route, null, s.default.createElement(v.RightContainerMiddle, null, s.default.createElement(g.default, null, "Not found"))))))
	}
	t.default = M;
	var N = d.default.div(i, c.default.headerHeight, c.default.paddingOut, c.default.paddingOut, c.default.media.second, c.default.paddingOutMobile, c.default.headerHeight, c.default.paddingOutMobile)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = ae(["\n    float: left;\n    width: 200px;\n    position: relative;\n    ", " {\n        width: 100%;\n        float: none;\n        height: 150px;\n    }\n"], ["\n    float: left;\n    width: 200px;\n    position: relative;\n    ", " {\n        width: 100%;\n        float: none;\n        height: 150px;\n    }\n"]),
		a = ae(["\n    float: left;\n    width: calc(100% - 230px);\n    padding-left: 30px;\n    padding-top: 5px;\n    ", " {\n        width: 100%;\n        float: none;\n        padding-left: 0;\n        clear: both;\n    }\n"], ["\n    float: left;\n    width: calc(100% - 230px);\n    padding-left: 30px;\n    padding-top: 5px;\n    ", " {\n        width: 100%;\n        float: none;\n        padding-left: 0;\n        clear: both;\n    }\n"]),
		i = ae(["\n    width: 200px;\n    ", " {\n        margin: 0 auto;\n    }\n"], ["\n    width: 200px;\n    ", " {\n        margin: 0 auto;\n    }\n"]),
		l = ae([""], [""]),
		s = ae(["\n    position: absolute;\n    text-align: center;\n    width: 200px;\n    padding-top: 75px;\n"], ["\n    position: absolute;\n    text-align: center;\n    width: 200px;\n    padding-top: 75px;\n"]),
		d = ae(["\n    font-size: 12px;\n    color: ", ";\n"], ["\n    font-size: 12px;\n    color: ", ";\n"]),
		u = ae(["\n    line-height: 35px;\n"], ["\n    line-height: 35px;\n"]),
		c = ae(["\n    position: relative;\n    top: -10px;\n    font-size: 20px;\n    font-weight: bold;\n    color: ", ";\n"], ["\n    position: relative;\n    top: -10px;\n    font-size: 20px;\n    font-weight: bold;\n    color: ", ";\n"]),
		f = ae(["\n    font-size: 36px;\n    font-weight: bold;\n    color: ", ";\n"], ["\n    font-size: 36px;\n    font-weight: bold;\n    color: ", ";\n"]),
		p = ae(["\n    clear: both;\n    margin-top: 75px;\n    &:first-child {\n        margin-top: 0;\n    }\n"], ["\n    clear: both;\n    margin-top: 75px;\n    &:first-child {\n        margin-top: 0;\n    }\n"]),
		h = ae(["\n    min-height: 50px;\n    ", " {\n        display: none;\n    }\n"], ["\n    min-height: 50px;\n    ", " {\n        display: none;\n    }\n"]),
		m = ae(["\n    float: left;\n    ", " {\n        & > svg {\n            width: 30px;\n            height: 30px;\n        }\n    }\n"], ["\n    float: left;\n    ", " {\n        & > svg {\n            width: 30px;\n            height: 30px;\n        }\n    }\n"]),
		b = ae(["\n    float: left;\n    padding-top: 3px;\n    padding-left: 18px;\n    ", " {\n        padding-left: 10px;\n        padding-top: 0;\n    }\n"], ["\n    float: left;\n    padding-top: 3px;\n    padding-left: 18px;\n    ", " {\n        padding-left: 10px;\n        padding-top: 0;\n    }\n"]),
		v = ae(["\n    color: ", ";\n    font-weight: 900;\n    font-size: 25px;\n    line-height: 25px;\n    ", " {\n        font-size: 22px;\n        line-height: 22px;\n    }\n"], ["\n    color: ", ";\n    font-weight: 900;\n    font-size: 25px;\n    line-height: 25px;\n    ", " {\n        font-size: 22px;\n        line-height: 22px;\n    }\n"]),
		g = ae(["\n    color: ", ";\n    font-size: 13px;\n    font-weight: 100;\n    letter-spacing: 0.5px;\n    ", " {\n        display: none;\n    }\n"], ["\n    color: ", ";\n    font-size: 13px;\n    font-weight: 100;\n    letter-spacing: 0.5px;\n    ", " {\n        display: none;\n    }\n"]),
		w = ae(["\n    float: right;\n    padding-top: 3px;\n    ", " {\n        float: none;\n        clear: both;\n        top: -15px;\n        position: relative;\n    }\n"], ["\n    float: right;\n    padding-top: 3px;\n    ", " {\n        float: none;\n        clear: both;\n        top: -15px;\n        position: relative;\n    }\n"]),
		y = ae(["\n    color: ", ";\n    font-weight: 900;\n    font-size: 20px;\n    line-height: 25px;\n    text-align: right;\n    ", " {\n        padding-left: 40px;\n        text-align: left;\n        font-size: 15px;\n        line-height: 22px;\n    }\n"], ["\n    color: ", ";\n    font-weight: 900;\n    font-size: 20px;\n    line-height: 25px;\n    text-align: right;\n    ", " {\n        padding-left: 40px;\n        text-align: left;\n        font-size: 15px;\n        line-height: 22px;\n    }\n"]),
		x = ae(["\n    color: ", ";\n    font-size: 13px;\n    font-weight: bold;\n    text-align: right;\n    ", " {\n        padding-left: 40px;\n        text-align: left;\n    }\n"], ["\n    color: ", ";\n    font-size: 13px;\n    font-weight: bold;\n    text-align: right;\n    ", " {\n        padding-left: 40px;\n        text-align: left;\n    }\n"]),
		_ = ae(["\n    -moz-transform: translateY(0.45em);\n    -ms-transform: translateY(0.45em);\n    -webkit-transform: translateY(0.45em);\n    transform: translateY(0.45em);\n\n    .chart-number {\n        fill: ", ";\n        letter-spacing: -0.02em;\n        font-size: 0.7em;\n        font-weight: bold;\n        line-height: 1;\n        text-anchor: middle;\n        -moz-transform: translateY(-0.25em);\n        -ms-transform: translateY(-0.25em);\n        -webkit-transform: translateY(-0.25em);\n        transform: translateY(-0.25em);\n    }\n"], ["\n    -moz-transform: translateY(0.45em);\n    -ms-transform: translateY(0.45em);\n    -webkit-transform: translateY(0.45em);\n    transform: translateY(0.45em);\n\n    .chart-number {\n        fill: ", ";\n        letter-spacing: -0.02em;\n        font-size: 0.7em;\n        font-weight: bold;\n        line-height: 1;\n        text-anchor: middle;\n        -moz-transform: translateY(-0.25em);\n        -ms-transform: translateY(-0.25em);\n        -webkit-transform: translateY(-0.25em);\n        transform: translateY(-0.25em);\n    }\n"]),
		E = ae(["\n    clear: both;\n"], ["\n    clear: both;\n"]),
		k = ae(["\n    clear: both;\n    margin-top: 25px;\n    margin-bottom: 35px;\n    margin-left: 23px;\n    height: 55px;\n    cursor: pointer;\n    border-radius: 1px;\n    &:hover {\n        background-color: ", ";\n        box-shadow: 0 0 0px 15px ", ";\n    }\n    ", " {\n        height: 120px;\n        margin-left: 10px;\n    }\n    ", " {\n        height: auto;\n        margin-left: 0;\n        margin-top: 80px;\n    }\n"], ["\n    clear: both;\n    margin-top: 25px;\n    margin-bottom: 35px;\n    margin-left: 23px;\n    height: 55px;\n    cursor: pointer;\n    border-radius: 1px;\n    &:hover {\n        background-color: ", ";\n        box-shadow: 0 0 0px 15px ", ";\n    }\n    ", " {\n        height: 120px;\n        margin-left: 10px;\n    }\n    ", " {\n        height: auto;\n        margin-left: 0;\n        margin-top: 80px;\n    }\n"]),
		C = ae(["\n    padding-top: 5px;\n    padding-right: 5px;\n    text-align: right;\n    float: left;\n"], ["\n    padding-top: 5px;\n    padding-right: 5px;\n    text-align: right;\n    float: left;\n"]),
		O = ae(["\n    margin-left: 38px;\n    ", " {\n        margin-left: 31px;\n    }\n"], ["\n    margin-left: 38px;\n    ", " {\n        margin-left: 31px;\n    }\n"]),
		P = ae(["\n    float: left;\n    width: 60%;\n    ", " {\n        width: 100%;\n    }\n"], ["\n    float: left;\n    width: 60%;\n    ", " {\n        width: 100%;\n    }\n"]),
		S = ae(["\n    float: right;\n    text-align: right;\n    ", " {\n        clear: both;\n        text-align: left;\n        float: none;\n    }\n    ", " {\n        clear: none;\n    }\n"], ["\n    float: right;\n    text-align: right;\n    ", " {\n        clear: both;\n        text-align: left;\n        float: none;\n    }\n    ", " {\n        clear: none;\n    }\n"]),
		T = ae(["\n    color: ", ";\n    font-weight: bold;\n    font-size: 16px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n"], ["\n    color: ", ";\n    font-weight: bold;\n    font-size: 16px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n"]),
		j = ae(["\n    color: ", ";\n    font-weight: bold;\n    font-size: 16px;\n    ", " {\n        color: #aaaaaa;\n        line-height: 20px;\n        letter-spacing: 0.5px;\n        font-weight: bold;\n        font-size: 12px;\n        color: ", ";\n    }\n"], ["\n    color: ", ";\n    font-weight: bold;\n    font-size: 16px;\n    ", " {\n        color: #aaaaaa;\n        line-height: 20px;\n        letter-spacing: 0.5px;\n        font-weight: bold;\n        font-size: 12px;\n        color: ", ";\n    }\n"]),
		F = ae(["\n    padding-top: 3px;\n    color: ", ";\n    letter-spacing: 0.5px;\n    font-weight: 100;\n    font-size: 12px;\n    clear: both;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    line-height: 20px;\n    ", " {\n        padding-top: 0;\n    }\n    ", " {\n        display: none;\n    }\n"], ["\n    padding-top: 3px;\n    color: ", ";\n    letter-spacing: 0.5px;\n    font-weight: 100;\n    font-size: 12px;\n    clear: both;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    line-height: 20px;\n    ", " {\n        padding-top: 0;\n    }\n    ", " {\n        display: none;\n    }\n"]),
		A = ae(["\n    padding-top: 3px;\n    color: ", ";\n    letter-spacing: 0.5px;\n    font-weight: 100;\n    font-size: 12px;\n    clear: both;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    line-height: 20px;\n    ", " {\n        padding-top: 0;\n    }\n"], ["\n    padding-top: 3px;\n    color: ", ";\n    letter-spacing: 0.5px;\n    font-weight: 100;\n    font-size: 12px;\n    clear: both;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    line-height: 20px;\n    ", " {\n        padding-top: 0;\n    }\n"]),
		R = ae(["\n    padding-top: 3px;\n    clear: both;\n    ", " {\n        padding-top: 0;\n    }\n"], ["\n    padding-top: 3px;\n    clear: both;\n    ", " {\n        padding-top: 0;\n    }\n"]),
		z = ae(["\n    width: calc(", " - 30px);\n    background-color: ", ";\n    height: 4px;\n    border-radius: 100px;\n    float: left;\n    margin-top: 5px;\n    margin-right: ", ";\n"], ["\n    width: calc(", " - 30px);\n    background-color: ", ";\n    height: 4px;\n    border-radius: 100px;\n    float: left;\n    margin-top: 5px;\n    margin-right: ", ";\n"]),
		M = ae(["\n    float: left;\n    font-size: 10px;\n    font-weight: bold;\n    color: ", ";\n"], ["\n    float: left;\n    font-size: 10px;\n    font-weight: bold;\n    color: ", ";\n"]),
		I = ae(["\n    width: 200px;\n    margin: 0 auto;\n    ", " {\n        display: none;\n    }\n"], ["\n    width: 200px;\n    margin: 0 auto;\n    ", " {\n        display: none;\n    }\n"]),
		N = ae(["\n    clear: both;\n    padding-top: 30px;\n    padding-left: 35px;\n    height: 42px;\n    ", " {\n        padding-top: 20px;\n    }\n"], ["\n    clear: both;\n    padding-top: 30px;\n    padding-left: 35px;\n    height: 42px;\n    ", " {\n        padding-top: 20px;\n    }\n"]),
		L = ae(["\n    float: left;\n    padding-top: 5px;\n    padding-right: 10px;\n"], ["\n    float: left;\n    padding-top: 5px;\n    padding-right: 10px;\n"]),
		B = ae(["\n    float: left;\n"], ["\n    float: left;\n"]),
		D = ae(["\n    font-weight: 900;\n    color: ", ";\n    font-size: 18px;\n    width: 130px;\n"], ["\n    font-weight: 900;\n    color: ", ";\n    font-size: 18px;\n    width: 130px;\n"]),
		U = ae(["\n    color: ", ";\n    font-size: 13px;\n    font-weight: 200;\n    & span {\n        font-weight: bold;\n    }\n"], ["\n    color: ", ";\n    font-size: 13px;\n    font-weight: 200;\n    & span {\n        font-weight: bold;\n    }\n"]),
		W = n(0),
		H = oe(W),
		K = oe(n(1)),
		G = n(7),
		Y = oe(n(193)),
		V = oe(n(2)),
		J = n(37),
		X = n(10),
		Q = n(18),
		q = n(9),
		$ = n(41),
		Z = oe(n(8)),
		ee = n(11),
		te = n(16),
		ne = n(28),
		re = oe(n(393));

	function oe(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function ae(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var ie = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, W.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, G.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(Z.default, "balance"), this.observer.observe(Z.default.prices), this.balance_start = Z.default.balance
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "onClick",
			value: function(e) {
				(0, te.setHref)(X.routes.asset({
					asset_id: e
				}))
			}
		}, {
			key: "render",
			value: function() {
				var e = {};
				for (var t in Z.default.assets) {
					var n = Z.default.assets[t],
						r = q.Coins[n.symbol];
					void 0 === e[n.symbol] && (e[n.symbol] = {
						symbol: n.symbol,
						label: r.name,
						color: r.color,
						balance_asset_big: (0, Q.bigNumber)(0),
						balance_asset_number: 0,
						balance_currency_number: 0,
						assets: []
					});
					var o = e[n.symbol],
						a = n.balance || 0;
					o.balance_asset_number += a, o.balance_asset_big = o.balance_asset_big.plus(a), o.balance_currency_number += (0, ee.convertBalance)(n.symbol, a), o.assets.push({
						label: (0, ee.getLabelOrAddress)(n),
						address: r.formatAddress(n.address),
						balance_asset: a + " " + n.symbol,
						balance_currency_number: (0, ee.convertBalance)(n.symbol, a),
						percentage: 0,
						id: t,
						logo: r.logo
					})
				}
				var i = Object.keys(e).map(function(t) {
					var n = e[t];
					return n.price = (0, ee.getPrice)(t), n.balance_asset = n.balance_asset_big.toString() + " " + t, n.balance_currency = (0, ee.formatCurrency)(n.balance_currency_number), n.percentage = (0, Q.round)(100 * n.balance_currency_number / Z.default.balance || 0), n.assets = n.assets.map(function(e) {
						return e.balance_currency = (0, ee.formatCurrency)(e.balance_currency_number), e.percentage = (0, Q.round)(100 * e.balance_currency_number / n.balance_currency_number || 0), e
					}), n.assets = (0, $.sortBy)(n.assets, "-balance_currency_number"), n
				});
				i = (0, $.sortBy)(i, "-balance_currency_number", "-price");
				var l = this.balance_start;
				return this.balance_start = Z.default.balance, H.default.createElement(le, {
					data: i,
					onClick: this.onClick,
					ascii: J.Fiats[Z.default.fiat].ascii,
					balance_start: l,
					balance_end: Z.default.balance,
					currency: Z.default.fiat
				})
			}
		}]), t
	}();

	function le(e) {
		var t = e.data,
			n = e.onClick,
			r = e.ascii,
			o = e.balance_start,
			a = e.balance_end,
			i = (e.cryptoPrices, e.currency),
			l = 0;
		return H.default.createElement(ne.RightContainerPadding, null, H.default.createElement(se, null, H.default.createElement(ue, null, H.default.createElement(fe, null, H.default.createElement(pe, null, "Total balance"), H.default.createElement(he, null, H.default.createElement(me, null, r), H.default.createElement(be, null, H.default.createElement(Y.default, {
			start: o,
			end: a,
			duration: 5,
			useEasing: !0,
			useGrouping: !0,
			separator: ","
		})))), H.default.createElement(ce, null, H.default.createElement(re.default, {
			size: 200,
			strokeWidth: "1.5",
			segments: t.map(function(e) {
				var t = e.percentage;
				return 0 === t && l < 100 && (t = 100 - l), l += t, {
					percentage: t,
					color: e.color
				}
			})
		}))), H.default.createElement(Ue, null, t.map(function(e) {
			return H.default.createElement(We, null, H.default.createElement(He, null, H.default.createElement("img", {
				src: q.Coins[e.symbol].logo,
				width: "25",
				height: "25"
			})), H.default.createElement(Ke, null, H.default.createElement(Ge, null, q.Coins[e.symbol].name), H.default.createElement(Ye, null, e.symbol, " ≈", " ", H.default.createElement("span", null, J.Fiats[i].format(e.price, q.Coins[e.symbol].price_decimals)))))
		}))), H.default.createElement(de, null, H.default.createElement("div", null, t.map(function(e) {
			return H.default.createElement(ve, null, H.default.createElement(ge, null, H.default.createElement(we, null, H.default.createElement(ye, null, H.default.createElement(re.default, {
				size: 43,
				strokeWidth: "2.5",
				segments: [{
					percentage: e.percentage,
					color: e.color
				}]
			}, H.default.createElement(Pe, null, H.default.createElement("text", {
				x: "50%",
				y: "50%",
				class: "chart-number"
			}, e.percentage, "%")))), H.default.createElement(xe, null, H.default.createElement(_e, null, e.label), H.default.createElement(Ee, null, 1 === e.assets.length ? e.assets.length + " asset" : e.assets.length + " assets"))), H.default.createElement(ke, null, H.default.createElement(Ce, null, e.balance_currency), H.default.createElement(Oe, null, e.balance_asset))), H.default.createElement(Se, null, e.assets.map(function(t) {
				return H.default.createElement(Te, {
					onClick: function() {
						return n(t.id)
					}
				}, H.default.createElement(je, null, H.default.createElement("img", {
					src: t.logo,
					width: "20",
					height: "20"
				})), H.default.createElement(Fe, null, H.default.createElement(Ae, null, H.default.createElement(ze, null, t.label), H.default.createElement(Ie, null, t.address)), H.default.createElement(Re, null, H.default.createElement(Me, null, t.balance_currency), H.default.createElement(Ne, null, t.balance_asset)), H.default.createElement(Le, null, H.default.createElement(Be, {
					percentage: t.percentage,
					color: e.color
				}), H.default.createElement(De, {
					color: e.color
				}, t.percentage + "%"))))
			})))
		}))))
	}
	t.default = ie;
	var se = K.default.div(o, V.default.media.fourth),
		de = K.default.div(a, V.default.media.fourth),
		ue = K.default.div(i, V.default.media.fourth),
		ce = K.default.div(l),
		fe = K.default.div(s),
		pe = K.default.div(d, V.default.color.front2),
		he = K.default.div(u),
		me = K.default.span(c, V.default.color.black),
		be = K.default.span(f, V.default.color.black),
		ve = K.default.div(p),
		ge = K.default.div(h, V.default.media.fourth),
		we = K.default.div(l),
		ye = K.default.div(m, V.default.media.third),
		xe = K.default.div(b, V.default.media.third),
		_e = K.default.div(v, V.default.color.black, V.default.media.third),
		Ee = K.default.div(g, V.default.color.grey1, V.default.media.third),
		ke = K.default.div(w, V.default.media.third),
		Ce = K.default.div(y, V.default.color.black, V.default.media.third),
		Oe = K.default.div(x, V.default.color.grey1, V.default.media.third),
		Pe = K.default.g(_, V.default.color.front3),
		Se = K.default.div(E),
		Te = K.default.div(k, V.default.color.background1, V.default.color.background1, V.default.media.third, V.default.media.fourth),
		je = K.default.div(C),
		Fe = K.default.div(O, V.default.media.third),
		Ae = K.default.div(P, V.default.media.third),
		Re = K.default.div(S, V.default.media.third, V.default.media.fourth),
		ze = K.default.div(T, V.default.color.front3),
		Me = K.default.div(j, V.default.color.front3, V.default.media.third, V.default.color.grey1),
		Ie = K.default.div(F, V.default.color.grey1, V.default.media.third, V.default.media.fourth),
		Ne = K.default.div(A, V.default.color.grey1, V.default.media.third),
		Le = K.default.div(R, V.default.media.third),
		Be = K.default.div(z, function(e) {
			return e.percentage + "%"
		}, function(e) {
			return e.color
		}, function(e) {
			return e.percentage > 0 ? "5px" : 0
		}),
		De = K.default.span(M, function(e) {
			return e.color
		}),
		Ue = K.default.div(I, V.default.media.fourth),
		We = K.default.div(N, V.default.media.third),
		He = K.default.div(L),
		Ke = K.default.div(B),
		Ge = K.default.div(D, V.default.color.black),
		Ye = K.default.div(U, V.default.color.front3)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function(e) {
		var t = e.segments,
			n = void 0 === t ? [] : t,
			r = e.strokeWidth,
			o = void 0 === r ? 2 : r,
			i = e.backgroundStrokeColor,
			l = void 0 === i ? "#E5E5E5" : i,
			s = e.backgroundColor,
			d = void 0 === s ? "transparent" : s,
			u = e.size,
			c = void 0 === u ? 200 : u,
			f = e.children,
			p = 0,
			h = 17.1,
			m = "15.91549430918952";
		return a.default.createElement("svg", {
			width: c,
			height: c,
			viewBox: "0 0 34.2 34.2"
		}, a.default.createElement("circle", {
			cx: h,
			cy: h,
			r: m,
			fill: d
		}), a.default.createElement("circle", {
			cx: h,
			cy: h,
			r: m,
			fill: "transparent",
			stroke: l,
			"stroke-width": o
		}), n.map(function(e) {
			var t = e.percentage + " " + (100 - e.percentage),
				n = 100 - p + 25;
			return p += e.percentage, a.default.createElement("circle", {
				cx: h,
				cy: h,
				r: m,
				fill: "transparent",
				stroke: e.color,
				"stroke-width": o,
				"stroke-dasharray": t,
				"stroke-dashoffset": n
			})
		}), f)
	};
	var r, o = n(0),
		a = (r = o) && r.__esModule ? r : {
			default: r
		}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = g(o),
		i = (g(n(1)), n(7), n(10), g(n(2)), n(4)),
		l = n(37),
		s = g(n(8)),
		d = n(16),
		u = g(n(14)),
		c = g(n(36)),
		f = g(n(195)),
		p = n(28),
		h = g(n(31)),
		m = n(21),
		b = (g(n(32)), g(n(26))),
		v = n(22);

	function g(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var w = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, o.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				this.fiatsList = [{
					symbol: l.Fiats.USD.symbol,
					label: l.Fiats.USD.ascii + " " + l.Fiats.USD.name + " (" + l.Fiats.USD.symbol + ")"
				}, {
					symbol: l.Fiats.EUR.symbol,
					label: l.Fiats.EUR.ascii + " " + l.Fiats.EUR.name + " (" + l.Fiats.EUR.symbol + ")"
				}, {
					symbol: l.Fiats.GBP.symbol,
					label: l.Fiats.GBP.ascii + " " + l.Fiats.GBP.name + " (" + l.Fiats.GBP.symbol + ")"
				}, {
					symbol: l.Fiats.JPY.symbol,
					label: l.Fiats.JPY.ascii + " " + l.Fiats.JPY.name + " (" + l.Fiats.JPY.symbol + ")"
				}, {
					symbol: l.Fiats.INR.symbol,
					label: l.Fiats.INR.ascii + " " + l.Fiats.INR.name + " (" + l.Fiats.INR.symbol + ")"
				}, {
					symbol: l.Fiats.CNY.symbol,
					label: l.Fiats.CNY.ascii + " " + l.Fiats.CNY.name + " (" + l.Fiats.CNY.symbol + ")"
				}, {
					symbol: l.Fiats.CAD.symbol,
					label: l.Fiats.CAD.ascii + " " + l.Fiats.CAD.name + " (" + l.Fiats.CAD.symbol + ")"
				}, {
					symbol: l.Fiats.AUD.symbol,
					label: l.Fiats.AUD.ascii + " " + l.Fiats.AUD.name + " (" + l.Fiats.AUD.symbol + ")"
				}, {
					symbol: l.Fiats.SGD.symbol,
					label: l.Fiats.SGD.ascii + " " + l.Fiats.SGD.name + " (" + l.Fiats.SGD.symbol + ")"
				}]
			}
		}, {
			key: "componentWillUnmount",
			value: function() {}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "onChangeFiat",
			value: function(e) {
				(0, d.changeFiat)(e.target.value)
			}
		}, {
			key: "onChangeNetwork",
			value: function(e) {
				(0, d.changeNetwork)(e.target.value)
			}
		}, {
			key: "onClose",
			value: function() {
				(0, d.closeSession)()
			}
		}, {
			key: "render",
			value: function() {
				return a.default.createElement(y, {
					fiat: s.default.fiat,
					fiatsList: this.fiatsList,
					network: s.default.network,
					onChangeFiat: this.onChangeFiat,
					onChangeNetwork: this.onChangeNetwork,
					onClose: this.onClose
				})
			}
		}]), t
	}();

	function y(e) {
		var t = e.fiat,
			n = e.fiatsList,
			r = e.network,
			o = e.onChangeFiat,
			l = e.onChangeNetwork,
			s = e.onClose;
		return a.default.createElement(p.RightContainerPadding, null, a.default.createElement(p.RightHeader, null, a.default.createElement(u.default, {
			float: "left"
		}, a.default.createElement(c.default, null, "Settings")), a.default.createElement(u.default, {
			clear: "both"
		})), a.default.createElement(p.RightContent, null, a.default.createElement(u.default, null, a.default.createElement(u.default, null, a.default.createElement(f.default, null, "Currencies")), a.default.createElement(v.FormField, null, a.default.createElement(v.FormFieldLeft, null, a.default.createElement(m.Label, null, "Fiat currency")), a.default.createElement(v.FormFieldRight, null, a.default.createElement(h.default, {
			width: "100%",
			onChange: o
		}, n.map(function(e) {
			return a.default.createElement("option", {
				value: e.symbol,
				selected: t === e.symbol
			}, e.label)
		}))))), a.default.createElement(u.default, null, a.default.createElement(u.default, null, a.default.createElement(f.default, null, "Session")), a.default.createElement(v.FormField, null, a.default.createElement(v.FormFieldLeft, null, a.default.createElement(m.Label, null, "Network"), a.default.createElement(m.SubLabel, null, "Being on testnet you will use Coinfy within the test networks.")), a.default.createElement(v.FormFieldRight, null, a.default.createElement(h.default, {
			width: "100%",
			onChange: l
		}, a.default.createElement("option", {
			value: i.MAINNET,
			selected: r === i.MAINNET
		}, "Mainnet"), a.default.createElement("option", {
			value: i.TESTNET,
			selected: r === i.TESTNET
		}, "Testnet")))), a.default.createElement(v.FormField, null, a.default.createElement(b.default, {
			width: "100%",
			onClick: s
		}, "Close / Remove", " ", r === i.MAINNET ? "mainnet" : "testnet", " ", "session")))))
	}
	t.default = w
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = N(["\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n    padding-top: 30px;\n    & > * {\n        max-width: 350px !important;\n        position: relative;\n        display: inline-block;\n    }\n"], ["\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n    padding-top: 30px;\n    & > * {\n        max-width: 350px !important;\n        position: relative;\n        display: inline-block;\n    }\n"]),
		a = N(["\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n"], ["\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n"]),
		i = N(["\n    position: relative;\n    display: inline-block;\n    width: 220px;\n    height: 310px;\n    margin: 15px;\n    background: white;\n    border-radius: 25px;\n    box-shadow: 0 0 14px 3px rgba(0, 0, 0, 0.03);\n    ", " {\n        margin: 15px 0;\n        width: 100%;\n    }\n    &:hover div img {\n        transform: scale(1.2);\n        transition: 1.5s ease transform;\n    }\n    &:hover div div img {\n        transform: scale(1.15);\n        transition: 0.5s ease transform;\n    }\n"], ["\n    position: relative;\n    display: inline-block;\n    width: 220px;\n    height: 310px;\n    margin: 15px;\n    background: white;\n    border-radius: 25px;\n    box-shadow: 0 0 14px 3px rgba(0, 0, 0, 0.03);\n    ", " {\n        margin: 15px 0;\n        width: 100%;\n    }\n    &:hover div img {\n        transform: scale(1.2);\n        transition: 1.5s ease transform;\n    }\n    &:hover div div img {\n        transform: scale(1.15);\n        transition: 0.5s ease transform;\n    }\n"]),
		l = N(["\n    position: absolute;\n    padding-top: 25px;\n    margin: 0 auto;\n    width: 100%;\n    text-align: center;\n    & > img {\n        filter: grayscale(100%);\n        opacity: ", ";\n        transition: 0.5s ease transform;\n        width: 150px;\n        height: 150px;\n    }\n"], ["\n    position: absolute;\n    padding-top: 25px;\n    margin: 0 auto;\n    width: 100%;\n    text-align: center;\n    & > img {\n        filter: grayscale(100%);\n        opacity: ", ";\n        transition: 0.5s ease transform;\n        width: 150px;\n        height: 150px;\n    }\n"]),
		s = N(["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n"], ["\n    position: absolute;\n    width: 100%;\n    height: 100%;\n"]),
		d = N(["\n    cursor: pointer;\n    position: absolute;\n    z-index: 1;\n    top: 25px;\n    width: 100%;\n    height: calc(100% - 74px);\n    &:hover + div button:first-child {\n        border-color: ", ";\n        background-color: white;\n    }\n"], ["\n    cursor: pointer;\n    position: absolute;\n    z-index: 1;\n    top: 25px;\n    width: 100%;\n    height: calc(100% - 74px);\n    &:hover + div button:first-child {\n        border-color: ", ";\n        background-color: white;\n    }\n"]),
		u = N(["\n    height: 25px;\n"], ["\n    height: 25px;\n"]),
		c = N(["\n    float: right;\n    padding-right: 10px;\n    padding-top: 5px;\n    opacity: 0.5;\n    cursor: pointer;\n    &:hover {\n        opacity: 1;\n    }\n"], ["\n    float: right;\n    padding-right: 10px;\n    padding-top: 5px;\n    opacity: 0.5;\n    cursor: pointer;\n    &:hover {\n        opacity: 1;\n    }\n"]),
		f = N(["\n    width: 70px;\n    height: 70px;\n    margin: 30px auto 20px auto;\n    & > img {\n        transition: 0.5s ease transform;\n        width: 100%;\n        height: 100%;\n    }\n"], ["\n    width: 70px;\n    height: 70px;\n    margin: 30px auto 20px auto;\n    & > img {\n        transition: 0.5s ease transform;\n        width: 100%;\n        height: 100%;\n    }\n"]),
		p = N(["\n    text-align: center;\n    font-weight: 100;\n    font-size: 13px;\n    letter-spacing: 1px;\n"], ["\n    text-align: center;\n    font-weight: 100;\n    font-size: 13px;\n    letter-spacing: 1px;\n"]),
		h = N(["\n    text-align: center;\n    font-weight: 900;\n    font-size: 23px;\n    line-height: 25px;\n    color: ", ";\n"], ["\n    text-align: center;\n    font-weight: 900;\n    font-size: 23px;\n    line-height: 25px;\n    color: ", ";\n"]),
		m = N(["\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    padding: 10px;\n    box-sizing: border-box;\n"], ["\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    padding: 10px;\n    box-sizing: border-box;\n"]),
		b = N(["\n    width: 100%;\n    border: 0;\n    background: ", ";\n    color: ", ";\n    border-radius: 25px;\n    padding: 7px;\n    font-weight: bold;\n    color: #596167;\n    font-family: Roboto;\n    font-size: 12px;\n    margin-top: 5px;\n    cursor: pointer;\n    box-sizing: border-box;\n    border: 2px solid transparent;\n    &:first-child {\n        background-color: ", ";\n    }\n    &:hover {\n        border-color: ", ";\n        background-color: white;\n    }\n"], ["\n    width: 100%;\n    border: 0;\n    background: ", ";\n    color: ", ";\n    border-radius: 25px;\n    padding: 7px;\n    font-weight: bold;\n    color: #596167;\n    font-family: Roboto;\n    font-size: 12px;\n    margin-top: 5px;\n    cursor: pointer;\n    box-sizing: border-box;\n    border: 2px solid transparent;\n    &:first-child {\n        background-color: ", ";\n    }\n    &:hover {\n        border-color: ", ";\n        background-color: white;\n    }\n"]),
		v = n(0),
		g = I(v),
		w = I(n(1)),
		y = n(7),
		x = n(4),
		_ = I(n(2)),
		E = n(41),
		k = n(9),
		C = I(n(8)),
		O = n(10),
		P = n(16),
		S = n(11),
		T = I(n(14)),
		j = I(n(58)),
		F = I(n(36)),
		A = I(n(39)),
		R = I(n(396)),
		z = n(28),
		M = I(n(398));

	function I(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function N(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var L = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, v.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, y.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(C.default.location.query), this.onDeleteCustomErc20 = this.onDeleteCustomErc20.bind(this), this.loadAssetList()
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "loadAssetList",
			value: function() {
				var e = this;
				this.assetList = [], Object.keys(k.Coins).filter(function(e) {
					return "Coins" !== e
				}).forEach(function(t) {
					var n = k.Coins[t];
					if (n.networks_availables.includes(C.default.network))
						if (n.type === x.TYPE_COIN) e.assetList.push({
							name: n.name,
							symbol: t,
							type: n.type,
							url_create: O.routes.create({
								symbol: t
							}),
							url_import: O.routes.import({
								symbol: t
							}),
							logo: n.logo,
							labels: n.labels,
							position: 0,
							background_image: "/static/image/coin_background.png",
							background_image_opacity: .2
						});
						else if (n.type === x.TYPE_ERC20) {
						var r = n.custom && 0 === (0, S.getAssetsBySymbol)(t).length;
						e.assetList.push({
							name: n.name,
							symbol: t,
							type: n.type,
							url_create: O.routes.create({
								symbol: t
							}),
							url_import: O.routes.import({
								symbol: t
							}),
							logo: n.logo,
							labels: n.labels,
							position: 1,
							background_image: "/static/image/erc20_background.svg",
							background_image_opacity: .04,
							deletable: r
						})
					}
				}), this.assetList = (0, E.sortBy)(this.assetList, "position", "name", "symbol")
			}
		}, {
			key: "onChangeFilter",
			value: function(e) {
				C.default.location.query.filter = e.target.value
			}
		}, {
			key: "onDeleteCustomErc20",
			value: function(e) {
				(0, P.deleteCustomERC20)(e), (0, P.addNotification)("You have removed the Custom ERC20 token: " + e, x.OK), this.loadAssetList(), this.forceUpdate()
			}
		}, {
			key: "onClick",
			value: function(e) {
				(0, P.setHref)(e)
			}
		}, {
			key: "render",
			value: function() {
				var e = C.default.location.query.filter || "";
				return g.default.createElement(B, {
					location: C.default.location,
					assetList: (0, E.searchInArray)(this.assetList, e, ["name", "symbol", "labels"]),
					filter: e,
					onChangeFilter: this.onChangeFilter,
					onDeleteCustomErc20: this.onDeleteCustomErc20,
					onClick: this.onClick
				})
			}
		}]), t
	}();

	function B(e) {
		e.location;
		var t = e.assetList,
			n = e.filter,
			r = e.onChangeFilter,
			o = e.onDeleteCustomErc20,
			a = e.onClick;
		return g.default.createElement(z.RightContainerPadding, null, g.default.createElement(z.RightHeader, null, g.default.createElement(T.default, {
			float: "left"
		}, g.default.createElement(F.default, null, "Добавить кошелек"), g.default.createElement(A.default, null, "Создать или импортировать кошелек")), g.default.createElement(T.default, {
			clear: "both"
		})), g.default.createElement(z.RightContent, null, g.default.createElement(T.default, {
			"padding-bottom": "20px"
		}, g.default.createElement(R.default, {
			type: "text",
			value: n,
			onChange: r,
			onClear: function(e) {
				return r({
					target: {
						value: ""
					}
				})
			},
			placeholder: "Filter",
			invalid: 0 === t.length,
			width: "100%"
		})), g.default.createElement(U, null, t.map(function(e) {
			return g.default.createElement(W, null, g.default.createElement(H, {
				opacity: e.background_image_opacity
			}, g.default.createElement("img", {
				src: e.background_image
			})), g.default.createElement(G, {
				onClick: function(t) {
					return a(e.url_create)
				}
			}), g.default.createElement(K, null, g.default.createElement(Y, null, g.default.createElement(O.Show, {
				if: !0 === e.deletable
			}, g.default.createElement(V, {
				onClick: function(t) {
					return o(e.symbol)
				}
			}, g.default.createElement(M.default, {
				size: 18,
				color: _.default.color.front2
			})))), g.default.createElement(J, null, g.default.createElement("img", {
				src: e.logo
			})), g.default.createElement(X, null, e.symbol), g.default.createElement(Q, null, e.name), g.default.createElement(q, null, g.default.createElement($, null, "Create"), g.default.createElement($, {
				onClick: function(t) {
					return a(e.url_import)
				}
			}, "Restore / Import"))))
		})), g.default.createElement(D, null, g.default.createElement(j.default, {
			onClick: function(e) {
				return a(O.routes.custom({
					type: x.TYPE_ERC20
				}))
			}
		}, "Create custom ERC20 token"))))
	}
	t.default = L;
	var D = w.default.div(o),
		U = w.default.div(a),
		W = w.default.div(i, _.default.media.fifth),
		H = w.default.div(l, function(e) {
			return e.opacity
		}),
		K = w.default.div(s),
		G = w.default.div(d, _.default.color.background4),
		Y = w.default.div(u),
		V = w.default.div(c),
		J = w.default.div(f),
		X = w.default.div(p),
		Q = w.default.div(h, _.default.color.front3),
		q = w.default.div(m),
		$ = w.default.button(b, _.default.color.background1, _.default.color.front3, _.default.color.background4, _.default.color.background4)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		i = (r = ["\n    position: relative;\n\n    & .icon {\n        z-index: 1;\n        position: absolute;\n        text-align: center;\n        width: 40px;\n        height: 31px;\n        font-weight: bold;\n        font-size: 12px;\n        display: inline-block;\n        line-height: 20px;\n        border-radius: 5px 0 0 5px;\n        border-right: 0;\n        padding-top: 9px;\n        left: 0;\n        ", " {\n            height: 32px;\n        }\n    }\n    & .input {\n        float: left;\n        width: calc(100%);\n    }\n    & .input input {\n        padding-left: 35px;\n    }\n    & .delete {\n        display: ", ";\n        position: absolute;\n        width: 40px;\n        height: 31px;\n        right: 0;\n        text-align: center;\n        padding-top: 7px;\n        opacity: 0.3;\n    }\n    & .delete:hover {\n        opacity: 1;\n    }\n"], o = ["\n    position: relative;\n\n    & .icon {\n        z-index: 1;\n        position: absolute;\n        text-align: center;\n        width: 40px;\n        height: 31px;\n        font-weight: bold;\n        font-size: 12px;\n        display: inline-block;\n        line-height: 20px;\n        border-radius: 5px 0 0 5px;\n        border-right: 0;\n        padding-top: 9px;\n        left: 0;\n        ", " {\n            height: 32px;\n        }\n    }\n    & .input {\n        float: left;\n        width: calc(100%);\n    }\n    & .input input {\n        padding-left: 35px;\n    }\n    & .delete {\n        display: ", ";\n        position: absolute;\n        width: 40px;\n        height: 31px;\n        right: 0;\n        text-align: center;\n        padding-top: 7px;\n        opacity: 0.3;\n    }\n    & .delete:hover {\n        opacity: 1;\n    }\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		})));
	t.default = function(e) {
		return l.default.createElement(m, {
			value: e.value || ""
		}, l.default.createElement("div", {
			className: "icon"
		}, l.default.createElement(f.default, {
			size: 22,
			color: e.invalid ? d.default.color.error : d.default.color.grey1
		})), l.default.createElement("div", {
			className: "input"
		}, l.default.createElement(u.default, a({
			type: "text"
		}, e))), l.default.createElement("div", {
			className: "delete",
			onClick: e.onClear
		}, l.default.createElement(p.default, {
			size: 24,
			color: "black"
		})), l.default.createElement(c.default, {
			clear: "both"
		}))
	};
	var l = h(n(0)),
		s = h(n(1)),
		d = h(n(2)),
		u = (n(27), h(n(23))),
		c = h(n(14)),
		f = h(n(397)),
		p = h(n(191));

	function h(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var m = s.default.div(i, d.default.media.fourth, function(e) {
		return e.value.length > 0 ? "block" : "none"
	})
}, , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = H(["\n    position: absolute;\n    height: calc(100% - 180px);\n    width: calc(100% - 80px);\n    pointer-events: none;\n    ", " {\n        width: calc(100% - 50px);\n    }\n    ", " {\n        position: relative;\n        height: 35px;\n        width: 100%;\n        margin-bottom: 30px;\n        padding-top: 10px;\n    }\n"], ["\n    position: absolute;\n    height: calc(100% - 180px);\n    width: calc(100% - 80px);\n    pointer-events: none;\n    ", " {\n        width: calc(100% - 50px);\n    }\n    ", " {\n        position: relative;\n        height: 35px;\n        width: 100%;\n        margin-bottom: 30px;\n        padding-top: 10px;\n    }\n"]),
		a = H(["\n    width: 4px;\n    height: 100%;\n    margin: 0 auto;\n    background: ", ";\n    ", " {\n        width: 100%;\n        height: 4px;\n    }\n"], ["\n    width: 4px;\n    height: 100%;\n    margin: 0 auto;\n    background: ", ";\n    ", " {\n        width: 100%;\n        height: 4px;\n    }\n"]),
		i = H(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    background: white;\n    font-size: 30px;\n    font-weight: 100;\n    color: ", ";\n    width: 60px;\n    ", " {\n        width: 40px;\n        top: auto;\n    }\n"], ["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    background: white;\n    font-size: 30px;\n    font-weight: 100;\n    color: ", ";\n    width: 60px;\n    ", " {\n        width: 40px;\n        top: auto;\n    }\n"]),
		l = H([""], [""]),
		s = H(["\n    padding-right: 60px;\n    float: left;\n    width: 50%;\n    box-sizing: border-box;\n    ", " {\n        float: none;\n        width: 100%;\n        padding: 0;\n    }\n"], ["\n    padding-right: 60px;\n    float: left;\n    width: 50%;\n    box-sizing: border-box;\n    ", " {\n        float: none;\n        width: 100%;\n        padding: 0;\n    }\n"]),
		d = H(["\n    padding-left: 60px;\n    float: left;\n    width: 50%;\n    box-sizing: border-box;\n    ", " {\n        float: none;\n        width: 100%;\n        padding: 0;\n    }\n"], ["\n    padding-left: 60px;\n    float: left;\n    width: 50%;\n    box-sizing: border-box;\n    ", " {\n        float: none;\n        width: 100%;\n        padding: 0;\n    }\n"]),
		u = H(["\n    float: left;\n    font-size: 50px;\n    line-height: 38px;\n    padding-right: 10px;\n    color: ", ";\n    ", " {\n        display: none;\n    }\n"], ["\n    float: left;\n    font-size: 50px;\n    line-height: 38px;\n    padding-right: 10px;\n    color: ", ";\n    ", " {\n        display: none;\n    }\n"]),
		c = H(["\n    font-size: 18px;\n    font-weight: bold;\n    height: 48px;\n    line-height: 20px;\n    color: ", ";\n    letter-spacing: 0.3px;\n    ", " {\n        height: auto;\n        text-align: center;\n    }\n"], ["\n    font-size: 18px;\n    font-weight: bold;\n    height: 48px;\n    line-height: 20px;\n    color: ", ";\n    letter-spacing: 0.3px;\n    ", " {\n        height: auto;\n        text-align: center;\n    }\n"]),
		f = H(["\n    padding-top: 30px;\n    ", " {\n        padding-top: 15px;\n    }\n"], ["\n    padding-top: 30px;\n    ", " {\n        padding-top: 15px;\n    }\n"]),
		p = H(["\n    margin-bottom: 30px;\n    overflow: hidden;\n"], ["\n    margin-bottom: 30px;\n    overflow: hidden;\n"]),
		h = H(["\n    position: relative;\n    width: 200%;\n    transition: 0.75s ease all;\n    left: ", ";\n"], ["\n    position: relative;\n    width: 200%;\n    transition: 0.75s ease all;\n    left: ", ";\n"]),
		m = H(["\n    float: left;\n    width: 50%;\n    cursor: pointer;\n    &:hover > div {\n        border-color: ", ";\n    }\n    &:hover > button {\n        background-color: ", ";\n    }\n\n    &:hover > div > div {\n        opacity: 0.9;\n    }\n"], ["\n    float: left;\n    width: 50%;\n    cursor: pointer;\n    &:hover > div {\n        border-color: ", ";\n    }\n    &:hover > button {\n        background-color: ", ";\n    }\n\n    &:hover > div > div {\n        opacity: 0.9;\n    }\n"]),
		b = H(["\n    float: left;\n    width: 50%;\n    box-sizing: border-box;\n    padding-left: 5px;\n"], ["\n    float: left;\n    width: 50%;\n    box-sizing: border-box;\n    padding-left: 5px;\n"]),
		v = H(["\n    border: 4px solid ", ";\n    border-radius: 5px;\n    padding: 20px;\n"], ["\n    border: 4px solid ", ";\n    border-radius: 5px;\n    padding: 20px;\n"]),
		g = H(["\n    clear: both;\n    margin-bottom: 15px;\n    height: 40px;\n    overflow: hidden;\n    &:last-child {\n        margin-bottom: 0;\n    }\n    /* & > * {\n        position: absolute;\n        height: 50px;\n        top: 0;\n        width: 100%;\n    } */\n"], ["\n    clear: both;\n    margin-bottom: 15px;\n    height: 40px;\n    overflow: hidden;\n    &:last-child {\n        margin-bottom: 0;\n    }\n    /* & > * {\n        position: absolute;\n        height: 50px;\n        top: 0;\n        width: 100%;\n    } */\n"]),
		w = H(["\n    position: relative;\n    top: -7px;\n    border: 0;\n    background-color: ", ";\n    color: white;\n    font-weight: bold;\n    height: 40px;\n    width: 100%;\n    border-radius: 0 0 4px 4px;\n    font-size: 15px;\n    letter-spacing: -0.2px;\n    outline: none;\n    pointer-events: none;\n"], ["\n    position: relative;\n    top: -7px;\n    border: 0;\n    background-color: ", ";\n    color: white;\n    font-weight: bold;\n    height: 40px;\n    width: 100%;\n    border-radius: 0 0 4px 4px;\n    font-size: 15px;\n    letter-spacing: -0.2px;\n    outline: none;\n    pointer-events: none;\n"]),
		y = H(["\n    position: absolute;\n    top: 11px;\n    & img {\n        height: 16px;\n    }\n"], ["\n    position: absolute;\n    top: 11px;\n    & img {\n        height: 16px;\n    }\n"]),
		x = H(["\n    margin-left: 25px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n"], ["\n    margin-left: 25px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n"]),
		_ = n(0),
		E = W(_),
		k = W(n(1)),
		C = n(7),
		O = W(n(2)),
		P = n(10),
		S = n(9),
		T = W(n(8)),
		j = n(11),
		F = n(16),
		A = n(28),
		R = W(n(36)),
		z = W(n(39)),
		M = W(n(14)),
		I = W(n(58)),
		N = W(n(23)),
		L = W(n(47)),
		B = W(n(194)),
		D = W(n(196)),
		U = W(n(400));

	function W(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function H(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var K = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, _.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, C.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(T.default.view), this.observer.observe(T.default.location.path), T.default.view = {
					group_selected: -1,
					asset_selected: 0,
					password: "",
					password_error: !1,
					discovering: !1
				};
				var t = (0, j.getParamsFromLocation)().symbol;
				this.symbol = t, this.Coin = S.Coins[t], this.reusable_seeds = (0, j.getReusableSeeds)(this.symbol), this.onNew = this.onNew.bind(this), this.onChangePassword = this.onChangePassword.bind(this), this.onSubmit = this.onSubmit.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "onNew",
			value: function() {
				(0, F.setHref)(P.routes.create({
					symbol: this.symbol,
					step: "new"
				}))
			}
		}, {
			key: "onSelectGroup",
			value: function(e) {
				var t = (0, C.collect)();
				T.default.view.group_selected = e, T.default.view.asset_selected = 0, T.default.view.password = "", T.default.view.password_error = !1, t.emit()
			}
		}, {
			key: "onChangeAsset",
			value: function(e) {
				var t = (0, C.collect)();
				T.default.view.asset_selected = e.target.value, T.default.view.password_error = !1, t.emit()
			}
		}, {
			key: "onChangePassword",
			value: function(e) {
				var t = (0, C.collect)();
				T.default.view.password = e.target.value, T.default.view.password_error = !1, t.emit()
			}
		}, {
			key: "onSubmit",
			value: function(e) {
				var t = this,
					n = (0, C.collect)(),
					r = T.default.view.password,
					o = this.reusable_seeds[T.default.view.group_selected][T.default.view.asset_selected],
					a = S.Coins[o.symbol].decryptSeed(o.addresses, o.seed, r);
				a ? (T.default.view.discovering = !0, this.Coin.discoverWallet({
					seed: a
				}).then(function(e) {
					var n = (0, C.collect)(),
						o = e.address,
						i = t.Coin.symbol,
						l = (0, F.createAsset)(t.Coin.type, i, o, e.addresses),
						s = (0, j.getAssetId)(l);
					(0, F.setSeed)(s, a, r), (0, F.setHref)(P.routes.asset({
						asset_id: s
					})), (0, F.addNotification)('New "' + i + '" asset has been created'), n.emit()
				})) : T.default.view.password_error = !0, n.emit()
			}
		}, {
			key: "render",
			value: function() {
				var e = (0, j.getParamsFromLocation)().step;
				return E.default.createElement(G, {
					Coin: this.Coin,
					is_reuse_view: this.reusable_seeds.length > 0 && void 0 === e,
					reusable_seeds: this.reusable_seeds,
					group_selected: T.default.view.group_selected,
					asset_selected: T.default.view.asset_selected,
					password: T.default.view.password,
					password_error: T.default.view.password_error,
					discovering: T.default.view.discovering,
					onNew: this.onNew,
					onSelectGroup: this.onSelectGroup,
					onChangeAsset: this.onChangeAsset,
					onChangePassword: this.onChangePassword,
					onSubmit: this.onSubmit
				})
			}
		}]), t
	}();

	function G(e) {
		var t = e.Coin,
			n = e.is_reuse_view,
			r = e.reusable_seeds,
			o = e.group_selected,
			a = e.asset_selected,
			i = e.password,
			l = e.password_error,
			s = e.discovering,
			d = e.onNew,
			u = e.onSelectGroup,
			c = e.onChangeAsset,
			f = e.onChangePassword,
			p = e.onSubmit;
		return E.default.createElement(A.RightContainerPadding, null, E.default.createElement(A.RightHeader, null, E.default.createElement(L.default, null, E.default.createElement("img", {
			src: t.logo
		})), E.default.createElement(M.default, {
			float: "left"
		}, E.default.createElement(R.default, null, t.name), E.default.createElement(z.default, null, "Create ", t.symbol, " asset")), E.default.createElement(M.default, {
			clear: "both"
		})), E.default.createElement(A.RightContent, null, n ? E.default.createElement(X, null, E.default.createElement(Q, null, E.default.createElement("div", null, E.default.createElement($, null, "01"), E.default.createElement(Z, null, "Reuse the same Recovery Phrase that I am using for")), E.default.createElement(ee, null, r.map(function(e, t) {
			return E.default.createElement(te, null, E.default.createElement(ne, {
				selected: o === t
			}, E.default.createElement(re, {
				onClick: function(e) {
					return u(t)
				}
			}, E.default.createElement(ae, null, e.map(function(e) {
				return E.default.createElement(ie, null, E.default.createElement(B.default, {
					logo: S.Coins[e.symbol].logo,
					label: (0, j.getLabelOrAddress)(e),
					balance: S.Coins[e.symbol].format(e.balance, 5)
				}))
			})), E.default.createElement(le, null, "Select")), E.default.createElement(oe, null, E.default.createElement(D.default, {
				onChange: c
			}, e.map(function(e, t) {
				return E.default.createElement("option", {
					value: t,
					selected: t === a
				}, E.default.createElement(se, null, E.default.createElement("img", {
					src: S.Coins[e.symbol].logo
				})), E.default.createElement(de, null, (0, j.getLabelOrAddress)(e)))
			})), E.default.createElement(M.default, {
				"padding-top": "10px"
			}, E.default.createElement(N.default, {
				type: "password",
				placeholder: "Password of this asset",
				value: i,
				invalid: l,
				error: "Invalid password",
				width: "100%",
				"text-align": "center",
				onChange: f
			})), E.default.createElement(M.default, {
				"padding-top": "10px"
			}, E.default.createElement(I.default, {
				onClick: p,
				loading: s,
				loadingIco: "/static/image/loading.gif",
				disabled: 0 === i.length || l
			}, "Unlock and Reuse"))), E.default.createElement(M.default, {
				clear: "both"
			})))
		}))), E.default.createElement(Y, null, E.default.createElement(V, null), E.default.createElement(J, null, "OR")), E.default.createElement(q, null, E.default.createElement("div", null, E.default.createElement($, null, "02"), E.default.createElement(Z, null, "Create a new Recovery Phrase for this asset")), E.default.createElement(ee, null, E.default.createElement(I.default, {
			onClick: d
		}, "New")))) : E.default.createElement(U.default, null)))
	}
	t.default = K;
	var Y = k.default.div(o, O.default.media.second, O.default.media.third),
		V = k.default.div(a, O.default.color.grey2, O.default.media.third),
		J = k.default.div(i, O.default.color.grey3, O.default.media.third),
		X = k.default.div(l),
		Q = k.default.div(s, O.default.media.third),
		q = k.default.div(d, O.default.media.third),
		$ = k.default.div(u, O.default.color.grey2, O.default.media.third),
		Z = k.default.div(c, O.default.color.grey3, O.default.media.third),
		ee = k.default.div(f, O.default.media.third),
		te = k.default.div(p),
		ne = k.default.div(h, function(e) {
			return e.selected ? "-100%" : 0
		}),
		re = k.default.div(m, O.default.color.background3, O.default.color.background3),
		oe = k.default.div(b),
		ae = k.default.div(v, O.default.color.background2),
		ie = k.default.div(g),
		le = k.default.button(w, O.default.color.background2),
		se = k.default.div(y),
		de = k.default.div(x)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = L(["\n    ", " {\n        display: none;\n    }\n"], ["\n    ", " {\n        display: none;\n    }\n"]),
		a = L(["\n    font-weight: 100;\n    color: #007095;\n    font-size: 12px;\n    display: none;\n    & > span {\n        font-weight: normal;\n    }\n    ", " {\n        display: block;\n    }\n"], ["\n    font-weight: 100;\n    color: #007095;\n    font-size: 12px;\n    display: none;\n    & > span {\n        font-weight: normal;\n    }\n    ", " {\n        display: block;\n    }\n"]),
		i = L(["\n    max-width: 550px;\n    margin: 0 auto;\n"], ["\n    max-width: 550px;\n    margin: 0 auto;\n"]),
		l = L([""], [""]),
		s = L(["\n    text-align: center;\n    padding-top: 20px;\n    color: ", ";\n    font-weight: 900;\n    font-size: 22px;\n    ", " {\n        padding-top: 0;\n        font-size: 20px;\n        text-align: left;\n        line-height: 16px;\n    }\n"], ["\n    text-align: center;\n    padding-top: 20px;\n    color: ", ";\n    font-weight: 900;\n    font-size: 22px;\n    ", " {\n        padding-top: 0;\n        font-size: 20px;\n        text-align: left;\n        line-height: 16px;\n    }\n"]),
		d = L(["\n    padding-top: 20px;\n    color: ", ";\n    font-size: 14px;\n    & strong {\n        font-weight: bold;\n    }\n    & span {\n        color: ", ";\n    }\n    ", " {\n        font-size: 12px;\n    }\n"], ["\n    padding-top: 20px;\n    color: ", ";\n    font-size: 14px;\n    & strong {\n        font-weight: bold;\n    }\n    & span {\n        color: ", ";\n    }\n    ", " {\n        font-size: 12px;\n    }\n"]),
		u = L(["\n    padding-top: 20px;\n"], ["\n    padding-top: 20px;\n"]),
		c = L(["\n    font-size: 24px;\n    padding: 30px 30px 40px 30px;\n    text-align: center;\n    font-weight: bold;\n    color: ", ";\n    border: 2px solid\n        ", ";\n    border-radius: 5px;\n    user-select: text;\n    cursor: auto;\n    background: url('/static/image/pattern_background.png');\n    font-family: monospace;\n    animation: ", ";\n    ", " {\n        font-size: 16px;\n        padding: 15px 15px 25px 15px;\n    }\n\n    @keyframes shake {\n        10%,\n        90% {\n            transform: translate3d(-1px, 0, 0);\n        }\n\n        20%,\n        80% {\n            transform: translate3d(2px, 0, 0);\n        }\n\n        30%,\n        50%,\n        70% {\n            transform: translate3d(-4px, 0, 0);\n        }\n\n        40%,\n        60% {\n            transform: translate3d(4px, 0, 0);\n        }\n    }\n"], ["\n    font-size: 24px;\n    padding: 30px 30px 40px 30px;\n    text-align: center;\n    font-weight: bold;\n    color: ", ";\n    border: 2px solid\n        ", ";\n    border-radius: 5px;\n    user-select: text;\n    cursor: auto;\n    background: url('/static/image/pattern_background.png');\n    font-family: monospace;\n    animation: ", ";\n    ", " {\n        font-size: 16px;\n        padding: 15px 15px 25px 15px;\n    }\n\n    @keyframes shake {\n        10%,\n        90% {\n            transform: translate3d(-1px, 0, 0);\n        }\n\n        20%,\n        80% {\n            transform: translate3d(2px, 0, 0);\n        }\n\n        30%,\n        50%,\n        70% {\n            transform: translate3d(-4px, 0, 0);\n        }\n\n        40%,\n        60% {\n            transform: translate3d(4px, 0, 0);\n        }\n    }\n"]),
		f = L(["\n    margin-top: 10px;\n    margin-bottom: 15px;\n    & > * {\n        display: inline-block;\n        width: calc(33.33% - 6.66px);\n        margin-left: 5px;\n        margin-right: 5px;\n        margin-bottom: 10px;\n        padding: 10px 0 10px;\n        font-size: 13px;\n    }\n    & > *:nth-child(3n - 2) {\n        margin-left: 0;\n    }\n    & > *:nth-child(3n) {\n        margin-right: 0;\n    }\n"], ["\n    margin-top: 10px;\n    margin-bottom: 15px;\n    & > * {\n        display: inline-block;\n        width: calc(33.33% - 6.66px);\n        margin-left: 5px;\n        margin-right: 5px;\n        margin-bottom: 10px;\n        padding: 10px 0 10px;\n        font-size: 13px;\n    }\n    & > *:nth-child(3n - 2) {\n        margin-left: 0;\n    }\n    & > *:nth-child(3n) {\n        margin-right: 0;\n    }\n"]),
		p = n(0),
		h = N(p),
		m = N(n(1)),
		b = n(7),
		v = N(n(2)),
		g = n(10),
		w = n(4),
		y = n(82),
		x = n(52),
		_ = n(41),
		E = (n(40), n(9)),
		k = (n(38), n(27)),
		C = N(n(8)),
		O = n(16),
		P = n(11),
		S = N(n(197)),
		T = n(402),
		j = N(n(14)),
		F = n(22),
		A = N(n(23)),
		R = N(n(67)),
		z = N(n(58)),
		M = N(n(26)),
		I = N(n(198));

	function N(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function L(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	window.dap = n(7);
	var B = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, p.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				C.default.view = {
					step: 0,
					password: "",
					repassword: "",
					words_shuffle_clicked: [],
					word_wrong_selected: !1
				}, this.observer = (0, b.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(C.default.view), this.observer.observe(C.default.view.words_shuffle_clicked, "length");
				var t = (0, P.getParamsFromLocation)().symbol;
				this.words = (0, x.getRandomMnemonic)().split(" "), this.words_shuffle = [], this.Coin = E.Coins[t], this.onChangePassword = this.onChangePassword.bind(this), this.onChangeRepassword = this.onChangeRepassword.bind(this), this.onVerifyWord = this.onVerifyWord.bind(this), this.onNext = this.onNext.bind(this), this.onBack = this.onBack.bind(this), this.onPrint = this.onPrint.bind(this), this.onClear = this.onClear.bind(this), this.onCreate = this.onCreate.bind(this)
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "onNext",
			value: function(e) {
				var t = (0, b.collect)();
				C.default.view.step += 1, 2 === C.default.view.step && (this.words_shuffle = (0, _.shuffle)(this.words.slice(0)), C.default.view.words_shuffle_clicked.length = 0, C.default.view.word_wrong_selected = !1), t.emit()
			}
		}, {
			key: "onBack",
			value: function(e) {
				C.default.view.step -= 1
			}
		}, {
			key: "onChangePassword",
			value: function(e) {
				C.default.view.password = e.target.value
			}
		}, {
			key: "onChangeRepassword",
			value: function(e) {
				C.default.view.repassword = e.target.value
			}
		}, {
			key: "onVerifyWord",
			value: function(e, t) {
				var n = (0, b.collect)(),
					r = C.default.view.words_shuffle_clicked;
				r.push(t), C.default.view.word_wrong_selected = this.words[r.length - 1] !== e, n.emit()
			}
		}, {
			key: "onPrint",
			value: function() {
				(0, k.printTemplate)((0, y.Words)(this.words.join(" ")))
			}
		}, {
			key: "onClear",
			value: function() {
				var e = (0, b.collect)();
				C.default.view.words_shuffle_clicked.length = 0, C.default.view.word_wrong_selected = !1, e.emit()
			}
		}, {
			key: "onCreate",
			value: function() {
				var e = (0, b.collect)(),
					t = this.Coin.symbol,
					n = this.words.join(" "),
					r = this.Coin.getWalletFromSeed({
						seed: n
					}).address,
					o = (0, O.createAsset)(this.Coin.type, t, r),
					a = (0, P.getAssetId)(o);
				(0, O.setSeed)(a, n, C.default.view.password), (0, O.setHref)(g.routes.asset({
					asset_id: a
				})), (0, O.addNotification)('New "' + t + '" asset has been created'), e.emit()
			}
		}, {
			key: "render",
			value: function() {
				return h.default.createElement(D, {
					Coin: this.Coin,
					step: C.default.view.step,
					password: C.default.view.password,
					repassword: C.default.view.repassword,
					words: this.words,
					words_shuffle: this.words_shuffle,
					words_shuffle_clicked: C.default.view.words_shuffle_clicked,
					word_wrong_selected: C.default.view.word_wrong_selected,
					isPasswordFormValid: this.isPasswordFormValid,
					isRepasswordInvalid: this.isRepasswordInvalid,
					onChangePassword: this.onChangePassword,
					onChangeRepassword: this.onChangeRepassword,
					onVerifyWord: this.onVerifyWord,
					onNext: this.onNext,
					onBack: this.onBack,
					onPrint: this.onPrint,
					onClear: this.onClear,
					onCreate: this.onCreate
				})
			}
		}, {
			key: "isPasswordFormValid",
			get: function() {
				return C.default.view.password.length >= w.minpassword && C.default.view.password === C.default.view.repassword
			}
		}, {
			key: "isRepasswordInvalid",
			get: function() {
				return C.default.view.password.length > 0 && C.default.view.repassword.length > 0 && C.default.view.password.length === C.default.view.repassword.length && C.default.view.password !== C.default.view.repassword
			}
		}]), t
	}();

	function D(e) {
		e.Coin;
		var t = e.step,
			n = e.password,
			r = e.repassword,
			o = e.words,
			a = e.words_shuffle,
			i = e.words_shuffle_clicked,
			l = e.word_wrong_selected,
			s = e.isPasswordFormValid,
			d = e.isRepasswordInvalid,
			u = e.onChangePassword,
			c = e.onChangeRepassword,
			f = e.onVerifyWord,
			p = e.onNext,
			m = e.onBack,
			b = e.onPrint,
			v = e.onClear,
			g = e.onCreate;
		return h.default.createElement("div", null, h.default.createElement(U, null, h.default.createElement(T.Wizard, null, [0, 1, 2].map(function(e) {
			return e < t ? h.default.createElement(T.WizardItem, {
				status: "3"
			}, "✓") : h.default.createElement(T.WizardItem, {
				status: e > t ? 1 : 2
			}, e + 1)
		}))), h.default.createElement(W, null, "Step ", h.default.createElement("span", null, t + 1), " of 3"), h.default.createElement(H, null, h.default.createElement(I.default, {
			active: t
		}, h.default.createElement(K, null, h.default.createElement(G, null, "Create Your Password"), h.default.createElement(Y, null, "Coinfy will protect your asset with a password. You need to remember your password as there is no way it can be recovered. This password protects your cryptocurrency if someone else tries to access your computer or mobile device."), h.default.createElement(V, null, h.default.createElement(F.FormField, null, h.default.createElement(R.default, {
			placeholder: "Password",
			minlength: w.minpassword,
			value: n,
			onChange: u,
			width: "100%",
			type: "password"
		})), h.default.createElement(F.FormField, null, h.default.createElement(A.default, {
			placeholder: "Repeat Password",
			minlength: w.minpassword,
			error: d ? "Passwords do not match" : null,
			invalid: d,
			value: r,
			onChange: c,
			width: "100%",
			type: "password"
		})), h.default.createElement(F.FormField, null, h.default.createElement(F.FormFieldButtonRight, {
			width: "100%"
		}, h.default.createElement(z.default, {
			width: "100%",
			disabled: !s,
			onClick: p
		}, "Next"))))), h.default.createElement(K, null, h.default.createElement(G, null, "Write Down or Print Your Recovery Phrase"), h.default.createElement(Y, null, "Write or print your recovery phrase and store it securely offline.", " ", h.default.createElement("strong", null, h.default.createElement("span", null, "Do not share it with anyone.")), " ", "Your recovery phrase allows you to recover your asset in case of loss or damage.", h.default.createElement("strong", null, " ", h.default.createElement("span", null, "Without it, you will not be able to access your cryptocurrency if something goes wrong.")), " ", "Make two copies of your recovery phrase and store them in separate physical locations. Please note, your recovery phrase is case sensitive and each word must be written in the correct order."), h.default.createElement(V, null, h.default.createElement(j.default, null, h.default.createElement(J, null, o.join(" ")), h.default.createElement(j.default, {
			position: "relative",
			top: "-20px"
		}, h.default.createElement(M.default, {
			margin: "0 auto",
			onClick: b
		}, h.default.createElement(S.default, {
			size: 20,
			color: "#617991"
		}), " "))), h.default.createElement(F.FormField, null, h.default.createElement(F.FormFieldButtonLeft, {
			width: "29%"
		}, h.default.createElement(z.default, {
			width: "100%",
			onClick: m
		}, "Back")), h.default.createElement(F.FormFieldButtonRight, {
			width: "69%"
		}, h.default.createElement(z.default, {
			width: "100%",
			onClick: p
		}, "Next"))))), h.default.createElement(K, null, h.default.createElement(G, null, "Verify Your Recovery Phrase"), h.default.createElement(V, null, h.default.createElement(j.default, null, h.default.createElement(J, {
			error: l
		}, i.length > 0 ? i.map(function(e) {
			return a[e]
		}).join(" ") : " "), h.default.createElement(j.default, {
			position: "relative",
			top: "-20px",
			height: "20px"
		}, h.default.createElement(M.default, {
			onClick: v,
			margin: "0 auto",
			disabled: !l,
			red: !0
		}, "Clear"))), h.default.createElement(X, null, a.map(function(e, t) {
			return h.default.createElement(M.default, {
				disabled: l || i.indexOf(t) > -1,
				onClick: function(n) {
					return f(e, t)
				}
			}, e)
		})), h.default.createElement(F.FormField, null, h.default.createElement(F.FormFieldButtonLeft, {
			width: "29%"
		}, h.default.createElement(z.default, {
			width: "100%",
			disabled: !1,
			onClick: m
		}, "Back")), h.default.createElement(F.FormFieldButtonRight, {
			width: "69%"
		}, h.default.createElement(z.default, {
			width: "100%",
			disabled: o.length > i.length,
			onClick: g
		}, "Create!"))))))))
	}
	t.default = B;
	var U = m.default.div(o, v.default.media.fourth),
		W = m.default.div(a, v.default.media.fourth),
		H = m.default.div(i),
		K = m.default.div(l),
		G = m.default.div(s, v.default.color.background2, v.default.media.fourth),
		Y = m.default.div(d, v.default.color.front3, v.default.color.red3, v.default.media.fourth),
		V = m.default.div(u),
		J = m.default.div(c, function(e) {
			return e.error ? v.default.color.red3 : "black"
		}, function(e) {
			return e.error ? v.default.color.red3 : "transparent"
		}, function(e) {
			return e.error ? "shake 0.82s cubic-bezier(.36,.07,.19,.97) both" : "unset"
		}, v.default.media.fourth),
		X = m.default.div(f)
}, , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = d(["\n    box-sizing: content-box;\n    position: relative;\n    height: 76px;\n\n    & .wizardBackground {\n        box-sizing: content-box;\n        position: absolute;\n        background-color: ", ";\n        height: 16px;\n        width: 100%;\n        top: 32px;\n        border-radius: 20px;\n    }\n    & .wizardItems {\n        box-sizing: content-box;\n        position: absolute;\n        width: 100%;\n    }\n    & .wizardItems > div {\n        box-sizing: content-box;\n        width: ", "px;\n        margin: 0 auto;\n    }\n    & .wizardItems > div > div {\n        box-sizing: content-box;\n        float: left;\n        margin-right: ", "px;\n    }\n    & .wizardItems > div > div:last-child {\n        box-sizing: content-box;\n        margin-right: 0;\n    }\n"], ["\n    box-sizing: content-box;\n    position: relative;\n    height: 76px;\n\n    & .wizardBackground {\n        box-sizing: content-box;\n        position: absolute;\n        background-color: ", ";\n        height: 16px;\n        width: 100%;\n        top: 32px;\n        border-radius: 20px;\n    }\n    & .wizardItems {\n        box-sizing: content-box;\n        position: absolute;\n        width: 100%;\n    }\n    & .wizardItems > div {\n        box-sizing: content-box;\n        width: ", "px;\n        margin: 0 auto;\n    }\n    & .wizardItems > div > div {\n        box-sizing: content-box;\n        float: left;\n        margin-right: ", "px;\n    }\n    & .wizardItems > div > div:last-child {\n        box-sizing: content-box;\n        margin-right: 0;\n    }\n"]),
		o = d(["\n    box-sizing: content-box;\n    width: ", "px;\n    & .wizardNumber {\n        box-sizing: content-box;\n        background-color: ", ";\n        transition: 0.75s ease background-color;\n        border-radius: 50%;\n        text-align: center;\n        color: white;\n        font-weight: bold;\n\n        width: 60px;\n        height: 60px;\n        border: 8px solid ", ";\n        font-size: 30px;\n        line-height: 62px;\n    }\n    & .wizardLabel {\n        box-sizing: content-box;\n        width: 100%;\n        padding-top: 5px;\n        text-align: center;\n        font-size: 13px;\n        font-weight: bold;\n        letter-spacing: 0.2px;\n        color: ", ";\n    }\n"], ["\n    box-sizing: content-box;\n    width: ", "px;\n    & .wizardNumber {\n        box-sizing: content-box;\n        background-color: ", ";\n        transition: 0.75s ease background-color;\n        border-radius: 50%;\n        text-align: center;\n        color: white;\n        font-weight: bold;\n\n        width: 60px;\n        height: 60px;\n        border: 8px solid ", ";\n        font-size: 30px;\n        line-height: 62px;\n    }\n    & .wizardLabel {\n        box-sizing: content-box;\n        width: 100%;\n        padding-top: 5px;\n        text-align: center;\n        font-size: 13px;\n        font-weight: bold;\n        letter-spacing: 0.2px;\n        color: ", ";\n    }\n"]);
	t.Wizard = function(e) {
		return a.default.createElement(u, e, a.default.createElement("div", {
			className: "wizardBackground"
		}), a.default.createElement("div", {
			className: "wizardItems"
		}, a.default.createElement("div", null, e.children)))
	}, t.WizardItem = function(e) {
		var t = void 0;
		"string" == typeof e.label && (t = a.default.createElement("div", {
			className: "wizardLabel"
		}, e.label));
		return a.default.createElement(c, e, a.default.createElement("div", {
			className: "wizardNumber"
		}, e.children), t)
	};
	var a = s(n(0)),
		i = s(n(1)),
		l = s(n(2));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function d(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var u = i.default.div(r, l.default.color.grey2, function(e) {
			var t = e.children[1].children[0].children.length;
			return 76 * t + 50 * (t - 1)
		}, 50),
		c = i.default.div(o, 76, function(e) {
			switch (String(e.status)) {
				case "1":
					return l.default.color.grey3;
				case "2":
					return l.default.color.background3;
				case "3":
					return l.default.color.front3
			}
		}, l.default.color.grey2, function(e) {
			switch (String(e.status)) {
				case "1":
					return l.default.color.grey3;
				case "2":
					return l.default.color.background3;
				case "3":
					return l.default.color.front3
			}
		})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = _(o),
		i = (_(n(1)), n(7)),
		l = (n(40), n(57)),
		s = n(10),
		d = _(n(8)),
		u = (_(n(2)), _(n(36))),
		c = _(n(39)),
		f = n(28),
		p = _(n(14)),
		h = (_(n(59)), _(n(60)), _(n(31))),
		m = n(21),
		b = (_(n(32)), _(n(47))),
		v = n(22),
		g = _(n(68)),
		w = _(n(69)),
		y = _(n(112)),
		x = _(n(113));

	function _(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var E = {
			seed: "seed",
			address: "address",
			private: "private",
			bip38: "bip38"
		},
		k = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, o.Component), r(t, [{
				key: "componentWillMount",
				value: function() {
					var e = this;
					this.observer = (0, i.createObserver)(function(t) {
						return e.forceUpdate()
					}), this.observer.observe(d.default.view), d.default.view = {
						type_import: E.seed
					}, this.onChangeTypeImport = this.onChangeTypeImport.bind(this)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.observer.destroy()
				}
			}, {
				key: "shouldComponentUpdate",
				value: function() {
					return !1
				}
			}, {
				key: "onChangeTypeImport",
				value: function(e) {
					var t = (0, i.collect)();
					d.default.view.type_import = e.target.value, t.emit()
				}
			}, {
				key: "render",
				value: function() {
					return a.default.createElement(C, {
						type_import: d.default.view.type_import,
						onChangeTypeImport: this.onChangeTypeImport
					})
				}
			}]), t
		}();

	function C(e) {
		var t = e.type_import,
			n = e.onChangeTypeImport;
		return a.default.createElement(f.RightContainerPadding, null, a.default.createElement(f.RightHeader, null, a.default.createElement(b.default, null, a.default.createElement("img", {
			src: l.logo
		})), a.default.createElement(p.default, {
			float: "left"
		}, a.default.createElement(u.default, null, "Bitcoin"), a.default.createElement(c.default, null, "Import wallet")), a.default.createElement(p.default, {
			clear: "both"
		})), a.default.createElement(f.RightContent, null, a.default.createElement(p.default, null, a.default.createElement("form", null, a.default.createElement(v.FormField, null, a.default.createElement(v.FormFieldLeft, null, a.default.createElement(m.Label, null, "I have my"), a.default.createElement(m.SubLabel, null, "Select the option you prefer to import.")), a.default.createElement(v.FormFieldRight, null, a.default.createElement(h.default, {
			width: "100%",
			onChange: n
		}, a.default.createElement("option", {
			value: E.seed,
			selected: t === E.seed
		}, "Recovery Phrase (12 words)"), a.default.createElement("option", {
			value: E.address,
			selected: t === E.address
		}, "Address"), a.default.createElement("option", {
			value: E.private,
			selected: t === E.private
		}, "Private key unencrypted (WIF)"), a.default.createElement("option", {
			value: E.bip38,
			selected: t === E.bip38
		}, "Private key encrypted (BIP38)")))), a.default.createElement(s.Router, null, a.default.createElement(s.Route, {
			if: t === E.seed
		}, a.default.createElement(g.default, null)), a.default.createElement(s.Route, {
			if: t === E.address
		}, a.default.createElement(w.default, null)), a.default.createElement(s.Route, {
			if: t === E.private
		}, a.default.createElement(y.default, null)), a.default.createElement(s.Route, {
			if: t === E.bip38
		}, a.default.createElement(x.default, null))), a.default.createElement(p.default, {
			clear: "both"
		})))))
	}
	t.default = k
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = u(["\n    position: relative;\n"], ["\n    position: relative;\n"]),
		o = u(["\n    ", " border: 1px solid ", ";\n    background: #fff;\n    padding: 10px;\n    outline: none;\n    font-family: monospace;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05) inset;\n    box-sizing: border-box;\n    text-align: ", ";\n\n    font-weight: bold;\n    font-size: 15px;\n    color: ", ";\n    letter-spacing: 1px;\n\n    animation: ", ";\n\n    @keyframes shake {\n        10%,\n        90% {\n            transform: translate3d(-1px, 0, 0);\n        }\n\n        20%,\n        80% {\n            transform: translate3d(2px, 0, 0);\n        }\n\n        30%,\n        50%,\n        70% {\n            transform: translate3d(-4px, 0, 0);\n        }\n\n        40%,\n        60% {\n            transform: translate3d(4px, 0, 0);\n        }\n    }\n\n    &:focus {\n        box-shadow: none !important;\n        border-color: ", ";\n    }\n    ::-webkit-input-placeholder {\n        /* Chrome */\n        color: rgba(90, 97, 104, 0.4);\n    }\n    :-ms-input-placeholder {\n        /* IE 10+ */\n        color: rgba(90, 97, 104, 0.4);\n    }\n    ::-moz-placeholder {\n        /* Firefox 19+ */\n        color: rgba(90, 97, 104, 0.4);\n        opacity: 1;\n    }\n    :-moz-placeholder {\n        /* Firefox 4 - 18 */\n        color: rgba(90, 97, 104, 0.4);\n        opacity: 1;\n    }\n"], ["\n    ", " border: 1px solid ", ";\n    background: #fff;\n    padding: 10px;\n    outline: none;\n    font-family: monospace;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05) inset;\n    box-sizing: border-box;\n    text-align: ", ";\n\n    font-weight: bold;\n    font-size: 15px;\n    color: ", ";\n    letter-spacing: 1px;\n\n    animation: ", ";\n\n    @keyframes shake {\n        10%,\n        90% {\n            transform: translate3d(-1px, 0, 0);\n        }\n\n        20%,\n        80% {\n            transform: translate3d(2px, 0, 0);\n        }\n\n        30%,\n        50%,\n        70% {\n            transform: translate3d(-4px, 0, 0);\n        }\n\n        40%,\n        60% {\n            transform: translate3d(4px, 0, 0);\n        }\n    }\n\n    &:focus {\n        box-shadow: none !important;\n        border-color: ", ";\n    }\n    ::-webkit-input-placeholder {\n        /* Chrome */\n        color: rgba(90, 97, 104, 0.4);\n    }\n    :-ms-input-placeholder {\n        /* IE 10+ */\n        color: rgba(90, 97, 104, 0.4);\n    }\n    ::-moz-placeholder {\n        /* Firefox 19+ */\n        color: rgba(90, 97, 104, 0.4);\n        opacity: 1;\n    }\n    :-moz-placeholder {\n        /* Firefox 4 - 18 */\n        color: rgba(90, 97, 104, 0.4);\n        opacity: 1;\n    }\n"]),
		a = u(["\n    top: -2px;\n    position: relative;\n    font-size: 10px;\n    text-align: right;\n    color: ", ";\n    font-weight: bold;\n    letter-spacing: 0.3px;\n    /* position: absolute;\n    right: 0;\n    bottom: -14px; */\n"], ["\n    top: -2px;\n    position: relative;\n    font-size: 10px;\n    text-align: right;\n    color: ", ";\n    font-weight: bold;\n    letter-spacing: 0.3px;\n    /* position: absolute;\n    right: 0;\n    bottom: -14px; */\n"]);
	t.default = function(e) {
		var t = e.invalid && e.error ? i.default.createElement(p, null, e.error) : null;
		return i.default.createElement(c, e, i.default.createElement(f, e), t)
	};
	var i = d(n(0)),
		l = d(n(1)),
		s = d(n(2));

	function d(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function u(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var c = l.default.div(r),
		f = l.default.textarea(o, function(e) {
			if (e.width) return "width:" + e.width + ";"
		}, function(e) {
			return e.invalid ? s.default.color.error + " !important" : s.default.color.background4
		}, function(e) {
			return e["text-align"] ? e["text-align"] : "left"
		}, function(e) {
			return e.color || "#000"
		}, function(e) {
			return e.invalid ? "shake 0.82s cubic-bezier(.36,.07,.19,.97) both" : "unset"
		}, s.default.color.background3),
		p = l.default.div(a, s.default.color.error)
}, , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.ItemListItemRight = t.ItemListItemLeft = t.ItemListItemRadio = t.ItemListInner = t.ItemList = t.ItemsList = void 0;
	var r = f(["\n    clear: both;\n"], ["\n    clear: both;\n"]),
		o = f(["\n    clear: both;\n    color: ", ";\n    border-radius: 5px;\n    margin-bottom: 10px;\n    background-color: ", ";\n"], ["\n    clear: both;\n    color: ", ";\n    border-radius: 5px;\n    margin-bottom: 10px;\n    background-color: ", ";\n"]),
		a = f(["\n    min-height: 46px;\n    padding: 0 12px 0 12px;\n"], ["\n    min-height: 46px;\n    padding: 0 12px 0 12px;\n"]),
		i = f(["\n    float: left;\n    margin-right: 10px;\n    padding-left: 5px;\n    padding-top: 13px;\n"], ["\n    float: left;\n    margin-right: 10px;\n    padding-left: 5px;\n    padding-top: 13px;\n"]),
		l = f(["\n    float: left;\n    font-weight: bold;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 85%;\n    padding-top: 12px;\n    cursor: text;\n    user-select: text;\n    ", " {\n        float: none;\n        padding-top: 4px;\n        font-size: 14px;\n    }\n"], ["\n    float: left;\n    font-weight: bold;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 85%;\n    padding-top: 12px;\n    cursor: text;\n    user-select: text;\n    ", " {\n        float: none;\n        padding-top: 4px;\n        font-size: 14px;\n    }\n"]),
		s = f(["\n    float: right;\n    font-weight: bold;\n    padding-top: 12px;\n\n    ", " {\n        float: none;\n        padding-top: 0;\n        font-size: 12px;\n        margin-left: 35px;\n    }\n"], ["\n    float: right;\n    font-weight: bold;\n    padding-top: 12px;\n\n    ", " {\n        float: none;\n        padding-top: 0;\n        font-size: 12px;\n        margin-left: 35px;\n    }\n"]),
		d = c(n(1)),
		u = c(n(2));

	function c(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function f(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	t.ItemsList = d.default.div(r), t.ItemList = d.default.div(o, function(e) {
		return e.selected ? "black" : u.default.color.front3
	}, function(e) {
		return e.selected ? u.default.color.background1 : "transparent"
	}), t.ItemListInner = d.default.div(a), t.ItemListItemRadio = d.default.div(i), t.ItemListItemLeft = d.default.div(l, u.default.media.fourth), t.ItemListItemRight = d.default.div(s, u.default.media.fourth)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = _(o),
		i = (_(n(1)), n(7)),
		l = (n(40), n(38)),
		s = n(10),
		d = _(n(8)),
		u = (_(n(2)), _(n(36))),
		c = _(n(39)),
		f = n(28),
		p = _(n(14)),
		h = (_(n(59)), _(n(60)), _(n(31))),
		m = n(21),
		b = (_(n(32)), _(n(47))),
		v = n(22),
		g = _(n(68)),
		w = _(n(69)),
		y = _(n(200)),
		x = _(n(201));

	function _(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var E = {
			seed: "seed",
			address: "address",
			private: "private",
			keystore: "keystore"
		},
		k = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, o.Component), r(t, [{
				key: "componentWillMount",
				value: function() {
					var e = this;
					this.observer = (0, i.createObserver)(function(t) {
						return e.forceUpdate()
					}), this.observer.observe(d.default.view), d.default.view = {
						type_import: E.seed
					}, this.onChangeTypeImport = this.onChangeTypeImport.bind(this)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.observer.destroy()
				}
			}, {
				key: "shouldComponentUpdate",
				value: function() {
					return !1
				}
			}, {
				key: "onChangeTypeImport",
				value: function(e) {
					var t = (0, i.collect)();
					d.default.view.type_import = e.target.value, t.emit()
				}
			}, {
				key: "render",
				value: function() {
					return a.default.createElement(C, {
						type_import: d.default.view.type_import,
						onChangeTypeImport: this.onChangeTypeImport
					})
				}
			}]), t
		}();

	function C(e) {
		var t = e.type_import,
			n = e.onChangeTypeImport;
		return a.default.createElement(f.RightContainerPadding, null, a.default.createElement(f.RightHeader, null, a.default.createElement(b.default, null, a.default.createElement("img", {
			src: l.logo
		})), a.default.createElement(p.default, {
			float: "left"
		}, a.default.createElement(u.default, null, "Ethereum"), a.default.createElement(c.default, null, "Import wallet")), a.default.createElement(p.default, {
			clear: "both"
		})), a.default.createElement(f.RightContent, null, a.default.createElement("form", null, a.default.createElement(v.FormField, null, a.default.createElement(v.FormFieldLeft, null, a.default.createElement(m.Label, null, "I have my"), a.default.createElement(m.SubLabel, null, "Select the option you prefer to import.")), a.default.createElement(v.FormFieldRight, null, a.default.createElement(h.default, {
			width: "100%",
			onChange: n
		}, a.default.createElement("option", {
			value: E.seed,
			selected: t === E.seed
		}, "Recovery Phrase (12 words)"), a.default.createElement("option", {
			value: E.address,
			selected: t === E.address
		}, "Address"), a.default.createElement("option", {
			value: E.private,
			selected: t === E.private
		}, "Private key"), a.default.createElement("option", {
			value: E.keystore,
			selected: t === E.keystore
		}, "Keystore file (UTC / JSON)")))), a.default.createElement(s.Router, null, a.default.createElement(s.Route, {
			if: t === E.seed
		}, a.default.createElement(g.default, null)), a.default.createElement(s.Route, {
			if: t === E.address
		}, a.default.createElement(w.default, null)), a.default.createElement(s.Route, {
			if: t === E.private
		}, a.default.createElement(y.default, null)), a.default.createElement(s.Route, {
			if: t === E.keystore
		}, a.default.createElement(x.default, null))), a.default.createElement(p.default, {
			clear: "both"
		}))))
	}
	t.default = k
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		l = (r = ["\n    & .icon {\n        float: left;\n        text-align: center;\n        width: 40px;\n        height: 31px;\n        background-image: linear-gradient(#fff, ", ");\n        border: 1px solid\n            ", ";\n        font-weight: bold;\n        font-size: 12px;\n        display: inline-block;\n        line-height: 20px;\n        border-radius: 5px 0 0 5px;\n        border-right: 0;\n        padding-top: 6px;\n        ", " {\n            height: 32px;\n        }\n    }\n    & .input {\n        float: left;\n        width: calc(100% - 42px);\n    }\n"], o = ["\n    & .icon {\n        float: left;\n        text-align: center;\n        width: 40px;\n        height: 31px;\n        background-image: linear-gradient(#fff, ", ");\n        border: 1px solid\n            ", ";\n        font-weight: bold;\n        font-size: 12px;\n        display: inline-block;\n        line-height: 20px;\n        border-radius: 5px 0 0 5px;\n        border-right: 0;\n        padding-top: 6px;\n        ", " {\n            height: 32px;\n        }\n    }\n    & .input {\n        float: left;\n        width: calc(100% - 42px);\n    }\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		s = n(0),
		d = m(s),
		u = m(n(1)),
		c = m(n(2)),
		f = n(27),
		p = m(n(23)),
		h = m(n(410));

	function m(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var b = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, s.Component), i(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.state = {
					fileName: ""
				}, this.input = (0, f.createInputFile)(), this.input.addEventListener("change", function(t) {
					t.target.files && t.target.files[0] && e.setState({
						fileName: t.target.files[0].name
					}), "function" == typeof e.props.onChange && e.props.onChange(t)
				}), this.onClick = this.onClick.bind(this)
			}
		}, {
			key: "onClick",
			value: function(e) {
				this.input.click()
			}
		}, {
			key: "render",
			value: function() {
				return d.default.createElement(v, {
					onClick: this.onClick,
					invalid: this.props.invalid
				}, d.default.createElement("div", {
					className: "icon"
				}, d.default.createElement(h.default, {
					size: 20,
					color: c.default.color.front5
				})), d.default.createElement("div", {
					className: "input"
				}, d.default.createElement(p.default, a({}, this.props, {
					type: "text",
					placeholder: this.props.placeholder || "Select file",
					disabled: !0,
					value: this.state.fileName,
					onChange: null
				}))))
			}
		}]), t
	}();
	t.default = b;
	var v = u.default.div(l, c.default.color.background1, function(e) {
		return e.invalid ? c.default.color.error : c.default.color.background5
	}, c.default.media.fourth)
}, , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = _(o),
		i = (_(n(1)), n(7)),
		l = (n(40), n(107)),
		s = n(10),
		d = _(n(8)),
		u = (_(n(2)), _(n(36))),
		c = _(n(39)),
		f = n(28),
		p = _(n(14)),
		h = (_(n(59)), _(n(60)), _(n(31))),
		m = n(21),
		b = (_(n(32)), _(n(47))),
		v = n(22),
		g = _(n(68)),
		w = _(n(69)),
		y = _(n(112)),
		x = _(n(113));

	function _(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var E = {
			seed: "seed",
			address: "address",
			private: "private",
			bip38: "bip38"
		},
		k = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, o.Component), r(t, [{
				key: "componentWillMount",
				value: function() {
					var e = this;
					this.observer = (0, i.createObserver)(function(t) {
						return e.forceUpdate()
					}), this.observer.observe(d.default.view), d.default.view = {
						type_import: E.seed
					}, this.onChangeTypeImport = this.onChangeTypeImport.bind(this)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.observer.destroy()
				}
			}, {
				key: "shouldComponentUpdate",
				value: function() {
					return !1
				}
			}, {
				key: "onChangeTypeImport",
				value: function(e) {
					var t = (0, i.collect)();
					d.default.view.type_import = e.target.value, t.emit()
				}
			}, {
				key: "render",
				value: function() {
					return a.default.createElement(C, {
						type_import: d.default.view.type_import,
						onChangeTypeImport: this.onChangeTypeImport
					})
				}
			}]), t
		}();

	function C(e) {
		var t = e.type_import,
			n = e.onChangeTypeImport;
		return a.default.createElement(f.RightContainerPadding, null, a.default.createElement(f.RightHeader, null, a.default.createElement(b.default, null, a.default.createElement("img", {
			src: l.logo
		})), a.default.createElement(p.default, {
			float: "left"
		}, a.default.createElement(u.default, null, "Litecoin"), a.default.createElement(c.default, null, "Import wallet")), a.default.createElement(p.default, {
			clear: "both"
		})), a.default.createElement(f.RightContent, null, a.default.createElement(p.default, null, a.default.createElement("form", null, a.default.createElement(v.FormField, null, a.default.createElement(v.FormFieldLeft, null, a.default.createElement(m.Label, null, "I have my"), a.default.createElement(m.SubLabel, null, "Select the option you prefer to import.")), a.default.createElement(v.FormFieldRight, null, a.default.createElement(h.default, {
			width: "100%",
			onChange: n
		}, a.default.createElement("option", {
			value: E.seed,
			selected: t === E.seed
		}, "Recovery Phrase (12 words)"), a.default.createElement("option", {
			value: E.address,
			selected: t === E.address
		}, "Address"), a.default.createElement("option", {
			value: E.private,
			selected: t === E.private
		}, "Private key unencrypted (WIF)"), a.default.createElement("option", {
			value: E.bip38,
			selected: t === E.bip38
		}, "Private key encrypted (BIP38)")))), a.default.createElement(s.Router, null, a.default.createElement(s.Route, {
			if: t === E.seed
		}, a.default.createElement(g.default, null)), a.default.createElement(s.Route, {
			if: t === E.address
		}, a.default.createElement(w.default, null)), a.default.createElement(s.Route, {
			if: t === E.private
		}, a.default.createElement(y.default, null)), a.default.createElement(s.Route, {
			if: t === E.bip38
		}, a.default.createElement(x.default, null))), a.default.createElement(p.default, {
			clear: "both"
		})))))
	}
	t.default = k
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = _(o),
		i = (_(n(1)), n(7)),
		l = (n(40), n(106)),
		s = n(10),
		d = _(n(8)),
		u = (_(n(2)), _(n(36))),
		c = _(n(39)),
		f = n(28),
		p = _(n(14)),
		h = (_(n(59)), _(n(60)), _(n(31))),
		m = n(21),
		b = (_(n(32)), _(n(47))),
		v = n(22),
		g = _(n(68)),
		w = _(n(69)),
		y = _(n(112)),
		x = _(n(113));

	function _(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var E = {
			seed: "seed",
			address: "address",
			private: "private",
			bip38: "bip38"
		},
		k = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, o.Component), r(t, [{
				key: "componentWillMount",
				value: function() {
					var e = this;
					this.observer = (0, i.createObserver)(function(t) {
						return e.forceUpdate()
					}), this.observer.observe(d.default.view), d.default.view = {
						type_import: E.seed
					}, this.onChangeTypeImport = this.onChangeTypeImport.bind(this)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.observer.destroy()
				}
			}, {
				key: "shouldComponentUpdate",
				value: function() {
					return !1
				}
			}, {
				key: "onChangeTypeImport",
				value: function(e) {
					var t = (0, i.collect)();
					d.default.view.type_import = e.target.value, t.emit()
				}
			}, {
				key: "render",
				value: function() {
					return a.default.createElement(C, {
						type_import: d.default.view.type_import,
						onChangeTypeImport: this.onChangeTypeImport
					})
				}
			}]), t
		}();

	function C(e) {
		var t = e.type_import,
			n = e.onChangeTypeImport;
		return a.default.createElement(f.RightContainerPadding, null, a.default.createElement(f.RightHeader, null, a.default.createElement(b.default, null, a.default.createElement("img", {
			src: l.logo
		})), a.default.createElement(p.default, {
			float: "left"
		}, a.default.createElement(u.default, null, "Bcash"), a.default.createElement(c.default, null, "Import wallet")), a.default.createElement(p.default, {
			clear: "both"
		})), a.default.createElement(f.RightContent, null, a.default.createElement(p.default, null, a.default.createElement("form", null, a.default.createElement(v.FormField, null, a.default.createElement(v.FormFieldLeft, null, a.default.createElement(m.Label, null, "I have my"), a.default.createElement(m.SubLabel, null, "Select the option you prefer to import.")), a.default.createElement(v.FormFieldRight, null, a.default.createElement(h.default, {
			width: "100%",
			onChange: n
		}, a.default.createElement("option", {
			value: E.seed,
			selected: t === E.seed
		}, "Recovery Phrase (12 words)"), a.default.createElement("option", {
			value: E.address,
			selected: t === E.address
		}, "Address"), a.default.createElement("option", {
			value: E.private,
			selected: t === E.private
		}, "Private key unencrypted (WIF)"), a.default.createElement("option", {
			value: E.bip38,
			selected: t === E.bip38
		}, "Private key encrypted (BIP38)")))), a.default.createElement(s.Router, null, a.default.createElement(s.Route, {
			if: t === E.seed
		}, a.default.createElement(g.default, null)), a.default.createElement(s.Route, {
			if: t === E.address
		}, a.default.createElement(w.default, null)), a.default.createElement(s.Route, {
			if: t === E.private
		}, a.default.createElement(y.default, null)), a.default.createElement(s.Route, {
			if: t === E.bip38
		}, a.default.createElement(x.default, null))), a.default.createElement(p.default, {
			clear: "both"
		})))))
	}
	t.default = k
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = E(o),
		i = (E(n(1)), n(7)),
		l = (n(40), n(9)),
		s = n(10),
		d = E(n(8)),
		u = n(11),
		c = (E(n(2)), E(n(36))),
		f = E(n(39)),
		p = n(28),
		h = E(n(14)),
		m = (E(n(59)), E(n(60)), E(n(31))),
		b = n(21),
		v = (E(n(32)), E(n(47))),
		g = n(22),
		w = E(n(68)),
		y = E(n(69)),
		x = E(n(200)),
		_ = E(n(201));

	function E(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var k = {
			seed: "seed",
			address: "address",
			private: "private",
			keystore: "keystore"
		},
		C = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, o.Component), r(t, [{
				key: "componentWillMount",
				value: function() {
					var e = this;
					this.observer = (0, i.createObserver)(function(t) {
						return e.forceUpdate()
					}), this.observer.observe(d.default.view);
					var t = (0, u.getParamsFromLocation)().symbol;
					this.Coin = l.Coins[t], d.default.view = {
						type_import: k.seed
					}, this.onChangeTypeImport = this.onChangeTypeImport.bind(this)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.observer.destroy()
				}
			}, {
				key: "shouldComponentUpdate",
				value: function() {
					return !1
				}
			}, {
				key: "onChangeTypeImport",
				value: function(e) {
					var t = (0, i.collect)();
					d.default.view.type_import = e.target.value, t.emit()
				}
			}, {
				key: "render",
				value: function() {
					return a.default.createElement(O, {
						type_import: d.default.view.type_import,
						Coin: this.Coin,
						onChangeTypeImport: this.onChangeTypeImport
					})
				}
			}]), t
		}();

	function O(e) {
		var t = e.type_import,
			n = e.Coin,
			r = e.onChangeTypeImport;
		return a.default.createElement(p.RightContainerPadding, null, a.default.createElement(p.RightHeader, null, a.default.createElement(v.default, null, a.default.createElement("img", {
			src: n.logo
		})), a.default.createElement(h.default, {
			float: "left"
		}, a.default.createElement(c.default, null, n.name), a.default.createElement(f.default, null, "Import ", n.symbol, " token")), a.default.createElement(h.default, {
			clear: "both"
		})), a.default.createElement(p.RightContent, null, a.default.createElement("form", null, a.default.createElement(g.FormField, null, a.default.createElement(g.FormFieldLeft, null, a.default.createElement(b.Label, null, "I have my"), a.default.createElement(b.SubLabel, null, "Select the option you prefer to import.")), a.default.createElement(g.FormFieldRight, null, a.default.createElement(m.default, {
			width: "100%",
			onChange: r
		}, a.default.createElement("option", {
			value: k.seed,
			selected: t === k.seed
		}, "Recovery Phrase (12 words)"), a.default.createElement("option", {
			value: k.address,
			selected: t === k.address
		}, "Address"), a.default.createElement("option", {
			value: k.private,
			selected: t === k.private
		}, "Private key"), a.default.createElement("option", {
			value: k.keystore,
			selected: t === k.keystore
		}, "Keystore file (UTC / JSON)")))), a.default.createElement(s.Router, null, a.default.createElement(s.Route, {
			if: t === k.seed
		}, a.default.createElement(w.default, null)), a.default.createElement(s.Route, {
			if: t === k.address
		}, a.default.createElement(y.default, null)), a.default.createElement(s.Route, {
			if: t === k.private
		}, a.default.createElement(x.default, null)), a.default.createElement(s.Route, {
			if: t === k.keystore
		}, a.default.createElement(_.default, null))), a.default.createElement(h.default, {
			clear: "both"
		}))))
	}
	t.default = C
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function() {
		return r.default.createElement(o.default, null)
	};
	var r = a(n(0)),
		o = a(n(70));

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.MenuContentItemText = t.MenuContentItemIcon = t.MenuContentItem = t.MenuContent = t.Menu = void 0;
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = m(["\n    display: none;\n    & > * > * {\n        width: 100%;\n    }\n    ", " {\n        display: block;\n    }\n"], ["\n    display: none;\n    & > * > * {\n        width: 100%;\n    }\n    ", " {\n        display: block;\n    }\n"]),
		a = m(["\n    width: 100%;\n    height: 38px;\n    clear: both;\n    border-bottom: 2px solid;\n    border-color: ", ";\n    ", " {\n        display: none;\n        height: auto;\n        border-bottom: 0;\n    }\n"], ["\n    width: 100%;\n    height: 38px;\n    clear: both;\n    border-bottom: 2px solid;\n    border-color: ", ";\n    ", " {\n        display: none;\n        height: auto;\n        border-bottom: 0;\n    }\n"]),
		i = m(["\n    float: left;\n    padding: 10px 20px;\n    margin: 0 2px;\n    border-bottom: 2px solid;\n    border-color: transparent;\n    cursor: pointer;\n    color: ", ";\n    &:hover {\n        border-color: ", ";\n        color: ", ";\n    }\n\n    ", " ", " {\n        float: none;\n        width: calc(100% - 20px);\n        padding: 8px 10px;\n        border-bottom-width: 0;\n        border-left-style: solid;\n        border-left-width: 2px;\n    }\n"], ["\n    float: left;\n    padding: 10px 20px;\n    margin: 0 2px;\n    border-bottom: 2px solid;\n    border-color: transparent;\n    cursor: pointer;\n    color: ", ";\n    &:hover {\n        border-color: ", ";\n        color: ", ";\n    }\n\n    ", " ", " {\n        float: none;\n        width: calc(100% - 20px);\n        padding: 8px 10px;\n        border-bottom-width: 0;\n        border-left-style: solid;\n        border-left-width: 2px;\n    }\n"]),
		l = m(["\n    display: none;\n    float: left;\n    margin-right: 10px;\n    top: -2px;\n    position: relative;\n    transform: ", ";\n    & svg {\n        width: 15px;\n        height: 15px;\n    }\n"], ["\n    display: none;\n    float: left;\n    margin-right: 10px;\n    top: -2px;\n    position: relative;\n    transform: ", ";\n    & svg {\n        width: 15px;\n        height: 15px;\n    }\n"]),
		s = m(["\n    color: ", ";\n    font-size: 13px;\n    font-weight: 100;\n    letter-spacing: 0.5px;\n"], ["\n    color: ", ";\n    font-size: 13px;\n    font-weight: 100;\n    letter-spacing: 0.5px;\n"]),
		d = n(0),
		u = h(d),
		c = h(n(1)),
		f = h(n(2)),
		p = h(n(196));

	function h(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function m(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	t.Menu = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, d.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				this.onChange = this.onChange.bind(this)
			}
		}, {
			key: "onChange",
			value: function(e) {
				this.onClicks[e.target.value](e)
			}
		}, {
			key: "getLabel",
			value: function(e) {
				var t = e.children[0].children;
				for (var n in t)
					if ("string" == typeof t[n]) return t[n]
			}
		}, {
			key: "render",
			value: function() {
				var e = this;
				this.onClicks = [];
				var t = this.props.children,
					n = t.map(function(t, n) {
						var r = t.attributes,
							o = e.getLabel(t);
						return e.onClicks[n] = r.onClick, u.default.createElement("option", {
							selected: r.selected,
							disabled: r.disabled,
							value: n
						}, o)
					});
				return u.default.createElement("div", null, u.default.createElement(b, null, u.default.createElement(p.default, {
					onChange: this.onChange
				}, n)), u.default.createElement(v, null, t))
			}
		}]), t
	}();
	var b = c.default.div(o, f.default.media.second),
		v = t.MenuContent = c.default.div(a, f.default.color.background1, f.default.media.second);
	t.MenuContentItem = c.default.div(i, f.default.color.grey1, f.default.color.background2, f.default.color.background2, function(e) {
		return e.disabled ? "\n      color: " + f.default.color.disabled + " !important;\n      cursor: default;\n      border-color: transparent !important;\n      " : e.selected && !0 !== e.disabled ? "\n        border-color: " + f.default.color.background2 + ";\n        color: " + f.default.color.background2 + ";\n        " : void 0
	}, f.default.media.second), t.MenuContentItemIcon = c.default.div(l, function(e) {
		return e.transform || "auto"
	}), t.MenuContentItemText = c.default.div(s, function(e) {
		return e.color || "inherit"
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = P(["\n    position: absolute;\n    top: 10px;\n    right: 15px;\n    color: styles.color.grey1;\n    cursor: pointer;\n    &:hover {\n        opacity: 0.6;\n    }\n"], ["\n    position: absolute;\n    top: 10px;\n    right: 15px;\n    color: styles.color.grey1;\n    cursor: pointer;\n    &:hover {\n        opacity: 0.6;\n    }\n"]),
		a = P(["\n    width: 30px;\n    float: left;\n    padding-top: 11px;\n    padding-right: 10px;\n    & > img {\n        width: 30px;\n        height: 30px;\n    }\n    ", " {\n        padding-top: 7px;\n        padding-right: 5px;\n        & > img {\n            width: 25px;\n            height: 25px;\n        }\n    }\n    ", " {\n        display: none;\n    }\n"], ["\n    width: 30px;\n    float: left;\n    padding-top: 11px;\n    padding-right: 10px;\n    & > img {\n        width: 30px;\n        height: 30px;\n    }\n    ", " {\n        padding-top: 7px;\n        padding-right: 5px;\n        & > img {\n            width: 25px;\n            height: 25px;\n        }\n    }\n    ", " {\n        display: none;\n    }\n"]),
		i = P(["\n    width: 60%;\n    float: left;\n    ", " {\n        width: 100%;\n    }\n"], ["\n    width: 60%;\n    float: left;\n    ", " {\n        width: 100%;\n    }\n"]),
		l = P(["\n    text-align: right;\n    padding-top: 10px;\n    float: right;\n    ", " {\n        float: left;\n        padding-top: 0;\n        width: 100%;\n        text-align: left;\n        padding-left: 2px;\n    }\n"], ["\n    text-align: right;\n    padding-top: 10px;\n    float: right;\n    ", " {\n        float: left;\n        padding-top: 0;\n        width: 100%;\n        text-align: left;\n        padding-left: 2px;\n    }\n"]),
		s = P(["\n    color: ", ";\n    font-size: 23px;\n    font-weight: 900;\n    margin: 0;\n    line-height: 35px;\n\n    ", " {\n        font-size: 19px;\n        line-height: 23px;\n    }\n    ", " {\n        display: none;\n    }\n"], ["\n    color: ", ";\n    font-size: 23px;\n    font-weight: 900;\n    margin: 0;\n    line-height: 35px;\n\n    ", " {\n        font-size: 19px;\n        line-height: 23px;\n    }\n    ", " {\n        display: none;\n    }\n"]),
		d = P(["\n    font-weight: bold;\n    text-decoration: underline;\n    cursor: pointer;\n    &:hover {\n        color: ", ";\n        svg {\n            display: inline;\n        }\n    }\n    svg {\n        display: none;\n        position: relative;\n        top: -2px;\n    }\n"], ["\n    font-weight: bold;\n    text-decoration: underline;\n    cursor: pointer;\n    &:hover {\n        color: ", ";\n        svg {\n            display: inline;\n        }\n    }\n    svg {\n        display: none;\n        position: relative;\n        top: -2px;\n    }\n"]),
		u = n(0),
		c = O(u),
		f = O(n(1)),
		p = n(7),
		h = n(11),
		m = n(16),
		b = n(9),
		v = (n(37), n(10)),
		g = O(n(2)),
		w = O(n(8)),
		y = O(n(14)),
		x = O(n(417)),
		_ = (O(n(36)), O(n(39))),
		E = (O(n(202)), n(28)),
		k = O(n(418)),
		C = O(n(419));

	function O(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function P(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var S = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, u.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this,
					t = (0, h.getParamsFromLocation)().asset_id;
				this.asset_id = t, this.changedLabel = !1, this.asset = (0, h.getAsset)(this.asset_id), this.Coin = b.Coins[this.asset.symbol], this.observer = (0, p.createObserver)(function(t) {
					if ("pathname" === t[0].prop) {
						var n = (0, h.getParamsFromLocation)().asset_id;
						e.asset_id = n, e.asset = (0, h.getAsset)(e.asset_id), e.unobserveLabel && e.unobserve(), e.observe()
					}
					e.forceUpdate()
				}), this.observer.observe(w.default.location, "pathname"), this.observer.observe(w.default.prices, this.asset.symbol), void 0 !== this.asset && this.observe(), this.onChangeLabel = this.onChangeLabel.bind(this), this.onBlur = this.onBlur.bind(this), this.onChangeRoute = this.onChangeRoute.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "observe",
			value: function() {
				this.unobserveLabel = this.observer.observe(this.asset, "label"), this.unobserveBalance = this.observer.observe(this.asset, "balance"), this.unobserveAddress = this.observer.observe(this.asset, "address")
			}
		}, {
			key: "unobserve",
			value: function() {
				this.unobserveLabel(), this.unobserveBalance(), this.unobserveAddress()
			}
		}, {
			key: "onChangeLabel",
			value: function(e) {
				void 0 !== this.asset && (this.changedLabel = !0, (0, m.setAssetLabel)(this.asset_id, e.target.value.trim()))
			}
		}, {
			key: "onBlur",
			value: function(e) {
				this.changedLabel && (this.changedLabel = !1, (0, m.saveAssetsLocalstorage)(), (0, m.setAssetsExported)(!1))
			}
		}, {
			key: "onChangeRoute",
			value: function(e) {
				(0, m.setHref)(e((0, h.getParamsFromLocation)()))
			}
		}, {
			key: "render",
			value: function() {
				return c.default.createElement(T, {
					is_seed: (0, h.isAssetWithSeed)(this.asset_id),
					address: this.Coin.formatAddress(this.asset.address),
					label: this.asset ? this.asset.label : "",
					symbol: this.asset.symbol,
					logo: b.Coins[this.asset.symbol].logo,
					balance_asset: this.asset.balance,
					balance_currency: (0, h.formatCurrency)((0, h.convertBalance)(this.asset.symbol, this.asset.balance)),
					onChangeLabel: this.onChangeLabel,
					onBlur: this.onBlur,
					onChangeRoute: this.onChangeRoute
				})
			}
		}]), t
	}();

	function T(e) {
		var t = e.is_seed,
			n = e.address,
			r = e.label,
			o = e.symbol,
			a = e.logo,
			i = e.balance_asset,
			l = e.balance_currency,
			s = e.onChangeLabel,
			d = e.onBlur,
			u = e.onChangeRoute;
		return c.default.createElement(E.RightHeader, null, c.default.createElement(j, {
			onClick: function() {
				return u(v.routes.assetSettings)
			}
		}, c.default.createElement(k.default, {
			size: 18,
			color: g.default.color.grey1
		})), c.default.createElement(F, null, c.default.createElement("img", {
			src: a
		})), c.default.createElement(A, null, c.default.createElement(x.default, {
			type: "text",
			value: r,
			onChange: s,
			onBlur: d,
			width: "100%",
			placeholder: "Type a label..."
		}), c.default.createElement(y.default, {
			"padding-left": "2px"
		}, c.default.createElement(_.default, null, t ? c.default.createElement(M, {
			onClick: function() {
				return u(v.routes.assetAddresses)
			}
		}, c.default.createElement("span", null, n), c.default.createElement(C.default, {
			size: 15,
			color: g.default.color.grey1
		})) : c.default.createElement("strong", null, n)))), c.default.createElement(R, null, c.default.createElement(z, null, l), c.default.createElement(_.default, null, i, " ", o)), c.default.createElement(y.default, {
			clear: "both"
		}))
	}
	t.default = S;
	var j = f.default.div(o),
		F = f.default.div(a, g.default.media.first, g.default.media.second),
		A = f.default.div(i, g.default.media.fourth),
		R = f.default.div(l, g.default.media.fourth),
		z = f.default.div(s, g.default.color.black, g.default.media.first, g.default.media.fourth),
		M = f.default.a(d, g.default.color.background2)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\nwidth: ", ";\ncolor: ", ";\nfont-size: 35px;\nheight: 43px;\nfont-weight: 900;\nmargin: 0;\nborder:0;\nfont-family: inherit;\noutline: none;\nborder-radius: 2px;\n", " {\n    font-size: 27px;\n    height: 31px;\n}   \n:hover, :focus {\n    background-color: ", ";\n}\n::-webkit-input-placeholder { /* Chrome */\n    color: rgba(90,97,104,.2);\n  }\n:-ms-input-placeholder { /* IE 10+ */\ncolor: rgba(90,97,104,.2);\n}\n::-moz-placeholder { /* Firefox 19+ */\ncolor: rgba(90,97,104,.2);\nopacity: 1;\n}\n:-moz-placeholder { /* Firefox 4 - 18 */\ncolor: rgba(90,97,104,.2);\nopacity: 1;\n}\n"], o = ["\nwidth: ", ";\ncolor: ", ";\nfont-size: 35px;\nheight: 43px;\nfont-weight: 900;\nmargin: 0;\nborder:0;\nfont-family: inherit;\noutline: none;\nborder-radius: 2px;\n", " {\n    font-size: 27px;\n    height: 31px;\n}   \n:hover, :focus {\n    background-color: ", ";\n}\n::-webkit-input-placeholder { /* Chrome */\n    color: rgba(90,97,104,.2);\n  }\n:-ms-input-placeholder { /* IE 10+ */\ncolor: rgba(90,97,104,.2);\n}\n::-moz-placeholder { /* Firefox 19+ */\ncolor: rgba(90,97,104,.2);\nopacity: 1;\n}\n:-moz-placeholder { /* Firefox 4 - 18 */\ncolor: rgba(90,97,104,.2);\nopacity: 1;\n}\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		i = s(n(1)),
		l = s(n(2));

	function s(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = i.default.input(a, function(e) {
		return e.width || "auto"
	}, l.default.color.black, l.default.media.first, l.default.color.background1)
}, , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = R(["\n    color: #6bba39;\n"], ["\n    color: #6bba39;\n"]),
		a = R(["\n    color: #e34444;\n"], ["\n    color: #e34444;\n"]),
		i = n(0),
		l = A(i),
		s = A(n(1)),
		d = n(7),
		u = n(10),
		c = (A(n(2)), n(37), n(82)),
		f = n(9),
		p = (n(18), n(187)),
		h = n(27),
		m = n(40),
		b = A(n(8)),
		v = n(11),
		g = A(n(421)),
		w = A(n(197)),
		y = A(n(422)),
		x = A(n(423)),
		_ = A(n(424)),
		E = A(n(203)),
		k = A(n(14)),
		C = A(n(26)),
		O = A(n(110)),
		P = A(n(32)),
		S = n(425),
		T = A(n(59)),
		j = A(n(60)),
		F = (A(n(202)), n(426));

	function A(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function R(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var z = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, i.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observerPath = (0, d.createObserver)(function(t) {
					e.observer.destroy(), e.observeAll(), e.forceUpdate()
				}), this.observerPath.observe(b.default.location, "pathname"), this.refAddress = this.refAddress.bind(this), this.rescanOrLoad = this.rescanOrLoad.bind(this), this.onCopy = this.onCopy.bind(this), this.onPrint = this.onPrint.bind(this), this.observeAll()
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observerPath.destroy(), this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "observeAll",
			value: function() {
				var e = this,
					t = (0, v.getParamsFromLocation)().asset_id;
				t !== this.asset_id && (this.asset_id = t, this.asset = (0, v.getAsset)(this.asset_id), this.Coin = f.Coins[this.asset.symbol], this.observer = (0, d.createObserver)(function(t) {
					e.forceUpdate()
				}), this.observer.observe(this.asset.summary))
			}
		}, {
			key: "refAddress",
			value: function(e) {
				e && (this.addressElement = e.base)
			}
		}, {
			key: "onCopy",
			value: function(e) {
				(0, h.selectContentElement)(this.addressElement), (0, h.copyContentSelected)()
			}
		}, {
			key: "onPrint",
			value: function(e) {
				var t = this.Coin.formatAddress(this.asset.address);
				(0, h.printTemplate)((0, c.PrivateKey)([{
					title: "Address",
					img: (0, m.generateQRCode)(t),
					hash: t,
					description: "Share this address to receive funds."
				}]))
			}
		}, {
			key: "rescanOrLoad",
			value: function() {
				var e = this,
					t = (0, v.getParamsFromLocation)().asset_id,
					n = (this.asset.summary.totalTxs || 0) === (this.asset.summary.txs || []).length ? 0 : this.asset.summary.txs.length,
					r = this.asset.summary.txs.length - n;
				this.asset.summary.fetching = !0, this.Coin.fetchTxs((0, v.getAddresses)(t), n).then(function(t) {
					e.asset.summary.totalTxs = t.totalTxs, e.asset.summary.txs = e.asset.summary.txs.slice(r).concat(t.txs), e.asset.summary.fetching = !1
				})
			}
		}, {
			key: "render",
			value: function() {
				var e = this.Coin.formatAddress(this.asset.address);
				return l.default.createElement(M, {
					symbol: this.asset.symbol,
					totalTxs: this.asset.summary.totalTxs || 0,
					txs: this.asset.summary.txs || [],
					fetchingSummary: this.asset.summary.fetching,
					rescanOrLoad: this.rescanOrLoad,
					address: e,
					qrcodebase64: (0, m.generateQRCode)(e),
					refAddress: this.refAddress,
					colorAsset: this.Coin.color,
					urlInfo: this.Coin.urlInfo(e),
					urlInfoTx: this.Coin.urlInfoTx,
					onCopy: this.onCopy,
					onPrint: this.onPrint,
					mailTo: "mailto:?subject=My " + this.Coin.name + " Address&body=My " + this.Coin.name + " address is: " + e
				})
			}
		}]), t
	}();

	function M(e) {
		var t = e.symbol,
			n = e.totalTxs,
			r = e.txs,
			o = e.fetchingSummary,
			a = e.rescanOrLoad,
			i = e.address,
			s = e.qrcodebase64,
			d = e.refAddress,
			c = e.colorAsset,
			f = e.urlInfo,
			m = e.urlInfoTx,
			b = e.onCopy,
			v = e.onPrint,
			A = e.mailTo;
		return l.default.createElement("div", null, l.default.createElement("div", null, l.default.createElement(k.default, {
			"padding-bottom": "15px"
		}, l.default.createElement(T.default, null, l.default.createElement("img", {
			width: "150",
			src: s
		}))), l.default.createElement(k.default, {
			"padding-bottom": "20px"
		}, l.default.createElement(j.default, {
			ref: d
		}, i)), l.default.createElement(k.default, null, l.default.createElement(P.default, null, l.default.createElement(S.CircleButtons, null, l.default.createElement(S.CircleButton, {
			color: c,
			onClick: b
		}, l.default.createElement(g.default, {
			size: 25,
			color: "white"
		}), l.default.createElement("div", {
			class: "hideOnActive"
		}, "Copy to Clipboard"), l.default.createElement("div", {
			class: "showOnActive"
		}, "Copied!")), l.default.createElement(S.CircleButton, {
			color: c,
			onClick: v
		}, l.default.createElement(w.default, {
			size: 25,
			color: "white"
		}), l.default.createElement("div", null, "Print this Address")), l.default.createElement(S.CircleButton, {
			color: c,
			href: A
		}, l.default.createElement(y.default, {
			size: 25,
			color: "white"
		}), l.default.createElement("div", null, "Email this Address")), l.default.createElement(S.CircleButton, {
			target: "_blank",
			color: c,
			href: f
		}, l.default.createElement(x.default, {
			size: 25,
			color: "white"
		}), l.default.createElement("div", null, "View on Blockchain")))))), l.default.createElement(u.Show, {
			if: 0 === n && !o
		}, l.default.createElement(k.default, {
			"padding-top": "50px",
			"padding-bottom": "50px"
		}, l.default.createElement(O.default, null, "No transactions found for this address"))), l.default.createElement(F.Transactions, null, r.map(function(e) {
			var n = (0, p.getMonthTextShort)(e.time),
				r = (0, p.getDay)(e.time),
				o = Number(e.value.toString()) > 0,
				a = o ? l.default.createElement(_.default, {
					size: 23,
					color: "white"
				}) : l.default.createElement(E.default, {
					size: 23,
					color: "white"
				}),
				i = o ? l.default.createElement(I, null, "+ ", e.value) : l.default.createElement(N, null, "- ", e.value.substr(1));
			return l.default.createElement(F.Transaction, null, l.default.createElement(F.TransactionInner, {
				onClick: function(t) {
					return (0, h.openUrl)(m(e.txid))
				}
			}, l.default.createElement(F.TransactionDate, null, l.default.createElement("div", null, n), r), l.default.createElement(F.TransactionIco, {
				color: c
			}, a), l.default.createElement(F.TransactionData, null, l.default.createElement(F.TransactionLabel, null, o ? "Received" : "Sent"), l.default.createElement(F.TransactionAmount, null, i, " ", t))))
		})), l.default.createElement(k.default, {
			clear: "both",
			"padding-top": "20px"
		}, l.default.createElement(C.default, {
			loading: o,
			onClick: a,
			loadingIco: "/static/image/loading.gif",
			margin: "0 auto"
		}, n === r.length ? "Rescan all transactions" : "Load more")))
	}
	t.default = z;
	var I = s.default.span(o),
		N = s.default.span(a)
}, , , , , function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.CircleButton = t.CircleButtons = void 0;
	var r = s(["\nheight: 100px;\n& > * {\n    float: left;\n    margin-right: 42px;\n}\n& > *:last-child {\n    margin-right: 0;\n}\n", " {\n    width: 222px;\n    margin: 0 auto;\n    & > * {\n        margin-right: 10px;\n    }\n}\n"], ["\nheight: 100px;\n& > * {\n    float: left;\n    margin-right: 42px;\n}\n& > *:last-child {\n    margin-right: 0;\n}\n", " {\n    width: 222px;\n    margin: 0 auto;\n    & > * {\n        margin-right: 10px;\n    }\n}\n"]),
		o = s(["\ncursor: pointer;\ndisplay: block;\nwidth: 50px;\nheight: 50px;\nborder: 4px solid ", ";\nbox-shadow: 0 0 0px 1px #fff inset;\nbackground: ", ";\nborder-radius: 50%;\ntext-align: center;\nline-height: 45px;\ntransition: 0.5s ease all;\nposition: relative;\ntext-decoration: none;\n", " {\n    width: 40px;\n    height: 40px;\n    line-height: 35px;\n    & > svg {\n        width: 18px;\n        height: 18px;\n    }\n}\n& > div {\n    width: 100%;\n    display: none;\n    font-size: 11px;\n    line-height: 15px;\n    padding-top: 15px;\n    color: ", ";\n}\n&:hover {\n    transition: 0.5s ease all;\n    background-color: ", ";\n    border-color: ", ";\n    box-shadow: 0 0 0px 100px rgba(255, 255, 255, 0) inset;\n}\n&:active {\n    transition: 0s;\n    box-shadow: 0 0 0px 1px #fff inset;\n}\n&:hover > div {\n    display: block;\n}\n\n& .hideOnActive {\n    opacity: 1;\n}\n&:active .hideOnActive {\n    opacity: 0;\n    transition: 5s ease all;\n}\n\n& .showOnActive {\n    padding-top: 5px;\n    opacity: 0;\n    display: none;\n    color: #44bb11;\n    font-size: 13px;\n    transition: 3s ease all;\n}\n&:active .showOnActive {\n    display: block;\n    transition: unset;\n    opacity: 1;\n}\n"], ["\ncursor: pointer;\ndisplay: block;\nwidth: 50px;\nheight: 50px;\nborder: 4px solid ", ";\nbox-shadow: 0 0 0px 1px #fff inset;\nbackground: ", ";\nborder-radius: 50%;\ntext-align: center;\nline-height: 45px;\ntransition: 0.5s ease all;\nposition: relative;\ntext-decoration: none;\n", " {\n    width: 40px;\n    height: 40px;\n    line-height: 35px;\n    & > svg {\n        width: 18px;\n        height: 18px;\n    }\n}\n& > div {\n    width: 100%;\n    display: none;\n    font-size: 11px;\n    line-height: 15px;\n    padding-top: 15px;\n    color: ", ";\n}\n&:hover {\n    transition: 0.5s ease all;\n    background-color: ", ";\n    border-color: ", ";\n    box-shadow: 0 0 0px 100px rgba(255, 255, 255, 0) inset;\n}\n&:active {\n    transition: 0s;\n    box-shadow: 0 0 0px 1px #fff inset;\n}\n&:hover > div {\n    display: block;\n}\n\n& .hideOnActive {\n    opacity: 1;\n}\n&:active .hideOnActive {\n    opacity: 0;\n    transition: 5s ease all;\n}\n\n& .showOnActive {\n    padding-top: 5px;\n    opacity: 0;\n    display: none;\n    color: #44bb11;\n    font-size: 13px;\n    transition: 3s ease all;\n}\n&:active .showOnActive {\n    display: block;\n    transition: unset;\n    opacity: 1;\n}\n"]),
		a = (l(n(0)), l(n(1))),
		i = l(n(2));

	function l(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	t.CircleButtons = a.default.div(r, i.default.media.fourth), t.CircleButton = a.default.a(o, function(e) {
		return e.color
	}, function(e) {
		return e.color
	}, i.default.media.fourth, i.default.color.front2, i.default.color.front2, i.default.color.front2)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.TransactionDetailItemValue = t.TransactionDetailItemLabel = t.TransactionDetailItem = t.TransactionDetail = t.TransactionAmount = t.TransactionLabel = t.TransactionData = t.TransactionIco = t.TransactionDate = t.TransactionInner = t.Transaction = t.Transactions = void 0;
	var r = g(["\nclear: both;\n"], ["\nclear: both;\n"]),
		o = g(["\nclear: both;\ncolor: ", ";\nborder-radius: 5px;\nmargin-bottom: 10px;\n&:hover {\n    background-color: ", ";\n}\n"], ["\nclear: both;\ncolor: ", ";\nborder-radius: 5px;\nmargin-bottom: 10px;\n&:hover {\n    background-color: ", ";\n}\n"]),
		a = g(["\nheight: 45px;\ncursor: pointer;\n"], ["\nheight: 45px;\ncursor: pointer;\n"]),
		i = g(["\nfloat: left;\nfont-weight: bold;\nfont-size: 16px;\ntext-align: center;\npadding: 7px 20px 0 15px;\nline-height: 16px;\n& > div {\n    font-weight: 100;\n    font-size: 10px;\n    line-height: 14px;\n    text-transform: uppercase;\n}\n"], ["\nfloat: left;\nfont-weight: bold;\nfont-size: 16px;\ntext-align: center;\npadding: 7px 20px 0 15px;\nline-height: 16px;\n& > div {\n    font-weight: 100;\n    font-size: 10px;\n    line-height: 14px;\n    text-transform: uppercase;\n}\n"]),
		l = g(["\nfloat: left;\nwidth: 27px;\nheight: 27px;\nborder-radius: 50%;\nmargin-top: 9px;\nmargin-right: 15px;\nbackground:", ";\nline-height: 16px;\ntext-align: center;\n\n& > svg {\n    vertical-align: top !important;\n    width: 16px;\n    height: 16px;\n    padding-top: 6px;\n}\n"], ["\nfloat: left;\nwidth: 27px;\nheight: 27px;\nborder-radius: 50%;\nmargin-top: 9px;\nmargin-right: 15px;\nbackground:", ";\nline-height: 16px;\ntext-align: center;\n\n& > svg {\n    vertical-align: top !important;\n    width: 16px;\n    height: 16px;\n    padding-top: 6px;\n}\n"]),
		s = g(["\nfloat: left;\nwidth: calc(100% - 100px);\n"], ["\nfloat: left;\nwidth: calc(100% - 100px);\n"]),
		d = g(["\nfloat: left;\nline-height: 43px;\nfont-weight: bold;\ncolor: ", ";\nfont-size: 16px;\n", " {\n    float: none;\n    line-height: normal;\n    padding-top: 7px;\n    font-size: 14px;\n}        \n"], ["\nfloat: left;\nline-height: 43px;\nfont-weight: bold;\ncolor: ", ";\nfont-size: 16px;\n", " {\n    float: none;\n    line-height: normal;\n    padding-top: 7px;\n    font-size: 14px;\n}        \n"]),
		u = g(["\nfloat: right;\nline-height: 45px;\nfont-weight: bold;\npadding-right: 14px;\n", " {\n    float: none;\n    font-size: 10px;\n    line-height: normal;\n}\n"], ["\nfloat: right;\nline-height: 45px;\nfont-weight: bold;\npadding-right: 14px;\n", " {\n    float: none;\n    font-size: 10px;\n    line-height: normal;\n}\n"]),
		c = g(["\nclear: both;\nfont-size: 11px;\noverflow: hidden;\nheight: ", ";\n-webkit-transition: 0.25s ease all;\ntransition: 0.25s ease all;\n& > div {\n    padding: 0 0 15px 102px;\n}\n"], ["\nclear: both;\nfont-size: 11px;\noverflow: hidden;\nheight: ", ";\n-webkit-transition: 0.25s ease all;\ntransition: 0.25s ease all;\n& > div {\n    padding: 0 0 15px 102px;\n}\n"]),
		f = g(["\npadding-top: 15px;\ndisplay: inline-block;\nwidth: 33%;\n&:nth-child(-n + 3) {\n    padding-top: 0;\n}\n"], ["\npadding-top: 15px;\ndisplay: inline-block;\nwidth: 33%;\n&:nth-child(-n + 3) {\n    padding-top: 0;\n}\n"]),
		p = g(["color: ", ";"], ["color: ", ";"]),
		h = g([""], [""]),
		m = (v(n(0)), v(n(1))),
		b = v(n(2));

	function v(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function g(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	t.Transactions = m.default.div(r), t.Transaction = m.default.div(o, b.default.color.front3, b.default.color.background1), t.TransactionInner = m.default.div(a), t.TransactionDate = m.default.div(i), t.TransactionIco = m.default.div(l, function(e) {
		return e.color
	}), t.TransactionData = m.default.div(s), t.TransactionLabel = m.default.div(d, b.default.color.black, b.default.media.fourth), t.TransactionAmount = m.default.div(u, b.default.media.fourth), t.TransactionDetail = m.default.div(c, function(e) {
		return e.visible ? "45px" : 0
	}), t.TransactionDetailItem = m.default.div(f), t.TransactionDetailItemLabel = m.default.div(p, b.default.color.front2), t.TransactionDetailItemValue = m.default.div(h)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\ncolor: ", ";\nfont-weight: ", ";\n"], o = ["\ncolor: ", ";\nfont-weight: ", ";\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		}))),
		i = (l(n(0)), l(n(1)));

	function l(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	t.default = i.default.span(a, function(e) {
		return e.color || "inherit"
	}, function(e) {
		return e["font-weight"] || "inherit"
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = c(["\n    ", " \n    \n    border: 1px solid ", ";\n    background: #fff;\n    font-weight: 500;\n    font-size: 14px;\n    color: ", ";\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05) inset;\n    text-align: ", ";\n\n    & > div {\n        position: relative;\n    }\n    & div:first-child input {\n        border-bottom: 2px solid ", ";\n    }\n"], ["\n    ", " \n    \n    border: 1px solid ", ";\n    background: #fff;\n    font-weight: 500;\n    font-size: 14px;\n    color: ", ";\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05) inset;\n    text-align: ", ";\n\n    & > div {\n        position: relative;\n    }\n    & div:first-child input {\n        border-bottom: 2px solid ", ";\n    }\n"]),
		o = c(["\n    box-sizing: border-box;\n    color: ", ";\n    border: 0;\n    margin: 0;\n    width: 100%;\n    line-height: 34px;\n    font-weight: bold;\n    font-size: 16px;\n    padding: 0 38px 0 10px;\n    background: transparent;\n"], ["\n    box-sizing: border-box;\n    color: ", ";\n    border: 0;\n    margin: 0;\n    width: 100%;\n    line-height: 34px;\n    font-weight: bold;\n    font-size: 16px;\n    padding: 0 38px 0 10px;\n    background: transparent;\n"]),
		a = c(["\n    position: absolute;\n    line-height: 34px;\n    font-weight: bold;\n    font-size: 12px;\n    right: 10px;\n    top: 0;\n    color: ", ";\n"], ["\n    position: absolute;\n    line-height: 34px;\n    font-weight: bold;\n    font-size: 12px;\n    right: 10px;\n    top: 0;\n    color: ", ";\n"]),
		i = c(["\n    font-size: 10px;\n    text-align: right;\n    color: ", ";\n    font-weight: bold;\n    letter-spacing: 0.3px;\n"], ["\n    font-size: 10px;\n    text-align: right;\n    color: ", ";\n    font-weight: bold;\n    letter-spacing: 0.3px;\n"]);
	t.default = function(e) {
		var t = e.invalid && e.error ? l.default.createElement(m, null, e.error) : null;
		return l.default.createElement("div", null, l.default.createElement(f, {
			invalid: e.invalid
		}, l.default.createElement("div", null, l.default.createElement(p, {
			type: "text",
			onChange: e.onChange1,
			color: e.color1,
			value: e.value1
		}), l.default.createElement(h, {
			color: e.color1
		}, e.label1)), l.default.createElement("div", null, l.default.createElement(p, {
			type: "text",
			onChange: e.onChange2,
			color: e.color2,
			value: e.value2
		}), l.default.createElement(h, {
			color: e.color2
		}, e.label2))), t)
	};
	var l = u(n(0)),
		s = u(n(1)),
		d = u(n(2));

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function c(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var f = s.default.div(r, function(e) {
			if (e.width) return "width:" + e.width + ";"
		}, function(e) {
			return e.invalid ? d.default.color.error + " !important" : d.default.color.background4
		}, d.default.color.front6, function(e) {
			return e["text-align"] ? e["text-align"] : "left"
		}, d.default.color.background1),
		p = s.default.input(o, function(e) {
			return e.color || d.default.color.front6
		}),
		h = s.default.div(a, function(e) {
			return e.color
		}),
		m = s.default.div(i, d.default.color.error)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Total = t.TransactionItemRight = t.TransactionItemLeft = t.TransactionItemRadio = t.TransactionInner = t.Transaction = t.Transactions = void 0;
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = P(["\n    clear: both;\n"], ["\n    clear: both;\n"]),
		a = P(["\n    clear: both;\n    color: ", ";\n    border-radius: 5px;\n    margin-bottom: 10px;\n    background-color: ", ";\n"], ["\n    clear: both;\n    color: ", ";\n    border-radius: 5px;\n    margin-bottom: 10px;\n    background-color: ", ";\n"]),
		i = P(["\n    min-height: 46px;\n    padding: 0 12px 0 12px;\n"], ["\n    min-height: 46px;\n    padding: 0 12px 0 12px;\n"]),
		l = P(["\n    float: left;\n    margin-right: 10px;\n    padding-left: 5px;\n    padding-top: 13px;\n"], ["\n    float: left;\n    margin-right: 10px;\n    padding-left: 5px;\n    padding-top: 13px;\n"]),
		s = P(["\n    float: left;\n    font-weight: bold;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 85%;\n    padding-top: 12px;\n    cursor: text;\n    user-select: text;\n    ", " {\n        float: none;\n        padding-top: 4px;\n        font-size: 14px;\n    }\n"], ["\n    float: left;\n    font-weight: bold;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 85%;\n    padding-top: 12px;\n    cursor: text;\n    user-select: text;\n    ", " {\n        float: none;\n        padding-top: 4px;\n        font-size: 14px;\n    }\n"]),
		d = P(["\n    float: right;\n    font-weight: bold;\n    padding-top: 12px;\n\n    ", " {\n        float: none;\n        padding-top: 0;\n        font-size: 12px;\n        margin-left: 35px;\n    }\n"], ["\n    float: right;\n    font-weight: bold;\n    padding-top: 12px;\n\n    ", " {\n        float: none;\n        padding-top: 0;\n        font-size: 12px;\n        margin-left: 35px;\n    }\n"]),
		u = P(["\n    border-top: 2px solid #f3f6f8;\n    color: #007196;\n    font-weight: 900;\n    text-align: right;\n    padding: 12px;\n    font-size: 16px;\n"], ["\n    border-top: 2px solid #f3f6f8;\n    color: #007196;\n    font-weight: 900;\n    text-align: right;\n    padding: 12px;\n    font-size: 16px;\n"]),
		c = n(0),
		f = O(c),
		p = O(n(1)),
		h = n(7),
		m = n(9),
		b = n(18),
		v = n(10),
		g = O(n(2)),
		w = O(n(8)),
		y = n(11),
		x = n(16),
		_ = O(n(14)),
		E = O(n(58)),
		k = O(n(111)),
		C = O(n(23));

	function O(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function P(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var S = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, c.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this,
					t = (0, y.getParamsFromLocation)().asset_id;
				this.asset_id = t, this.asset = (0, y.getAsset)(t), this.Coin = m.Coins[this.asset.symbol];
				var n = this.asset.addresses;
				w.default.view = {
					password: "",
					invalid_password: !1,
					addresses: n.map(this.formatModelAddress)
				}, this.observer = (0, h.createObserver)(function(t) {
					return e.forceUpdate()
				}), n.forEach(function(t, n) {
					e.observer.observe(w.default.view.addresses[n])
				}), this.observer.observe(w.default.view), this.observer.observe(w.default.view.addresses), this.observer.observe(this.asset, "address"), this.fetchBalances(), this.onChangeAddress = this.onChangeAddress.bind(this), this.onChangePassword = this.onChangePassword.bind(this), this.onAddAddress = this.onAddAddress.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "formatModelAddress",
			value: function(e) {
				return {
					address: e,
					balance: 0,
					loading: !0
				}
			}
		}, {
			key: "fetchBalances",
			value: function() {
				var e = this,
					t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					n = w.default.view.addresses,
					r = n[t];
				r.loading = !0, this.Coin.fetchBalance(r.address).then(function(o) {
					var a = (0, h.collect)();
					r.loading = !1, r.balance = o, a.emit(), t + 1 < n.length && e.fetchBalances(t + 1)
				})
			}
		}, {
			key: "onChangeAddress",
			value: function(e) {
				this.asset.address !== e && (0, x.changeAddress)((0, y.getAssetId)(this.asset), e)
			}
		}, {
			key: "onChangePassword",
			value: function(e) {
				var t = (0, h.collect)();
				w.default.view.password = e.target.value, w.default.view.invalid_password = !1, t.emit()
			}
		}, {
			key: "onAddAddress",
			value: function() {
				var e = (0, h.collect)(),
					t = this.asset,
					n = this.Coin.getNextWalletFromSeed(t.addresses[t.addresses.length - 1], t.addresses, t.seed, w.default.view.password);
				if (n) {
					var r = n.address;
					w.default.view.addresses.push(this.formatModelAddress(r)), (0, x.addAddress)(this.asset_id, r);
					var o = w.default.view.addresses.length - 1;
					this.observer.observe(w.default.view.addresses[o]), this.fetchBalances(o)
				} else w.default.view.invalid_password = !0;
				e.emit()
			}
		}, {
			key: "render",
			value: function() {
				var e = w.default.view.addresses,
					t = e.reduce(function(e, t) {
						return e.add(t.balance)
					}, (0, b.bigNumber)(0));
				return f.default.createElement(T, {
					Coin: this.Coin,
					address_current: this.asset.address,
					addresses: e,
					symbol: this.asset.symbol,
					total: t,
					password: w.default.view.password,
					invalid_password: w.default.view.invalid_password,
					onChangeAddress: this.onChangeAddress,
					onChangePassword: this.onChangePassword,
					onAddAddress: this.onAddAddress
				})
			}
		}]), t
	}();

	function T(e) {
		var t = e.Coin,
			n = e.address_current,
			r = e.addresses,
			o = e.symbol,
			a = e.total,
			i = e.password,
			l = e.invalid_password,
			s = e.onChangeAddress,
			d = e.onChangePassword,
			u = e.onAddAddress,
			c = f.default.createElement("img", {
				src: "/static/image/loading.gif",
				width: "22",
				height: "22"
			});
		return f.default.createElement(_.default, null, f.default.createElement(j, null, r.map(function(e) {
			var r = t.multiaddress || !t.multiaddress && n === e.address;
			return f.default.createElement(F, {
				selected: r
			}, f.default.createElement(A, null, f.default.createElement(v.Show, {
				if: !t.multiaddress
			}, f.default.createElement(R, null, f.default.createElement(k.default, {
				onClick: function(t) {
					return s(e.address)
				},
				checked: r
			}))), f.default.createElement(z, null, t.formatAddress(e.address)), f.default.createElement(M, null, e.loading ? c : e.balance + " " + o)))
		})), f.default.createElement(I, null, a, " ", o), f.default.createElement(_.default, {
			"padding-top": "30px"
		}, f.default.createElement(C.default, {
			type: "password",
			placeholder: "Password of this asset",
			value: i,
			invalid: l,
			error: "Invalid password",
			width: "100%",
			"text-align": "center",
			onChange: d
		})), f.default.createElement(_.default, {
			"padding-top": "10px"
		}, f.default.createElement(E.default, {
			onClick: u,
			loading: !1,
			loadingIco: "/static/image/loading.gif",
			disabled: 0 === i.length || l || r.some(function(e) {
				return e.loading
			})
		}, "Add Another Address")))
	}
	t.default = S;
	var j = t.Transactions = p.default.div(o),
		F = t.Transaction = p.default.div(a, function(e) {
			return e.selected ? "black" : g.default.color.front3
		}, function(e) {
			return e.selected ? g.default.color.background1 : "transparent"
		}),
		A = t.TransactionInner = p.default.div(i),
		R = t.TransactionItemRadio = p.default.div(l),
		z = t.TransactionItemLeft = p.default.div(s, g.default.media.fourth),
		M = t.TransactionItemRight = p.default.div(d, g.default.media.fourth),
		I = t.Total = p.default.div(u)
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = _(o),
		i = n(7),
		l = (_(n(1)), n(9)),
		s = n(40),
		d = n(57),
		u = n(27),
		c = _(n(8)),
		f = n(11),
		p = n(10),
		h = _(n(2)),
		m = _(n(14)),
		b = _(n(26)),
		v = _(n(23)),
		g = _(n(31)),
		w = (_(n(32)), n(22)),
		y = n(21),
		x = n(82);

	function _(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var E = {
			seed: "seed",
			wif: "wif",
			bip: "bip"
		},
		k = function(e) {
			function t() {
				return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t),
					function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}(t, o.Component), r(t, [{
				key: "componentWillMount",
				value: function() {
					var e = this;
					this.observer = (0, i.createObserver)(function(t) {
						return e.forceUpdate()
					}), this.observer.observe(c.default.view);
					var t = (0, f.getParamsFromLocation)().asset_id;
					this.asset_id = t, this.is_asset_with_seed = (0, f.isAssetWithSeed)(this.asset_id), this.asset = (0, f.getAsset)(this.asset_id), this.Coin = l.Coins[this.asset.symbol], c.default.view = {
						type_export: this.is_asset_with_seed ? E.seed : E.wif,
						loading: !1,
						address_selected: this.asset.addresses[this.asset.addresses.length - 1],
						password: "",
						invalid_password: !1
					}, this.onChangeTypeExport = this.onChangeTypeExport.bind(this), this.onChangeAddress = this.onChangeAddress.bind(this), this.onChangePassword = this.onChangePassword.bind(this), this.onExport = this.onExport.bind(this)
				}
			}, {
				key: "componentWillUnmount",
				value: function() {
					this.observer.destroy()
				}
			}, {
				key: "shouldComponentUpdate",
				value: function() {
					return !1
				}
			}, {
				key: "onChangeTypeExport",
				value: function(e) {
					c.default.view.type_export = e.target.value
				}
			}, {
				key: "onChangeAddress",
				value: function(e) {
					c.default.view.address_selected = e.target.value
				}
			}, {
				key: "onChangePassword",
				value: function(e) {
					var t = (0, i.collect)();
					c.default.view.password = e.target.value, c.default.view.invalid_password = !1, t.emit()
				}
			}, {
				key: "onExport",
				value: function(e) {
					e.preventDefault();
					var t = c.default.view.type_export,
						n = this.asset_id,
						r = ((0, f.getAsset)(n), this.Coin.formatAddress(c.default.view.address_selected)),
						o = c.default.view.password;
					if (t === E.seed) {
						var a = (0, f.getSeed)(n, o);
						a ? (0, u.printTemplate)((0, x.Words)(a)) : c.default.view.invalid_password = !0
					} else {
						var i = (0, f.getPrivateKey)(n, o, r);
						i ? (c.default.view.loading = !0, setTimeout(function() {
							var e = t === E.bip,
								n = i;
							e && (n = (0, d.encryptBIP38)(n, o));
							var a = [{
								img: (0, s.generateQRCode)(r),
								hash: r,
								title: "Address",
								description: "You can share this address to receive funds."
							}, {
								img: (0, s.generateQRCode)(n, void 0, e ? "black" : h.default.color.red3),
								hash: n,
								red: !e,
								title: "Private Key",
								description: "This CAN NOT BE SHARED. If you share this you will lose your funds. " + (e ? "Encrypted (BIP38)" : "Unencrypted (WIF)")
							}];
							(0, u.printTemplate)((0, x.PrivateKey)(a)), c.default.view.loading = !1
						}, 0)) : c.default.view.invalid_password = !0
					}
				}
			}, {
				key: "render",
				value: function() {
					return a.default.createElement(C, {
						type_export: c.default.view.type_export,
						is_asset_with_seed: this.is_asset_with_seed,
						addresses: this.asset.addresses,
						address_selected: c.default.view.address_selected,
						password: c.default.view.password,
						invalid_password: c.default.view.invalid_password,
						loading: c.default.view.loading,
						onChangeTypeExport: this.onChangeTypeExport,
						onChangeAddress: this.onChangeAddress,
						onChangePassword: this.onChangePassword,
						onExport: this.onExport
					})
				}
			}]), t
		}();

	function C(e) {
		var t = e.loading,
			n = e.type_export,
			r = e.addresses,
			o = e.address_selected,
			i = e.is_asset_with_seed,
			l = e.password,
			s = e.invalid_password,
			d = e.onChangeTypeExport,
			u = e.onChangeAddress,
			c = e.onChangePassword,
			f = e.onExport;
		return a.default.createElement(m.default, null, a.default.createElement("form", null, a.default.createElement(w.FormField, null, a.default.createElement(w.FormFieldLeft, null, a.default.createElement(y.Label, null, "Format"), a.default.createElement(p.Show, {
			if: n === E.bip
		}, a.default.createElement(y.SubLabel, null, "You have to remember your current password in order to import this asset in the future."))), a.default.createElement(w.FormFieldRight, null, a.default.createElement(g.default, {
			width: "100%",
			onChange: d
		}, a.default.createElement("option", {
			disabled: !i,
			value: E.seed,
			selected: n === E.seed
		}, "Recovery Phrase (12 words)"), a.default.createElement("option", {
			value: E.wif,
			selected: n === E.wif
		}, "Private Key Unencrypted (WIF)"), a.default.createElement("option", {
			value: E.bip,
			selected: n === E.bip
		}, "Private Key Encrypted (BIP38)")))), a.default.createElement(p.Show, {
			if: i && (n === E.wif || n === E.bip)
		}, a.default.createElement(w.FormField, null, a.default.createElement(w.FormFieldLeft, null, a.default.createElement(y.Label, null, "Address")), a.default.createElement(w.FormFieldRight, null, a.default.createElement(g.default, {
			width: "100%",
			onChange: u
		}, r.map(function(e) {
			return a.default.createElement("option", {
				selected: e === o
			}, e)
		}))))), a.default.createElement(w.FormField, null, a.default.createElement(w.FormFieldLeft, null, a.default.createElement(y.Label, null, "Password"), a.default.createElement(y.SubLabel, null, "Password of this wallet.")), a.default.createElement(w.FormFieldRight, null, a.default.createElement(v.default, {
			width: "100%",
			value: l,
			onChange: c,
			type: "password",
			error: "Invalid password",
			invalid: s
		}))), a.default.createElement(w.FormField, null, a.default.createElement(w.FormFieldButtons, null, a.default.createElement(b.default, {
			onClick: f,
			loading: t,
			loadingIco: "/static/image/loading.gif"
		}, "Unlock and Print"), a.default.createElement(p.Show, {
			if: t && n === E.bip
		}, a.default.createElement(m.default, {
			"font-size": "10px",
			color: h.default.color.red
		}, "This might take several minutes", a.default.createElement("br", null), "and can freeze your browser"))))))
	}
	t.default = k
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = E(o),
		i = (E(n(1)), n(7)),
		l = n(10),
		s = (E(n(2)), n(4)),
		d = n(9),
		u = E(n(8)),
		c = n(16),
		f = n(11),
		p = E(n(195)),
		h = E(n(14)),
		m = E(n(26)),
		b = E(n(48)),
		v = E(n(23)),
		g = E(n(67)),
		w = n(21),
		y = n(22),
		x = E(n(32)),
		_ = E(n(432));

	function E(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var k = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, o.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this,
					t = (0, f.getParamsFromLocation)().asset_id;
				this.asset_id = t, this.asset = (0, f.getAsset)(t), this.Coin = d.Coins[this.asset.symbol], this.observer = (0, i.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(u.default.view), u.default.view = {
					oldpassword: "",
					password: "",
					repassword: "",
					isInvalidOldpassword: !1,
					confirmed: !1
				}, this.onChangeOldpassword = this.onChangeOldpassword.bind(this), this.onChangePassword = this.onChangePassword.bind(this), this.onChangeRepassword = this.onChangeRepassword.bind(this), this.onChangeSubmit = this.onChangeSubmit.bind(this), this.onDeleteConfirm = this.onDeleteConfirm.bind(this), this.onDeleteSubmit = this.onDeleteSubmit.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "onChangeOldpassword",
			value: function(e) {
				var t = (0, i.collect)();
				u.default.view.isInvalidOldpassword = !1, u.default.view.oldpassword = e.target.value, t.emit()
			}
		}, {
			key: "onChangePassword",
			value: function(e) {
				u.default.view.password = e.target.value
			}
		}, {
			key: "onChangeRepassword",
			value: function(e) {
				u.default.view.repassword = e.target.value
			}
		}, {
			key: "onChangeSubmit",
			value: function(e) {
				e.preventDefault();
				var t = (0, i.collect)(),
					n = this.asset_id,
					r = this.asset,
					o = this.Coin,
					a = r.address,
					d = r.addresses,
					p = u.default.view.oldpassword,
					h = u.default.view.password,
					m = (0, f.isAssetWithSeed)(n),
					b = m ? o.decryptSeed(d, r.seed, p) : o.decryptPrivateKey(a, r.private_key, p);
				if (b) {
					r.label || r.address;
					m ? (0, c.setSeed)(n, b, h) : (0, c.setPrivateKey)(n, b, h), (0, c.addNotification)("You have changed the password of this asset", s.OK), (0, c.setHref)(l.routes.asset({
						asset_id: n
					}))
				} else u.default.view.isInvalidOldpassword = !0;
				t.emit()
			}
		}, {
			key: "onDeleteConfirm",
			value: function() {
				u.default.view.confirmed = !u.default.view.confirmed
			}
		}, {
			key: "onDeleteSubmit",
			value: function() {
				var e = (0, i.collect)(),
					t = this.asset,
					n = this.asset_id,
					r = (0, f.getLabelOrAddress)(t);
				(0, c.assetDelete)(n), (0, c.setHref)(l.routes.home()), (0, c.addNotification)('"' + r + '" asset has been deleted'), e.emit()
			}
		}, {
			key: "render",
			value: function() {
				var e = this.asset_id,
					t = this.isInvalidRepassword,
					n = u.default.view.oldpassword.length > 0 && u.default.view.password.length >= s.minpassword && u.default.view.password === u.default.view.repassword && !u.default.view.isInvalidOldpassword && !t;
				return a.default.createElement(C, {
					hasPrivateKeyOrSeed: (0, f.isAssetWithPrivateKeyOrSeed)(e),
					hasSeed: (0, f.isAssetWithSeed)(e),
					oldpassword: u.default.view.oldpassword,
					password: u.default.view.password,
					repassword: u.default.view.repassword,
					isInvalidOldpassword: u.default.view.isInvalidOldpassword,
					isInvalidRepassword: t,
					isValidForm: n,
					confirmed: u.default.view.confirmed,
					onChangeOldpassword: this.onChangeOldpassword,
					onChangePassword: this.onChangePassword,
					onChangeRepassword: this.onChangeRepassword,
					onChangeSubmit: this.onChangeSubmit,
					onDeleteConfirm: this.onDeleteConfirm,
					onDeleteSubmit: this.onDeleteSubmit
				})
			}
		}, {
			key: "isInvalidRepassword",
			get: function() {
				return u.default.view.password.length > 0 && u.default.view.repassword.length > 0 && u.default.view.password.length === u.default.view.repassword.length && u.default.view.password !== u.default.view.repassword
			}
		}]), t
	}();

	function C(e) {
		var t = e.hasPrivateKeyOrSeed,
			n = (e.hasSeed, e.oldpassword),
			r = e.password,
			o = e.repassword,
			i = e.confirmed,
			d = e.isInvalidOldpassword,
			u = e.isInvalidRepassword,
			c = e.isValidForm,
			f = e.onChangeOldpassword,
			E = e.onChangePassword,
			k = e.onChangeRepassword,
			C = e.onChangeSubmit,
			O = e.onDeleteConfirm,
			P = e.onDeleteSubmit;
		return a.default.createElement("div", null, a.default.createElement(l.Show, {
			if: t
		}, a.default.createElement("div", null, a.default.createElement(h.default, null, a.default.createElement(p.default, null, "Change Password")), a.default.createElement(y.FormField, null, a.default.createElement(y.FormFieldLeft, null, a.default.createElement(w.Label, null, "Old password")), a.default.createElement(y.FormFieldRight, null, a.default.createElement(v.default, {
			type: "password",
			width: "100%",
			value: n,
			onChange: f,
			error: "Invalid old password",
			invalid: d
		}))), a.default.createElement(y.FormField, null, a.default.createElement(y.FormFieldLeft, null, a.default.createElement(w.Label, null, "Password"), a.default.createElement(b.default, null, "Make sure that you remember this. This password can't be restored because we don't store it. For security reasons you will be asked often for this password."), a.default.createElement(w.SubLabel, null, "This password encrypts your private key.")), a.default.createElement(y.FormFieldRight, null, a.default.createElement(g.default, {
			minlength: s.minpassword,
			value: r,
			onChange: E,
			width: "100%",
			type: "password"
		}))), a.default.createElement(y.FormField, null, a.default.createElement(y.FormFieldLeft, null, a.default.createElement(w.Label, null, "Repeat Password")), a.default.createElement(y.FormFieldRight, null, a.default.createElement(v.default, {
			minlength: s.minpassword,
			error: "Passwords do not match",
			invalid: u,
			value: o,
			onChange: k,
			width: "100%",
			type: "password"
		}))), a.default.createElement(y.FormField, null, a.default.createElement(y.FormFieldButtons, null, a.default.createElement(m.default, {
			width: "200px",
			disabled: !c,
			onClick: C
		}, "Change password"))))), a.default.createElement(h.default, null, a.default.createElement(p.default, null, "Delete")), a.default.createElement(h.default, {
			"padding-top": "30px"
		}, a.default.createElement(x.default, null, a.default.createElement("div", null, a.default.createElement(_.default, {
			checked: i,
			onChange: O,
			label: "I understand that if I don't have a Recovery Phrase, my Paper Wallet or a Backup I won't be able to recover this asset."
		})), a.default.createElement(h.default, {
			"padding-top": "10px"
		}, a.default.createElement(m.default, {
			"font-size": "14px",
			disabled: !i,
			onClick: P,
			width: "100%"
		}, "Delete this asset")))))
	}
	t.default = k
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\n    box-sizing: content-box;\n    display: block;\n    border: 2px solid ", ";\n    border-radius: 5px;\n    padding: 10px 12px;\n\n    & span {\n        margin-top: -2px;\n        line-height: normal;\n        font-size: 15px;\n\n        display: block;\n        padding-left: 25px;\n        font-weight: bold;\n        color: ", ";\n        vertical-align: top;\n        transition: all 0.35s ease;\n        -webkit-transition: all 0.35s ease;\n        -webkit-transition: all 0.35s ease;\n        -moz-transition: all 0.55s ease;\n        -o-transition: all 0.35s ease;\n    }\n"], o = ["\n    box-sizing: content-box;\n    display: block;\n    border: 2px solid ", ";\n    border-radius: 5px;\n    padding: 10px 12px;\n\n    & span {\n        margin-top: -2px;\n        line-height: normal;\n        font-size: 15px;\n\n        display: block;\n        padding-left: 25px;\n        font-weight: bold;\n        color: ", ";\n        vertical-align: top;\n        transition: all 0.35s ease;\n        -webkit-transition: all 0.35s ease;\n        -webkit-transition: all 0.35s ease;\n        -moz-transition: all 0.55s ease;\n        -o-transition: all 0.35s ease;\n    }\n"], Object.freeze(Object.defineProperties(r, {
		raw: {
			value: Object.freeze(o)
		}
	})));
	t.default = function(e) {
		return i.default.createElement(c, {
			onClick: e.onChange,
			checked: e.checked,
			disabled: e.disabled
		}, i.default.createElement(d.default, e), i.default.createElement("span", null, e.label))
	};
	var i = u(n(0)),
		l = u(n(1)),
		s = u(n(2)),
		d = u(n(433));

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var c = l.default.div(a, s.default.color.background4, function(e) {
		return e.disabled ? s.default.color.grey1 : s.default.color.front3
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
			}
			return e
		},
		i = (r = ["\n    & input {\n        box-sizing: content-box;\n        display: none;\n    }\n    & div {\n        position: relative;\n        float: left;\n        display: block;\n        width: 13px;\n        height: 13px;\n        border-radius: 2px;\n        vertical-align: top;\n        cursor: ", ";\n        background-color: ", ";\n        border: 2px solid\n            ", ";\n        transition: all 0.35s ease;\n        -webkit-transition: all 0.35s ease;\n        -moz-transition: all 0.55s ease;\n        -o-transition: all 0.35s ease;\n    }\n    & div:before {\n        position: absolute;\n        top: 0;\n        left: 4px;\n        width: 4px;\n        height: 8px;\n        content: '';\n        border-color: white;\n        border-style: solid;\n        border-top: 0;\n        border-right-width: 2px;\n        border-bottom-width: 2px;\n        border-left: 0;\n\n        transform: scale(", ") rotate(45deg);\n        -webkit-transform: scale(", ")\n            rotate(45deg);\n        -ms-transform: scale(", ") rotate(45deg);\n        -webkit-transform: scale(", ")\n            rotate(45deg);\n\n        transition: all 0.35s ease;\n        -webkit-transition: all 0.35s ease;\n        -moz-transition: all 0.55s ease;\n        -o-transition: all 0.35s ease;\n    }\n"], o = ["\n    & input {\n        box-sizing: content-box;\n        display: none;\n    }\n    & div {\n        position: relative;\n        float: left;\n        display: block;\n        width: 13px;\n        height: 13px;\n        border-radius: 2px;\n        vertical-align: top;\n        cursor: ", ";\n        background-color: ", ";\n        border: 2px solid\n            ", ";\n        transition: all 0.35s ease;\n        -webkit-transition: all 0.35s ease;\n        -moz-transition: all 0.55s ease;\n        -o-transition: all 0.35s ease;\n    }\n    & div:before {\n        position: absolute;\n        top: 0;\n        left: 4px;\n        width: 4px;\n        height: 8px;\n        content: '';\n        border-color: white;\n        border-style: solid;\n        border-top: 0;\n        border-right-width: 2px;\n        border-bottom-width: 2px;\n        border-left: 0;\n\n        transform: scale(", ") rotate(45deg);\n        -webkit-transform: scale(", ")\n            rotate(45deg);\n        -ms-transform: scale(", ") rotate(45deg);\n        -webkit-transform: scale(", ")\n            rotate(45deg);\n\n        transition: all 0.35s ease;\n        -webkit-transition: all 0.35s ease;\n        -moz-transition: all 0.55s ease;\n        -o-transition: all 0.35s ease;\n    }\n"], Object.freeze(Object.defineProperties(r, {
			raw: {
				value: Object.freeze(o)
			}
		})));
	t.default = function(e) {
		return l.default.createElement(c, e, l.default.createElement("input", a({}, e, {
			type: "checkbox"
		})), l.default.createElement("div", null))
	};
	var l = u(n(0)),
		s = u(n(1)),
		d = u(n(2));

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var c = s.default.div(i, function(e) {
		return e.disabled ? "default" : "pointer"
	}, function(e) {
		return e.disabled && e.checked ? d.default.color.grey1 : e.checked ? d.default.color.background3 : "white"
	}, function(e) {
		return e.disabled ? d.default.color.grey1 : (e.checked, d.default.color.background3)
	}, function(e) {
		return e.checked ? 1 : 0
	}, function(e) {
		return e.checked ? 1 : 0
	}, function(e) {
		return e.checked ? 1 : 0
	}, function(e) {
		return e.checked ? 1 : 0
	})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function() {
		return r.default.createElement(o.default, {
			Export: a.default
		})
	};
	var r = i(n(0)),
		o = i(n(70)),
		a = i(n(205));

	function i(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function() {
		return r.default.createElement(o.default, null)
	};
	var r = a(n(0)),
		o = a(n(70));

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function() {
		return r.default.createElement(o.default, null)
	};
	var r = a(n(0)),
		o = a(n(70));

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = function() {
		return r.default.createElement(o.default, {
			Send: i.default,
			Export: a.default
		})
	};
	var r = l(n(0)),
		o = l(n(70)),
		a = l(n(205)),
		i = l(n(438));

	function l(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(9),
		a = n(18),
		i = d(n(204)),
		l = d(n(8)),
		s = n(16);

	function d(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var u = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, i.default), r(t, [{
			key: "fetchBalance",
			value: function() {
				(0, s.fetchBalance)(this.asset_id).then(function(e) {
					l.default.view.balance = (0, a.bigNumber)(e)
				}), o.ETH.fetchBalance(this.asset.address).then(function(e) {
					l.default.view.balance_fee = (0, a.bigNumber)(e)
				})
			}
		}, {
			key: "getTotal",
			get: function() {
				return l.default.view.amount
			}
		}, {
			key: "getMax",
			get: function() {
				return l.default.view.balance
			}
		}]), t
	}();
	t.default = u
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = T(["\n    position: absolute;\n    right: 4.5px;\n    top: 4.5px;\n    width: 30px;\n    height: 30px;\n    background: url(", ") no-repeat center;\n    background-size: auto 100%;\n"], ["\n    position: absolute;\n    right: 4.5px;\n    top: 4.5px;\n    width: 30px;\n    height: 30px;\n    background: url(", ") no-repeat center;\n    background-size: auto 100%;\n"]),
		a = T(["\n    border-radius: 1px;\n    position: absolute;\n    right: 4.5px;\n    top: 4.5px;\n    width: 30px;\n    height: 30px;\n    background: ", ";\n"], ["\n    border-radius: 1px;\n    position: absolute;\n    right: 4.5px;\n    top: 4.5px;\n    width: 30px;\n    height: 30px;\n    background: ", ";\n"]),
		i = n(0),
		l = S(i),
		s = S(n(1)),
		d = n(7),
		u = (S(n(2)), n(4)),
		c = n(10),
		f = n(440),
		p = n(9),
		h = n(38),
		m = n(12),
		b = S(n(8)),
		v = n(16),
		g = S(n(36)),
		w = S(n(39)),
		y = n(28),
		x = S(n(14)),
		_ = S(n(23)),
		E = S(n(48)),
		k = S(n(26)),
		C = n(21),
		O = S(n(47)),
		P = n(22);

	function S(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function T(e, t) {
		return Object.freeze(Object.defineProperties(e, {
			raw: {
				value: Object.freeze(t)
			}
		}))
	}
	var j = function(e) {
		function t() {
			return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, t),
				function(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
				}(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return function(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}(t, i.Component), r(t, [{
			key: "componentWillMount",
			value: function() {
				var e = this;
				this.observer = (0, d.createObserver)(function(t) {
					return e.forceUpdate()
				}), this.observer.observe(b.default.view), this.logo_default = (0, u.ASSET_LOGO)("ERC20"), b.default.view = {
					fetching: !1,
					contract_address: "",
					symbol: "",
					name: "",
					coin_decimals: 18,
					logo: "",
					color: (0, f.generateRandomColor)(30, 230),
					contract_address_error: "",
					symbol_error: "",
					name_error: "",
					coin_decimals_error: "",
					logo_visible: this.logo_default,
					color_error: ""
				}, this.onChangeAddress = this.onChangeAddress.bind(this), this.onChangeSymbol = this.onChangeSymbol.bind(this), this.onChangeName = this.onChangeName.bind(this), this.onChangeDecimals = this.onChangeDecimals.bind(this), this.onChangeLogo = this.onChangeLogo.bind(this), this.onChangeColor = this.onChangeColor.bind(this), this.onSubmit = this.onSubmit.bind(this)
			}
		}, {
			key: "componentWillUnmount",
			value: function() {
				this.observer.destroy()
			}
		}, {
			key: "shouldComponentUpdate",
			value: function() {
				return !1
			}
		}, {
			key: "onChangeAddress",
			value: function(e) {
				var t = this,
					n = e.trim();
				if (b.default.view.contract_address !== n) {
					var r = (0, d.collect)();
					if (b.default.view.contract_address = n, (0, h.isAddress)(n)) {
						var o = 0;
						b.default.view.contract_address_error = "", b.default.view.fetching = !0, (0, m.getSymbolContract)(n).then(function(e) {
							return null !== e ? t.onChangeSymbol(e) : o += 1, (0, m.getNameContract)(n)
						}).then(function(e) {
							return null !== e ? t.onChangeName(e) : o += 1, (0, m.getDecimalsContract)(n)
						}).then(function(e) {
							if (null !== e) {
								var r = (0, d.collect)();
								b.default.view.fetching = !1, t.onChangeDecimals(e), r.emit()
							} else if (2 === o) return (0, m.getSupplyContract)(n)
						}).then(function(e) {
							return null !== e || (0, m.isErc20Contract)(n)
						}).then(function(e) {
							b.default.view.fetching = !1, e || (b.default.view.contract_address_error = "Seems like this address is not an ERC20 contract.")
						})
					} else b.default.view.contract_address_error = "Invalid address";
					r.emit()
				}
			}
		}, {
			key: "onChangeSymbol",
			value: function(e) {
				var t = e.trim().toUpperCase(),
					n = (0, d.collect)();
				b.default.view.symbol = t, b.default.view.symbol_error = p.Coins.hasOwnProperty(t) ? "Duplicated symbol." : "", t.length > 2 && !p.Coins.hasOwnProperty(t) && this.onChangeLogo((0, u.ASSET_LOGO)(t), !1), n.emit()
			}
		}, {
			key: "onChangeName",
			value: function(e) {
				b.default.view.name = e.trim()
			}
		}, {
			key: "onChangeDecimals",
			value: function(e) {
				var t = Number(e),
					n = (0, d.collect)();
				b.default.view.coin_decimals = e, b.default.view.coin_decimals_error = isNaN(t) ? "Invalid number" : "", n.emit()
			}
		}, {
			key: "onChangeLogo",
			value: function(e) {
				var t = this,
					n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				if ((e = e.trim()) !== b.default.view.logo) {
					var r = new Image;
					if (r.crossOrigin = "Anonymous", r.src = e, r.onload = function() {
							var n = (0, d.collect)();
							b.default.view.logo = e, b.default.view.logo_visible = e, t.onChangeColor((0, f.rgbToHex)((0, f.getAverageColor)(r))), n.emit()
						}, r.onerror = function() {
							n && (b.default.view.logo_visible = t.logo_default)
						}, n) {
						var o = (0, d.collect)();
						b.default.view.logo = e, b.default.view.logo_visible = "/static/image/loading.gif", o.emit()
					}
				}
			}
		}, {
			key: "onChangeColor",
			value: function(e) {
				var t = e.trim(),
					n = (0, d.collect)();
				b.default.view.color = e.toUpperCase(), b.default.view.color_error = /^#[0-9a-fA-F]{3,6}$/.test(t) ? "" : "Invalid color", n.emit()
			}
		}, {
			key: "onSubmit",
			value: function(e) {
				e.preventDefault();
				var t = b.default.view.symbol;
				(0, v.createCustomERC20)({
					symbol: t,
					name: b.default.view.name,
					color: b.default.view.color,
					contract_address: b.default.view.contract_address,
					coin_decimals: Number(b.default.view.coin_decimals),
					labels: t.toLowerCase() + " ethereum token erc20 ecr20 custom",
					logo: b.default.view.logo_visible,
					networks_availables: [b.default.network]
				}), (0, v.addNotification)("You have created " + t + " as Custom ERC20 token", u.OK), (0, v.setHref)(c.routes.add({
					filter: t
				}))
			}
		}, {
			key: "render",
			value: function() {
				return l.default.createElement(F, {
					fetching: b.default.view.fetching,
					contract_address: b.default.view.contract_address,
					symbol: b.default.view.symbol,
					name: b.default.view.name,
					coin_decimals: b.default.view.coin_decimals,
					logo: b.default.view.logo,
					logo_visible: b.default.view.logo_visible,
					color: b.default.view.color,
					contract_address_error: b.default.view.contract_address_error,
					symbol_error: b.default.view.symbol_error,
					name_error: b.default.view.name_error,
					coin_decimals_error: b.default.view.coin_decimals_error,
					color_error: b.default.view.color_error,
					isValidForm: this.isValidForm,
					onChangeAddress: this.onChangeAddress,
					onChangeSymbol: this.onChangeSymbol,
					onChangeName: this.onChangeName,
					onChangeDecimals: this.onChangeDecimals,
					onChangeLogo: this.onChangeLogo,
					onChangeColor: this.onChangeColor,
					onSubmit: this.onSubmit
				})
			}
		}, {
			key: "isValidForm",
			get: function() {
				return !1 === b.default.view.fetching && b.default.view.contract_address.length > 0 && "" === b.default.view.contract_address_error && b.default.view.symbol.length > 0 && "" === b.default.view.symbol_error && b.default.view.name.length > 0 && "" === b.default.view.name_error && b.default.view.coin_decimals > -1 && "" === b.default.view.coin_decimals_error && b.default.view.color.length > 0 && "" === b.default.view.color_error
			}
		}]), t
	}();

	function F(e) {
		var t = e.fetching,
			n = e.contract_address,
			r = e.symbol,
			o = e.name,
			a = e.coin_decimals,
			i = e.logo,
			s = e.logo_visible,
			d = e.color,
			u = e.contract_address_error,
			c = e.symbol_error,
			f = e.name_error,
			p = e.coin_decimals_error,
			h = e.color_error,
			m = e.isValidForm,
			b = e.onChangeAddress,
			v = e.onChangeSymbol,
			S = e.onChangeName,
			T = e.onChangeDecimals,
			j = e.onChangeLogo,
			F = e.onChangeColor,
			z = e.onSubmit;
		return l.default.createElement(y.RightContainerPadding, null, l.default.createElement(y.RightHeader, null, l.default.createElement(O.default, null, l.default.createElement("img", {
			src: "/static/image/coins/ERC20.svg"
		})), l.default.createElement(x.default, {
			float: "left"
		}, l.default.createElement(g.default, null, "ERC20"), l.default.createElement(w.default, null, "Create custom ERC20 token")), l.default.createElement(x.default, {
			clear: "both"
		})), l.default.createElement(y.RightContent, null, l.default.createElement(x.default, null, l.default.createElement("form", null, l.default.createElement(P.FormField, null, l.default.createElement(P.FormFieldLeft, null, l.default.createElement(C.Label, null, "Contract Address"), l.default.createElement(C.SubLabel, null, "An ERC20 contract address.")), l.default.createElement(P.FormFieldRight, null, l.default.createElement(_.default, {
			type: "text",
			rightIco: t ? "/static/image/loading.gif" : null,
			value: n,
			width: "100%",
			error: u,
			invalid: u,
			onChange: function(e) {
				return b(e.target.value)
			}
		}))), l.default.createElement(P.FormField, null, l.default.createElement(P.FormFieldLeft, null, l.default.createElement(C.Label, null, "Symbol"), l.default.createElement(E.default, null, "Three or more letters that represent this asset. The symbol of Bitcoin is BTC."), l.default.createElement(C.SubLabel, null, "Letters and Numbers only.")), l.default.createElement(P.FormFieldRight, null, l.default.createElement(_.default, {
			type: "text",
			maxLength: "5",
			value: r,
			width: "100%",
			error: c,
			invalid: c,
			onChange: function(e) {
				return v(e.target.value)
			}
		}))), l.default.createElement(P.FormField, null, l.default.createElement(P.FormFieldLeft, null, l.default.createElement(C.Label, null, "Name / Title")), l.default.createElement(P.FormFieldRight, null, l.default.createElement(_.default, {
			type: "text",
			maxLength: "30",
			value: o,
			width: "100%",
			error: f,
			invalid: f,
			onChange: function(e) {
				return S(e.target.value)
			}
		}))), l.default.createElement(P.FormField, null, l.default.createElement(P.FormFieldLeft, null, l.default.createElement(C.Label, null, "Decimals"), l.default.createElement(C.SubLabel, null, "Must be the number defined in the contract.")), l.default.createElement(P.FormFieldRight, null, l.default.createElement(_.default, {
			type: "text",
			maxLength: "2",
			value: a,
			width: "100%",
			error: p,
			invalid: p,
			onChange: function(e) {
				return T(e.target.value)
			}
		}))), l.default.createElement(P.FormField, null, l.default.createElement(P.FormFieldLeft, null, l.default.createElement(C.Label, null, "Logo")), l.default.createElement(P.FormFieldRight, null, l.default.createElement(_.default, {
			type: "text",
			value: i,
			width: "100%",
			padding: "10px 40px 10px 10px",
			onChange: function(e) {
				return j(e.target.value)
			}
		}), l.default.createElement(A, {
			url: s
		}))), l.default.createElement(P.FormField, null, l.default.createElement(P.FormFieldLeft, null, l.default.createElement(C.Label, null, "Color")), l.default.createElement(P.FormFieldRight, null, l.default.createElement(_.default, {
			type: "text",
			maxLength: "7",
			color: d,
			value: d,
			width: "100%",
			padding: "10px 40px 10px 10px",
			error: h,
			invalid: h,
			onChange: function(e) {
				return F(e.target.value)
			}
		}), l.default.createElement(R, {
			color: d
		}))), l.default.createElement(P.FormField, null, l.default.createElement(P.FormFieldButtons, null, l.default.createElement(k.default, {
			width: "100px",
			disabled: !m,
			onClick: z
		}, "Создать")))))))
	}
	t.default = j;
	var A = s.default.div(o, function(e) {
			return e.url
		}),
		R = s.default.div(a, function(e) {
			return e.color
		})
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.generateRandomColor = function() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
			t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 255;
		return o({
			r: (0, r.getRandomArbitrary)(e, t),
			g: (0, r.getRandomArbitrary)(e, t),
			b: (0, r.getRandomArbitrary)(e, t)
		})
	}, t.rgbToHex = o, t.getAverageColor = function(e) {
		var t = document.createElement("canvas"),
			n = t.getContext("2d"),
			r = t.width = e.naturalWidth,
			o = t.height = e.naturalHeight;
		n.drawImage(e, 0, 0);
		for (var a = n.getImageData(0, 0, r, o).data, i = a.length, l = 0, s = 0, d = 0, u = 0, c = 0; l < i; l += 4) a[l + 3] > 0 && (c += 1, s += a[l], d += a[l + 1], u += a[l + 2]);
		return s = Math.floor(s / c), d = Math.floor(d / c), u = Math.floor(u / c), {
			r: s,
			g: d,
			b: u
		}
	};
	var r = n(18);

	function o(e) {
		var t = e.r,
			n = e.g,
			r = e.b;
		return ("#" + t.toString(16) + n.toString(16) + r.toString(16)).toUpperCase()
	}
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r, o, a = (r = ["\n    /* height: ", "; */\n    padding: 0 ", ";\n    ", " {\n        div {\n            display: none;\n        }\n    }\n    div {\n        padding-top: 15px;\n    }\n    ul {\n        list-style: none;\n        margin: 0;\n    padding: 0;\n    text-align: right;\n    }\n    li {\n        display: inline-block;\n    margin-left: 10px;\n}\n    }\n    a {\n        font-size: 12px;\n        color: #000;\n        font-weight: bold;\n        letter-spacing: 0.2px;\n        display: block;\n        padding-right: 10px;\n        text-align: right;\n        opacity: 0.35;\n    }\n    a:hover {\n        opacity: 0.5;\n    }\n\n"], o = ["\n    /* height: ", "; */\n    padding: 0 ", ";\n    ", " {\n        div {\n            display: none;\n        }\n    }\n    div {\n        padding-top: 15px;\n    }\n    ul {\n        list-style: none;\n        margin: 0;\n    padding: 0;\n    text-align: right;\n    }\n    li {\n        display: inline-block;\n    margin-left: 10px;\n}\n    }\n    a {\n        font-size: 12px;\n        color: #000;\n        font-weight: bold;\n        letter-spacing: 0.2px;\n        display: block;\n        padding-right: 10px;\n        text-align: right;\n        opacity: 0.35;\n    }\n    a:hover {\n        opacity: 0.5;\n    }\n\n"], Object.freeze(Object.defineProperties(r, {
		raw: {
			value: Object.freeze(o)
		}
	})));
	t.default = function() {
		return i.default.createElement(c, null, i.default.createElement("div", null, i.default.createElement("ul", null, i.default.createElement("li", null, i.default.createElement("a", {
			href: "https://github.com/elevenyellow/coinfy/blob/master/FAQ.md",
			target: "_blank"
		}, "FAQ")), i.default.createElement("li", null, i.default.createElement("a", {
			href: "https://twitter.com/coinfydotcom",
			target: "_blank"
		}, "Twitter")), i.default.createElement("li", null, i.default.createElement("a", {
			href: "mailto:support@coinfy.com"
		}, "Support")), i.default.createElement("li", null, i.default.createElement("a", {
			href: d.repository,
			target: "_blank"
		}, " ", "v", d.version)))))
	};
	var i = u(n(0)),
		l = u(n(1)),
		s = u(n(2)),
		d = n(190);

	function u(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var c = l.default.div(a, s.default.paddingOut, s.default.paddingOut, s.default.media.second)
}], [206]);