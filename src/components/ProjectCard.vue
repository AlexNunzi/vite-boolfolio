<template>
        <div class="card">
            <img v-if="projectImg" :src="`${this.baseUrl}/storage/${this.projectImg}`" class="card-img-top">
            <img v-else :src="placeholderImg" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">{{projectTitle}}</h5>
                <h6>Data di inizio progetto: {{ startDate }}</h6>
                <h6>Data di fine progetto: {{ endDate }}</h6>
                <p>{{ description }}</p>
                <router-link :to="{name: 'project-info', params: {slug: slug}}" class="btn btn-primary">
                    Mostra progetto
                </router-link>
            </div>
        </div>
</template>

<script>
 
 export default {
    name: 'ProjectCard',
    props: {
        baseUrl: String,
        projectImg: String,
        projectTitle: String,
        placeholderImg: String,
        startDate: String,
        endDate: String,
        description: String,
        slug: String

    }
 }

</script>

<style lang="scss" scoped>

</style>