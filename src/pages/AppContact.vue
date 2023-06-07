<template>
    <main class="my-5">
        <div class="container">
            <h1>Contact us!</h1>
            <ContactForm></ContactForm>
        </div>
    </main>
</template>


<script>

    import ContactForm from '../components/ContactForm.vue';

    export default {
        name: 'AppContact',
        components: {
            ContactForm
        }
    }
</script>