module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/output.css");

  // Konfigurace pro posty
  eleventyConfig.addCollection("blog", function(collection) {
    return collection.getFilteredByGlob("blog/*.md");
  });
    
    return {
      dir: {
        input: "src",
        output: "docs"
      }
    };
  };