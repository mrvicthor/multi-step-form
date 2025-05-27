import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.ts";
import { setStep, step } from "./form-handler";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<main class="flex items-center justify-center h-dvh">
<section class="bg-white w-[58.75rem] h-[37.5rem] rounded-2xl shadow-xl grid grid-cols-[19.125rem_1fr] gap-[5.25rem] pr-[6.25rem]">
<section class="p-4">
<div class="bg-[url('/images/bg-sidebar-desktop.svg')] h-full bg-cover">
<ul id="steps" class="step-wrapper px-8 py-10 flex flex-col gap-8">
</ul>
</div></section>
<section class="pt-12 relative">
<form class="">
<h1 class="text-[#022959] text-[2rem] font-bold">Personal info</h1>
<p class="text-[#9699AA] mt-2 text-[1rem] form-text">Please provide your name, email address, and phone number.</p>
<section class="mt-8">
<div class="input-wrapper flex flex-col gap-2">
<div class="flex justify-between">
<label class="text-[#022959] text-sm capitalize" for="name" id="name-label">name</label> <span id="name-error" class="error" aria-live="polite"></span>
</div>
<input type="text" id="name" placeholder="e.g. Stephen King" class="border border-[#D6D9E6] text-[#022959] font-medium rounded-lg hover:border-[#483eff] cursor-pointer" required/>
</div>
<div class="input-wrapper flex flex-col gap-2 mt-6">
<div class="flex justify-between">
<label class="text-[#022959] text-sm capitalize" for="email" id="email-label">email address</label> <span id="email-error" class="error" aria-live="polite"></span>
</div>
<input type="email" placeholder="e.g. stephenking@lorem.com" id="email" class="border text-[#022959] font-medium border-[#D6D9E6] rounded-lg hover:border-[#483eff] cursor-pointer" required/>
</div>
<div class="input-wrapper flex flex-col gap-2 mt-6">
<div class="flex justify-between">
<label class="text-[#022959] text-sm capitalize" for="phoneNumber" id="phone-label">phone number</label> <span id="phone-error" class="error" aria-live="polite"></span>
</div>
<input type="tel" id="phoneNumber" placeholder="e.g. +1 234 567 890" class="border border-[#D6D9E6] text-[#022959] font-medium rounded-lg hover:border-[#483eff] cursor-pointer" required/>
</div>
</section>
<button id="next" class="absolute bottom-8 right-0 h-12 w-[7.6875rem] bg-[#022959] text-white font-medium text-[1rem] uppercase rounded-xl cursor-pointer">next step</button>
</form>
</section>
</section>
</main>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
setStep(document.querySelector<HTMLButtonElement>("#next")!);
