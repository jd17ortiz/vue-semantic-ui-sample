<template>
  <div class="field" :class="{ 'error': hasErrors }">
    <label v-if="label">{{label}}</label>
    <input :type="type" :placeholder="placeholder" v-model="text" @input="onInput">
  </div>
</template>
<script>
export default {
  name: 'IncInput',
  props: {
    value: {},
    label: {},
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
