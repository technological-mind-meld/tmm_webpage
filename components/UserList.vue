<template>
  <ul class="d-block pa-0 multiple-users">
    <li v-for="(user, $userIndex) in users" :key="$userIndex" class="d-inline-block rounded overflow-hidden">
      <UserAvatar :user="user" :size="40" :rounded="false" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
ul.multiple-users {
  li {
    margin-right: -16px;
    border: 2px solid #ddd;
    width: 44px;
    height: 44px;
    cursor: pointer;
    position: relative;

    &:hover {
      border-color: $hover-link;
      z-index: 99999;
    }

    &:last-child {
      margin-right: 0 !important;
    }
  }
}
</style>
