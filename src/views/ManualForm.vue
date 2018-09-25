<template>
  <div class="ui container">

    <div class="ui segments db-segments">
      <div class="ui segment header">
        <h2>Manual Form with validation</h2>
      </div>
      <div class="ui segment">
        <form class="ui form" :class="{ 'error': $v.$invalid && $v.$anyDirty }">
          <h4 class="ui dividing header">Shipping Information</h4>
          <div class="field">
            <label>Title</label>
            <input type="text" v-model="title">
          </div>
          <div class="field">
            <label>Name</label>
            <div class="two fields">
              <div class="field" :class="{ 'error': $v.firstname.$invalid && $v.firstname.$dirty }"><input placeholder="first name" type="text" v-model="firstname" @input="$v.firstname.$touch()"></div>
              <div class="field" :class="{ 'error': $v.name.$invalid && $v.name.$dirty }"><input placeholder="last name" type="text" v-model="name" @input="$v.name.$touch()"></div>
            </div>
          </div>
          <div class="ui grid">
            <div class="field four wide column" :class="{ 'error': $v.age.$invalid && $v.age.$dirty }">
              <label>Age</label>
              <input type="number" v-model="age" @input="$v.age.$touch()">
            </div>
            <div class="field eight wide column">
              <label>Kite brand</label>
              <select class="ui fluid search dropdown" v-model="kiteBrand">
                <option value="">Please select</option>
                <option v-for="brand in kiteBrands" :key="brand.value" :value="brand.value">{{brand.label}}</option>
              </select>
            </div>
            <div class="four wide column">
              <div class="field">
                <label>Disabled comment</label>
                <input type="text" disabled>
              </div>
            </div>
          </div>
          <div class="field">
            <label>Message</label>
            <textarea v-model="message"></textarea>
          </div>

          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox">
              <label>Is developer</label>
            </div>
          </div>
          <div class="ui error message">
            <ul class="list">
              <li v-if="!$v.name.required && $v.name.$dirty">Name is required</li>
              <li v-if="!$v.name.minLength && $v.name.$dirty">Name must have at least 4 characters</li>
              <li v-if="!$v.firstname.required && $v.firstname.$dirty">Name is required</li>
              <li v-if="!$v.firstname.minLength && $v.firstname.$dirty">Name must have at least 4 characters</li>
              <li v-if="!$v.age.between && $v.age.$dirty">Age must be betwwen 20 and 30</li>

            </ul>
          </div>
        </form>
      </div>
      <div class="ui segment footer">
        <div class="ui buttons">
          <button class="ui primary button"><i class="cloud icon"></i> Speichern</button>
          <button class="ui button"><i class="cloud icon"></i> Abbrechen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  name: 'home',
  data () {
    return {
      title: '',
      name: '',
      firstname: '',
      message: '',
      age: 0,
      kiteBrand: '',
      kiteBrands: [{ label: 'Cabrinha', value: 'cabrinha' }, { label: 'Naish', value: 'naish' }, { label: 'Duotone', value: 'duotone' }]
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    firstname: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  }
}
</script>
