import { AddOn } from "../../AddOnSelectionGroup/AddOnSelectionGroup/AddOnSelectionGroup";
import { Button } from "../../Button/Button";
import { UserData } from "../PersonalInformationStep/PersonalInformationStep";
import { YourPlan } from "../SelectYourPlanStep/SelectYourPlanStep";
import { StepCard } from "../StepCard/StepCard";

export interface Selections {
  addons?: AddOn[];
  yourPlan?: YourPlan;
  userData?: UserData;
}

interface FinishingStepProps {
  onBack: () => void;
  onConfirm: () => void;
  onChangePlan: () => void;
  selections: Selections;
}

export const FinishingUpStep = (props: FinishingStepProps) => {
  const { onBack, onConfirm, onChangePlan, selections } = props;
  const { yourPlan, addons } = selections;
  const { plan, interval } = yourPlan as YourPlan;

  const planPrice =
    interval === "monthly" ? plan!.monthlyPrice : plan!.yearlyPrice;

  const priceIntervalPostFix = interval === "monthly" ? "/mo" : "/yr";
  const totalPrice =
    interval === "monthly"
      ? planPrice +
        addons!.reduce(
          (accumulator, addon) => accumulator + addon.monthlyPrice,
          0
        )
      : planPrice +
        addons!.reduce(
          (accumulator, addon) => accumulator + addon.yearlyPrice,
          0
        );

  return (
    <StepCard
      onNextDisabled={false}
      onNext={onConfirm}
      onBack={onBack}
      onNextButtonLabel="Confirm"
      onNextButtonVariant="secondary"
      title="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div>
        <div className="flex flex-col gap-3 rounded-lg p-4 bg-violet-50">
          <div className="flex items-center">
            <div className="flex flex-col items-start">
              <span className="capitalize font-bold text-sky-800 text-sm">
                {plan!.title} ({interval})
              </span>
              <Button onPress={onChangePlan} variant="link">
                Change
              </Button>
            </div>
            <span className="ml-auto text-sm font-bold text-sky-800">
              ${planPrice}
              {priceIntervalPostFix}
            </span>
          </div>

          <hr className="border-gray-300" />

          {addons!
            .sort((a, b) => (a.id < b.id ? 0 : 1))
            .map((addon) => (
              <div key={addon.id} className="flex items-center">
                <span className="text-gray-400 text-sm">{addon.title}</span>
                <span className="ml-auto text-sm text-gray-500 font-medium">
                  +$
                  {interval === "monthly"
                    ? addon.monthlyPrice
                    : addon.yearlyPrice}
                  {priceIntervalPostFix}
                </span>
              </div>
            ))}
        </div>

        <div className="flex items-center px-4 mt-6">
          <span className="text-gray-400 text-sm">
            Total (per {interval === "monthly" ? "month" : "year"})
          </span>
          <span className="text-violet-500 font-bold ml-auto">
            ${totalPrice}
            {priceIntervalPostFix}
          </span>
        </div>
      </div>
    </StepCard>
  );
};
