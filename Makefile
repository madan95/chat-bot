# Start Docker container with node server
start:
	@echo Starting docker and node chatbotserver
	docker-compose up -d

# Stoping node container
stop:
	@echo Stoping docker and node chatbotserver
	docker-compose stop

# Removing node container
remove:
	@echo Stop and remove node container
	docker-compose down
