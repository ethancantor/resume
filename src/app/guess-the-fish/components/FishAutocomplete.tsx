'use client'

import { useState, useEffect, useRef } from 'react'

export default function Autocomplete({ suggestions, setGuess, guess, makeGuess }: { suggestions: string[], setGuess: React.Dispatch<React.SetStateAction<string>>, guess: string, makeGuess: () => void }) {
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [showSuggestions, setShowSuggestions] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (guess) {
            const filtered = suggestions.filter(suggestion => suggestion.toLowerCase().includes(guess.toLowerCase()));
            setFilteredSuggestions(filtered);
            setShowSuggestions(true);
            setSelectedIndex(-1);
        } else {
            setFilteredSuggestions([])
            setShowSuggestions(false)
        }
    }, [guess, suggestions])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGuess(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowDown') {
            setSelectedIndex(prev => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev));
        } else if (e.key === 'ArrowUp') {
            setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            setGuess(filteredSuggestions[selectedIndex]);
            setShowSuggestions(false);
        } else if (e.key === 'Enter'){
            makeGuess();
        }
    }

    const handleSuggestionClick = (suggestion: string) => {
        setGuess(suggestion);
        setShowSuggestions(false);
    }

    return (
        <div className="w-full max-w-md mx-auto shadow-lg">
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={guess}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Guess the fish..."
                    className="w-full bg-zinc-700 px-1 my-1 py-1 rounded-lg text-white placeholder-zinc-400 border-zinc-600 focus:border-primary focus:ring-primary"
                />
                {showSuggestions && filteredSuggestions.length > 0 && (
                    <ul className="absolute z-10 w-full mt-1 bg-zinc-700 border border-zinc-600 rounded-md shadow-lg max-h-60 overflow-auto">
                        {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={suggestion}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className={`px-4 py-2 cursor-pointer hover:bg-zinc-600 ${
                            index === selectedIndex ? 'bg-zinc-600' : ''
                            }`}
                        >
                            {suggestion}
                        </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}