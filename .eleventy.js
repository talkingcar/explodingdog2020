module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "html",
    "md",
    "css"
  ]);
  return {
    htmlTemplateEngine: "njk",
  }
};

