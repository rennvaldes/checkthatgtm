parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    sPdT: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: !0,
        }),
          (exports.CoreComponent = void 0);
        const environment = "minified",
          defaultConfig = {
            minHeight: 730,
          };
        class CoreComponent {
          constructor(i, t) {
            for (const e in document.$$ac) this[e] = document.$$ac[e];
            (this.el = i),
              (this.data = {
                ...defaultConfig,
                ...t,
              }),
              (this.activeViewport = this.getActiveViewport()),
              (this.activeOrientation = this.viewportEmitter._orientation),
              (this.reducedMotion = this.prefersReducedMotion()),
              this.viewportEmitter.on("change:viewport", (i) => {
                this.onViewportChange(i);
              }),
              (this.onResize = this.onResize.bind(this)),
              (this.onViewportChange = this.onViewportChange.bind(this)),
              (this.initializeAnimation = this.initializeAnimation.bind(this)),
              (this.animReady = this.animReady.bind(this));
          }
          animReady() {
            this.initializeAnimation(),
              this.initializeTracking(),
              this.anim.on("ON_RESIZE_DEBOUNCED", () => {
                (this.activeViewport = this.getActiveViewport()),
                  (this.activeOrientation = this.viewportEmitter._orientation),
                  this.onResize();
              });
          }
          attach() {
            this.anim.ready.then(this.animReady);
          }
          initializeTracking() {
            this.trackVScroll(this.el, this.anim), this.trackClick(this.el);
          }
          isDev() {
            return "development" === environment;
          }
          checkParallaxEligibility() {
            return (
              !this.data.disableParallax &&
              !this.reducedMotion &&
              !(
                window.innerHeight <= this.data.minHeight &&
                "landscape" === this.activeOrientation
              ) &&
              !document.documentElement.classList.contains("text-zoom")
            );
          }
          getActiveViewport() {
            if (
              this.viewportEmitter._viewport &&
              "none" !== this.viewportEmitter._viewport
            )
              return this.viewportEmitter._viewport;
            return {
              S: "small",
              M: "medium",
              L: "large",
              X: "xlarge",
            }[this.anim.model.getBreakpoint()];
          }
          initializeAnimation() {}
          onResize(i) {}
          onViewportChange(i) {
            i && i.to && (this.activeViewport = i.to);
          }
        }
        exports.CoreComponent = CoreComponent;
      },
      {},
    ],
    fSCK: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: !0,
        }),
          (exports.Registry = void 0);
        class Registry {
          constructor(e, o) {
            this.init(e, o);
          }
          init(e, o) {
            const t = o
                .replace(/([A-Z])/g, " $1")
                .substr(1)
                .toLowerCase()
                .split(" ")
                .join("-"),
              n = document.querySelectorAll(`[data-component-name="${t}"]`);
            console.log(
              `%cRegistry found ${n.length} components for ${t}`,
              `color:${0 === n.length ? "red" : "green"}`
            ),
              Array.from(n).forEach((o) => {
                let n = {};
                const r = o.getAttribute("data-component-name"),
                  s = o.getAttribute("data-component-json");
                r.length ||
                  console.log(
                    `%cRegistry missing [data-component-name] for ${t} ${o}`,
                    "color:green"
                  );
                try {
                  n = JSON.parse(s);
                } catch (c) {
                  console.log(
                    `%cRegistry failed to parse JSON for ${t} ${o}`,
                    "color:red"
                  ),
                    console.warn(`Reason: ${c}`),
                    console.log(`%cInitializing ${t} with empty JSON => {}`),
                    (n = {});
                }
                new e(o, n);
                console.log(`%cInitializing ${t}`, "color:green");
              });
          }
        }
        exports.Registry = Registry;
      },
      {},
    ],
    WMMz: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
          value: !0,
        }),
          (exports.DnaCardCycler = void 0);
        var _coreComponent = require("../../core/core-component"),
          _registry = require("../../core/registry");
        class DnaCardCycler extends _coreComponent.CoreComponent {
          constructor(t, e) {
            super(t, e),
              this.unwrapSlyTags(),
              (this.enhancedClass = "enhanced"),
              (this.isStatic = !1),
              (this.isRTL = !!document.querySelector('html[dir="rtl"]')),
              (this.setupAnimation = this.setupAnimation.bind(this)),
              (this.scrollGroup = this.anim.createScrollGroup(this.el)),
              (this.scrollGroup.name = "Card Cycler"),
              (this.componentJson = JSON.parse(this.el.dataset.componentJson)),
              (this.sections = this.el.querySelectorAll(
                this.el.dataset.section
              )),
              (this.cards = this.el.querySelectorAll(".dna-card-cycler-tile")),
              (this.cardWrap = this.el.querySelector(".dna-card-cycler-tiles")),
              this.setComponentVariables(),
              this.initializeModals(),
              (this.attach = this.attach.bind(this)),
              (this.handleZoom = this.handleZoom.bind(this)),
              this.viewportEmitter.on(
                "change:orientation",
                this.handleOrientationChange.bind(this)
              ),
              window.addEventListener("load", this.attach),
              (this.tileIntervals = {
                small: 110,
                medium: 55,
                large: 55,
                xlarge: 55,
              }),
              (this.sectionPaddingTop = "134px");
          }
          accelerateArrowKeys() {
            document.addEventListener("keydown", (t) => {
              if (document.documentElement.classList.contains("has-modal"))
                return !0;
              const e = this.el.getBoundingClientRect();
              if (!(e.top <= 0 && e.bottom - window.innerHeight >= 0)) return;
              const s = t.code ? t.code : t.keyCode;
              let i = 0;
              if (38 === s || "ArrowUp" === s) t.preventDefault(), (i = -150);
              else {
                if (40 !== s && "ArrowDown" !== s) return;
                t.preventDefault(), (i = 150);
              }
              window.scrollBy({
                top: i,
                behavior: "smooth",
              });
            });
          }
          handleOrientationChange(t) {
            setTimeout(() => {
              this.isMobileLandscape() || this.detectParallaxEligibility();
            }, 300);
          }
          unwrapSlyTags() {
            const t = this.el.querySelector(".dna-card-cycler-sticky-wrap");
            t.querySelectorAll("sly").forEach((e) => {
              const s = e.querySelector("section");
              t.append(s), e.remove();
            });
          }
          handleZoom() {
            document.documentElement.classList.contains("text-zoom") ||
            document.documentElement.classList.contains("pinch-zoom")
              ? this.el.classList.remove(this.enhancedClass)
              : this.el.classList.add(this.enhancedClass),
              this.scrollGroup.forceUpdate();
          }
          initializeModals() {
            (this.modalTargets = []),
              (this.modalTriggers = this.el.querySelectorAll(
                this.modalTrigger
              )),
              this.modalTriggers.forEach((t, e) => {
                const s = document.getElementById(t.dataset.modalTarget);
                if (!s)
                  return void console.warn(`Modal target ${s} can't be found.`);
                if (-1 !== this.modalTargets.indexOf(s))
                  return void console.warn("Modal target already exists.");
                this.modalTargets.push(s);
                const i = s.querySelector(".modal-content"),
                  o = this.modal.init({
                    targetEl: i,
                    pageOverlay: !0,
                    modalCrossfadeBlur: !0,
                  }),
                  a = i.dataset.modalClassList.split(" "),
                  r = o.elements.closeButton;
                a.forEach((t) => o.elements.contentContainer.classList.add(t)),
                  r.classList.add("card-cycler-modal-close-button"),
                  t.addEventListener("click", (t) => {
                    t.preventDefault(),
                      o.open(),
                      (this.scrollPos = window.scrollY);
                  }),
                  r.addEventListener("click", () => {
                    setTimeout(() => {
                      window.scrollTo(0, this.scrollPos);
                    }, 100);
                  }),
                  o.elements.overlayContainer.addEventListener("click", (t) => {
                    t.target.classList.contains("modal-overlay-container") &&
                      setTimeout(() => {
                        window.scrollTo(0, this.scrollPos);
                      }, 100);
                  });
              });
          }
          setComponentVariables() {
            Object.keys(this.componentJson).forEach((t) => {
              this[t.replace(/-([a-z])/g, (t, e) => e.toUpperCase())] =
                this.componentJson[t];
            });
          }
          initializeAnimation() {
            super.initializeAnimation(), this.detectParallaxEligibility();
          }
          setupStaticAnalytics() {
            const t = this.el.querySelectorAll("[data-analytics-event]"),
              e = this.anim.createScrollGroup(this.el);
            t.forEach((t) => {
              e.addEvent(t, {
                start: "a0t - 50vh",
                end: "a0t",
                onEnter: () => {
                  this.trackEventOnce(t, "data-analytics-event");
                },
                anchors: [t],
              });
            });
          }
          setupAnimation() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = 0,
              s = 0,
              i = 0;
            this.sections.forEach((t, o) => {
              this.addCardKeyframes(t, o, e),
                ({ newTotalHeight: i, sectionHeight: s } =
                  this.addSubsectionKeyframes(t, o, e)),
                this.addFocusHandlers(t, e, s),
                (e = i);
            }),
              (e += 100),
              (e += this.getSectionTopPadding(
                this.sections[this.sections.length - 1]
              )),
              this.el.style.setProperty("--enhanced-height", `${e}vh`),
              t && this.scrollGroup.forceUpdate(),
              this.setWrapperBackground(),
              this.accelerateArrowKeys(),
              this.addZoomListeners(),
              (this.focus = new this.focusManager()),
              this.focus.init({
                el: this.el,
              });
          }
          addCardKeyframes(t, e, s) {
            const i = "small" === this.activeViewport,
              o = t.querySelectorAll(this.tile);
            let a = "";
            const r = {
              disabledWhen: ["static", "text-zoom", "pinch-zoom"],
              anchors: [this.el],
              breakpointMask: i ? "S" : "MLX",
            };
            if (i) {
              const e = t.querySelector(".dna-card-cycler-outer-container");
              r.anchors = [e];
            }
            let n = 0 === e ? "" : "+ 100vh";
            i || (n += a = `+ ${this.getSectionTopPadding(t) + 20}vh`);
            const l = i ? "a0t" : `a0t + ${s}vh ${n}`;
            o.forEach((t, e) => {
              const s = e + 1,
                a = `${100 * Math.max(e, 1)}h`,
                n = 1 === e ? l : `${l} + ${a}`,
                c = i ? "75h" : "100h",
                h = `${n} + ${c}`,
                d = `${l} + ${s}00h + ${a}`,
                p = `${d} + 100h`,
                m = 0 === e ? l : `${l} + ${s}00h - ${c} + ${a}`,
                u = `${m} + ${c}`;
              if (e > 1) {
                const e = `${n} - ${a}`,
                  s = `${e} + ${c}`;
                this.scrollGroup.addKeyframe(t, {
                  start: e,
                  end: s,
                  y: ["200h", "100h"],
                  ...r,
                });
              }
              if (0 !== e) {
                const s = {
                    start: n,
                    end: h,
                    onEnter: () => {
                      this.trackEventOnce(t, "data-analytics-event");
                    },
                    ...r,
                  },
                  i = {
                    start: n,
                    end: h,
                    y: ["100h", 0],
                    ...r,
                  },
                  a = {
                    start: n,
                    cssClass: "frontmost-tile",
                    toggle: !0,
                    ...r,
                  };
                e < o.length - 1 && (a.end = h),
                  this.scrollGroup.addKeyframe(t, i),
                  this.scrollGroup.addKeyframe(t, a),
                  this.scrollGroup.addEvent(t, s);
              }
              e !== o.length - 1 &&
                (this.scrollGroup.addKeyframe(t, {
                  start: m,
                  end: u,
                  scale: [null, 0.8],
                  opacity: [null, 0.25],
                  ...r,
                }),
                this.scrollGroup.addKeyframe(t, {
                  start: d,
                  end: p,
                  cssClass: "not-visible",
                  toggle: !0,
                  ...r,
                }),
                this.scrollGroup.addKeyframe(t, {
                  start: m,
                  cssClass: "rearmost-tile",
                  toggle: !0,
                  ...r,
                }));
            });
          }
          addSubsectionKeyframes(t, e, s) {
            const i = t.querySelectorAll(this.tile).length,
              o = this.tileIntervals[this.activeViewport] * i,
              a = {
                disabledWhen: ["static", "text-zoom"],
                anchors: [this.el],
                breakpointMask: "small" === this.activeViewport ? "S" : "MLX",
              };
            if ("small" === this.activeViewport)
              return (
                t.style.setProperty("--section-height-S", `${o}vh`),
                this.pxToVh(t.offsetHeight) + s
              );
            const r = "medium" === this.activeViewport ? 20 : 0,
              n = s,
              l = (s += 100);
            0 !== e &&
              this.scrollGroup.addKeyframe(t, {
                start: `a0t + ${n - r}vh`,
                end: `a0t + ${l - r}vh`,
                y: [0, "-100vh"],
                ...a,
              });
            const c = (s += o),
              h = (s += 100),
              d = 0 === e ? 0 : "-100vh",
              p = 0 === e ? `-${100 - r}vh` : `-${200 - r}vh`;
            return (
              e !== this.sections.length - 1 &&
                this.scrollGroup.addKeyframe(t, {
                  start: `a0t + ${c}vh`,
                  end: `a0t + ${h - r}vh`,
                  y: [d, p],
                  ...a,
                }),
              {
                newTotalHeight: (s -= 100),
                sectionHeight: 100,
              }
            );
          }
          getSectionTopPadding(t) {
            let e = this.pxToVh(
              getComputedStyle(t).getPropertyValue("padding-top")
            );
            return (
              (e && !isNaN(e)) || (e = this.pxToVh(this.sectionPaddingTop)), e
            );
          }
          pxToVh(t) {
            let e = t;
            return (
              "string" == typeof t && (e = parseInt(t.replace("px", ""))),
              Math.round((100 * e) / window.innerHeight)
            );
          }
          addFocusHandlers(t, e, s) {
            const i = "data-focus-expression",
              o = t.querySelectorAll(this.tile),
              a = t === this.sections[0];
            o.forEach((t, o) => {
              const r = t.querySelector(`[${i}]`),
                n = JSON.parse(r.getAttribute(i)),
                l = t.offsetHeight * o;
              (n.expression = `a0t + ${a ? e : e + s}vh + ${l}px`),
                (n.placement = `${l} or ${t.getComputedStyle}`),
                r.setAttribute(i, JSON.stringify(n));
            });
          }
          setWrapperBackground() {
            this.el.style.background = getComputedStyle(
              this.sections[this.sections.length - 1]
            ).getPropertyValue("background-color");
          }
          isMobileLandscape() {
            Array.from(this.cards).reduce(
              (t, e) => (e.offsetHeight > t ? e.offsetHeight : t),
              0
            ),
              parseInt(this.sectionPaddingTop.replace("px", "")),
              parseInt(
                getComputedStyle(this.cardWrap).marginTop.replace("px", "")
              );
            let t =
              "small" !== this.activeViewport && 820 >= window.innerHeight;
            const e =
              "small" === this.activeViewport &&
              "landscape" === this.activeOrientation;
            return (this.isStatic = e || !1), t || e;
          }
          addZoomListeners() {
            window.addEventListener("resize:pinch-zoom", this.handleZoom),
              window.addEventListener("resize:text-zoom", this.handleZoom),
              window.addEventListener("resize:text-zoom:ios", this.handleZoom);
          }
          detectParallaxEligibility() {
            if (this.scrollGroup)
              if (
                !this.checkParallaxEligibility() ||
                this.isMobileLandscape() ||
                this.isStatic
              ) {
                this.isStatic = !0;
                const t = this.scrollGroup.keyframeControllers.map((t) =>
                  t.remove()
                );
                Promise.all(t).then(() => {
                  this.el.classList.remove(this.enhancedClass),
                    this.setupStaticAnalytics();
                });
              } else if (
                (this.el.classList.add(this.enhancedClass),
                this.scrollGroup.keyframeControllers.length)
              ) {
                const t = this.scrollGroup.keyframeControllers.map((t) =>
                  t.remove()
                );
                Promise.all(t).then(() => this.setupAnimation(!0));
              } else this.setupAnimation();
          }
          onResize(t) {
            this.detectParallaxEligibility();
          }
        }
        (exports.DnaCardCycler = DnaCardCycler),
          new _registry.Registry(DnaCardCycler, "DnaCardCycler");
      },
      {
        "../../core/core-component": "sPdT",
        "../../core/registry": "fSCK",
      },
    ],
  },
  {},
  ["WMMz"],
  null
);
