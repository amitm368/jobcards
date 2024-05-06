import React from 'react';
import './CardComponent.css';
import Description from './Description';

const CardComponent = ({ job }) => {
    const aboutCompany = "";
  
  const aboutRole = [
    {
      heading: "Responsibilities",
      content: "Software development, design & architecture experience in building enterprise-grade software applicationsDevelopment in Python, Microservices, and REST API while providing expertise in the full software development lifecycle, from concept and design to testing, designing, developing, and delivering high-volume, low-latency applications for mission-critical systems.Write well-designed, testable, efficient codeEnsure designs follow specifications and deliver superior engineering outcomes.Support continuous improvement by investigating alternatives and technologies and presenting these for architectural reviewWork in a team environment and mentor the junior team members.Honing individual engineering competency using the available enablement programsActive team participation and good communication skills.Engage in team leadership and people management.Experience with Atlassian tooling such as Jira and Confluence preferred"
    },
    {
      heading: "Qualifications",
      content: "Candidate should have 10+ years of hands-on experience in Full stack development technology on Python, microservice,Candidate should have a proven work experience in technologies like Python and platforms including Spring framework & components, Python Scripting, and Messaging Web Services and enhance the application based on the requirement.Candidate should have hands-on experience with Web Stack including Python, JavaScript, CSS, JSON, React, Angular JS, or a similar framework.Candidate should have hands-on experience with mobile development React Native and associated testing tools.The candidate knows Agile, SQL, Python, and Kafka, and will be an added advantage.Knowledge of cloud application deployment is a plus; AWS experience is preferred.Knowledge of application security including information security principles & realization, web app security.Knowledge of DevOps tools for configuration scripting and environment automation is preferred.Previous experience of programming with OS-level scripting (bash), and XML transformations (XPATH and XSLT) with Python coding language.Working knowledge of code integration platforms such as Git, GitLab, or SVN."
    },
    {
      heading: "Required Skills",
      content: "Python and JavaScriptKafkaMicroservices architectureJavaScript Script Frameworks like Angular or React/ React NativeREST APIs, CSS, JSONSkills: json,git,python,microservices,python scripting,design & architecture,devops tools,spring framework,gitlab,messaging web services,svn,react,full stack development,application security,agile,kubernetes,javascript frameworks,django,microservices architecture,rest apis,react native,flask,os-level scripting,sql,angular js,rest api,web stack,software development,aws,xml transformations,javascript,css,docker,kafka"
    }
  ];
  return (
    <div className="card-body">
      <div className="card-header">
        <div className="posted-info">
          <p>⏳ Posted 11 days ago</p>
        </div>
      </div>
      <div className="card-content">
        <div className="company-details">
          <div className="company-logo">
            <img src={job.logoUrl} alt="Company Logo" />
          </div>
          <div className="info-container">
            <h3>{job.companyName}</h3>
            <h4>{job.jobRole}</h4>
            {/* capitalize first letter of job location */}
            <p>{job.location.charAt(0).toUpperCase() + job.location.slice(1)}</p>
          </div>
        </div>
        {/* if salaryCurrencyCode is USD then show $ symbol otherwise show inr symbol */}
        <p className="card-salary">Estimated Salary: {job.salaryCurrencyCode === 'USD' ? `$${job.maxJdSalary}`: `${job.maxJdSalary}₹`} <span aria-label="Offered salary range" role="img">✅</span></p>
         <div className='job-description'>
            {/* render description component */}
         <Description aboutCompany={aboutCompany} aboutRole={aboutRole} />
        </div> 
        <div className="minimum-exp">
          <p>Minimum Experience</p>
          {/* if minExp is null show static message  */}
          <p>{job.minExp ? job.minExp : 'Min Experience not Available'}</p>
        </div>
      </div>
      <div className="status-container">
        <div className="buttons">
          <button className="apply-btn">⚡ Easy Apply</button>
          <button className="referral-btn">
  <div className="referral-content">
    <div className="referral-avatars">
      <img src='https://th.bing.com/th?id=OIP.fOv6ouhkS2VpfREGfiAbjgAAAA&w=275&h=227&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' alt="Avatar" className="blurred-avatar" />
      <img src='https://th.bing.com/th/id/OIP.aMrXppKRuvRyJoicXx3uxgHaHa?w=203&h=202&c=7&r=0&o=5&pid=1.7' alt="Avatar" className="blurred-avatar" />
    </div>
    <p className="unlock-text">Unlock referral asks</p>
  </div>
</button>

        </div>
      </div>
    </div>
  );
};

export default CardComponent;
