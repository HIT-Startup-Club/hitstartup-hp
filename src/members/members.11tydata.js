module.exports = {
  layout: "portfolio-member.njk",
  tags: ["member"],
  eleventyComputed: {
    permalink: data => data.eleventyExcludeFromCollections ? false : `members/${data.slug}.html`,
    title: data => data.eleventyExcludeFromCollections ? "" : data.name,
    copyrightName: data => data.eleventyExcludeFromCollections ? "" : data.nameEn
  }
};
