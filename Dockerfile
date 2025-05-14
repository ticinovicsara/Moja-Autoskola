FROM node:20
WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./apps/backend/package.json ./apps/backend/package.json
COPY ./apps/frontend/package.json ./apps/frontend/package.json
COPY ./apps/backend/prisma ./apps/backend/prisma

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "apps/backend/dist/src/main.js"]