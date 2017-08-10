<template>
    <div class="page-content">
        <div id="option-list" class="panel panel-default">
            <div class="panel-body">
                <div class="option col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <span class="panel-title">Add post to editor's picks 📌</span>
                        </div>
                        <div class="panel-body">
                            <span>Enter post id:</span>
                            <input type="text" v-model="featuredPostId">
                            <button class="btn btn-success" @click="pushId">Send</button>
                        </div>
                    </div>
                </div>
                <div class="option col-md-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <span class="panel-title">Editor's picks</span>
                        </div>
                        <div class="panel-body">
                           <ul>
                               <li v-for="pick in editorsPicks"><span>{{ pick[1] }}</span> <button class="btn btn-xs btn-danger" @click="deleteId(pick[0])">Remove</button></li>
                           </ul>
                        </div>
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
          featuredPostId: 'id',
          editorsPicks: []
        }
      },
      methods: {
        pushId() {
          let newPostKey = fire.db.ref().child('picks').push().key;
          let dataObj = {};
          dataObj['picks/' + newPostKey] = this.featuredPostId;
          fire.db.ref().update(dataObj);
        },
        deleteId(postId) {
          fire.db.ref('picks/' + postId).remove();
        }
      },
      created() {
        fire.db.ref('picks').on('value', (content) => {
          let picks = [];
          content.forEach((entry) => {
            let arr = [entry.key, entry.val()];
            picks.push(arr);
          });
          this.editorsPicks = picks;
        });
      }
    }
</script>

<style lang="scss" scoped>
    .option {
        .btn {
            margin: 5px;
        }
    }
</style>