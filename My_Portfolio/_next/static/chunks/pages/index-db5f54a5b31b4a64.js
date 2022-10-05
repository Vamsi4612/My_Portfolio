(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5301: function (e, n, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return a(9603)
                }
            ])
        },
        9603: function (e, n, a) {
            "use strict";
            a.r(n),
            a.d(n, {
                __N_SSP: function () {
                    return E
                },
                default: function () {
                    return z
                }
            });
            var t = a(5893),
                i = a(7294),
                s = a(9008),
                r = a(5988),
                o = a(2535),
                c = function (e) {
                    var n = e.user,
                        a = e.login,
                        i = e.logout;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)("div", {
                                className: "jsx-b7442b5b9511eb8 navbar_wrapper",
                                children: (0, t.jsxs)("div", {
                                    className: "jsx-b7442b5b9511eb8 navbar",
                                    children: [
                                        (0, t.jsx)("div", {
                                            className: "jsx-b7442b5b9511eb8 logo",
                                            children: "Dev Voyage"
                                        }),
                                        (0, t.jsx)(o.Z, {
                                            user: n,
                                            login: a,
                                            logout: i
                                        })
                                    ]
                                })
                            }),
                            (0, t.jsx)(r.default, {
                                id: "b7442b5b9511eb8",
                                children: ".navbar_wrapper.jsx-b7442b5b9511eb8 {position:fixed;\ntop:0;\nleft:0;\nright:0" +
                                        ";\nborder-bottom:1px solid hsla(0, 0%, 100%, 0.1);\nz-index:999}\n.navbar.jsx-" +
                                        "b7442b5b9511eb8 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flex" +
                                        "box;\ndisplay:flex;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-" +
                                        "between;\njustify-content:space-between;\n-webkit-align-items:center;\n-webkit" +
                                        "-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nmargin:auto;" +
                                        "\nmin-height:72px;\npadding:0 18px;\nbackground-color:rgba(0, 0, 0, 0.35);\nba" +
                                        "ckdrop-filter:blur(8px)}\n.logo.jsx-b7442b5b9511eb8 {color:var(--m-main-purple" +
                                        "-color);\nfont-weight:700;\nfont-size:20px}\n@media (min-width:840px) {.navbar" +
                                        ".jsx-b7442b5b9511eb8 {max-width:1120px;\nmargin:auto}}"
                            })
                        ]
                    })
                },
                l = a(5666),
                d = a.n(l),
                b = a(9669),
                x = a.n(b),
                p = a(7563),
                f = a(3750),
                m = a(1163),
                u = a(7951),
                g = a(2277);
            function j(e, n, a, t, i, s, r) {
                try {
                    var o = e[s](r),
                        c = o.value
                } catch (l) {
                    return void a(l)
                }
                o.done
                    ? n(c)
                    : Promise
                        .resolve(c)
                        .then(t, i)
            }
            function h(e, n, a) {
                return n in e
                    ? Object.defineProperty(e, n, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    })
                    : e[n] = a,
                e
            }
            function y(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n]
                            ? arguments[n]
                            : {},
                        t = Object.keys(a);
                    "function" === typeof Object.getOwnPropertySymbols && (
                        t = t.concat(Object.getOwnPropertySymbols(a).filter((function (e) {
                            return Object
                                .getOwnPropertyDescriptor(a, e)
                                .enumerable
                        })))
                    ),
                    t.forEach((function (n) {
                        h(e, n, a[n])
                    }))
                }
                return e
            }
            var w = function (e) {
                    var n,
                        a = e.hasUsername,
                        s = e.isUserLoggedIn,
                        o = (0, m.useRouter)(),
                        c = (0, i.useState)({
                            message: "",
                            status: !1,
                            loading: !1
                        }),
                        l = c[0],
                        b = c[1],
                        h = (n = d().mark((function e() {
                            var n;
                            return d().wrap((function (e) {
                                for (;;) 
                                    switch (e.prev = e.next) {
                                        case 0:
                                            return b((function (e) {
                                                return y({}, e, {
                                                    loading: !0
                                                })
                                            })),
                                            e.prev = 1,
                                            e.next = 4,
                                            x().post("".concat("https://api.dev.voyage", "/user/availabiltity"), {
                                                username: k
                                            }, {
                                                withCredentials: !0
                                            });
                                        case 4:
                                            n = e.sent.data,
                                            b(y({}, n, {
                                                loading: !1
                                            })),
                                            e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8,
                                            e.t0 = e.catch(1),
                                            b((function (e) {
                                                return y({}, e, {
                                                    loading: !1
                                                })
                                            }));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                [1, 8]
                            ])
                        })), function () {
                            var e = this,
                                a = arguments;
                            return new Promise((function (t, i) {
                                var s = n.apply(e, a);
                                function r(e) {
                                    j(s, t, i, r, o, "next", e)
                                }
                                function o(e) {
                                    j(s, t, i, r, o, "throw", e)
                                }
                                r(void 0)
                            }))
                        }),
                        w = (0, p.Z)(h, 500),
                        v = (0, i.useState)(""),
                        k = v[0],
                        N = v[1],
                        _ = function () {
                            o.push("/dashboard")
                        };
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            a
                                ? (0, t.jsx)("div", {
                                    className: "jsx-af2ab08db80ae354 btn btn_2",
                                    children: (0, t.jsx)(g.Z, {
                                        text: "Dashboard",
                                        onClick: _
                                    })
                                })
                                : (0, t.jsxs)(t.Fragment, {
                                    children: [
                                        (0, t.jsxs)("div", {
                                            className: "jsx-af2ab08db80ae354 username_div",
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: "jsx-af2ab08db80ae354 username_input",
                                                    children: [
                                                        (0, t.jsx)("input", {
                                                            onChange: function (e) {
                                                                var n = e
                                                                    .target
                                                                    .value
                                                                    .toLowerCase();
                                                                N(n),
                                                                n.length > 0 && w()
                                                            },
                                                            type: "text",
                                                            placeholder: "Username",
                                                            value: k,
                                                            autoComplete: "off",
                                                            className: "jsx-af2ab08db80ae354"
                                                        }),
                                                        (0, t.jsxs)("p", {
                                                            className: "jsx-af2ab08db80ae354",
                                                            children: [".", "dev.voyage"]
                                                        })
                                                    ]
                                                }),
                                                (0, t.jsx)("div", {
                                                    className: "jsx-af2ab08db80ae354 " + (
                                                        (
                                                            k.length
                                                                ? "availability_msg"
                                                                : "availability_msg hidden"
                                                        ) || ""
                                                    ),
                                                    children: l.loading
                                                        ? (0, t.jsx)(u.Z, {})
                                                        : (0, t.jsx)(t.Fragment, {
                                                            children: l.message
                                                                ? (0, t.jsxs)(t.Fragment, {
                                                                    children: [
                                                                        l.status
                                                                            ? (0, t.jsx)(f.Reu, {className: "check"})
                                                                            : (0, t.jsx)(f.HJl, {className: "cross"}),
                                                                        (0, t.jsx)("p", {
                                                                            className: "jsx-af2ab08db80ae354",
                                                                            children: l.message
                                                                        })
                                                                    ]
                                                                })
                                                                : null
                                                        })
                                                })
                                            ]
                                        }),
                                        (0, t.jsx)("div", {
                                            className: "jsx-af2ab08db80ae354 btn",
                                            children: (0, t.jsx)(g.Z, {
                                                disabled: !l.status,
                                                text: "Create Portfolio",
                                                onClick: function () {
                                                    window
                                                        .localStorage
                                                        .setItem("username", JSON.stringify(k.toLowerCase())),
                                                    s
                                                        ? _()
                                                        : window.location.href = "".concat("https://api.dev.voyage", "/auth/google")
                                                }
                                            })
                                        })
                                    ]
                                }),
                            (0, t.jsx)(r.default, {
                                id: "af2ab08db80ae354",
                                children: ".username_div.jsx-af2ab08db80ae354 {display:-webkit-box;\ndisplay:-webkit-flex" +
                                        ";\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-fl" +
                                        "ex-direction:column;\nflex-direction:column}\n.username_input.jsx-af2ab08db80a" +
                                        "e354 {border:1px solid var(--m-main-purple-color);\npadding:16px 20px;\nborder" +
                                        "-radius:8px;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox" +
                                        ";\ndisplay:flex;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-bet" +
                                        "ween;\njustify-content:space-between;\n-webkit-align-items:center;\n-webkit-bo" +
                                        "x-align:center;\n-ms-flex-align:center;\nalign-items:center;\nmargin-top:66px}" +
                                        "\n.username_input.jsx-af2ab08db80ae354 >input.jsx-af2ab08db80ae354 {outline:no" +
                                        "ne;\nbackground-color:var(--m-background-color);\nborder:none;\ncolor:var(--m-" +
                                        "main-purple-color);\nwidth:100%;\nfont-size:16px}\n.username_input.jsx-af2ab08" +
                                        "db80ae354 >p.jsx-af2ab08db80ae354 {font-size:16px}\n.availability_msg.jsx-af2a" +
                                        "b08db80ae354 {height:32px;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndispl" +
                                        "ay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align" +
                                        ":center;\n-ms-flex-align:center;\nalign-items:center;\ngap:4px;\nfont-size:12p" +
                                        "x;\nmargin-bottom:8px}\n.hidden.jsx-af2ab08db80ae354 {visibility:hidden}\n.ava" +
                                        "ilability_msg.jsx-af2ab08db80ae354 .check {fill:#2fdd92}\n.availability_msg.js" +
                                        "x-af2ab08db80ae354 .cross {fill:#ff2442}\n.btn_2.jsx-af2ab08db80ae354 {margin-" +
                                        "top:32px}"
                            })
                        ]
                    })
                },
                v = function (e) {
                    var n = e.hasUsername,
                        a = e.isUserLoggedIn;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsxs)("div", {
                                className: "jsx-9e731121a2c5013a hero_wrapper",
                                children: [
                                    (0, t.jsxs)("div", {
                                        className: "jsx-9e731121a2c5013a tagline",
                                        children: [
                                            (0, t.jsxs)("p", {
                                                className: "jsx-9e731121a2c5013a",
                                                children: [
                                                    (0, t.jsx)("span", {
                                                        className: "jsx-9e731121a2c5013a b",
                                                        children: "SIGN IN."
                                                    }),
                                                    (0, t.jsx)("span", {
                                                        className: "jsx-9e731121a2c5013a f f-1",
                                                        children: "SIGN IN."
                                                    })
                                                ]
                                            }),
                                            (0, t.jsxs)("p", {
                                                className: "jsx-9e731121a2c5013a",
                                                children: [
                                                    (0, t.jsx)("span", {
                                                        className: "jsx-9e731121a2c5013a b",
                                                        children: "CREATE."
                                                    }),
                                                    (0, t.jsx)("span", {
                                                        className: "jsx-9e731121a2c5013a f f-2",
                                                        children: "CREATE."
                                                    })
                                                ]
                                            }),
                                            (0, t.jsxs)("p", {
                                                className: "jsx-9e731121a2c5013a",
                                                children: [
                                                    (0, t.jsx)("span", {
                                                        className: "jsx-9e731121a2c5013a b",
                                                        children: "SHARE."
                                                    }),
                                                    (0, t.jsx)("span", {
                                                        className: "jsx-9e731121a2c5013a f f-3",
                                                        children: "SHARE."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    (0, t.jsx)("div", {
                                        className: "jsx-9e731121a2c5013a tagline_secondary",
                                        children: "Kickstart your software development voyage"
                                    }),
                                    (0, t.jsx)(w, {
                                        hasUsername: n,
                                        isUserLoggedIn: a
                                    })
                                ]
                            }),
                            (0, t.jsx)(r.default, {
                                id: "9e731121a2c5013a",
                                children: ".hero_wrapper.jsx-9e731121a2c5013a {display:-webkit-box;\ndisplay:-webkit-flex" +
                                        ";\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-fl" +
                                        "ex-direction:column;\nflex-direction:column;\n-webkit-align-items:center;\n-we" +
                                        "bkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nmargin:13" +
                                        "8px 18px 0}\n.tagline.jsx-9e731121a2c5013a {display:-webkit-box;\ndisplay:-web" +
                                        "kit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;" +
                                        "\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-align-items:cent" +
                                        "er;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\ng" +
                                        "ap:10px}\n.tagline.jsx-9e731121a2c5013a >p.jsx-9e731121a2c5013a {font-weight:9" +
                                        "00;\nfont-size:70px;\nline-height:1;\nposition:relative}\n.f.jsx-9e731121a2c50" +
                                        "13a {position:absolute;\ntop:0;\nleft:0}\n@keyframes t-1 {0% {opacity:0}16.66%" +
                                        " {opacity:1}33.33%, 100% {opacity:0}}\n.f-1.jsx-9e731121a2c5013a {-webkit-anim" +
                                        "ation:8s t-1 linear infinite;\nanimation:8s t-1 linear infinite;\nbackground-i" +
                                        "mage:linear-gradient(90deg, #007cf0, #00dfd8);\n-webkit-background-clip:text;" +
                                        "\n-webkit-text-fill-color:transparent}\n@keyframes t-2 {0%, 33.33% {opacity:0}" +
                                        "50% {opacity:1}66.66%, 100% {opacity:0}}\n.f-2.jsx-9e731121a2c5013a {-webkit-a" +
                                        "nimation:8s t-2 linear infinite;\nanimation:8s t-2 linear infinite;\nbackgroun" +
                                        "d-image:linear-gradient(90deg, #7928ca, #ff0080);\n-webkit-background-clip:tex" +
                                        "t;\n-webkit-text-fill-color:transparent}\n@keyframes t-3 {0%, 66.66% {opacity:" +
                                        "0}83.33% {opacity:1}100% {opacity:0}}\n.f-3.jsx-9e731121a2c5013a {-webkit-anim" +
                                        "ation:8s t-3 linear infinite;\nanimation:8s t-3 linear infinite;\nbackground-i" +
                                        "mage:linear-gradient(90deg, #ff4d4d, #f9cb28);\n-webkit-background-clip:text;" +
                                        "\n-webkit-text-fill-color:transparent}\n.tagline_secondary.jsx-9e731121a2c5013" +
                                        "a {text-align:center;\nmargin-top:24px;\nfont-size:14px}\n@media (min-width:90" +
                                        "0px) {.hero_wrapper.jsx-9e731121a2c5013a {max-width:1120px;\nmargin-left:auto;" +
                                        "\nmargin-right:auto;\nmargin-top:124px}\n.tagline.jsx-9e731121a2c5013a {-webki" +
                                        "t-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\ngap:24px}" +
                                        "\n.tagline.jsx-9e731121a2c5013a >p.jsx-9e731121a2c5013a {font-size:72px}\n.tag" +
                                        "line_secondary.jsx-9e731121a2c5013a {font-size:16px}}\n@media (min-width:1100p" +
                                        "x) {.tagline.jsx-9e731121a2c5013a >p.jsx-9e731121a2c5013a {font-size:88px}}"
                            })
                        ]
                    })
                },
                k = function () {
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)("div", {
                                className: "jsx-44bdf6eab199ab6b video_container",
                                children: (0, t.jsxs)("video", {
                                    controls: !0,
                                    muted: !0,
                                    width: "100%",
                                    loop: !0,
                                    autoPlay: !0,
                                    className: "jsx-44bdf6eab199ab6b video",
                                    children: [
                                        (0, t.jsx)("source", {
                                            src: "/video.mp4",
                                            type: "video/mp4",
                                            className: "jsx-44bdf6eab199ab6b"
                                        }),
                                        "Your browser does not support the video tag."
                                    ]
                                })
                            }),
                            (0, t.jsx)(r.default, {
                                id: "44bdf6eab199ab6b",
                                children: ".video_container.jsx-44bdf6eab199ab6b {display:-webkit-box;\ndisplay:-webkit-f" +
                                        "lex;\ndisplay:-ms-flexbox;\ndisplay:flex;\npadding:64px 18px;\nbackground-imag" +
                                        "e:linear-gradient(360deg, #0e0422, #0501116b 55%, #04000c 55%, #000)}\n.video." +
                                        "jsx-44bdf6eab199ab6b {border:1px solid var(--m-main-purple-color);\nmargin:aut" +
                                        "o;\nwidth:100%;\nborder-radius:8px;\nmax-width:879px;\nbox-shadow:1px 1px 3px " +
                                        "1px rgb(0 0 0 / 19%), 0 0 15px 0 rgb(238 1 255 / 57%), 0 5px 53px 0 rgb(0 29 2" +
                                        "55 / 32%)}"
                            })
                        ]
                    })
                },
                N = function () {
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)("div", {
                                className: "jsx-1c61ed74b89e72c1 footer_wrapper",
                                children: (0, t.jsx)("div", {
                                    className: "jsx-1c61ed74b89e72c1 footer_container",
                                    children: (0, t.jsxs)("div", {
                                        className: "jsx-1c61ed74b89e72c1 footer_links",
                                        children: [
                                            (0, t.jsxs)("div", {
                                                className: "jsx-1c61ed74b89e72c1 left_footer",
                                                children: [
                                                    "Built by Mansi Sindhu ",
                                                    (0, t.jsx)("span", {
                                                        className: "jsx-1c61ed74b89e72c1",
                                                        children: " \xa9"
                                                    }),
                                                    " 2022"
                                                ]
                                            }),
                                            (0, t.jsxs)("div", {
                                                className: "jsx-1c61ed74b89e72c1 right_footer",
                                                children: [
                                                    (0, t.jsx)("a", {
                                                        href: "https://github.com/mansisindhu",
                                                        target: "_blank",
                                                        rel: "noreferrer noopener",
                                                        className: "jsx-1c61ed74b89e72c1 link",
                                                        children: "GitHub"
                                                    }),
                                                    (0, t.jsx)("a", {
                                                        href: "https://www.linkedin.com/in/mansisindhu/",
                                                        target: "_blank",
                                                        rel: "noreferrer noopener",
                                                        className: "jsx-1c61ed74b89e72c1 link",
                                                        children: "Linkedin"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            }),
                            (0, t.jsx)(r.default, {
                                id: "1c61ed74b89e72c1",
                                children: ".footer_wrapper.jsx-1c61ed74b89e72c1 {background-image:linear-gradient(360deg," +
                                        " #090616, #171130 168%, #080318 126%, #000);\nborder-top:1px solid hsla(0, 0%," +
                                        " 100%, 0.1)}\n.footer_links.jsx-1c61ed74b89e72c1 {display:-webkit-box;\ndispla" +
                                        "y:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\nfont-size:14px;\npadding" +
                                        ":18px;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direc" +
                                        "tion:column;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex" +
                                        "-align:center;\nalign-items:center;\ngap:8px}\n.link.jsx-1c61ed74b89e72c1 {-we" +
                                        "bkit-text-decoration:none;\ntext-decoration:none;\ncolor:#fff}\n.right_footer." +
                                        "jsx-1c61ed74b89e72c1 {display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms" +
                                        "-flexbox;\ndisplay:flex;\ngap:16px}\n@media (min-width:840px) {.footer_links.j" +
                                        "sx-1c61ed74b89e72c1 {-webkit-flex-direction:row;\n-ms-flex-direction:row;\nfle" +
                                        "x-direction:row;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-bet" +
                                        "ween;\njustify-content:space-between;\nmax-width:1120px;\nmargin:auto;\npaddin" +
                                        "g:32px 18px}\n.right_footer.jsx-1c61ed74b89e72c1 {gap:64px}}"
                            })
                        ]
                    })
                };
            function _(e, n, a) {
                return n in e
                    ? Object.defineProperty(e, n, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    })
                    : e[n] = a,
                e
            }
            function O(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n]
                            ? arguments[n]
                            : {},
                        t = Object.keys(a);
                    "function" === typeof Object.getOwnPropertySymbols && (
                        t = t.concat(Object.getOwnPropertySymbols(a).filter((function (e) {
                            return Object
                                .getOwnPropertyDescriptor(a, e)
                                .enumerable
                        })))
                    ),
                    t.forEach((function (n) {
                        _(e, n, a[n])
                    }))
                }
                return e
            }
            var S = function (e) {
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsxs)(s.default, {
                                children: [
                                    (0, t.jsx)("meta", {
                                        name: "title",
                                        content: "Dev Voyage",
                                        className: "jsx-9b34ce74bae27a8f"
                                    }),
                                    (0, t.jsx)("meta", {
                                        name: "description",
                                        content: "Sign in - Create - Share your portfolio in 3 easy steps to kickstart your soft" +
                                                "ware development voyage.",
                                        className: "jsx-9b34ce74bae27a8f"
                                    }),
                                    (0, t.jsx)("meta", {
                                        property: "og:type",
                                        content: "website",
                                        className: "jsx-9b34ce74bae27a8f"
                                    }),
                                    (0, t.jsx)("meta", {
                                        property: "og:url",
                                        content: "https://dev.voyage/",
                                        className: "jsx-9b34ce74bae27a8f"
                                    }),
                                    (0, t.jsx)("meta", {
                                        property: "og:title",
                                        content: "Dev Voyage",
                                        className: "jsx-9b34ce74bae27a8f"
                                    }),
                                    (0, t.jsx)("meta", {
                                        property: "og:description",
                                        content: "Sign in - Create - Share your portfolio in 3 easy steps to kickstart your soft" +
                                                "ware development voyage.",
                                        className: "jsx-9b34ce74bae27a8f"
                                    }),
                                    (0, t.jsx)("meta", {
                                        property: "og:image",
                                        content: "https://dev.voyage/og-image.png",
                                        className: "jsx-9b34ce74bae27a8f"
                                    }),
                                    (0, t.jsx)("meta", {
                                        property: "twitter:card",
                                        content: "summary_large_image",
                                        className: "jsx-9b34ce74bae27a8f"
                                    }),
                                    (0, t.jsx)("meta", {
                                        property: "twitter:url",
                                        content: "https://dev.voyage/",
                                        className: "jsx-9b34ce74bae27a8f"
                                    }),
                                    (0, t.jsx)("meta", {
                                        property: "twitter:title",
                                        content: "Dev Voyage",
                                        className: "jsx-9b34ce74bae27a8f"
                                    }),
                                    (0, t.jsx)("meta", {
                                        property: "twitter:description",
                                        content: "Sign in - Create - Share your portfolio in 3 easy steps to kickstart your soft" +
                                                "ware development voyage.",
                                        className: "jsx-9b34ce74bae27a8f"
                                    }),
                                    (0, t.jsx)("meta", {
                                        property: "twitter:image",
                                        content: "https://dev.voyage/og-image.png",
                                        className: "jsx-9b34ce74bae27a8f"
                                    })
                                ]
                            }),
                            (0, t.jsxs)("div", {
                                className: "jsx-9b34ce74bae27a8f landing_page_main custom_scrollbar",
                                children: [
                                    (0, t.jsx)(c, O({}, e)),
                                    (0, t.jsx)(v, O({}, e)),
                                    (0, t.jsx)(k, {}),
                                    (0, t.jsx)(N, {})
                                ]
                            }),
                            (0, t.jsx)(r.default, {
                                id: "9b34ce74bae27a8f",
                                children: "body {overflow:hidden}\n.landing_page_main {overflow-y:scroll;\nbackground-col" +
                                        "or:var(--m-background-color);\nheight:100vh;\ncolor:#fff}"
                            })
                        ]
                    })
                },
                P = a(5434);
            function C(e, n, a) {
                return n in e
                    ? Object.defineProperty(e, n, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    })
                    : e[n] = a,
                e
            }
            var E = !0,
                z = function (e) {
                    return e.userPage
                        ? (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(s.default, {
                                    children: (0, t.jsxs)("title", {
                                        children: [e.data.shortName, " | Dev Voyage"]
                                    }, "title")
                                }),
                                (0, t.jsx)(P.Z, {pageProps: e.data})
                            ]
                        })
                        : (0, t.jsx)(S, function (e) {
                            for (var n = 1; n < arguments.length; n++) {
                                var a = null != arguments[n]
                                        ? arguments[n]
                                        : {},
                                    t = Object.keys(a);
                                "function" === typeof Object.getOwnPropertySymbols && (
                                    t = t.concat(Object.getOwnPropertySymbols(a).filter((function (e) {
                                        return Object
                                            .getOwnPropertyDescriptor(a, e)
                                            .enumerable
                                    })))
                                ),
                                t.forEach((function (n) {
                                    C(e, n, a[n])
                                }))
                            }
                            return e
                        }({}, e))
                }
        }
    },
    function (e) {
        e.O(0, [
            415,
            445,
            13,
            994,
            167,
            209,
            774,
            888,
            179
        ], (function () {
            return n = 5301,
            e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);