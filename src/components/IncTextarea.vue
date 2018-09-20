<template>
  <div class="field" :class="{ 'error': hasErrors }">
    <label>{{label}}</label>
    <textarea v-model="text" @input="onInput"></textarea>
  </div>
</template>
<script>
export default {
  name: 'IncTextarea',
  props: {
    value: {},
    label: {},
    type: {},
    validate: { type: Object }
  },
  data () {
    return {
      text: ''
    }
  },
  created () {
    if (this.validate) {
      this.validate.label = this.label
    }
  },
  computed: {
    hasErrors () {
      return this.validate && this.validate.$invalid && this.validate.$dirty
    }
  },
  methods: {
    onInput () {
      this.$emit('input', this.text)
      if (this.validate) {
        this.validate.$reset()
        this.validate.$touch()
      }
    }
  }
}
</script>
