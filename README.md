# DevResume - Professional Resume Builder

A complete, production-ready resume builder web application built with pure HTML, CSS, and Vanilla JavaScript. Create professional, ATS-friendly resumes with live preview and PDF export - no frameworks, no backend, fully offline-capable.

## ✨ Features

### 🎨 Professional Templates

- **3 Beautiful Templates**: Minimal, Modern, and Classic designs
- **Profession-Aware**: Automatically select the best template for your role
- **Fully Customizable**: Switch templates instantly with live preview
- **Print-Optimized**: Perfect formatting for PDF export

### 📝 Comprehensive Resume Editor

- **Personal Information**: Name, title, contact details, social links
- **Professional Summary**: Highlight your key strengths
- **Work Experience**: Add unlimited positions with descriptions
- **Education**: Multiple degrees and certifications
- **Skills**: Tag-based skill management
- **Projects**: Showcase your best work
- **Certifications**: Professional credentials and licenses

### ⚡ Live Preview

- **Instant Updates**: See changes as you type
- **WYSIWYG**: Preview matches final PDF exactly
- **Multiple Page Sizes**: A4 and Letter support
- **Responsive Design**: Works on desktop and mobile

### 💾 Data Management

- **Autosave**: Never lose your work with automatic localStorage saving
- **Export JSON**: Download your resume data for backup
- **Import JSON**: Load previously saved resumes
- **Offline-First**: Works completely without internet

### 📄 PDF Export

- **One-Click Export**: Print to PDF using browser's native functionality
- **ATS-Friendly**: Optimized for Applicant Tracking Systems
- **Professional Quality**: Print-ready formatting
- **No Watermarks**: Completely free, no restrictions

### 🎯 Profession Presets

Pre-configured templates and sample data for:

- **Frontend Developer**: React, TypeScript, responsive design focus
- **Backend Developer**: APIs, databases, microservices
- **Full Stack Developer**: End-to-end development
- **Application Security Engineer**: Security testing, vulnerability assessment
- **DevOps Engineer**: Infrastructure, CI/CD, containerization
- **Data Engineer**: Data pipelines, ETL, big data

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Running Locally

1. **Clone or Download** this repository:

   ```bash
   git clone https://github.com/yourusername/devresume.git
   cd devresume
   ```

2. **Open in Browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):

     ```bash
     # Python 3
     python -m http.server 8000

     # Python 2
     python -m SimpleHTTPServer 8000

     # Node.js (with npx)
     npx http-server
     ```

3. **Start Building**:
   - Select a profession preset or start from scratch
   - Fill in your information
   - Choose a template
   - Export to PDF when ready!

## 📁 Project Structure

```
devresume/
├── index.html                 # Main HTML file
├── css/
│   ├── base.css              # CSS reset, variables, typography
│   ├── layout.css            # Two-column layout (editor + preview)
│   ├── editor.css            # Form and editor styling
│   ├── resume.css            # Shared resume styles
│   ├── template-minimal.css  # Minimal template styles
│   ├── template-modern.css   # Modern template styles
│   ├── template-classic.css  # Classic template styles
│   └── print.css             # Print-specific styles for PDF
├── js/
│   ├── app.js                # Main application coordinator
│   ├── state.js              # State management
│   ├── form.js               # Form handling and validation
│   ├── preview.js            # Resume preview rendering
│   ├── templates.js          # Template switching
│   ├── storage.js            # localStorage management
│   ├── print.js              # PDF export functionality
│   └── professions.js        # Profession presets and sample data
├── assets/
│   ├── fonts/                # Custom fonts (if needed)
│   └── icons/                # Icons and images
└── README.md                 # This file
```

## 🎨 Using Templates

### Switching Templates

1. Use the **Resume Template** dropdown in the editor
2. Choose from Minimal, Modern, or Classic
3. Preview updates instantly

### Template Descriptions

**Minimal**

- Clean, simple design
- Black and white color scheme
- Perfect for traditional industries
- Maximum readability

**Modern**

- Contemporary design with gradient header
- Purple/blue color accents
- Great for tech and creative roles
- Eye-catching but professional

**Classic**

- Traditional resume format
- Centered header
- Serif fonts for elegance
- Ideal for academic and corporate positions

## 💡 Using Profession Presets

### Quick Start with Presets

1. **Select a Profession** from the dropdown:
   - Frontend Developer
   - Backend Developer
   - Full Stack Developer
   - Application Security Engineer
   - DevOps Engineer
   - Data Engineer

