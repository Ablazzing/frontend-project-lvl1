#Makefile
install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
check:
	npx prettier --write .
	npx eslint --fix .
