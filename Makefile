NPM ?= npm
GO ?= go
ADDLICENSE ?= addlicense

license:
	$(GO) get -u github.com/google/addlicense
	@$(ADDLICENSE) -check -f ./copyright.txt $(shell find -not -path "./themes/*" -not -path "./node_modules/*" -not -path "./dist/*" -regex '.*\.\(go\|js\|ts\|yml\|yaml\|sh\|dockerfile|md\)')

license-fix:
	$(GO) get -u github.com/google/addlicense
	@$(ADDLICENSE) -f ./copyright.txt $(shell find -not -path "./themes/*" -not -path "./node_modules/*" -not -path "./dist/*" -regex '.*\.\(go\|js\|ts\|yml\|yaml\|sh\|dockerfile|md\)')

install:
	$(NPM) install && git submodule init && git submodule update

run:
	$(NPM) start

build:
	$(NPM) run build