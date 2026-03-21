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
                <h4>Software Developer Intern</h4>
                <h5>University Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and implemented scalable REST APIs using Django for a
              campus management platform. Reduced API latency by 30% through
              database query optimization. Built structured backend workflows
              and collaborated in a four-member engineering team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Artificial Intelligence Intern</h4>
                <h5>Enginow</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Worked on core AI development using Python, PyTorch, and
              TensorFlow. Built and trained ML/DL models, performed data
              preprocessing and feature engineering. Improved model performance
              through hyperparameter tuning and integrated models into backend
              deployment workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
