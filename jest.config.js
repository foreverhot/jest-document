module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  // 测试文件路径
  testMatch: [
    "**/tests/**/*.spec.[jt]s?(x)",
    "**/__tests__/*.[jt]s?(x)"
  ]
};
