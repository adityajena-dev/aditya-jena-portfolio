function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      description: "Languages I use for coursework and logic practice.",
      skills: ["Python", "Java", "C++", "JavaScript"]
    },
    {
      title: "Web Development",
      description: "Building responsive and accessible web interfaces.",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Problem Solving",
      description: "Core algorithms and computer science fundamentals.",
      skills: ["Data Structures", "Algorithms"]
    },
    {
      title: "Tools & Version Control",
      description: "Daily developer environment and code collaboration.",
      skills: ["VS Code", "Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <p className="eyebrow">WHAT I'M LEARNING</p>
        <h2 className="section-title">My Skills</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((group, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-card-title">{group.title}</h3>
            <p className="skill-card-desc">{group.description}</p>
            <div className="skill-tags">
              {group.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;