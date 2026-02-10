/**
 * Main Application - DevResume
 * Coordinates all modules and initializes the application
 */

import { subscribe, getState, setState, resetState, updateMeta } from './state.js';
import { initForm, populateForm, renderSkills, renderExperience, renderEducation, renderProjects, renderCertifications } from './form.js';
import { renderPreview } from './preview.js';
import { initTemplates, applyTemplate } from './templates.js';
import { loadFromLocalStorage, clearLocalStorage, exportToJSON, importFromJSON, saveToLocalStorage } from './storage.js';
import { initPrint, setupPrintListeners, printResume } from './print.js';
import { getProfession } from './professions.js';

/**
 * Initialize application
 */
const initApp = () => {
    console.log('🚀 Initializing DevResume...');

    // Load saved data from localStorage
    const hasData = loadFromLocalStorage();
    if (hasData) {
        console.log('✅ Loaded saved resume data');
    }

    // Initialize all modules
    initForm();
    initTemplates();
    initPrint();
    setupPrintListeners();
    initProfessionSelector();
    initActionButtons();
    initMobileNav();

    // Populate form with current state
    populateForm();

    // Subscribe to state changes to update preview
    subscribe((state) => {
        renderPreview();
    });

    // Initial preview render
    renderPreview();

    console.log('✅ DevResume initialized successfully');
};

/**
 * Initialize profession selector
 */
const initProfessionSelector = () => {
    const professionSelect = document.getElementById('profession-select');

    if (professionSelect) {
        professionSelect.addEventListener('change', (e) => {
            const professionKey = e.target.value;

            if (professionKey) {
                loadProfessionPreset(professionKey);
            }
        });

        // Set initial value from state
        const state = getState();
        if (state.meta.profession) {
            professionSelect.value = state.meta.profession;
        }
    }
};

/**
 * Load profession preset
 */
const loadProfessionPreset = (professionKey) => {
    const profession = getProfession(professionKey);

    if (!profession) {
        console.error('Profession not found:', professionKey);
        return;
    }

    // Ask for confirmation if there's existing data
    const state = getState();
    const hasExistingData = state.personal.fullName ||
        state.experience.length > 0 ||
        state.education.length > 0;

    if (hasExistingData) {
        const confirmed = confirm(
            `Load ${profession.title} preset?\n\n` +
            'This will replace your current resume with sample data. ' +
            'You can customize it afterwards.\n\n' +
            'Continue?'
        );

        if (!confirmed) {
            // Reset select to current profession or empty
            const professionSelect = document.getElementById('profession-select');
            if (professionSelect) {
                professionSelect.value = state.meta.profession || '';
            }
            return;
        }
    }

    console.log(`Loading ${profession.title} preset...`);

    // Load sample data if available
    if (profession.sampleData) {
        setState({
            ...profession.sampleData,
            skills: profession.skills || [],
            meta: {
                template: profession.defaultTemplate || 'minimal',
                pageSize: 'a4',
                profession: professionKey
            }
        });
    } else {
        // Just set skills and template
        setState({
            ...state,
            skills: profession.skills || [],
            meta: {
                ...state.meta,
                template: profession.defaultTemplate || 'minimal',
                profession: professionKey
            }
        });

        // Update job title and summary placeholder
        const jobTitleInput = document.getElementById('job-title');
        const summaryInput = document.getElementById('summary');

        if (jobTitleInput && !state.personal.jobTitle) {
            jobTitleInput.placeholder = profession.title;
        }
        if (summaryInput && !state.summary) {
            summaryInput.placeholder = profession.summaryPlaceholder;
        }
    }

    // Apply template
    applyTemplate(profession.defaultTemplate || 'minimal');

    // Refresh UI
    populateForm();
    renderPreview();
    saveToLocalStorage();

    console.log(`✅ Loaded ${profession.title} preset`);
};

/**
 * Initialize action buttons
 */
