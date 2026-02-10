/**
 * Preview - Resume preview rendering
 * Generates HTML preview of the resume from state
 */

import { getState } from './state.js';

/**
 * Render the complete resume preview
 */
export const renderPreview = () => {
    const previewContainer = document.getElementById('resume-preview');
    if (!previewContainer) return;

    const state = getState();

    const html = `
        <div class="resume-container">
            ${renderHeader(state)}
            ${state.summary ? renderSummary(state.summary) : ''}
            ${state.skills.length > 0 ? renderSkills(state.skills) : ''}
            ${state.experience.length > 0 ? renderExperience(state.experience) : ''}
            ${state.education.length > 0 ? renderEducation(state.education) : ''}
            ${state.projects.length > 0 ? renderProjects(state.projects) : ''}
            ${state.certifications.length > 0 ? renderCertifications(state.certifications) : ''}
        </div>
    `;

    previewContainer.innerHTML = html;
};

/**
 * Render resume header with personal information
 */
const renderHeader = (state) => {
    const { personal } = state;
    const contactItems = [];

    if (personal.email) {
        contactItems.push(`<div class="resume-contact-item"><span>✉</span> <a href="mailto:${escapeHtml(personal.email)}">${escapeHtml(personal.email)}</a></div>`);
    }
    if (personal.phone) {
        contactItems.push(`<div class="resume-contact-item"><span>📞</span> ${escapeHtml(personal.phone)}</div>`);
    }
    if (personal.location) {
        contactItems.push(`<div class="resume-contact-item"><span>📍</span> ${escapeHtml(personal.location)}</div>`);
    }
    if (personal.website) {
        contactItems.push(`<div class="resume-contact-item"><span>🌐</span> <a href="${escapeHtml(personal.website)}" target="_blank">${formatUrl(personal.website)}</a></div>`);
    }
    if (personal.linkedin) {
        contactItems.push(`<div class="resume-contact-item"><span>💼</span> <a href="${escapeHtml(personal.linkedin)}" target="_blank">LinkedIn</a></div>`);
    }
    if (personal.github) {
        contactItems.push(`<div class="resume-contact-item"><span>💻</span> <a href="${escapeHtml(personal.github)}" target="_blank">GitHub</a></div>`);
    }

    return `
        <header class="resume-header">
            <h1 class="resume-name">${escapeHtml(personal.fullName) || 'Your Name'}</h1>
            <div class="resume-title">${escapeHtml(personal.jobTitle) || 'Your Job Title'}</div>
            ${contactItems.length > 0 ? `<div class="resume-contact">${contactItems.join('')}</div>` : ''}
        </header>
    `;
};

/**
 * Render professional summary
 */
const renderSummary = (summary) => {
    return `
        <section class="resume-section">
            <h2 class="resume-section-title">Summary</h2>
            <div class="resume-summary">${escapeHtml(summary)}</div>
        </section>
    `;
};

/**
 * Render skills section
 */
const renderSkills = (skills) => {
    return `
        <section class="resume-section">
            <h2 class="resume-section-title">Skills</h2>
            <div class="resume-skills">
                ${skills.map(skill => `<span class="resume-skill">${escapeHtml(skill)}</span>`).join('')}
            </div>
        </section>
    `;
};

/**
 * Render work experience section
 */
const renderExperience = (experiences) => {
    return `
        <section class="resume-section">
            <h2 class="resume-section-title">Experience</h2>
            ${experiences.map(exp => renderExperienceItem(exp)).join('')}
        </section>
    `;
};

/**
 * Render single experience item
 */
const renderExperienceItem = (exp) => {
    const dateRange = formatDateRange(exp.startDate, exp.endDate, exp.current);

    return `
        <div class="resume-item">
            <div class="resume-item-header">
                <div>
                    <div class="resume-item-title">${escapeHtml(exp.position) || 'Position Title'}</div>
                    <div class="resume-item-subtitle">${escapeHtml(exp.company) || 'Company Name'}</div>
                    ${exp.location ? `<div class="resume-item-location">${escapeHtml(exp.location)}</div>` : ''}
                </div>
                ${dateRange ? `<div class="resume-item-meta">${dateRange}</div>` : ''}
            </div>
            ${exp.description ? `<div class="resume-item-description">${formatDescription(exp.description)}</div>` : ''}
        </div>
    `;
};

/**
 * Render education section
 */
const renderEducation = (education) => {
    return `
        <section class="resume-section">
            <h2 class="resume-section-title">Education</h2>
            ${education.map(edu => renderEducationItem(edu)).join('')}
        </section>
    `;
};

