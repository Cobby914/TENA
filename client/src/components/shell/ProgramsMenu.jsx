import DropdownButton from "../ui/DropdownButton";
import { useMemo } from "react";
import { useProgramData } from "../../hooks/useProgramsData";
import { createProgramSlug } from "../../lib/programSlug";

export default function ProgramsMenu({ onClose }) {
  const { programs } = useProgramData();
  const items = useMemo(() => {
    if (!programs.length) return [{ to: "/programs", label: "All Programs" }];
    return programs.map((program) => ({
      to: `/programs/${createProgramSlug(program.title)}`,
      label: String(program.title ?? "Program"),
    }));
  }, [programs]);

  return (
    <DropdownButton
      label="Programs"
      mainPath="/programs"
      onClose={onClose}
      items={items}
    />
  );
}