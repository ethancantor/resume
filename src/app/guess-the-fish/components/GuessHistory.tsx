'use client'
import React, { createContext, useEffect, useMemo, useState } from "react"
import GuessHistoryRow from "./GuessHistoryRow"
import Link from "next/link";

export default function GuessHistory() {

    const [history, setHistory] = useState<Record<string, string>>({});
    
    useEffect(() => {
        const saved = {... localStorage}
        const days = Object.keys(saved).filter(key => key.includes('fishtory_'));
        const history = days.reduce((prev: Record<string, string>, key: string) => {
            prev[key] = saved[key];
            return prev
        }, {});
        
        setHistory(history);
    }, []);

    const days = useMemo(() => {
        return Object.keys(history).sort((a, b) => new Date(b.replace('fishtory_', '')).getTime() - new Date(a.replace('fishtory_', '')).getTime());
    }, [history]);

    const lastDay = useMemo(() => {
        if(days[days.length - 1]) {
            const historyDay = new Date(days[days.length - 1].replace('fishtory_', ''));
            historyDay.setDate(historyDay.getDate() - 1);
            return historyDay.toLocaleDateString().replaceAll('/', '.');
        }

        const today = new Date(Date.now());
        return today.toLocaleDateString().replaceAll('/', '.');
    }, [days]);

    return (
        <div className="flex flex-col items-center gap-1 mb-10">
            <div className="text-5xl">Guess History:</div>
            { 
                days.map((key) => {
                    return <GuessHistoryRow key={key} date={key} value={history[key]} />
                })
            }
            <Link href={`/guess-the-fish/daily/${lastDay}`} className="bg-primary text-white rounded-lg px-4 py-2 text-xl font-bold">Previous Day</Link>
        </div>
    )
};
