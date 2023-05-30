<template>
    <main>
        <div class="container">
            <div class="row">

            </div>
        </div>
    </main>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'PageMain',
        data() {
            return {
                projects: [],
                baseUrl: 'http://localhost:8000'
            }
        },
        methods: {
            getProjects() {
                axios.get(`${this.baseUrl}/api/projects`)
                .then(response => {
                    console.log(response.data);
                });
            },
        },
        mounted() {
            this.getProjects();
        }
    }
</script>

<style>

</style>