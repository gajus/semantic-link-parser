// cspell:disable

export type SiteContentInfo = {
  APPLE_APPS_APP: {
    appId: string;
    contentType: 'APP';
    site: 'APPLE_APPS';
    url: string;
  };
  APPLE_MUSIC_ALBUM: {
    albumId: string;
    contentType: 'ALBUM';
    site: 'APPLE_MUSIC';
    url: string;
  };
  APPLE_MUSIC_ARTIST: {
    artistId: string;
    contentType: 'ARTIST';
    site: 'APPLE_MUSIC';
    url: string;
  };
  BEHANCE_GALLERY: {
    contentType: 'GALLERY';
    galleryId: string;
    site: 'BEHANCE';
    url: string;
  };
  BEHANCE_PROFILE: {
    contentType: 'PROFILE';
    site: 'BEHANCE';
    url: string;
    username: string;
  };
  CANVA_DESIGN: {
    contentType: 'DESIGN';
    designId: string;
    site: 'CANVA';
    url: string;
  };
  CODEPEN_PEN: {
    contentType: 'PEN';
    penId: string;
    site: 'CODEPEN';
    url: string;
    username: string;
  };
  CODESANDBOX_DEVBOX: {
    contentType: 'DEVBOX';
    sandboxId: string;
    site: 'CODESANDBOX';
    url: string;
  };
  CODESANDBOX_SANDBOX: {
    contentType: 'SANDBOX';
    sandboxId: string;
    site: 'CODESANDBOX';
    url: string;
  };
  DESCRIPT_PROJECT: {
    contentType: 'PROJECT';
    projectId: string;
    site: 'DESCRIPT';
    url: string;
  };
  DRIBBBLE_PROFILE: {
    contentType: 'PROFILE';
    site: 'DRIBBBLE';
    url: string;
    username: string;
  };
  DRIBBBLE_SHOT: {
    contentType: 'SHOT';
    shotId: string;
    site: 'DRIBBBLE';
    url: string;
  };
  DROPBOX_FILE: {
    contentType: 'FILE';
    fileId: string;
    site: 'DROPBOX';
    url: string;
  };
  FACEBOOK_POST: {
    contentType: 'POST';
    postId: string;
    site: 'FACEBOOK';
    url: string;
    username: string;
  };
  FIGMA_BOARD: {
    boardId: string;
    contentType: 'BOARD';
    site: 'FIGMA';
    url: string;
  };
  FIGMA_DESIGN: {
    contentType: 'DESIGN';
    designId: string;
    site: 'FIGMA';
    url: string;
  };
  FIGMA_FILE: {
    contentType: 'FILE';
    fileId: string;
    site: 'FIGMA';
    url: string;
  };
  FIGMA_PROTOTYPE: {
    contentType: 'PROTOTYPE';
    prototypeId: string;
    site: 'FIGMA';
    url: string;
  };
  FIVERR_GIG: {
    contentType: 'GIG';
    gigId: string;
    site: 'FIVERR';
    url: string;
    username: string;
  };
  FIVERR_PROFILE: {
    contentType: 'PROFILE';
    site: 'FIVERR';
    url: string;
    username: string;
  };
  GITHUB_GIST: {
    contentType: 'GIST';
    gistId: string;
    site: 'GITHUB';
    url: string;
    username: string;
  };
  GITHUB_PROFILE: {
    contentType: 'PROFILE';
    site: 'GITHUB';
    url: string;
    username: string;
  };
  GITHUB_REPOSITORY: {
    contentType: 'REPOSITORY';
    repositoryName: string;
    site: 'GITHUB';
    url: string;
    username: string;
  };
  GOOGLE_DOCS_DOCUMENT: {
    contentType: 'DOCUMENT';
    documentId: string;
    site: 'GOOGLE_DOCS';
    url: string;
  };
  GOOGLE_DOCS_PRESENTATION: {
    contentType: 'PRESENTATION';
    presentationId: string;
    site: 'GOOGLE_DOCS';
    url: string;
  };
  GOOGLE_DOCS_SPREADSHEET: {
    contentType: 'SPREADSHEET';
    site: 'GOOGLE_DOCS';
    spreadsheetId: string;
    url: string;
  };
  GOOGLE_DRIVE_FILE: {
    contentType: 'FILE';
    fileId: string;
    site: 'GOOGLE_DRIVE';
    url: string;
  };
  GOOGLE_DRIVE_FOLDER: {
    contentType: 'FOLDER';
    folderId: string;
    site: 'GOOGLE_DRIVE';
    url: string;
  };
  GOOGLE_DRIVE_FOLDERS: {
    contentType: 'FOLDER';
    folderId: string;
    site: 'GOOGLE_DRIVE';
    url: string;
  };
  GOOGLE_DRIVE_FOLDERVIEW: {
    contentType: 'FOLDER';
    folderId: string;
    site: 'GOOGLE_DRIVE';
    url: string;
  };
  GOOGLE_PLAY_APP: {
    appId: string;
    contentType: 'APP';
    site: 'GOOGLE_PLAY';
    url: string;
  };
  INSTAGRAM_POST: {
    contentType: 'POST';
    postId: string;
    site: 'INSTAGRAM';
    url: string;
  };
  INSTAGRAM_PROFILE: {
    contentType: 'PROFILE';
    site: 'INSTAGRAM';
    url: string;
    username: string;
  };
  INSTAGRAM_REEL: {
    contentType: 'REEL';
    reelId: string;
    site: 'INSTAGRAM';
    url: string;
  };
  LINKEDIN_FEED_POST: {
    contentType: 'POST';
    postId: string;
    site: 'LINKEDIN';
    url: string;
  };
  LINKEDIN_PROFILE: {
    contentType: 'PROFILE';
    profileId: string;
    site: 'LINKEDIN';
    url: string;
  };
  LINKTREE_PROFILE: {
    contentType: 'PROFILE';
    site: 'LINKTREE';
    url: string;
    username: string;
  };
  LOOM_VIDEO: {
    contentType: 'VIDEO';
    site: 'LOOM';
    url: string;
    videoId: string;
  };
  MEDIUM_ARTICLE: {
    articleId: string;
    contentType: 'ARTICLE';
    site: 'MEDIUM';
    url: string;
    username: string;
  };
  MEDIUM_PROFILE: {
    contentType: 'PROFILE';
    site: 'MEDIUM';
    url: string;
    username: string;
  };
  PINTEREST_PIN: {
    contentType: 'PIN';
    pinId: string;
    site: 'PINTEREST';
    url: string;
  };
  PINTEREST_PROFILE: {
    contentType: 'PROFILE';
    site: 'PINTEREST';
    url: string;
    username: string;
  };
  REPLIT_REPL: {
    contentType: 'REPL';
    replId: string;
    site: 'REPLIT';
    url: string;
    username: string;
  };
  RIVE_FILE: {
    contentType: 'FILE';
    fileId: string;
    site: 'RIVE';
    url: string;
  };
  SOUNDCLOUD_TRACK: {
    audioTrackId: string;
    contentType: 'AUDIO_TRACK';
    site: 'SOUNDCLOUD';
    url: string;
    username: string;
  };
  SPLINE_SHARED_FILE: {
    contentType: 'FILE';
    fileId: string;
    site: 'SPLINE';
    url: string;
  };
  SPLINE_VIEWER_FILE: {
    contentType: 'VIEWER_FILE';
    fileId: string;
    site: 'SPLINE';
    url: string;
  };
  SPOTIFY_ALBUM: {
    albumId: string;
    contentType: 'ALBUM';
    site: 'SPOTIFY';
    url: string;
  };
  SPOTIFY_ARTIST: {
    artistId: string;
    contentType: 'ARTIST';
    site: 'SPOTIFY';
    url: string;
  };
  SPOTIFY_EPISODE: {
    contentType: 'EPISODE';
    episodeId: string;
    site: 'SPOTIFY';
    url: string;
  };
  SPOTIFY_PLAYLIST: {
    contentType: 'PLAYLIST';
    playlistId: string;
    site: 'SPOTIFY';
    url: string;
  };
  SPOTIFY_SHOW: {
    contentType: 'SHOW';
    showId: string;
    site: 'SPOTIFY';
    url: string;
  };
  SPOTIFY_TRACK: {
    audioTrackId: string;
    contentType: 'AUDIO_TRACK';
    site: 'SPOTIFY';
    url: string;
  };
  STACKBLITZ_PROJECT: {
    contentType: 'PROJECT';
    projectId: string;
    site: 'STACKBLITZ';
    url: string;
  };
  TIKTOK_PROFILE: {
    contentType: 'PROFILE';
    site: 'TIKTOK';
    url: string;
    username: string;
  };
  TIKTOK_VIDEO: {
    contentType: 'VIDEO';
    site: 'TIKTOK';
    url: string;
    username: string;
    videoId: string;
  };
  TWITCH_PROFILE: {
    contentType: 'PROFILE';
    site: 'TWITCH';
    url: string;
    username: string;
  };
  TWITTER_PROFILE: {
    contentType: 'PROFILE';
    site: 'TWITTER';
    url: string;
    username: string;
  };
  TWITTER_STATUS: {
    contentType: 'STATUS';
    site: 'TWITTER';
    statusId: string;
    url: string;
    username: string;
  };
  UPWORK_PROFILE_ID: {
    contentType: 'PROFILE';
    freelancerId: string;
    site: 'UPWORK';
    url: string;
  };
  UPWORK_PROFILE_USERNAME: {
    contentType: 'PROFILE';
    site: 'UPWORK';
    url: string;
    username: string;
  };
  VIMEO_MANAGE_VIDEO: {
    contentType: 'VIDEO';
    site: 'VIMEO';
    url: string;
    videoId: string;
  };
  VIMEO_PROFILE: {
    contentType: 'PROFILE';
    site: 'VIMEO';
    url: string;
    username: string;
  };
  VIMEO_VIDEO: {
    contentType: 'VIDEO';
    site: 'VIMEO';
    url: string;
    videoId: string;
  };
  X_PROFILE: {
    contentType: 'PROFILE';
    site: 'X';
    url: string;
    username: string;
  };
  X_STATUS: {
    contentType: 'STATUS';
    site: 'X';
    statusId: string;
    url: string;
    username: string;
  };
  YOUTUBE_ABBREVIATED_CHANNEL: {
    contentType: 'CHANNEL';
    site: 'YOUTUBE';
    url: string;
    username: string;
  };
  YOUTUBE_AT_CHANNEL: {
    contentType: 'CHANNEL';
    site: 'YOUTUBE';
    url: string;
    username: string;
  };
  YOUTUBE_BARE_CHANNEL: {
    contentType: 'CHANNEL';
    site: 'YOUTUBE';
    url: string;
    username: string;
  };
  YOUTUBE_CHANNEL: {
    channelId: string;
    contentType: 'CHANNEL';
    site: 'YOUTUBE';
    url: string;
  };
  YOUTUBE_PLAYLIST: {
    contentType: 'PLAYLIST';
    playlistId: string;
    site: 'YOUTUBE';
    url: string;
  };
  YOUTUBE_SHORT_VIDEO: {
    contentType: 'SHORT_VIDEO';
    site: 'YOUTUBE';
    url: string;
    videoId: string;
  };
  YOUTUBE_VIDEO: {
    contentType: 'VIDEO';
    site: 'YOUTUBE';
    url: string;
    videoId: string;
  };
  YOUTUBE_VIDEO_SHORT_URL: {
    contentType: 'VIDEO';
    site: 'YOUTUBE';
    url: string;
    videoId: string;
  };
};

