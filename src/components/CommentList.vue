<template>
  <div v-for="(comment, index) in comments" :key="index">
    <div>{{comment.username}}: {{comment.content}}</div>
    <CommentItem></CommentItem>
  </div>
</template>

<script>
import CommentItem from "./CommentItem";
import { ref } from "vue";
export default {
  name: "CommentList",
  components: {
    CommentItem
  },
  setup() {
    const comments = ref([
      { username: "张三", content: "今天天气不错" },
      { username: "李四", content: "天气有点热" },
      { username: "王五", content: "要一起出去玩吗" }
    ]);
    return {
      comments
    };
  }
};
</script>

<style lang="less" scoped>
</style>