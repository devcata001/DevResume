/**
 * Print - PDF export functionality
 * Handles printing the resume to PDF
 */

/**
 * Initialize print functionality
 */
export const initPrint = () => {
    const exportPdfBtn = document.getElementById('export-pdf-btn');

    if (exportPdfBtn) {
        exportPdfBtn.addEventListener('click', () => {
            printResume();
        });
    }
};

/**
 * Print resume to PDF
 * Uses browser's native print functionality
 */
export const printResume = () => {
    // Optional: Add print-specific class to body
    document.body.classList.add('printing');

    // Show helpful message
    console.log('📄 Opening print dialog - Select "Save as PDF" as destination');

    // Trigger browser print dialog
    // Users should select "Save as PDF" as the destination
    window.print();

    // Remove print class after print dialog closes
    setTimeout(() => {
        document.body.classList.remove('printing');
    }, 1000);
};

/**
 * Setup print event listeners
 * Can be used for analytics or custom behavior
 */
export const setupPrintListeners = () => {
    window.addEventListener('beforeprint', () => {
        console.log('Preparing to print resume...');
        // Add any pre-print logic here
    });

    window.addEventListener('afterprint', () => {
        console.log('Print completed or cancelled');
        // Add any post-print logic here
    });
};
