VERSION := $(shell jq -r .version manifest.json)

.PHONY: all
all:
	@make check
	@make clean
	@make build
	@make pack
	@make zip
	@make clean

check:
	test "$(CHROME_BIN)"

clean:
	rm -rf dist
	rm -rf *.pem

build:
	mkdir -p dist
	cp manifest.json dist/
	cp -r assets dist/
	tr -d '\n' < content.js > dist/content.js

zip:
	zip -qr extension_$(VERSION).zip dist/*

pack:
	@"$(CHROME_BIN)" -pack-extension=dist/
	mv dist.crx extension_$(VERSION).crx

