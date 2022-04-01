FROM node:16.13.0
RUN mkdir /src
COPY . /src
WORKDIR /src
RUN npm install
EXPOSE 3001
CMD npm build