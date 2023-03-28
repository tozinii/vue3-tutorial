<template>
  
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick()">click me</button>

  <br><br><br>

  <div v-if="showModal">
    <!--Para bindear data, ponerle un : por delante, si no pasara la propiedad como string-->
    <!-- El @close rebice el evento lanzado por el $emit desde el componente Modal, esto caza el evento y lanza la funcion toggleShowModal() para cerrar el modal -->
    <!--<Modal testString="test" :header="header" :text="text" theme="sale" @close="toggleShowModal()" />-->


    <!-- Comentar este modal para que se vea en vez del Modal y viceversa-->
    <!-- Los slots es para evitar pasar toda la info mediante props, le pasas la platilla directamente al invocar el componente-->
    <ModalSlot>

      <h1>Prueba Slot</h1>
      <p>Texto prueba slots</p>

      <!-- Creacion de slot llamado 'link' para usarlo dentro del componente-->
      <template v-slot:link>
        <a href="#">link de prueba con slot template</a>
      </template>

    </ModalSlot>
  </div>

  <button @click="toggleShowModal()">Show modal</button>

</template>

<script>
import Modal from './components/Modal'
import ModalSlot from './components/ModalSlot'

export default {
  name: 'App',
  components: {
    Modal,
    ModalSlot
  },
  data(){
    return{
      title: 'First vue app ;)',
      header: 'Sign up for the giveaway!!',
      text: 'This is a text',
      showModal: false
    }
  },
  methods: {

    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },

    toggleShowModal(){
      this.showModal = !this.showModal
    }

  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
    color: blue;
  }

  .modal.sale{
    background: crimson;
    color: white;
  }

  .modal.sale h1{
    color: white;
  }
</style>
