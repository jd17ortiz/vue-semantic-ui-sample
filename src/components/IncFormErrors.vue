<template>
  <div class="ui error message" v-if="errors">
    <ul class="list">
      <li v-for="error in errors" :key="error">{{error}}</li>
  </ul></div>
</template>
<script>

function createMessage (label, validation) {
  let message
  if (validation.type === 'required') {
    message = `Pflichtfeld`
  } else if (validation.type === 'minLength') {
    message = `Mindestlänge ${validation.min} Zeichen`
  } else if (validation.type === 'between') {
    message = `Zahl zwischen ${validation.min} und ${validation.max}`
  } else if (validation.type === 'maxLength') {
    message = `Maximallänge ${validation.max} Zeichen`
  } else if (validation.type === 'numeric') {
    message = 'Keine gültige Zahl'
  } else { message = 'Fehler' }
  let labelPrefix = label ? `${label}:  ` : ''
  return labelPrefix + message
}

export default {
  name: 'IncFormErrors',
  props: {
    validation: {
      type: Object,
      required: true
    }
  },
  computed: {
    errors () {
      const result = []

      for (let param of Object.keys(this.validation.$params)) {
        let validationItem = this.validation[param]
        if (!validationItem || !validationItem.hasOwnProperty('$error')) {
          continue
        }
        if (!validationItem.$error) {
          continue
        }
        for (let key of Object.keys(validationItem.$params)) {
          if (!validationItem[key]) {
            let message = createMessage(validationItem.label, validationItem.$params[key])
            if (result.indexOf(message) === -1) {
              result.push(message)
            }
          }
        }
      }
      return result
    }
  }
}
</script>
