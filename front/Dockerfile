# STEP-1 BUILD
# Defining node image and giving alias as node-helper
# It's better to define version otherwise me might face issue in future build

FROM node:14-alpine3.15 as node-helper

#Creating virtual directory inside docker image
WORKDIR /app

RUN npm cache clean --force

#Copying file from local machine to virtual docker image directory
COPY . .

#installing deps for project
RUN npm install


#STEP-2 RUN
#Defining nginx img 
FROM nginx:1.20 as ngx

#copying compiled code from dist to nginx folder for serving
COPY --from=node-helper /app/dist/frostyfinds /usr/share/nginx/html

#copying nginx config from local to image
COPY /nginx.conf /etc/nginx/conf.d/default.conf

#exposing internal port
EXPOSE 80