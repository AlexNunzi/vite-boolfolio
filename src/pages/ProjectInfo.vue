<template>
    <main class="my-5">
        <div class="container">
            <div v-if="projectInfo" class="card p-5">
                <img v-if="projectInfo.preview_img" :src="`${this.storage.baseUrl}/storage/${this.projectInfo.preview_img}`" class="card-img-top ms-project-info-img">
                <img v-else :src="`${this.storage.baseUrl}/img/h9pqRmsIwC1KOxfYbxgyvAFotT7SuEuNHayFtPir.png`" class="card-img-top ms-project-info-img"/>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h5 class="card-title">{{projectInfo.title}}</h5>
                        </li>
                        <li class="list-group-item">
                            <h6>Data di inizio progetto: {{ projectInfo.start_date }}</h6>
                        </li>
                        <li class="list-group-item">
                            <h6>Data di fine progetto: {{ projectInfo.end_date ? projectInfo.end_date : '-' }}</h6>
                        </li>
                        <li class="list-group-item">
                            <h6>Tipologia: {{ projectInfo.type ? projectInfo.type.name : 'Non specificata' }}</h6>
                        </li>
                        <li class="list-group-item">
                            <h6>Tecnologie associate:</h6>
                            <ul class="list-unstyled" v-if="projectInfo.technologies.lenght > 0">
                                <li v-for="tech in projectInfo.technologies">{{ tech.name }}</li>
                            </ul>
                            <span v-else>Nessuna tecnologia associata</span>
                        </li>
                        <li class="list-group-item">
                            <h6>Descrizione del progetto:</h6>
                            <p>{{ projectInfo.description }}</p>
                        </li>
                    </ul>
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
                    if(response.data.success) {
                        console.log(response.data.results);
                        this.projectInfo = response.data.results;
                    } else {
                        this.$router.push({name: 'not-found'});
                    }
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