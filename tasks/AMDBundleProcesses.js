var AMDBundleProcesses = function (grunt){
    this.grunt = grunt;
};
AMDBundleProcesses.prototype.enumerateInstalledPackages = function(path) {
    return this.grunt.file.expand({
        cwd: path,
        filter: 'isDirectory'
    }, '*');
};
AMDBundleProcesses.prototype.isDirectory = function(path) {
    return this.grunt.file.isDir(path);
};
AMDBundleProcesses.prototype.buildAMDModuleDefinition = function (accumulator, packageNameOrNames) {
    var packageNames = Array.isArray(packageNameOrNames) ? packageNameOrNames : [packageNameOrNames],
        quotedNames  = packageNames.map(function (packageName) {
            return '"' + packageName + '"';
        });

    return accumulator + quotedNames.join(', ');
};

module.exports  = AMDBundleProcesses;