2. **Sample Data Loaded**: Each preset includes:
   - Pre-populated sample resume
   - Relevant skills for the profession
   - Professional summary template
   - Recommended template style
   - Industry-appropriate sections

3. **Customize**: Edit any field to personalize your resume

### Custom Resume

Select "Custom" to start from scratch without any preset.

## 📤 Exporting Your Resume

### Export to PDF

1. Click **Export PDF** button
2. Browser print dialog opens
3. Select "Save as PDF" as destination
4. Choose quality settings
5. Save to your computer

**Tips for Best Results:**

- Use Chrome or Edge for best PDF output
- Check "Background graphics" option
- Set margins to "None" or "Minimum"
- Ensure page size matches your selection (A4/Letter)

### Export JSON (Backup)

1. Click **Export JSON** button
2. Downloads a `.json` file with all your data
3. Keep this file as a backup
4. Import later to restore your resume

### Import JSON

1. Click **Import JSON** button
2. Select previously exported `.json` file
3. All data is restored instantly

## 🔧 Technical Details

### Technologies Used

- **HTML5**: Semantic markup for ATS compatibility
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript (ES6+)**: No frameworks or dependencies
- **localStorage API**: Offline data persistence
- **Print API**: Native browser PDF export

### Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Features

- **No Build Tools**: Works directly in browser
- **No Dependencies**: Pure vanilla JavaScript
- **No Backend**: Fully client-side application
- **Privacy-First**: All data stays in your browser
- **Offline-Capable**: Works without internet

## 🚢 Deployment

### GitHub Pages

1. **Push to GitHub**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/devresume.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select "main" branch
   - Save

3. **Access**: Your resume builder will be live at:
   ```
   https://yourusername.github.io/devresume
   ```

### Netlify

1. **Drag and Drop**:
   - Go to [netlify.com](https://netlify.com)
   - Drag the entire `devresume` folder
   - Done!

2. **Or use Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Vercel

```bash
npm install -g vercel
vercel
```

### Self-Hosting

Simply upload all files to any web server. No special configuration needed!

## 🎓 How It Works

### Architecture

**State Management** (`state.js`)

- Central store for all resume data
- Immutable updates with change notifications
- Subscriber pattern for reactive updates

**Form Handling** (`form.js`)

- Manages all form inputs
- Two-way data binding
- Dynamic repeatable sections
- Real-time validation

**Preview Rendering** (`preview.js`)

- Converts state to HTML
- Applies current template
- Sanitizes user input
- Formats dates and descriptions

**Storage** (`storage.js`)

- Autosave with debouncing
- localStorage persistence
- JSON import/export
- Error handling

**Templates** (`templates.js`)

- CSS-only template switching
- No JavaScript rendering differences
- Print-optimized styles

## 🔒 Privacy & Security

- **No Data Collection**: We don't track or collect any information
- **No Analytics**: Completely private
- **Local Storage Only**: Data never leaves your browser
- **No Server Communication**: Fully offline application
- **Open Source**: Audit the code yourself

## 🐛 Troubleshooting

### Resume Not Saving

- Check if localStorage is enabled in your browser
- Try clearing browser cache
- Ensure you're not in private/incognito mode

### PDF Export Issues

- Use Chrome or Edge for best results
- Enable "Background graphics" in print dialog
- Check print preview before saving
- Try different page size (A4 vs Letter)

### Template Not Changing

- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

## 🤝 Contributing

This is a pure vanilla JavaScript project - no build step needed!

1. Fork the repository
2. Make your changes
3. Test in multiple browsers
4. Submit a pull request

## 📜 License

MIT License - feel free to use for personal or commercial projects!

## 🌟 Credits

Built with ❤️ using pure HTML, CSS, and JavaScript.

No frameworks. No dependencies. Just good old-fashioned web development.

## 📞 Support

Having issues? Check:

1. This README for common solutions
2. Browser console for error messages
3. GitHub Issues for known problems

## 🎯 Roadmap

Future enhancements (PRs welcome!):

- [ ] More template designs
- [ ] Custom color themes
- [ ] Multi-language support
- [ ] Spell check integration
- [ ] AI-powered suggestions
- [ ] LinkedIn import
- [ ] More profession presets

---

**Made with vanilla JavaScript** 🍦

**No build tools. No frameworks. No nonsense.** 🚀