const initActionButtons = () => {
    // Download Resume PDF (Prominent button)
    const downloadResumeBtn = document.getElementById('download-resume-btn');
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', () => {
            printResume();
            showNotification('Opening download dialog...');
        });
    }

    // Export PDF
    const exportPdfBtn = document.getElementById('export-pdf-btn');
    if (exportPdfBtn) {
        // Already handled in print.js
    }

    // Export JSON
    const exportJsonBtn = document.getElementById('export-json-btn');
    if (exportJsonBtn) {
        exportJsonBtn.addEventListener('click', () => {
            exportToJSON();
            showNotification('Resume exported as JSON');
        });
    }

    // Import JSON
    const importJsonBtn = document.getElementById('import-json-btn');
    const importFileInput = document.getElementById('import-file-input');

    if (importJsonBtn && importFileInput) {
        importJsonBtn.addEventListener('click', () => {
            importFileInput.click();
        });

        importFileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    await importFromJSON(file);
                    populateForm();
                    renderPreview();
                    showNotification('Resume imported successfully');
                } catch (error) {
                    alert('Failed to import resume: ' + error.message);
                }
                // Clear file input
                importFileInput.value = '';
            }
        });
    }

    // Clear all
    const clearBtn = document.getElementById('clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            const confirmed = confirm(
                'Clear all resume data?\n\n' +
                'This will delete all your information and cannot be undone.\n\n' +
                'Continue?'
            );

            if (confirmed) {
                resetState();
                clearLocalStorage();
                populateForm();
                renderPreview();

                // Reset selectors
                const professionSelect = document.getElementById('profession-select');
                const templateSelect = document.getElementById('template-select');
                const pageSizeSelect = document.getElementById('page-size-select');

                if (professionSelect) professionSelect.value = '';
                if (templateSelect) templateSelect.value = 'minimal';
                if (pageSizeSelect) pageSizeSelect.value = 'a4';

                applyTemplate('minimal');

                showNotification('All data cleared');
            }
        });
    }
};

/**
 * Initialize mobile navigation toggle
 */
const initMobileNav = () => {
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const editorPanel = document.getElementById('editor-panel');
    const appContainer = document.querySelector('.app-container');

    if (!mobileNavToggle || !editorPanel || !appContainer) return;

    // Function to close the editor panel
    const closeEditor = () => {
        editorPanel.classList.remove('mobile-active');
        appContainer.classList.remove('editor-open');
        mobileNavToggle.classList.remove('active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        if (window.innerWidth <= 768) {
            editorPanel.setAttribute('aria-hidden', 'true');
        }
        document.body.style.overflow = '';

        // Update button text - find the text node with actual content (not whitespace)
        const textNode = Array.from(mobileNavToggle.childNodes).find(
            node => node.nodeType === 3 && node.textContent.trim().length > 0
        );
        if (textNode) {
            textNode.textContent = 'Build Yours';
        }
    };

    // Function to open the editor panel
    const openEditor = () => {
        editorPanel.classList.add('mobile-active');
        appContainer.classList.add('editor-open');
        mobileNavToggle.classList.add('active');
        mobileNavToggle.setAttribute('aria-expanded', 'true');
        if (window.innerWidth <= 768) {
            editorPanel.setAttribute('aria-hidden', 'false');
        }
        document.body.style.overflow = 'hidden';

        // Update button text - find the text node with actual content (not whitespace)
        const textNode = Array.from(mobileNavToggle.childNodes).find(
            node => node.nodeType === 3 && node.textContent.trim().length > 0
        );
        if (textNode) {
            textNode.textContent = 'Close';
        }
    };

    // Toggle editor panel on mobile
    mobileNavToggle.addEventListener('click', () => {
        const isActive = editorPanel.classList.contains('mobile-active');
        if (isActive) {
            closeEditor();
        } else {
            openEditor();
        }
    });

    // Close editor when clicking on the backdrop
    appContainer.addEventListener('click', (e) => {
        // Only close if clicking the backdrop (the ::before pseudo-element)
        if (e.target === appContainer && appContainer.classList.contains('editor-open')) {
            closeEditor();
        }
    });

    // Close editor when form is submitted/saved (auto-close for better UX)
    const form = editorPanel.querySelector('form');
    if (form) {
        form.addEventListener('change', () => {
            // Debounce the auto-close
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    if (editorPanel.classList.contains('mobile-active')) {
                        // Don't auto-close immediately, but save the state
                        saveToLocalStorage();
                    }
                }, 300);
            }
        });
    }

    // Handle window resize - reset mobile state when resizing to desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768) {
                editorPanel.classList.remove('mobile-active');
                appContainer.classList.remove('editor-open');
                mobileNavToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        }, 250);
    });
};

/**
 * Update form elements after state change
 * Re-renders dynamic sections
 */
const updateFormElements = () => {
    renderSkills();
    renderExperience();
    renderEducation();
    renderProjects();
    renderCertifications();
};

/**
 * Show notification message
 */
const showNotification = (message) => {
    // Simple console notification
    // Could be enhanced with a toast UI component
    console.log('📢', message);

    // Optional: You could add a simple toast notification here
    // For now, just using browser alert for important messages
};

/**
 * Handle keyboard shortcuts
 */
const initKeyboardShortcuts = () => {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + P for print
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            document.getElementById('export-pdf-btn')?.click();
        }

        // Ctrl/Cmd + S for save (already autosaves, but good to acknowledge)
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            saveToLocalStorage();
            showNotification('Resume saved');
        }

        // Ctrl/Cmd + E for export JSON
        if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
            e.preventDefault();
            document.getElementById('export-json-btn')?.click();
        }
    });
};

// Initialize keyboard shortcuts
initKeyboardShortcuts();

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
