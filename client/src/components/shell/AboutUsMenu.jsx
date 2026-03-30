import DropdownButton from "../ui/DropdownButton";

export default function AboutUsMenu() {
  return (
    <DropdownButton
      label="About Us"
      mainPath="/aboutUs"
      items={[
        { to: "/team", label: "Our Team" },
        { to: "/board", label: "Our Board" },
        { to: "/partners", label: "Our Partners" },
      ]}
    />
  );
}
