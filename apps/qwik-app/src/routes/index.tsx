import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Counter } from "qwik-lib";

export default component$(() => {
  return (
    <>
      <h1>Welcome to Qwik. 👋</h1>
      <Counter/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
