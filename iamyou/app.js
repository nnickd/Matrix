var options = {
    refresh: 100,
    timeout: 15000
};

var sensor = 'gyroscope';

function sense(data) {
    if (data !== undefined && sensor === data.type) {
        matrix.type('sensor').send({
            'name': data.type,
            'x': data.x,
            'y': data.y,
            'z': data.z
        });
    }
}

matrix.init('gyroscope', options).then(function(data) {
    sense(data);
});

matrix.init('accelerometer', options).then(function(data) {
    sense(data);
});

matrix.init('magnetometer', options).then(function(data) {
    sense(data);
});

matrix.on('gyroscope', function() {
    sensor = 'gyroscope';
});

matrix.on('accelerometer', function() {
    sensor = 'accelerometer';
});

matrix.on('magnetometer', function() {
    sensor = 'magnetometer';
});

matrix.on('refresh', function(r) {
    options.refresh = r;
});
