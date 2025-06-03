export const matchPlan = (value: string) => {
  const plan = value.includes("yearly")
    ? value.replace("yearly", "").trim()
    : value.replace("monthly", "").trim();

  const yearlyPlanRecord: Record<string, number> = {
    Arcade: 90,
    Advanced: 120,
    Pro: 150,
  };

  const monthlyPlanRecord: Record<string, number> = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  };

  return value.includes("yearly")
    ? yearlyPlanRecord[plan]
    : monthlyPlanRecord[plan];
};

export const formatPlanText = (value: string) => {
  const plan = value.includes("yearly")
    ? value.replace("yearly", "") + " " + "(" + "Yearly" + ")"
    : value.replace("monthly", "") + " " + "(" + "Monthly" + ")";
  return plan;
};

export const formatPrice = (value: string, service: string) => {
  const monthlyPriceRecord: Record<string, number> = {
    "Online service": 1,
    "Larger storage": 2,
    "Customizable profile": 2,
  };

  const yearlyPriceRecord: Record<string, number> = {
    "Online service": 10,
    "Larger storage": 20,
    "Customizable profile": 20,
  };
  return value.includes("yearly")
    ? yearlyPriceRecord[service]
    : monthlyPriceRecord[service];
};
