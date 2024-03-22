import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { ref, mergeProps, useSSRContext } from 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'file:///Users/kianakaslana/Code/WEB/My/navigation-nuxt/node_modules/vue/server-renderer/index.mjs';
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
  __name: "tools",
  __ssrInlineRender: true,
  setup(__props) {
    const getAssetsFile = (name) => {
      return new URL(`../../assets/icons/${name}.png`, globalThis._importMeta_.url).href;
    };
    const list = ref([
      {
        id: "often",
        name: "\u5E38\u7528\u5DE5\u5177",
        collection: [
          {
            icon: "https://github.githubassets.com/favicons/favicon.svg",
            name: "Github Trending",
            link: "https://github.com/trending"
          },
          {
            icon: getAssetsFile("56"),
            name: "json\u5728\u7EBF\u89E3\u6790",
            link: "https://www.sojson.com/"
          },
          {
            icon: "https://caniuse.com/img/favicon-128.png",
            name: "\u517C\u5BB9\u6027\u67E5\u8BE2",
            link: "https://caniuse.com/"
          },
          {
            icon: "https://www.bootcdn.cn/assets/ico/favicon.ico?1644166305141",
            name: "BootCDN",
            link: "https://www.bootcdn.cn/"
          },
          {
            icon: "https://static.clewm.net/static/images/favicon.ico",
            name: "\u8349\u6599\u4E8C\u7EF4\u7801",
            link: "https://cli.im/"
          },
          {
            icon: "https://www.hlcode.cn/favicon.ico",
            name: "\u4E92\u8054\u4E8C\u7EF4\u7801",
            link: "https://www.hlcode.cn/"
          },
          {
            icon: "https://excalidraw.com/apple-touch-icon.png",
            name: "Excalidraw\u601D\u7EF4\u5BFC\u56FE",
            link: "https://excalidraw.com/"
          },
          {
            icon: getAssetsFile("15"),
            name: "\u6B63\u5219\u8868\u8FBE\u5F0F\u6D4B\u8BD5",
            link: "http://www.jsons.cn/reg/"
          },
          {
            icon: "https://any86.github.io/any-rule/icon.png",
            name: "\u6B63\u5219\u5927\u5168",
            link: "https://any86.github.io/any-rule/"
          },
          {
            icon: getAssetsFile("16"),
            name: "\u6587\u4EF6\u683C\u5F0F\u8F6C\u6362",
            link: "https://convertio.co/zh/"
          },
          {
            icon: "https://www.aconvert.com/favicon.ico",
            name: "\u6587\u4EF6\u683C\u5F0F\u8F6C\u6362",
            link: "https://www.aconvert.com/cn/audio/"
          },
          {
            icon: getAssetsFile("17"),
            name: "\u4E2D\u6587\u7B80\u7E41\u4F53\u8F6C\u6362",
            link: "https://tool.lu/zhconvert"
          },
          {
            icon: getAssetsFile("18"),
            name: "\u5B57\u6570\u7EDF\u8BA1",
            link: "https://www.eteste.com/"
          },
          {
            icon: getAssetsFile("19"),
            name: "\u65F6\u95F4\u6233\u8F6C\u6362",
            link: "https://www.epochconverter.com/"
          },
          {
            icon: "https://datav.aliyun.com/favicon.ico",
            name: "\u963F\u91CC\u4E91\u5730\u56FE",
            link: "https://datav.aliyun.com/portal/school/atlas/area_selector"
          },
          {
            icon: "https://csstools.chinaz.com/favicon.ico",
            name: "\u7AD9\u957F\u5DE5\u5177",
            link: "https://tool.chinaz.com/"
          },
          {
            icon: "https://app.netlify.com/favicon.ico",
            name: "netlify\u7F51\u7AD9\u6258\u7BA1",
            link: "https://app.netlify.com/"
          },
          {
            icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico",
            name: "vercel\u7F51\u7AD9\u6258\u7BA1",
            link: "https://vercel.com/dashboard"
          },
          {
            icon: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
            name: "\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0",
            link: "https://mp.weixin.qq.com/"
          },
          {
            icon: "https://kaifa.baidu.com/assets/favicon.ico",
            name: "\u5F00\u53D1\u8005\u641C\u7D22",
            link: "https://kaifa.baidu.com/"
          },
          {
            icon: "https://product.mdnice.com/favicon-32x32.png?v=00d29966e3863b53e83a585435f6a6fc",
            name: "\u58A8\u6EF4\u6587\u7AE0\u540C\u6B65",
            link: "https://product.mdnice.com/"
          },
          {
            icon: "https://www.mujicv.com/favicon.ico",
            name: "\u6728\u53CA\u7B80\u5386",
            link: "https://www.mujicv.com/"
          }
        ]
      },
      {
        id: "img",
        name: "\u56FE\u7247\u5904\u7406",
        collection: [
          {
            icon: "https://tinypng.com/images/favicon.ico",
            name: "\u56FE\u7247\u538B\u7F29",
            link: "https://tinypng.com/"
          },
          {
            icon: "https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png",
            name: "\u751F\u6210\u7CBE\u7075\u56FE",
            link: "https://www.toptal.com/developers/css/sprite-generator"
          },
          {
            icon: getAssetsFile("20"),
            name: "\u89C6\u9891\u8F6CGIF",
            link: "https://www.tutieshi.com/"
          },
          {
            icon: "https://www.aconvert.com/favicon.ico",
            name: "\u89C6\u9891\u8F6CGIF",
            link: "https://www.aconvert.com/"
          },
          {
            icon: getAssetsFile("21"),
            name: "\u5728\u7EBFSVG\u5236\u4F5C",
            link: "https://51tools.info/svg/"
          },
          {
            icon: "https://c.runoob.com/more/svgeditor/images/favicon.svg",
            name: "SVG\u7F16\u8F91\u5668",
            link: "https://c.runoob.com/more/svgeditor/"
          },
          {
            icon: getAssetsFile("1"),
            name: "\u8DA3\u4F5C\u56FE",
            link: "https://www.pickwant.com/home"
          },
          {
            icon: "https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png",
            name: "\u56FE\u7247\u80CC\u666F\u6D88\u9664",
            link: "https://www.remove.bg/zh"
          },
          {
            icon: getAssetsFile("22"),
            name: "\u56FE\u7247\u5728\u7EBF\u7F16\u8F91",
            link: "https://www.iloveimg.com/zh-cn"
          },
          {
            icon: getAssetsFile("23"),
            name: "\u5728\u7EBFPS",
            link: "https://www.uupoop.com/#/"
          },
          {
            icon: getAssetsFile("24"),
            name: "\u56FE\u7247\u52A0\u6C34\u5370",
            link: "https://www.onlinedo.cn/img-shuiyin"
          },
          {
            icon: getAssetsFile("25"),
            name: "\u56FE\u7247\u53BB\u6C34\u5370",
            link: "https://www.apowersoft.cn/image-watermark-remover"
          },
          {
            icon: getAssetsFile("26"),
            name: "\u56FE\u7247\u5408\u5E76\u5207\u5272",
            link: "http://www.zuohaotu.com/"
          },
          {
            icon: getAssetsFile("27"),
            name: "\u751F\u6210\u900F\u660EIcon",
            link: "http://www.ico51.cn/"
          },
          {
            icon: getAssetsFile("28"),
            name: "logo\u8BBE\u8BA1",
            link: "https://www.designevo.com/cn/logo-maker/"
          },
          {
            icon: getAssetsFile("29"),
            name: "\u641E\u602A\u56FE\u7247\u751F\u6210",
            link: "https://c.tianhezulin.com/"
          },
          {
            icon: getAssetsFile("30"),
            name: "\u8868\u60C5\u5305",
            link: "https://www.fabiaoqing.com/"
          },
          {
            icon: getAssetsFile("31"),
            name: "\u8868\u60C5\u5305\u5236\u4F5C\u5668",
            link: "https://www.wakatool.com/maker"
          },
          {
            icon: getAssetsFile("32"),
            name: "\u670B\u514B\u56FE\u7247\u751F\u6210\u5668",
            link: "https://photomosh.com/"
          },
          {
            icon: getAssetsFile("33"),
            name: "Pexels\u56FE\u7247\u7D20\u6750",
            link: "https://www.pexels.com/zh-cn/"
          },
          {
            icon: getAssetsFile("34"),
            name: "Pixabay\u56FE\u7247\u7D20\u6750",
            link: "https://pixabay.com/"
          },
          {
            icon: getAssetsFile("35"),
            name: "Pxhere\u56FE\u7247\u7D20\u6750",
            link: "https://pxhere.com/"
          },
          {
            icon: "https://www.3gbizhi.com/assets/mobile/images/favicon.ico",
            name: "3G\u58C1\u7EB8",
            link: "https://www.3gbizhi.com/"
          },
          {
            icon: "https://huatu.98youxi.com/favicon.ico",
            name: "\u6D41\u7A0B\u56FE/\u601D\u7EF4\u5BFC\u56FE",
            link: "https://huatu.98youxi.com/home/myfile/"
          },
          {
            icon: "https://boardmix.cn/app/pwa/pwa-icons/ios/144.png",
            name: "boardmix\u6D41\u7A0B\u56FE",
            link: "https://boardmix.cn/app/home"
          }
        ]
      },
      {
        id: "css",
        name: "css\u5DE5\u5177",
        collection: [
          {
            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAY1BMVEX///8AAADr+fr////1/PwAqrsAprgKrr5hy9XU8fQUssH0+/xQxdEitsUwusg/v8zE7PAds8P////p+Pqw5eqp4+mN2eH3/P2h4OeQ2+I2vMra8/a86e2b3uRrzthKw89Ewc0z3iepAAAABXRSTlPwAO/g70YqzXQAAADSSURBVDjLhdNLbsMwDARQuqlGjqiv/3HaJPc/ZWUHBYwWpGdH8GGkDak5CTUXog8hn0QXaohbKyQMHVVwgxEC12+g/QVHCOzT9QicL+4da12Myf4F6/h4+pqXnzLPfP8HbHmXr7kf2hjc8YljJl7K/gMBLLPftwLAyLGOIsCjq3sZIHbboDTkEUYB8BxUYO8TjALQsjMKqNMNGkDioINhhFEAAq86+P6C0UDgpIJaYIKVAdKc/BJkEPucXk+5AVMuBtofit22MhBzPb+s09s8ve4fJkoXyynCJe4AAAAASUVORK5CYII=",
            name: "\u8D1D\u585E\u5C14\u66F2\u7EBF",
            link: "https://cubic-bezier.com/#.17,.67,.83,.67"
          },
          {
            icon: "https://www.bezier-curve.com/favicon.ico",
            name: "\u8D1D\u585E\u5C14\u66F2\u7EBF",
            link: "https://www.bezier-curve.com/"
          },
          {
            icon: "	https://cssgradient.io/images/favicon-23859487.png",
            name: "css\u6E10\u53D8\u8272",
            link: "https://cssgradient.io/"
          },
          {
            icon: "https://static.mybrandnewlogo.com/images/favicon.ico",
            name: "\u8272\u5F69\u642D\u914D",
            link: "https://mybrandnewlogo.com/color-palette-generator"
          },
          {
            icon: "https://s.techbrood.com/themes/techbrood/image/favicon.ico",
            name: "border-radius",
            link: "https://wow.techbrood.com/fiddle/40829"
          },
          {
            icon: "https://shadows.brumm.af/favicon.svg",
            name: "css\u9634\u5F71",
            link: "https://shadows.brumm.af/"
          },
          {
            icon: "https://box-shadow.art/wp-content/uploads/2021/10/logo-icon-150x150.png",
            name: "box-shadow\u6848\u4F8B",
            link: "https://box-shadow.art/"
          },
          {
            icon: getAssetsFile("36"),
            name: "\u5728\u7EBFclip-path",
            link: "http://tools.jb51.net/code/css3path"
          },
          {
            icon: "	https://cssgrid-generator.netlify.app/favicon.ico",
            name: "Grid\u7F51\u683C\u5E03\u5C40",
            link: "https://cssgrid-generator.netlify.app/"
          },
          {
            icon: "https://layout.bradwoods.io/favicon.ico",
            name: "\u5E03\u5C40\u751F\u6210\u5668",
            link: "https://layout.bradwoods.io/"
          },
          {
            icon: "	https://animxyz.com/assets/static/animxyz-logo.ce0531f.39f3bde368e480505b70778acaa2ac74.png",
            name: "animxyz",
            link: "https://animxyz.com/"
          },
          {
            icon: "https://www.transition.style/favicon.png",
            name: "\u8FC7\u6E21\u52A8\u753B",
            link: "https://www.transition.style/"
          },
          {
            icon: "https://getwaves.io/favicon-32x32.png",
            name: "svg\u6CE2\u6D6A\u751F\u6210\u5668",
            link: "https://getwaves.io/"
          },
          {
            icon: "https://img2.baidu.com/it/u=3541918504,2197745291&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=287",
            name: "svg\u751F\u6210\u5668",
            link: "https://app.haikei.app/"
          }
        ]
      },
      {
        id: "cool",
        name: "UI\u7075\u611F",
        collection: [
          {
            icon: "https://whirl.netlify.app/favicon.ico",
            name: "whirl\u52A0\u8F7D\u52A8\u6548",
            link: "https://whirl.netlify.app/"
          },
          {
            icon: "https://uiverse.io/favicon-32x32.png",
            name: "uiverse\u6309\u94AE",
            link: "https://uiverse.io/buttons"
          },
          {
            icon: "https://www.handsome-css.com/favicon/favicon.ico",
            name: "AwA-UI\u5C0F\u7EC4\u4EF6",
            link: "https://www.handsome-css.com/buttons"
          },
          {
            icon: getAssetsFile("37"),
            name: "css\u52A8\u753B",
            link: "http://www.bootstrapmb.com/tag/cssdonghua"
          },
          {
            icon: getAssetsFile("2"),
            name: "CSS Tricks",
            link: "https://qishaoxuan.github.io/css_tricks/"
          },
          {
            icon: "https://csscoco.com/inspiration/logo2.png",
            name: "CSS Inspiration",
            link: "https://csscoco.com/inspiration/#/"
          },
          {
            icon: "https://shiroi.netlify.app/favicon.ico",
            name: "Shiro",
            link: "https://shiroi.netlify.app/"
          },
          {
            icon: "https://cssdesignawards.com/images/favicons/favicon.ico",
            name: "CssDesignAwards",
            link: "https://cssdesignawards.com/"
          },
          {
            icon: "https://webdesignclip.com/favicon.ico",
            name: "WebDesignClip",
            link: "https://webdesignclip.com/"
          },
          {
            icon: "http://360ab.cn/favicon.ico",
            name: "\u6587\u5B57\u521B\u610F\u4EE3\u7801",
            link: "http://360ab.cn/code?game"
          },
          {
            icon: "https://bennettfeely.com/gradients/img/favicon.png",
            name: "\u6DF7\u5408\u6A21\u5F0F\u521B\u610F",
            link: "https://bennettfeely.com/gradients/"
          }
        ]
      },
      {
        id: "\u56FE\u6807",
        name: "\u56FE\u6807",
        collection: [
          {
            icon: "https://img.alicdn.com/imgextra/i2/O1CN01ZyAlrn1MwaMhqz36G_!!6000000001499-73-tps-64-64.ico",
            name: "iconfont",
            link: "https://www.iconfont.cn/"
          },
          {
            icon: "https://unpkg.byted-static.com/byted/arco-config/1.0.9/assets/icon-box.ico",
            name: "iconBox",
            link: "https://arco.design/iconbox/libs"
          },
          {
            icon: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
            name: "iconPark",
            link: "https://iconpark.oceanengine.com/official"
          },
          {
            icon: "https://iconsvg.xyz/favicon-32.png",
            name: "\u81EA\u5B9A\u4E49icon",
            link: "https://iconsvg.xyz/"
          },
          {
            icon: "	https://www.fonts.net.cn/favicon.ico",
            name: "\u5B57\u4F53\u5929\u4E0B",
            link: "https://www.fonts.net.cn/"
          },
          {
            icon: "	https://www.googlefonts.cn/Public/google/zh-cn/gstatic/google_fonts_lodp.ico",
            name: "\u5B57\u4F53\u4E0B\u8F7D",
            link: "https://www.emojiall.com/zh-hans"
          },
          {
            icon: "	https://www.emojiall.com/favicon.ico",
            name: "emojiall",
            link: "https://www.emojiall.com/zh-hans"
          },
          {
            icon: "https://www.webfx.com/wp-content/uploads/2023/05/icon-ux.svg",
            name: "md-emoji",
            link: "https://www.webfx.com/tools/emoji-cheat-sheet/"
          }
        ]
      },
      {
        id: "chatGPT",
        name: "chatGPT",
        collection: [
          {
            icon: "https://cdn.oaistatic.com/_next/static/media/favicon-32x32.be48395e.png",
            name: "chatGPT",
            link: "https://chat.openai.com/"
          },
          {
            icon: "https://chat.plexpt.com/favicon.svg",
            name: "\u667A\u80FD\u55B5",
            link: "https://chat.plexpt.com/"
          },
          {
            icon: getAssetsFile("57"),
            name: "AIer",
            link: "https://ai.aging.run/"
          },
          {
            icon: "https://chat.ktoai.com/favicon.png",
            name: "\u7CD6\u679C\u68A6",
            link: "https://ai.tgmeng.com/"
          },
          {
            icon: "https://cdn.aidutu.cn/res/head/ai.png",
            name: "AiDuTu",
            link: "https://chat.aidutu.cn/"
          },
          {
            icon: getAssetsFile("53"),
            name: "AI EDU",
            link: "https://ai.aigcfun.com/"
          },
          {
            icon: getAssetsFile("54"),
            name: "chatbot",
            link: "https://chatbot.theb.ai/#/chat"
          }
        ]
      },
      {
        id: "chrome",
        name: "Chrome\u63D2\u4EF6",
        collection: [
          {
            icon: getAssetsFile("38"),
            name: "OneTab\u6807\u7B7E\u7BA1\u7406",
            link: "https://chrome.google.com/webstore/category/extensions?hl=zh-CN"
          },
          {
            icon: getAssetsFile("39"),
            name: "\u524D\u7AEF\u52A9\u624B\u63D2\u4EF6",
            link: "http://www.itmind.net/1470.html"
          },
          {
            icon: getAssetsFile("40"),
            name: "Postman\u7F51\u9875\u7248",
            link: "http://www.itmind.net/1334.html"
          },
          {
            icon: "https://cdn.kjj8.com/images/2021/11/20211638043297-unnamed-6.png",
            name: "\u8BF7\u6C42mock\u63D2\u4EF6",
            link: "https://www.jianshu.com/p/9278207cdc62"
          },
          {
            icon: "https://addons.mozilla.org/user-media/addon_icons/1022/1022438-64.png?modified=533cac64",
            name: "\u8DE8\u57DF\u4EE3\u7406\u63D2\u4EF6",
            link: "https://www.0z.gs/webDevelopment/1736.html"
          },
          {
            icon: getAssetsFile("41"),
            name: "GitHub\u52A0\u901F\u63D2\u4EF6",
            link: "http://www.itmind.net/217.html"
          },
          {
            icon: getAssetsFile("42"),
            name: "\u89C6\u9891\u4E0B\u8F7D\u63D2\u4EF6",
            link: "http://www.itmind.net/3092.html"
          },
          {
            icon: getAssetsFile("43"),
            name: "Vue.js devtools",
            link: "http://www.itmind.net/6438.html"
          },
          {
            icon: getAssetsFile("51"),
            name: "\u5E7F\u544A\u62E6\u622A\u5668",
            link: "https://extfans.com/productivity/bgnkhhnnamicmpeenaelnjfhikgbkllg/"
          },
          {
            icon: getAssetsFile("52"),
            name: "\u5BC6\u7801\u7BA1\u7406",
            link: "https://extfans.com/productivity/hdokiejnpimakedhajhdlcegeplioahd/"
          }
        ]
      },
      {
        id: "vscode",
        name: "vscode\u63D2\u4EF6",
        collection: [
          {
            icon: "https://techer.gallerycdn.vsassets.io/extensions/techer/open-in-browser/2.0.0/1534049617896/Microsoft.VisualStudio.Services.Icons.Default",
            name: "open in browser",
            link: "https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser"
          },
          {
            icon: getAssetsFile("44"),
            name: "Git Graph",
            link: "https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph"
          },
          {
            icon: getAssetsFile("45"),
            name: "GitLens",
            link: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
          },
          {
            icon: getAssetsFile("46"),
            name: "Git History",
            link: "https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory"
          },
          {
            icon: getAssetsFile("47"),
            name: "Git Blame",
            link: "https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame"
          },
          {
            icon: "https://kisstkondoros.gallerycdn.vsassets.io/extensions/kisstkondoros/vscode-gutter-preview/0.30.0/1644076638771/Microsoft.VisualStudio.Services.Icons.Default",
            name: "\u56FE\u7247\u9884\u89C8",
            link: "https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview"
          },
          {
            icon: "https://cipchk.gallerycdn.vsassets.io/extensions/cipchk/cssrem/3.1.0/1677827217157/Microsoft.VisualStudio.Services.Icons.Default",
            name: "px to rem/rpx/vw",
            link: "https://marketplace.visualstudio.com/items?itemName=cipchk.cssrem"
          },
          {
            icon: "https://chendm.gallerycdn.vsassets.io/extensions/chendm/translate/0.1.0/1631010008171/Microsoft.VisualStudio.Services.Icons.Default",
            name: "\u751F\u6210\u82F1\u6587\u53D8\u91CF\u540D",
            link: "https://marketplace.visualstudio.com/items?itemName=chendm.translate"
          },
          {
            icon: "https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-close-tag/0.5.14/1644313109985/Microsoft.VisualStudio.Services.Icons.Default",
            name: "\u81EA\u52A8\u95ED\u5408\u6807\u7B7E",
            link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"
          },
          {
            icon: getAssetsFile("48"),
            name: "\u4EE3\u7801\u7F8E\u5316",
            link: "https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify"
          },
          {
            icon: getAssetsFile("49"),
            name: "\u4EE3\u7801\u4E66\u7B7E",
            link: "https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks"
          },
          {
            icon: getAssetsFile("50"),
            name: "FileSize",
            link: "https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks"
          },
          {
            icon: getAssetsFile("55"),
            name: "Markdown\u9884\u89C8",
            link: "https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts"
          }
        ]
      }
    ]);
    const curIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-a74c160a><div class="navigation-tools" data-v-a74c160a><dl data-v-a74c160a><!--[-->`);
      ssrRenderList(list.value, (nav, navindex) => {
        _push(`<dd${ssrRenderAttr("id", navindex)} class="${ssrRenderClass({ nav_active: navindex == curIndex.value })}" data-v-a74c160a><a${ssrRenderAttr("href", `#${nav.id}`)} data-v-a74c160a>${ssrInterpolate(nav.name)}</a></dd>`);
      });
      _push(`<!--]--></dl></div><div class="tools-box" data-v-a74c160a><!--[-->`);
      ssrRenderList(list.value, (tool, index) => {
        _push(`<section data-v-a74c160a><span${ssrRenderAttr("id", tool.id)} class="point" data-v-a74c160a></span><header data-v-a74c160a>${ssrInterpolate(tool.name)}</header><!--[-->`);
        ssrRenderList(tool.collection, (link) => {
          _push(`<a target="_blank" class="tool-item"${ssrRenderAttr("href", link.link)} data-v-a74c160a><img${ssrRenderAttr("data-src", link.icon)} alt=""${ssrRenderAttr("src", link.icon)} data-v-a74c160a><span class="tool-name" data-v-a74c160a>${ssrInterpolate(link.name)}</span></a>`);
        });
        _push(`<!--]--></section>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tools.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tools = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a74c160a"]]);

export { tools as default };
//# sourceMappingURL=tools-0-cNXlpp.mjs.map
