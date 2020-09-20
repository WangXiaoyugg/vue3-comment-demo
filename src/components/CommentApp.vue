<template>
  <CommentInput></CommentInput>
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
    return {};
  }
};
</script>

<style lang="less" scoped></style>
