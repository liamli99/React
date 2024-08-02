const Title = ({ title }) => {
  return (
    <div className='title'>
      <h2>{title || 'Default Title'}</h2>
      {/* This div is just an underline */}
      <div className='title-underline'></div>
    </div>
  );
}

export default Title;