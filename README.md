# 🌟 Mood & Energy Tracker

A simple **well-being tracking web app** built with **Angular 17 + Tailwind CSS**.  
Users can log their daily mood & energy levels, add optional notes, and view statistics.

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

## 💡 Interesting Implementations

- **LocalStorage Service** — `MoodService` keeps mood logs persistent across sessions.
- **Chart.js Dynamic Update** — charts refresh automatically after new logs.
- **Angular Animations** — smooth page transitions between routes.
- **AOS** — adds elegant fade/zoom scroll effects to sections.

---

## 🚀 Run Locally

```bash
git clone https://github.com/<username>/mood-energy-tracker.git
cd mood-energy-tracker
yarn install
yarn start

