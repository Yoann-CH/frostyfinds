FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY index.js .
EXPOSE 3000
ENV DB_HOST=db
ENV DB_USER=root
ENV DB_PASSWORD=secret
ENV DB_DATABASE=shifumi

CMD [ "node", "index.js" ]