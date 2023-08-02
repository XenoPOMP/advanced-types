const path = require('path');
const fs = require('fs');

const CWD = process.cwd();

type DocMessage = Record<'typeName' | 'comment', string>;

const paths: Record<'types', string> = {
  types: path.join(CWD, 'src/types'),
};

const pullPattern = (
  original: string,
  pattern: string,
  options?: {
    flags?: string;
    wrap?: boolean;
  }
): string | undefined => {
  const wrappedPattern: RegExp = new RegExp(
    `(${pattern})`,
    options?.flags ?? 'gi'
  );
  const pulledPattern: RegExp = new RegExp(
    `${pattern}`,
    options?.flags ?? 'gi'
  );

  return wrappedPattern
    ?.exec(original)
    ?.map(res => res)
    ?.filter(text => {
      if (!(options?.wrap ?? true)) {
        return text;
      }

      return pulledPattern.test(text);
    })[0];
};

const typeMessages: Array<DocMessage> = fs
  .readdirSync(paths.types)
  .map(file => {
    const pathToFile = path.join(paths.types, file);
    const fileContent: string = fs.readFileSync(pathToFile, {
      encoding: 'utf-8',
    });

    const typeDefinition = pullPattern(
      fileContent,
      'export ((type)|(interface)) .*((\\n)|(\\r\\n))(.*((\\n)|(\\r\\n)))*'
    );
    const typeName = pullPattern(
      typeDefinition,
      '(?<=(export\\s((type)|(interface))\\s))[A-Z]\\w+\\b',
      {
        wrap: false,
      }
    );

    let comment = pullPattern(fileContent, '\\/\\*{2}\\n(.*\\n)*\\s\\*\\/')
      ?.replace(/(^\/\*{2})|(\*\/$)/gi, '')
      .replace(/\s\*\s/gi, '')
      .replace(/\n{1,2}/gi, '\n\n');

    if (/@example/gi.test(comment)) {
      comment = comment.replace(/@example/gi, '```ts').concat('```');
    }

    return {
      typeName,
      comment,
    } as DocMessage;
  })
  .filter(
    type =>
      type.typeName !== undefined &&
      ![
        'PropsWithClassnames',
        'PropsWithId',
        'PropsWithStyles',
        'MetaInfo',
      ].includes(type.typeName)
  );

const head: string = [
  '# 🏗️ Advanced types\n',
  'This library contains useful types for React and Node.js projects.\n',
].join('\n');

const navigation: string =
  '## Navigation\n\n' +
  typeMessages
    .map(type => `* [${type.typeName}](/#${type.typeName.toLowerCase()})`)
    .join('\n')
    .concat('\n');

const parsedTypeMessages: string = typeMessages
  .map(message => {
    return [`### ${message.typeName}`, message.comment].join('\n');
  })
  .join('\n\n');

const documentationBody: string = [head, navigation, parsedTypeMessages].join(
  '\n'
);

fs.writeFileSync(path.join(CWD, 'README.md'), documentationBody);
