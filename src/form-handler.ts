export let step = 1;
export let activeIndex = 1;
type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  plan: {
    name: string;
    price: number;
  };
  addOns: [{ name: string; price: number }];
};

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
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
  const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const formSteps = document.querySelectorAll<HTMLElement>(".form-steps")!;
  const prevBtn = document.querySelector<HTMLButtonElement>("#prevBtn")!;
  let myPlan = "";
  const isValidEmail = () => {
    console.log("valid email");
    const validity = email.value.length !== 0 && emailRegExp.test(email.value);
    return validity;
  };

  const isValidPhoneNumber = () => {
    console.log("valid phone");
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
    console.log("triggered");
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

  const initializeValidation = () => {
    const emailInput = isValidEmail();
    const phoneInput = isValidPhoneNumber();
    const nameInput = name.value.length !== 0;
    setIsValidInput(emailInput, email);
    setIsValidInput(phoneInput, phoneNumber);
    setIsValidInput(nameInput, name);
  };

  const handleEmailInput = () => {
    const emailInput = isValidEmail();
    setIsValidInput(emailInput, emailError);
    updateError(emailInput, emailError, email, "Please enter a valid email");
  };

  const handlePhoneInput = () => {
    const phoneInput = isValidPhoneNumber();
    setIsValidInput(phoneInput, phoneError);
    updateError(
      phoneInput,
      phoneError,
      phoneNumber,
      "Please enter a valid phone number"
    );
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
              <button class="h-8 w-8 rounded-full steps-buttons">${step}</button><article class="flex flex-col uppercase">
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

  element.addEventListener("click", (e) => {
    console.log({ activeIndex, step });
    e.preventDefault();
    const emailInput = isValidEmail();
    const phoneInput = isValidPhoneNumber();
    const nameInput = name.value.length !== 0;
    console.log({ emailInput, phoneInput, nameInput });
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(".steps-buttons")
    );

    if (step === 1) {
      if (!emailInput || !phoneInput || !nameInput) {
        console.log("here");
        updateError(nameInput, nameError, name, "This field is required");
        updateError(emailInput, emailError, email, "This field is required");
        updateError(
          phoneInput,
          phoneError,
          phoneNumber,
          "This field is required"
        );
        return;
      }

      setNextStep(step + 1);
      activeIndex++;
      updateActiveButton(buttons, activeIndex);
      initializeSteps(activeIndex);
      prevBtn.classList.remove("hidden");
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
            console.log(plan.value, step, myPlan);
            setNextStep(step + 1);
            activeIndex++;
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
    } else if (step === 4) {
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
  prevBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(".steps-buttons")
    );
    activeIndex--;
    step--;
    updateActiveButton(buttons, activeIndex);
    initializeSteps(activeIndex);
  });
  //   initializeSteps(1);
  //   initializeValidation();
  setNextStep(1);
}
