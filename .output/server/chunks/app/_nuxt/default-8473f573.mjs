import { useSSRContext, defineComponent, ref, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, renderSlot } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'vue-router';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const appbar_list = ref([
      {
        url: "/",
        name: "\u9996\u9875"
      },
      {
        url: "/blogs",
        name: "\u535A\u5BA2"
      },
      {
        url: "/videos",
        name: "\u89C6\u9891"
      },
      {
        url: "/opens",
        name: "\u5F00\u6E90\u9879\u76EE"
      },
      {
        url: "/links",
        name: "\u53CB\u60C5\u94FE\u63A5"
      },
      {
        url: "/x",
        name: "\u5F52\u6863"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_app_bar, mergeProps({
        flat: "",
        border: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="header" data-v-59ba6562${_scopeId}><div class="header_nav" data-v-59ba6562${_scopeId}><div class="dancing logoFont" data-v-59ba6562${_scopeId}>CainBlog</div><div data-v-59ba6562${_scopeId}><!--[-->`);
            ssrRenderList(unref(appbar_list), (item, index) => {
              _push2(ssrRenderComponent(_component_v_btn, {
                key: index,
                to: item.url,
                exact: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><div data-v-59ba6562${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-weather-sunny" }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "header" }, [
                createVNode("div", { class: "header_nav" }, [
                  createVNode("div", { class: "dancing logoFont" }, "CainBlog"),
                  createVNode("div", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(appbar_list), (item, index) => {
                      return openBlock(), createBlock(_component_v_btn, {
                        key: index,
                        to: item.url,
                        exact: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))
                  ])
                ]),
                createVNode("div", null, [
                  createVNode(_component_v_btn, { icon: "mdi-weather-sunny" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-59ba6562"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_v_footer = resolveComponent("v-footer");
  const _component_VContainer = resolveComponent("VContainer");
  _push(ssrRenderComponent(_component_v_footer, mergeProps({ class: "c-footer" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_VContainer, { style: { "color": "white" } }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div data-v-e3adcee3${_scopeId2}><span class="dancing" style="${ssrRenderStyle({ "font-size": "40px" })}" data-v-e3adcee3${_scopeId2}>CainBlog</span><p class="dancing" data-v-e3adcee3${_scopeId2}>\xA92023 cainblog.com</p></div><div class="c-footer-list-box" data-v-e3adcee3${_scopeId2}><div class="c-footer-list" data-v-e3adcee3${_scopeId2}><div class="dancing" data-v-e3adcee3${_scopeId2}><h4 data-v-e3adcee3${_scopeId2}>\u5173\u4E8ECain\u535A\u5BA2</h4><div class="c-footer-list-box" data-v-e3adcee3${_scopeId2}><div class="c-footer-list-item" data-v-e3adcee3${_scopeId2}>\u5173\u4E8E\u6211\u4EEC</div><div class="c-footer-list-item" data-v-e3adcee3${_scopeId2}>\u514D\u8D23\u58F0\u660E</div></div></div><div class="dancing" data-v-e3adcee3${_scopeId2}><h4 data-v-e3adcee3${_scopeId2}>\u6700\u65B0\u535A\u5BA2</h4><div class="c-footer-list-box" data-v-e3adcee3${_scopeId2}><div class="c-footer-list-item" data-v-e3adcee3${_scopeId2}>\u5173\u4E8E\u6211\u4EEC</div><div class="c-footer-list-item" data-v-e3adcee3${_scopeId2}>\u514D\u8D23\u58F0\u660E</div></div></div><div class="dancing" data-v-e3adcee3${_scopeId2}><h4 data-v-e3adcee3${_scopeId2}>\u6700\u65B0\u89C6\u9891</h4><div class="c-footer-list-box" data-v-e3adcee3${_scopeId2}><div class="c-footer-list-item" data-v-e3adcee3${_scopeId2}>\u5173\u4E8E\u6211\u4EEC</div><div class="c-footer-list-item" data-v-e3adcee3${_scopeId2}>\u514D\u8D23\u58F0\u660E</div></div></div><div class="dancing" data-v-e3adcee3${_scopeId2}><h4 data-v-e3adcee3${_scopeId2}>\u5F00\u6E90\u9879\u76EE</h4><div class="c-footer-list-box" data-v-e3adcee3${_scopeId2}><div class="c-footer-list-item" data-v-e3adcee3${_scopeId2}>\u5173\u4E8E\u6211\u4EEC</div><div class="c-footer-list-item" data-v-e3adcee3${_scopeId2}>\u514D\u8D23\u58F0\u660E</div></div></div><div class="dancing" data-v-e3adcee3${_scopeId2}><h4 data-v-e3adcee3${_scopeId2}>\u53CB\u60C5\u94FE\u63A5</h4><div class="c-footer-list-box" data-v-e3adcee3${_scopeId2}><div class="c-footer-list-item" data-v-e3adcee3${_scopeId2}>\u5173\u4E8E\u6211\u4EEC</div><div class="c-footer-list-item" data-v-e3adcee3${_scopeId2}>\u514D\u8D23\u58F0\u660E</div></div></div></div></div><div class="c-footer-code" data-v-e3adcee3${_scopeId2}><p class="dancing" data-v-e3adcee3${_scopeId2}>Copyright \xA9 2023 cain Built with Docusaurus.</p><p class="dancing" data-v-e3adcee3${_scopeId2}>\u6E58ICP\u59072023001415\u53F7-1</p></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("span", {
                    class: "dancing",
                    style: { "font-size": "40px" }
                  }, "CainBlog"),
                  createVNode("p", { class: "dancing" }, "\xA92023 cainblog.com")
                ]),
                createVNode("div", { class: "c-footer-list-box" }, [
                  createVNode("div", { class: "c-footer-list" }, [
                    createVNode("div", { class: "dancing" }, [
                      createVNode("h4", null, "\u5173\u4E8ECain\u535A\u5BA2"),
                      createVNode("div", { class: "c-footer-list-box" }, [
                        createVNode("div", { class: "c-footer-list-item" }, "\u5173\u4E8E\u6211\u4EEC"),
                        createVNode("div", { class: "c-footer-list-item" }, "\u514D\u8D23\u58F0\u660E")
                      ])
                    ]),
                    createVNode("div", { class: "dancing" }, [
                      createVNode("h4", null, "\u6700\u65B0\u535A\u5BA2"),
                      createVNode("div", { class: "c-footer-list-box" }, [
                        createVNode("div", { class: "c-footer-list-item" }, "\u5173\u4E8E\u6211\u4EEC"),
                        createVNode("div", { class: "c-footer-list-item" }, "\u514D\u8D23\u58F0\u660E")
                      ])
                    ]),
                    createVNode("div", { class: "dancing" }, [
                      createVNode("h4", null, "\u6700\u65B0\u89C6\u9891"),
                      createVNode("div", { class: "c-footer-list-box" }, [
                        createVNode("div", { class: "c-footer-list-item" }, "\u5173\u4E8E\u6211\u4EEC"),
                        createVNode("div", { class: "c-footer-list-item" }, "\u514D\u8D23\u58F0\u660E")
                      ])
                    ]),
                    createVNode("div", { class: "dancing" }, [
                      createVNode("h4", null, "\u5F00\u6E90\u9879\u76EE"),
                      createVNode("div", { class: "c-footer-list-box" }, [
                        createVNode("div", { class: "c-footer-list-item" }, "\u5173\u4E8E\u6211\u4EEC"),
                        createVNode("div", { class: "c-footer-list-item" }, "\u514D\u8D23\u58F0\u660E")
                      ])
                    ]),
                    createVNode("div", { class: "dancing" }, [
                      createVNode("h4", null, "\u53CB\u60C5\u94FE\u63A5"),
                      createVNode("div", { class: "c-footer-list-box" }, [
                        createVNode("div", { class: "c-footer-list-item" }, "\u5173\u4E8E\u6211\u4EEC"),
                        createVNode("div", { class: "c-footer-list-item" }, "\u514D\u8D23\u58F0\u660E")
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "c-footer-code" }, [
                  createVNode("p", { class: "dancing" }, "Copyright \xA9 2023 cain Built with Docusaurus."),
                  createVNode("p", { class: "dancing" }, "\u6E58ICP\u59072023001415\u53F7-1")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_VContainer, { style: { "color": "white" } }, {
            default: withCtx(() => [
              createVNode("div", null, [
                createVNode("span", {
                  class: "dancing",
                  style: { "font-size": "40px" }
                }, "CainBlog"),
                createVNode("p", { class: "dancing" }, "\xA92023 cainblog.com")
              ]),
              createVNode("div", { class: "c-footer-list-box" }, [
                createVNode("div", { class: "c-footer-list" }, [
                  createVNode("div", { class: "dancing" }, [
                    createVNode("h4", null, "\u5173\u4E8ECain\u535A\u5BA2"),
                    createVNode("div", { class: "c-footer-list-box" }, [
                      createVNode("div", { class: "c-footer-list-item" }, "\u5173\u4E8E\u6211\u4EEC"),
                      createVNode("div", { class: "c-footer-list-item" }, "\u514D\u8D23\u58F0\u660E")
                    ])
                  ]),
                  createVNode("div", { class: "dancing" }, [
                    createVNode("h4", null, "\u6700\u65B0\u535A\u5BA2"),
                    createVNode("div", { class: "c-footer-list-box" }, [
                      createVNode("div", { class: "c-footer-list-item" }, "\u5173\u4E8E\u6211\u4EEC"),
                      createVNode("div", { class: "c-footer-list-item" }, "\u514D\u8D23\u58F0\u660E")
                    ])
                  ]),
                  createVNode("div", { class: "dancing" }, [
                    createVNode("h4", null, "\u6700\u65B0\u89C6\u9891"),
                    createVNode("div", { class: "c-footer-list-box" }, [
                      createVNode("div", { class: "c-footer-list-item" }, "\u5173\u4E8E\u6211\u4EEC"),
                      createVNode("div", { class: "c-footer-list-item" }, "\u514D\u8D23\u58F0\u660E")
                    ])
                  ]),
                  createVNode("div", { class: "dancing" }, [
                    createVNode("h4", null, "\u5F00\u6E90\u9879\u76EE"),
                    createVNode("div", { class: "c-footer-list-box" }, [
                      createVNode("div", { class: "c-footer-list-item" }, "\u5173\u4E8E\u6211\u4EEC"),
                      createVNode("div", { class: "c-footer-list-item" }, "\u514D\u8D23\u58F0\u660E")
                    ])
                  ]),
                  createVNode("div", { class: "dancing" }, [
                    createVNode("h4", null, "\u53CB\u60C5\u94FE\u63A5"),
                    createVNode("div", { class: "c-footer-list-box" }, [
                      createVNode("div", { class: "c-footer-list-item" }, "\u5173\u4E8E\u6211\u4EEC"),
                      createVNode("div", { class: "c-footer-list-item" }, "\u514D\u8D23\u58F0\u660E")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "c-footer-code" }, [
                createVNode("p", { class: "dancing" }, "Copyright \xA9 2023 cain Built with Docusaurus."),
                createVNode("p", { class: "dancing" }, "\u6E58ICP\u59072023001415\u53F7-1")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e3adcee3"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_layout_header = __nuxt_component_0;
  const _component_v_main = resolveComponent("v-main");
  const _component_layout_footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_layout_header, null, null, _parent));
  _push(ssrRenderComponent(_component_v_main, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(ssrRenderComponent(_component_layout_footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-8473f573.mjs.map
