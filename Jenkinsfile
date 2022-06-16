pipeline {
    
    
    agent any
  
    stages {
        stage('Checkout Source') {
            steps {
                
               git branch: 'main', credentialsId: 'tokenjenkins', url: 'https://github.com/hajjjat2004/firstjob'
            }
         }
         
        stage('docker compose clean') {
            
            steps{
                
                script {
                   sh 'cd /var/jenkins_home/dd'
                   sh 'docker-compose down'
                    
                }
            }
        } 
       
        stage('start container') {
            steps{
               script { 
                   sh 'rm -r /var/jenkins_home/dd'
                   sh 'mkdir /var/jenkins_home/dd'
                   sh 'git clone https://github.com/hajjjat2004/firstjob /var/jenkins_home/dd'
                   sh 'cd /var/jenkins_home/dd'
                   sh 'docker-compose up -d'
                   
                       
               }
              
           }
         
        }
         
    }
}
