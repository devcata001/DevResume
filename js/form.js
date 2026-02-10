/**
 * Form - Form handling and input management
 * Manages form inputs, validation, and state updates
 */

import {
    updatePersonal,
    updateSummary,
    addSkill,
    removeSkill,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    addProject,
    updateProject,
    removeProject,
    addCertification,
    updateCertification,
    removeCertification,
    getState
} from './state.js';
import { autosave } from './storage.js';

/**
 * Initialize form handlers
 */
export const initForm = () => {
    initPersonalInfoHandlers();
    initSummaryHandler();
    initSkillsHandlers();
    initRepeatableHandlers();
};

/**
 * Initialize personal information input handlers
 */
const initPersonalInfoHandlers = () => {
    const fields = [
        'fullName',
        'jobTitle',
        'email',
        'phone',
        'location',
        'website',
        'linkedin',
        'github'
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.replace(/([A-Z])/g, '-$1').toLowerCase());
        if (input) {
            input.addEventListener('input', (e) => {
                updatePersonal(field, e.target.value);
                autosave();
            });
        }
    });
};

/**
 * Initialize summary textarea handler
 */
const initSummaryHandler = () => {
    const summaryInput = document.getElementById('summary');
    if (summaryInput) {
        summaryInput.addEventListener('input', (e) => {
            updateSummary(e.target.value);
            autosave();
        });
    }
};

/**
 * Initialize skills input handlers
 */
const initSkillsHandlers = () => {
    const skillsInput = document.getElementById('skills-input');

    if (skillsInput) {
        skillsInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const skill = skillsInput.value.trim();
                if (skill) {
                    addSkill(skill);
                    renderSkills();
                    skillsInput.value = '';
                    autosave();
                }
            }
        });
    }
};

/**
 * Initialize repeatable section handlers (experience, education, etc.)
 */
const initRepeatableHandlers = () => {
    // Experience
    const addExpBtn = document.getElementById('add-experience-btn');
    if (addExpBtn) {
        addExpBtn.addEventListener('click', () => {
            addExperience({});
            renderExperience();
            autosave();
        });
    }

    // Education
    const addEduBtn = document.getElementById('add-education-btn');
    if (addEduBtn) {
        addEduBtn.addEventListener('click', () => {
            addEducation({});
            renderEducation();
            autosave();
        });
    }

    // Projects
    const addProjBtn = document.getElementById('add-project-btn');
    if (addProjBtn) {
        addProjBtn.addEventListener('click', () => {
            addProject({});
            renderProjects();
            autosave();
        });
    }

    // Certifications
    const addCertBtn = document.getElementById('add-certification-btn');
    if (addCertBtn) {
        addCertBtn.addEventListener('click', () => {
            addCertification({});
            renderCertifications();
            autosave();
        });
    }
};

/**
 * Render skills tags
 */
export const renderSkills = () => {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const state = getState();
    container.innerHTML = '';

    state.skills.forEach(skill => {
        const tag = document.createElement('div');
        tag.className = 'skill-tag';
        tag.innerHTML = `
            <span>${escapeHtml(skill)}</span>
            <button type="button" class="skill-tag-remove" data-skill="${escapeHtml(skill)}">&times;</button>
        `;

        const removeBtn = tag.querySelector('.skill-tag-remove');
        removeBtn.addEventListener('click', () => {
            removeSkill(skill);
            renderSkills();
            autosave();
        });

        container.appendChild(tag);
    });
};

/**
 * Render experience items
 */
export const renderExperience = () => {
    const container = document.getElementById('experience-container');
    if (!container) return;

    const state = getState();
    container.innerHTML = '';

    if (state.experience.length === 0) {
        container.innerHTML = '<div class="empty-state">No experience added yet. Click "+ Add" to get started.</div>';
        return;
    }

    state.experience.forEach((exp, index) => {
        const item = createExperienceItem(exp, index);
        container.appendChild(item);
    });
};

/**
 * Create experience item element
 */
