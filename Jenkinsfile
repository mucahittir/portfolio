pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
        timeout(time: 15, unit: 'MINUTES')
    }

    triggers {
        // Triggered automatically on GitHub Push events (webhook)
        githubPush()
        // Reliable fallback polling every 2 minutes for local/NAT environments
        pollSCM('H/2 * * * *')
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub...'
                checkout scm
            }
        }

        stage('Verify Environment') {
            steps {
                sh '''
                    echo "Checking Docker and Compose availability in agent..."
                    docker --version
                    docker compose version
                '''
            }
        }

        stage('Build & Deploy') {
            steps {
                sh '''
                    echo "Building Docker image and deploying portfolio container..."
                    docker compose -p portfolio up -d --build --remove-orphans
                    echo "Current running portfolio container:"
                    docker ps --filter "name=portfolio"
                '''
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                    echo "Waiting for Nginx server to warm up..."
                    sleep 5
                    echo "Performing HTTP health check on port 3002..."
                    curl -s -f -I http://host.docker.internal:3002 || curl -s -f -I http://172.17.0.1:3002 || exit 1
                    echo "Health check passed successfully!"
                '''
            }
        }

        stage('Cleanup') {
            steps {
                sh '''
                    echo "Cleaning up dangling images..."
                    docker image prune -f --filter "until=24h" || true
                '''
            }
        }
    }

    post {
        success {
            echo "=========================================================="
            echo "✓ PORTFOLIO DEPLOYED SUCCESSFULLY!"
            echo "  Access URL: http://localhost:3002"
            echo "=========================================================="
        }
        failure {
            echo "=========================================================="
            echo "✗ PORTFOLIO DEPLOYMENT FAILED! Please inspect stage logs."
            echo "=========================================================="
        }
    }
}
