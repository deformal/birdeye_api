COMPOSE_FILE_production=./deployments/production/docker-compose-production.yml
COMPOSE_FILE_development=./deployments/development/docker-compose-development.yml

NAME_production=birdeye-production
NAME_development=birdeye-development

BASE_PATH=$(PWD)

all: 
	@echo
	@echo "please specifiy the command 👊"
	@echo

build: 
	@echo
	@echo "🏭Building $(stage) service containers"
	@echo
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) build

push: 
	@echo
	@echo "📦Uploading $(stage) service containers"
	@echo
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) push

pull: 
	@echo
	@echo "📦Downloading $(stage) containers"
	@echo
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) pull

deploy: 
	@echo
	@echo "🚀Deploying $(stage) services"
	@echo
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) up -d

delete: 
	@echo
	@echo "🧹Deleting $(stage) services"
	@echo
ifneq (,$(findstring i, $(MAKEFLAGS)))
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) down -v
else
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) down
endif

deploy-service: 
	@echo
	@echo "🏭Building & 🚀Deploying $(stage) service $(service)"
	@echo
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) build $(service)
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) up -d --build

build-deploy: 
	@echo
	@echo "🏭Building & 🚀Deploying $(stage) services"
	@echo 
	@COMPOSE_DOCKER_CLI_BUILD=1 BASE_PATH=$(BASE_PATH) docker-compose -f $(COMPOSE_FILE_$(stage)) -p $(NAME_$(stage)) up -d --build

clean-cache: 
	@echo
	@echo "🧹Cleaning Caches"
	@echo
	@docker system prune --volumes -f

clean: 
	@echo
	@echo "🧹Deleting and removing all deployments"
	@echo
	@docker system prune -a -f

hasura-migrate:
	@echo
	@echo "🏭Migrating $(stage) hasura"
	@echo 
	@npx hasura --project $(BASE_PATH)/services/hasura --envfile cli/.env.$(stage) migrate apply --database-name 'default'
	@npx hasura --project $(BASE_PATH)/services/hasura --envfile cli/.env.$(stage) metadata apply

hasura-console:
	@echo
	@echo "🚀Loading $(stage) hasura console"
	@echo 
	@npx hasura --project $(BASE_PATH)/services/hasura --envfile cli/.env.$(stage) console

check-hasura:
	@./scripts/check-hasura.sh "$(BASE_PATH)" "$(stage)"

recreate: 
	@$(MAKE) --no-print-directory delete -i
	@$(MAKE) --no-print-directory decrypt-envs-stage 
	@$(MAKE) --no-print-directory build-deploy 
	@$(MAKE) --no-print-directory check-hasura 

release:
	# release: patch/minor/major
	npm run release -- --release-as $(release)

release-changelog:
	$(BASE_PATH)/scripts/release-changelog.sh "$(BASE_PATH)" "$(stage)"

decrypt-envs-stage:
	@npx @raftlabs/nx-manage decrypt -e production -p $(PASSPHRASE_PRODUCTION)
	@npx @raftlabs/nx-manage decrypt -e development -p $(PASSPHRASE_DEVELOPMENT)

encrypt-envs-stage:
	@npx @raftlabs/nx-manage encrypt -e production -p $(PASSPHRASE_PRODUCTION)
	@npx @raftlabs/nx-manage encrypt -e development -p $(PASSPHRASE_DEVELOPMENT)

create-env-stage:
	@echo
	@echo "🚀Moving secrets of $(stage) to .env"
	@echo
	@chmod +x ./scripts/create-env.sh
	@./scripts/create-env.sh "$(PWD)" "$(stage)"
