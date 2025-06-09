import { Check } from "lucide-react";
import { TbCircleArrowRightFilled } from "react-icons/tb";

interface PlanFeature {
  text: string;
}

interface PlanButtonProps {
  text: string;
  onClick?: () => void;
}

interface PricingCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  priceUnit?: string;
  mostRequested?: boolean;
  features: PlanFeature[];
  button: PlanButtonProps;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
  startingFrom?: string;
  disclaimer?: string;
  isPerMessage?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  id,
  name,
  description,
  price,
  priceUnit = "/ mês",
  mostRequested,
  features,
  button,
  isSelected = false,
  onSelect,
  startingFrom,
  disclaimer,
}) => {
  const handleCardClick = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest("button") && onSelect) {
      onSelect(id);
    }
  };

  const CustomCheckbox = () => (
    <div
      className={`w-5 h-5 rounded-sm border flex items-center justify-center transition-colors ${
        isSelected
          ? "bg-[#007AFF] border-[#007AFF]"
          : "border-gray-300 bg-white"
      }`}
    >
      {isSelected && <Check className="w-4 h-4 text-white" />}
    </div>
  );

  return (
    <div
      className={`relative bg-white rounded-xl border border-[#EBECEF] shadow-sm text-[#090C10] hover:shadow-md hover:border-gray-200 overflow-hidden cursor-pointer transition-all`}
      onClick={handleCardClick}
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect && onSelect(id);
        }
      }}
    >
      <div className="relative py-8 px-6 h-full flex flex-col">
        {!!mostRequested && (
          <div className="absolute top-0 right-0 py-1 px-4 opacity-95 bg-blue-600 rounded-tr-full rounded-bl-full rounded-br-full">
            <div className="text-white text-sm font-semibold">
              Mais pedido entre farmácias
            </div>
          </div>
        )}

        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <div className="flex items-center justify-center">
              <CustomCheckbox />
            </div>
            <h3 className="text-lg font-medium">{name}</h3>
          </div>

          <p className="text-sm text-[#3C4049] mt-1">{description}</p>
        </div>

        <div className="mt-5 mb-auto">
          <p className="text-sm mb-3">Incluso:</p>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature.text} className="flex items-start">
                <Check className="w-4 h-4 text-[#42A4E1] mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-sm">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          {startingFrom && <p className="text-xs text-black">{startingFrom}</p>}
          {!startingFrom && <div className="h-4" />}

          {!!price && (
            <div className="flex items-end">
              <span className="text-[40px] font-medium leading-none">
                R$ {price.toFixed(2).replace(".", ",")}
              </span>
              <span className="text-base text-[#9EA2AD] ml-1">{priceUnit}</span>
            </div>
          )}
          {!price && <div className="h-10" />}

          {disclaimer && (
            <p className="text-xs text-gray-500 mt-2">{disclaimer}</p>
          )}
        </div>

        <div className="mt-6">
          <button
            className="w-full p-4 rounded-full flex items-center justify-center bg-[#007AFF] text-white text-base font-medium hover:bg-opacity-90 transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              button.onClick && button.onClick();
            }}
          >
            {button.text}
            <TbCircleArrowRightFilled className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
