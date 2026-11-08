"use client"
import { useSyncExternalStore } from 'react'
import styles from './styles.module.css'

const LAST_TAKEN_CHANGE_EVENT = 'lastTakenChanged'

const isBeforeToday = (value: string) => {
    const takenAt = new Date(value)
    if (Number.isNaN(takenAt.getTime())) {
        return false
    }

    const startOfToday = new Date()
    startOfToday.setHours(0, 0, 0, 0)
    return takenAt < startOfToday
}

const clearIfBeforeToday = () => {
    const lastTaken = localStorage.getItem('lastTaken')
    if (lastTaken !== null && isBeforeToday(lastTaken)) {
        localStorage.removeItem('lastTaken')
    }
}

const subscribeToLastTaken = (onStoreChange: () => void) => {
    const handleChange = () => {
        clearIfBeforeToday()
        onStoreChange()
    }

    window.addEventListener('storage', handleChange)
    window.addEventListener(LAST_TAKEN_CHANGE_EVENT, handleChange)
    clearIfBeforeToday()

    return () => {
        window.removeEventListener('storage', handleChange)
        window.removeEventListener(LAST_TAKEN_CHANGE_EVENT, handleChange)
    }
}

const getLastTaken = () => {
    const lastTaken = localStorage.getItem('lastTaken')
    return lastTaken !== null && isBeforeToday(lastTaken) ? null : lastTaken
}
const getServerLastTaken = () => undefined

const PillReminder = () => {
    const lastTaken = useSyncExternalStore(
        subscribeToLastTaken,
        getLastTaken,
        getServerLastTaken
    )

    const markAsTaken = () => {
        const takenAt = new Date().toISOString()
        localStorage.setItem('lastTaken', takenAt)
        window.dispatchEvent(new Event(LAST_TAKEN_CHANGE_EVENT))
    }

    return (
        <main className="flex flex-1 items-center justify-center">
            {lastTaken === undefined ? (
                <p>Loading...</p>
            ) : lastTaken === null ? (
                <button className={ styles.takenBtn} onClick={markAsTaken}>Mark as taken</button>
            ) : (
                <p>Last taken: {lastTaken}</p>
            )}
        </main>
    )
}

export default PillReminder