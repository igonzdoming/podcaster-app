import en from './en';

export const locales = {
  en,
};

export type Locale = keyof typeof locales;
export type Translations = {
  pages: {
    notFound: {
      title: string;
      subTitle: string;
      goBack: string;
    };
  };
  components: {
    header: {
      title: string;
    };
    searchPodcasts: {
      placeHolder: string;
    };
    listPodcasts: {
      author: string;
    };
    detailPodcast: {
      by: string;
      description: string;
    };
    detailEpisodes: {
      episodes: string;
      table: {
        columns: string[];
      };
    };
  };
};
