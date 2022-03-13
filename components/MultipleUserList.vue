<template>
  <ul class="d-block pa-0 multiple-users">
    <UserListItem v-for="(user, $userIndex) in users" :key="$userIndex" :user="user" />
  </ul>
</template>

<script>
export default {
  name: 'MultipleUserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
ul.multiple-users li:last-child {
  margin-right: 0 !important;
}
</style>
