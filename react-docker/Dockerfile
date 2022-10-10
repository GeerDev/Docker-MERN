FROM node:18

WORKDIR /home/react-docker 

COPY package*.json .

RUN npm install

COPY . .

RUN npm i -g serve

RUN npm run build

EXPOSE 3000 

CMD ["serve", "-s", "build"] 