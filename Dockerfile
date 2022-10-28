FROM node:16.13.2

ENV PORT=5000

EXPOSE 5000

WORKDIR /app

COPY "package.json" .
COPY "package-lock.json" .
COPY "tsconfig.json" .

COPY . .

RUN npm install

RUN npx prisma generate

CMD [ "npm", "run", "dev" ]