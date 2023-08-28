import { resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 class="open-title" data-v-08c75ed8${_scopeId}>\u5F00\u6E90\u9879\u76EE</h4><p class="open-dosc" data-v-08c75ed8${_scopeId}> \u4F60\u597D\uFF0C\u8FD9\u91CC\u662F\u6211\u7684\u4E00\u4E2A\u5F00\u6E90\u4F5C\u54C1\u5408\u96C6\uFF0C\u7EF4\u62A4\u4E00\u4E9B\u6211\u8BA4\u4E3A\u53EF\u80FD\u6709\u7528\u7684\u4F5C\u54C1\uFF0C\u4F46\u662F\u4E2A\u4EBA\u7684\u7CBE\u529B\u6BD5\u7ADF\u8FD8\u662F\u6709\u9650\uFF0C\u6240\u4EE5\u4E5F\u5E0C\u671B\u6709\u5FD7\u540C\u9053\u5408\u7684\u540C\u5B66\u4E00\u8D77\uFF0C\u5982\u679C\u5BF9\u4E0B\u9762\u7684\u5F00\u6E90\u9879\u76EE\u6562\u5174\u8DA3\u7684\u8BDD\u53EF\u4EE5\u70B9\u51FB\u7533\u8BF7\u6309\u94AE\u53D1\u9001\u4E00\u5C01\u90AE\u4EF6\u6765\u4E00\u8D77\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728github\u4E0A\u76F4\u63A5\u63D0\u4EA4 </p><div class="open-box" data-v-08c75ed8${_scopeId}><!--[-->`);
        ssrRenderList(5, (n) => {
          _push2(ssrRenderComponent(_component_v_card, {
            class: "open-card",
            key: n
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="d-flex" style="${ssrRenderStyle({ "gap": "20px" })}" data-v-08c75ed8${_scopeId2}><div data-v-08c75ed8${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_v_avatar, {
                  color: "info",
                  size: "64"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_icon, { icon: "mdi-vuetify" }, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_icon, { icon: "mdi-vuetify" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div><div class="open-card-dosc" data-v-08c75ed8${_scopeId2}><div class="open-card-dosc-title-box d-flex justify-space-between" data-v-08c75ed8${_scopeId2}><h4 class="open-card-dosc-title" data-v-08c75ed8${_scopeId2}>Cain.js</h4><p class="open-card-dosc-star" data-v-08c75ed8${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_v_icon, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`mdi-star`);
                    } else {
                      return [
                        createTextVNode("mdi-star")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(` 100 </p></div><p class="open-card-dosc-dosc" data-v-08c75ed8${_scopeId2}>\u4E00\u4E2A\u8F7B\u5DE7\uFF0C\u7B80\u4FBF\u7684JavaScript\u6846\u67B6</p><div class="open-card-dosc-member" data-v-08c75ed8${_scopeId2}><!--[-->`);
                ssrRenderList(4, (n2) => {
                  _push3(ssrRenderComponent(_component_v_avatar, {
                    class: "avatarC",
                    style: { zIndex: 5 - n2 - 1 },
                    size: "30"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_img, {
                          src: "https://cdn.vuetifyjs.com/images/john.jpg",
                          alt: "John"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_img, {
                            src: "https://cdn.vuetifyjs.com/images/john.jpg",
                            alt: "John"
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]--></div><div class="mt-2" data-v-08c75ed8${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_v_btn, {
                  size: "small",
                  flat: "",
                  color: "cainblue"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` \u52A0\u5165\u6211\u4EEC`);
                    } else {
                      return [
                        createTextVNode(" \u52A0\u5165\u6211\u4EEC")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "d-flex",
                    style: { "gap": "20px" }
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_v_avatar, {
                        color: "info",
                        size: "64"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { icon: "mdi-vuetify" })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "open-card-dosc" }, [
                      createVNode("div", { class: "open-card-dosc-title-box d-flex justify-space-between" }, [
                        createVNode("h4", { class: "open-card-dosc-title" }, "Cain.js"),
                        createVNode("p", { class: "open-card-dosc-star" }, [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-star")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" 100 ")
                        ])
                      ]),
                      createVNode("p", { class: "open-card-dosc-dosc" }, "\u4E00\u4E2A\u8F7B\u5DE7\uFF0C\u7B80\u4FBF\u7684JavaScript\u6846\u67B6"),
                      createVNode("div", { class: "open-card-dosc-member" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(4, (n2) => {
                          return createVNode(_component_v_avatar, {
                            class: "avatarC",
                            style: { zIndex: 5 - n2 - 1 },
                            size: "30"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                alt: "John"
                              })
                            ]),
                            _: 2
                          }, 1032, ["style"]);
                        }), 64))
                      ]),
                      createVNode("div", { class: "mt-2" }, [
                        createVNode(_component_v_btn, {
                          size: "small",
                          flat: "",
                          color: "cainblue"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u52A0\u5165\u6211\u4EEC")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("h4", { class: "open-title" }, "\u5F00\u6E90\u9879\u76EE"),
          createVNode("p", { class: "open-dosc" }, " \u4F60\u597D\uFF0C\u8FD9\u91CC\u662F\u6211\u7684\u4E00\u4E2A\u5F00\u6E90\u4F5C\u54C1\u5408\u96C6\uFF0C\u7EF4\u62A4\u4E00\u4E9B\u6211\u8BA4\u4E3A\u53EF\u80FD\u6709\u7528\u7684\u4F5C\u54C1\uFF0C\u4F46\u662F\u4E2A\u4EBA\u7684\u7CBE\u529B\u6BD5\u7ADF\u8FD8\u662F\u6709\u9650\uFF0C\u6240\u4EE5\u4E5F\u5E0C\u671B\u6709\u5FD7\u540C\u9053\u5408\u7684\u540C\u5B66\u4E00\u8D77\uFF0C\u5982\u679C\u5BF9\u4E0B\u9762\u7684\u5F00\u6E90\u9879\u76EE\u6562\u5174\u8DA3\u7684\u8BDD\u53EF\u4EE5\u70B9\u51FB\u7533\u8BF7\u6309\u94AE\u53D1\u9001\u4E00\u5C01\u90AE\u4EF6\u6765\u4E00\u8D77\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728github\u4E0A\u76F4\u63A5\u63D0\u4EA4 "),
          createVNode("div", { class: "open-box" }, [
            (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
              return createVNode(_component_v_card, {
                class: "open-card",
                key: n
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "d-flex",
                    style: { "gap": "20px" }
                  }, [
                    createVNode("div", null, [
                      createVNode(_component_v_avatar, {
                        color: "info",
                        size: "64"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { icon: "mdi-vuetify" })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "open-card-dosc" }, [
                      createVNode("div", { class: "open-card-dosc-title-box d-flex justify-space-between" }, [
                        createVNode("h4", { class: "open-card-dosc-title" }, "Cain.js"),
                        createVNode("p", { class: "open-card-dosc-star" }, [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-star")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" 100 ")
                        ])
                      ]),
                      createVNode("p", { class: "open-card-dosc-dosc" }, "\u4E00\u4E2A\u8F7B\u5DE7\uFF0C\u7B80\u4FBF\u7684JavaScript\u6846\u67B6"),
                      createVNode("div", { class: "open-card-dosc-member" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(4, (n2) => {
                          return createVNode(_component_v_avatar, {
                            class: "avatarC",
                            style: { zIndex: 5 - n2 - 1 },
                            size: "30"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, {
                                src: "https://cdn.vuetifyjs.com/images/john.jpg",
                                alt: "John"
                              })
                            ]),
                            _: 2
                          }, 1032, ["style"]);
                        }), 64))
                      ]),
                      createVNode("div", { class: "mt-2" }, [
                        createVNode(_component_v_btn, {
                          size: "small",
                          flat: "",
                          color: "cainblue"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u52A0\u5165\u6211\u4EEC")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                _: 2
              }, 1024);
            }), 64))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/opens/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-08c75ed8"]]);

export { index as default };
//# sourceMappingURL=index-aca8a93a.mjs.map
