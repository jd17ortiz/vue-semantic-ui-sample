<template>
  <div class="ui container">
    <div class="ui grid">
      <div class="column">
        <div class="ui segment header">
          <h2>the header</h2>
        </div>
        <div class="ui segment">
          <form class="ui form">
            <h4 class="ui dividing header">Shipping Information</h4>
            <div class="field">
              <label>Titel</label>
              <input type="text">
            </div>
            <div class="field">
              <label>Titel</label>
              <textarea></textarea>
            </div>>
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
