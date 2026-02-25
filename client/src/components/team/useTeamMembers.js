import { useEffect, useMemo, useState } from "react";
import { fetchTeamMembers } from "./teamMembersApi";
import { toCardMember } from "./teamMemberMapper";

export function useTeamMembers() {
  const [rawMembers, setRawMembers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const rows = await fetchTeamMembers(controller.signal);
        //Store Fetched Rows
        setRawMembers(rows);
      } catch (err) {
        if (err?.name === "AbortError") return;
        setErrorMsg(
          err instanceof Error ? err.message : "Unable to load team members",
        );
      }
    })();

    return () => controller.abort();
  }, []);

  //Derive members and map through 'toCardMember', allow for recomputations when 'rawMembers' changes
  const members = useMemo(() => rawMembers.map(toCardMember), [rawMembers]);

  return { members, errorMsg };
}
