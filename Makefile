.PHONY: all
all:
	@${MAKE} check
	@${MAKE} clean
	@${MAKE} build
	@${MAKE} zip
	@${MAKE} clean

check:
	@test "$(CHROME_BIN)"

clean:
	@rm -rf dist
	@rm -rf *.pem

build:
	@mkdir -p dist
	@cp manifest.json dist/
	@cp -r assets dist/
	@tr -d '\n' < content.js > dist/content.js

zip:
	"$(CHROME_BIN)" -pack-extension=dist/
	@mv dist.crx extension.crx

