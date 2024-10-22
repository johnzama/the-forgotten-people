pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Clone the GitHub repository
                git 'https://github.com/johnzama/the-forgotten-people.git'
            }
        }

        stage('Build') {
            steps {
                // Install dependencies and build the application
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                // Build the Docker image
                sh 'docker build -t the-forgotten-people:latest .'
            }
        }

        stage('Docker Run') {
            steps {
                // Run the Docker container
                sh 'docker run -d -p 3000:3000 --name the-forgotten-people the-forgotten-people:latest'
            }
        }

        stage('Clean Up') {
            steps {
                // Stop and remove the container (if needed)
                sh 'docker rm -f the-forgotten-people || true'
            }
        }
    }

    post {
        always {
            // Cleanup Docker images (optional)
            sh 'docker rmi -f the-forgotten-people:latest || true'
        }
    }
}

