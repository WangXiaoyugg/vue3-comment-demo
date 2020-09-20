<template>
  <div v-for="(comment, index) in commentList" :key="index" class="comment-list">
    <CommentItem :comment="comment"></CommentItem>
  </div>
</template>

<script>
import CommentItem from "./CommentItem";
export default {
  name: "CommentList",
  props: {
    commentList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CommentItem
  },
  setup() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.comment-list {
  background-color: #fff;
  min-width: 520px;
  margin: 10px auto;
  font-size: 16px;
}
</style>