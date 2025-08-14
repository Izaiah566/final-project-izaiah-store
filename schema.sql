-- 1. create a table for users
CREATE TABLE users (
  id serial primary key,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 2. create a table for listings
CREATE TABLE listings (
    id serial primary key,
    title text NOT NULL,
    description text,
    price NUMERIC(10,2) NOT NULL,
    created_at timestamp,
    is_active boolean,
    Foreign key (user_id) references users(id),
    Foreign key (category_id) references categories(id)
)

-- 3. create a table for categories
CREATE TABLE categories (
    id serial primary key,
    name varchar(200)
)

-- 4. create a table for orders (Optional)
CREATE TABLE orders (
    id serial primary key,
    Foreign key (user_id) references users(id),
    Foreign key (listing_id) references listings(id),
    status varchar,
    created_at timestamp

)

-- 5. create a table for reviews
CREATE TABLE reviews (
    id serial primary key,
    Foreign key (reviewer_id) references users(id),
    Foreign key (listing_id) references listings(id),
    rating int,
    comment text,
    created_at timestamp
)

-- 6. create a table for messages
CREATE TABLE messages (
    id serial primary key,
    Foreign key (sender_id) references users(id),
    Foreign key (receiver_id) references users(id),
    content text,
    sent_ai timestamp
)

-- 7. create a table for community posts
CREATE TABLE community_posts (
    id serial primary key,
    Foreign key (user_id) references users(id)
    content text,
    created_at timestamp
)

-- 8. create a tabel for comments (optional)
CREATE TABLE comments (
    id serial primary key,
    Foreign key (post_id) references community_posts(id),
    Foreign key (user_id) references users(id),
    content text,
    created_at timestamp
)