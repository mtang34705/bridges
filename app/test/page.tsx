'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { testsRepository, TestQuestion } from './testsRepository';

export default function AdvancedNumericalAssessment() {
    // Test Selection State
    const [activeTestKey, setActiveTestKey] = useState<string>('test1');
    const questions = useMemo<TestQuestion[]>(
        () => testsRepository[activeTestKey] || [],
        [activeTestKey]
    );

    // Core Evaluation States
    const [timeLeft, setTimeLeft] = useState<number>(600); // 5 minutes per test
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [timeExpired, setTimeExpired] = useState<boolean>(false);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [score, setScore] = useState<number>(0);

    // Clean wipe states when moving to another test menu path
    const handleTestChange = (testKey: string) => {
        setActiveTestKey(testKey);
        setAnswers({});
        setIsSubmitted(false);
        setTimeExpired(false);
        setTimeLeft(300);
        setScore(0);
    };

    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleOptionSelect = (qId: string, value: string) => {
        if (isSubmitted) return;
        setAnswers((prev) => ({ ...prev, [qId]: value }));
    };

    const triggerSubmission = useCallback((expired = false) => {
        setIsSubmitted(true);
        if (expired) setTimeExpired(true);
        let finalScore = 0;
        questions.forEach((q) => {
            if (answers[q.id] === q.correctAnswer) finalScore++;
        });
        setScore(finalScore);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [answers, questions]);

    // Track timer sequence
    useEffect(() => {
        if (isSubmitted || timeLeft <= 0) return;

        const countdownEngine = setInterval(() => {
            if (timeLeft <= 1) {
                setTimeLeft(0);
                triggerSubmission(true);
                return;
            }
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(countdownEngine);
    }, [timeLeft, isSubmitted, triggerSubmission]);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans flex flex-col md:flex-row">

            {/* 1. Left Navigation Menu Sidebar */}
            <aside className="w-full md:w-64 bg-slate-900 text-white shrink-0 p-6 border-b md:border-b-0 md:border-r border-slate-700">
                <div className="mb-6">
                    <h2 className="text-xl font-black tracking-tight text-white mb-1">
                        QuantStudio™
                    </h2>
                    <p className="text-xs text-slate-400 font-medium">
                        Advanced Reasoning Repository
                    </p>
                </div>

                <nav className="space-y-1">
                    {Object.keys(testsRepository).map((key, index) => {
                        const isActive = activeTestKey === key;
                        return (
                            <button
                                key={key}
                                type="button"
                                onClick={() => handleTestChange(key)}
                                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-between ${isActive
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                    }`}
                            >
                                <span>Modules Pack {index + 1}</span>
                                <span className={`text-xs px-2 py-0.5 rounded font-mono ${isActive ? 'bg-blue-700 text-blue-100' : 'bg-slate-800 text-slate-400'}`}>
                                    {testsRepository[key].length} Qs
                                </span>
                            </button>
                        );
                    })}
                </nav>
            </aside>

            {/* 2. Main Content Canvas */}
            <main className="flex-1 p-4 md:p-8 relative max-w-4xl mx-auto w-full">

                {/* Floating Timer element */}
                {!isSubmitted && (
                    <div className={`fixed bottom-4 right-4 md:bottom-auto md:top-4 md:right-8 z-50 flex items-center gap-2 px-5 py-3 rounded-xl shadow-xl font-mono text-lg font-bold border transition-all ${timeLeft < 60 ? 'bg-rose-600 text-white border-rose-700 animate-pulse' : 'bg-slate-900 text-white border-slate-800'
                        }`}>
                        <span>Timer:</span>
                        <span>{formatTime(timeLeft)}</span>
                    </div>
                )}

                {/* Dynamic Header */}
                <header className="mb-8">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 border border-blue-100 px-3 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
                        Active Layer: Modules Pack {Object.keys(testsRepository).indexOf(activeTestKey) + 1}
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-2">
                        Numerical Evaluation Matrix
                    </h1>
                    <p className="text-slate-600 max-w-2xl text-sm md:text-base">
                        This module benchmarks microfinance tracking, corporate structure valuation metrics, and yield calculus spreads.
                    </p>
                </header>

                {/* Complete Performance Card Banner */}
                {isSubmitted && (
                    <div className={`p-6 rounded-2xl border-2 mb-8 shadow-sm ${timeExpired ? 'bg-amber-50 border-amber-200 text-amber-900' : 'bg-blue-50 border-blue-200 text-blue-900'
                        }`}>
                        <h2 className="text-2xl font-bold mb-1">
                            {timeExpired ? '⏳ Allocation Expired!' : '🏁 Pack Completed'}
                        </h2>
                        <p className="text-lg">
                            Accuracy Yield: <span className="font-extrabold text-3xl">{score}</span> / {questions.length}
                            {' '}({Math.round((score / questions.length) * 100)}%)
                        </p>
                    </div>
                )}

                {/* Render Questions Engine dynamically */}
                <div className="space-y-6">
                    {questions.map((q, idx) => {
                        const userChoice = answers[q.id];
                        const isCorrect = userChoice === q.correctAnswer;

                        const qBoxStyle = !isSubmitted
                            ? 'bg-white border-slate-200'
                            : isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900';

                        return (
                            <div key={q.id} className={`p-6 rounded-2xl border-2 shadow-sm transition-all ${qBoxStyle}`}>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                                        Question {idx + 1} • {q.topic}
                                    </span>
                                </div>

                                <p className="text-base md:text-lg font-semibold mb-4 text-slate-900 leading-relaxed">
                                    {q.text}
                                </p>

                                {/* Option Nodes Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {q.options.map((opt) => {
                                        let optStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700';

                                        if (!isSubmitted && userChoice === opt.val) {
                                            optStyle = 'bg-blue-50 border-blue-300 text-blue-900 font-medium ring-2 ring-blue-100';
                                        } else if (isSubmitted) {
                                            if (opt.val === q.correctAnswer) {
                                                optStyle = 'bg-emerald-200 border-emerald-400 text-emerald-900 font-bold';
                                            } else if (userChoice === opt.val) {
                                                optStyle = 'bg-rose-200 border-rose-400 text-rose-900 line-through opacity-80';
                                            } else {
                                                optStyle = 'bg-slate-100 border-slate-200 opacity-40 text-slate-400';
                                            }
                                        }

                                        return (
                                            <button
                                                key={opt.val}
                                                type="button"
                                                disabled={isSubmitted}
                                                onClick={() => handleOptionSelect(q.id, opt.val)}
                                                className={`flex items-center gap-3 p-3.5 rounded-xl border text-left text-sm transition-all ${optStyle}`}
                                            >
                                                <span className="flex items-center justify-center w-6 h-6 rounded-full border border-current text-xs font-bold shrink-0">
                                                    {opt.val}
                                                </span>
                                                <span>{opt.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Solutions Step Engine Output */}
                                {isSubmitted && (
                                    <div className="mt-4 p-4 rounded-xl bg-white/70 border border-current/10 text-xs md:text-sm">
                                        <strong className="block mb-1 text-slate-900 font-bold">Mathematical Formulation:</strong>
                                        <p className="opacity-95 leading-relaxed">{q.explanation}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Form Actions Footprint */}
                    {!isSubmitted ? (
                        <button
                            type="button"
                            onClick={() => triggerSubmission(false)}
                            className="w-full mt-4 py-4 px-6 rounded-xl bg-blue-600 text-white text-base md:text-lg font-bold shadow-md hover:bg-blue-700 active:scale-[0.99] transition-all focus:outline-none"
                        >
                            Lock Answers & Evaluate
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => handleTestChange(activeTestKey)}
                            className="w-full mt-4 py-4 px-6 rounded-xl bg-slate-900 text-white text-base md:text-lg font-bold shadow-md hover:bg-slate-800 active:scale-[0.99] transition-all focus:outline-none"
                        >
                            Reset Current Module Run
                        </button>
                    )}
                </div>
            </main>
        </div>)
}