export default {
    testEnvironment: 'jest-environment-jsdom',
    // configura o arquivo padrão de importação do React Testing Library.
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    moduleNameMapper: {
      // serve para configurar um arquivo fake para possibilitar a utilização de imagens nos testes
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js',
      // serve para configurar um arquivo fake para possibilitar a utilização de css nos testes
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    }
  }