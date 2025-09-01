import { Project } from "./getAllProjects";

// get single project details

export async function getSingleProject(id: string): Promise<Project> {
  try {
    const response = await fetch(
      `https://anowar-portfolio-server.vercel.app/projects/${id}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Project not found");
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }

    const project: Project = await response.json();
    return project;
  } catch (error) {
    console.error("Error fetching single project:", error);
    throw error;
  }
}
