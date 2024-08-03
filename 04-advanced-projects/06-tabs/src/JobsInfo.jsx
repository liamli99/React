import Duties from './Duties';

const JobsInfo = ({ jobs, index }) => {
  const { title, dates, duties, company } = jobs[index];

  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>

      <Duties duties={duties} />
    </article>
  );
}

export default JobsInfo;