import { Link, Route, Routes } from 'react-router-dom';

const features = [
  ['Store', 'Keep notes and learning materials in one place.'],
  ['Understand', 'Use focused explanations and AI-assisted study support.'],
  ['Practice', 'Turn your material into tasks and quizzes.'],
  ['Track', 'See progress and identify your next best action.'],
  ['Improve', 'Build consistent habits with a clear weekly plan.']
];

function Dashboard() {
  return (
    <main className="dashboard">
      <p className="eyebrow">Your learning workspace</p>
      <h1>Study smarter, one focused session at a time.</h1>
      <p className="lead">StudyBuddy brings your materials, practice, planning, and progress into a single learning cycle.</p>
      <div className="feature-grid">
        {features.map(([title, text]) => (
          <article className="feature-card" key={title}>
            <span>{title}</span>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <section className="next-card">
        <div><p className="eyebrow">Next step</p><h2>Build your first study plan</h2><p>Add backend authentication, materials, planner, quiz, progress, and AI modules incrementally.</p></div>
        <Link className="button" to="/about">View foundation</Link>
      </section>
    </main>
  );
}

function About() {
  return <main className="dashboard"><p className="eyebrow">Foundation</p><h1>Store → Understand → Practice → Track → Improve</h1><p className="lead">This initial release establishes the React frontend and Express API foundation. Future phases add secure authentication, MongoDB models, Cloudinary uploads, planner workflows, quizzes, progress analytics, and AI features.</p><Link className="button" to="/">Back to dashboard</Link></main>;
}

export default function App() {
  return <div className="app-shell"><header className="topbar"><Link className="brand" to="/">Study<span>Buddy</span></Link><nav><Link to="/">Dashboard</Link><Link to="/about">About</Link></nav></header><Routes><Route path="/" element={<Dashboard />} /><Route path="/about" element={<About />} /></Routes></div>;
}
