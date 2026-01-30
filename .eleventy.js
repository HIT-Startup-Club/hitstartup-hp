module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addCollection("members", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/members/*.md")
      .sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
  });

  eleventyConfig.addCollection("featuredMembers", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/members/*.md")
      .filter(item => item.data.featured === true)
      .sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
