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
              Built and trained ML/DL models on structured datasets using Python,
              PyTorch, and TensorFlow. Tuned hyperparameters and refined model
              architecture to improve performance. Integrated trained models into
              backend systems, enabling deployment workflows.
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
              Owned database infrastructure design and optimization. Architected
              schemas, indexing strategies, and query optimizations, improving
              system performance by 35%. Triaged critical open source issues and
              reviewed community PRs. Built backup, migration, and sync pipelines
              ensuring zero data loss across deployment cycles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
