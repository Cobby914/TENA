import DropdownButton from "../ui/DropdownButton";

const PROGRAM_ITEMS = [
  { to: "/programs/carenavigation", label: "Care Navigation" },
  { to: "/programs/communityhealthfairs", label: "Community Health Fairs" },
  {
    to: "/programs/prehealthworkforcereadiness",
    label: "Pre-Health Workforce",
  },
  { to: "/programs/fitclub", label: "Fitclub" },
];

export default function ProgramsMenu() {
  return (
    <DropdownButton
      label="Programs"
      mainPath="/programs"
      items={PROGRAM_ITEMS}
    />
  );
}
