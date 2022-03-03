module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a0d8f60c9bddb85de70292a1d0e1f3cb'),
  },
});
