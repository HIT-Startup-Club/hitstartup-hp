module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addFilter("dateFormat", function(date, format) {
    var d = new Date(date);
    var year = d.getFullYear();
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    if (format === 'iso') return year + '-' + month + '-' + day;
    return year + '年' + month + '月' + day + '日';
  });

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

  eleventyConfig.addCollection("activities", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/activities/*.md")
      .sort((a, b) => b.date - a.date);
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
