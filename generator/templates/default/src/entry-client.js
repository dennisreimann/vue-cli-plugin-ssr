import { loadAsyncComponents } from '@dennisreimann/vue-cli-plugin-ssr/client'
<%_ if (pwa) { _%>
import './registerServiceWorker'
<%_ } _%>

import { createApp } from './main'

createApp({
  async beforeApp ({
    router
  }) {
    await loadAsyncComponents({ router })
  },

  afterApp ({
    app,
    router,
    <%_ if (vuex) { _%>
      store,
    <%_ } _%>
  }) {
    <%_ if (vuex) { _%>
    store.replaceState(window.__INITIAL_STATE__)
    <%_ } _%>
    router.onReady(() => {
      app.$mount('#app')
    })
  }
})
