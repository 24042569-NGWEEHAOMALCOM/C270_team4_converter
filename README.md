Converter Web Application (Version 2)
Project Overview

This project is a web-based unit converter application developed as part of a coursework assignment to demonstrate DevOps best practices, including automated testing, CI pipelines, and branch protection.

Version 2 extends the original application by adding new conversion features, improved usability, and automated quality gates that prevent faulty code from being merged into the main branch.

Version 2 Features
🔢 Enhanced Unit Conversions

Temperature conversion

Celsius ↔ Fahrenheit

Celsius ↔ Kelvin

Fahrenheit ↔ Kelvin

Distance conversion

Kilometres ↔ Miles

🎛 Improved User Experience

Configurable decimal precision (0–3 decimal places)

Clear buttons for temperature and distance inputs

Temperature status indicator
(e.g. Freezing, Cold, Mild, Warm, Hot)

Input validation (e.g. negative Kelvin values rejected)

🧪 Automated Testing

Unit tests implemented using Jest

Tests cover:

Standard conversions

Scientific constants (e.g. absolute zero)

Edge cases and invalid inputs

Tests run automatically on every pull request

🚀 CI & DevOps Integration

GitHub Actions pipeline executes tests on every push and pull request

Branch protection rules enforce:

Pull requests required for main

CI tests must pass before merge

Demonstrates fail-fast behaviour when incorrect code is introduced

Technology Stack

Frontend: HTML, CSS, JavaScript (Vanilla)

Testing: Jest

Version Control: Git & GitHub

CI/CD: GitHub Actions


.
├── public/
│   ├── index.html          # Application UI
│   ├── style.css           # Styling
│   ├── script.js           # UI logic & event handling
│   └── conversions.js      # Conversion logic (unit-tested)
├── tests/
│   └── conversions.test.js # Jest unit tests
├── .github/
│   └── workflows/
│       └── ci.yml          # CI pipeline definition
├── Dockerfile
├── .dockerignore
├── package.json
├── package-lock.json
├── .gitignore
└── README.md


Containerisation: Docker (Nginx)

Hosting (optional): Docker container / Vercel
