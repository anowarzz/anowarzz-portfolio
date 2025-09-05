export interface Project {
  _id: string;
  id: number;
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
//  fetch all projects
export async function getAllProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      "https://anowarzz-portfolio-backend.vercel.app/api/projects"
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
