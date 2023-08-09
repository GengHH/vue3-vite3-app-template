FROM node:latest
LABEL maintainer="genghh"
WORKDIR /myapp/
COPY . .
VOLUME ["/myapp","/myapp/node_modules"]
RUN  npm config set registry https://registry.npm.taobao.org \
 &&  npm config set strict-ssl false \
 &&  npm install --global pnpm \
 &&  npm install --global serve \
 &&  yarn config set https://registry.npm.taobao.org \
 &&  yarn config set strict-ssl false \
 # && apt-get update \
 # && apt-get install -y vim
  &&   pnpm i \
  &&  pnpm add esbuild-linux-64
EXPOSE 3000
# EXPOSE 3001
# EXPOSE 3002
CMD [ "yarn","dev" ]
# CMD cd /vue3-vite3-app-template2
#CMD echo "success-------------------ok"
# CMD [ "serve","-p","3002"]
