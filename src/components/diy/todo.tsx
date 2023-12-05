import type { Todo } from "@prisma/client";

import { Switch } from "~/components/ui/switch";

type TodoProps = {
  todo: Todo,
  toggle: (todo: Todo) => void  
}

export default function Todo({ todo, toggle }: TodoProps) {
  return (
    <p className={`flex justify-between ${todo.done ? 'line-through' : ''}`}>
      {todo.text}
      <Switch checked={todo.done} onCheckedChange={() => toggle(todo)}/>
    </p>
  );
}
