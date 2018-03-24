var whitelist = [
    'http://localhost:9000',
    'http://localhost:9014',
    'http://localhost:8080',
];

var corsOptions = exports.corsMiddleware = {
  credentials: true,
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: 'accept, content-type'
};
