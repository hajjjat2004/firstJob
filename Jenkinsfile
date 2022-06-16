pipeline {
    
    agent { label 'ci-cd' }
  
    stages {
        stage('Checkout Source') {
            steps {
               git branch: 'main', credentialsId: 'tokenjenkins', url: 'https://github.com/hajjjat2004/firstjob'
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
