let isYearly = false;

export function handleSelect(element: HTMLButtonElement) {
  const dot = document.querySelector<HTMLSpanElement>(".dot")!;
  const yearlyPlan = document.querySelector<HTMLDivElement>("#yearly-plan")!;
  const monthlyPlan = document.querySelector<HTMLDivElement>("#monthly-plan")!;
  const yearText = document.querySelector<HTMLSpanElement>("#yearly-text")!;
  const monthText = document.querySelector<HTMLSpanElement>("#monthly-text")!;

  //   toggle the textContent of the span at step -3 depending on the plan (monthly/yearly)
  const setSelectPlan = () => {
    isYearly = !isYearly;

    if (isYearly) {
      dot.classList.add("translate-x-5");
      yearText.style.color = "#022959";
      monthText.style.color = "#9699AA";
      yearlyPlan.classList.remove("hidden");
      monthlyPlan.classList.add("hidden");
    } else {
      dot.classList.remove("translate-x-5");
      monthText.style.color = "#022959";
      yearText.style.color = "#9699AA";
      yearlyPlan.classList.add("hidden");
      monthlyPlan.classList.remove("hidden");
    }
  };
  element.addEventListener("click", (event) => {
    event.preventDefault();
    setSelectPlan();
  });
  setSelectPlan();
}
