<template>
  <CommentInput @comment-info="receiveInfo"></CommentInput>
  <CommentList></CommentList>
</template>

<script>
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
export default {
  name: "CommentApp",
  components: {
    CommentInput,
    CommentList
  },
  setup() {
    const receiveInfo = info => {
      console.log(info);
    };
    return {
      receiveInfo
    };
  }
};
</script>

<style lang="less" scoped></style>
