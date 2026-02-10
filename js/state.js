/**
 * State Management - Central resume state object
 * Manages the complete resume data structure
 */

// Initial empty state structure
export const createEmptyState = () => ({
    personal: {
        fullName: '',
        jobTitle: '',
        email: '',
        phone: '',
        location: '',
        website: '',
        linkedin: '',
        github: ''
    },
    summary: '',
    skills: [],
    experience: [],
    education: [],
    projects: [],
    certifications: [],
    meta: {
        template: 'minimal',
        pageSize: 'a4',
        profession: ''
    }
});

// Current state (singleton)
let state = createEmptyState();

// State change listeners
const listeners = [];

/**
 * Get current state
 */
export const getState = () => state;

/**
 * Update state and notify listeners
 */
export const setState = (newState) => {
    state = { ...state, ...newState };
    notifyListeners();
};

/**
 * Update specific section of state
 */
export const updateSection = (section, data) => {
    state = {
        ...state,
        [section]: data
    };
    notifyListeners();
};

/**
 * Update personal information
 */
export const updatePersonal = (field, value) => {
    state.personal = {
        ...state.personal,
        [field]: value
    };
    notifyListeners();
};

/**
 * Update summary
 */
export const updateSummary = (value) => {
    state.summary = value;
    notifyListeners();
};

/**
 * Add skill
 */
export const addSkill = (skill) => {
    if (!state.skills.includes(skill.trim())) {
        state.skills = [...state.skills, skill.trim()];
        notifyListeners();
    }
};

/**
 * Remove skill
 */
export const removeSkill = (skill) => {
    state.skills = state.skills.filter(s => s !== skill);
    notifyListeners();
};

/**
 * Add experience entry
 */
export const addExperience = (experience) => {
    state.experience = [...state.experience, {
        id: Date.now(),
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
        ...experience
    }];
    notifyListeners();
};

/**
 * Update experience entry
 */
export const updateExperience = (id, data) => {
    state.experience = state.experience.map(exp =>
        exp.id === id ? { ...exp, ...data } : exp
    );
    notifyListeners();
};

/**
 * Remove experience entry
 */
export const removeExperience = (id) => {
    state.experience = state.experience.filter(exp => exp.id !== id);
    notifyListeners();
};

/**
 * Add education entry
 */
export const addEducation = (education) => {
    state.education = [...state.education, {
        id: Date.now(),
        school: '',
        degree: '',
        field: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
        ...education
    }];
    notifyListeners();
};

/**
 * Update education entry
 */
export const updateEducation = (id, data) => {
    state.education = state.education.map(edu =>
        edu.id === id ? { ...edu, ...data } : edu
    );
    notifyListeners();
};

/**
 * Remove education entry
 */
export const removeEducation = (id) => {
    state.education = state.education.filter(edu => edu.id !== id);
    notifyListeners();
};

/**
 * Add project entry
 */
export const addProject = (project) => {
    state.projects = [...state.projects, {
        id: Date.now(),
        name: '',
        description: '',
        url: '',
        technologies: '',
        ...project
    }];
    notifyListeners();
};

/**
 * Update project entry
 */
export const updateProject = (id, data) => {
    state.projects = state.projects.map(proj =>
        proj.id === id ? { ...proj, ...data } : proj
    );
    notifyListeners();
};

/**
 * Remove project entry
 */
export const removeProject = (id) => {
    state.projects = state.projects.filter(proj => proj.id !== id);
    notifyListeners();
};

/**
 * Add certification entry
 */
export const addCertification = (certification) => {
    state.certifications = [...state.certifications, {
        id: Date.now(),
        name: '',
        issuer: '',
        date: '',
        url: '',
        ...certification
    }];
    notifyListeners();
};

/**
 * Update certification entry
 */
export const updateCertification = (id, data) => {
    state.certifications = state.certifications.map(cert =>
        cert.id === id ? { ...cert, ...data } : cert
    );
    notifyListeners();
};

/**
 * Remove certification entry
 */
export const removeCertification = (id) => {
    state.certifications = state.certifications.filter(cert => cert.id !== id);
    notifyListeners();
};

/**
 * Update meta information (template, page size, etc.)
 */
export const updateMeta = (field, value) => {
    state.meta = {
        ...state.meta,
        [field]: value
    };
    notifyListeners();
};

/**
 * Reset state to empty
 */
export const resetState = () => {
    state = createEmptyState();
    notifyListeners();
};

/**
 * Subscribe to state changes
 */
export const subscribe = (listener) => {
    listeners.push(listener);
    // Return unsubscribe function
    return () => {
        const index = listeners.indexOf(listener);
        if (index > -1) {
            listeners.splice(index, 1);
        }
    };
};

/**
 * Notify all listeners of state change
 */
const notifyListeners = () => {
    listeners.forEach(listener => listener(state));
};
