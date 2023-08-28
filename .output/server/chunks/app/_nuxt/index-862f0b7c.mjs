import { resolveComponent, resolveDirective, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_subheader = resolveComponent("v-list-subheader");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_title = resolveComponent("v-list-item-title");
      const _component_v_badge = resolveComponent("v-badge");
      const _component_v_chip = resolveComponent("v-chip");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _directive_ripple = resolveDirective("ripple");
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        class: "d-flex justify-space-between",
        style: { "gap": "20px" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="blogs-left" data-v-6e5f8b2a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_card, { class: "user-card" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="about_info" data-v-6e5f8b2a${_scopeId2}><div class="AvatarBox" data-v-6e5f8b2a${_scopeId2}>`);
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
                  _push3(`</div><div class="about_info_text" data-v-6e5f8b2a${_scopeId2}>\u524D\u7AEF\u7684\u6280\u672F\u535A\u5BA2</div></div><div class="d-flex justify-space-between" data-v-6e5f8b2a${_scopeId2}><div class="user-tags" data-v-6e5f8b2a${_scopeId2}><h4 data-v-6e5f8b2a${_scopeId2}>\u6587\u7AE0\u6570\u91CF</h4><p data-v-6e5f8b2a${_scopeId2}>16</p></div>`);
                  _push3(ssrRenderComponent(_component_v_divider, { vertical: "" }, null, _parent3, _scopeId2));
                  _push3(`<div class="user-tags" data-v-6e5f8b2a${_scopeId2}><h4 data-v-6e5f8b2a${_scopeId2}>\u6587\u7AE0\u9605\u8BFB</h4><p data-v-6e5f8b2a${_scopeId2}>16</p></div></div>`);
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
                      createVNode("div", { class: "about_info_text" }, "\u524D\u7AEF\u7684\u6280\u672F\u535A\u5BA2")
                    ]),
                    createVNode("div", { class: "d-flex justify-space-between" }, [
                      createVNode("div", { class: "user-tags" }, [
                        createVNode("h4", null, "\u6587\u7AE0\u6570\u91CF"),
                        createVNode("p", null, "16")
                      ]),
                      createVNode(_component_v_divider, { vertical: "" }),
                      createVNode("div", { class: "user-tags" }, [
                        createVNode("h4", null, "\u6587\u7AE0\u9605\u8BFB"),
                        createVNode("p", null, "16")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card, { class: "special-column mt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list, {
                    density: "compact",
                    nav: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_subheader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u6587\u7AE0\u4E13\u680F`);
                            } else {
                              return [
                                createTextVNode("\u6587\u7AE0\u4E13\u680F")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(items, (item, i) => {
                          _push4(ssrRenderComponent(_component_v_list_item, {
                            key: i,
                            value: item,
                            color: "primary"
                          }, {
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_badge, {
                                  color: "error",
                                  content: "6",
                                  inline: ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_badge, {
                                    color: "error",
                                    content: "6",
                                    inline: ""
                                  })
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list_item_title, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_list_item_title, {
                                    textContent: toDisplayString(item.text)
                                  }, null, 8, ["textContent"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_v_list_subheader, null, {
                            default: withCtx(() => [
                              createTextVNode("\u6587\u7AE0\u4E13\u680F")
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(items, (item, i) => {
                            return createVNode(_component_v_list_item, {
                              key: i,
                              value: item,
                              color: "primary"
                            }, {
                              append: withCtx(() => [
                                createVNode(_component_v_badge, {
                                  color: "error",
                                  content: "6",
                                  inline: ""
                                })
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, {
                                  textContent: toDisplayString(item.text)
                                }, null, 8, ["textContent"])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list, {
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_subheader, null, {
                          default: withCtx(() => [
                            createTextVNode("\u6587\u7AE0\u4E13\u680F")
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(items, (item, i) => {
                          return createVNode(_component_v_list_item, {
                            key: i,
                            value: item,
                            color: "primary"
                          }, {
                            append: withCtx(() => [
                              createVNode(_component_v_badge, {
                                color: "error",
                                content: "6",
                                inline: ""
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, {
                                textContent: toDisplayString(item.text)
                              }, null, 8, ["textContent"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card, {
              class: "blogs-tags mt-4 d-flex",
              style: { "gap": "5px", "padding": "15px", "flex-wrap": "wrap" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(10, (n) => {
                    _push3(`<div data-v-6e5f8b2a${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_chip, {
                      size: "small",
                      label: "",
                      color: "cainblue"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Vue.js `);
                        } else {
                          return [
                            createTextVNode(" Vue.js ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(10, (n) => {
                      return createVNode("div", { key: n }, [
                        createVNode(_component_v_chip, {
                          size: "small",
                          label: "",
                          color: "cainblue"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Vue.js ")
                          ]),
                          _: 1
                        })
                      ]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="blogs-content" data-v-6e5f8b2a${_scopeId}><!--[-->`);
            ssrRenderList(4, (n) => {
              _push2(ssrRenderComponent(_component_v_card, mergeProps({
                class: "blog-card",
                key: n
              }, ssrGetDirectiveProps(_ctx, _directive_ripple)), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="d-flex blog-card-box" data-v-6e5f8b2a${_scopeId2}><div data-v-6e5f8b2a${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_img, {
                      width: 100,
                      height: "100%",
                      cover: "",
                      src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="blog-card-dosc" data-v-6e5f8b2a${_scopeId2}><h4 class="blog-card-dosc-title" data-v-6e5f8b2a${_scopeId2}>\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757</h4>`);
                    _push3(ssrRenderComponent(_component_v_chip, {
                      size: "x-small",
                      label: "",
                      color: "cainblue"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Vue.js `);
                        } else {
                          return [
                            createTextVNode(" Vue.js ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<p class="blog-card-dosc-p" data-v-6e5f8b2a${_scopeId2}> \u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5123333333333\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757 </p><div class="blog-card-tags" data-v-6e5f8b2a${_scopeId2}><span class="blog-card-tag" data-v-6e5f8b2a${_scopeId2}>\u53D1\u5E03\u65F6\u95F4:2023-8-27</span><span class="blog-card-tag" data-v-6e5f8b2a${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_icon, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` mdi-eye-outline `);
                        } else {
                          return [
                            createTextVNode(" mdi-eye-outline ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`123</span><span class="blog-card-tag" data-v-6e5f8b2a${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_icon, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` mdi-thumb-up-outline `);
                        } else {
                          return [
                            createTextVNode(" mdi-thumb-up-outline ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`123</span><span class="blog-card-tag" data-v-6e5f8b2a${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_v_icon, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` mdi-comment-outline `);
                        } else {
                          return [
                            createTextVNode(" mdi-comment-outline ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`123</span></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "d-flex blog-card-box" }, [
                        createVNode("div", null, [
                          createVNode(_component_v_img, {
                            width: 100,
                            height: "100%",
                            cover: "",
                            src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                          })
                        ]),
                        createVNode("div", { class: "blog-card-dosc" }, [
                          createVNode("h4", { class: "blog-card-dosc-title" }, "\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757"),
                          createVNode(_component_v_chip, {
                            size: "x-small",
                            label: "",
                            color: "cainblue"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Vue.js ")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "blog-card-dosc-p" }, " \u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5123333333333\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757 "),
                          createVNode("div", { class: "blog-card-tags" }, [
                            createVNode("span", { class: "blog-card-tag" }, "\u53D1\u5E03\u65F6\u95F4:2023-8-27"),
                            createVNode("span", { class: "blog-card-tag" }, [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-eye-outline ")
                                ]),
                                _: 1
                              }),
                              createTextVNode("123")
                            ]),
                            createVNode("span", { class: "blog-card-tag" }, [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-thumb-up-outline ")
                                ]),
                                _: 1
                              }),
                              createTextVNode("123")
                            ]),
                            createVNode("span", { class: "blog-card-tag" }, [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-comment-outline ")
                                ]),
                                _: 1
                              }),
                              createTextVNode("123")
                            ])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="blogs-right" data-v-6e5f8b2a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              loading: _ctx.loading,
              density: "compact",
              variant: "solo",
              label: "Search templates",
              "append-inner-icon": "mdi-magnify",
              "single-line": "",
              "hide-details": "",
              "onClick:appendInner": _ctx.onClick
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card, { class: "newblogs mt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list, {
                    density: "compact",
                    nav: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_subheader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u6700\u65B0\u6587\u7AE0`);
                            } else {
                              return [
                                createTextVNode("\u6700\u65B0\u6587\u7AE0")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(items, (item, i) => {
                          _push4(ssrRenderComponent(_component_v_list_item, {
                            key: i,
                            value: item,
                            color: "primary"
                          }, {
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p style="${ssrRenderStyle({ "font-size": "12px" })}" data-v-6e5f8b2a${_scopeId4}>2023-8-27</p>`);
                              } else {
                                return [
                                  createVNode("p", { style: { "font-size": "12px" } }, "2023-8-27")
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list_item_title, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_list_item_title, {
                                    textContent: toDisplayString(item.text)
                                  }, null, 8, ["textContent"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_v_list_subheader, null, {
                            default: withCtx(() => [
                              createTextVNode("\u6700\u65B0\u6587\u7AE0")
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(items, (item, i) => {
                            return createVNode(_component_v_list_item, {
                              key: i,
                              value: item,
                              color: "primary"
                            }, {
                              append: withCtx(() => [
                                createVNode("p", { style: { "font-size": "12px" } }, "2023-8-27")
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, {
                                  textContent: toDisplayString(item.text)
                                }, null, 8, ["textContent"])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list, {
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_subheader, null, {
                          default: withCtx(() => [
                            createTextVNode("\u6700\u65B0\u6587\u7AE0")
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(items, (item, i) => {
                          return createVNode(_component_v_list_item, {
                            key: i,
                            value: item,
                            color: "primary"
                          }, {
                            append: withCtx(() => [
                              createVNode("p", { style: { "font-size": "12px" } }, "2023-8-27")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, {
                                textContent: toDisplayString(item.text)
                              }, null, 8, ["textContent"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card, { class: "newblogs mt-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list, {
                    density: "compact",
                    nav: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_list_subheader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u7CBE\u54C1\u63A8\u8350`);
                            } else {
                              return [
                                createTextVNode("\u7CBE\u54C1\u63A8\u8350")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<!--[-->`);
                        ssrRenderList(items, (item, i) => {
                          _push4(ssrRenderComponent(_component_v_list_item, {
                            key: i,
                            value: item,
                            color: "primary"
                          }, {
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<p style="${ssrRenderStyle({ "font-size": "12px" })}" data-v-6e5f8b2a${_scopeId4}>1000\u4EBA\u9605\u8BFB\u8FC7</p>`);
                              } else {
                                return [
                                  createVNode("p", { style: { "font-size": "12px" } }, "1000\u4EBA\u9605\u8BFB\u8FC7")
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list_item_title, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_list_item_title, {
                                    textContent: toDisplayString(item.text)
                                  }, null, 8, ["textContent"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          createVNode(_component_v_list_subheader, null, {
                            default: withCtx(() => [
                              createTextVNode("\u7CBE\u54C1\u63A8\u8350")
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(items, (item, i) => {
                            return createVNode(_component_v_list_item, {
                              key: i,
                              value: item,
                              color: "primary"
                            }, {
                              append: withCtx(() => [
                                createVNode("p", { style: { "font-size": "12px" } }, "1000\u4EBA\u9605\u8BFB\u8FC7")
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_title, {
                                  textContent: toDisplayString(item.text)
                                }, null, 8, ["textContent"])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list, {
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_subheader, null, {
                          default: withCtx(() => [
                            createTextVNode("\u7CBE\u54C1\u63A8\u8350")
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(items, (item, i) => {
                          return createVNode(_component_v_list_item, {
                            key: i,
                            value: item,
                            color: "primary"
                          }, {
                            append: withCtx(() => [
                              createVNode("p", { style: { "font-size": "12px" } }, "1000\u4EBA\u9605\u8BFB\u8FC7")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, {
                                textContent: toDisplayString(item.text)
                              }, null, 8, ["textContent"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "blogs-left" }, [
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
                      createVNode("div", { class: "about_info_text" }, "\u524D\u7AEF\u7684\u6280\u672F\u535A\u5BA2")
                    ]),
                    createVNode("div", { class: "d-flex justify-space-between" }, [
                      createVNode("div", { class: "user-tags" }, [
                        createVNode("h4", null, "\u6587\u7AE0\u6570\u91CF"),
                        createVNode("p", null, "16")
                      ]),
                      createVNode(_component_v_divider, { vertical: "" }),
                      createVNode("div", { class: "user-tags" }, [
                        createVNode("h4", null, "\u6587\u7AE0\u9605\u8BFB"),
                        createVNode("p", null, "16")
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card, { class: "special-column mt-4" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_list, {
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_subheader, null, {
                          default: withCtx(() => [
                            createTextVNode("\u6587\u7AE0\u4E13\u680F")
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(items, (item, i) => {
                          return createVNode(_component_v_list_item, {
                            key: i,
                            value: item,
                            color: "primary"
                          }, {
                            append: withCtx(() => [
                              createVNode(_component_v_badge, {
                                color: "error",
                                content: "6",
                                inline: ""
                              })
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, {
                                textContent: toDisplayString(item.text)
                              }, null, 8, ["textContent"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card, {
                  class: "blogs-tags mt-4 d-flex",
                  style: { "gap": "5px", "padding": "15px", "flex-wrap": "wrap" }
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(Fragment, null, renderList(10, (n) => {
                      return createVNode("div", { key: n }, [
                        createVNode(_component_v_chip, {
                          size: "small",
                          label: "",
                          color: "cainblue"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Vue.js ")
                          ]),
                          _: 1
                        })
                      ]);
                    }), 64))
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "blogs-content" }, [
                (openBlock(), createBlock(Fragment, null, renderList(4, (n) => {
                  return withDirectives(createVNode(_component_v_card, {
                    class: "blog-card",
                    key: n
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "d-flex blog-card-box" }, [
                        createVNode("div", null, [
                          createVNode(_component_v_img, {
                            width: 100,
                            height: "100%",
                            cover: "",
                            src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                          })
                        ]),
                        createVNode("div", { class: "blog-card-dosc" }, [
                          createVNode("h4", { class: "blog-card-dosc-title" }, "\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757"),
                          createVNode(_component_v_chip, {
                            size: "x-small",
                            label: "",
                            color: "cainblue"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Vue.js ")
                            ]),
                            _: 1
                          }),
                          createVNode("p", { class: "blog-card-dosc-p" }, " \u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5123333333333\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757\u5F00\u53D1\u6D4B\u8BD5\u8FDB\u5EA6\u6A21\u5757 "),
                          createVNode("div", { class: "blog-card-tags" }, [
                            createVNode("span", { class: "blog-card-tag" }, "\u53D1\u5E03\u65F6\u95F4:2023-8-27"),
                            createVNode("span", { class: "blog-card-tag" }, [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-eye-outline ")
                                ]),
                                _: 1
                              }),
                              createTextVNode("123")
                            ]),
                            createVNode("span", { class: "blog-card-tag" }, [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-thumb-up-outline ")
                                ]),
                                _: 1
                              }),
                              createTextVNode("123")
                            ]),
                            createVNode("span", { class: "blog-card-tag" }, [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode(" mdi-comment-outline ")
                                ]),
                                _: 1
                              }),
                              createTextVNode("123")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024), [
                    [_directive_ripple]
                  ]);
                }), 64))
              ]),
              createVNode("div", { class: "blogs-right" }, [
                createVNode(_component_v_text_field, {
                  loading: _ctx.loading,
                  density: "compact",
                  variant: "solo",
                  label: "Search templates",
                  "append-inner-icon": "mdi-magnify",
                  "single-line": "",
                  "hide-details": "",
                  "onClick:appendInner": _ctx.onClick
                }, null, 8, ["loading", "onClick:appendInner"]),
                createVNode(_component_v_card, { class: "newblogs mt-4" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_list, {
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_subheader, null, {
                          default: withCtx(() => [
                            createTextVNode("\u6700\u65B0\u6587\u7AE0")
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(items, (item, i) => {
                          return createVNode(_component_v_list_item, {
                            key: i,
                            value: item,
                            color: "primary"
                          }, {
                            append: withCtx(() => [
                              createVNode("p", { style: { "font-size": "12px" } }, "2023-8-27")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, {
                                textContent: toDisplayString(item.text)
                              }, null, 8, ["textContent"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card, { class: "newblogs mt-4" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_list, {
                      density: "compact",
                      nav: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_subheader, null, {
                          default: withCtx(() => [
                            createTextVNode("\u7CBE\u54C1\u63A8\u8350")
                          ]),
                          _: 1
                        }),
                        (openBlock(), createBlock(Fragment, null, renderList(items, (item, i) => {
                          return createVNode(_component_v_list_item, {
                            key: i,
                            value: item,
                            color: "primary"
                          }, {
                            append: withCtx(() => [
                              createVNode("p", { style: { "font-size": "12px" } }, "1000\u4EBA\u9605\u8BFB\u8FC7")
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, {
                                textContent: toDisplayString(item.text)
                              }, null, 8, ["textContent"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e5f8b2a"]]);

export { index as default };
//# sourceMappingURL=index-862f0b7c.mjs.map
