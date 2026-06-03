const API_BASE_URL = 'http://localhost:5000/api';

export async function fetchProjects() {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('Failed to fetch projects from backend API, falling back to local data.', error);
    throw error;
  }
}

export async function fetchProjectBySlug(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn(`Failed to fetch project detail for "${slug}" from backend API, falling back to local data.`, error);
    throw error;
  }
}
