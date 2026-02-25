const version = import.meta.env.MODE === "production" ? "published" : "draft";

const getDefaultParams = () => {
  return {
    version,
  };
};

const getDefaultStoriesParams = (context = null) => {
  return {
    ...getDefaultParams(),
    ...{
      excluding_slugs: context ? "" : `*/*/**`,
      by_slugs: context ? `${context}/*` : "",
    },
  };
};

const getDefaultStoryParams = () => {
  return { ...getDefaultParams() };
};

export const getStory = async (
  slug,
  storyBlokApi,
  params = {},
  context = null
) => {
  const url = context ? `cdn/stories/${context}/${slug}` : `cdn/stories/${slug}`;
  console.log(context, url);
  const { data } = await storyBlokApi.get(
    url,
    {
      ...getDefaultStoryParams(),
      ...params,
    }
  );


  return data?.story;
};

export const getDatasourceEntries = async (storyBlokApi, params = {}) => {
  const { data } = await storyBlokApi.get(`cdn/datasource_entries`, {
    ...getDefaultParams(),
    ...params,
  });

  return data?.datasource_entries;
};

export const getStories = async (storyBlokApi, params = {}, context = null) => {
  const { data } = await storyBlokApi.get("cdn/stories", {
    ...getDefaultStoriesParams(context),
    ...params,
  });

  return data?.stories;
};

export const getLocalizationFromDatasource = async (storyBlokApi) => {
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
