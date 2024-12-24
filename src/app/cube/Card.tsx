'use client';
import React, { useEffect } from 'react'

export const Card = ({ name }: { name: string}) => {

    useEffect(() => {
        async function get_data(){
            const card_data = fetch('https://api.scryfall.com/cards/named?exact=' + name, { method: 'GET'})
            console.log(card_data);
        }
        get_data();
    }, [name])

    return (
        <div>
            
        </div>
    )
};

