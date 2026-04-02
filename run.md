运行方式

  1. 构建（修改源码后需要）

  bun run build

  2. 运行 CLI

  bun run cli.js

  3. 需要配置 API Key

  Claude Code 需要认证才能使用。设置环境变量后运行：

  # 方式一：Anthropic API Key
  set ANTHROPIC_API_KEY=sk-ant-xxxxx
  bun run cli.js

  # 方式二：通过 OAuth 登录
  bun run cli.js auth login

  4. 常用命令

  bun run cli.js --help                          # 查看帮助
  bun run cli.js --version                       # 查看版本
  bun run cli.js "解释一下当前目录的代码结构"       # 直接提问
  bun run cli.js -p "hello"                      # 非交互模式，输出后退出
  bun run cli.js -c                              # 继续上次对话
  bun run cli.js --model opus                    # 指定模型
  bun run cli.js --debug                         # 开启调试

  5. 开发调试（跳过打包，直接跑源码）

  bun run dev

  6. 如果想全局当 claude 命令用

  bun run build
  npm link

  之后在任意目录直接输入 claude 即可。