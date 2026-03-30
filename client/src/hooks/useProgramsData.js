import { useEffect, useMemo, useState } from "react";
import { fetchPrograms } from "../api/programsAPI";

export function useProgramData (limit) {
    const [isLoading, setIsLoading] = useState(true);
    const [rawPrograms, setRawPrograms] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            setIsLoading(true);
            setErrorMsg("");
            try {
                const programs = await fetchPrograms(limit, controller.signal);
                setRawPrograms(programs);
            } catch (err) {
                if (err?.name == "AbortError") return;
                setErrorMsg(err instanceof Error ? err.message : "Unable to load admin data");
            } finally {
                setIsLoading(false);
            }
        })();
        return () => controller.abort();
    }, [limit]);

    const programs = useMemo(() => {
        return rawPrograms   // Can map each program to imageSource here later?
    }, [rawPrograms]);

    return { programs, errorMsg, isLoading };
};
