const {src, dest} = require('gulp');

function streamTask() {
    return src("./app/js/*.js").pipe(dest("./build/js"));
}

exports.default = streamTask;