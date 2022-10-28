FROM node:16.13.2

ENV PORT=5000

EXPOSE 5000

WORKDIR /app

COPY package*.json .
COPY tsconfig.json .
COPY prisma ./prisma/
COPY .env .
COPY . .

RUN npm install

RUN npx prisma generate

CMD npm run dev