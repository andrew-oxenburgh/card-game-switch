#!/bin/sh

# given an svg file, create relevant icon files

npx svg-export doc/images/clubs.svg ./public/logo512.png 100% 512:
npx svg-export doc/images/clubs.svg ./public/logo192.png 100% 192:
npx svg-export doc/images/clubs.svg ./public/favicon.png 100% 16:

mv ./public/favicon.png ./public/favicon.ico
