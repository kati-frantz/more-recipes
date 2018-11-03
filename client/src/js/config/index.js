let apiUrl;

if (window.location.hostname === 'bahdcoder-more-recipes.herokuapp.com') {
  apiUrl = 'https://bahdcoder-more-recipes.herokuapp.com/api/v1';
} else {
  apiUrl = '/';
}
/**
 * Export application wide configurations
 */
export default {
  apiUrl,
  cloudinaryUploadPreset: 'g5ziunzg',
  cloudinaryImageUploadUrl: 'https://api.cloudinary.com/v1_1/bahdcoder/image/upload',
  cloudinaryApiKey: '132255634713478'
};
