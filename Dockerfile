FROM node:16.13.2

WORKDIR /usr

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

RUN ls -la

ENV PORT=5000

EXPOSE 5000

CMD ["npm", "start"]



