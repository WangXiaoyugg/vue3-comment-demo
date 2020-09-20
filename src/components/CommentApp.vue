<template>
  <div class="comment-app">
    <CommentInput @comment-info="receiveInfo" :replyUser="replyUser"></CommentInput>
    <CommentList
      :comment-list="commentList"
      :deleteFn="deleteCommentList"
      :replyFn="replyCommentList"
    ></CommentList>
  </div>
</template>

<script>
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { ref } from "vue";
import { useData } from "../lib/useData";
export default {
  name: "CommentApp",
  components: {
    CommentInput,
    CommentList
  },
  setup() {
    const commentList = ref([]);
    const replyUser = ref("");
    const { save } = useData(commentList, "comments");

    const receiveInfo = info => {
      if (!info.username) return alert("请输入用户名");
      if (!info.content) return alert("请输入评论内容");

      commentList.value.push(info);
      save(commentList.value);
    };
    const deleteCommentList = index => {
      commentList.value.splice(index, 1);
      save(commentList.value);
    };
    const replyCommentList = index => {
      const replied = commentList.value[index];
      replyUser.value = replied.username;
    };
    return {
      receiveInfo,
      commentList,
      deleteCommentList,
      replyCommentList,
      replyUser
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
