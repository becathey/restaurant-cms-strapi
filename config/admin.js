module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f0ff29616b6dc9b5dd14367ee9ce1a79'),
  },
});
