module.exports = function(api) {
  const isTest = api.env('test');

  const config = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          },
          modules: 'commonjs'
        },
      ],
      '@babel/preset-react'
    ],
    plugins: [
      'babel-plugin-macros',
    ]
  };

  if (isTest) {
    config.presets = [
      [
        '@babel/preset-env', { targets: { node: 'current' } } ],
        '@babel/preset-react'
    ];
  }

  return config;
};
