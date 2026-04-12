# 📝 How to Update Your Portfolio

All your portfolio content lives in **one single file**:
```
src/data/portfolioData.js
```
Open that file and edit the sections below. No other file needs to be touched!

---

## ➕ Adding a New Project

Find the `projects` array and add a new object:

```js
{
  title: "My New Project",
  subtitle: "What It Does in Short",
  description: "A more detailed description of the project.",
  techStack: ["React", "Node.js", "MongoDB"],
  image: require('../assets/img/my-project.png'),  // put image in src/assets/img/
  liveLink: "https://my-project.com",
  githubLink: "https://github.com/AkshayTayade21/my-project",
  featured: true,
},
```
> To add a project image, save it in `src/assets/img/` and use `require('../assets/img/filename.png')`.

---

## 🎓 Adding a Certificate

Find the `certificates` array:

```js
{
  title: "React Developer Certification",
  issuer: "Meta / Coursera",
  date: "June 2025",
  credentialId: "ABC-12345",
  credentialLink: "https://coursera.org/verify/ABC-12345",
  image: require('../assets/img/cert-react.png'),   // optional screenshot
  skills: ["React", "JavaScript", "Hooks"],
},
```

---

## 💼 Adding Work Experience

Find the `experiences` array:

```js
{
  role: "Junior Software Engineer",
  company: "Tech Company Ltd.",
  location: "Pune, India",
  startDate: "Apr 2025",
  endDate: "Present",
  type: "Full-time",
  description: "Working on the frontend team building customer-facing features.",
  points: [
    "Built 5+ reusable React components used across the platform",
    "Reduced page load time by 30% through code splitting",
  ],
  techStack: ["React", "TypeScript", "Node.js"],
},
```

---

## 🛠 Updating Personal Info

Edit the `personalInfo` object at the top of the file:
- Name, bio, email, phone, location
- Social links (LinkedIn, GitHub, Instagram)

---

## 🖥 Running the Project

```bash
npm install
npm start
```
