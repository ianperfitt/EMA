pipeline {
    agent any
    stages {
        stage('Build') { 

            tools {
                 maven: 'maven-3.6.0'
            steps {
                sh 'mvn -B -DskipTests clean package'
            }
        }
    }
}
