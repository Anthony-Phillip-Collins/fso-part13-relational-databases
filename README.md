# PostgreSQL playground

## Using init bash script

In order to run `/docker-entrypoint-initdb.d/init-user-db.sh` on initialisation it needs to be executable or the script will fail like so

```
/docker-entrypoint-initdb.d/init-user-db.sh: /bin/bash: bad interpreter: Permission denied
```

Once the container is up run

```
npm run docker:init
```

This will ad write permissions to the init file.  
Important: The local folder `./data` (set as volume) will have to be removed for the init script to run.

## Other util scripts

Start

```
npm run docker:up
```

Stop

```
npm run docker:down
```

Use cli with psql

```
npm run docker:psql
```

## psql actions

List databases:

```
\l
```

List relations:

```
\d
```

Connect to database:

```
\c postgres
```

Create database "notes"

```postgres
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    content text NOT NULL,
    important boolean,
    date time
);
```

View "notes" table definition

```
\d notes
```

Insert content:

```postgres
INSERT INTO notes (content, important) VALUES ('Relational databases rule the world', true);
INSERT INTO notes (content, important) VALUES ('MongoDB is webscale', false);
```

Show content:

```postgres
SELECT * FROM notes;
```

```postgres
SELECT * FROM notes WHERE important=true;
```

The following fail due to schema violation:

```postgres
INSERT INTO notes (important) VALUES (true);

-- _ERROR: null value in column "content" of relation "notes" violates not-null constraint_
```

```postgres
INSERT INTO notes (content, important) VALUES ('The meaning of Life', 0);

-- ERROR:  column "important" is of type boolean but expression is of type integer
```
