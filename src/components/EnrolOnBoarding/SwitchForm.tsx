import PersonalForm from "./PersonalForm";

interface IProps {
    currentTab: string
}
const SwitchFormEngine:React.FC<IProps> = ({ currentTab }) => {
    const currentDisplay = () => {
        switch (currentTab) {
          case "Personal data":
            return <PersonalForm />;
          case "Employment Details":
            return <p>Employment Details</p>;
          case "Next of Kin":
            return <p>Next of Kin</p>;
          case "Contributors Certificate":
            return <p>Contributors Certificate</p>;
          case "Checklist of required documents":
            return <p>Checklist of required documents</p>;
          default:
            <p>personal data</p>;
        }
    }
    return (
        <div className="mt-[41px]">
            {currentDisplay()}
        </div>
    )
}

export default SwitchFormEngine
