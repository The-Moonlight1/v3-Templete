module.exports = {
  ignores: [(commit) => commit.includes("init")],
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 信息以空格开头
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    // 信息最大长度
    "header-max-length": [2, "always", 108],
    // 信息不能未空
    "subject-empty": [2, "never"],
    // 信息类型不能未空
    "type-empty": [2, "never"],
    // 提交信息的类型 下文有介绍
    "type-enum": [
      2,
      "always",
      [
        "feat", // 增加一个新特性
        "fix", // 修复一个 bug
        "perf", //更改代码以提高性能
        "style", //代码格式（不影响功能，例如空格、分号等格式修正）
        "docs", //  修改文档说明
        "test", // 测试相关修改
        "refactor", // 代码重构
        "build", // 更改构建系统和外部依赖项
        "ci", // i 对 CI 配置文件和脚本的更改
        "chore", // 变更构建流程或辅助工具
        "revert", // 代码回退
      ],
    ],
  },
};
