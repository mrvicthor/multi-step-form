import "./style.css";
import arcadeLogo from "/images/icon-arcade.svg";
import advancedLogo from "/images/icon-advanced.svg";
import proLogo from "/images/icon-pro.svg";
import thankyouLogo from "/images/icon-thank-you.svg";
import { setStep } from "./form-handler";
import { handleSelect } from "./handle-plan";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<main class="relative md:flex md:items-center md:justify-center h-dvh">
<section class="md:bg-white w-full md:mx-10 sm:min-w-[42.875rem] lg:w-[58.75rem] h-full md:h-[37.5rem] rounded-2xl shadow-xl grid md:grid-cols-[14.875rem_1fr] lg:grid-cols-[19.125rem_1fr] md:gap-[2.625rem] lg:gap-[5.25rem] md:pr-[3.625rem] lg:pr-[6.25rem]">
<section class="col-span-1 md:p-4">
<div class="bg-[url('/images/bg-sidebar-mobile.svg')] md:bg-[url('/images/bg-sidebar-desktop.svg')] h-[10.75rem] md:h-full bg-cover md:rounded-lg">
<ul id="steps" class="step-wrapper px-8 py-10 flex items-center md:items-start justify-center md:flex-col gap-8">
</ul>
</div></section>
<section class="pt-8 pb-8 md:pb-0 px-6 md:px-0 md:pt-12 absolute w-[90%] md:w-full top-[12%] overflow-hidden -translate-x-[50%] left-[50%] md:left-0 md:translate-x-0 md:relative rounded-lg bg-white md:bg-transparent md:top-0">
<form class="h-full w-full">
<section class="form-steps" data-step="1">
<h1 class="text-[#022959] text-2xl md:text-[2rem] font-bold">Personal info</h1>
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
<p class="text-[#022959] text-2xl md:text-[2rem] font-bold">Select your plan</p>
<p class="text-[#9699AA] mt-2 text-[1rem] form-text">You have the option of monthly, or yearly billing.</p>
<span id="plan-error" class="error mt-2" aria-live="polite"></span>
<div id="yearly-plan" data-plan="yearly" class="mt-8 form-steps-plan hidden lg:space-x-4">
<label class="cursor-pointer block">
  <input
    type="radio"
    name="plan"
    value="Arcade yearly"
    class="peer hidden"
  />
  
  <div class="h-20 px-4 lg:h-[10rem] lg:w-[8.625rem] w-full lg:py-[1.125rem] rounded-lg border border-[#D6D9E6] flex items-center lg:items-start lg:gap-0 lg:flex-col gap-4 justify-between peer-checked:border-[#483EFF]">
    <img src="${arcadeLogo}" class="h-10 w-10" alt="arcade logo" />
    <div class="flex flex-col mr-auto">
      <span class="text-[#022959] font-medium text-[1rem]">Arcade</span>
      <span class="text-[#9699AA] text-sm">$90/yr</span> 
    </div>
    <span class="text-xs text-[#022959] font-light">2 months free</span>
  </div>
</label>
<label class="cursor-pointer block">
  <input
    type="radio"
    name="plan"
    value="Advanced yearly"
    class="peer hidden"
  />
  
  <div class="h-20 px-4 lg:h-[10rem] lg:w-[8.625rem] w-full lg:py-[1.125rem] rounded-lg border border-[#D6D9E6] flex items-center lg:items-start lg:gap-0 lg:flex-col gap-4 justify-between peer-checked:border-[#483EFF]">
    <img src="${advancedLogo}" class="h-10 w-10" alt="advanced logo" />
    <div class="flex flex-col mr-auto">
      <span class="text-[#022959] font-medium text-[1rem]">Advanced</span>
      <span class="text-[#9699AA] text-sm">$120/yr</span>
    </div>
    <span class="text-xs text-[#022959] font-light">2 months free</span>
  </div>
</label>
<label class="cursor-pointer block">
  <input
    type="radio"
    name="plan"
    value="Pro yearly"
    class="peer hidden"
  />
  
  <div class="h-20 px-4 lg:h-[10rem] lg:w-[8.625rem] w-full lg:py-[1.125rem] rounded-lg border border-[#D6D9E6] flex items-center lg:items-start lg:gap-0 lg:flex-col gap-4 justify-between peer-checked:border-[#483EFF]">
    <img src="${proLogo}" class="h-10 w-10" alt="pro logo" />
    <div class="flex flex-col mr-auto">
      <span class="text-[#022959] font-medium text-[1rem]">Pro</span>
      <span class="text-[#9699AA] text-sm">$150/yr</span>
    </div>
    <span class="text-xs text-[#022959] font-light">2 months free</span>
  </div>
</label>
</div>
<div id="monthly-plan" data-plan="monthly" class="mt-10 flex gap-[1.125rem] flex-col lg:flex-row form-steps-plan">
<label class="cursor-pointer block">
  <input
    type="radio"
    name="plan"
    value="Arcade monthly"
    class="peer hidden"
  />
  
  <div class="h-20 px-4 lg:h-[10rem] lg:w-[8.625rem] w-full lg:py-[1.125rem] rounded-lg border border-[#D6D9E6] flex items-center lg:items-start lg:gap-0 lg:flex-col gap-4 justify-between peer-checked:border-[#483EFF]">
    <img src="${arcadeLogo}" class="h-10 w-10" alt="pro logo" />
    <div class="flex flex-col mr-auto">
      <span class="text-[#022959] font-medium text-[1rem]">Arcade</span>
      <span class="text-[#9699AA] text-sm">$9/mo</span>
    </div>
  </div>
</label>

