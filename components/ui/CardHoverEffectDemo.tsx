'use client'

import { HoverEffect } from "./card-hover-effect";
import reactLogo from '../../app/images/react.png'
import todo from '../../app/images/todo-list.png'
import ciPaws from '../../app/images/ci-paws.png'

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-10">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Todo List",
    description: "Introducing your ultimate to-do list! Streamline tasks, plan goals, and boost productivity effortlessly. Say hello to organized efficiency!",
    link: "https://stripe.com",
    src: todo,
    techStack: {
      reactjs: true
    }
  }
];

