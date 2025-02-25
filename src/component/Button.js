// src/components/Button.js
'use client';  // 👈 這行是關鍵

import React from 'react';

export default function Button({ text, onClick }) {
    return (
        <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={onClick}
        >
            {text}
        </button>
    );
}
