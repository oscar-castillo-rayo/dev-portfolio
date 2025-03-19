interface WorkExperienceProps {
  startYear: string;
  endYear: string;
  startMonth: string;
  endMmonth: string;
  company: string;
  position: string;
  description: string;
}

const WorkExperience = ({
  endYear,
  startYear,
  startMonth,
  endMmonth,
  company,
  position,
  description,
}: WorkExperienceProps) => {
  return (
    <div className="grid grid-cols-12 gap-4 max-w-7xl w-full experience-content">
      <div className="col-span-12 md:col-span-4">
        <div className="cv-heading">
          <h3 className="date-experience">
            <span className="year-experience">
              {startYear}
              <small className="month-experience">{startMonth}</small>
            </span>
            -
            <span className="year-experience">
              {endYear}
              <small className="month-experience">{endMmonth}</small>
            </span>
          </h3>
          <hr className="date-hr" />
          <h4 className="mt-4 company">{company}</h4>
        </div>
      </div>

      <div className="col-span-12 md:col-span-8">
        <div className="cv-content">
          <h4 className="mb-0 mt-0">{position}</h4>
          <p className="cv-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
