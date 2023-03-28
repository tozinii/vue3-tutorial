<template>
    <!-- A partir del . despues del click se le mete un event modifier, son para personalizar los eventos
        ene ste caso sirve para cerrar el modal cuando clicamos solamente en el elemento div.backdrop, o fuera del div.modal, en este caso el modifier es self -->
    <div class="backdrop" @click.self="closeModal()">

        <div class="modal">
            <slot>Texto por defecto si no se le pasa contenido al invocar el componente ModalSlot</slot>

            <!-- Referencia al slot link del component App-->
            <div>
                <slot name="link"></slot>
            </div>

        </div>

    </div>
</template>

<script>
    export default{
        methods: {
            //El emit lanza un evento custom al componente parent para cualquier cosa que se quiera hacer, en este caso un evento llamado 'close' para cerrar el modal
            closeModal(){
                this.$emit('close')
            }
        }
    }


</script>

<!-- Estilos scoped solo aplican a este componente-->
<!-- Otra opcion para overridear estilos de este componente es hacerlos mas detallados. Ej: .modal h1{}-->
<style scoped>

    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    }

    h1{
        color: red;
        border: none;
        
    }

</style>