FROM node:18

WORKDIR /home/react-docker 

COPY . /home/react-docker 

RUN npm install

RUN npm i -g serve

RUN npm run build

EXPOSE 3000 

CMD ["npm", "start"] 