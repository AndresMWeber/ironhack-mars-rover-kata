function sprite(options) {

    var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1;

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.x = options.x;
    that.y = options.y;

    that.update = function() {

        tickCount++;

        if (tickCount > ticksPerFrame) {

            tickCount = 0;

            // If the current frame index is in range
            if (frameIndex < numberOfFrames - 1) {
                // Go to the next frame
                frameIndex++;
            } else {
                frameIndex = 0;
            }
        }
    };

    that.render = function() {

        // Clear the canvas
        that.context.clearRect(0, 0, that.width, that.height);

        // Draw the animation
        that.context.drawImage(
            that.image,
            frameIndex * that.width / numberOfFrames,
            0,
            that.width / numberOfFrames,
            that.height,
            that.x,
            that.y,
            that.width / numberOfFrames,
            that.height);
    };

    return that;
}

module.exports = { sprite }