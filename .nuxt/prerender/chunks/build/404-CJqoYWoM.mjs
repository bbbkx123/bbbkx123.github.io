import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/unhead/dist/index.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/radix3/dist/index.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/ufo/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/klona/dist/index.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  // 页面组件的脚本部分
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-404" }, _attrs))} data-v-1f3d6d73><h1 data-v-1f3d6d73>404 - \u9875\u9762\u672A\u627E\u5230</h1><p data-v-1f3d6d73>\u62B1\u6B49\uFF0C\u6211\u4EEC\u627E\u4E0D\u5230\u60A8\u8BF7\u6C42\u7684\u9875\u9762\u3002</p>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u8FD4\u56DE\u9996\u9875`);
      } else {
        return [
          createTextVNode("\u8FD4\u56DE\u9996\u9875")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1f3d6d73"]]);

export { _404 as default };
//# sourceMappingURL=404-CJqoYWoM.mjs.map
