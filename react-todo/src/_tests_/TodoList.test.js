import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

// Test 1: Render Todo List and initial todos
test("renders Todo List with initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Learn Jest")).toBeInTheDocument();
});

// Test 2: Add a new todo
test("can add a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(screen.getByText("Add"));

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("can toggle a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("Learn React"));
  expect(screen.getByText("Learn React")).toHaveStyle("text-decoration: line-through");
});

test("can delete a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText("Learn React").nextSibling); // Clicking on the Delete button
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});