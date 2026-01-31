module.exports = {
  layout: "activity-post.njk",
  tags: ["activity"],
  eleventyComputed: {
    permalink: data => data.eleventyExcludeFromCollections
      ? false
      : `activities/${data.page.fileSlug}.html`
  }
};
