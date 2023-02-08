<!--
 * @Author: GengHH
 * @Date: 2022-11-22 14:43:54
 * @LastEditors: GengHH
 * @LastEditTime: 2022-12-01 19:00:21
 * @Description: file content
 * @FilePath: \vue3-vant-mobilee:\工作任务\金保二期\任务\任务36（单位事项随申办）\git-code\eshimin-shrs\README.md
-->

- [1. 开发模式](#1-开发模式)
- [2. 打测试包模式](#2-打测试包模式)
- [3. 打生产包模式](#3-打生产包模式)
- [4. nginx 配置](#4-nginx配置)
- [5. 访问地址](#5-访问地址)
- [6. 企业云调试方式](#6-企业云调试方式)
- [7. 代码提交方式](#7-代码提交方式)

# 1. 开发模式

```bash
npm run dev
or
yarn dev
```

# 2. 打测试包模式

```bash
npm run build:test
or
yarn build:test
```

# 3. 打生产包模式

```bash
npm run build:pro
or
yarn build:pro
```

# 4. nginx 配置

```nginx
location /eshimin-shrs {
    alias "********\eshimin-shrs\dist";
}
```

# 5. 访问地址

http://localhost/eshimin-shrs/index.html#/dismissal

# 6. 企业云调试方式

开发门户：http://localhost/portal-dev/index
菜单“运行调试” ：企业云跳转

# 7. 代码提交方式

```bash
npm run commit
or
yarn commit
```
