import { Plugin } from '@nuxt/types'
import { provide, onGlobalSetup } from '@nuxtjs/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'

const ApolloPlugin: Plugin = ({ app }) => {
  onGlobalSetup(() => {
    provide(DefaultApolloClient, app.apolloProvider.defaultClient)
  })
}

export default ApolloPlugin
