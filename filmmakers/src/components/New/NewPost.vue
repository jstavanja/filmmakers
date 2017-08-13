<template>
    <div class="page-content">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Create New Post
                    </div>
                    <div class="panel-body" id="new-post">
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" placeholder="title" id="title-input" class="form-control" v-model="title">
                                <input type="url" placeholder="url to image" id="image-input" class="form-control" v-model="imageUrl">
                                <textarea placeholder="text" id="text-input" class="form-control" rows="3" v-model="text"></textarea>
                            </div>
                        </div>
                        <button class="btn btn-success" @click="createNewPost">Post</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import fire from '../../firebase';
    export default {
        data() {
          return {
            title: '',
            text: '',
            imageUrl: ''
          }
        },
        methods: {
          createNewPost() {
            let newPostKey = fire.db.ref().child('posts').push().key;
            let date = new Date();
            let dateString = date.getDate() + '.' + date.getUTCMonth() + '.' + date.getFullYear();
            let newPost = {
              title: this.title,
              content: this.text,
              date: dateString,
              score: 0,
              image: this.imageUrl
            }
            let dataObj = {};
            dataObj['posts/' + newPostKey] = newPost;
            fire.db.ref().update(dataObj).then(() => {
              alert('Post submitted succesfully');
            });
          },
        }
    }
</script>