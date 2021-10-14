# postal

## start server
## post message

curl --location --request POST 'localhost:3000/message' \
--header 'Content-Type: application/json' \
--data-raw '{
    "foo":123
}

'

