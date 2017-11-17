let apiUrl;

if (process.env.NODE_ENV === 'production') {
  apiUrl = '/api/v1';
} else {
  apiUrl = 'http://localhost:4080/api/v1';
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
