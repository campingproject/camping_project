#!/bin/bash

MKCERT_INSTALLED=$(which mkcert)

if [ -z $MKCERT_INSTALLED ];then
    brew install mkcert
fi

mkcert -install
mkcert "api.campinggo.store" 127.0.0.1 ::1