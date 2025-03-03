import axios from 'axios';

export const getRecipes = async (filter: string, value: string) => {
  try {
    const apiUrl = process.env.RECIPE_API_URL;

    // Check if the RECIPE_API_URL is defined
    if (!apiUrl) {
      throw new Error('RECIPE_API_URL is not defined');
    }

    let url = `${apiUrl}/search.php?s=`; // Default URL for search without any filter

    if (filter && value) {
      switch (filter) {
        case 'ingredient':
          url = `${apiUrl}/filter.php?i=${value}`; // Filter by ingredient
          break;
        case 'country':
          url = `${apiUrl}/filter.php?a=${value}`; // Filter by country
          break;
        case 'category':
          url = `${apiUrl}/filter.php?c=${value}`; // Filter by category
          break;
        default:
          break;
      }
    }

    console.log('Final URL:', url); // Log the final URL before making the request

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw new Error('Error fetching recipes');
  }
};

export const getRecipeDetails = async (id: string) => {
  try {
    const apiUrl = process.env.RECIPE_API_URL;

    const response = await axios.get(`${apiUrl}/lookup.php?i=${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching recipe details');
  }
};
