let isYearly = false;

export function handleSelect(element: HTMLButtonElement) {
  const dot = document.querySelector<HTMLSpanElement>(".dot")!;
  const yearlyPlan = document.querySelector<HTMLDivElement>("#yearly-plan")!;
  const monthlyPlan = document.querySelector<HTMLDivElement>("#monthly-plan")!;
  const setSelectPlan = () => {
    isYearly = !isYearly;

    if (isYearly) {
      dot.classList.add("translate-x-5");
      yearlyPlan.classList.remove("hidden");
      monthlyPlan.classList.add("hidden");
    } else {
      dot.classList.remove("translate-x-5");
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
