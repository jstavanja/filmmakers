<template>
    <div class="page-content">
        <div class="row">
            <div class="panel panel-default jumbotron text-center">
                <h1>Featured creators</h1>
                <p>Discover new people that are creating amazing things.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" v-for="(person, index) in people">
                <app-person :person="person"></app-person>
            </div>
        </div>
    </div>
</template>

<script>
    import Person from './Person.vue';

    export default {
        data() {
            return {
                people: []
            }
        },
        methods: {
            fetchPeople() {
                this.$http.get('people.json')
                    .then(data => data.json())
                    .then(result => this.people = result);
            }
        },
        components: {
          appPerson: Person
        },
        created() {
            this.fetchPeople();
        }
    }
</script>

<style lang="scss" scoped>
    .panel {
        padding-left: 30px;
    }
</style>