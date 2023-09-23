# Use the official Jekyll image as the base
FROM jekyll/jekyll:latest

# Set the working directory in the container
WORKDIR /srv/jekyll

# Copy the Gemfile and Gemfile.lock into the image
COPY Gemfile Gemfile.lock ./

# Install the gems
RUN bundle install

# Copy the content of the local src directory to the working directory
COPY . .

# Specify the command to run on container start
CMD ["jekyll", "serve", "--watch", "--drafts", "--host", "0.0.0.0"]
