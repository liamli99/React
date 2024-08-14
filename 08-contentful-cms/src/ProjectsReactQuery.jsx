import { createClient } from 'contentful';
import { useQuery } from '@tanstack/react-query';

const ProjectsReactQuery = () => {
  // We can use React Query to rewrite the codes in Projects.jsx!!!

  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: 'master', // default to 'master' if not set
    accessToken: import.meta.env.VITE_API_KEY
  });

  const { data, isPending, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: () => client.getEntries({ content_type: import.meta.env.VITE_CONTENT_TYPE })
  });

  // Note that we cannot directly use 'data' here!!! Because 'data' is actually a state variable whose value changes!!! The initial value of 'data' is undefined, then it will get a value!!!

  if (isPending) {
    return (
      <section className='projects'>
        <h2>Loading...</h2>
      </section>
    );
  }

  if (isError) {
    return (
      <section className='projects'>
        <h2>Error!</h2>
      </section>
    );
  }

  const projects = data.items.map((item) => {
    // Used as array item's key
    const id = item.sys.id;

    // If a field is text, we can extract it from item.fields.text
    // If a field is image, we can extract its url from item.fields.image.fields.file.url
    const { image, title, url } = item.fields;
    const img = image?.fields?.file?.url;

    return { id, title, url, img };
  });

  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline' />
      </div>

      <div className='projects-center'>
        {projects.map((project) => {
          return (
            <a className='project' key={project.id} href={project.url} target='_blank'>
              <img className='img' src={project.img} alt={project.title} />
              <h5>{project.title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsReactQuery;