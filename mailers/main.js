var express = require('express');

var app = express()
  , formidable = require('formidable')
  , port = 3000

app.post('/incoming_mail', (req, res) => {
  var form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    console.log(fields)
    console.log(fields.reply_plain, fields.plain, fields['reply_plain'], fields['plain'])
    entry_content = fields.plain
    entry_title = fields['headers[subject]']
    author = fields['envelope[from]']
    console.log(author + ": " + entry_title + "\n---\n" + entry_content)
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end('Message Received. Thanks!\r\n')
  })
})

app.listen(port);