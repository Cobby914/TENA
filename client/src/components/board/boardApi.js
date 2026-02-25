const RAW_API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const API_BASE = RAW_API_BASE.replace(/\/+$/, "");

export async function getBoard(sig){
    const end = [`${API_BASE}/api/team_members` , `${API_BASE}/api/team-members`];

    let error;

    for (const endpoint of end){
        try {
            const res = await fetch(endpoint, { sig });
            if (!res.ok) throw new Error(`Request failed (${res.status})`);

            const data = await res.json();
            if (!Array.isArray(data)) throw new Error("Expected an array response");
            const boardMembers = [];
           
            for (const member of data){
                if (member.role && /\bboard\b/i.test(member.role.toLowerCase())) {
                    boardMembers.push(member);
                }
            }
            
            return boardMembers;
         }
         catch (err) {
            if (err?.name === "AbortError") throw err;
            error = err;
         } 
    }
    throw error ?? new Error("Failed to load board.");

}
    