module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Header
    'header-max-length': [2, 'always', 200],
    // <type>枚举
    'type-enum': [
      2,
      'always',
      [
        'add', // 添加依赖
        'delete', // 删除代码/文件
        'feat', // 增加新功能
        'fix', // 修复bug
        'style', // 样式修改不影响逻辑
        'merge', // 合并分支
        'perfect', // 功能完善
        'docs', // 修改文档
        'refactor', // 代码重构
        'test', // 单元测试修改
        'ci', // 持续继承
        'release', // 发布
        'deploy', // 部署
        'chore', // 更改配置文件
        'revert', // 版本回退
      ],
    ],
    // <type> 不能为空
    'type-empty': [2, 'never'],
    // <type> 格式 小写
    'type-case': [2, 'always', 'lower-case'],
    // <subject> 不能为空
    'subject-empty': [2, 'never'],
    // <subject> 以.为结束标志
    'subject-full-stop': [2, 'never', '.'],
  },
};
