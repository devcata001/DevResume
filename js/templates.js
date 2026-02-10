/**
 * Templates - Template switching and management
 * Handles switching between different resume templates
 */

import { getState, updateMeta } from './state.js';
import { autosave } from './storage.js';

const TEMPLATES = ['minimal', 'modern', 'classic'];

/**
 * Initialize template selector
 */
export const initTemplates = () => {
    const templateSelect = document.getElementById('template-select');
    const pageSizeSelect = document.getElementById('page-size-select');
    const previewContainer = document.getElementById('resume-preview');

    if (templateSelect) {
        templateSelect.addEventListener('change', (e) => {
            applyTemplate(e.target.value);
            autosave();
        });
    }

    if (pageSizeSelect) {
        pageSizeSelect.addEventListener('change', (e) => {
            applyPageSize(e.target.value);
            autosave();
        });
    }

    // Apply initial template and page size from state
    const state = getState();
    if (previewContainer) {
        applyTemplate(state.meta.template || 'minimal');
        applyPageSize(state.meta.pageSize || 'a4');
    }

    // Update selectors to match state
    if (templateSelect) {
        templateSelect.value = state.meta.template || 'minimal';
    }
    if (pageSizeSelect) {
        pageSizeSelect.value = state.meta.pageSize || 'a4';
    }
};

/**
 * Apply template to preview
 */
export const applyTemplate = (templateName) => {
    const previewContainer = document.getElementById('resume-preview');
    if (!previewContainer) return;

    // Remove all template classes
    TEMPLATES.forEach(template => {
        previewContainer.classList.remove(`template-${template}`);
    });

    // Add selected template class
    if (TEMPLATES.includes(templateName)) {
        previewContainer.classList.add(`template-${templateName}`);
        updateMeta('template', templateName);
    }
};

/**
 * Apply page size to preview
 */
export const applyPageSize = (pageSize) => {
    const previewContainer = document.getElementById('resume-preview');
    if (!previewContainer) return;

    // Remove all page size classes
    previewContainer.classList.remove('page-a4', 'page-letter');

    // Add selected page size class
    if (pageSize === 'a4' || pageSize === 'letter') {
        previewContainer.classList.add(`page-${pageSize}`);
        updateMeta('pageSize', pageSize);
    }
};

/**
 * Get current template
 */
export const getCurrentTemplate = () => {
    const state = getState();
    return state.meta.template || 'minimal';
};

/**
 * Get current page size
 */
export const getCurrentPageSize = () => {
    const state = getState();
    return state.meta.pageSize || 'a4';
};
