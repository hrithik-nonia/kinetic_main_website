class SmallHelperFuns {
  static titleCase(text) {
    // text ko title case me badalne ke liya
    if (!text) return "";

    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  static dateWithYear(dateString) {
    // convert date string into local data
    if (!dateString) return "";

    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  }

  // static capitalize(text) {
  //   if (!text) return "";

  //   return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  // }

  // static uppercase(text) {
  //   if (!text) return "";

  //   return text.toUpperCase();
  // }

  // static lowercase(text) {
  //   if (!text) return "";

  //   return text.toLowerCase();
  // }
}

export default SmallHelperFuns;