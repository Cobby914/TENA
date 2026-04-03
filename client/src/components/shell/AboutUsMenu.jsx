import DropdownButton from "../ui/DropdownButton";

export default function AboutUsMenu({ onClose }) {
  return (
    <DropdownButton
      label="About Us"
      mainPath="/aboutUs"
      onClose={onClose}
      items={[
        { to: "/team", label: "Our Team" },
        { to: "/board", label: "Our Board" },
        { to: "/partners", label: "Our Partners" },
      ]}
    />
  );
}