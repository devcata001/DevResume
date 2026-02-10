/**
 * Storage - LocalStorage management for offline persistence
 * Handles saving, loading, and exporting resume data
 */

import { getState, setState } from './state.js';

const STORAGE_KEY = 'devresume_data';
const AUTOSAVE_DELAY = 1000; // 1 second debounce

let autosaveTimer = null;

/**
 * Save current state to localStorage
 */
export const saveToLocalStorage = () => {
    try {
        const state = getState();
        const dataToSave = JSON.stringify(state);
        localStorage.setItem(STORAGE_KEY, dataToSave);
        return true;
    } catch (error) {
        console.error('Failed to save to localStorage:', error);
        return false;
    }
};

/**
 * Load state from localStorage
 */
export const loadFromLocalStorage = () => {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            const state = JSON.parse(savedData);
            setState(state);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Failed to load from localStorage:', error);
        return false;
    }
};

/**
 * Clear localStorage
 */
export const clearLocalStorage = () => {
    try {
        localStorage.removeItem(STORAGE_KEY);
        return true;
    } catch (error) {
        console.error('Failed to clear localStorage:', error);
        return false;
    }
};

/**
 * Autosave with debounce
 * Prevents excessive localStorage writes
 */
export const autosave = () => {
    if (autosaveTimer) {
        clearTimeout(autosaveTimer);
    }

    autosaveTimer = setTimeout(() => {
        saveToLocalStorage();
        console.log('Autosaved');
    }, AUTOSAVE_DELAY);
};

/**
 * Export state as JSON file
 */
export const exportToJSON = () => {
    const state = getState();
    const dataStr = JSON.stringify(state, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    // Create download link
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `resume_${state.personal.fullName || 'export'}_${timestamp}.json`
        .replace(/[^a-z0-9_.-]/gi, '_')
        .toLowerCase();

    link.download = filename;
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
};

/**
 * Import state from JSON file
 */
export const importFromJSON = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject(new Error('No file provided'));
            return;
        }

        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const importedData = JSON.parse(event.target.result);

                // Validate imported data structure
                if (!importedData.personal || !importedData.meta) {
                    throw new Error('Invalid resume data format');
                }

                setState(importedData);
                saveToLocalStorage();
                resolve(importedData);
            } catch (error) {
                reject(new Error('Failed to parse JSON file: ' + error.message));
            }
        };

        reader.onerror = () => {
            reject(new Error('Failed to read file'));
        };

        reader.readAsText(file);
    });
};

/**
 * Check if localStorage is available
 */
export const isLocalStorageAvailable = () => {
    try {
        const test = '__localStorage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (error) {
        return false;
    }
};
