// src/app/about/page.js
'use client';  // 👈 標記整個頁面為 Client Component

import Button from "@/component/Button";

export default function AboutPage() {
    function test() {
        console.log('aaaaaa');
    }

    return (
        <div className="p-10 text-center">
            <h1 className="text-3xl font-bold title-bg">About Shong</h1>
            <p className="mt-4 text-lg">This is the about page built with Next.js!</p>
            <Button text="test" onClick={test} />
        </div>
    );
}
