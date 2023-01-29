import { Logger, keys } from "vuepress-shared/node";

import type { App, Page } from "@vuepress/core";
import type { PageMap } from "./typings/index.js";

export const logger = new Logger("vuepress-plugin-blog2");

export const getPageMap = (
  filter: (page: Page) => boolean,
  app: App
): PageMap => {
  const pageMap: PageMap = {};

  // initialize pageMap
  keys({
    // make sure root locale exists
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "/": {},
    ...app.options.locales,
  }).forEach((path) => {
    pageMap[path] = [];
  });

  app.pages.filter(filter).forEach((page) => {
    pageMap[page.pathLocale].push(page);
  });

  return pageMap;
};
