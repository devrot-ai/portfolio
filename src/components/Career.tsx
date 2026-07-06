import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Artificial Intelligence Intern</h4>
                <h5>Enginow</h5>
              </div>
              <h3>Jan – Feb 2026</h3>
            </div>
            <p>
              Worked on core AI development using Python, PyTorch, and
              TensorFlow. Built and trained ML/DL models, performed data
              preprocessing and feature engineering. Improved model performance
              through hyperparameter tuning and integrated models into backend
              deployment workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Database Administrator & Open Source Contributor</h4>
                <h5>ASSOIE – Open Source Organization</h5>
              </div>
              <h3>Jan – Jun 2026</h3>
            </div>
            <p>
              Architected database schemas, indexing strategies, and query
              optimizations improving system performance by 35%. Led triage and
              resolution of critical open source issues, reviewing PRs and
              ensuring code quality. Established data backup, migration, and
              sync pipelines ensuring zero data loss across deployments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
