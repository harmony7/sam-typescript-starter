## SAM TypeScript Starter

### How to run

Define endpoints in template.yaml (SAM)

for running locally using the SAM local emulation, use 

    npm run dev

and

    npm run tscwatch

in separate windows.

The first will delete the build from .aws-sam directory and start
the SAM local API from the dist directory.

This project uses TypeScript, so the second command will start a watch
against the ts files in the src directory.

### How to deploy to AWS

1. If you are using JetBrains + AWS Toolkit, you can simply right click the
`template.yaml` file in the repo and click _Deploy Serverless Application_.

2. Otherwise, use the normal sam deploy procedure.

    sam deploy --guided

This will create a `samconfig.toml` file to save settings for future deploys. 

### References

SAM generates a lot of CloudFormation resources automatically.
So refer to these as necessary.

https://github.com/aws/serverless-application-model/blob/master/docs/internals/generated_resources.rst

One to note is the creation of automatic AWS::Serverless::Api and
AWS::Serverless::HttpApi resources, respectively, when there are Api or HttpApi
events that are not mapped to any specific Api or HttpApi resources already.
These are created using a stage of `Prod` automatically and they will
output values named `ServerlessRestApi` and `ServerlessHttpApi` automatically
so they can be used in the Outputs.
