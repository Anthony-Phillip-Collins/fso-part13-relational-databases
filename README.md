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
