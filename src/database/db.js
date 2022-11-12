const mongoose = require('mongoose')

const connectDatabase = () => {
    console.log('Wait Conneting to the database')

    mongoose.connect(
        'mongodb+srv://oseias-costa:eagle157Costa@cluster0.xjqyyop.mongodb.net/?retryWrites=true&w=majority', 
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log('mongoDb Connected'))
     .catch((error) => console.log(error))
}


module.exports = connectDatabase