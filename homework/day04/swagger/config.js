
// swaggerjsDOC사용해서 swagger.json을 편하게 만듦!
export const options = {
    definition: {
    openapi: '3.0.0',
    info: {
      title: 'api 명세서',
      version: '1.0.0',
    },
  },
  apis: ['./swagger/*.swagger.js'], // files containing annotations as above
};