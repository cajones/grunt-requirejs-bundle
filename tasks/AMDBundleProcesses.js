var AMDBundleProcesses = function (grunt, options){
    this.grunt = grunt;
    this.options = options;
};
AMDBundleProcesses.prototype.enumerateInstalledPackages = function(path) {
    var grunt = this.grunt,
        options = this.options;

    return grunt.file.expand({
        cwd: path,
        filter: 'isDirectory'
    }, '*')
    .filter(function hasManifest(dir) {
        return grunt.file.exists(path, dir, options.manifestFile)
    });
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