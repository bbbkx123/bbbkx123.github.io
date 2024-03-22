import { resolveComponent, withCtx, createTextVNode, useSSRContext } from 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/vue/index.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppAlert = resolveComponent("AppAlert");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>\u6B22\u8FCE\u6765\u5230\u4E3B\u9875</h1>`);
  _push(ssrRenderComponent(_component_AppAlert, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u8FD9\u662F\u4E00\u4E2A\u81EA\u52A8\u5BFC\u5165\u7684\u7EC4\u4EF6 `);
      } else {
        return [
          createTextVNode(" \u8FD9\u662F\u4E00\u4E2A\u81EA\u52A8\u5BFC\u5165\u7684\u7EC4\u4EF6 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DW15TfKL.mjs.map
