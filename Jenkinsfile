pipeline {
     environment {
       dockerimagename = "hajjjat2004/nodetest"
       dockerImage = ""
     }
    agent any
    
    stages {
        stage('Checkout Source') {
            steps {
               git branch: 'main', credentialsId: 'tokenjenkins', url: 'https://github.com/hajjjat2004/firstjob'
            }
         }
        stage('Build image') {
          steps{
            script {
              dockerImage = docker.build dockerimagename
            }
          }
        }
        
        stage('Pushing Image') {
           environment {
               registryCredential = 'dockerhublogin'
           }
           steps{
             script {
                docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
                dockerImage.push("latest")
                }
             }
          }
        }
         stage('start container') {
              steps{
                   script { 
                        sh 'docker-compose up -d'
                        sh 'docker run -d --restart unless-stopped hajjjat2004/epc'
                        
                   }
              
              }
         
         }
        
         
    }
}