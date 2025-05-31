import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import arcadeLogo from "/images/icon-arcade.svg";
import advancedLogo from "/images/icon-advanced.svg";
import proLogo from "/images/icon-pro.svg";
// import { setupCounter } from "./counter.ts";
import { setStep, step } from "./form-handler";
import { handleSelect } from "./handle-plan";

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
<section class="form-steps" data-step="1">
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
<section class="form-steps hidden" data-step="2">
<p class="text-[#022959] text-[2rem] font-bold">Select your plan</p>
<p class="text-[#9699AA] mt-2 text-[1rem] form-text">You have the option of monthly, or yearly billing.</p>
<div id="yearly-plan" data-plan="yearly" class="mt-8 form-steps-plan hidden">
<label class="cursor-pointer">
  <input
    type="radio"
    name="plan"
    value="arcade-yearly"
    class="peer hidden"
  />
  
  <div class="h-20 px-4 rounded-lg border border-[#D6D9E6] flex items-center gap-4 justify-between peer-checked:border-[#483EFF]">
    <img src="${arcadeLogo}" class="h-10 w-10" alt="arcade logo" />
    <div class="flex flex-col mr-auto">
      <span class="text-[#022959] font-medium text-[1rem]">Arcade</span>
      <span class="text-[#9699AA] text-sm">$90/yr</span>
    </div>
    <span class="text-xs text-[#022959] font-light">2 months free</span>
  </div>
</label>
<label class="cursor-pointer">
  <input
    type="radio"
    name="plan"
    value="advanced-yearly"
    class="peer hidden"
  />
  
  <div class="h-20 px-4 rounded-lg border border-[#D6D9E6] flex items-center gap-4 mt-2 justify-between peer-checked:border-[#483EFF]">
    <img src="${advancedLogo}" class="h-10 w-10" alt="advanced logo" />
    <div class="flex flex-col mr-auto">
      <span class="text-[#022959] font-medium text-[1rem]">Advanced</span>
      <span class="text-[#9699AA] text-sm">$120/yr</span>
    </div>
    <span class="text-xs text-[#022959] font-light">2 months free</span>
  </div>
</label>
<label class="cursor-pointer">
  <input
    type="radio"
    name="plan"
    value="pro-yearly"
    class="peer hidden"
  />
  
  <div class="h-20 px-4 rounded-lg border border-[#D6D9E6] flex mt-2 items-center gap-4 justify-between peer-checked:border-[#483EFF]">
    <img src="${proLogo}" class="h-10 w-10" alt="pro logo" />
    <div class="flex flex-col mr-auto">
      <span class="text-[#022959] font-medium text-[1rem]">Pro</span>
      <span class="text-[#9699AA] text-sm">$150/yr</span>
    </div>
    <span class="text-xs text-[#022959] font-light">2 months free</span>
  </div>
</label>
</div>
<div id="monthly-plan" data-plan="monthly" class="mt-10 flex gap-[1.125rem] form-steps-plan">
<label class="cursor-pointer">
  <input
    type="radio"
    name="plan"
    value="arcade-monthly"
    class="peer hidden"
  />
  
  <div class="h-[10rem] w-[8.625rem] py-[1.125rem] px-4 rounded-lg border border-[#D6D9E6] flex flex-col justify-between peer-checked:border-blue-500">
    <img src="${arcadeLogo}" class="h-10 w-10" alt="pro logo" />
    <div class="flex flex-col">
      <span class="text-[#022959] font-medium text-[1rem]">Arcade</span>
      <span class="text-[#9699AA] text-sm">$9/mo</span>
    </div>
  </div>
</label>

<label class="cursor-pointer">
  <input
    type="radio"
    name="plan"
    value="advanced-monthly"
    class="peer hidden"
  />
  
  <div class="h-[10rem] w-[8.625rem] py-[1.125rem] px-4 rounded-lg border border-[#D6D9E6] flex flex-col justify-between peer-checked:border-blue-500">
    <img src="${advancedLogo}" class="h-10 w-10" alt="pro logo" />
    <div class="flex flex-col">
      <span class="text-[#022959] font-medium text-[1rem]">Advanced</span>
      <span class="text-[#9699AA] text-sm">$12/mo</span>
    </div>
  </div>
</label>

