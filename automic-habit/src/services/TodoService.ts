import { TodoModel as Todo } from "../models/TodoModel";

const axios = require('axios').default;

class TodoService {

    // add new todo
    async newTodo(title: string, content: string) {
        try {
            await axios.post('/todo', {
                "title": title,
                "content": content,
            });
        } catch (error) {
            console.log(error);
        }
    }

    // get all todos
    async getTodos(userID: string): Promise<Todo[]> {
        try {
            const { jsonTodos } = await axios.get(`/user/:${userID}/todos`);

            let todos: Todo[] = JSON.parse(jsonTodos);

            return todos;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export { TodoService }