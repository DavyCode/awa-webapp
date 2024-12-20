import BenefitsComponent from "./BenefitsCard";
import DetailsCard from "./DetailsCard";
import TermsCard from "./TermsCard";

interface IProps {
  currentTab: string;
}
const SwitchFormEngine: React.FC<IProps> = ({ currentTab }) => {
  const currentDisplay = () => {
    switch (currentTab) {
      case "Benefits":
        return <BenefitsComponent />;
      case "Details":
        return <DetailsCard />;
      case "Terms":
        return <TermsCard />;
      default:
        <p>Valubah Offers</p>;
    }
  };
  return <div className="mt-[23px]">{currentDisplay()}</div>;
};

export default SwitchFormEngine;
