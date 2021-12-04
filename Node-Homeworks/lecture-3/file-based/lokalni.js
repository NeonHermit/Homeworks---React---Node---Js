const log = {
    info: function (info) { 
        console.log('Info: ' + info);
    },
    warning:function (warning) { 
        console.log('Warning: ' + warning);
    },
    error:function (error) { 
        console.log('Error: ' + error);
    }
};

module.exports = log

function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }

module.exports.calculateCircumference = calculateCircumference

