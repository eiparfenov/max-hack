FROM node
WORKDIR app
COPY . .
CMD ["node", "./bot.js"]