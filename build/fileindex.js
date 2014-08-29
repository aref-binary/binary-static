module.exports = {
    all: {
        options: {
            format: 'json_flat',
            pretty: true
        },
        files: [{ 
            dest: 'dist/javascript.json', 
            src: [
            'src/javascript/lib/jquery.js', 
            'src/javascript/lib/highstock/highstock.js', 
            'src/javascript/lib/moment/moment.js', 
            'src/javascript/lib/**/*.js',
            'src/javascript/binary/base/*.js',
            'src/javascript/binary/**/*.js'
            ]
        },
        { 
            dest: 'dist/lib.json', 
            src: [
            'src/javascript/lib/jquery.js', 
            'src/javascript/lib/highstock/highstock.js', 
            'src/javascript/lib/moment/moment.js', 
            'src/javascript/lib/**/*.js'
            ]
        },
        { 
            dest: 'dist/binary.json', src: [
            'src/javascript/binary/base/*.js',
            'src/javascript/binary/**/*.js'
            ] 
        }]
    }
};