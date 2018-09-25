<template>
  <div class="field" :class="classes">
    <label v-if="label">{{label}}</label>
    <slot>
      <input :type="type" :placeholder="placeholder" v-model="text" @input="onInput">
    </slot>
  </div>
</template>
<script>
export default {
  name: 'IncInput',
  props: {
    value: {},
    label: {},
    styleClasses: {},
    placeholder: {},
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
    },
    classes () {
      let result = ''
      if (this.hasErrors) {
        result += 'error'
      }
      result += ' ' + this.styleClasses
      return result
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
