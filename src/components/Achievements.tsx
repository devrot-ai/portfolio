import { MdEmojiEvents, MdGroups } from "react-icons/md";
import "./styles/Achievements.css";

const hackathons = [
  {
    title: "Finalist",
    event: "Quanthon Hackathon, IIT Madras",
  },
  {
    title: "Top Finalist",
    event: "DRONE4S Hackathon, IIT Roorkee",
  },
  {
    title: "Finalist",
    event: "Multi-Modal AI Hackathon, IIT Mandi",
  },
  {
    title: "Semi-Finalist",
    event: "Composio Hackathon, IIT Delhi",
  },
  {
    title: "Participant",
    event: "Google Hackspace, GDG Cloud Noida & GDG Noida",
  },
];

const leadership = [
  {
    title: "Mentor",
    org: "Social Winter of Code",
  },
  {
    title: "Mentor",
    org: "Elite Coder Winter of Code",
  },
  {
    title: "Core Contributor",
    org: "Bennett University Coding Club",
  },
  {
    title: "Member",
    org: "AI Community Delhi & GDG Cloud Noida / GDG New Delhi",
  },
];

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <h2>
        Achievements <span>&</span>
        <br />
        Leadership
      </h2>
      <div className="achievements-container">
        <div className="achievements-column">
          <h3>Hackathons</h3>
          {hackathons.map((item, index) => (
            <div className="achievement-item" key={index}>
              <div className="achievement-icon hackathon">
                <MdEmojiEvents />
              </div>
              <div className="achievement-text">
                <h4>{item.title}</h4>
                <h5>{item.event}</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="achievements-column">
          <h3>Leadership</h3>
          {leadership.map((item, index) => (
            <div className="achievement-item" key={index}>
              <div className="achievement-icon leadership">
                <MdGroups />
              </div>
              <div className="achievement-text">
                <h4>{item.title}</h4>
                <h5>{item.org}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
