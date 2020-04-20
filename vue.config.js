const path = require("path")

module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@http":path.join(__dirname,"./src/http"),
                "@assets":path.join(__dirname,"./src/assets"),
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@views":path.join(__dirname,"./src/views"),
                "@store":path.join(__dirname,"./src/store"),
                "@router":path.join(__dirname,"./src/router"),
            }
        }
    },
    devServer:{
        port:9000,
        open:true,
    }
  }