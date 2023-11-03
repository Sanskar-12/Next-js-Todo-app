import React from "react";
import Form from "./todoForm";
import { TodoItem } from "@/components/TodoItem";

const page = () => {
  return (
    <div className="container">
      <Form />
      <div className="todosContainer">
        <TodoItem title={"bjjd"} description={"nksdjjjfsbkjfbjkb"} id={"nnsfkn"} iscomleted={true}/>
      </div>
    </div>
  );
};

export default page;
