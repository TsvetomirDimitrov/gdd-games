
// Auto-generated, edits will be overwritten
const spec = {
  'host': 'api.opendota.com',
  'schemes': [
    'https'
  ],
  'basePath': '/api',
  'contentTypes': [],
  'accepts': [
    'application/json'
  ],
  'securityDefinitions': {
    'api_key': {
      'type': 'apiKey',
      'name': 'api_key',
      'description': 'Use an API key to remove monthly call limits and to receive higher rate limits. [Learn more and get your API key](https://www.opendota.com/api-keys).\n\n      Usage example: https://api.opendota.com/api/matches/271145478?api_key=YOUR-API-KEY\n      \n      API key can also be sent using the authorization header \'Authorization: Bearer YOUR-API-KEY\'\n      ',
      'in': 'query'
    }
  }
}
export default spec
