pipeline {
    
    agent any
  
    stages {
        stage('Checkout Source') {
            steps {
               git branch: 'main', credentialsId: 'tokenjenkins', url: 'https://github.com/hajjjat2004/firstjob'
            }
         }
       
        stage('start container') {
            steps{
               script { 
                   sh 'sudo cd ./firstJob'
                   sh 'docker-compose up -d'
                   sh 'docker ps -a'
                        
                   }
              
              }
         
          }
         
    }
}
