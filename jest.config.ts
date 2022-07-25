const settings = {
    collectCoverage: true,
    roots: ['<rootDir>/src'],
    moduleDirectories: ['node_modules', 'src'],
    verbose: true,
    transform: {
        '^.+\\.[t|j]sx$': 'babel-jest'
    },
    testEnvironmet: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    coveragePathIgnorePatterns: ['index.ts', 'node_modules']
}

export default settings;