<label class="cursor-pointer">
  <input
    type="radio"
    name="plan"
    value="pro-monthly"
    class="peer hidden"
  />
  
  <div class="h-[10rem] w-[8.625rem] py-[1.125rem] px-4 rounded-lg border border-[#D6D9E6] flex flex-col justify-between peer-checked:border-blue-500">
    <img src="${proLogo}" class="h-10 w-10" alt="pro logo" />
    <div class="flex flex-col">
      <span class="text-[#022959] font-medium text-[1rem]">Pro</span>
      <span class="text-[#9699AA] text-sm">$15/mo</span>
    </div>
  </div>
</label>

</div>
<div class="bg-[#F8F9FF] h-12 flex items-center justify-center gap-6 mt-6 rounded-lg"><span id="monthly-text" class="font-bold capitalize">monthly</span><button id="toggle-plan" class="h-[1.25rem] w-[2.375rem] cursor-pointer bg-[#022959] rounded-xl flex items-center px-[3px]"><span class="dot h-3 w-3 bg-white rounded-full inline-block transform transition-transform duration-500 ease-in-out"></span></button><span id="yearly-text" class="font-bold capitalize">yearly</span></div>
</section>
<section class="form-steps hidden" data-step="3">
<p class="text-[#022959] text-[2rem] font-bold">Pick add-ons</p>
<p class="text-[#9699AA] mt-2 text-[1rem] form-text">Add-ons help enhance your gaming experience.</p>
<div class="mt-8">
<label class="cursor-pointer block">
<div class="custom-checkbox peer">
<input
  type="checkbox"
  name="add-Ons"
  value="online-service"
  class=""
/>
<span class="checkmark"></span>
</div>
    <div class="h-20 px-4 rounded-lg border border-[#D6D9E6] flex items-center gap-4 justify-between peer-has-checked:border-[#483EFF]">
    <div class="flex flex-col mr-auto ml-10">
      <span class="text-[#022959] font-medium text-[1rem]">Online service</span>
      <span class="text-[#9699AA] text-sm">Access to multiplayer games</span>
    </div>

    <span id="online-price" class="text-xs text-[#483EFF] font-light">+$1/mo</span>
  </div>
</label>
<label class="cursor-pointer block mt-4">
<div class="custom-checkbox peer">
<input
  type="checkbox"
  name="add-Ons"
  value="larger-storage"
  class=""
/>
<span class="checkmark"></span>
</div>
    <div class="h-20 px-4 rounded-lg border border-[#D6D9E6] flex items-center gap-4 justify-between peer-has-checked:border-[#483EFF]">
    <div class="flex flex-col mr-auto ml-10">
      <span class="text-[#022959] font-medium text-[1rem]">Larger storage</span>
      <span class="text-[#9699AA] text-sm">Extra 1TB of cloud save</span>
    </div>

    <span id="larger-price" class="text-xs text-[#483EFF] font-light">+$2/mo</span>
  </div>
</label>
<label class="cursor-pointer block mt-4">
<div class="custom-checkbox peer">
<input
  type="checkbox"
  name="add-Ons"
  value="customizable-profile"
  class=""
/>
<span class="checkmark"></span>
</div>
    <div class="h-20 px-4 rounded-lg border border-[#D6D9E6] flex items-center gap-4 justify-between peer-has-checked:border-[#483EFF]">
    <div class="flex flex-col mr-auto ml-10">
      <span class="text-[#022959] font-medium text-[1rem]">Customizable profile</span>
      <span class="text-[#9699AA] text-sm">Custom theme on your profile</span>
    </div>

    <span id="customizable-price" class="text-xs text-[#483EFF] font-light">+$2/mo</span>
  </div>
</label>
</div>
</section>
<section class="form-steps" data-step="4">
</section>
<div class="absolute bottom-8 flex justify-between w-full"><button id="prevBtn" class="capitalize text-[#9699AA] cursor-pointer hover:text-[#022959] text-[1rem] hidden">go back</button><button></button><button id="next" class="h-12 w-[7.6875rem] bg-[#022959] text-white font-medium text-[1rem] uppercase rounded-xl cursor-pointer">next step</button></div>

</form>
</section>
</section>
</main>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
setStep(document.querySelector<HTMLButtonElement>("#next")!);
handleSelect(document.querySelector<HTMLButtonElement>("#toggle-plan")!);
