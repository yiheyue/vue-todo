"use strict";

var vm = new Vue({
    el: "#main",
    data: {
        // 当前输入框的内容
        current: "",
        todos: [
            {
                id: "1",
                content: "查看 Vue.js 的源代码",
                isCompleted: false
            },
            {
                id: "2",
                content: "学习 React.js 的思想",
                isCompleted: false
            },
            {
                id: "3",
                content: "练习 jQuery 中的 API",
                isCompleted: false
            }
        ]
    },
    computed: {
        /* 保存已完成的 todo */
        completedTodos: function () {
            var todos = this.todos.filter(function (todo) {
                if (todo.isCompleted === true) return todo;
            });
            return todos;
        },
        /* 保存未完成的 todo */
        uncompletedTodos: function () {
            var todos = this.todos.filter(function (todo) {
                if (todo.isCompleted === false) return todo;
            });
            return todos;
        }
    },
    methods: {
        /* 添加一个 todo */
        addTodo: function () {
            if (this.current.length === 0) return;
            // 构建一个新的 todo 对象
            var id = Number(new Date()).toString();
            var content = this.current;
            var newTodo = {
                id: id,
                content: content,
                isCompleted: false
            };
            // 更新 todos 的数据并清空输入框的内容
            this.todos.push(newTodo);
            this.current = "";
        },
        /* 将一个 todo 标记为已完成 */
        markCompleted: function (todoId) {
            this.todos.forEach(function (todo) {
                if (todo.id === todoId) {
                    todo.isCompleted = true;
                }
            });
        },
        /* 将一个 todo 标记为未完成 */
        markUncompleted: function (todoId) {
            this.todos.forEach(function (todo) {
                if (todo.id === todoId) {
                    todo.isCompleted = false;
                }
            });
        },
        /* 删除一个 todo */
        deleteTodo: function (todoId) {
            var index, i;
            for (i = 0; i < this.todos.length; i++) {
                if (this.todos[i].id === todoId) {
                    index = i;
                }
            }
            this.todos.splice(index, 1);
        }
    }
});
