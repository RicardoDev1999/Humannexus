const version =
  import.meta.env.NODE_ENV === "development" ? "draft" : "published";

const getDefaultParams = () => {
  return {
    version,
  };
};

const getDefaultStoriesParams = (isStudio = false) => {
  return {
    ...getDefaultParams(),
    ...{
      excluding_slugs: isStudio ? "" : "studio/*",
      by_slugs: isStudio ? "studio/*" : "",
    },
  };
};

const getDefaultStoryParams = () => {
  return { ...getDefaultParams() };
};

export const getStory = async (
  slug,
  storyBlokApi,
  params = {}
) => {
  const { data } = await storyBlokApi.get(`cdn/stories/${slug}`, {
    ...getDefaultStoryParams(),
    ...params,
  });

  return data?.story;
};

export const getDatasourceEntries = async (
  storyBlokApi,
  params = {}
) => {
  const { data } = await storyBlokApi.get(`cdn/datasource_entries`, {
    ...(getDefaultParams()),
    ...params,
  });

  return data?.datasource_entries;
};

export const getStories = async (
  storyBlokApi,
  params = {},
  isStudio = false
) => {
  const { data } = await storyBlokApi.get("cdn/stories", {
    ...getDefaultStoriesParams(isStudio),
    ...params,
  });

  return data?.stories;
};

export const getLocalizationFromDatasource = async (
  storyBlokApi
) => {
  let localization = { pt: {} };

  try {
    const datasource_names = await getDatasourceEntries(storyBlokApi, {
      datasource: "pt-pt",
    });
    datasource_names.forEach((x) => (localization["pt"][x.name] = x.value));
  } catch (error) {
    console.error(error);
  }

  return localization;
};
