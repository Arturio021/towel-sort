// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        var resultMatrix = [];
        var resultIndex = 0;
        for (var i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                for (var j = 0; j < matrix[i].length; j++, resultIndex++) {
                    resultMatrix[resultIndex] = matrix[i][j];
                }
            } else {
                for (var j = matrix[i].length - 1; j >= 0; j--, resultIndex++) {
                    resultMatrix[resultIndex] = matrix[i][j];
                }
            }
        }
        return resultMatrix;
    } else {
        return [];
    }
};