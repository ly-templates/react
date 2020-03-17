module.exports = {
  helpers: {
    if_or(v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  },
  prompts: {
    name: {
      when: "isNotTest",
      type: "string",
      required: true,
      message: "项目名称"
    },
    description: {
      when: "isNotTest",
      type: "string",
      required: false,
      message: "项目描述",
      default: "a React +typescript project"
    },
    version: {
      when: 'isNotTest',
      type: 'string',
      default: '1.0.0'
    },
    author: {
      when: "isNotTest",
      type: "string",
      message: "作者"
    },
    router: {
      when: "isNotTest",
      type: "confirm",
      message: "安装react-router?"
    },
    redux: {
      when: 'isNotTest',
      type: 'confirm',
      message: '安装redux?'
    },
    completeMessage: "安装成功"
  }
};
