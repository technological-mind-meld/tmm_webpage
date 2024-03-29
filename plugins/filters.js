import Vue from 'vue'

import format from 'date-fns/format'

Vue.filter('date', (date) => {
  if (!date) {
    return '-'
  }

  const dateObj = new Date(date)
  return format(dateObj, 'u/LL/dd')
})
