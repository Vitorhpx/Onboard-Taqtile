// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/taqtile/Onboard-Taqtile/helloWorld/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-tsx": () => import("/Users/taqtile/Onboard-Taqtile/helloWorld/src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/taqtile/Onboard-Taqtile/helloWorld/.cache/data.json")

