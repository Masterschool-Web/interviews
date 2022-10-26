const { dispatch, addEventListener, listenersMap } = require('.');

describe('dispatch', function () {
    let listener,
        event = 'test';

    beforeEach(function () {
        listener = jest.fn();
    });

    it('should trigger events in the listenersMap', function () {
        addEventListener(event, listener);
        dispatch(event);

        expect(listener).toHaveBeenCalledWith();
    });
});
