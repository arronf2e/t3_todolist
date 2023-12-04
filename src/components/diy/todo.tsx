import { Todo } from "@prisma/client";

import { Switch } from "~/components/ui/switch";

export default function Todo({ todo }: { todo: Todo }) {
  return (
    <p className="flex justify-between">
      {todo.text}
      <Switch value={Number(todo.done)}/>
    </p>
  );
}
