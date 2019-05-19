FROM node
MAINTAINER ManYuan
RUN mkdir -p /home/project
ADD ./ /home/project
WORKDIR /home/project
RUN npm install

ENV HOST 0.0.0.0
ENV PORT 8080

EXPOSE 8080

CMD ["npm","run", "start"]

