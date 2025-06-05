import { formatPlanText, formatPrice, matchPlan } from "./matchPlan";

export let step = 1;
export let activeIndex = 1;
export let width = window.innerWidth;

const list = [
  { id: 1, index: 1, description: "your info" },
  { id: 2, index: 2, description: "select plan" },
  { id: 3, index: 3, description: "add-ons" },
  { id: 4, index: 4, description: "summary" },
];

export function setStep(element: HTMLButtonElement) {
  const name = document.querySelector<HTMLInputElement>("#name")!;
  const email = document.querySelector<HTMLInputElement>("#email")!;
  const phoneNumber = document.querySelector<HTMLInputElement>("#phoneNumber")!;
  const emailError = document.querySelector<HTMLSpanElement>("#email-error")!;
  const nameError = document.querySelector<HTMLSpanElement>("#name-error")!;
  const phoneError = document.querySelector<HTMLSpanElement>("#phone-error")!;
  const planError = document.querySelector<HTMLSpanElement>("#plan-error")!;
  const addOnsError = document.querySelector<HTMLSpanElement>("#addOns-error")!;
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
  const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const formSteps = document.querySelectorAll<HTMLElement>(".form-steps")!;
  const nextBtnDesktop =
    document.querySelector<HTMLButtonElement>("#next-desktop")!;
  const nextBtnMobile =
    document.querySelector<HTMLButtonElement>("#next-mobile")!;
  const confirmBtnDesktop =
    document.querySelector<HTMLButtonElement>("#confirm-desktop")!;
  const confirmBtnMobile =
    document.querySelector<HTMLButtonElement>("#confirm-mobile")!;
  const planText = document.querySelector<HTMLSpanElement>("#plan-text")!;
  const planPrice = document.querySelector<HTMLSpanElement>("#plan-amount")!;
  const addOnSummary =
    document.querySelector<HTMLUListElement>("#add-ons-list")!;
  const total = document.querySelector<HTMLSpanElement>("#total")!;
  const prevBtnDesktop =
    document.querySelector<HTMLButtonElement>("#prevBtn-desktop")!;
  const prevBtnMobile =
    document.querySelector<HTMLButtonElement>("#prevBtn-mobile")!;
  const confirmationPage =
    document.querySelector<HTMLDivElement>(".confirmation-page")!;
  const summaryPage = document.querySelector<HTMLDivElement>(".summary-page")!;

  let hasConfirmed = false;
  let myPlan = "";
  let myAddOns: string[] = [];
  const isValidEmail = () => {
    const validity = email.value.length !== 0 && emailRegExp.test(email.value);
    return validity;
  };

  const isValidPhoneNumber = () => {
    const validity =
      phoneNumber.value.length !== 0 && phoneRegExp.test(phoneNumber.value);
    return validity;
  };

  const setIsValidInput = (isValid: boolean, value: HTMLSpanElement) => {
    value.className = isValid ? "valid" : "invalid";
  };

  const updateError = (
    isValid: boolean,
    value: HTMLSpanElement,
    field: HTMLInputElement,
    message: string
  ) => {
    if (isValid) {
      value.textContent = "";
      value.removeAttribute("class");
      field.classList.remove("border-[#ee374a]");
      field.classList.add("border-[#d6d9e6]");
    } else {
      value.textContent = message;
      value.setAttribute("class", "error");
      field.classList.remove("border-[#d6d9e6]");
      field.classList.add("border-[#ee374a]");
    }
  };

  const handleEmailInput = () => {
    const emailInput = isValidEmail();
    setIsValidInput(emailInput, emailError);
    updateError(emailInput, emailError, email, "Please enter a valid email");
  };

  const handlePhoneInput = () => {
    const phoneInput = isValidPhoneNumber();
    setIsValidInput(phoneInput, phoneError);
    const message =
      phoneNumber.value.length !== 0
        ? "Phone number should be at least 10 digits"
        : "This field is required";
    updateError(phoneInput, phoneError, phoneNumber, message);
  };

  const handleNameInput = () => {
    const nameInput = name.value.length !== 0;
    setIsValidInput(nameInput, nameError);
    updateError(nameInput, nameError, name, "This field is required");
  };

  const setNextStep = (count: number) => {
    const steps = document.querySelector<HTMLUListElement>("#steps")!;
    if (step === 1) {
      if (!steps) return;
      if (steps.children.length === 0) {
        for (let i = 0; i < list.length; i += 1) {
          const step = list[i].index;
          const description = list[i].description;
          const li = document.createElement("li");
          li.className = "flex gap-4";
          li.innerHTML = `
              <button class="h-8 w-8 rounded-full steps-buttons">${step}</button><article class="hidden md:flex flex-col uppercase">
            <span class="text-[#ABBCFF] text-xs">step ${step}</span>
            <span class="text-white font-bold text-sm">${description}</span>
            </article>
              `;
          steps.appendChild(li);
        }
        const buttons =
          document.querySelectorAll<HTMLButtonElement>(".steps-buttons")!;
        buttons.forEach((button) =>
          Number(button.innerHTML) === activeIndex
            ? button.classList.add("bg-[#BEE2FD]", "text-[#022959]")
            : button.classList.add("border", "border-white", "text-white")
        );
      }
    }

    step = count;
  };

  const getAddons = (buttons: HTMLButtonElement[]) => {
    const addOns = document.querySelectorAll('input[name="add-Ons"]');
    addOns.forEach((option) => {
      if (option instanceof HTMLInputElement) {
        if (option.checked) {
          myAddOns.push(option.value);
          if (myAddOns.length === 1) {
            setNextStep(step + 1);
            activeIndex++;
          }
          updateActiveButton(buttons, activeIndex);
          initializeSteps(activeIndex);
        } else {
          addOnsError.textContent = "Please select at least one option";
          addOnsError.setAttribute("class", "error");
          option.addEventListener("change", () => {
            addOnsError.textContent = "";
            addOnsError.removeAttribute("class");
          });
        }
      }
    });
  };

  element.addEventListener("click", (e) => {
    e.preventDefault();
    const emailInput = isValidEmail();
    const phoneInput = isValidPhoneNumber();
    const nameInput = name.value.length !== 0;
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(".steps-buttons")
    );

    if (step === 1) {
      if (!emailInput || !phoneInput || !nameInput) {
        console.log(phoneNumber.value.length);
        const message =
          phoneNumber.value.length === 0
            ? "This field is required"
            : "Phone number should be at least 10 digits";

        updateError(nameInput, nameError, name, "This field is required");
        updateError(emailInput, emailError, email, "This field is required");
        updateError(phoneInput, phoneError, phoneNumber, message);
        return;
      }

      setNextStep(step + 1);
      activeIndex++;
      updateActiveButton(buttons, activeIndex);
      initializeSteps(activeIndex);
      width = window.innerWidth;
      if (width < 768) {
        prevBtnMobile.classList.remove("hidden");
      } else {
        prevBtnDesktop.classList.remove("hidden");
      }
    } else if (step === 2) {
      const customizablePrice = document.querySelector("#customizable-price")!;
      const largerPrice = document.querySelector("#larger-price")!;
      const onlinePrice = document.querySelector("#online-price")!;
      document.getElementsByName("plan").forEach((plan) => {
        if (plan instanceof HTMLInputElement) {
          if (plan.checked) {
            myPlan = plan.value;

            if (plan.value.includes("yearly")) {
              onlinePrice.textContent = "+$10/yr";
              largerPrice.textContent = "+$20/yr";
              customizablePrice.textContent = "+$20/yr";
            } else {
              onlinePrice.textContent = "+$1/mo";
              largerPrice.textContent = "+$2/mo";
              customizablePrice.textContent = "+$2/mo";
            }
            setNextStep(step + 1);
            activeIndex++;
            width = window.innerWidth;
            updateActiveButton(buttons, activeIndex);
            initializeSteps(activeIndex);
          } else {
            planError.textContent = "Please choose an option";
            planError.setAttribute("class", "error");
            plan.addEventListener("change", () => {
              planError.textContent = "";
              planError.removeAttribute("class");
            });
          }
        }
      });
    } else if (step === 3) {
      if (myAddOns.length !== 0) {
        console.log("victor");
        setNextStep(step + 1);
        activeIndex++;
        updateActiveButton(buttons, activeIndex);
        initializeSteps(activeIndex);
        addOnSummary.innerHTML = "";
      } else {
        getAddons(buttons);
      }
      let priceSummary = 0;
      nextBtnDesktop.style.backgroundColor = "#483EFF";
      nextBtnDesktop.classList.add("hover:[#928CFF]");
      nextBtnDesktop.textContent = "Confirm";
      nextBtnMobile.textContent = "Confirm";
      nextBtnMobile.style.backgroundColor = "#483EFF";
      nextBtnMobile.classList.add("hover:[#928CFF]");
      planText.textContent = formatPlanText(myPlan);
      planPrice.textContent =
        "$" + myPlan.includes("yearly")
          ? matchPlan(myPlan) + "/yr"
          : matchPlan(myPlan) + "/mo";
      myAddOns.forEach((item) => {
        const li = document.createElement("li");
        li.className = "flex justify-between";
        priceSummary += formatPrice(myPlan, item);
        const price =
          "$" + myPlan.includes("yearly")
            ? formatPrice(myPlan, item) + "/yr"
            : formatPrice(myPlan, item) + "/mo";
        li.innerHTML = `
           <span class="text-sm text-[#9699AA] capitalize">${item}</span><span class="text-[#022959] text-sm font-light">+${price}</span>
           `;
        addOnSummary.appendChild(li);
      });
      const totalCost = priceSummary + matchPlan(myPlan);
      total.textContent =
        "$" + myPlan.includes("yearly")
          ? totalCost.toString() + "/yr"
          : totalCost.toString() + "/mo";
      confirmationPage.classList.add("hidden");
    } else if (step === 4) {
      hasConfirmed = true;
      if (hasConfirmed) {
        summaryPage.classList.add("hidden");
        confirmationPage.classList.remove("hidden");
        prevBtnDesktop.classList.add("hidden");
        prevBtnMobile.classList.add("hidden");
        nextBtnDesktop.classList.add("hidden");
        nextBtnMobile.classList.add("hidden");
        nextBtnMobile.parentElement?.classList.add("hidden");
      }
    }
  });

  const updateActiveButton = (buttons: HTMLButtonElement[], value: number) => {
    buttons.forEach((button) => {
      if (Number(button.innerHTML) === value) {
        if (button.classList.contains("text-white")) {
          button.classList.remove("text-white");
          button.classList.remove("border");
          button.classList.remove("border-white");
        }
        button.classList.add("bg-[#BEE2FD]", "text-[#022959]");
      } else {
        if (button.classList.contains("bg-[#BEE2FD]")) {
          button.classList.remove("bg-[#BEE2FD]");
          button.classList.remove("text-[#022959]");
          button.classList.add("border", "border-white", "text-white");
        }
      }
    });
  };

  const initializeSteps = (step: number) => {
    formSteps.forEach((section) => {
      const field = section.dataset.step;
      if (Number(field) === step) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  };
  name.addEventListener("input", handleNameInput);
  email.addEventListener("input", handleEmailInput);
  phoneNumber.addEventListener("input", handlePhoneInput);

  prevBtnDesktop.addEventListener("click", (event) => {
    event.preventDefault();
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(".steps-buttons")
    );
    activeIndex--;
    step--;
    updateActiveButton(buttons, activeIndex);
    if (activeIndex === 2 && myPlan) {
      planError.textContent = "";
      planError.removeAttribute("class");
    }
    if (activeIndex === 3 && myAddOns.length !== 0) {
      addOnsError.textContent = "";
      addOnsError.removeAttribute("class");
      if (width < 768) {
        nextBtnMobile.classList.remove("hidden");
      } else {
        nextBtnDesktop.classList.remove("hidden");
      }
    }
    initializeSteps(activeIndex);
  });
  prevBtnMobile.addEventListener("click", (event) => {
    event.preventDefault();
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(".steps-buttons")
    );
    activeIndex--;
    step--;
    updateActiveButton(buttons, activeIndex);
    if (activeIndex === 2 && myPlan) {
      planError.textContent = "";
      planError.removeAttribute("class");
    }
    if (activeIndex === 3 && myAddOns.length !== 0) {
      addOnsError.textContent = "";
      addOnsError.removeAttribute("class");
      confirmBtnDesktop.classList.add("hidden");
      confirmBtnMobile.classList.add("hidden");
      if (width < 768) {
        nextBtnMobile.classList.remove("hidden");
      } else {
        nextBtnDesktop.classList.remove("hidden");
      }
    }

    initializeSteps(activeIndex);
  });

  setNextStep(1);
}
