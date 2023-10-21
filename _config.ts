import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import netlifyCMS from "lume/plugins/netlify_cms.ts";
import pageFind from "lume/plugins/pagefind.ts";
import sitemap from "lume/plugins/sitemap.ts";
import feed from "lume/plugins/feed.ts";
import favicon from "lume/plugins/favicon.ts";
import readInfo from "lume/plugins/reading_info.ts";

const site = lume({
  location: new URL("https://benji377.netlify.app"),
});

site
  .ignore("README.md")
  .copy("img")
  .use(postcss())
  .use(date())
  .use(codeHighlight())
  .use(basePath())
  .use(sitemap())
  .use(pageFind({
    ui: {
      resetStyles: false,
    },
  }))
  .use(slugifyUrls({ alphanumeric: false }))
  .use(feed({
    output: ["/feed.json", "/feed.rss"],
    query: "type=posts",
    sort: "date=desc",
    limit: 10,
    info: {
      title: "=site.title",
      description: "=site.description",
      date: new Date(),
      lang: "en",
      generator: true,
    },
    items: {
      title: "=title",
      description: "=description",
      date: "=date",
      content: "$.post-body",
      lang: "en",
    }
  }))
  .use(resolveUrls())
  .use(favicon({input: "img/logo.png"}))
  .use(readInfo())
  .use(netlifyCMS({ netlifyIdentity: true }));

export default site;
