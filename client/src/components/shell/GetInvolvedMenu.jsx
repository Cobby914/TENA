import DropdownButton from "../ui/DropdownButton";

const VOLUNTEER_FORM = "https://forms.gle/xofKMZtegNAgPvgWA";

export default function GetInvolvedMenu({ onClose }) {
  return (
    <DropdownButton
      label="Get Involved"
      mainPath="/getInvolved"
      onClose={onClose}
      items={[
        { to: "/getInvolved", label: "Donations" },
        { to: "/partners", label: "Partnership" },
        { href: VOLUNTEER_FORM, label: "Volunteering" },
      ]}
    />
  );
}