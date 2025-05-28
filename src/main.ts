import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import arcadeLogo from "/images/icon-arcade.svg";
import advancedLogo from "/images/icon-advanced.svg";
import proLogo from "/images/icon-pro.svg";
// import { setupCounter } from "./counter.ts";
import { setStep } from "./form-handler";

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
<section class="form-steps hidden" data-step="1">
<h1 class="text-[#022959] text-[2rem] font-bold">Personal info</h1>
<p class="text-[#9699AA] mt-2 text-[1rem] form-text">Please provide your name, email address, and phone number.</p>
<div class="input-wrapper flex flex-col gap-2 mt-8">
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
<section class="form-steps" data-step="2">
<p class="text-[#022959] text-[2rem] font-bold">Select your plan</p>
<p class="text-[#9699AA] mt-2 text-[1rem] form-text">You have the option of monthly, or yearly billing.</p>
<div data-plan="yearly" class="hidden mt-8 space-y-2 border border-amber-200">
<div class="h-20  rounded-lg border border-[#D6D9E6] flex items-center justify-between px-4 gap-4 cursor-pointer">
<input type="radio" class="hidden" name="plan" value="arcade"/>
<img src="${arcadeLogo}" alt="arcade logo"/> <div class="mr-auto flex flex-col"><label class="text-[#022959] font-medium text-[1rem]">Arcade</label>
<span class="text-[#9699AA] text-sm">$90/yr</span>
</div> <span class="text-xs text-[#022959] font-light">2 months free</span>
</div>
<div class="h-20 rounded-lg border border-[#D6D9E6] flex items-center justify-between px-4 gap-4 cursor-pointer">
<input type="radio" class="hidden" name="plan" value="advanced"/>
<img src="${advancedLogo}" alt="advanced logo"/> <div class="mr-auto flex flex-col"><label class="text-[#022959] font-medium text-[1rem]">Advanced</label>
<span class="text-[#9699AA] text-sm">$90/yr</span>
</div> <span class="text-xs text-[#022959] font-light">2 months free</span>
</div>
<div class="h-20 rounded-lg border border-[#D6D9E6] flex items-center justify-between px-4 gap-4 cursor-pointer">
<input type="radio" class="hidden" name="plan" value="pro"/>
<img src="${proLogo}" alt="pro logo"/> <div class="mr-auto flex flex-col"><label class="text-[#022959] font-medium text-[1rem]">Pro</label>
<span class="text-[#9699AA] text-sm">$90/yr</span>
</div> <span class="text-xs text-[#022959] font-light">2 months free</span>
</div>
</div>
<div data-plan="monthly" class="mt-10 flex gap-[1.125rem]">
<div class="h-[10rem] w-[8.625rem] py-[1.125rem] px-4 rounded-lg border border-[#D6D9E6] flex flex-col justify-between">
<input type="radio" class="hidden" name="plan" value="arcade" />
<img src="${arcadeLogo}" class="h-10 w-10" alt="arcade logo"/>
<div class="flex flex-col">
<label class="text-[#022959] font-medium text-[1rem]">Arcade</label>
<span class="text-[#9699AA] text-sm">$9/mo</span>
</div>
</div>
<div class="h-[10rem] w-[8.625rem] py-[1.125rem] px-4 rounded-lg border border-[#D6D9E6] flex flex-col justify-between">
<input type="radio" class="hidden" name="plan" value="arcade" />
<img src="${advancedLogo}" class="h-10 w-10" alt="arcade logo"/>
<div class="flex flex-col">
<label class="text-[#022959] font-medium text-[1rem]">Advanced</label>
<span class="text-[#9699AA] text-sm">$12/mo</span>
</div>
</div>
<div class="h-[10rem] w-[8.625rem] py-[1.125rem] px-4 rounded-lg border border-[#D6D9E6] flex flex-col justify-between">
<input type="radio" class="hidden" name="plan" value="arcade" />
<img src="${proLogo}" class="h-10 w-10" alt="arcade logo"/>
<div class="flex flex-col">
<label class="text-[#022959] font-medium text-[1rem]">Pro</label>
<span class="text-[#9699AA] text-sm">$15/mo</span>
</div>
</div>
</div>
<div class="bg-[#F8F9FF] h-12 flex items-center justify-center gap-6 mt-6 rounded-lg"><span class="font-bold capitalize">monthly</span><button id="toggle-plan" class="h-[1.25rem] w-[2.375rem] cursor-pointer bg-[#022959] rounded-xl flex items-center px-1"><span class="h-3 w-3 bg-white rounded-full inline-block transform transition-transform duration-700 ease-in-out"></span></button><span class="font-bold capitalize">yearly</span></div>
</section>
<section class="form-steps" data-step="3">
</section>
<section class="form-steps" data-step="4">
</section>
<button id="next" class="absolute bottom-8 right-0 h-12 w-[7.6875rem] bg-[#022959] text-white font-medium text-[1rem] uppercase rounded-xl cursor-pointer">next step</button>
</form>
</section>
</section>
</main>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
setStep(document.querySelector<HTMLButtonElement>("#next")!);
document
  .querySelector<HTMLButtonElement>("#toggle-plan")!
  .addEventListener("click", (e) => {
    e.preventDefault();
    const toggleBtn =
      document.querySelector<HTMLButtonElement>("#toggle-plan")!;
    toggleBtn.classList.toggle("justify-end");
  });
