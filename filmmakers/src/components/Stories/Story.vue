<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            {{ story.title }}
        </div>
        <div class="panel-body">
            <p>{{ story.description }}</p>
            <button class="btn btn-success">Read more</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'story'
        ]
    }
</script>

<style lang="scss" scoped>
    .panel {
        .panel-body {
            p {
                display: inline-block;
                width: 80%;
            }
            .btn {
                display: inline-block;
                float: right;
            }
        }
    }
</style>