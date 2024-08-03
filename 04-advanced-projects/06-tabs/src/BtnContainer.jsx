const BtnContainer = ({ jobs, index, setIndex }) => {
  return (
    <div className='btn-container'>
      {jobs.map((job, i) => {
        return (
          <button className={i === index ? 'job-btn active-btn' : 'job-btn'} key={job.id} onClick={() => setIndex(i)}>
            {job.company}
          </button>
        );
      })}
    </div>
  );
}

export default BtnContainer;