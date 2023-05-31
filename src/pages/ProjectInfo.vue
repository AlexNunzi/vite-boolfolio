<template>
    <main class="my-5">
        <div class="container text-center">
            <div v-if="projectInfo" class="card p-5">
                <img v-if="projectInfo.preview_img" :src="`${this.storage.baseUrl}/storage/${this.projectInfo.preview_img}`" class="card-img-top ms-project-info-img">
                <img v-else :src="`${this.storage.baseUrl}/img/h9pqRmsIwC1KOxfYbxgyvAFotT7SuEuNHayFtPir.png`" class="card-img-top ms-project-info-img"/>
                <div class="card-body">
                    <h5 class="card-title">{{projectInfo.title}}</h5>
                    <h6>Data di inizio progetto: {{ projectInfo.start_date }}</h6>
                    <h6>Data di fine progetto: {{ projectInfo.end_date }}</h6>
                    <p>{{ projectInfo.description }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import axios from 'axios';
    import { storage } from '../storage.js';

    export default {
        name: 'ProjectInfo',
        data() {
            return {
                storage: storage,
                projectInfo: null
            }
        },
        methods: {
            getProjectInfo() {
                const slug = this.$route.params.slug;

                axios.get(`${this.storage.baseUrl}/api/projects/${slug}`)
                .then(response => {
                    console.log(response.data.results[0]);
                    this.projectInfo = response.data.results[0];
                });
            }
        },
        mounted() {
            this.getProjectInfo();
        }
    }
</script>

<style lang="scss">
  @use '../styles/general.scss';
</style>