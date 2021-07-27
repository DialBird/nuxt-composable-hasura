<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { GetUsersDocument } from '@/generated/graphql'
import { useQuery, useResult } from '@vue/apollo-composable'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const { result } = useQuery(GetUsersDocument)
    const users = useResult(result, [], (data) => data?.users)

    return { users }
  },
})
</script>

<style lang="scss" scoped>
</style>

