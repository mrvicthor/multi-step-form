export let step = 1;
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
  { id: 1, step: 1, description: "your info" },
  { id: 2, step: 2, description: "select plan" },
  { id: 3, step: 3, description: "add-ons" },
  { id: 4, step: 4, description: "summary" },
];

export function setStep(element: HTMLButtonElement) {
  const name = document.querySelector<HTMLInputElement>("#name")!;
  const email = document.querySelector<HTMLInputElement>("#email")!;
  const phoneNumber = document.querySelector<HTMLInputElement>("#phoneNumber")!;
  const emailError = document.querySelector<HTMLSpanElement>("#email-error")!;
  const nameError = document.querySelector<HTMLSpanElement>("#name-error")!;
  const phoneError = document.querySelector<HTMLSpanElement>("#phone-error")!;
  const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
  const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

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
    console.log(step, steps.children.length);
    if (step === 1) {
      if (!steps) return;
      if (steps.children.length === 0) {
        for (let i = 0; i < list.length; i += 1) {
          const step = list[i].step;
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
          Number(button.innerHTML) === step
            ? button.classList.add("bg-[#BEE2FD]", "text-[#022959]")
            : button.classList.add("border", "border-white", "text-white")
        );
      }
    }

    step = count;
  };

  element.addEventListener("click", (e) => {
    e.preventDefault();
    const emailInput = isValidEmail();
    const phoneInput = isValidPhoneNumber();
    const nameInput = name.value.length !== 0;
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(".steps-buttons")
    );
    if (!emailInput || !phoneInput || !nameInput) {
      // updateError(nameInput, nameError, name, "This field is required");
      return;
    } else {
      setNextStep(step + 1);
      buttons.forEach((button) => {
        if (Number(button.innerHTML) === step) {
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
      console.log("clicked", step, buttons);
    }
  });
  name.addEventListener("input", handleNameInput);
  email.addEventListener("input", handleEmailInput);
  phoneNumber.addEventListener("input", handlePhoneInput);
  //   initializeValidation();
  setNextStep(1);
}
