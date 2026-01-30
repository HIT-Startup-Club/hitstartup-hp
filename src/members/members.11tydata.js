module.exports = {
  layout: "portfolio-member.njk",
  tags: ["member"],
  eleventyComputed: {
    permalink: data => data.eleventyExcludeFromCollections ? false : `portfolio/${data.slug}.html`,
    title: data => data.eleventyExcludeFromCollections ? "" : `${data.name} - Portfolio | HIT Startup Club`,
    copyrightName: data => data.eleventyExcludeFromCollections ? "" : data.nameEn
  }
};