export type Site = SiteContentInfo[keyof SiteContentInfo]['site'];
export type ContentType = SiteContentInfo[keyof SiteContentInfo]['contentType'];

type SiteContentInfoExtractor<T> = (
  url: URL,
  searchParameters: URLSearchParams,
) => T | null;

type SiteRule<T extends SiteContentInfo[keyof SiteContentInfo]> = {
  contentType: T['contentType'];
  domain: RegExp | string;
  extractContentInfo: SiteContentInfoExtractor<
    Omit<Omit<T, 'contentType'>, 'site'>
  >;
  site: T['site'];
  tests: Record<string, Omit<Omit<T, 'contentType'>, 'site'> | null>;
  weight: number;
};

type ExtractedInfo<T extends string> = {
  [K in T]: string;
};

const createIdFromSearchParameterContentExtractor = <T extends string>(
  idName: T,
  searchParameterName: string,
  urlTemplate: string,
): SiteContentInfoExtractor<ExtractedInfo<T> & { url: string }> => {
  return (url, searchParameters) => {
    const id = searchParameters.get(searchParameterName);

    if (typeof id === 'string' && id) {
      return {
        [idName]: id,
        url: urlTemplate.replace('{{' + idName + '}}', id),
      } as ExtractedInfo<T> & { url: string };
    }

    return null;
  };
};

const createIdFromFirstPathnameRegexMatchContentInfoExtractor = <
  T extends string,
>(
  idName: T,
  regex: RegExp,
  urlTemplate: string,
): SiteContentInfoExtractor<ExtractedInfo<T> & { url: string }> => {
  return (url) => {
    const id = regex.exec(url.pathname)?.[1];

    if (id) {
      return {
        [idName]: id,
        url: urlTemplate.replace('{{' + idName + '}}', id),
      } as ExtractedInfo<T> & { url: string };
    }

    return null;
  };
};

