export const getAllJobs = async () => {
    try {
      const response = await fetch("http://localhost:5000/jobs-scraping/all-jobs");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      throw error;
    }
  };