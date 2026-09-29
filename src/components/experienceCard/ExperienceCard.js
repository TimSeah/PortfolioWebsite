import React from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({ experience: item, theme }) {
  return (
    <article className="experience-list-item">
      <div className="experience-card-logo-div">
        {item.logo_path ? (
          <img
            className="experience-card-logo"
            src={require(`../../assets/images/${item.logo_path}`)}
            alt=""
          />
        ) : (
          <div
            className="experience-card-monogram"
            aria-hidden="true"
            style={{ backgroundColor: theme.highlight, color: theme.text }}
          >
            {item.logo_text}
          </div>
        )}
      </div>
      <div
        className="experience-card"
        style={{ background: theme.body, color: theme.text }}
      >
        <div className="experience-card-header-div">
          <div>
            <h3 className="experience-card-title">{item.title}</h3>
            <p className="experience-card-company">
              {item.company_url ? (
                <a
                  href={item.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.text }}
                >
                  {item.company}
                </a>
              ) : (
                item.company
              )}
            </p>
          </div>
          <div
            className="experience-card-heading-right"
            style={{ color: theme.secondaryText }}
          >
            <p className="experience-card-duration">{item.duration}</p>
            <p className="experience-card-location">{item.location}</p>
          </div>
        </div>
        {item.role_note && (
          <p
            className="experience-role-note"
            style={{ color: theme.secondaryText }}
          >
            {item.role_note}
          </p>
        )}
        <p className="experience-card-description">{item.description}</p>
        {item.bullets && (
          <ul className="experience-bullets">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        {item.detail_note && (
          <p
            className="experience-detail-note"
            style={{ color: theme.secondaryText }}
          >
            {item.detail_note}
          </p>
        )}
      </div>
    </article>
  );
}
