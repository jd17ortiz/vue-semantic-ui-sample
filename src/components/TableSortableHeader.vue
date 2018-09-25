<template>
  <thead>
    <tr>
      <th v-for="column in columns" @click="sortBy(column)" :key="column.label" :class="classes(column)">{{column.label}}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    columns: {}
  },
  data () {
    return {
      currentSort: {
        column: null,
        direction: 'ascending'
      }
    }
  },
  methods: {
    classes (column) {
      if (column.sort === this.currentSort.column) {
        return 'sorted ' + this.currentSort.direction
      } else {
        return ''
      }
    },
    sortBy (column) {
      if (!column.sort) {
        this.currentSort.column = null
      } else if (column.sort !== this.currentSort.column) {
        this.currentSort = { column: column.sort, direction: 'descending' }
      } else {
        if (this.currentSort.direction === 'descending') {
          this.currentSort.direction = 'ascending'
        } else if (this.currentSort.direction === 'descending') {
          this.currentSort.direction = 'ascending'
        } else {
          this.currentSort.column = null
        }
      }
      this.$emit('input', this.currentSort)
    }
  }
}
</script>
