<!--
 * @Author: GengHH
 * @Date: 2022-11-22 14:43:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-08-09 15:58:55
 * @Description: file content
 * @FilePath: \vue3-vite3-app-template\README.md
-->

- [1. 开发模式](#1-开发模式)
- [2. 打测试包模式](#2-打测试包模式)
- [3. 打生产包模式](#3-打生产包模式)
- [4. nginx 配置](#4-nginx配置)
- [5. 访问地址](#5-访问地址)
- [6. 代码提交方式](#7-代码提交方式)

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
location /app {
    alias "********\app\dist";
}
```

# 5. 访问地址

http://localhost/app/index.html/#/

# 6. 代码提交方式

```bash
npm run commit
or
yarn commit
```

# 制作 dockers images

## 1.在项目根目录下执行（注意指定版本号）

```
docker build  -t genghh/vue3-vite3-app:[v] .
```

## 2.登录 dockerhub

```
docker login
```

## 3.推送 dockerhub

```
docker push genghh/vue3-vite3-app:[v]
```
