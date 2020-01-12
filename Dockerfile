FROM node:13.5.0 AS builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm install
RUN npm run build


FROM nginx:1.16.0-alpine AS release
COPY --from=builder /app/build /usr/share/nginx/html
COPY larp_callendar.conf /etc/nginx/conf.d/default.conf.template

CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" \
    && nginx -g 'daemon off;'
