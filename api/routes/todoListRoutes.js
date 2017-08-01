'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');


  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/sms')
    .post(todoList.send_sms);
      //.post(todoList.send_email);

  app.route('/tasks/send_email2')
    .post(todoList.send_email2);

  app.route('/tasks/create_team')
    .post(todoList.create_team);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
