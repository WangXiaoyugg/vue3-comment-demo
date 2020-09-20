<template>
  <div class="comment-input-wrapper">
    <div class="comment-item">
      <span class="comment-item-label">用户名:</span>
      <input v-model.trim="username" type="text" class="comment-input" />
    </div>
    <div class="comment-item">
      <span class="comment-item-label">评论内容:</span>
      <textarea v-model.trim="content" class="comment-textarea"></textarea>
    </div>
    <div class="comment-item btn">
      <button class="comment-btn" @click="onPublish">发布</button>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";

export default {
  name: "CommentInput",
  setup(props, { emit }) {
    const username = ref("");
    const content = ref("");
    const loadData = () => {
      const loadName = sessionStorage.getItem("username");
      if (loadName) {
        username.value = loadName;
      }
    };

    const saveData = username => {
      sessionStorage.setItem("username", username);
    };

    onBeforeMount(() => {
      loadData();
    });

    const resetForm = () => {
      username.value = "";
      content.value = "";
    };
    const onPublish = () => {
      emit("comment-info", {
        username: username.value,
        content: content.value
      });
      saveData(username.value);
      resetForm();
    };

    return {
      username,
      content,
      onPublish
    };
  }
};
</script>

<style lang="less" scoped>
.comment-input-wrapper {
  background: #fff;
  border: 1px solid rgba(219, 219, 219, 0.8);
  padding: 20px;
  min-width: 520px;
  margin: 10px auto;
  font-size: 16px;
}
.comment-item {
  margin-bottom: 16px;
  display: flex;
  &.btn {
    justify-content: flex-end;
  }

  > .comment-item-label {
    display: flex;
    flex-basis: 100px;
    font-size: inherit;
    color: #1e1e1f;
  }
  > .comment-input,
  .comment-textarea {
    display: flex;
    flex: 1;
    border: 1px solid #dad9d9;
    border-radius: 4px;
    padding: 6px;
    resize: none;
    outline: none;
  }
  > .comment-textarea {
    min-height: 100px;
  }
  > .comment-btn {
    padding: 6px 12px;
    min-width: 100px;
    border: none;
    border-radius: 4px;
    background-color: #80cadf;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    outline: none;
    &:hover {
      background: #13c1f1;
    }
  }
}
</style>