FROM node:16.13.2

ENV PORT=5000

EXPOSE 5000

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npx prisma generate

CMD npm run start