<template>
    <main class="my-5">
        <div class="container">
            <div v-if="projects.length > 1" class="row">
                <div v-for="project in projects" class="col-4 p-3">
                    <ProjectCard 
                    :baseUrl="this.storage.baseUrl"
                    :projectImg="project.preview_img"
                    :placeholderImg="`${this.storage.baseUrl}/img/h9pqRmsIwC1KOxfYbxgyvAFotT7SuEuNHayFtPir.png`"
                    :projectTitle="project.title"
                    :startDate="project.start_date"
                    :endDate="project.end_date ? project.end_date : '-'"
                    :description="truncateText(project.description)"
                    :slug="project.slug"
                    />
                </div>
            </div>
            <h4 v-else class="text-center">Non sono ancora presenti progetti da mostrare</h4>
        </div>
    </main>
</template>

<script>

    import ProjectCard from '../components/ProjectCard.vue';
    import { storage } from '../storage.js';
    import axios from 'axios';

    export default {
        name: 'PageMain',
        components: {
            ProjectCard
        },
        data() {
            return {
                projects: [],
                storage: storage,
                contentMaxLength: 150
            }
        },
        methods: {
            getProjects() {
                axios.get(`${this.storage.baseUrl}/api/projects`)
                .then(response => {
                    this.projects = response.data.results;
                    console.log(response.data.results);
                });
            },
            truncateText(text) {
                if (text && text.length > this.contentMaxLength) {
                    return text.substr(0, this.contentMaxLength) + '...';
                }
                return text;
            }
        },
        mounted() {
            this.getProjects();
        }
    }
</script>

<style>

</style>