const createUsernameContentInfoExtractor = (urlTemplate: string) => {
  return (url) => {
    const segments = url.pathname
      .replace(/^\//u, '')
      .replace(/\/$/u, '')
      .split('/');

    const username = segments[0];

    if (segments.length === 1 && username) {
      return {
        url: urlTemplate.replace('{{username}}', username),
        username,
      };
    }

    return null;
  };
};

export const siteContentRules: {
  [K in keyof SiteContentInfo]: SiteRule<SiteContentInfo[K]>;
} = {
  APPLE_APPS_APP: {
    contentType: 'APP',
    domain: 'apps.apple.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'appId',
      /\/app\/[\w-]+\/id(\d+)/u,
      'https://apps.apple.com/app/{{appId}}',
    ),
    site: 'APPLE_APPS',
    tests: {
      'https://apps.apple.com/us/app/yupik/id1264786636': {
        appId: '1264786636',
        url: 'https://apps.apple.com/app/1264786636',
      },
    },
    weight: 100,
  },
  APPLE_MUSIC_ALBUM: {
    contentType: 'ALBUM',
    domain: 'music.apple.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'albumId',
      /\/album\/[\w-]+\/(\d+)/u,
      'https://music.apple.com/album/{{albumId}}',
    ),
    site: 'APPLE_MUSIC',
    tests: {
      'https://music.apple.com/us/album/diamonds/1632654221?i=1632654222': {
        albumId: '1632654221',
        url: 'https://music.apple.com/album/1632654221',
      },
    },
    weight: 100,
  },
  APPLE_MUSIC_ARTIST: {
    contentType: 'ARTIST',
    domain: 'music.apple.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'artistId',
      /\/artist\/[\w-]+\/(\d+)/u,
      'https://music.apple.com/artist/{{artistId}}',
    ),
    site: 'APPLE_MUSIC',
    tests: {
      'https://music.apple.com/us/artist/8karri/1465797897': {
        artistId: '1465797897',
        url: 'https://music.apple.com/artist/1465797897',
      },
    },
    weight: 100,
  },
  BEHANCE_GALLERY: {
    contentType: 'GALLERY',
    domain: 'behance.net',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'galleryId',
      /^\/gallery\/(\d+)/u,
      'https://behance.net/gallery/{{galleryId}}/view',
    ),
    site: 'BEHANCE',
    tests: {
      'https://www.behance.net/gallery/120073067/CITROEN-C5X-Lifestyle': {
        galleryId: '120073067',
        url: 'https://behance.net/gallery/120073067/view',
      },
    },
    weight: 100,
  },
  BEHANCE_PROFILE: {
    contentType: 'PROFILE',
    domain: 'behance.net',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://behance.net/{{username}}',
    ),
    site: 'BEHANCE',
    tests: {
      'https://www.behance.net/': null,
      'https://www.behance.net/gajus': {
        url: 'https://behance.net/gajus',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  CANVA_DESIGN: {
    contentType: 'DESIGN',
    domain: 'canva.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'designId',
      // TODO I am not clear what the two IDs map to.
      // I have confirmed as much that the first one is not a user ID, i.e.
      // If the same user created two designs, the first ID is not the same.
      /^\/design\/([\w-]+\/[\w-]+)/u,
      'https://canva.com/design/{{designId}}/view',
    ),
    site: 'CANVA',
    tests: {
      'https://www.canva.com/design/DAC1xq2GJMk/hIMpX3mPUmYkmNshGT0ZEw/view?utm_content=DAC1xq2GJMk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink':
        {
          designId: 'DAC1xq2GJMk/hIMpX3mPUmYkmNshGT0ZEw',
          url: 'https://canva.com/design/DAC1xq2GJMk/hIMpX3mPUmYkmNshGT0ZEw/view',
        },
      'https://www.canva.com/design/DAE_HVNSl10/nZqb-SL59cV6Unj5Xd3y_w/view?utm_content=DAE_HVNSl10&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu':
        {
          designId: 'DAE_HVNSl10/nZqb-SL59cV6Unj5Xd3y_w',
          url: 'https://canva.com/design/DAE_HVNSl10/nZqb-SL59cV6Unj5Xd3y_w/view',
        },
    },
    weight: 100,
  },
  CODEPEN_PEN: {
    contentType: 'PEN',
    domain: 'codepen.io',
    extractContentInfo: (url) => {
      const [, username, penId] =
        /^\/([\w-]+)\/pen\/(\w+)/u.exec(url.pathname) ?? [];

      if (username && penId) {
        return {
          penId,
          url: 'https://codepen.io/' + username + '/pen/' + penId,
          username,
        };
      }

      return null;
    },
    site: 'CODEPEN',
    tests: {
      'https://codepen.io/Ashish-Nagvanshi/pen/RwBZJEx': {
        penId: 'RwBZJEx',
        url: 'https://codepen.io/Ashish-Nagvanshi/pen/RwBZJEx',
        username: 'Ashish-Nagvanshi',
      },
    },
    weight: 100,
  },
  CODESANDBOX_DEVBOX: {
    contentType: 'DEVBOX',
    domain: 'codesandbox.io',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'sandboxId',
      /^\/p\/devbox\/([\w-]+)/u,
      'https://codesandbox.io/p/devbox/{{sandboxId}}',
    ),
    site: 'CODESANDBOX',
    tests: {
      'https://codesandbox.io/p/devbox/foo-bar-4q1m9?file=%2Fsrc%2Findex.js': {
        sandboxId: 'foo-bar-4q1m9',
        url: 'https://codesandbox.io/p/devbox/foo-bar-4q1m9',
      },
    },
    weight: 100,
  },
  CODESANDBOX_SANDBOX: {
    contentType: 'SANDBOX',
    domain: 'codesandbox.io',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'sandboxId',
      /^\/p\/sandbox\/([\w-]+)/u,
      'https://codesandbox.io/p/sandbox/{{sandboxId}}',
    ),
    site: 'CODESANDBOX',
    tests: {
      'https://codesandbox.io/p/sandbox/foo-bar-4q1m9?file=%2Fsrc%2Findex.js': {
        sandboxId: 'foo-bar-4q1m9',
        url: 'https://codesandbox.io/p/sandbox/foo-bar-4q1m9',
      },
    },
    weight: 100,
  },
  DESCRIPT_PROJECT: {
    contentType: 'PROJECT',
    domain: 'share.descript.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'projectId',
      /^\/view\/([\w-]+)/u,
      'https://share.descript.com/view/{{projectId}}',
    ),
    site: 'DESCRIPT',
    tests: {
      'https://share.descript.com/view/xIqYqkJT151/': {
        projectId: 'xIqYqkJT151',
        url: 'https://share.descript.com/view/xIqYqkJT151',
      },
    },
    weight: 100,
  },
  DRIBBBLE_PROFILE: {
    contentType: 'PROFILE',
    domain: 'dribbble.com',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://dribbble.com/{{username}}',
    ),
    site: 'DRIBBBLE',
    tests: {
      'https://dribbble.com/': null,
      'https://dribbble.com/gajus': {
        url: 'https://dribbble.com/gajus',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  DRIBBBLE_SHOT: {
    contentType: 'SHOT',
    domain: 'dribbble.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'shotId',
      /\/shots\/(\d+)/u,
      'https://dribbble.com/shots/{{shotId}}',
    ),
    site: 'DRIBBBLE',
    tests: {
      'https://dribbble.com/shots/1234567': {
        shotId: '1234567',
        url: 'https://dribbble.com/shots/1234567',
      },
    },
    weight: 100,
  },
  DROPBOX_FILE: {
    contentType: 'FILE',
    domain: 'dropbox.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'fileId',
      /^\/s\/([a-z\d]+)/u,
      'https://dropbox.com/s/{{fileId}}',
    ),
    site: 'DROPBOX',
    tests: {
      'https://www.dropbox.com/s/0l5rt7y8rdfgy9l/': {
        fileId: '0l5rt7y8rdfgy9l',
        url: 'https://dropbox.com/s/0l5rt7y8rdfgy9l',
      },
      'https://www.dropbox.com/s/0l5rt7y8rdfgy9l/LL%20Envelope%20clutch%20REV.pdf':
        {
          fileId: '0l5rt7y8rdfgy9l',
          url: 'https://dropbox.com/s/0l5rt7y8rdfgy9l',
        },
    },
    weight: 100,
  },
  FACEBOOK_POST: {
    contentType: 'POST',
    domain: 'facebook.com',
    extractContentInfo: (url) => {
      const [, username, postId] =
        /^\/([\w-]+)\/posts\/(\w+)/u.exec(url.pathname) ?? [];

      if (username && postId) {
        return {
          postId,
          url: 'https://facebook.com/' + username + '/posts/' + postId,
          username,
        };
      }

      return null;
    },
    site: 'FACEBOOK',
    tests: {
      'https://www.facebook.com/andrewismusic/posts/451971596293956': {
        postId: '451971596293956',
        url: 'https://facebook.com/andrewismusic/posts/451971596293956',
        username: 'andrewismusic',
      },
    },
    weight: 100,
  },
  FIGMA_BOARD: {
    contentType: 'BOARD',
    domain: 'figma.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'boardId',
      /^\/board\/([a-zA-Z\d]+)/u,
      'https://figma.com/board/{{boardId}}',
    ),
    site: 'FIGMA',
    tests: {
      'https://www.figma.com/board/123456789/abc': {
        boardId: '123456789',
        url: 'https://figma.com/board/123456789',
      },
    },
    weight: 100,
  },
  FIGMA_DESIGN: {
    contentType: 'DESIGN',
    domain: 'figma.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'designId',
      /^\/design\/([a-zA-Z\d]+)/u,
      'https://figma.com/design/{{designId}}',
    ),
    site: 'FIGMA',
    tests: {
      'https://www.figma.com/design/49P8UWLOadWskPwPvSz4bD/abc': {
        designId: '49P8UWLOadWskPwPvSz4bD',
        url: 'https://figma.com/design/49P8UWLOadWskPwPvSz4bD',
      },
    },
    weight: 100,
  },
  FIGMA_FILE: {
    contentType: 'FILE',
    domain: 'figma.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'fileId',
      /^\/file\/([a-zA-Z\d]+)/u,
      'https://figma.com/file/{{fileId}}',
    ),
    site: 'FIGMA',
    tests: {
      'https://www.figma.com/file/49P8UWLOadWskPwPvSz4bD': {
        fileId: '49P8UWLOadWskPwPvSz4bD',
        url: 'https://figma.com/file/49P8UWLOadWskPwPvSz4bD',
      },
    },
    weight: 100,
  },
  FIGMA_PROTOTYPE: {
    contentType: 'PROTOTYPE',
    domain: 'figma.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'prototypeId',
      /^\/proto\/([a-zA-Z\d]+)/u,
      'https://figma.com/proto/{{prototypeId}}',
    ),
    site: 'FIGMA',
    tests: {
      'https://www.figma.com/proto/JMT7Yw56eiphRJKp1S9EEe/Rabbit-UI?node-id=1-257&starting-point-node-id=1%3A257':
        {
          prototypeId: 'JMT7Yw56eiphRJKp1S9EEe',
          url: 'https://figma.com/proto/JMT7Yw56eiphRJKp1S9EEe',
        },
    },
    weight: 100,
  },
  FIVERR_GIG: {
    contentType: 'GIG',
    domain: 'fiverr.com',
    extractContentInfo: (url) => {
      const [, username, gigId] =
        /^\/([\w-]+)\/([\w-]+)/u.exec(url.pathname) ?? [];

      if (username && gigId) {
        return {
          gigId,
          url: 'https://fiverr.com/' + username + '/' + gigId,
          username,
        };
      }

      return null;
    },
    site: 'FIVERR',
    tests: {
      'https://www.fiverr.com/gajus/do-something-cool': {
        gigId: 'do-something-cool',
        url: 'https://fiverr.com/gajus/do-something-cool',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  FIVERR_PROFILE: {
    contentType: 'PROFILE',
    domain: 'fiverr.com',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://fiverr.com/{{username}}',
    ),
    site: 'FIVERR',
    tests: {
      'https://www.fiverr.com/gajus': {
        url: 'https://fiverr.com/gajus',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  GITHUB_GIST: {
    contentType: 'GIST',
    domain: 'gist.github.com',
    extractContentInfo: (url) => {
      const [, username, gistId] =
        /^\/([\w-]+)\/(\w+)/u.exec(url.pathname) ?? [];

      if (username && gistId) {
        return {
          gistId,
          url: 'https://gist.github.com/' + username + '/' + gistId,
          username,
        };
      }

      return null;
    },
    site: 'GITHUB',
    tests: {
      'https://gist.github.com/gajus/554280/': {
        gistId: '554280',
        url: 'https://gist.github.com/gajus/554280',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  GITHUB_PROFILE: {
    contentType: 'PROFILE',
    domain: 'github.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /\/([\w-]+)\/?/u,
      'https://github.com/{{username}}',
    ),
    site: 'GITHUB',
    tests: {
      'https://github.com/gajus': {
        url: 'https://github.com/gajus',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  GITHUB_REPOSITORY: {
    contentType: 'REPOSITORY',
    domain: 'github.com',
    extractContentInfo: (url) => {
      const [, username, repositoryName] =
        /^\/([\w-]+)\/([\w-]+)/u.exec(url.pathname) ?? [];

      if (username && repositoryName) {
        return {
          repositoryName,
          url: `https://github.com/${username}/${repositoryName}`,
          username,
        };
      }

      return null;
    },
    site: 'GITHUB',
    tests: {
      'https://github.com/gajus/slonik': {
        repositoryName: 'slonik',
        url: 'https://github.com/gajus/slonik',
        username: 'gajus',
      },
    },
    weight: 90,
  },
  GOOGLE_DOCS_DOCUMENT: {
    contentType: 'DOCUMENT',
    domain: 'docs.google.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'documentId',
      /^\/document\/d\/([\w-]+)/u,
      'https://docs.google.com/document/d/{{documentId}}/edit',
    ),
    site: 'GOOGLE_DOCS',
    tests: {
      'https://docs.google.com/document/d/1_1aYiJqjLeHUuO8c3hqOcIjKc567LoWIkKyC82Mt7P0/edit?usp=sharing':
        {
          documentId: '1_1aYiJqjLeHUuO8c3hqOcIjKc567LoWIkKyC82Mt7P0',
          url: 'https://docs.google.com/document/d/1_1aYiJqjLeHUuO8c3hqOcIjKc567LoWIkKyC82Mt7P0/edit',
        },
    },
    weight: 100,
  },
  GOOGLE_DOCS_PRESENTATION: {
    contentType: 'PRESENTATION',
    domain: 'docs.google.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'presentationId',
      /^\/presentation\/d\/([\w-]+)/u,
      'https://docs.google.com/presentation/d/{{presentationId}}/edit',
    ),
    site: 'GOOGLE_DOCS',
    tests: {
      'https://docs.google.com/presentation/d/11V5We7oJGoVOZESmjBg9B6iMiQzEeL58N4ujUEwbrxI/edit?usp=sharing':
        {
          presentationId: '11V5We7oJGoVOZESmjBg9B6iMiQzEeL58N4ujUEwbrxI',
          url: 'https://docs.google.com/presentation/d/11V5We7oJGoVOZESmjBg9B6iMiQzEeL58N4ujUEwbrxI/edit',
        },
    },
    weight: 100,
  },
  GOOGLE_DOCS_SPREADSHEET: {
    contentType: 'SPREADSHEET',
    domain: 'docs.google.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'spreadsheetId',
      /^\/spreadsheets\/d\/([\w-]+)/u,
      'https://docs.google.com/spreadsheets/d/{{spreadsheetId}}/edit',
    ),
    site: 'GOOGLE_DOCS',
    tests: {
      'https://docs.google.com/spreadsheets/d/1spdflo8CdY98uxwFlGQssbU5Yz8oVjbZ5uM_0qASRCk/':
        {
          spreadsheetId: '1spdflo8CdY98uxwFlGQssbU5Yz8oVjbZ5uM_0qASRCk',
          url: 'https://docs.google.com/spreadsheets/d/1spdflo8CdY98uxwFlGQssbU5Yz8oVjbZ5uM_0qASRCk/edit',
        },
    },
    weight: 100,
  },
  GOOGLE_DRIVE_FILE: {
    contentType: 'FILE',
    domain: 'drive.google.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'fileId',
      /^\/file\/d\/([\w-]+)/u,
      'https://drive.google.com/file/d/{{fileId}}/view',
    ),
    site: 'GOOGLE_DRIVE',
    tests: {
      'https://drive.google.com/file/d/1KBs8QdTjs-eJNEgZUxyvmkHkihg6mFnG/view?usp=share_link':
        {
          fileId: '1KBs8QdTjs-eJNEgZUxyvmkHkihg6mFnG',
          url: 'https://drive.google.com/file/d/1KBs8QdTjs-eJNEgZUxyvmkHkihg6mFnG/view',
        },
    },
    weight: 100,
  },
  GOOGLE_DRIVE_FOLDER: {
    contentType: 'FOLDER',
    domain: 'drive.google.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'folderId',
      /^\/drive\/folders\/([\w-]+)/u,
      'https://drive.google.com/drive/folders/{{folderId}}',
    ),
    site: 'GOOGLE_DRIVE',
    tests: {
      'https://drive.google.com/drive/folders/1JppVnu8-pIgr8IY0wuCo51JXP0H0YsDt?usp=share_link':
        {
          folderId: '1JppVnu8-pIgr8IY0wuCo51JXP0H0YsDt',
          url: 'https://drive.google.com/drive/folders/1JppVnu8-pIgr8IY0wuCo51JXP0H0YsDt',
        },
    },
    weight: 100,
  },
  GOOGLE_DRIVE_FOLDERS: {
    contentType: 'FOLDER',
    domain: 'drive.google.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'folderId',
      /^\/drive\/u\/\d\/folders\/([\w-]+)/u,
      'https://drive.google.com/drive/folders/{{folderId}}',
    ),
    site: 'GOOGLE_DRIVE',
    tests: {
      'https://drive.google.com/drive/u/0/folders/1K5fBLsBcGVN8r1ldJLQWEPTF6Ll0yJ3w':
        {
          folderId: '1K5fBLsBcGVN8r1ldJLQWEPTF6Ll0yJ3w',
          url: 'https://drive.google.com/drive/folders/1K5fBLsBcGVN8r1ldJLQWEPTF6Ll0yJ3w',
        },
      'https://drive.google.com/drive/u/1/folders/1K5fBLsBcGVN8r1ldJLQWEPTF6Ll0yJ3w':
        {
          folderId: '1K5fBLsBcGVN8r1ldJLQWEPTF6Ll0yJ3w',
          url: 'https://drive.google.com/drive/folders/1K5fBLsBcGVN8r1ldJLQWEPTF6Ll0yJ3w',
        },
    },
    weight: 100,
  },
  GOOGLE_DRIVE_FOLDERVIEW: {
    contentType: 'FOLDER',
    domain: 'drive.google.com',
    extractContentInfo: (url, searchParameters) => {
      if (!url.pathname.includes('folderview')) {
        return null;
      }

      const id = searchParameters.get('id');

      if (!id || typeof id !== 'string') {
        return null;
      }

      return {
        folderId: id,
        url: `https://drive.google.com/drive/folders/${id}`,
      };
    },
    site: 'GOOGLE_DRIVE',
    tests: {
      'https://drive.google.com/folderview?id=1Ho_pCqUGdwfAUKkan5CQOMg1Lgl0VoFI':
        {
          folderId: '1Ho_pCqUGdwfAUKkan5CQOMg1Lgl0VoFI',
          url: 'https://drive.google.com/drive/folders/1Ho_pCqUGdwfAUKkan5CQOMg1Lgl0VoFI',
        },
    },
    weight: 100,
  },
  GOOGLE_PLAY_APP: {
    contentType: 'APP',
    domain: 'play.google.com',
    extractContentInfo: createIdFromSearchParameterContentExtractor(
      'appId',
      'id',
      'https://play.google.com/store/apps/details?id={{appId}}',
    ),
    site: 'GOOGLE_PLAY',
    tests: {
      'https://play.google.com/store/apps/details?id=com.AdrLVD.BBallShootout':
        {
          appId: 'com.AdrLVD.BBallShootout',
          url: 'https://play.google.com/store/apps/details?id=com.AdrLVD.BBallShootout',
        },
    },
    weight: 100,
  },
  INSTAGRAM_POST: {
    contentType: 'POST',
    domain: 'instagram.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'postId',
      /^\/p\/([a-zA-Z\d]+)/u,
      'https://instagram.com/p/{{postId}}',
    ),
    site: 'INSTAGRAM',
    tests: {
      'https://www.instagram.com/p/CqX93czLUe2/': {
        postId: 'CqX93czLUe2',
        url: 'https://instagram.com/p/CqX93czLUe2',
      },
      'https://www.instagram.com/p/CqX93czLUe2/?utm_source=ig_web_copy_link': {
        postId: 'CqX93czLUe2',
        url: 'https://instagram.com/p/CqX93czLUe2',
      },
    },
    weight: 100,
  },
  INSTAGRAM_PROFILE: {
    contentType: 'PROFILE',
    domain: 'instagram.com',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://instagram.com/{{username}}',
    ),
    site: 'INSTAGRAM',
    tests: {
      'https://www.instagram.com/': null,
      'https://www.instagram.com/gajus': {
        url: 'https://instagram.com/gajus',
        username: 'gajus',
      },
      'https://www.instagram.com/gajus/': {
        url: 'https://instagram.com/gajus',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  INSTAGRAM_REEL: {
    contentType: 'REEL',
    domain: 'instagram.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'reelId',
      /^\/reel\/(\w+)/u,
      'https://instagram.com/reel/{{reelId}}',
    ),
    site: 'INSTAGRAM',
    tests: {
      'https://www.instagram.com/reel/Cbz20_0j2m4/': {
        reelId: 'Cbz20_0j2m4',
        url: 'https://instagram.com/reel/Cbz20_0j2m4',
      },
    },
    weight: 100,
  },
  LINKEDIN_FEED_POST: {
    contentType: 'POST',
    domain: 'linkedin.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'postId',
      /^\/feed\/update\/urn:li:activity:([\w-]+)/u,
      'https://www.linkedin.com/feed/update/urn:li:activity:{{postId}}/',
    ),
    site: 'LINKEDIN',
    tests: {
      'https://www.linkedin.com/feed/update/urn:li:activity:6927611303767212032/':
        {
          postId: '6927611303767212032',
          url: 'https://www.linkedin.com/feed/update/urn:li:activity:6927611303767212032/',
        },
    },
    weight: 100,
  },
  LINKEDIN_PROFILE: {
    contentType: 'PROFILE',
    domain: /(^|\.)linkedin.com$/u,
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'profileId',
      /^\/in\/([\w-]+)/u,
      'https://linkedin.com/in/{{profileId}}/',
    ),
    site: 'LINKEDIN',
    tests: {
      'https://in.linkedin.com/in/amol-tiwari-1a1956104': {
        profileId: 'amol-tiwari-1a1956104',
        url: 'https://linkedin.com/in/amol-tiwari-1a1956104/',
      },
      'https://www.linkedin.com/in/vimal-mamidala-a862301b4/': {
        profileId: 'vimal-mamidala-a862301b4',
        url: 'https://linkedin.com/in/vimal-mamidala-a862301b4/',
      },
    },
    weight: 100,
  },
  LINKTREE_PROFILE: {
    contentType: 'PROFILE',
    domain: 'linktr.ee',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/(\w+)$/u,
      'https://linktr.ee/{{username}}',
    ),
    site: 'LINKTREE',
    tests: {
      'https://linktr.ee/gajus': {
        url: 'https://linktr.ee/gajus',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  LOOM_VIDEO: {
    contentType: 'VIDEO',
    domain: 'loom.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'videoId',
      /^\/share\/(\w+)/u,
      'https://www.loom.com/share/{{videoId}}',
    ),
    site: 'LOOM',
    tests: {
      'https://www.loom.com/share/1db1e88a454043b9a885016c5bd6053d': {
        url: 'https://www.loom.com/share/1db1e88a454043b9a885016c5bd6053d',
        videoId: '1db1e88a454043b9a885016c5bd6053d',
      },
    },
    weight: 100,
  },
  MEDIUM_ARTICLE: {
    contentType: 'ARTICLE',
    domain: 'medium.com',
    extractContentInfo: (url) => {
      const [, username, articleId] =
        /^\/([a-zA-Z\d]+)\/.*([a-f\d]{12})/u.exec(url.pathname) ?? [];

      if (username && articleId) {
        return {
          articleId,
          url: `https://medium.com/${username}/${articleId}`,
          username,
        };
      }

      return null;
    },
    site: 'MEDIUM',
    tests: {
      'https://medium.com/gajus/how-a-few-lines-of-code-reduced-database-load-by-a-few-million-queries-964d43ec668a':
        {
          articleId: '964d43ec668a',
          url: 'https://medium.com/gajus/964d43ec668a',
          username: 'gajus',
        },
    },
    weight: 100,
  },
  MEDIUM_PROFILE: {
    contentType: 'PROFILE',
    domain: 'medium.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/@([a-zA-Z\d]+)/u,
      'https://medium.com/@{{username}}',
    ),
    site: 'MEDIUM',
    tests: {
      'https://medium.com/@james': {
        url: 'https://medium.com/@james',
        username: 'james',
      },
    },
    weight: 100,
  },
  PINTEREST_PIN: {
    contentType: 'PIN',
    domain: /pinterest\.(ca|co\.uk|com|de|es|fr|ph)/u,
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'pinId',
      /^\/pin\/(\d+)/u,
      'https://pinterest.com/pin/{{pinId}}',
    ),
    site: 'PINTEREST',
    tests: {
      'https://www.pinterest.com/pin/180003316664022943/': {
        pinId: '180003316664022943',
        url: 'https://pinterest.com/pin/180003316664022943',
      },
    },
    weight: 100,
  },
  PINTEREST_PROFILE: {
    contentType: 'PROFILE',
    domain: /pinterest\.(ca|co\.uk|com|de|es|fr|ph)/u,
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://pinterest.com/{{username}}',
    ),
    site: 'PINTEREST',
    tests: {
      'https://www.pinterest.com/gajus': {
        url: 'https://pinterest.com/gajus',
        username: 'gajus',
      },
      'https://www.pinterest.com/gajus/': {
        url: 'https://pinterest.com/gajus',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  REPLIT_REPL: {
    contentType: 'REPL',
    domain: 'replit.com',
    extractContentInfo: (url) => {
      const [, username, replId] =
        /^\/@([\w-]+)\/([\w-]+)/u.exec(url.pathname) ?? [];

      if (username && replId) {
        return {
          replId,
          url: 'https://replit.com/@' + username + '/' + replId,
          username,
        };
      }

      return null;
    },
    site: 'REPLIT',
    tests: {
      'https://replit.com/@gajus/my-repl#index.ts': {
        replId: 'my-repl',
        url: 'https://replit.com/@gajus/my-repl',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  RIVE_FILE: {
    contentType: 'FILE',
    domain: 'rive.app',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'fileId',
      /^\/s\/(\w+)/u,
      'https://rive.app/s/{{fileId}}/embed',
    ),
    site: 'RIVE',
    tests: {
      'https://rive.app/s/M3YTybD7WU2EDRKOXqVvuw/': {
        fileId: 'M3YTybD7WU2EDRKOXqVvuw',
        url: 'https://rive.app/s/M3YTybD7WU2EDRKOXqVvuw/embed',
      },
    },
    weight: 100,
  },
  SOUNDCLOUD_TRACK: {
    contentType: 'AUDIO_TRACK',
    domain: 'soundcloud.com',
    extractContentInfo: (url) => {
      const [, username, audioTrackId] =
        /([\w-]+)\/([\w-]+)/u.exec(url.pathname) ?? [];

      if (username && audioTrackId) {
        return {
          audioTrackId,
          url: 'https://soundcloud.com/' + username + '/' + audioTrackId,
          username,
        };
      }

      return null;
    },
    site: 'SOUNDCLOUD',
    tests: {
      'https://soundcloud.com/strangehumman/kyoto-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing':
        {
          audioTrackId: 'kyoto-2',
          url: 'https://soundcloud.com/strangehumman/kyoto-2',
          username: 'strangehumman',
        },
    },
    weight: 100,
  },
  SPLINE_SHARED_FILE: {
    contentType: 'FILE',
    domain: 'my.spline.design',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'fileId',
      /^\/([\w-]+)/u,
      'https://my.spline.design/{{fileId}}',
    ),
    site: 'SPLINE',
    tests: {
      'https://my.spline.design/cubescroll-381f86b8554fa7f705a477b70711fa59/': {
        fileId: 'cubescroll-381f86b8554fa7f705a477b70711fa59',
        url: 'https://my.spline.design/cubescroll-381f86b8554fa7f705a477b70711fa59',
      },
    },
    weight: 100,
  },
  SPLINE_VIEWER_FILE: {
    contentType: 'VIEWER_FILE',
    domain: 'prod.spline.design',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'fileId',
      /^\/([\w-]+)/u,
      'https://prod.spline.design/{{fileId}}/scene.splinecode',
    ),
    site: 'SPLINE',
    tests: {
      'https://prod.spline.design/WSzYLJlGageCs5Bt/scene.splinecode': {
        fileId: 'WSzYLJlGageCs5Bt',
        url: 'https://prod.spline.design/WSzYLJlGageCs5Bt/scene.splinecode',
      },
    },
    weight: 100,
  },
  SPOTIFY_ALBUM: {
    contentType: 'ALBUM',
    domain: 'open.spotify.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'albumId',
      /^\/album\/([a-zA-Z\d]+)/u,
      'https://open.spotify.com/album/{{albumId}}',
    ),
    site: 'SPOTIFY',
    tests: {
      'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj?si=abC123dEeF': {
        albumId: '0sNOF9WDwhWunNAHPD3Baj',
        url: 'https://open.spotify.com/album/0sNOF9WDwhWunNAHPD3Baj',
      },
    },
    weight: 100,
  },
  SPOTIFY_ARTIST: {
    contentType: 'ARTIST',
    domain: 'open.spotify.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'artistId',
      /^\/artist\/([a-zA-Z\d]+)/u,
      'https://open.spotify.com/artist/{{artistId}}',
    ),
    site: 'SPOTIFY',
    tests: {
      'https://open.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF?si=abC123dEeF': {
        artistId: '0OdUWJ0sBjDrqHygGUXeCF',
        url: 'https://open.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF',
      },
    },
    weight: 100,
  },
  SPOTIFY_EPISODE: {
    contentType: 'EPISODE',
    domain: 'open.spotify.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'episodeId',
      /^\/episode\/([a-zA-Z\d]+)/u,
      'https://open.spotify.com/episode/{{episodeId}}',
    ),
    site: 'SPOTIFY',
    tests: {
      'https://open.spotify.com/episode/6xg5QY1nZzYkqXrY8X7Y3w?si=abC123dEeF': {
        episodeId: '6xg5QY1nZzYkqXrY8X7Y3w',
        url: 'https://open.spotify.com/episode/6xg5QY1nZzYkqXrY8X7Y3w',
      },
    },
    weight: 100,
  },
  SPOTIFY_PLAYLIST: {
    contentType: 'PLAYLIST',
    domain: 'open.spotify.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'playlistId',
      /^\/playlist\/([a-zA-Z\d]+)/u,
      'https://open.spotify.com/playlist/{{playlistId}}',
    ),
    site: 'SPOTIFY',
    tests: {
      'https://open.spotify.com/playlist/3rGUZnO9djjURH4SRYencD': {
        playlistId: '3rGUZnO9djjURH4SRYencD',
        url: 'https://open.spotify.com/playlist/3rGUZnO9djjURH4SRYencD',
      },
    },
    weight: 100,
  },
  SPOTIFY_SHOW: {
    contentType: 'SHOW',
    domain: 'open.spotify.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'showId',
      /^\/show\/([a-zA-Z\d]+)/u,
      'https://open.spotify.com/show/{{showId}}',
    ),
    site: 'SPOTIFY',
    tests: {
      'https://open.spotify.com/show/6vWDO969PvNqNYHIOW5v0m?si=abC123dEeF': {
        showId: '6vWDO969PvNqNYHIOW5v0m',
        url: 'https://open.spotify.com/show/6vWDO969PvNqNYHIOW5v0m',
      },
    },
    weight: 100,
  },
  SPOTIFY_TRACK: {
    contentType: 'AUDIO_TRACK',
    domain: 'open.spotify.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'audioTrackId',
      /^\/track\/([a-zA-Z\d]+)/u,
      'https://open.spotify.com/track/{{audioTrackId}}',
    ),
    site: 'SPOTIFY',
    tests: {
      'https://open.spotify.com/track/5uj0ZKm9chQRqB6mWKl4Uu': {
        audioTrackId: '5uj0ZKm9chQRqB6mWKl4Uu',
        url: 'https://open.spotify.com/track/5uj0ZKm9chQRqB6mWKl4Uu',
      },
    },
    weight: 100,
  },
  STACKBLITZ_PROJECT: {
    contentType: 'PROJECT',
    domain: 'stackblitz.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'projectId',
      /^\/edit\/([\w-]+)/u,
      'https://stackblitz.com/edit/{{projectId}}',
    ),
    site: 'STACKBLITZ',
    tests: {
      'https://stackblitz.com/edit/react-ts': {
        projectId: 'react-ts',
        url: 'https://stackblitz.com/edit/react-ts',
      },
    },
    weight: 100,
  },
  TIKTOK_PROFILE: {
    contentType: 'PROFILE',
    domain: 'tiktok.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/@([\w.]+)/u,
      'https://tiktok.com/@{{username}}',
    ),
    site: 'TIKTOK',
    tests: {
      'https://www.tiktok.com/@fncischen?lang=en': {
        url: 'https://tiktok.com/@fncischen',
        username: 'fncischen',
      },
      'https://www.tiktok.com/@foo.bar': {
        url: 'https://tiktok.com/@foo.bar',
        username: 'foo.bar',
      },
    },
    weight: 100,
  },
  TIKTOK_VIDEO: {
    contentType: 'VIDEO',
    domain: 'tiktok.com',
    extractContentInfo: (url) => {
      const [, username, videoId] =
        /^\/@([\w.]+)\/video\/(\d+)/u.exec(url.pathname) ?? [];

      if (username && videoId) {
        return {
          url: 'https://tiktok.com/@' + username + '/video/' + videoId,
          username,
          videoId,
        };
      }

      return null;
    },
    site: 'TIKTOK',
    tests: {
      'https://www.tiktok.com/@fncischen/video/7020257482249374981?is_copy_url=1&is_from_webapp=v1':
        {
          url: 'https://tiktok.com/@fncischen/video/7020257482249374981',
          username: 'fncischen',
          videoId: '7020257482249374981',
        },
      'https://www.tiktok.com/@foo.bar/video/7020257482249374981': {
        url: 'https://tiktok.com/@foo.bar/video/7020257482249374981',
        username: 'foo.bar',
        videoId: '7020257482249374981',
      },
    },
    weight: 90,
  },
  TWITCH_PROFILE: {
    contentType: 'PROFILE',
    domain: 'twitch.tv',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://twitch.tv/{{username}}',
    ),
    site: 'TWITCH',
    tests: {
      'https://www.twitch.tv/gajus': {
        url: 'https://twitch.tv/gajus',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  TWITTER_PROFILE: {
    contentType: 'PROFILE',
    domain: 'twitter.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/([\w-]+)/u,
      'https://twitter.com/{{username}}',
    ),
    site: 'TWITTER',
    tests: {
      'https://twitter.com/gajus': {
        url: 'https://twitter.com/gajus',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  TWITTER_STATUS: {
    contentType: 'STATUS',
    domain: 'twitter.com',
    extractContentInfo: (url) => {
      const [, username, statusId] =
        /^\/(\w+)\/status\/(\d+)/u.exec(url.pathname) ?? [];

      if (username && statusId) {
        return {
          statusId,
          url: 'https://twitter.com/' + username + '/status/' + statusId,
          username,
        };
      }

      return null;
    },
    site: 'TWITTER',
    tests: {
      'https://twitter.com/kuizinas/status/1640770515114532872': {
        statusId: '1640770515114532872',
        url: 'https://twitter.com/kuizinas/status/1640770515114532872',
        username: 'kuizinas',
      },
    },
    weight: 90,
  },
  UPWORK_PROFILE_ID: {
    contentType: 'PROFILE',
    domain: 'upwork.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'freelancerId',
      /^\/freelancers\/~([\w-]+)/u,
      'https://www.upwork.com/freelancers/~{{freelancerId}}',
    ),
    site: 'UPWORK',
    tests: {
      'https://www.upwork.com/freelancers/~01eb5e04f87efe1f1d': {
        freelancerId: '01eb5e04f87efe1f1d',
        url: 'https://www.upwork.com/freelancers/~01eb5e04f87efe1f1d',
      },
    },
    weight: 90,
  },
  UPWORK_PROFILE_USERNAME: {
    contentType: 'PROFILE',
    domain: 'upwork.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/freelancers\/([\w-]+)/u,
      'https://upwork.com/freelancers/{{username}}',
    ),
    site: 'UPWORK',
    tests: {
      'https://www.upwork.com/freelancers/miroslavt': {
        url: 'https://upwork.com/freelancers/miroslavt',
        username: 'miroslavt',
      },
    },
    weight: 100,
  },
  VIMEO_MANAGE_VIDEO: {
    contentType: 'VIDEO',
    domain: 'vimeo.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'videoId',
      /^\/manage\/videos\/(\d+)/u,
      'https://vimeo.com/{{videoId}}',
    ),
    site: 'VIMEO',
    tests: {
      'https://vimeo.com/manage/videos/374790314': {
        url: 'https://vimeo.com/374790314',
        videoId: '374790314',
      },
    },
    weight: 100,
  },
  VIMEO_PROFILE: {
    contentType: 'PROFILE',
    domain: 'vimeo.com',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://vimeo.com/{{username}}',
    ),
    site: 'VIMEO',
    tests: {
      'https://vimeo.com/gajus': {
        url: 'https://vimeo.com/gajus',
        username: 'gajus',
      },
      'https://vimeo.com/vobow/chiaroscuro': null,
    },
    weight: 110,
  },
  VIMEO_VIDEO: {
    contentType: 'VIDEO',
    domain: 'vimeo.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'videoId',
      /^\/(\d+)/u,
      'https://vimeo.com/{{videoId}}',
    ),
    site: 'VIMEO',
    tests: {
      'https://vimeo.com/123456789': {
        url: 'https://vimeo.com/123456789',
        videoId: '123456789',
      },
      'https://vimeo.com/403917615?embedded=true&source=video_title&owner=111305732':
        {
          url: 'https://vimeo.com/403917615',
          videoId: '403917615',
        },
    },
    weight: 100,
  },
  X_PROFILE: {
    contentType: 'PROFILE',
    domain: 'x.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/([\w-]+)/u,
      'https://x.com/{{username}}',
    ),
    site: 'X',
    tests: {
      'https://x.com/gajus': {
        url: 'https://x.com/gajus',
        username: 'gajus',
      },
    },
    weight: 100,
  },
  X_STATUS: {
    contentType: 'STATUS',
    domain: 'x.com',
    extractContentInfo: (url) => {
      const [, username, statusId] =
        /^\/(\w+)\/status\/(\d+)/u.exec(url.pathname) ?? [];

      if (username && statusId) {
        return {
          statusId,
          url: 'https://x.com/' + username + '/status/' + statusId,
          username,
        };
      }

      return null;
    },
    site: 'X',
    tests: {
      'https://x.com/kuizinas/status/1640770515114532872': {
        statusId: '1640770515114532872',
        url: 'https://x.com/kuizinas/status/1640770515114532872',
        username: 'kuizinas',
      },
    },
    weight: 90,
  },
  YOUTUBE_ABBREVIATED_CHANNEL: {
    contentType: 'CHANNEL',
    domain: 'youtube.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/c\/([\w-]+)/u,
      'https://youtube.com/@{{username}}',
    ),
    site: 'YOUTUBE',
    tests: {
      'https://www.youtube.com/c/aatishgnair': {
        url: 'https://youtube.com/@aatishgnair',
        username: 'aatishgnair',
      },
    },
    weight: 90,
  },
  YOUTUBE_AT_CHANNEL: {
    contentType: 'CHANNEL',
    domain: 'youtube.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'username',
      /^\/@([\w-]+)/u,
      'https://youtube.com/@{{username}}',
    ),
    site: 'YOUTUBE',
    tests: {
      'https://www.youtube.com/@aatishgnair': {
        url: 'https://youtube.com/@aatishgnair',
        username: 'aatishgnair',
      },
    },
    weight: 90,
  },
  YOUTUBE_BARE_CHANNEL: {
    contentType: 'CHANNEL',
    domain: 'youtube.com',
    extractContentInfo: createUsernameContentInfoExtractor(
      'https://youtube.com/@{{username}}',
    ),
    site: 'YOUTUBE',
    tests: {
      'https://www.youtube.com/aatishgnair': {
        url: 'https://youtube.com/@aatishgnair',
        username: 'aatishgnair',
      },
    },
    weight: 120,
  },
  YOUTUBE_CHANNEL: {
    contentType: 'CHANNEL',
    domain: 'youtube.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'channelId',
      /^\/channel\/([\w-]+)/u,
      'https://youtube.com/channel/{{channelId}}',
    ),
    site: 'YOUTUBE',
    tests: {
      'https://youtube.com/channel/UC_8cM2OFz5rUTNskqehzLEg': {
        channelId: 'UC_8cM2OFz5rUTNskqehzLEg',
        url: 'https://youtube.com/channel/UC_8cM2OFz5rUTNskqehzLEg',
      },
    },
    weight: 100,
  },
  YOUTUBE_PLAYLIST: {
    contentType: 'PLAYLIST',
    domain: 'youtube.com',
    extractContentInfo: (url, searchParameters) => {
      if (!url.pathname.includes('playlist')) {
        return null;
      }

      const playlistId = searchParameters.get('list');

      if (!playlistId) {
        return null;
      }

      return {
        playlistId,
        url: 'https://youtube.com/playlist?list=' + playlistId,
      };
    },
    site: 'YOUTUBE',
    tests: {
      'https://youtube.com/playlist?list=PLrOLhD2xpUxB_BO-W6iICLS7XLKaif-fR': {
        playlistId: 'PLrOLhD2xpUxB_BO-W6iICLS7XLKaif-fR',
        url: 'https://youtube.com/playlist?list=PLrOLhD2xpUxB_BO-W6iICLS7XLKaif-fR',
      },
    },
    weight: 100,
  },
  YOUTUBE_SHORT_VIDEO: {
    contentType: 'SHORT_VIDEO',
    domain: 'youtube.com',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'videoId',
      /^\/shorts\/([\w-]+)/u,
      'https://youtube.com/shorts/{{videoId}}',
    ),
    site: 'YOUTUBE',
    tests: {
      'https://youtube.com/shorts/wrBGTNMBkWc?feature=share': {
        url: 'https://youtube.com/shorts/wrBGTNMBkWc',
        videoId: 'wrBGTNMBkWc',
      },
    },
    weight: 100,
  },
  YOUTUBE_VIDEO: {
    contentType: 'VIDEO',
    domain: /(^|\.)youtube\.com/u,
    extractContentInfo: createIdFromSearchParameterContentExtractor(
      'videoId',
      'v',
      'https://youtube.com/watch?v={{videoId}}',
    ),
    site: 'YOUTUBE',
    tests: {
      'https://m.youtube.com/watch?v=5yrlJbeUgCc&ab_channel=EasyPeasyForTutorials':
        {
          url: 'https://youtube.com/watch?v=5yrlJbeUgCc',
          videoId: '5yrlJbeUgCc',
        },
      'https://www.youtube.com/watch?v=5yrlJbeUgCc&ab_channel=EasyPeasyForTutorials':
        {
          url: 'https://youtube.com/watch?v=5yrlJbeUgCc',
          videoId: '5yrlJbeUgCc',
        },
      'https://www.youtube.com/watch?v=wE9vSGvzSHg': {
        url: 'https://youtube.com/watch?v=wE9vSGvzSHg',
        videoId: 'wE9vSGvzSHg',
      },
    },
    weight: 100,
  },
  YOUTUBE_VIDEO_SHORT_URL: {
    contentType: 'VIDEO',
    domain: 'youtu.be',
    extractContentInfo: createIdFromFirstPathnameRegexMatchContentInfoExtractor(
      'videoId',
      /^\/([\w-]+)/u,
      'https://www.youtube.com/watch?v={{videoId}}',
    ),
    site: 'YOUTUBE',
    tests: {
      'https://youtu.be/1JppVnu8-pI': {
        url: 'https://www.youtube.com/watch?v=1JppVnu8-pI',
        videoId: '1JppVnu8-pI',
      },
    },
    weight: 100,
  },
};
