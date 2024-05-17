//home.tsx  hi
import React, { useState, useEffect } from 'react';
const Home: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/project', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message);
        }

        const data = await response.json();
        setProjects(data.projects); // Update the state with the fetched projects
      } catch (error) {
        setError((error as Error).message); 
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {error && <p>{error}</p>}
      <ul>
        {projects.map((project) => (
          <li key={project._id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
