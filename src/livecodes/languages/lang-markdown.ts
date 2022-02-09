import { LanguageSpecs } from '../models';
import { markedUrl } from '../vendors';
import { parserPlugins } from './prettier';
import { getLanguageCustomSettings } from './utils';

export const markdown: LanguageSpecs = {
  name: 'markdown',
  title: 'Markdown',
  parser: {
    name: 'markdown',
    pluginUrls: [parserPlugins.markdown, parserPlugins.html],
  },
  compiler: {
    url: markedUrl,
    factory: () => async (code, { config }) =>
      (window as any).marked.parse(code, {
        ...getLanguageCustomSettings('markdown', config),
      }),
  },
  extensions: ['md', 'markdown', 'mdown', 'mkdn'],
  editor: 'markup',
  preset: 'github-markdown-css',
};
