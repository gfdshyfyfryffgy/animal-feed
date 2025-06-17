const fs = require("fs");

const readme = `
# ${require("./package.json").name}

${require("./package.json").description || "Description coming soon."}

## 📦 Installation

\`\`\`bash
npm install
\`\`\`

## 🚀 Usage

\`\`\`bash
npm start
\`\`\`

## 📂 Project Structure

\`\`\`
src/
├── components/
├── pages/
└── App.jsx
\`\`\`

## 🛠 Built With

- React
- TailwindCSS
- React Router DOM

## ✍️ Author

[Your Name](https://github.com/your-profile)
`;

fs.writeFileSync("README.md", readme);
console.log("✅ README.md generated!");
