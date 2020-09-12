module.exports = {
  updateUserRole: async (user_id, role_id) => {
    return await strapi
      .query("user", "users-permissions")
      .update({ id: user_id }, { role: role_id });
  },
};
