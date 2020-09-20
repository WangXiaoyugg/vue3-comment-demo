<template>
  <div class="comment-item">
    <div class="user">{{comment.username}}:</div>
    <div class="content">{{comment.content}}</div>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.comment-item {
  display: flex;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 10px;
  padding: 16px 0 10px;
  min-height: 60px;
  font-size: 16px;

  > .content {
    margin: 0;
    word-wrap: break-word;
    word-break: break-all;
    min-width: 4504px;
    text-align: left;
    flex: 1;
  }
  > .user {
    flex-basis: 4em;
    flex-shrink: 0;
    color: #00a3cf;
    font-style: italic;
  }
}
</style>