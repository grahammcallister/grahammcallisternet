FROM node:slim
RUN npm i npm@latest -g

COPY . .

RUN npm install --no-optional && npm cache clean --force

CMD ["node", "server.js"]