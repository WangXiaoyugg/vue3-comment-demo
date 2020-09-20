<template>
  <div class="comment-app">
    <CommentInput @comment-info="receiveInfo"></CommentInput>
    <CommentList :comment-list="commentList"></CommentList>
  </div>
</template>

<script>
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { ref } from "vue";
export default {
  name: "CommentApp",
  components: {
    CommentInput,
    CommentList
  },
  setup() {
    const commentList = ref([]);
    const receiveInfo = info => {
      commentList.value.push(info);
    };
    return {
      receiveInfo,
      commentList
    };
  }
};
</script>

<style lang="less" scoped>
.comment-app {
  min-width: 560px;
  margin: 10px auto;
  font-size: 16px;
  background: #fff;
  border: 1px solid rgba(219, 219, 219, 0.8);
  padding: 20px;
}
</style>
