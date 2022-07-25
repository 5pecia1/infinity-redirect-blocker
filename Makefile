run:
	@deno run --allow-net main.ts

docker.build:
	@docker build -t ${MY_DOCKER_REGISTRY}/infinity-redirect-blocker .

docker.push:
	@docker push ${MY_DOCKER_REGISTRY}/infinity-redirect-blocker:latest