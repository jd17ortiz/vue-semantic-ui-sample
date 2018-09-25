<template>
  <tfoot>
    <tr><th colspan="5">
      <div class="ui right floated pagination menu">
        <a class="icon item" @click.prevent="goTo(currentPage - 1)">
          <i class="left chevron icon"></i>
        </a>
        <a v-for="page in pages" class="item" :class="{'active': isCurrentPage(page)}" @click.prevent="goTo(page)">{{page}}</a>
        <a class="icon item" @click.prevent="goTo(currentPage + 1)">
          <i class="right chevron icon"></i>
        </a>
      </div>
    </th>
  </tr></tfoot>
</template>

<script>
export default {
  props: {
    maxPages: {
      default () {
        return 1
      }
    }
  },
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    pages () {
      let result = []
      for (let i = this.start; i < this.stop; i++) {
        result.push(i + 1)
      }
      return result
    },
    start () {
      return this.currentPage < 3 ? 0 : this.currentPage - 3
    },
    stop () {
      return this.start + 5 > this.maxPages ? this.maxPages : this.start + 5
    }
  },
  methods: {
    goTo (page) {
      if (page < 1) {
        this.currentPage = 1
        this.$emit('input', this.currentPage)
      } else if (page > this.maxPages) {
        this.currentPage = this.maxPages
      } else {
        this.currentPage = page
      }
      this.$emit('input', this.currentPage)
    },
    isCurrentPage (page) {
      return this.currentPage === page
    }
  }
}
</script>
