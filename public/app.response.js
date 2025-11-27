(() => {
    const e = typeof globalThis === "undefined" ? window : globalThis,
          t = window["lu3i4gnk.9pb"];
    /**
     * @description generates high-quality documentation for given code, providing various
     * utility functions for event handling, timeout management, and more.
     * 
     * @returns { object } a set of event listeners and a timer that handle various actions
     * when given an event or a timeout.
     */
    const n = (() => {
        /**
         * @description takes two arguments: an object `t` and a string `r`. It assigns `r`
         * to a variable `i`, appends the prefix from `t` to `i`, and sends the resulting
         * value to `t.sendToId(o, i)`.
         * 
         * @param { object } o - id of the object being updated and is used to send the updates
         * to the relevant server.
         * 
         * @param { object } r - response data to be sent to the server-side endpoint identified
         * by `o`.
         */
        /**
         * @description calls the `splice` method on the given array, passing an empty array
         * as the first argument, and then for each element in the original array, calls the
         * provided callback function without any arguments, or if an error occurs while
         * executing the callback, it logs the error message to the console.
         * 
         * @returns { undefined value. } a list of errors occurred while calling the functions
         * inside the spliced array.
         * 
         * 		- `n`: The array that is spliced and passed as an argument to `forEach`.
         * 		- `splice(0)`. Indicates the starting index position for the operation within
         * the `n` array.
         * 		- `(t=>{`). Denotes a function expression, where `t` represents the current
         * element of the `n` array, and `() => {...}` indicates that the function expression
         * should be executed for each element in the `n` array.
         * 		- `(e)`. The variable `e` represents any exception or error that may occur during
         * execution, if any.
         */
        /**
         * @description pushes an anonymous inner function to an array `n`, which executes
         * `e()` and handles potential exceptions by pushing them to `t`. If `n` is empty,
         * it sends a request to the server with the `id` of the top-level `t` object as a parameter.
         * 
         * @param { 𝘄unction or expression. } e - 2nd function to execute when no exception
         * occurs.
         * 
         * 		- `e` is an object that has been serialized from a previous state or input.
         * 		- It contains various properties or attributes, such as `n`, which is an array
         * containing a callback function, and `t`, which is a value used for identifying the
         * current state of the application.
         * 
         * 	The behavior of the `a` function involves checking if `e` exists, then calling
         * the callback function in `n` if `e` exists, otherwise, it calls the error handling
         * function `t` with the given error `e`.
         * 
         * 
         * @param { object } t - 2nd parameter of the callback function passed to the `n.push()`
         * method, which is used to handle any exceptions that may be thrown during the
         * execution of the function.
         */
        /**
         * @description takes a truthy or falsey value for `t` and returns a computed property
         * `n` which is the result of applying an identity transform to `e` depending on the
         * value of `t`.
         * 
         * @param { object } e - initial value of the state variable `n`.
         * 
         * @param { HTMLElement in the provided functional code snippet. } t - 2nd argument
         * of the inner function, which is used to compute the result of the nested function
         * call when `e[t]` is present.
         * 
         * 		- The value of `t` depends on the value of `e`, specifically `t` is created from
         * the `e[t]` property if `e` is not an empty object.
         * 		- If `e` is an empty object, then `t` will be a generic object with the properties
         * `Object.keys(e)` or `null` if `e` is null/undefined.
         * 		- The `t` property can be accessed using the `Ht()` function to perform various
         * operations such as adding, modifying, and removing values from it.
         * 		- The `n` variable is created from an empty object and is used in combination
         * with the `Ht()` function to create a new value for the `t` property based on the
         * values present in the `e` object.
         * 
         * 
         * @returns { object } a new object that represents the union of two other objects.
         */
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
            /**
             * @description is generated, taking an event type, a function to call when the event
             * occurs, and an optional capture and once object as arguments. The generated function
             * sets an event listener for the given event type on the target element, passing the
             * provided function as the callback and optionally capturing the context of the event.
             * 
             * @param { object } e - Event Object for which to attach the event listener.
             * 
             * @param { event target. } t - DOM element for which an event listener is being added.
             * 
             * 		- `type`: String representing the event type that the listener should handle
             * (e.g., "click", "input", etc.).
             * 		- `passive`: Boolean indicating whether the listener is passive (i.e., does not
             * preventdefault or stopImmediatePropagation) or active (i.e., does).
             * 		- `once`: Boolean indicating whether the listener should be called once and then
             * removed (i.e., "off") when the event occurs, or whether it should be called
             * repeatedly until the event is no longer available.
             * 		- `capture`: Boolean indicating whether the listener should be executed in the
             * capture phase of the event (i.e., before the event is passed to other listeners)
             * or in the bubble phase (i.e., after the event has been passed to other listeners).
             * 
             * 
             * @param { object } n - callback function that will be called when an event of type
             * `e.type` is triggered on the target `t`.
             * 
             * @returns { : `void`. } an object with properties capture, once, and passive, which
             * represent the configuration options for the event listener.
             * 
             * 		- `e`: The event object that was passed as an argument to the function. It
             * contains information about the event that occurred, such as its type, target
             * element, and other details.
             * 		- `t`: The target element for which the event listener was added. This can be
             * any HTML element or object.
             * 		- `n`: An optional function that is called when the event occurs. This function
             * takes two arguments: the event object and a reference to the target element.
             * 		- `r`: An optional function that is called after the event listener has been
             * added. This function takes one argument: the event object.
             * 
             * 	In summary, the output returned by `addEventListener` is an object with several
             * properties that provide information about the event and the event listener itself.
             */
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
            /**
             * @description is wrapped by the provided callbacks. The original `setTimeout` call
             * is canceled using `clearTimeout`, and the outer callback is executed when the inner
             * callback is called.
             * 
             * @param { function/function expression. } e - function to be executed after a timeout
             * period has elapsed.
             * 
             * 		- `e`: A function to be executed after a specific time (in milliseconds).
             * 		- `t`: The time (in milliseconds) after which the function will be executed.
             * 
             * 
             * @param { number } t - time delay (in milliseconds) for which the `e` value will
             * be scheduled to be executed after the current execution loop completes.
             * 
             * @returns { `Undefine`. } a reference to the new timeout ID.
             * 
             * 		- `o`: The timeout id assigned to the function, which can be used to cancel the
             * timeout.
             * 
             * 	The return value is an array containing three elements:
             * 
             * 		- `a`: The first element is a function that will be executed when the timeout occurs.
             * 		- `b`: The second element is a function that will be executed if an error occurs
             * while executing the first function.
             * 		- `c`: The third element is the original function passed to `setTimeout`.
             */
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
            /**
             * @description receives the `port.message` signal and sends it to a specified receiver
             * with an attached message `r`.
             * 
             * @param { number } t - 10-bit value that is used to generate the output message.
             * 
             * @param { number } n - 2D vector that is transformed by the GPU tensor operation.
             */
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
                /**
                 * @description cleans up any resources used during its execution.
                 */
                const n = () => {
                    e.cleanup()
                }
                ;
                e.once("cleanup", n),
                t && e.cleanup()
            }
            ,
            /**
             * @description is called with two arguments (t, n), and it executes the task associated
             * with n as soon as possible after t.
             * 
             * @param { "Event" in the provided code. } t - 2nd argument to be passed through to
             * the `once()` method.
             * 
             * 		- `t` is a plain object with arbitrary values.
             * 		- `n` is an optional parameter that specifies the property name to extract from
             * `t`. If `n` is absent or not a valid property name, the entire `t` object is returned.
             * 		- The `once` function creates a new property on the given context object if `n`
             * exists and is not already an existing property on the object.
             * 		- If `n` does not exist on the context object, the `once` function does nothing.
             * 
             * 
             * @param { object } n - 2nd event that is once triggered when the function is called
             * with the given `t` parameter.
             */
            once: (t,n)=>{
                e.once(t, n)
            }
            ,
            setMessageListener: t=>{
                e.setMessageListener(t)
            }
            ,
            /**
             * @description removes any leftover resources and prepares for termination.
             */
            cleanup: ()=>{
                e.cleanup()
            }
        });
        let r;
              /**
               * @description creates a new instance of the `RPC` class and returns an object with
               * various methods for sending and listening to messages over a WebSocket connection.
               * It takes two arguments: an options object with properties `sendPrefix` and
               * `listenPrefix`, which are used to set up the WebSocket connection, and an array
               * `a` of additional methods to include in the returned object.
               * 
               * @returns { object } an object that provides event emitters for the `send`, `once`,
               * `setMessageListener`, and `cleanup` methods of a messaging listener.
               */
        const i = (()=>{
            const n = {
                sendPrefix: "2C",
                listenPrefix: "2P"
            };
            return r ? r : (r = ((r = {
                bridges: {}
            })=>{
                const i = (e=>{
                    /**
                     * @description creates a listener instance and returns an object that implements
                     * message listener methods for WebSocket. It listens for messages on specified prefix,
                     * sends or emits events when message arrives, and provides cleanup method to remove
                     * itself from the listener queue.
                     * 
                     * @returns { object } a JavaScript object that implements an event emitter.
                     */
                    const o = (({sendPrefix: t,listenPrefix: n})=>{
                        /**
                         * @description creates a listener for an event bus, providing options to customize
                         * message handling and cleanup.
                         * 
                         * @param { object } e - message listener object that is used to define the send,
                         * once, setMessageListener, and cleanup methods of the output object.
                         * 
                         * @param { object } t - 3rd argument passed to the function, which is an object that
                         * gets augmented with the listeners and other properties before being returned as
                         * the final output.
                         * 
                         * @returns { object } a set of objects for handling incoming messages and dispatching
                         * them to subscribers.
                         */
                        const o = ((e,t)=>{
                            const n = (t=>{
                                const o = Gt({});
                                return {
                                    /**
                                     * @description generates and sends a message to the designated endpoint.
                                     * 
                                     * @param { number } r - 0-based array index of the first argument passed to `Gt()`
                                     * when called inside the `const s = ...` line, serving as the multi-dimensional
                                     * array's base index for looking up its values.
                                     * 
                                     * @param { number } i - 2nd argument passed to the `Gt` constructor and is used to
                                     * create the resulting Prometheus gauge object.
                                     */
                                    send: (r,i)=>{
                                        const s = Gt({
                                            m: r,
                                            a: i,
                                            r: null
                                        });
                                        e.send(t.sendPrefix, s)
                                    }
                                    ,
                                    /**
                                     * @description updates an array element and adds it to its own copy of the element.
                                     * It is recursive, working with elements of any array and recursively applying the
                                     * operation.
                                     * 
                                     * @param { object } r - 2-element array that holds the event and its corresponding
                                     * value, which are used to update the event object's properties in the given code.
                                     * 
                                     * @param { array } i - object value to be added to the existing array of values in
                                     * the `e[t]` property.
                                     */
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
                                    /**
                                     * @description removes any active listeners from an object, `o`, before it is garbage
                                     * collected or otherwise removed.
                                     */
                                    cleanup: ()=>{
                                        o.listener && delete o.listener
                                    }
                                }
                                ;
                                return t ? n(t) : o
                            }
                            )((e=>{
                                /**
                                 * @description sets up event listeners for a given prefix, handling messages, errors,
                                 * and cleanup. It returns an object with listener, messageListener, and cleanup functions.
                                 * 
                                 * @param { object } n - 2nd argument to the `listen` method, which is used to specify
                                 * the event listener function to be executed when the `r` object emits an event with
                                 * the `listenPrefix` string.
                                 * 
                                 * @param { Undefined, Null or Function value. } t - 3rd party code's listen method,
                                 * which is used to handle incoming messages and calls the `i.listener` function with
                                 * the received message.
                                 * 
                                 * 		- `e`: The original event object passed to `listen`.
                                 * 		- `s`: The serialized message received from the server.
                                 * 		- `a`: An optional message attribute containing additional information about the
                                 * message.
                                 * 		- `r`: A reference to the `Gt` instance that generated the deserialized message.
                                 * 		- `n`: A reference to the `n` function that created the `Gt` instance.
                                 * 		- `o`: An optional object containing various properties, such as ` listener`,
                                 * `receive`, and `cleanup`. These properties are explained in detail below:
                                 * 		+ `listener`: A function to be called with the received message.
                                 * 		+ `receive`: A function to be called when a new message is received from the server.
                                 * 		+ `cleanup`: A function to be called when the Gt instance is no longer needed.
                                 * 		- `i`: A reference to an inner function that implements the message listener logic.
                                 * 
                                 * 	The various properties and attributes of `t` are explained below:
                                 * 
                                 * 		- `r.cleanup`: The cleanup function to be called when the `Gt` instance is no
                                 * longer needed.
                                 * 		- `s`: The serialized message received from the server.
                                 * 		- `a`: An optional message attribute containing additional information about the
                                 * message.
                                 * 		- `o`: An optional object containing various properties, such as ` listener`,
                                 * `receive`, and `cleanup`. These properties are explained in detail below:
                                 * 		+ `listener`: A function to be called with the received message.
                                 * 		+ `receive`: A function to be called when a new message is received from the server.
                                 * 		+ `cleanup`: A function to be called when the Gt instance is no longer needed.
                                 * 
                                 * 
                                 * @returns { object } an object with properties for handling events, including
                                 * `listen`, `receive`, and `cleanup`.
                                 */
                                const t = (n,t)=>{
                                    const o = (r=>{
                                        const i = r => {
                                            let s = r;
                                            const a = o => {
                                                const l = gt(o);
                                                return {
                                                    /**
                                                     * @description takes an object `c` and a string `n.listenPrefix`, and sends the `c`
                                                     * object to the server as a message with the prefix `n.listenPrefix`.
                                                     * 
                                                     * @param { number } i - 1D mesh size in the grid of the generator.
                                                     * 
                                                     * @param { array } l - Listener for which the provided message will be sent.
                                                     */
                                                    send: (i,l)=>{
                                                        const c = Gt({
                                                            m: i,
                                                            a: l,
                                                            r: null
                                                        });
                                                        r.send(n.listenPrefix, c)
                                                    }
                                                    ,
                                                    /**
                                                     * @description updates an array element's value, adding a new value to it if one is
                                                     * not already present or existing, and then pushing the updated element onto the
                                                     * resultant array.
                                                     * 
                                                     * @param { integer } i - 0-based index of an element in the input array `r`, and is
                                                     * used to access the element at that position and push a new value onto the internal
                                                     * array being built.
                                                     * 
                                                     * @param { object } c - element to be appended to the inner array of the object `r`.
                                                     */
                                                    once: (i,c)=>{
                                                        const u = (r[i] = r[i] || []);
                                                        u.push(c)
                                                    }
                                                    ,
                                                    setMessageListener: r=>{
                                                        s = r
                                                    }
                                                    ,
                                                    /**
                                                     * @description deletes a referenced `s` variable if it exists.
                                                     */
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
                            /**
                             * @description creates an object `o` with methods for handling AMQP messages. These
                             * methods include sending, once, setMessageListener and cleanup. The function returns
                             * the created object.
                             * 
                             * @param { object } e - message to be sent to the client, and it is used to set the
                             * `method` property of the response object returned by the function.
                             * 
                             * @param { HTMLElement, since the function call involves calling a method on that
                             * element. } t - 3rd argument passed to the `Ht()` function, which is used to update
                             * the object's `send`, `once`, and `setMessageListener` methods.
                             * 
                             * 		- `m`: An object representing the method to be called, which is passed as the
                             * first argument to the listeners' `once()` method.
                             * 		- `a`: An object representing the arguments to be passed to the listeners'
                             * `once()` method.
                             * 		- `r`: A reference to the previous message listener returned by the
                             * `setMessageListener()` method. If it is not `null`, it represents the current
                             * message listener that should be removed in the `cleanup()` method.
                             * 
                             * 
                             * @returns { object } an object with various methods for handling incoming messages.
                             */
                            const i = ((e,t)=>{
                                const n = Gt({});
                                Ht(gt(t), (t=>{
                                    vt(n, t, Gt(e[t]))
                                }
                                ));
                                const o = {
                                    /**
                                     * @description sends a notification to a MQTT broker with the given topic and payload.
                                     * 
                                     * @param { object } e - 48-bit nonce value for the transaction.
                                     * 
                                     * @param { object } t - 14-byte elliptic curve private key used to encrypt or decrypt
                                     * data in the GT function call.
                                     */
                                    send: (e,t)=>{
                                        const r = Gt({
                                            m: e,
                                            a: t,
                                            r: null
                                        });
                                        n.send(t.sendPrefix, r)
                                    }
                                    ,
                                    /**
                                     * @description is called with two arguments: `t.listenPrefix` and a callback function
                                     * `n => { t.once(e, n) }`. The `once` function sets up an event listener on the `e`
                                     * event for the `n` object once, meaning that it will only register the event listener
                                     * once, even if the function is called multiple times.
                                     * 
                                     * @param { event. } e - event that triggers the listener to be called.
                                     * 
                                     * 		- `listenPrefix`: This is a property of `e` that specifies the prefix for listening
                                     * events.
                                     * 
                                     * 
                                     * @param { object } t - event that triggers the function, and it is used to once( )
                                     * (listenPrefix, callback)
                                     */
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
                                    /**
                                     * @description and any remaining tasks in `r()` are executed before the execution
                                     * context is cleaned up by the `n.cleanup()` call.
                                     */
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
                                /**
                                 * @description is used to send an error message `e` and a timestamp `t` to the console.
                                 * 
                                 * @param { "event" as denoted by its name in the provided code. } e - 2nd event to
                                 * be processed in the function.
                                 * 
                                 * 		- `e` is an object or an array with various attributes and properties that are
                                 * sent to the callback function `t`.
                                 * 
                                 * 
                                 * @param { array } t - event to be processed by the function.
                                 */
                                send: (e,t)=>{
                                    i.send(e, t)
                                }
                                ,
                                /**
                                 * @description sets an event listener on an element once, removing any existing
                                 * listeners. It takes two arguments: the event to listen for and the callback function
                                 * to execute when the event occurs.
                                 * 
                                 * @param { "event". } e - event that triggers the execution of the function.
                                 * 
                                 * 		- `e`: The deserialized input, which is either a promise or a value that can be
                                 * used to resolve a promise.
                                 * 		- `t`: The time at which the promise was resolved, expressed in milliseconds
                                 * since the epoch (January 1, 1970, 00:00:00 UTC).
                                 * 
                                 * 
                                 * @param { Event. } t - time at which the event occurred when called once.
                                 * 
                                 * 		- `e`: The event that triggered the callback.
                                 * 		- `t`: The deserialized input containing information from the event.
                                 */
                                once: (e,t)=>{
                                    i.once(e, t)
                                }
                                ,
                                setMessageListener: e=>{
                                    i.setMessageListener(e)
                                }
                                ,
                                /**
                                 * @description clears any intermediate or temporary values generated during the
                                 * execution of a function.
                                 */
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
                    /**
                     * @description defines a reactant object `r` with various methods for handling
                     * incoming messages. These include sending a message, once listening to a message,
                     * setting a message listener, and cleaning up.
                     * 
                     * @param { Event value. } t - 3rd party message object, which is passed through to
                     * the `send`, `once`, `setMessageListener`, and `cleanup` methods of the `r` variable.
                     * 
                     * 		- `m`: The message object containing the `e` property, which is the event that
                     * triggered the callback, and the `t` property, which represents the target of the
                     * message.
                     * 		- `a`: The arguments passed to the `once` method.
                     * 		- `r`: The reference to the `o` object, which is the observer for the `listenPrefix`.
                     * 		- `n`: The reference to the `o` object's `send` method, which is used to send
                     * messages to the observer.
                     * 
                     * 	The function returns an object with several methods:
                     * 
                     * 		- `send`: Sends a message to the observer with the specified `e` and `t` properties.
                     * 		- `once`: Adds a once callback to the observer for the specified `e`.
                     * 		- `setMessageListener`: Sets a message listener on the observer for the specified
                     * `method` and `args`.
                     * 		- `cleanup`: Cleanups the observer's state.
                     * 
                     * 
                     * @param { object } n - observer object, which is an implementation of the `Observer`
                     * interface that defines several methods for handling message listening and cleanup.
                     * 
                     * @returns { object } an object that provides various listeners for a message port.
                     */
                    const i = ((t,n)=>{
                        const o = Gt({});
                        Ht(gt(n), (t=>{
                            vt(o, t, Gt(e[t]))
                        }
                        ));
                        const r = {
                            /**
                             * @description is called with the `o` and `n` arguments to transmit a message prefixed
                             * by the value of `n`.
                             * 
                             * @param { JavaScript expression or statement. } e - 0-dimensional geometry for the
                             * algorithm to operate on.
                             * 
                             * 		- `m`: The `e` object's membrane, which contains information about the message
                             * format and other metadata.
                             * 		- `a`: The `e` object's atom, which contains the payload data.
                             * 		- `r`: The `e` object's receiver, which specifies the node that the message is
                             * being sent to.
                             * 
                             * 
                             * @param { object } t - 13-digit transaction ID passed from the user's payment form.
                             */
                            send: (e,t)=>{
                                const i = Gt({
                                    m: e,
                                    a: t,
                                    r: null
                                });
                                o.send(n.sendPrefix, i)
                            }
                            ,
                            /**
                             * @description is used to register a listener on an object and trigger it once with
                             * a passed event object.
                             * 
                             * @param { object } e - Event object emitted by the `listenPrefix` event on the `n`
                             * object.
                             * 
                             * @param { object } t - 3rd argument of the `listenPrefix()` method and specifies
                             * the event emitter to attach the listener to.
                             */
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
                            /**
                             * @description is called, and then any remaining code in the outer block is executed
                             * if the inner function returns a truthy value.
                             */
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
                        /**
                         * @description sends a message consisting of an event and its corresponding data to
                         * the frontend.
                         * 
                         * @param { object } e - event that triggered the function.
                         * 
                         * @param { object } t - 2nd value of an array that is being manipulated by the function.
                         */
                        send: (e,t)=>{
                            i.send(e, t)
                        }
                        ,
                        /**
                         * @description is called with two arguments `e` and `t`, and it immediately calls
                         * the provided callback function once, without storing it for later use.
                         * 
                         * @param { object } e - event that triggers the function to be executed.
                         * 
                         * @param { 𝑥 (closure). } t - timestamp of when the event occurred and is passed
                         * as an argument to the `i.once()` method.
                         * 
                         * 		- `e`: The event that triggered the function to run once. (Type: Event)
                         * 		- `t`: The deserialized input with various attributes, such as `t.event`, `t.type`,
                         * `t.data`, etc. (Type: Deserialized Input)
                         */
                        once: (e,t)=>{
                            i.once(e, t)
                        }
                        ,
                        setMessageListener: e=>{
                            i.setMessageListener(e)
                        }
                        ,
                        /**
                         * @description performs some operation necessary to prepare the environment for later
                         * use, such as releasing any resources or storing data for future use.
                         */
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
                    /**
                     * @description takes three arguments: `i`, `e`, and `r`. It checks if `i` is a boolean
                     * value, if it is it returns either `o` or `null`, otherwise it decrements the counter
                     * `r` by one and calls `m` with updated parameters.
                     * 
                     * @param { (B). } e - 16-bit number to be manipulated.
                     * 
                     * 		- `bt`: It is an internal method that takes the input `e` and returns a boolean
                     * value indicating whether it is a boolean or not.
                     * 		- `ht`: It is an internal method that takes the input `e` and returns a string
                     * value representing its type.
                     * 		- `mt`: It is an internal method that takes two arguments: the input `t` and the
                     * input `h`, which is the result of applying `ht` to `e`. It returns a new object
                     * that represents the combination of `t` and `h`.
                     * 
                     * 
                     * @param { ................ (fill in the blanks with an appropriate type). } o -
                     * output of the function and is used to compare it with the return value of the
                     * `bt()` function to determine whether the function was successful in its execution.
                     * 
                     * 		- `null != i && --r >= 0`: If `i` is not null, the `--r` variable decrements by
                     * 1 and the function call is attempted again until `r` reaches -1.
                     * 		- `t = mt(t, ht(e))`: The `t` variable is updated with the result of the `mt`
                     * function called with `ht(e)` as its first argument.
                     * 
                     * 
                     * @param { integer } r - "retry" counter for the recursive function, which is
                     * decremented on each call until it reaches a value of -1.
                     */
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
                        /**
                         * @description clears and re-adds an event listener to a target element for a specific
                         * event name. It also updates a data structure (d) with the provided function reference
                         * as its value for that event name.
                         * 
                         * @param { object } e - 2nd argument passed to the ` mn()` function, which is used
                         * to create a new event listener.
                         * 
                         * @param { HTMLElement (HTML element) or undefined, and if provided, it adds an event
                         * listener to 'n' and stores the resulting value returned by Rt in 'd[n]', otherwise
                         * it removes an event listener for 'n'. } t - 3rd party event target and is used to
                         * manage event listensers and reference the corresponding cleanup function for that
                         * target.
                         * 
                         * 		- `removeEventListener` - removes an event listener for a specific event name
                         * 		- `delete` - deletes an item from an array
                         * 		- `addEventListener` - adds an event listener for a specific event name
                         * 		- `e` - refers to the function being called with the passed in arguments
                         * 		- `s` - refers to the scope of the function being called
                         */
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
                            /**
                             * @description sets, retrieves or deletes a property on an object. It checks for
                             * configuration and enumerability, then updates the value based on the type of the
                             * property.
                             * 
                             * @param { object } e - 2-argument constructor function that is being processed by
                             * the function.
                             * 
                             * @param { object } t - 3rd argument of the function, which is used to determine if
                             * the enumeration or value of the object is configurable and writable, and to set
                             * the default values for the `configurable`, `writable`, and `value` properties of
                             * the object.
                             * 
                             * @param { object } o - 3rd party object that the function operates on, and its
                             * values are used to determine the configurable and enumerable properties of the object.
                             * 
                             * @returns { boolean } a value of type boolean indicating whether the property was
                             * successfully defined or not.
                             */
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
                            /**
                             * @description 1) checks if an object has a property, 2) removes the property and
                             * its value from the object if it exists, 3) updates any references to the property
                             * within the object or its nested objects, and 4) returns a boolean indicating whether
                             * the property was deleted successfully.
                             * 
                             * @param { (primitive or not primitive value). } e - target object in which to look
                             * up and delete property values.
                             * 
                             * 		- `d`: A property that contains the delete operation result for the given `t`
                             * property. It is set to `true` if the property exists and can be deleted, and `false`
                             * otherwise.
                             * 		- `l`: A property that indicates whether the `t` property is an array or not.
                             * If `l` is `true`, then `t` is an array; otherwise, it is not.
                             * 		- `w`: A property that represents the delete operation result for any nested
                             * objects within the `t` property. It is set to `true` if any such object exists and
                             * can be deleted, and `false` otherwise.
                             * 		- `a`: A property that contains the original value of the `t` property before
                             * deletion. Its type is determined by the `configurable` property of the `t` property.
                             * If `a` is an object or array, its properties and methods are included in the delete
                             * operation result.
                             * 		- `f`: An optional property that contains a reference to the function that caused
                             * the delete operation to occur. This property is only present if the delete operation
                             * was triggered by a function call.
                             * 		- `o`: An optional property that contains a reference to the original object
                             * that contained the `t` property before any deletions occurred. This property is
                             * only present if any properties were deleted from the object during the delete operation.
                             * 
                             * 
                             * @param { object } t - variable or property being processed.
                             * 
                             * @returns { object } a boolean indicating whether the property exists in the target
                             * object.
                             */
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
                            /**
                             * @description retrieves and returns a value from a storage object. If the value is
                             * not found or is a promise, it calls a delegate function to retrieve the value,
                             * returning the result if successful.
                             * 
                             * @param { `void`   value, or null, returned by an optional `Gt` or `i` expression
                             * at runtime, as determined by the type coercion performed within the given `function`.
                             * } e - result of calling the `get()` method on an object passed as argument, and
                             * its value is returned if it's a function and has `function` as type.
                             * 
                             * 		- `o`: The serialized object obtained from the cache or database. If it's a
                             * dictionary (i.e., `o.type === 'object'`), then `o` is its deserialized form.
                             * Otherwise, it's an instance of the class `Object`.
                             * 		- `t`: The string identifier of the function.
                             * 		- `a`: The cached result from a previous execution of the `get` function. If
                             * present, `a` contains either the resolved promise or the already-resolved value
                             * of the function.
                             * 		- `s`: A cache object containing the state of the serialized objects. The key
                             * `t` corresponds to the value `o` inside `s`.
                             * 		- `zn`: An optional value that can be used as a parameter for the `d` property
                             * of the result, which is an instance of `Object`.
                             * 		- `Mt`: A promise returned by the `get` function. If present, it resolves to a
                             * value of type `Object`.
                             * 		- `i`: An optional value that can be used as a parameter for the `l` property
                             * of the result, which is an instance of `Boolean`.
                             * 
                             * 	If `o.bind` is defined, the return value is created by calling `o.bind(thisArg)`.
                             * The `thisArg` parameter is an object whose `value` property corresponds to the
                             * value of `e.binding`.
                             * 
                             * 
                             * @param { string } t - token of interest for which the function determines the value
                             * or gets it from another source.
                             * 
                             * @returns { `o.value`, if `o` has a `once` property and it's being deleted, or the
                             * return value of the `get` function if it exists. } a value or a promise of a value,
                             * depending on whether the object has a `get` method and whether it's bound to the
                             * context.
                             * 
                             * 		- `d`: The type of the return value, either "object" or "array".
                             * 		- `l`: A boolean indicating whether the return value is an empty object or array.
                             * 		- `value`: If present, represents the return value itself.
                             * 		- `get`: If present and a function, represents the getter method for the property.
                             * 		- `bind`: If present and a function, represents the bind method for the property.
                             */
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
                            /**
                             * @description takes an object `o`, a property `t`, and a context `zn`. It returns
                             * an object containing the descriptor of the given property on the `o` object, with
                             * the descriptor's enumerable, configurable, writable, value, set, and get properties
                             * set to appropriate values.
                             * 
                             * @param { object } e - original value of the property being observed.
                             * 
                             * @param { object } t - object to which the get method should be applied.
                             * 
                             * @returns { object } an object containing information about a specified property
                             * on an object.
                             */
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
                            /**
                             * @description takes an object `r`, creates a new object `s`, and returns an array
                             * of unique property keys `n` that are present in both objects `r` and `s`.
                             * 
                             * @returns { array } an array of unique values.
                             */
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
                            /**
                             * @description modifies properties with write-protection and non-function setter/getter
                             * methods by calling `Gt` for values, and setting/getting them through their original
                             * functions.
                             * 
                             * @param { expression / value (indicated by the opening braces and the enclosed
                             * ternary expression inside them). } e - 12-ary function invoked upon each key's set
                             * method call.
                             * 
                             * 		- `s`: A mapping or an object with properties `t` and `o`. The value of `t` is
                             * either a string or an object reference, while the value of `o` is an object.
                             * 		- `i`: An inner function that returns an object containing `d`, which can be
                             * either an object or an empty value.
                             * 		- `a`: A boolean value indicating whether the deserialized input is an array.
                             * 		- `f`: A string value representing the serialization format of the input data.
                             * 		- `t`: The current property being processed, which is either a string or an
                             * object reference.
                             * 		- `o`: The current object being processed, which contains various properties and
                             * attributes.
                             * 		- `v`: A boolean value indicating whether the `t` property is an object reference.
                             * 		- `lt`: A boolean value indicating whether the `t` property is an array.
                             * 		- `p`: A boolean value indicating whether the input data can be changed or not.
                             * 
                             * 
                             * @param { object } t - property that needs to be updated
                             * 
                             * @param { object } o - object to be updated, and it is used to determine whether
                             * the setter function for a given property exists and is callable, as well as to
                             * update the property value if necessary.
                             * 
                             * @returns { boolean } an boolean value indicating whether the set operation was
                             * successful or not.
                             */
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
                    /**
                     * @description is called on both `s` and `o`, indicating that both objects should
                     * have any resources they acquired during their lifetimes released.
                     */
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
                /**
                 * @description creates a new message listener object `o` based on an optional input
                 * `e`, and returns that object. `o` has methods `send`, `once`, `setMessageListener`,
                 * and `cleanup`.
                 * 
                 * @returns { object } a new object with four methods: `send`, `once`, `setMessageListener`,
                 * and `cleanup`.
                 */
                const i = (({sendPrefix: t,listenPrefix: n})=>{
                    /**
                     * @description takes an optional `e` parameter and returns an object with send, once,
                     * setMessageListener, and cleanup methods, all of which take parameters from the
                     * original `t` argument.
                     * 
                     * @param { object } e - event object that contains data related to the message sent
                     * or received, and is used to determine which listener methods to call within the
                     * `n` function.
                     * 
                     * @param { object } t - 3rd-party library that defines the `Gt` method, which is
                     * being wrapped by the given function.
                     * 
                     * @returns { object } an object with methods for sending messages, listening to
                     * messages, and cleaning up listeners.
                     */
                    const o = ((e,t)=>{
                        const n = (t=>{
                            const o = Gt({});
                            return {
                                /**
                                 * @description sends a message to a specified receiver (r) with a given payload (i).
                                 * 
                                 * @param { object } r - 10-digit receipt number for which the GT request is being made.
                                 * 
                                 * @param { string } i - 2D point where to apply the geometric transformation to the
                                 * `r` input value.
                                 */
                                send: (r,i)=>{
                                    const s = Gt({
                                        m: r,
                                        a: i,
                                        r: null
                                    });
                                    e.send(t.sendPrefix, s)
                                }
                                ,
                                /**
                                 * @description adds an item to an array and then sets that array to its current
                                 * value, effectively replacing any previously set value for that key.
                                 * 
                                 * @param { array } r - 0-based index of an array element into which the function
                                 * pushes the value of the `i` input parameter.
                                 * 
                                 * @param { array } i - item to be added to the array `e[r]`.
                                 */
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
                                /**
                                 * @description removes the `o.listener` property from the provided object, if it exists.
                                 */
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
                    /**
                     * @description creates an object `o` that provides message-related functionalities
                     * for an event emitter `e`. The object has methods `send`, `once`, `setMessageListener`,
                     * and `cleanup`. These methods allow the listener to send messages, subscribe to
                     * events once, set a message listener, and clean up.
                     * 
                     * @param { object } e - event that triggered the function and is passed as an argument
                     * to the `send`, `once`, `setMessageListener`, and `cleanup` methods.
                     * 
                     * @param { object } t - 3rd argument to the `Ht()` method and is used to update the
                     * `n` object's listeners when `t` is a message event.
                     * 
                     * @returns { object } an object with five properties: `send`, `once`, `setMessageListener`,
                     * `cleanup`.
                     */
                    const i = ((e,t)=>{
                        const n = Gt({});
                        Ht(gt(t), (t=>{
                            vt(n, t, Gt(e[t]))
                        }
                        ));
                        const o = {
                            /**
                             * @description takes an event `e` and a message `t`, creates a notification `r` with
                             * the message, and sends it to the server via `n`.
                             * 
                             * @param { electronic mail address (or an alias of such). } e - matrix to which the
                             * Gaussian elimination algorithm will be applied.
                             * 
                             * 		- `m`: The input message to be sent.
                             * 		- `a`: The attachment object containing the message's payload.
                             * 		- `r`: The receipt of the message.
                             * 
                             * 
                             * @param { email. } t - transformation of the matrix `m` that should be applied to
                             * the input data before sending it as a notification to the client.
                             * 
                             * 		- `m`: The message to be sent.
                             * 		- `a`: The attachment(s) to be sent along with the message.
                             * 		- `r`: A reference to the response object that will be populated with the result
                             * of sending the message.
                             * 
                             * 	In summary, the function takes in a payload `e` and a callback `t`, which contains
                             * the details of the message to be sent, including any attachments, and then sends
                             * the message using the `send` method of the `n` object.
                             */
                            send: (e,t)=>{
                                const r = Gt({
                                    m: e,
                                    a: t,
                                    r: null
                                });
                                n.send(t.sendPrefix, r)
                            }
                            ,
                            /**
                             * @description is called with two arguments: a event listener `t.listenPrefix` and
                             * a callback function `n`. The callback function will be executed once when the event
                             * occurs.
                             * 
                             * @param { event. } e - event that triggers the callback function when it occurs.
                             * 
                             * 		- `t`: The `t` parameter is an object that represents the event to listen for.
                             * It has a `listenPrefix` property that specifies the event prefix.
                             * 
                             * 
                             * @param { object } t - 3rd argument to `n.once()`, which sets the event listener
                             * for the given event on the `n` object.
                             */
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
                            /**
                             * @description is called, followed by any remaining expressions inside `r`.
                             */
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
                        /**
                         * @description dispatches an event `e` and any arguments `t` to any registered listeners.
                         * 
                         * @param { `Error`. } e - event that triggered the function.
                         * 
                         * 		- `e`: The input provided by the caller to be sent. Its structure is dependent
                         * on the type of the function's parameter.
                         * 
                         * 
                         * @param { `Error`. } t - 2nd value of an event object that is sent to the listener
                         * as part of the dispatching process.
                         * 
                         * 		- `e`: The serialized message that was sent to the server for processing.
                         */
                        send: (e,t)=>{
                            i.send(e, t)
                        }
                        ,
                        /**
                         * @description takes an event and a time, invoking the callback only once when the
                         * event occurs at or after the specified time.
                         * 
                         * @param { object } e - Event Object that triggered the function execution.
                         * 
                         * @param { integer } t - timestamp of the event being handled by the function.
                         */
                        once: (e,t)=>{
                            i.once(e, t)
                        }
                        ,
                        setMessageListener: e=>{
                            i.setMessageListener(e)
                        }
                        ,
                        /**
                         * @description removes any unnecessary objects and resources that were created during
                         * execution, ensuring efficient memory management and preventing potential issues
                         * in future runs.
                         */
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
                /**
                 * @description creates an object `r` with various methods for handling incoming
                 * messages in an WebSocket server. These methods include `send`, `once`,
                 * `setMessageListener`, and `cleanup`.
                 * 
                 * @param { unknown (as the input type isn't mentioned) } t - 3rd argument passed to
                 * the `Ht()` method, which is used to create a new listener object.
                 * 
                 * 		- `m`: The method being called, which is passed as an argument to the function.
                 * 		- `a`: An object containing attributes of the message being sent or received.
                 * 		- `r`: A reference to the original request or response, depending on whether it
                 * was already processed by the `t` object or not.
                 * 
                 * 	The `t` object itself has the following methods:
                 * 
                 * 		- `send()`: Sends a message to the server with the given `e` and `t` properties.
                 * 		- `once()`: Registers a callback function to be called once when a message of a
                 * specific type is received.
                 * 		- `setMessageListener()`: Sets a message listener that processes incoming messages.
                 * 		- `cleanup()`: Cleans up the `t` object and any related resources.
                 * 
                 * 
                 * @param { object } n - event loop, and it is used to handle events emitted by the
                 * server.
                 * 
                 * @returns { object } an object with methods for sending, once, setting a message
                 * listener, and cleaning up.
                 */
                const a = ((t,n)=>{
                    const o = Gt({});
                    Ht(gt(n), (t=>{
                        vt(o, t, Gt(e[t]))
                    }
                    ));
                    const r = {
                        /**
                         * @description sends the notification to the `o.send` function. It takes two arguments:
                         * `n.sendPrefix`, which is a string value, and an anonymous object containing a `r`
                         * property that is set to null.
                         * 
                         * @param { object } e - 6-digit external ID of an order to be retrieved from the platform.
                         * 
                         * @param { object } t - timestamp for the generated ticket, which is then passed to
                         * the `o.send()` method as part of the prefix data for the ticket notification.
                         */
                        send: (e,t)=>{
                            const s = Gt({
                                m: e,
                                a: t,
                                r: null
                            });
                            o.send(n.sendPrefix, s)
                        }
                        ,
                        /**
                         * @description is called with an event listener and a callback function, attaching
                         * the callback to the event and ensuring it is only triggered once.
                         * 
                         * @param { object } e - event object that triggers the function's execution and
                         * passes it to the internal `once` method of the `t` variable for further processing.
                         * 
                         * @param { object } t - 3rd party event emitter that the function listens to for events.
                         */
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
                        /**
                         * @description and `s` execution are sequenced together by the anonymous function.
                         */
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
                    /**
                     * @description sends an error message or notification to the application's root
                     * component through its event bus.
                     * 
                     * @param { event. } e - event that is being handled by the function.
                     * 
                     * 		- `e`: A JavaScript object that has been deserialized from JSON data.
                     * 		- `t`: A JavaScript object representing the context in which the `send` function
                     * is being called.
                     * 
                     * 
                     * @param { `Error`. } t - 2nd event object to be processed by the function.
                     * 
                     * 		- `e`: The error object passed as an argument to the function. This can contain
                     * information about the error that occurred during serialization, such as the cause
                     * of the error and any additional data provided by the serializer.
                     */
                    send: (e,t)=>{
                        a.send(e, t)
                    }
                    ,
                    /**
                     * @description updates a property `a` with the given `event` and `time` arguments
                     * in a single-call event listener, preventing recursive listeners from being created.
                     * 
                     * @param { `Event`. } e - event to be listened to and passed to the `once()` method.
                     * 
                     * 		- Type: `e` is a `Function`.
                     * 		- Context: `e` represents a context or scope for which the function will be executed.
                     * 		- Time: `t` is a `time` parameter passed to the function, which specifies when
                     * the function should be executed.
                     * 
                     * 
                     * @param { Event. } t - 1st argument passed to the `once()` method when calling it
                     * with an event object and the current time.
                     * 
                     * 		- `e`: The event emitted by the internal `once` function upon invocation.
                     * 		- `t`: The deserialized input object containing information about the event.
                     */
                    once: (e,t)=>{
                        a.once(e, t)
                    }
                    ,
                    setMessageListener: e=>{
                        a.setMessageListener(e)
                    }
                    ,
                    /**
                     * @description clears any lingering objects and closures to free up memory, preventing
                     * accumulation of unnecessary data and promoting efficiency in the code.
                     */
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
                    /**
                     * @description remembers event listener and functions attached to an element.
                     * 
                     * @param { Function. } e - 2nd argument passed to the ` mn()` function, which returns
                     * an array containing the modified event object and the original event object.
                     * 
                     * 		- `e` is an object that represents the deserialized input.
                     * 		- `mn()` method is used to extract the nested object from the input `e`.
                     * 		- The result of `mn()` is stored in the variable `n`.
                     * 		- The property `d` contains a reference to the function that listens for events
                     * on the target element `t`.
                     * 		- If the nested object `o` is present, it means that there is an event listener
                     * attached to `t`.
                     * 		- The `removeEventListener()` method is called with the name of the event `n`
                     * and the function reference `o` to detach the event listener.
                     * 		- The property `d[n]` is set to the result of calling the `Rt()` function with
                     * the target element `t`, the string `s`, and the original input `e`.
                     * 		- The `addEventListener()` method is called with the name of the event `n` and
                     * the new function reference `e` to attach a new event listener to `t`.
                     * 
                     * 
                     * @param { HTMLButtonElement in the given code snippet. } t - 3D object being processed
                     * and is used to manage its animation state.
                     * 
                     * 		- `t`: An object that contains a single property, `addEventListener`, which is
                     * a function that adds an event listener to the `window` object.
                     * 		- `s`: A string value that represents the type of the event to be listened for
                     * (e.g., "load", "unload", etc.).
                     * 		- `e`: An object that contains several properties, including:
                     * 		+ `removeEventListener`: a function that removes an event listener from the
                     * `window` object.
                     * 		+ `delete`: a method that deletes the property from an object (in this case, `d`).
                     * 		+ `typeof`: a function that returns a string indicating the type of the value
                     * passed to it (in this case, "function").
                     */
                    const n = e=>{
                        let o, n;
                        const r = (o = Nt(t, e)) || (n = Nt(s, e));
                        return Gt({
                            d: r ? Gt(r) : r,
                            l: !!o,
                            w: !!n
                        })
                    }