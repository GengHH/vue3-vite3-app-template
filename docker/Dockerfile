FROM node:latest
LABEL maintainer="ghh"
WORKDIR /myapp/
#COPY /* /myapp/
VOLUME ["D:/dockerApp", "/myapp"]
RUN npm config set registry http://registry.npm.taobao.org/ \
  && npm install --global serve \
  && yarn config set registry http://registry.npm.taobao.org/  \
  && apt update 
# && apt-get install vim
# && yarn
RUN apt-get install -y vim
EXPOSE 3000
EXPOSE 3001
EXPOSE 3002
# CMD [ "yarn","dev" ]
# CMD cd /vue3-vite3-app-template2
# CMD echo "success-------------------ok"
CMD [ "serve","-p","3002"]
