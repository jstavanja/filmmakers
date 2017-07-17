<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <span class="name">{{ person.name }}</span>
            <button class="btn btn-sm btn-success">Read about {{ person.name.split(" ")[0] }}</button>
        </div>
        <div class="panel-body">
            <div class="row"><img src="../../assets/avatar.jpg" alt=""></div>
            <div class="row text-center">
                {{ person.bio }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['person']
    }
</script>

<style lang="scss" scoped>
    .panel {
        .panel-heading {
            padding-bottom: 10px;
            .name {
                font-size: 20px;
            }
            .btn {
                float: right;
                height: 100%;
            }
        }
        .panel-body {
            * {
                padding: 10px;
            }
            img {
                width: 100%;
            }
        }
    }
</style>