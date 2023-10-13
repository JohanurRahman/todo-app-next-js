import db from '@/utils/db';
import TodoList from '@/components/TodoList';

const getData = async () => {
  return await db.todo.findMany({});
};

const TodosPage = async () => {
  const todos = await getData();
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
