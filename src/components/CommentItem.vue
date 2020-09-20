<template>
  <div class="comment-item">
    <div class="user">{{comment.username}}:</div>
    <div class="content">{{comment.content}}</div>
    <div class="delete" @click="onDelete">
      <Icon name="delete" class="icon"></Icon>
    </div>
  </div>
</template>

<script>
import Icon from "../base/Icon.vue";
export default {
  name: "CommentItem",
  components: {
    Icon
  },
  props: {
    comment: {
      type: Object,
      required: true
    },
    deleteFn: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const onDelete = () => {
      props.deleteFn && props.deleteFn(props.index);
    };
    return {
      onDelete
    };
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
  position: relative;

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

  > .delete {
    position: absolute;
    right: 0.5em;
    top: 0.2em;
    cursor: pointer;
    display: none;

    > .icon {
      color: #00a3cf;
    }
  }
  &:hover {
    .delete {
      display: block;
    }
  }
}
</style>