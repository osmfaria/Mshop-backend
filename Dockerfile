FROM node:16.13.2

ENV PORT=5000

EXPOSE 5000

WORKDIR /app

COPY ["package.json", "yarn.lock"] .

RUN npm install package.json

COPY . .

CMD [ "npm", "run", "dev" ]