const createExperienceItem = (exp, index) => {
    const div = document.createElement('div');
    div.className = 'repeatable-item';
    div.innerHTML = `
        <div class="repeatable-item-header">
            <span class="repeatable-item-title">Experience #${index + 1}</span>
            <button type="button" class="btn-remove" data-id="${exp.id}">&times;</button>
        </div>
        <div class="form-group">
            <label>Position *</label>
            <input type="text" class="form-control" data-field="position" data-id="${exp.id}" value="${escapeHtml(exp.position || '')}" required>
        </div>
        <div class="form-group">
            <label>Company *</label>
            <input type="text" class="form-control" data-field="company" data-id="${exp.id}" value="${escapeHtml(exp.company || '')}" required>
        </div>
        <div class="form-group">
            <label>Location</label>
            <input type="text" class="form-control" data-field="location" data-id="${exp.id}" value="${escapeHtml(exp.location || '')}">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Start Date</label>
                <input type="month" class="form-control" data-field="startDate" data-id="${exp.id}" value="${exp.startDate || ''}">
            </div>
            <div class="form-group">
                <label>End Date</label>
                <input type="month" class="form-control" data-field="endDate" data-id="${exp.id}" value="${exp.endDate || ''}" ${exp.current ? 'disabled' : ''}>
            </div>
        </div>
        <div class="checkbox-group">
            <input type="checkbox" id="current-${exp.id}" data-field="current" data-id="${exp.id}" ${exp.current ? 'checked' : ''}>
            <label for="current-${exp.id}">Currently working here</label>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" rows="4" data-field="description" data-id="${exp.id}" placeholder="Describe your role and achievements (use bullet points with • or -)">${escapeHtml(exp.description || '')}</textarea>
        </div>
    `;

    // Add event listeners
    const inputs = div.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        const field = input.dataset.field;
        const id = parseInt(input.dataset.id);

        if (field === 'current') {
            input.addEventListener('change', (e) => {
                updateExperience(id, { current: e.target.checked });
                const endDateInput = div.querySelector(`input[data-field="endDate"][data-id="${id}"]`);
                if (endDateInput) {
                    endDateInput.disabled = e.target.checked;
                    if (e.target.checked) endDateInput.value = '';
                }
                autosave();
            });
        } else {
            input.addEventListener('input', (e) => {
                updateExperience(id, { [field]: e.target.value });
                autosave();
            });
        }
    });

    const removeBtn = div.querySelector('.btn-remove');
    removeBtn.addEventListener('click', () => {
        removeExperience(exp.id);
        renderExperience();
        autosave();
    });

    return div;
};

/**
 * Render education items
 */
export const renderEducation = () => {
    const container = document.getElementById('education-container');
    if (!container) return;

    const state = getState();
    container.innerHTML = '';

    if (state.education.length === 0) {
        container.innerHTML = '<div class="empty-state">No education added yet. Click "+ Add" to get started.</div>';
        return;
    }

    state.education.forEach((edu, index) => {
        const item = createEducationItem(edu, index);
        container.appendChild(item);
    });
};

/**
 * Create education item element
 */
const createEducationItem = (edu, index) => {
    const div = document.createElement('div');
    div.className = 'repeatable-item';
    div.innerHTML = `
        <div class="repeatable-item-header">
            <span class="repeatable-item-title">Education #${index + 1}</span>
            <button type="button" class="btn-remove" data-id="${edu.id}">&times;</button>
        </div>
        <div class="form-group">
            <label>School/University *</label>
            <input type="text" class="form-control" data-field="school" data-id="${edu.id}" value="${escapeHtml(edu.school || '')}" required>
        </div>
        <div class="form-group">
            <label>Degree *</label>
            <input type="text" class="form-control" data-field="degree" data-id="${edu.id}" value="${escapeHtml(edu.degree || '')}" placeholder="e.g., Bachelor of Science" required>
        </div>
        <div class="form-group">
            <label>Field of Study</label>
            <input type="text" class="form-control" data-field="field" data-id="${edu.id}" value="${escapeHtml(edu.field || '')}" placeholder="e.g., Computer Science">
        </div>
        <div class="form-group">
            <label>Location</label>
            <input type="text" class="form-control" data-field="location" data-id="${edu.id}" value="${escapeHtml(edu.location || '')}">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Start Date</label>
                <input type="month" class="form-control" data-field="startDate" data-id="${edu.id}" value="${edu.startDate || ''}">
            </div>
            <div class="form-group">
                <label>End Date</label>
                <input type="month" class="form-control" data-field="endDate" data-id="${edu.id}" value="${edu.endDate || ''}">
            </div>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" rows="2" data-field="description" data-id="${edu.id}" placeholder="Additional details (optional)">${escapeHtml(edu.description || '')}</textarea>
        </div>
    `;

    // Add event listeners
    const inputs = div.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        const field = input.dataset.field;
        const id = parseInt(input.dataset.id);

        input.addEventListener('input', (e) => {
            updateEducation(id, { [field]: e.target.value });
            autosave();
        });
    });

    const removeBtn = div.querySelector('.btn-remove');
    removeBtn.addEventListener('click', () => {
        removeEducation(edu.id);
        renderEducation();
        autosave();
    });

    return div;
};

/**
 * Render projects
 */
export const renderProjects = () => {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const state = getState();
    container.innerHTML = '';

    if (state.projects.length === 0) {
        container.innerHTML = '<div class="empty-state">No projects added yet. Click "+ Add" to get started.</div>';
        return;
    }

    state.projects.forEach((proj, index) => {
        const item = createProjectItem(proj, index);
        container.appendChild(item);
    });
};

