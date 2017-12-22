"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    crawling: {
      markdown: {
        src: "src/assets/posts/{,*/}*.md",
        dest: "src/assets/posts/posts.json"
      }
    }
  });

  grunt.registerTask("default", ["crawling"]);

  grunt.registerMultiTask("crawling", function() {
    grunt.log.writeln(this.target);

    var postsJson = [];

    this.files.forEach(function(file) {
      file.src
        .filter(function(filepath) {
          grunt.log.writeln(filepath);
          // Remove nonexistent files (it's up to you to filter or warn here).
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
            return false;
          } else {
            return true;
          }
        })
        .map(function(filepath) {
          // Read and return the file's source.
          var content = grunt.file.read(filepath);

          var markdownContent = /^# (.*)\r\n_{1,}\r\n\r\n([\s\S]*)*/.exec(content);
          var title = markdownContent[1];
          var excerpt = markdownContent[2].split("\r\n\r\n")[0];

          var result = {};
          result.title = title;
          result.filename = filepath.replace(
            /^src\/assets\/posts\/\d{4}\/(.*).md$/,
            "$1"
          );
          result.filepath = filepath.replace(
            /^src\/(.*)/,
            "$1"
          );
          // src/assets/posts/2012/2012-05-11-xsd-string-data-types.md -> /posts/2012-05-11-xsd-string-data-types
          result.url = filepath.replace(
            /^src\/assets\/(posts)\/\d{4}\/(.*).md$/,
            "$1/$2"
          );
          // src/assets/posts/2012/2012-05-11-xsd-string-data-types.md -> 2012-05-11
          result.date = filepath.replace(
            /^src\/assets\/(posts)\/((19|20)\d\d)\/((19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])-(.*).md$/,
            "$4-$6-$7"
          );
          result.excerpt = excerpt;

          postsJson.unshift(result);
        });

      // Write joined contents to destination filepath.
      grunt.file.write(file.dest, JSON.stringify(postsJson));
    });
  });
};