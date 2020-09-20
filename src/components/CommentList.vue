<template>
  <div v-for="(comment, index) in commentList" :key="index" class="comment-list">
    <CommentItem :comment="comment" :deleteFn="onDelete" :index="index" :replyFn="onReply"></CommentItem>
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
    },
    deleteFn: {
      type: Function,
      required: true
    },
    replyFn: {
      type: Function,
      required: true
    }
  },
  components: {
    CommentItem
  },
  setup(props) {
    const onDelete = index => {
      props.deleteFn && props.deleteFn(index);
    };
    const onReply = index => {
      props.replyFn && props.replyFn(index);
    };
    return {
      onDelete,
      onReply
    };
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