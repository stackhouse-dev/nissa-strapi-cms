module.exports = ({ env }) => ({
 'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    }
 },
 "vercel-deploy": {
  enabled: true,
  config: {
    deployHook:
      "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
    apiToken: "B5FVKIRhvU8jfvuK4uWTyeAG",
    appFilter: "nissaCms",
    teamFilter: "nissaTeam",
    roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
  },
},
});