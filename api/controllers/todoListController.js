'use strict';
var request = require("request");

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.send_sms = function(req, res) {


  console.log('Printing req.body', req.body.numbers)
  var newNumbers = req.body.numbers.split(',');
  console.log('Numbers', newNumbers);
  var responseSend = []
  newNumbers.forEach(function(value){
    console.log(value);


    var options = { method: 'POST',
      url: '',
      headers:
       {
         'cache-control': 'no-cache',
         'Authorization': '',
         'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
      formData: {
        From: '+14159681193',
        To: value,
        Body: req.body.message,
       }};

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log('res',JSON.stringify(body));
      responseSend.push(body);

    });
    console.log('ResponSend', responseSend);
  });

  console.log('Res After', responseSend);
  res.json({ message: 'Sent, Check Logs'});
};




exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  //Task.findById(req.params.taskId, function(err, task) {
  Task.find({ team: req.params.taskId }, function(err, task) {
    if (err)
      res.send(err);

    res.json({ message: "Requests Sent Succesfully",email: task[0].email });
  });
};


exports.send_email2 = function(req, res) {
  //Task.findById(req.params.taskId, function(err, task) {

    console.log('body req', req.body);
     var newEmails = req.body.email_all.split(',');
     console.log('Tasks Divide', newEmails);
     var responseSend = '';

       newEmails.forEach(function(value){
       console.log('Value is',value);

       var options = { method: 'POST',
         url: '',
         headers:
          { 'postman-token': '60f6193a-a124-9a8a-f830-3fcf6bdec169',
            'cache-control': 'no-cache',
            authorization: '',
            'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
         formData:
          { from: 'Mailgun Sandbox <postmaster@sandboxdfdd918cd2724b698b5408cda0ace5a0.mailgun.org>',
            to: value,
            subject: req.body.message,
            text: 'test, Welcome' } };

       request(options, function (error, response, body) {
         if (error) throw new Error(error);

         console.log(JSON.stringify(body));
         responseSend = responseSend + JSON.stringify(body);
         //res.json(body);
       });
     });
     console.log('Respomse',responseSend);
     res.json({ message: "Requests Sent Succesfully", success: true });

};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.create_team = function(req, res) {
  console.log('Create_team body', req.body);
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    console.log('Task Return', task);
    res.json(task);
  });
};
