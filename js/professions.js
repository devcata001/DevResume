/**
 * Profession Presets - Profession-aware configurations
 * Defines default templates, sections, and sample data for different professions
 */

export const professions = {
    frontend: {
        title: 'Frontend Developer',
        defaultTemplate: 'modern',
        sections: ['summary', 'skills', 'experience', 'projects', 'education'],
        skills: [
            'React',
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
            'JavaScript ES6+',
            'Redux/Zustand',
            'Webpack/Vite',
            'Jest/Vitest',
            'Responsive Design',
            'Web Performance',
            'GraphQL',
            'Git'
        ],
        summaryPlaceholder: 'Results-driven Frontend Developer specializing in building high-performance, accessible web applications. Expert in React ecosystem with proven track record of improving user engagement and page load times.',
        sampleData: {
            personal: {
                fullName: 'Alex Rivera',
                jobTitle: 'Senior Frontend Developer',
                email: 'alex.rivera@email.com',
                phone: '(555) 123-4567',
                location: 'San Francisco, CA',
                website: 'https://alexrivera.dev',
                linkedin: 'https://linkedin.com/in/alexrivera',
                github: 'https://github.com/alexrivera'
            },
            summary: 'Senior Frontend Developer with 6+ years of experience building performant, user-centric web applications used by millions. Specialized in React, TypeScript, and modern web technologies. Proven track record of reducing load times by 60%, increasing conversion rates by 40%, and mentoring teams to deliver pixel-perfect, accessible UIs.',
            experience: [
                {
                    id: 1,
                    company: 'TechCorp (Fortune 500)',
                    position: 'Senior Frontend Developer',
                    location: 'San Francisco, CA',
                    startDate: '2021-03',
                    endDate: '',
                    current: true,
                    description: 'Lead frontend development for SaaS platform serving 2M+ users\n• Architected micro-frontend architecture reducing deployment time from 45min to 8min\n• Improved Core Web Vitals scores by 65% through code splitting, lazy loading, and image optimization\n• Built reusable component library (50+ components) used across 8 product teams\n• Implemented real-time collaboration features using WebSockets increasing user engagement by 35%\n• Reduced bundle size by 40% through tree-shaking and dynamic imports\n• Mentored 3 junior developers, conducting weekly code reviews and pair programming sessions'
                },
                {
                    id: 2,
                    company: 'StartupX (Series B)',
                    position: 'Frontend Developer',
                    location: 'Remote',
                    startDate: '2019-01',
                    endDate: '2021-02',
                    current: false,
                    description: 'Built customer-facing e-commerce platform from ground up\n• Developed responsive React/Redux application handling 50K daily active users\n• Achieved 95+ Lighthouse score through performance optimization and accessibility best practices\n• Implemented A/B testing framework resulting in 28% increase in conversion rate\n• Integrated Stripe payment processing with 99.9% uptime\n• Reduced cart abandonment by 22% through optimized checkout flow'
                },
                {
                    id: 3,
                    company: 'Digital Agency',
                    position: 'Junior Frontend Developer',
                    location: 'Los Angeles, CA',
                    startDate: '2018-06',
                    endDate: '2018-12',
                    current: false,
                    description: 'Delivered client websites and web applications\n• Built 15+ responsive websites for clients across various industries\n• Implemented pixel-perfect designs with HTML5, CSS3, and JavaScript\n• Collaborated with UX designers using Figma and Adobe XD'
                }
            ],
            education: [
                {
                    id: 1,
                    school: 'University of California, Berkeley',
                    degree: 'Bachelor of Science',
                    field: 'Computer Science',
                    location: 'Berkeley, CA',
                    startDate: '2014-09',
                    endDate: '2018-05',
                    description: 'GPA: 3.8/4.0 • Focus: Web Technologies and Human-Computer Interaction'
                }
            ],
            projects: [
                {
                    id: 1,
                    name: 'Component Library (Open Source)',
                    description: 'Featured React component library with 5K+ GitHub stars, 200K+ weekly npm downloads. Fully accessible, themeable, and tree-shakeable.',
                    url: 'https://github.com/alexrivera/ui-lib',
                    technologies: 'React, TypeScript, Tailwind, Storybook, Vitest'
                },
                {
                    id: 2,
                    name: 'DevTools Chrome Extension',
                    description: 'Performance monitoring extension with 10K+ active users. Visualizes Core Web Vitals and provides optimization suggestions.',
                    url: 'https://chrome.google.com/webstore/devtools-pro',
                    technologies: 'JavaScript, Chrome Extensions API, D3.js'
                }
            ]
        }
    },

    backend: {
        title: 'Backend Developer',
        defaultTemplate: 'minimal',
        sections: ['summary', 'skills', 'experience', 'education', 'certifications'],
        skills: [
            'Python',
            'Node.js',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'Docker',
            'Kubernetes',
            'AWS/GCP',
            'Microservices',
            'GraphQL/REST',
            'RabbitMQ/Kafka',
            'CI/CD'
        ],
        summaryPlaceholder: 'Backend Developer with expertise in building scalable, high-performance APIs and distributed systems. Proven ability to optimize database queries and architect solutions handling millions of requests daily.',
        sampleData: {
            personal: {
                fullName: 'Sarah Chen',
                jobTitle: 'Senior Backend Engineer',
                email: 'sarah.chen@email.com',
                phone: '(555) 234-5678',
                location: 'Seattle, WA',
                website: 'https://sarahchen.dev',
                linkedin: 'https://linkedin.com/in/sarahchen',
                github: 'https://github.com/sarahchen'
            },
            summary: 'Senior Backend Engineer with 7+ years of experience designing and implementing highly scalable distributed systems. Expert in microservices architecture, database optimization, and cloud infrastructure. Track record of reducing API response times by 75%, cutting infrastructure costs by 40%, and building systems that process 50M+ requests daily.',
            experience: [
                {
                    id: 1,
                    company: 'Amazon Web Services',
                    position: 'Senior Backend Engineer',
                    location: 'Seattle, WA',
                    startDate: '2021-01',
                    endDate: '',
                    current: true,
                    description: 'Design and implement backend services for AWS cloud platform\n• Architected event-driven microservices architecture processing 50M+ daily events with 99.99% uptime\n• Reduced API latency from 800ms to 120ms through query optimization and caching strategies\n• Implemented distributed tracing and monitoring reducing MTTR by 60%\n• Built auto-scaling infrastructure handling 10x traffic spikes during peak hours\n• Cut AWS costs by 35% through resource optimization and reserved instance planning\n• Led team of 5 engineers in migrating monolith to microservices architecture'
                },
                {
                    id: 2,
                    company: 'Stripe',
                    position: 'Backend Engineer',
                    location: 'San Francisco, CA',
                    startDate: '2019-03',
                    endDate: '2020-12',
                    current: false,
                    description: 'Built payment processing infrastructure supporting billions in transactions\n• Developed highly resilient payment APIs with 99.999% availability SLA\n• Implemented idempotency and retry mechanisms preventing duplicate charges\n• Optimized PostgreSQL queries reducing database load by 50%\n• Built real-time notification system using Kafka processing 1M+ events/minute\n• Achieved PCI DSS Level 1 compliance through security best practices'
                },
                {
                    id: 3,
                    company: 'Tech Startup',
                    position: 'Backend Developer',
                    location: 'Austin, TX',
                    startDate: '2017-08',
                    endDate: '2019-02',
                    current: false,
                    description: 'Developed RESTful APIs for mobile and web applications\n• Built GraphQL API serving 100K+ daily active users\n• Implemented JWT authentication and role-based access control\n• Set up CI/CD pipelines with automated testing and deployment\n• Reduced deployment time from 2 hours to 15 minutes'
                }
            ],
            education: [
                {
                    id: 1,
                    school: 'Stanford University',
                    degree: 'Master of Science',
                    field: 'Computer Science',
                    location: 'Stanford, CA',
                    startDate: '2015-09',
                    endDate: '2017-06',
                    description: 'GPA: 3.9/4.0 • Specialization: Distributed Systems and Database Design'
                }
            ],
            certifications: [
                {
                    id: 1,
                    name: 'AWS Certified Solutions Architect - Professional',
                    issuer: 'Amazon Web Services',
                    date: '2022-03',
                    url: ''
                },
                {
                    id: 2,
                    name: 'MongoDB Certified Developer Associate',
                    issuer: 'MongoDB University',
                    date: '2020-11',
                    url: ''
                }
            ]
        }
    },

    fullstack: {
        title: 'Full Stack Developer',
        defaultTemplate: 'modern',
        sections: ['summary', 'skills', 'experience', 'projects', 'education'],
        skills: [
            'React/Next.js',
            'Node.js/Express',
            'TypeScript',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'Docker/Kubernetes',
            'AWS/Azure',
            'GraphQL/REST',
            'TailwindCSS',
            'Git/CI-CD',
            'Jest/Cypress'
        ],
        summaryPlaceholder: 'Full Stack Developer experienced in building end-to-end web applications. Proven ability to architect scalable solutions from database design to responsive UIs, with expertise in modern JavaScript frameworks and cloud deployment.',
        sampleData: {
            personal: {
                fullName: 'Marcus Johnson',
                jobTitle: 'Senior Full Stack Developer',
                email: 'marcus.johnson@email.com',
                phone: '(555) 345-6789',
                location: 'Austin, TX',
                website: 'https://marcusjohnson.dev',
                linkedin: 'https://linkedin.com/in/marcusjohnson',
                github: 'https://github.com/marcusj'
            },
            summary: 'Senior Full Stack Developer with 6+ years building production-ready web applications from concept to deployment. Expert in React, Node.js, and cloud architecture. Successfully delivered 20+ projects serving 5M+ users, with focus on performance, security, and scalability. Reduced development costs by 45% through efficient architecture decisions.',
            experience: [
                {
                    id: 1,
                    company: 'Shopify',
                    position: 'Senior Full Stack Developer',
                    location: 'Remote',
                    startDate: '2021-06',
                    endDate: '',
                    current: true,
                    description: 'Build merchant-facing tools and internal platforms\n• Developed Next.js dashboard handling 500K+ merchants with sub-200ms load times\n• Architected Node.js microservices processing $2B+ in annual transactions\n• Reduced infrastructure costs by 40% through serverless architecture migration\n• Built real-time inventory sync system processing 10M+ updates daily\n• Implemented OAuth 2.0 and webhook systems used by 5K+ third-party apps\n• Improved test coverage from 45% to 92% through comprehensive E2E testing'
                },
                {
                    id: 2,
                    company: 'FinTech Startup (Acquired)',
                    position: 'Full Stack Developer',
                    location: 'San Francisco, CA',
                    startDate: '2019-02',
                    endDate: '2021-05',
                    current: false,
                    description: 'Built financial management platform from MVP to 100K users (led to acquisition)\n• Developed React/Node.js application with Plaid integration for bank connectivity\n• Implemented real-time transaction categorization using machine learning APIs\n• Built analytics dashboard with D3.js visualizing spending patterns\n• Achieved SOC 2 Type II compliance through security audit and remediation\n• Scaled infrastructure to handle 50x user growth in 6 months\n• Reduced API response times by 70% through database indexing and caching'
                },
                {
                    id: 3,
                    company: 'Digital Agency',
                    position: 'Full Stack Developer',
                    location: 'Austin, TX',
                    startDate: '2018-06',
                    endDate: '2019-01',
                    current: false,
                    description: 'Delivered custom web applications for enterprise clients\n• Built e-commerce platforms with Stripe integration processing $10M+ annually\n• Developed CMS systems with React admin panels and headless architecture\n• Implemented responsive designs supporting 5K+ concurrent users'
                }
            ],
            education: [
                {
                    id: 1,
                    school: 'University of Texas at Austin',
                    degree: 'Bachelor of Science',
                    field: 'Computer Science',
                    location: 'Austin, TX',
                    startDate: '2014-09',
                    endDate: '2018-05',
                    description: 'GPA: 3.7/4.0 • Relevant Coursework: Web Development, Database Systems, Software Engineering'
                }
            ],
            projects: [
                {
                    id: 1,
                    name: 'DevConnect (Open Source)',
                    description: 'Developer networking platform with 15K+ users. Features include real-time chat, project collaboration, and skill matching algorithm.',
                    url: 'https://github.com/marcusj/devconnect',
                    technologies: 'Next.js, Node.js, PostgreSQL, WebSocket, Redis, Docker'
                },
                {
                    id: 2,
                    name: 'SaaS Boilerplate',
                    description: 'Production-ready SaaS starter with 8K+ GitHub stars. Includes auth, billing, admin dashboard, and multi-tenancy.',
                    url: 'https://github.com/marcusj/saas-starter',
                    technologies: 'TypeScript, Next.js, Prisma, Stripe, TailwindCSS'
                }
            ]
        }
    },

    appsec: {
        title: 'Application Security Engineer',
        defaultTemplate: 'classic',
        sections: ['summary', 'skills', 'experience', 'certifications', 'education'],
        skills: [
            'Penetration Testing',
            'Burp Suite Pro',
            'OWASP Top 10',
            'Secure Code Review',
            'SAST/DAST/IAST',
            'Threat Modeling',
            'Python/Bash',
            'Bug Bounty',
            'AWS/Cloud Security',
            'CI/CD Security',
            'API Security',
            'Cryptography'
        ],
        summaryPlaceholder: 'Application Security Engineer with expertise in offensive security, secure code review, and building security automation. Proven track record of identifying and mitigating critical vulnerabilities before they reach production.',
        sampleData: {
            personal: {
                fullName: 'Jordan Rivera',
                jobTitle: 'Senior Application Security Engineer',
                email: 'jordan.rivera@email.com',
                phone: '(555) 456-7890',
                location: 'New York, NY',
                website: 'https://jordanrivera.security',
                linkedin: 'https://linkedin.com/in/jordanrivera',
                github: 'https://github.com/jrivera'
            },
            summary: 'Senior Application Security Engineer with 7+ years securing web applications, APIs, and cloud infrastructure. Expert penetration tester with OSCP, OSWE certifications. Discovered 500+ vulnerabilities through bug bounty programs, earning $150K+ in rewards. Reduced security incidents by 85% through proactive security automation and developer training.',
            experience: [
                {
                    id: 1,
                    company: 'Meta (Facebook)',
                    position: 'Senior Application Security Engineer',
                    location: 'New York, NY',
                    startDate: '2021-02',
                    endDate: '',
                    current: true,
                    description: 'Secure critical infrastructure supporting 3B+ users\n• Conduct security assessments on high-impact services processing PII for millions of users\n• Discovered and remediated 15+ critical vulnerabilities including RCE, SQL injection, and authentication bypasses\n• Built automated security testing framework reducing manual testing time by 70%\n• Implemented runtime application self-protection (RASP) preventing 50K+ attacks monthly\n• Led secure code training program for 200+ engineers, reducing security bugs by 60%\n• Performed threat modeling for new features identifying risks before development'
                },
                {
                    id: 2,
                    company: 'Coinbase',
                    position: 'Application Security Engineer',
                    location: 'San Francisco, CA',
                    startDate: '2019-01',
                    endDate: '2021-01',
                    current: false,
                    description: 'Secured cryptocurrency exchange handling $6B+ in daily transactions\n• Performed penetration testing on web apps, APIs, and smart contracts\n• Integrated SAST/DAST tools into CI/CD pipeline catching 90% of vulnerabilities pre-production\n• Achieved SOC 2 Type II and ISO 27001 compliance through security controls implementation\n• Developed secure coding guidelines adopted company-wide\n• Responded to security incidents with average MTTR of 2 hours\n• Participated in HackerOne bug bounty program, validating and triaging reports'
                },
                {
                    id: 3,
                    company: 'Freelance Security Researcher',
                    position: 'Bug Bounty Hunter',
                    location: 'Remote',
                    startDate: '2017-06',
                    endDate: '2018-12',
                    current: false,
                    description: 'Found critical vulnerabilities for Fortune 500 companies\n• Earned $80K through HackerOne and Bugcrowd discovering XSS, IDOR, and authentication flaws\n• Ranked in top 100 researchers on HackerOne platform\n• Disclosed vulnerabilities responsibly to Google, Microsoft, Apple, and others'
                }
            ],
            education: [
                {
                    id: 1,
                    school: 'Georgia Institute of Technology',
                    degree: 'Master of Science',
                    field: 'Cybersecurity',
                    location: 'Atlanta, GA',
                    startDate: '2015-09',
                    endDate: '2017-05',
                    description: 'GPA: 3.9/4.0 • Focus: Offensive Security and Cryptography'
                }
            ],
            certifications: [
                {
                    id: 1,
                    name: 'Offensive Security Web Expert (OSWE)',
                    issuer: 'Offensive Security',
                    date: '2022-06',
                    url: ''
                },
                {
                    id: 2,
                    name: 'Offensive Security Certified Professional (OSCP)',
                    issuer: 'Offensive Security',
                    date: '2020-03',
                    url: ''
                },
                {
                    id: 3,
                    name: 'Certified Ethical Hacker (CEH)',
                    issuer: 'EC-Council',
                    date: '2018-08',
                    url: ''
                }
            ]
        }
    },

    devops: {
        title: 'DevOps Engineer',
        defaultTemplate: 'minimal',
        sections: ['summary', 'skills', 'experience', 'certifications', 'education'],
        skills: [
            'Kubernetes',
            'Docker',
            'Terraform/IaC',
            'AWS/GCP/Azure',
            'CI/CD (Jenkins/GitLab)',
            'Python/Bash',
            'Prometheus/Grafana',
            'ELK Stack',
            'Ansible',
            'GitOps',
            'Linux Administration',
            'Networking'
        ],
        summaryPlaceholder: 'DevOps Engineer specializing in infrastructure automation, container orchestration, and CI/CD pipelines. Proven ability to reduce deployment times, improve system reliability, and optimize cloud costs.',
        sampleData: {
            personal: {
                fullName: 'Taylor Anderson',
                jobTitle: 'Senior DevOps Engineer',
                email: 'taylor.anderson@email.com',
                phone: '(555) 567-8901',
                location: 'Denver, CO',
                linkedin: 'https://linkedin.com/in/tayloranderson',
                github: 'https://github.com/tanderson'
            },
            summary: 'Senior DevOps Engineer with 6+ years building and maintaining highly available infrastructure at scale. Expert in Kubernetes, AWS, and infrastructure as code. Reduced deployment time by 85%, achieved 99.99% uptime, and cut cloud costs by 50% through automation and optimization. Passionate about DevSecOps and platform engineering.',
            experience: [
                {
                    id: 1,
                    company: 'Netflix',
                    position: 'Senior DevOps Engineer',
                    location: 'Los Angeles, CA',
                    startDate: '2021-04',
                    endDate: '',
                    current: true,
                    description: 'Ensure reliability and performance of streaming platform serving 230M+ subscribers\n• Manage 500+ Kubernetes clusters across multi-cloud infrastructure (AWS, GCP)\n• Reduced deployment time from 2 hours to 12 minutes through GitOps automation\n• Built self-service platform enabling 1000+ developers to deploy independently\n• Implemented chaos engineering practices improving system resilience by 40%\n• Optimized cloud spending saving $2M+ annually through right-sizing and spot instances\n• Achieved 99.99% uptime SLA through enhanced monitoring and auto-remediation'
                },
                {
                    id: 2,
                    company: 'HashiCorp',
                    position: 'DevOps Engineer',
                    location: 'Remote',
                    startDate: '2019-06',
                    endDate: '2021-03',
                    current: false,
                    description: 'Built and maintained infrastructure for Terraform Cloud and Vault\n• Automated infrastructure provisioning with Terraform reducing setup time by 90%\n• Implemented comprehensive monitoring with Prometheus, Grafana, and PagerDuty\n• Built CI/CD pipelines processing 500+ deployments daily with zero-downtime\n• Migrated legacy VMs to containerized workloads on Kubernetes\n• Implemented security scanning in CI/CD catching vulnerabilities before production\n• Mentored junior engineers on DevOps best practices and tooling'
                },
                {
                    id: 3,
                    company: 'Tech Startup',
                    position: 'DevOps Engineer',
                    location: 'Austin, TX',
                    startDate: '2018-02',
                    endDate: '2019-05',
                    current: false,
                    description: 'Built infrastructure from scratch for early-stage startup\n• Designed and implemented AWS architecture supporting 100K+ users\n• Set up Kubernetes cluster with Helm charts for application deployment\n• Implemented backup and disaster recovery procedures with RTO < 1 hour\n• Built logging and monitoring stack with ELK and CloudWatch'
                }
            ],
            education: [
                {
                    id: 1,
                    school: 'University of Colorado Boulder',
                    degree: 'Bachelor of Science',
                    field: 'Computer Science',
                    location: 'Boulder, CO',
                    startDate: '2014-09',
                    endDate: '2018-05',
                    description: 'GPA: 3.6/4.0 • Focus: Distributed Systems and Networking'
                }
            ],
            certifications: [
                {
                    id: 1,
                    name: 'Certified Kubernetes Administrator (CKA)',
                    issuer: 'Cloud Native Computing Foundation',
                    date: '2023-01',
                    url: ''
                },
                {
                    id: 2,
                    name: 'AWS Certified Solutions Architect - Professional',
                    issuer: 'Amazon Web Services',
                    date: '2022-08',
                    url: ''
                },
                {
                    id: 3,
                    name: 'HashiCorp Certified: Terraform Associate',
                    issuer: 'HashiCorp',
                    date: '2021-11',
                    url: ''
                }
            ]
        }
    },

    dataengineer: {
        title: 'Data Engineer',
        defaultTemplate: 'modern',
        sections: ['summary', 'skills', 'experience', 'projects', 'education'],
        skills: [
            'Python/PySpark',
            'Apache Spark',
            'Apache Airflow',
            'SQL/NoSQL',
            'AWS/GCP/Azure',
            'Snowflake/Redshift',
            'Data Modeling',
            'ETL/ELT',
            'Kafka/Streaming',
            'dbt',
            'Docker/Kubernetes',
            'Data Quality'
        ],
        summaryPlaceholder: 'Data Engineer specializing in building scalable data pipelines and warehouses. Expert in big data technologies, ETL/ELT processes, and cloud data platforms. Proven track record of processing petabytes of data and enabling data-driven decision making.',
        sampleData: {
            personal: {
                fullName: 'Priya Patel',
                jobTitle: 'Senior Data Engineer',
                email: 'priya.patel@email.com',
                phone: '(555) 678-9012',
                location: 'Chicago, IL',
                linkedin: 'https://linkedin.com/in/priyapatel',
                github: 'https://github.com/ppatel'
            },
            summary: 'Senior Data Engineer with 6+ years building enterprise-scale data infrastructure. Expert in Apache Spark, Airflow, and cloud data warehousing. Designed and implemented pipelines processing 10TB+ daily, reduced query times by 80%, and enabled real-time analytics for business-critical decisions. Strong focus on data quality and governance.',
            experience: [
                {
                    id: 1,
                    company: 'Uber',
                    position: 'Senior Data Engineer',
                    location: 'San Francisco, CA',
                    startDate: '2021-07',
                    endDate: '',
                    current: true,
                    description: 'Build data infrastructure supporting millions of daily trips\n• Architected real-time data pipeline processing 15TB+ daily across 10K+ cities\n• Reduced data latency from hours to minutes enabling real-time pricing optimization\n• Built data quality framework catching 99% of issues before production\n• Optimized Spark jobs reducing compute costs by 60% through partitioning and caching\n• Migrated legacy ETL to modern ELT architecture improving reliability by 95%\n• Designed dimensional models for data warehouse serving 500+ analysts and data scientists'
                },
                {
                    id: 2,
                    company: 'Airbnb',
                    position: 'Data Engineer',
                    location: 'San Francisco, CA',
                    startDate: '2019-03',
                    endDate: '2021-06',
                    current: false,
                    description: 'Built data pipelines for marketplace analytics and ML models\n• Developed Airflow DAGs orchestrating 200+ data workflows with 99.9% reliability\n• Implemented CDC (Change Data Capture) streaming millions of database changes to data lake\n• Built feature store powering personalization ML models improving booking rate by 25%\n• Migrated on-prem Hadoop cluster to Snowflake saving $500K annually\n• Created self-service data platform enabling non-technical users to access data\n• Implemented data lineage and cataloging with Apache Atlas'
                },
                {
                    id: 3,
                    company: 'Financial Services Firm',
                    position: 'Junior Data Engineer',
                    location: 'New York, NY',
                    startDate: '2018-06',
                    endDate: '2019-02',
                    current: false,
                    description: 'Maintained ETL pipelines for risk analytics\n• Built Python ETL scripts processing financial data from multiple sources\n• Optimized SQL queries in Teradata reducing runtime by 70%\n• Created data validation tests ensuring regulatory compliance'
                }
            ],
            education: [
                {
                    id: 1,
                    school: 'Northwestern University',
                    degree: 'Master of Science',
                    field: 'Data Science',
                    location: 'Evanston, IL',
                    startDate: '2016-09',
                    endDate: '2018-05',
                    description: 'GPA: 3.8/4.0 • Thesis: Scalable Machine Learning on Distributed Systems'
                }
            ],
            projects: [
                {
                    id: 1,
                    name: 'Open Source ETL Framework',
                    description: 'Python library for building type-safe, testable data pipelines. 3K+ GitHub stars, used by 50+ companies.',
                    url: 'https://github.com/ppatel/data-pipeline-lib',
                    technologies: 'Python, PySpark, Airflow, Docker'
                },
                {
                    id: 2,
                    name: 'Real-time Analytics Dashboard',
                    description: 'End-to-end streaming analytics platform processing 1M+ events/second with <100ms latency.',
                    url: 'https://github.com/ppatel/realtime-analytics',
                    technologies: 'Kafka, Flink, ClickHouse, Grafana'
                }
            ]
        }
    }
};

/**
 * Get profession configuration
 */
export const getProfession = (professionKey) => {
    return professions[professionKey] || null;
};

/**
 * Get all profession keys
 */
export const getProfessionKeys = () => {
    return Object.keys(professions);
};
