<template>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div class="panel panel-default">
            <div class="panel-heading">
                <div class="align-left">
                    {{ item.name }}
                </div>
                <div class="align-right">
                    {{ item.price }} $
                </div>
            </div>
            <!-- Smaller screens -->
            <div class="panel-body hidden-sm hidden-md hidden-lg">
                <div class="row">
                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <!-- TODO: implement img src="{{ item.image }}" -->
                        <img src="../../assets/avatar.jpg" alt="" class="item-image">
                    </div>
                    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        {{ item.description }}
                    </div>
                </div>
                <div class="row text-right see-more">
                    <button class="btn btn-success">See more!</button>
                </div>
            </div>
            <!-- Larger screens -->
            <div class="panel-body hidden-xs">
                <div class="row image">
                    <!-- TODO: implement img src="{{ item.image }}" -->
                    <img src="../../assets/avatar.jpg" alt="" class="item-image">
                </div>
                <div class="row description">
                    {{ item.description }}
                </div>
                <div class="row text-center see-more">
                    <button class="btn btn-success">See more!</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'item'
        ]
    }
</script>

<style lang="scss">
    .panel {
        .panel-heading {
            div {
                position: relative;
                display: inline-block;
            }
            .align-right {
                float: right;
                color: forestgreen;
            }
        }
        .panel-body {
            margin: 10px;
            padding-top: 0;
            .description {
                margin-top: 10px;
            }
            .item-image {
                border-radius:5px;
                width: 100%;
            }
            .see-more {
                margin-top: 10px;
            }
        }
    }

    @media (max-width: 550px) {
        .hidden-sm {
            display: none;
        }
        .hidden-xs {
            display: block !important;
        }
    }
</style>