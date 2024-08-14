import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const Projects = () => {
  // We can also use React Query to rewrite these codes!
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: 'master', // default to 'master' if not set
    accessToken: import.meta.env.VITE_API_KEY
  });

  const fetchProjects = async () => {
    try {
      const response = await client.getEntries({ content_type: import.meta.env.VITE_CONTENT_TYPE });
      // An array of entry objects
      const projects = response.items.map((item) => {
        // Used as array item's key
        const id = item.sys.id;

        // If a field is text, we can extract it from item.fields.text
        // If a field is image, we can extract its url from item.fields.image.fields.file.url
        const { image, title, url } = item.fields;
        const img = image?.fields?.file?.url;

        return { id, title, url, img };
      });

      setProjects(projects);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchProjects();
  }, [])

  if (isLoading) {
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

export default Projects;