# comment-app
使用vue3 + vue-cli 开发简单的评论项目

## 需求
1. 发布评论，用户通过输入框输入名称和内容，点击按钮进行发布
2. 评论列表， 显示所有用户发布过的评论
3. 评论删除， 支持删除列表的某项评论
4. 评论回复， 支持当前用户回复某一条评论

## 组件设计
1. CommentApp, 容器组件，包含发布评论和评论列表两部分
2. CommentInput, 负责用户评论的输入和按钮发布
3. CommentList, 展示用户发布过得评论列表
4. CommentItem, 每个评论列表由单独的组件负责显示，并通过CommentList展示

## utils
1. 封装storage，用户数据的客户端存储
2. 封装useData，优化loadData和saveData的逻辑


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
