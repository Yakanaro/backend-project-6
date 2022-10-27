/* eslint-disable new-cap */
// @ts-check

import i18next from 'i18next';

export default (app) => {
  app
    .get('/users', { name: 'users' }, async (req, reply) => {
      const users = await app.objection.models.user.query();
      reply.render('users/index', { users });
      return reply;
    })

    .get('/users/new', { name: 'newUser' }, (req, reply) => {
      const user = new app.objection.models.user();
      console.log(user);
      reply.render('users/new', { user });
    })

    .post('/users', async (req, reply) => {
      const { data } = req.body;
      try {
        const user = await app.objection.models.user.fromJson(data);
        console.log(user);
        await app.objection.models.user.query().insert(user);

        req.flash('info', i18next.t('flash.users.create.success'));
        reply.redirect(app.reverse('root'));
        return reply;
      } catch (error) {
        console.log(error);
        req.flash('error', i18next.t('flash.users.create.error'));
        reply.render('users/new', { user: data, errors: error.data });
        return reply;
      }
    })

    .get('/users/:id/edit', { name: 'editUser' }, async (req, reply) => {
      const { id } = req.params;
      const { user } = req;

      if (!req.isAuthenticated()) {
        req.flash('error', i18next.t('flash.authError'));
        reply.redirect(app.reverse('users'));
        return reply;
      }

      if (user.id !== Number(id)) {
        req.flash('error', i18next.t('flash.users.delete.authError'));
        reply.redirect(app.reverse('users'));
        return reply;
      }

      const usr = await app.objection.models.user.query().findById(id);
      reply.render('users/edit', { user: usr });
      return reply;
    })

    .patch('/users/:id', { name: 'editUserEndPoint' }, async (req, reply) => {
      const { id } = req.params;
      try {
        const patchForm = await app.objection.models.user.fromJson(req.body.data);
        const user = await app.objection.models.user.query().findById(id);

        await user.$query().patch(patchForm);

        req.flash('info', i18next.t('flash.users.edit.success'));
        reply.redirect('/users');
        return reply;
      } catch ({ data }) {
        console.log(data);
        req.flash('error', i18next.t('flash.users.edit.error'));
        req.body.data.id = id;
        reply.render('users/edit', { user: req.body.data, errors: data });
        return reply;
      }
    })

    .delete('/users/:id', { name: 'deleteUser' }, async (req, reply) => {
      const { id } = req.params;
      const { user } = req;

      if (!req.isAuthenticated()) {
        req.flash('error', i18next.t('flash.authError'));
        reply.redirect(app.reverse('users'));
        return reply;
      }

      if (user.id !== Number(id)) {
        req.flash('error', i18next.t('flash.users.delete.authError'));
        reply.redirect(app.reverse('users'));
        return reply;
      }

      try {
        await app.objection.models.user.query().deleteById(id);
        req.logOut();
        req.flash('info', i18next.t('flash.users.delete.success'));
        reply.redirect(app.reverse('users'));
      } catch (error) {
        req.flash('error', i18next.t('flash.users.delete.error'));
        reply.redirect(app.reverse('users'));
      }
      return reply;
    });
};