/**
 * Create project item element
 */
const createProjectItem = (proj, index) => {
    const div = document.createElement('div');
    div.className = 'repeatable-item';
    div.innerHTML = `
        <div class="repeatable-item-header">
            <span class="repeatable-item-title">Project #${index + 1}</span>
            <button type="button" class="btn-remove" data-id="${proj.id}">&times;</button>
        </div>
        <div class="form-group">
            <label>Project Name *</label>
            <input type="text" class="form-control" data-field="name" data-id="${proj.id}" value="${escapeHtml(proj.name || '')}" required>
        </div>
        <div class="form-group">
            <label>Description *</label>
            <textarea class="form-control" rows="3" data-field="description" data-id="${proj.id}" required>${escapeHtml(proj.description || '')}</textarea>
        </div>
        <div class="form-group">
            <label>Technologies</label>
            <input type="text" class="form-control" data-field="technologies" data-id="${proj.id}" value="${escapeHtml(proj.technologies || '')}" placeholder="e.g., React, Node.js, PostgreSQL">
        </div>
        <div class="form-group">
            <label>URL</label>
            <input type="url" class="form-control" data-field="url" data-id="${proj.id}" value="${escapeHtml(proj.url || '')}" placeholder="https://">
        </div>
    `;

    // Add event listeners
    const inputs = div.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        const field = input.dataset.field;
        const id = parseInt(input.dataset.id);

        input.addEventListener('input', (e) => {
            updateProject(id, { [field]: e.target.value });
            autosave();
        });
    });

    const removeBtn = div.querySelector('.btn-remove');
    removeBtn.addEventListener('click', () => {
        removeProject(proj.id);
        renderProjects();
        autosave();
    });

    return div;
};

/**
 * Render certifications
 */
export const renderCertifications = () => {
    const container = document.getElementById('certifications-container');
    if (!container) return;

    const state = getState();
    container.innerHTML = '';

    if (state.certifications.length === 0) {
        container.innerHTML = '<div class="empty-state">No certifications added yet. Click "+ Add" to get started.</div>';
        return;
    }

    state.certifications.forEach((cert, index) => {
        const item = createCertificationItem(cert, index);
        container.appendChild(item);
    });
};

/**
 * Create certification item element
 */
const createCertificationItem = (cert, index) => {
    const div = document.createElement('div');
    div.className = 'repeatable-item';
    div.innerHTML = `
        <div class="repeatable-item-header">
            <span class="repeatable-item-title">Certification #${index + 1}</span>
            <button type="button" class="btn-remove" data-id="${cert.id}">&times;</button>
        </div>
        <div class="form-group">
            <label>Certification Name *</label>
            <input type="text" class="form-control" data-field="name" data-id="${cert.id}" value="${escapeHtml(cert.name || '')}" required>
        </div>
        <div class="form-group">
            <label>Issuing Organization *</label>
            <input type="text" class="form-control" data-field="issuer" data-id="${cert.id}" value="${escapeHtml(cert.issuer || '')}" required>
        </div>
        <div class="form-group">
            <label>Date Obtained</label>
            <input type="month" class="form-control" data-field="date" data-id="${cert.id}" value="${cert.date || ''}">
        </div>
        <div class="form-group">
            <label>Credential URL</label>
            <input type="url" class="form-control" data-field="url" data-id="${cert.id}" value="${escapeHtml(cert.url || '')}" placeholder="https://">
        </div>
    `;

    // Add event listeners
    const inputs = div.querySelectorAll('input');
    inputs.forEach(input => {
        const field = input.dataset.field;
        const id = parseInt(input.dataset.id);

        input.addEventListener('input', (e) => {
            updateCertification(id, { [field]: e.target.value });
            autosave();
        });
    });

    const removeBtn = div.querySelector('.btn-remove');
    removeBtn.addEventListener('click', () => {
        removeCertification(cert.id);
        renderCertifications();
        autosave();
    });

    return div;
};

/**
 * Populate form with state data
 */
export const populateForm = () => {
    const state = getState();

    // Personal info
    Object.keys(state.personal).forEach(field => {
        const input = document.getElementById(field.replace(/([A-Z])/g, '-$1').toLowerCase());
        if (input) {
            input.value = state.personal[field] || '';
        }
    });

    // Summary
    const summaryInput = document.getElementById('summary');
    if (summaryInput) {
        summaryInput.value = state.summary || '';
    }

    // Render repeatable sections
    renderSkills();
    renderExperience();
    renderEducation();
    renderProjects();
    renderCertifications();
};

/**
 * Escape HTML to prevent XSS
 */
const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};
