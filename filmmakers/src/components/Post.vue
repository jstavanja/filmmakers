<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <span class="panel-title">{{ post.title }}</span><small> | Date added: {{ post.date }}</small>
        </div>
        <div class="panel-body">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div class="row">
                    <img src="../assets/avatar.jpg" alt="" class="post-thumbnail">
                </div>
                <div class="row text-center voting">
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div class="voting-score">
                            <p>{{ post.score }}</p>
                        </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div class="voting-section">
                            <div class="vote-plus" @click="upvote"><i class="ion-plus-round"></i></div>
                            <div class="vote-minus" @click="downvote"><i class="ion-minus-round"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                {{ post.content }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['post', 'index'],
        methods: {
            upvote() {
                console.log(this.post);
            },
            downvote() {
                console.log(this.post);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .panel {
        .post-thumbnail {
            width: 100%;
            margin-bottom: 20px;
        }
        .panel-body {
            .voting {
                .voting-score {
                    width: 100%;
                    font-size: 2.5vw;
                    float: left;
                }
                .voting-section {
                    height: 100%;
                    width: 100%;
                    float: left;
                    .vote-plus, .vote-minus {
                        height: 50%;
                    }
                }
            }
        }
    }

    @media (max-width: 445px) {
        .panel {
            .panel-body {
                .voting {
                    .voting-score {
                        font-size: 4vw;
                    }
                }
            }
        }
    }

</style>