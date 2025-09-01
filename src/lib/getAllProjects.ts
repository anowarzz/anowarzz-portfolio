export interface Project {
  id: string;
  title: string;
  image: string;
  projectType: string;
  projectSummary: string;
  gitHubLink: string;
  liveSiteLink: string;
  technologies: string[];
  details: string[];
  images: string[];
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      "https://anowar-portfolio-server.vercel.app/projects"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const projects: Project[] = await response.json();
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
