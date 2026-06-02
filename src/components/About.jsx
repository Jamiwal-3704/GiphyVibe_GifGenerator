export default function About() {
  return (
    <section className="animate-fade-up surface-card w-full max-w-3xl rounded-2xl bg-black/30 p-6 text-left text-slate-200">
      <h2 className="font-display mb-2 text-2xl font-bold text-white">
        About Sahil Ittan (Jamiwal)
      </h2>
      <p className="mb-4 text-sm text-slate-300">
        Results-driven Full-Stack Developer. Built this app for fun and
        learning.
      </p>

      <div className="mb-4">
        <h3 className="font-semibold">Contact</h3>
        <p className="text-sm text-slate-300">
          GitHub:{" "}
          <a
            className="text-brand-peach"
            href="https://github.com/Jamiwal-3704"
            target="_blank"
            rel="noreferrer"
          >
            Jamiwal-3704
          </a>
        </p>
        <p className="text-sm text-slate-300">
          LinkedIn:{" "}
          <a
            className="text-brand-peach"
            href="https://linkedin.com/in/sahilittan"
            target="_blank"
            rel="noreferrer"
          >
            sahilittan
          </a>
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Technologies in this project</h3>
        <ul className="list-disc pl-5 text-sm text-slate-300">
          <li>React.js (hooks)</li>
          <li>Tailwind CSS</li>
          <li>axios</li>
          <li>GIPHY API</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Professional Snapshot</h3>
        <p className="text-sm text-slate-300">
          Full-Stack Developer experienced in React, TypeScript, Tailwind,
          ASP.NET Core Web API, .NET 8, SQL Server, and Azure. Trained by
          Capgemini in enterprise .NET development and Azure deployment.
        </p>
      </div>

      <div className="text-right">
        <button
          onClick={() => (window.location.hash = "")}
          className="btn-primary-warm"
        >
          Back
        </button>
      </div>
    </section>
  );
}
