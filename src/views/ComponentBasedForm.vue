<template>
  <div class="ui container">

    <div class="ui segments db-segments">
      <div class="ui segment header">
        <h2>Component based Form with validation</h2>
      </div>
      <div class="ui segment">
        <form class="ui form" :class="{ 'error': $v.$invalid && $v.$anyDirty }">
          <h4 class="ui dividing header">Shipping Information</h4>
          <inc-input type="text" label="Title" v-model="title"/>
          <div class="field">
            <label>Name</label>
            <div class="two fields">
              <inc-input type="text" placeholder="First name" v-model="firstname" :validate="$v.firstname"/>
              <inc-input type="text" placeholder="Name" v-model="name" :validate="$v.namename"/>
            </div>
          </div>
          <div class="ui grid">
            <div class="four wide column">
              <inc-input type="number" label="Age" v-model="age" :validate="$v.age"/>
            </div>
            <div class="eight wide column">
              <div class="field">
                <label>Kite brand</label>
                <select class="ui fluid search dropdown" v-model="kiteBrand">
                  <option value="">Please select</option>
                  <option v-for="brand in kiteBrands" :key="brand.value" :value="brand.value">{{brand.label}}</option>
                </select>
              </div>
            </div>
            <div class="four wide column">
              <inc-input type="text" label="Disabled comment" disabled/>
            </div>
          </div>

          <inc-textarea label="Message" v-model="message"/>

          <inc-checkbox label="Is developer" v-model="developer"/>

          <IncFormErrors :validation="$v"/>
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
import { IncInput, IncFormErrors, IncCheckbox, IncTextarea } from '@/components/IncForms.js'

export default {
  name: 'home',
  components: {
    IncInput, IncFormErrors, IncCheckbox, IncTextarea
  },
  data () {
    return {
      developer: false,
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
