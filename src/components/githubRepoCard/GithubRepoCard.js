import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";

export default function GithubRepoCard({ repo, theme }) {
  const links =
    repo.links || (repo.url ? [{ label: "View project", url: repo.url }] : []);
  return (
    <article
      className="repo-card-div"
      style={{ backgroundColor: theme.highlight, color: theme.text }}
    >
      {repo.result && <p className="project-result">{repo.result}</p>}
      <h3 className="repo-name">{repo.name}</h3>
      {repo.role && (
        <p className="project-role" style={{ color: theme.secondaryText }}>
          {repo.role}
        </p>
      )}
      <p className="repo-description">{repo.description}</p>
      {repo.note && (
        <p className="project-note" style={{ color: theme.secondaryText }}>
          {repo.note}
        </p>
      )}
      {repo.tags && (
        <ul className="project-tags" aria-label="Technologies">
          {repo.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      <div className="repo-details">
        <p
          className="repo-creation-date"
          style={{ color: theme.secondaryText }}
        >
          {repo.period ||
            (repo.createdAt ? `Created ${repo.createdAt.split("T")[0]}` : "")}
        </p>
        {repo.languages && <ProjectLanguages logos={repo.languages} />}
      </div>
      <div className="project-links">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: theme.text }}
          >
            {link.label}
            <span aria-hidden="true"> ↗</span>
            <span className="project-sr-only">
              {" "}
              for {repo.name} (opens in a new tab)
            </span>
          </a>
        ))}
      </div>
    </article>
  );
}
