#!/usr/bin/groovy

/**
    this section of the pipeline executes on the master, which has a lot of useful variables that we can leverage to configure our pipeline
**/
node (''){
    // these should align to the projects in the Application Inventory
    env.DEV_PROJECT = 'coo-dev'
    env.TEST_PROJECT = 'coo-test'

    // this value should be set to the root directory of your source code within the git repository.
    // if the root of the source is the root of the repo, leave this value as ""
    env.SOURCE_CONTEXT_DIR = ""

    // this value is relative to env.SOURCE_CONTEXT_DIR
    // it should be set to the location where you build outputs the artifacts you want to publish to your container build
    env.BUILD_OUTPUT_CONTEXT_DIR = "dist/"

    // the complete build command
    env.BUILD_COMMAND = "npm install && ./node_modules/@vue/cli-service/bin/vue-cli-service.js build"

    env.APP_NAME = 'demo-ui'

    // the name of the image stream that you want to when building your application source code
    env.JENKINS_SLAVE_NAME = 'nodejs'

    // these are defaults that will help run openshift automation
    env.OCP_API_SERVER = "${env.OPENSHIFT_API_URL}"
    env.OCP_TOKEN = readFile('/var/run/secrets/kubernetes.io/serviceaccount/token').trim()
}


/**
    this section of the pipeline executes on a custom mvn build slave.
    you should not need to change anything below unless you need new stages or new integrations (e.g. Cucumber Reports or Sonar)
**/
node("${env.JENKINS_SLAVE_NAME}") {

  stage('SCM Checkout') {
    checkout scm
    input 'wait?'
  }

  dir ("${env.SOURCE_CONTEXT_DIR}") {
    stage('Build App') {

      sh "${env.BUILD_COMMAND}"
    }

    // assumes uber jar is created
    stage('Build Image') {
      sh "oc start-build ${env.APP_NAME} --from-dir=${env.BUILD_OUTPUT_CONTEXT_DIR} --follow"
    }
  }

  // no user changes should be needed below this point
  stage ('Deploy to Dev') {
    openshiftTag (apiURL: "${env.OCP_API_SERVER}", authToken: "${env.OCP_TOKEN}", destStream: "${env.APP_NAME}", destTag: 'latest', destinationAuthToken: "${env.OCP_TOKEN}", destinationNamespace: "${env.DEV_PROJECT}", namespace: "${env.OPENSHIFT_BUILD_NAMESPACE}", srcStream: "${env.APP_NAME}", srcTag: 'latest')

    openshiftVerifyDeployment (apiURL: "${env.OCP_API_SERVER}", authToken: "${env.OCP_TOKEN}", depCfg: "${env.APP_NAME}", namespace: "${env.DEV_PROJECT}", verifyReplicaCount: true)
  }

  stage ('Deploy to Test') {
    input "Promote Application to Test?"

    openshiftTag (apiURL: "${env.OCP_API_SERVER}", authToken: "${env.OCP_TOKEN}", destStream: "${env.APP_NAME}", destTag: 'latest', destinationAuthToken: "${env.OCP_TOKEN}", destinationNamespace: "${env.TEST_PROJECT}", namespace: "${env.DEV_PROJECT}", srcStream: "${env.APP_NAME}", srcTag: 'latest')

    openshiftVerifyDeployment (apiURL: "${env.OCP_API_SERVER}", authToken: "${env.OCP_TOKEN}", depCfg: "${env.APP_NAME}", namespace: "${env.TEST_PROJECT}", verifyReplicaCount: true)
  }

}
