import DropdownButton from "../ui/DropdownButton";

const VOLUNTEER_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSfHRyVM1116n02eKWHbwKME1WIrRWQbIy2S44Z-8Ap0V57hYA/viewform";

export default function GetInvolvedMenu() {
  return (
    <DropdownButton
      label="Get Involved"
      mainPath="/getInvolved"
      items={[
        { to: "/getInvolved", label: "Donations" },
        { to: "/partners", label: "Partnership" },
        { href: VOLUNTEER_FORM, label: "Volunteering" },
      ]}
    />
  );
}
