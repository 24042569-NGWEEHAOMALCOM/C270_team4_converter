# Use a small official nginx image
FROM nginx:alpine

# Remove default content (optional) and copy our static site
RUN rm -rf /usr/share/nginx/html/*
COPY public/ /usr/share/nginx/html/

# Expose the port nginx listens on
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
