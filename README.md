# 🌟 Mood & Energy Tracker

🧘‍♀️ Track your daily mood & energy levels, visualize progress, and stay mindful. Built with Angular 17 + Tailwind CSS.

🎥 Video Walkthrough: https://drive.google.com/file/d/1yFXEKM4tmaaztftElHiU6B-0LUV2VoEy/view?usp=sharing

---

## 🚀 Features

-  **Landing Page** — modern SaaS look, responsive & animated with AOS  
-  **Dashboard** — log daily mood & energy (stored in localStorage)  
-  **Statistics** — visualize past 10–15 days energy levels using Chart.js  
-  **About / Contact Pages** — basic info, contact form (no backend)  
-  **Animations** — scroll effects with AOS, smooth route transitions with Angular Animations  
-  **Responsive Design** — works on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

- **Angular 17** (standalone components, routing, animations)
- **Tailwind CSS** (utility-first styling)
- **Chart.js** (energy trend chart)
- **AOS** (scroll animations)
- **TypeScript + LocalStorage** (data persistence)

---

## 📂 Project Structure
<pre>
src/
├─ app/
│ ├─ pages/
│ │ ├─ landing/
│ │ ├─ dashboard/
│ │ ├─ features/
│ │ ├─ about/
│ │ └─ contact/
│ ├─ shared/
│ │ ├─ navbar/
│ │ └─ footer/
│ └─ services/
│ └─ mood.service.ts
├─ assets/ # hero images, about images, contact illustration
└─ styles.css # Tailwind base + custom styles 
</pre>


---

## 💡 Notable Implementations

🗂 LocalStorage Service — MoodService keeps user logs persistent.

📊 Dynamic Charts — Chart.js updates instantly when new entries are added.

🎞 Smooth Page Transitions — Angular animations between routes.

✨ AOS Effects — fade & zoom on scroll for a polished UX.

---

🚀 Getting Started

Requirements: Node 18+, Yarn (or npm)

# Clone repository
git clone https://github.com/batuhanyigitt/Angular_Well_Being_Tracker.git
cd Angular_Well_Being_Tracker

# Install dependencies
yarn install

# Start dev server
yarn start


Your app will run at http://localhost:4200
