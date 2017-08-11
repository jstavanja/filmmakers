<template>
    <div class="page-content">
        <div class="row">
            <div class="panel panel-default jumbotron">
                <div class="row top-jumbotron">
                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        <h1>Today's top picks!</h1>
                        <p>Carefully selected by team member Rodrigo.</p>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div class="editor-avatar"></div>
                    </div>
                </div>
            </div>
        </div>
        <app-loading-spinner v-if="loadingItems"></app-loading-spinner>
        <div class="row">
            <div v-for="(pick, index) in editorsPicks" class="col-xs-12 col-sm-12 col-md-6 col-lg-6" :key="index">
                <app-post :post="pick"></app-post>
            </div>
        </div>
    </div>
</template>

<script>
    import Post from '../Post.vue';
    import LoadingSpinner from '../LoadingSpinner.vue';
    import fire from '../../firebase';

    export default {
        data() {
            return {
                keys: ['test'],
                editorsPicks: [],
                loadingItems: true
            }
        },
        methods: {
            fetchEditorsPicks() {
                fire.db.ref('picks').on('value', (content) => {
                    this.keys = content.val();
                    Object.values(this.keys).forEach((key) => {
                        fire.db.ref('posts/' + key).on('value', (content) => {
                            this.editorsPicks.push(content.val());
                        });
                    });
                });
                this.loadingItems = false;
            }
        },
        components: {
            appPost: Post
        },
        created() {
            this.fetchEditorsPicks();
        }
    }
</script>

<style lang="scss" scoped>
    .panel {
        .panel-body, .top-jumbotron{
            padding-left: 30px;
        }

        .col-xs-3 {
            height: 100%;
        }

        .top-jumbotron {
            height: 100%;
        }

        .editor-avatar {
            height: 200px;
            background: url('../../assets/avatar.jpg') center center no-repeat;
            background-size: cover;
        }
    }

</style>
