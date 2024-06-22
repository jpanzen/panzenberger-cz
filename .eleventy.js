const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/output.css");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_HUGE)
  })

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