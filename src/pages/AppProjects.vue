<template>
    <main class="my-5">
        <div class="container">
            <div v-if="projects.length > 0" class="row">
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
                <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <button 
                            @click="getProjects(currentPage - 1)" 
                            :class="{'disabled' : currentPage == 1, 'page-link': true}"
                        >
                            Previous
                        </button>
                    </li>

                    <li class="page-item" v-for="page in lastPage" :class="{'active': page==currentPage}">
                        <button 
                            @click="getProjects(page)" 
                            :class="{'page-link': true}"
                        >
                            {{ page }}
                        </button>
                    </li>

                    <li class="page-item">
                        <button 
                            @click="getProjects(currentPage + 1)" 
                            :class="{'disabled' : currentPage == lastPage, 'page-link': true}"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
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
                contentMaxLength: 150,
                currentPage: 1,
                lastPage: null,
            }
        },
        methods: {
            getProjects(pageNumber) {
                axios.get(`${this.storage.baseUrl}/api/projects`,
                    {
                        params: {
                            page: pageNumber
                        }
                    }
                ) 
                .then(response => {
                    console.log(response);
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
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
            this.getProjects(1);
        }
    }
</script>

<style>

</style>