const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://khaled:VNHAybzMnVDF6NMq@cluster0.ka5da.mongodb.net/fs-blog?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true },).then(()=>console.log('db connected')).catch((err)=>console.log('db connection failed',err.message))