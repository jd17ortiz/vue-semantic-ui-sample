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
            <inc-input styleClasses="four wide column" type="number" label="Age" v-model="age" :validate="$v.age"/>
            <inc-input label="Kite brand" styleClasses="eight wide column">
              <select class="ui fluid search dropdown" v-model="kiteBrand">
                <option value="">Please select</option>
                <option v-for="brand in kiteBrands" :key="brand.value" :value="brand.value">{{brand.label}}</option>
            </select></inc-input>
            <inc-input styleClasses="four wide column" type="text" label="Disabled comment" disabled/>
          </div>
          <inc-textarea label="Message" v-model="message"/>
          <inc-checkbox label="Is developer" v-model="developer"/>
          <table class="ui celled striped sortable table">
            <table-sortable-header @input="sort" :columns="headers"/>
            <tbody>
              <tr v-for="user in users" :key="user.name">
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>{{user.job}}</td>
                <td><div class="ui star rating" data-rating="1" data-max-rating="3"></div></td>
                <td>Actions</td>
              </tr>
            </tbody>
            <table-pager max-pages="10" @input="loadUsers"/>
          </table>
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
import { IncInput, IncFormErrors, IncCheckbox, IncTextarea, TablePager, TableSortableHeader } from '@/components/IncForms.js'
export default {
  name: 'home',
  components: {
    IncInput, IncFormErrors, IncCheckbox, IncTextarea, TablePager, TableSortableHeader
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
      kiteBrands: [{ label: 'Cabrinha', value: 'cabrinha' }, { label: 'Naish', value: 'naish' }, { label: 'Duotone', value: 'duotone' }],
      users: [],
      allUsers: [],
      currentPage: 1,
      headers:
        [{ label: 'Name', sort: 'name' },
          { label: 'Age', sort: 'age' },
          { label: 'Job' },
          { label: 'Rating' },
          { label: 'Actions' }]
    }
  },
  created () {
    this.createUsers()
    this.loadUsers(this.currentPage)
    // jQuery('.ui.rating').rating()
  },
  methods: {
    createUsers () {
      for (let i = 0; i < 100; i++) {
        this.allUsers.push({ name: 'Joe' + i, age: Math.round(100 * Math.random()), job: 'Dev', rating: Math.round(3 * Math.random()) })
      }
    },
    loadUsers (page) {
      this.currentPage = page
      this.users = []
      let start = 10 * (page - 1)
      for (let i = start + 0; i < 10 + start; i++) {
        this.users.push(this.allUsers[i])
      }
    },
    sort (definition) {
      if (definition.column === null) {
        return
      }
      this.allUsers.sort((a, b) => {
        let result = 0
        if (a[definition.column] > b[definition.column]) {
          result = 1
        } else if (a[definition.column] < b[definition.column]) {
          result = -1
        }
        return definition.direction === 'ascending' ? -1 * result : result
      })
      this.loadUsers(this.currentPage)
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
