<template>
    <main class="my-5">
        <div class="container">
            <div v-if="projects.length > 1" class="row">
                <div v-for="project in projects" class="col-4 p-3">
                    <ProjectCard 
                    :baseUrl="this.baseUrl"
                    :projectImg="project.preview_img"
                    :placeholderImg="`${this.baseUrl}/img/h9pqRmsIwC1KOxfYbxgyvAFotT7SuEuNHayFtPir.png`"
                    :projectTitle="project.title"
                    :startDate="project.start_date"
                    :endDate="project.end_date"
                    :description="truncateText(project.description)"
                    />
                </div>
            </div>
            <h4 v-else class="text-center">Non sono ancora presenti progetti da mostrare</h4>
        </div>
    </main>
</template>

<script>

    import ProjectCard from './ProjectCard.vue';

    import axios from 'axios';

    export default {
        name: 'PageMain',
        components: {
            ProjectCard
        },
        data() {
            return {
                projects: [],
                baseUrl: 'http://localhost:8000',
                contentMaxLength: 150
            }
        },
        methods: {
            getProjects() {
                axios.get(`${this.baseUrl}/api/projects`)
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