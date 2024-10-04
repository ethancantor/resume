'use client'
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react"

export default function ClearHistoryButton() {

    const [clicks, setClicks] = useState(false);
    const [clearing, setClearing] = useState(false);


    const handleClick = () => {
        if(!clicks) setClicks(true);
        else {
            setClearing(true);
            localStorage.clear();
            setTimeout(() => {
                window.location.reload();
                setClearing(false);
                setClicks(false);
            }, 500);
        }
    }

    const text = clearing ? 'Clearing...' : clicks ? `Are you sure?` : 'Clear History';
    const bg = clearing ? 'bg-zinc-500' : clicks ? 'bg-yellow-600' : 'bg-primary';

    return (
        <button className={`${bg} text-white rounded-lg px-4 py-2 text-xl font-bold transition-colors duration-200`} onClick={handleClick} disabled={clearing}>{text}</button>
    )
};
