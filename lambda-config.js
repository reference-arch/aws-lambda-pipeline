module.exports = {
  region: 'us-west-2',
  handler: 'index.handler',
  role: 'arn:aws:iam::844736534595:role/APIGatewayLambdaExecRole',
  functionName: 'GetHelloWithName',
  timeout: 10,
  memorySize: 128,
  runtime: 'nodejs'
};
