import path from 'path';

export const cssDev = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    url: (url) => url.charAt(0) === '.',
  }
};

export const cssProd = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    url: (url) => url.charAt(0) === '.',
  }
};

export const cssModuleDev = {
  loader: 'css-loader',
  options: {
    modules: {
      getLocalIdent: ({ resourcePath }, localIdentName, localName) => {
        const [file, component, type] = resourcePath.split(path.sep).reverse();

        return `${type.slice(0, 2)}-${component}__${localName}`;
      },
    },
    sourceMap: true,
    url: (url) => url.charAt(0) === '.',
  }
};

export const cssModuleProd = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    url: (url) => url.charAt(0) === '.',
  }
};

export const eotProd = {
  loader: 'url-loader',
  options: {
    name: '[name].[ext]'
  }
};

export const imageDev = {
  loader: 'file-loader',
  options: {
    name: '[name].[ext]'
  }
};

export const imageProd = {
  loader: 'file-loader',
  options: {
    name: '[name].[ext]'
  }
};

export const ottfDev = {
  loader: 'url-loader',
  options: {
    limit: 10000,
    mimetype: 'application/octet-stream'
  }
};

export const ottfProd = {
  loader: 'url-loader',
  options: {
    limit: 10000,
    mimetype: 'application/octet-stream',
    name: '[name].[ext]'
  }
};

export const postCssDev = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        require('autoprefixer'),
      ],
    },
    sourceMap: true,
  },
};

export const postCssProd = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        require('autoprefixer'),
      ],
    },
    sourceMap: true,
  }
};

export const postCssModuleDev = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        require('autoprefixer'),
      ],
    },
    sourceMap: true,
  }
};

export const postCssModuleProd = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        require('autoprefixer'),
      ],
    },
    sourceMap: true,
  }
};

export const svgDev = {
  loader: 'url-loader',
  options: {
    limit: 10000,
    mimetype: 'image/svg+xml'
  }
};

export const svgProd = {
  loader: 'url-loader',
  options: {
    limit: 10000,
    mimetype: 'image/svg+xml',
    name: '[name].[ext]'
  }
};

export const woffDev = {
  loader: 'url-loader',
  options: {
    limit: 10000,
    mimetype: 'application/font-woff'
  }
};

export const woffProd = {
  loader: 'url-loader',
  options: {
    limit: 10000,
    mimetype: 'application/font-woff',
    name: '[name].[ext]'
  }
};
