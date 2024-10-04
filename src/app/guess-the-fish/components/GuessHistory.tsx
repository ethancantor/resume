'use client'
import React, { useEffect, useLayoutEffect, useState } from "react"
import GuessHistoryRow from "./GuessHistoryRow";

export default function GuessHistory() {

    const [history, setHistory] = useState<Record<string, string>>({});
    
    useEffect(() => {
        const saved = {... localStorage}
        setHistory(saved);
    }, []);

    return (
        <div className="flex flex-col items-center gap-1 mb-10">
            <div className="text-5xl">Guess History:</div>
            { 
                Object.keys(history).sort((a, b) => new Date(b).getTime() - new Date(a).getTime()).map((key) => {
                    return <GuessHistoryRow key={key} date={key} value={history[key]} />
                })
            }
        </div>
    )
};
