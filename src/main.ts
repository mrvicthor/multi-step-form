import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<main class="flex items-center justify-center h-dvh">
<section class="bg-white w-[58.75rem] h-[37.5rem] rounded-2xl shadow-xl grid grid-cols-[19.125rem_1fr] gap-[5.25rem] pr-[6.25rem]">
<section class="p-4">
<div class="bg-[url('/images/bg-sidebar-desktop.svg')] h-full bg-cover">
<ul id="steps" class="step-wrapper px-8 py-10 flex flex-col gap-8">
</ul>
</div></section>
<section></section>
</section>
</main>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const list = [
  { id: 1, step: 1, description: "your info" },
  { id: 2, step: 2, description: "select plan" },
  { id: 3, step: 3, description: "add-ons" },
  { id: 4, step: 4, description: "summary" },
];
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelector<HTMLUListElement>("#steps")!;
  if (!steps) return;
  for (let i = 0; i < list.length; i += 1) {
    const step = list[i].step;
    const description = list[i].description;
    const li = document.createElement("li");
    li.className = "flex gap-4";
    li.innerHTML = `
    <button class="bg-[#BEE2FD] h-8 w-8 rounded-full">${step}</button><article class="flex flex-col uppercase">
  <span class="text-[#ABBCFF] text-xs">step ${step}</span>
  <span class="text-white font-bold text-sm">${description}</span>
  </article>
    `;
    steps.appendChild(li);
  }
});

// <div>
// <a href="https://vite.dev" target="_blank">
//   <img src="${viteLogo}" class="logo" alt="Vite logo" />
// </a>
// <a href="https://www.typescriptlang.org/" target="_blank">
//   <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
// </a>
// <h1>Vite + TypeScript</h1>
// <div class="card">
//   <button id="counter" type="button"></button>
// </div>
// <p class="read-the-docs">
//   Click on the Vite and TypeScript logos to learn more
// </p>
// </div>
