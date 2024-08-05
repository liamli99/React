import useFetch from "./useFetch";

// Same as 03-conditional-rendering/02-multiple-returns-fetch-data.jsx
const FetchData = () => {
  const {isLoading, isError, data} = useFetch('https://api.github.com/users/QuincyLarson')

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }

  return (
    <div>
      <img src={data.avatar_url} alt={data.login} />
      <div>
        <h5>{data.login}</h5>
        <a href={data.html_url}>profile</a>
      </div>
    </div>
  );
};

export default FetchData;
