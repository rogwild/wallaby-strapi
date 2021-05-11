module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "21e11de36537026d54da0c5e6175b8e3"),
    },
    serveAdminPanel: env.bool("SERVE_ADMIN_PANEL", true),
  },
  cron: {
    enabled: false,
  },
});
