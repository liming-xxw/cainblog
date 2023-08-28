import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
  const _component_v_img = resolveComponent("v-img");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_progress_linear = resolveComponent("v-progress-linear");
  const _component_v_card_item = resolveComponent("v-card-item");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_container, mergeProps({
    class: "d-flex",
    style: { "gap": "20px" }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="videos-left" data-v-bcfebd4f${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_card, { class: "user-card" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="about_info" data-v-bcfebd4f${_scopeId2}><div class="AvatarBox" data-v-bcfebd4f${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_avatar, { size: "60" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_img, {
                      src: " https://cainblog.oss-cn-hangzhou.aliyuncs.com/0_0.png",
                      alt: "John"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_img, {
                        src: " https://cainblog.oss-cn-hangzhou.aliyuncs.com/0_0.png",
                        alt: "John"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_img, {
                width: "70",
                style: { "position": "absolute", "top": "0px" },
                src: "https://cainblog.oss-cn-hangzhou.aliyuncs.com/ChampionIconFrame.webp"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="about_info_text" data-v-bcfebd4f${_scopeId2}>\u524D\u7AEF\u7684\u6280\u672F\u89C6\u9891</div></div><div class="d-flex justify-space-between" data-v-bcfebd4f${_scopeId2}><div class="user-tags" data-v-bcfebd4f${_scopeId2}><h4 data-v-bcfebd4f${_scopeId2}>\u89C6\u9891\u6570\u91CF</h4><p data-v-bcfebd4f${_scopeId2}>10</p></div>`);
              _push3(ssrRenderComponent(_component_v_divider, { vertical: "" }, null, _parent3, _scopeId2));
              _push3(`<div class="user-tags" data-v-bcfebd4f${_scopeId2}><h4 data-v-bcfebd4f${_scopeId2}>\u89C6\u9891\u89C2\u770B</h4><p data-v-bcfebd4f${_scopeId2}>100</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "about_info" }, [
                  createVNode("div", { class: "AvatarBox" }, [
                    createVNode(_component_v_avatar, { size: "60" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_img, {
                          src: " https://cainblog.oss-cn-hangzhou.aliyuncs.com/0_0.png",
                          alt: "John"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_img, {
                      width: "70",
                      style: { "position": "absolute", "top": "0px" },
                      src: "https://cainblog.oss-cn-hangzhou.aliyuncs.com/ChampionIconFrame.webp"
                    })
                  ]),
                  createVNode("div", { class: "about_info_text" }, "\u524D\u7AEF\u7684\u6280\u672F\u89C6\u9891")
                ]),
                createVNode("div", { class: "d-flex justify-space-between" }, [
                  createVNode("div", { class: "user-tags" }, [
                    createVNode("h4", null, "\u89C6\u9891\u6570\u91CF"),
                    createVNode("p", null, "10")
                  ]),
                  createVNode(_component_v_divider, { vertical: "" }),
                  createVNode("div", { class: "user-tags" }, [
                    createVNode("h4", null, "\u89C6\u9891\u89C2\u770B"),
                    createVNode("p", null, "100")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="videos-right" data-v-bcfebd4f${_scopeId}><!--[-->`);
        ssrRenderList(6, (n) => {
          _push2(ssrRenderComponent(_component_v_card, {
            key: n,
            "max-width": "270"
          }, {
            loader: withCtx(({ isActive }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_v_progress_linear, {
                  active: isActive,
                  color: "deep-purple",
                  height: "4",
                  indeterminate: ""
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_v_progress_linear, {
                    active: isActive,
                    color: "deep-purple",
                    height: "4",
                    indeterminate: ""
                  }, null, 8, ["active"])
                ];
              }
            }),
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_v_img, {
                  cover: "",
                  height: "250",
                  src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
                }, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_v_card_item, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_card_title, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`Cafe Badilico`);
                          } else {
                            return [
                              createTextVNode("Cafe Badilico")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_card_title, null, {
                          default: withCtx(() => [
                            createTextVNode("Cafe Badilico")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_v_card_text, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div data-v-bcfebd4f${_scopeId3}> Small plates, salads &amp; sandwiches - an intimate setting with 12 indoor seats plus patio seating. </div>`);
                    } else {
                      return [
                        createVNode("div", null, " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating. ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_v_divider, { class: "mx-4 mb-1" }, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_v_card_actions, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_btn, {
                        color: "deep-purple-lighten-2",
                        variant: "text"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(` Reserve `);
                          } else {
                            return [
                              createTextVNode(" Reserve ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_btn, {
                          color: "deep-purple-lighten-2",
                          variant: "text"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Reserve ")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_v_img, {
                    cover: "",
                    height: "250",
                    src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  }),
                  createVNode(_component_v_card_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, null, {
                        default: withCtx(() => [
                          createTextVNode("Cafe Badilico")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode("div", null, " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider, { class: "mx-4 mb-1" }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "deep-purple-lighten-2",
                        variant: "text"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reserve ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--></div>`);
      } else {
        return [
          createVNode("div", { class: "videos-left" }, [
            createVNode(_component_v_card, { class: "user-card" }, {
              default: withCtx(() => [
                createVNode("div", { class: "about_info" }, [
                  createVNode("div", { class: "AvatarBox" }, [
                    createVNode(_component_v_avatar, { size: "60" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_img, {
                          src: " https://cainblog.oss-cn-hangzhou.aliyuncs.com/0_0.png",
                          alt: "John"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_img, {
                      width: "70",
                      style: { "position": "absolute", "top": "0px" },
                      src: "https://cainblog.oss-cn-hangzhou.aliyuncs.com/ChampionIconFrame.webp"
                    })
                  ]),
                  createVNode("div", { class: "about_info_text" }, "\u524D\u7AEF\u7684\u6280\u672F\u89C6\u9891")
                ]),
                createVNode("div", { class: "d-flex justify-space-between" }, [
                  createVNode("div", { class: "user-tags" }, [
                    createVNode("h4", null, "\u89C6\u9891\u6570\u91CF"),
                    createVNode("p", null, "10")
                  ]),
                  createVNode(_component_v_divider, { vertical: "" }),
                  createVNode("div", { class: "user-tags" }, [
                    createVNode("h4", null, "\u89C6\u9891\u89C2\u770B"),
                    createVNode("p", null, "100")
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          createVNode("div", { class: "videos-right" }, [
            (openBlock(), createBlock(Fragment, null, renderList(6, (n) => {
              return createVNode(_component_v_card, {
                key: n,
                "max-width": "270"
              }, {
                loader: withCtx(({ isActive }) => [
                  createVNode(_component_v_progress_linear, {
                    active: isActive,
                    color: "deep-purple",
                    height: "4",
                    indeterminate: ""
                  }, null, 8, ["active"])
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_img, {
                    cover: "",
                    height: "250",
                    src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  }),
                  createVNode(_component_v_card_item, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_title, null, {
                        default: withCtx(() => [
                          createTextVNode("Cafe Badilico")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode("div", null, " Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_divider, { class: "mx-4 mb-1" }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        color: "deep-purple-lighten-2",
                        variant: "text"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Reserve ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/videos/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bcfebd4f"]]);

export { index as default };
//# sourceMappingURL=index-ecf7e38c.mjs.map
