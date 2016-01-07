var path = require('path');
var Url = function (/*parts*/) {
    var parts = Array.prototype.slice.call(arguments) || [],
        output = parts[0];

    for (var i = 1; i < parts.length; i++) {
        if(/\/$/.test(output) || /^\//i.test(parts[i])) {
            output += parts[i]; 
        } else {
            output += '/' + parts[i]; 
        }
    };
    this.href = output;
}
Url.prototype.makeRelative = function (base) {
    if(base === undefined) return this;

    // remove base path from href
    var relative = path.relative(base, (this.href || ''));
    // swap backslashes for forwardslashes
    // TODO do something better here...
    var converted = relative.replace(new RegExp('\\\\','g'), '/');

    this.href = converted;

    return this;
};

module.exports = Url;