<label class="cursor-pointer block">
  <input
    type="radio"
    name="plan"
    value="Advanced monthly"
    class="peer hidden"
  />
  
  <div class="h-20 px-4 lg:h-[10rem] lg:w-[8.625rem] w-full lg:py-[1.125rem] rounded-lg border border-[#D6D9E6] flex items-center lg:items-start lg:gap-0 lg:flex-col gap-4 justify-between peer-checked:border-[#483EFF]">
    <img src="${advancedLogo}" class="h-10 w-10" alt="pro logo" />
    <div class="flex flex-col mr-auto">
      <span class="text-[#022959] font-medium text-[1rem]">Advanced</span>
      <span class="text-[#9699AA] text-sm">$12/mo</span>
    </div>
  </div>
</label>

<label class="cursor-pointer block">
  <input
    type="radio"
    name="plan"
    value="Pro monthly"
    class="peer hidden"
  />
  
  <div class="h-20 px-4 lg:h-[10rem] lg:w-[8.625rem] w-full lg:py-[1.125rem] rounded-lg border border-[#D6D9E6] flex items-center lg:items-start lg:gap-0 lg:flex-col gap-4 justify-between peer-checked:border-[#483EFF]">
    <img src="${proLogo}" class="h-10 w-10" alt="pro logo" />
    <div class="flex flex-col mr-auto">
      <span class="text-[#022959] font-medium text-[1rem]">Pro</span>
      <span class="text-[#9699AA] text-sm">$15/mo</span>
    </div>
  </div>
</label>

</div>
<div class="bg-[#F8F9FF] h-12 flex items-center justify-center gap-6 mt-6 rounded-lg"><span id="monthly-text" class="font-bold capitalize">monthly</span><button id="toggle-plan" class="h-[1.25rem] w-[2.375rem] cursor-pointer bg-[#022959] rounded-xl flex items-center px-[3px]"><span class="dot h-3 w-3 bg-white rounded-full inline-block transform transition-transform duration-500 ease-in-out"></span></button><span id="yearly-text" class="font-bold capitalize">yearly</span></div>
</section>
<section class="form-steps hidden" data-step="3">
<p class="text-[#022959] text-2xl md:text-[2rem] font-bold">Pick add-ons</p>
<p class="text-[#9699AA] mt-2 text-[1rem] form-text">Add-ons help enhance your gaming experience.</p>
<div class="mt-8">
<span id="addOns-error" class="error" aria-live="polite"></span>
<label class="cursor-pointer block">
<div class="custom-checkbox peer">
<input
  type="checkbox"
  name="add-Ons"
  value="Online service"
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
  value="Larger storage"
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
  value="Customizable profile"
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
<section class="form-steps hidden h-full" data-step="4">
<div class="summary-page">
<p class="text-[#022959] text-2xl md:text-[2rem] font-bold">Finishing up</p>
<p class="text-[#9699AA] mt-2 text-[1rem] form-text">Double-check everything looks OK before confirming.</p>
<div class="mt-8">
<article>
<div class="bg-[#f8f9ff] py-5 px-6 rounded-lg space-y-4">
<div class="flex justify-between items-center">
<div class="flex flex-col gap-2">
<span id="plan-text" class="text-[#022959] font-medium text-[1rem]"></span>
<span class="text-sm text-[#9699AA]">Change</span>
</div><span id="plan-amount" class="text-[#022959] font-bold text-[1rem]"></span>
</div>
<div class="h-[2px] bg-[#9699AA] w-full"></div>
<ul id="add-ons-list" class="flex flex-col gap-4">
</ul>
</div>
<div class="flex justify-between mt-8 px-6">
<span class="text-sm text-[#9699AA]">Total (per month)</span>
<span id="total" class="font-bold text-xl text-[#483EFF]"></span>
</div>
</article>
</div>
</div>
<div class="confirmation-page flex items-center justify-center h-full">
<div class="flex flex-col items-center h-[14.875rem] gap-8">
<img src="${thankyouLogo}" alt="confirmation logo" class="h-14 w-14 lg:h-20 lg:w-20"/>
<article class="text-center">
<h1 class="text-[#022959] font-bold text-2xl lg:text-[2rem]">Thank you!</h1>
<p class="text-[1rem] text-[#9699AA]">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
</article>
</div>
</div>
</section>
<div class="hidden left-0 md:absolute md:bottom-8 md:flex justify-between w-full"><button id="prevBtn-desktop" class="capitalize text-[#9699AA] cursor-pointer hover:text-[#022959] text-[1rem] hidden">go back</button><button></button><button id="next-desktop" class="h-12 w-[7.6875rem] bg-[#022959] text-white font-medium text-[1rem] uppercase rounded-xl cursor-pointer next-step-btn">next step</button></div>

</form>
</section>
<div class="fixed bg-white left-0 md:hidden bottom-0 h-[4.5rem] flex justify-between items-center px-6 w-full"><button id="prevBtn-mobile" class="capitalize text-[#9699AA] cursor-pointer hover:text-[#022959] text-[1rem] hidden">go back</button><button></button><button id="next-mobile" class="h-12 w-[7.6875rem] bg-[#022959] text-white font-medium text-[1rem] uppercase rounded-xl cursor-pointer next-step-btn">next step</button></div>

</section>
</main>
`;

const nextButtons =
  document.querySelectorAll<HTMLButtonElement>(".next-step-btn");
nextButtons.forEach((btn) => {
  if (btn.offsetParent) {
    setStep(document.querySelector<HTMLButtonElement>(`#${btn.id}`)!);
  }
});

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

handleSelect(document.querySelector<HTMLButtonElement>("#toggle-plan")!);