/**
 * Render single education item
 */
const renderEducationItem = (edu) => {
    const dateRange = formatDateRange(edu.startDate, edu.endDate, false);
    const degreeText = edu.field
        ? `${escapeHtml(edu.degree)} in ${escapeHtml(edu.field)}`
        : escapeHtml(edu.degree);

    return `
        <div class="resume-item">
            <div class="resume-item-header">
                <div>
                    <div class="resume-item-title">${escapeHtml(edu.school) || 'School Name'}</div>
                    <div class="resume-item-subtitle">${degreeText || 'Degree'}</div>
                    ${edu.location ? `<div class="resume-item-location">${escapeHtml(edu.location)}</div>` : ''}
                </div>
                ${dateRange ? `<div class="resume-item-meta">${dateRange}</div>` : ''}
            </div>
            ${edu.description ? `<div class="resume-item-description">${escapeHtml(edu.description)}</div>` : ''}
        </div>
    `;
};

/**
 * Render projects section
 */
const renderProjects = (projects) => {
    return `
        <section class="resume-section">
            <h2 class="resume-section-title">Projects</h2>
            ${projects.map(proj => renderProjectItem(proj)).join('')}
        </section>
    `;
};

/**
 * Render single project item
 */
const renderProjectItem = (proj) => {
    return `
        <div class="resume-item">
            <div class="resume-item-header">
                <div>
                    <div class="resume-item-title">
                        ${proj.url
            ? `<a href="${escapeHtml(proj.url)}" target="_blank">${escapeHtml(proj.name) || 'Project Name'}</a>`
            : escapeHtml(proj.name) || 'Project Name'}
                    </div>
                    ${proj.technologies ? `<div class="resume-item-subtitle">${escapeHtml(proj.technologies)}</div>` : ''}
                </div>
            </div>
            ${proj.description ? `<div class="resume-item-description">${escapeHtml(proj.description)}</div>` : ''}
        </div>
    `;
};

/**
 * Render certifications section
 */
const renderCertifications = (certifications) => {
    return `
        <section class="resume-section">
            <h2 class="resume-section-title">Certifications</h2>
            ${certifications.map(cert => renderCertificationItem(cert)).join('')}
        </section>
    `;
};

/**
 * Render single certification item
 */
const renderCertificationItem = (cert) => {
    const date = cert.date ? formatMonthYear(cert.date) : '';

    return `
        <div class="resume-certification">
            <div class="resume-certification-name">
                ${cert.url
            ? `<a href="${escapeHtml(cert.url)}" target="_blank">${escapeHtml(cert.name) || 'Certification Name'}</a>`
            : escapeHtml(cert.name) || 'Certification Name'}
            </div>
            <div class="resume-certification-issuer">${escapeHtml(cert.issuer) || 'Issuing Organization'}</div>
            ${date ? `<div class="resume-certification-date">${date}</div>` : ''}
        </div>
    `;
};

/**
 * Format date range
 */
const formatDateRange = (startDate, endDate, isCurrent) => {
    if (!startDate) return '';

    const start = formatMonthYear(startDate);
    const end = isCurrent ? 'Present' : (endDate ? formatMonthYear(endDate) : '');

    return end ? `${start} - ${end}` : start;
};

/**
 * Format month-year date (YYYY-MM to MMM YYYY)
 */
const formatMonthYear = (dateStr) => {
    if (!dateStr) return '';

    const [year, month] = dateStr.split('-');
    const date = new Date(year, parseInt(month) - 1);

    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    return `${monthNames[date.getMonth()]} ${year}`;
};

/**
 * Format description with line breaks and bullet points
 */
const formatDescription = (description) => {
    if (!description) return '';

    const lines = description.split('\n').filter(line => line.trim());

    // Check if it looks like a bulleted list
    const hasBullets = lines.some(line =>
        line.trim().startsWith('•') ||
        line.trim().startsWith('-') ||
        line.trim().startsWith('*')
    );

    if (hasBullets) {
        const items = lines
            .map(line => line.trim().replace(/^[•\-*]\s*/, ''))
            .filter(line => line)
            .map(line => `<li>${escapeHtml(line)}</li>`)
            .join('');
        return `<ul>${items}</ul>`;
    }

    // Otherwise, just escape and preserve line breaks
    return lines.map(line => escapeHtml(line)).join('<br>');
};

/**
 * Format URL for display
 */
const formatUrl = (url) => {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace('www.', '');
    } catch {
        return url;
    }
};

/**
 * Escape HTML to prevent XSS
 */
const escapeHtml = (text) => {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};
