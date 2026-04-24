FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx config template (uses $PORT from Railway)
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Copy static site files
COPY *.html style.css script.js /usr/share/nginx/html/

# Railway sets PORT env var — default to 8080 if not set
ENV PORT=8080
EXPOSE 8080

# envsubst replaces $PORT in the nginx config at container startup
CMD ["/bin/sh", "-c", "envsubst '$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
