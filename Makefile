#Makefile
install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
	sudo npm link
check:
	npx prettier --write .
	npx eslint --fix .
create-game:
	cp src/games/brain-even.js src/games/${file}.js
	cp bin/brain-even.js bin/${file}.js
	nano package.json
