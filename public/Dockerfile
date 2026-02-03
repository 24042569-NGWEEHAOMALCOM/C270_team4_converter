FROM nginx:alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy your static site from the public folder into nginx's web root
COPY public/ /usr/share/nginx/html/

# Expose the default nginx port
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
