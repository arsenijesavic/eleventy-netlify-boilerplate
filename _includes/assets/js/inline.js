if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

document.addEventListener(
  "scroll",
  function () {
    var scrollTop =
      document.documentElement["scrollTop"] || document.body["scrollTop"];

    var scrollBottom =
      (document.documentElement["scrollHeight"] ||
        document.body["scrollHeight"]) - document.documentElement.clientHeight;

    var scrollPercent = (scrollTop / scrollBottom) * 100 + "%";
    document
      .getElementById("_progress")
      .style.setProperty("--scroll", scrollPercent);
  },
  { passive: true }
);
