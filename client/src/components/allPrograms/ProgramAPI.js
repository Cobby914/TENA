const RAW_API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const API_BASE = RAW_API_BASE.replace(/\/+$/, "");

/* This retrieves all the programs from the DB*/


export async function getProgram(sig){
    const end = [`${API_BASE}/api/programs` , `${API_BASE}/api/programs`];

    let error;

    for (const endpoint of end){
        try {
            const res = await fetch(endpoint, { sig });
            if (!res.ok) throw new Error(`Request failed (${res.status})`);

            const data = await res.json();
            if (!Array.isArray(data)) throw new Error("Expected an array response");
            
            
            return data;
         }
         catch (err) {
            if (err?.name === "AbortError") throw err;
            error = err;
         } 
    }
    throw error ?? new Error("Failed to load programs.");

}
    