# base node image
FROM node:lts AS runtime

# Install pnpm
RUN npm i -g pnpm

# Create app directory
WORKDIR /app

# Install dependencies
COPY . .
RUN pnpm i

# Build the app
RUN pnpm build

# Serve the app
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD npx http-server ./dist