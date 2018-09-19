<template>
  <div class="ui container">
    <div class="ui grid">
      <div class="ui column segments">
        <div class="ui segment header">
          <h2>The header</h2>
        </div>
        <div class="ui segment">
          <form class="ui form">
            <h4 class="ui dividing header">Shipping Information</h4>
            <div class="field">
              <label>Titel</label>
              <input type="text">
            </div>
            <div class="field">
              <label>Message</label>
              <textarea></textarea>
            </div>
            <div class="field">
              <label>Name</label>
              <div class="two fields">
                <div class="field"><input placeholder="first name" type="text"></div>
                <div class="field"><input placeholder="last name" type="text"></div>
              </div>
            </div>
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox">
                <label>Is developer</label>
              </div>
            </div>
          </form>
        </div>
        <div class="ui segment extra content">
          <div class="ui two buttons">
            <div class="ui basic green button">hello</div>
            <div class="ui basic red button">hello</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
