import React, { useEffect, useState } from "react";

const greetings = [
    "Hey",
    "Hola",
    "Привет",
    "Hello",
    "こんにちは",
    "नमस्ते",
    "Hii",
    "Hola",
    "Ciao",
];

const TypingGreeting = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    const currentWord = greetings[index];

    useEffect(() => {
        if (charIndex < currentWord.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + currentWord[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 300);

            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setIndex((prev) => (prev + 1) % greetings.length);
                setText("");
                setCharIndex(0);
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [charIndex, index, currentWord]);

    return <div className="hero-greeting">{text}</div>;
};

export default TypingGreeting;