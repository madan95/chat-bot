# Start Docker container with node server
docker-start:
	@echo Starting docker and node chatbotserver
	docker-compose up -d

# Stoping node container
docker-stop:
	@echo Stoping docker and node chatbotserver
	docker-compose stop

# Removing node container
docker-remove:
	@echo Stop and remove node container
	docker-compose down
