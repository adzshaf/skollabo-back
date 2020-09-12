module.exports = {
  updateRole: async (ctx) => {
    strapi.services.user.updateUserRole(
      ctx.request.body.user_id,
      ctx.request.body.role_id
    );
    ctx.send({
      user_id: ctx.request.body.user_id,
      role_id: ctx.request.body.role_id,
    });
  },
};
