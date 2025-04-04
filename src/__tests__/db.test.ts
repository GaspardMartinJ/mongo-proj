import mongoose from 'mongoose';
import '../config/db';

describe('Database Connection', () => {
    it('should connect to the database', async () => {
        await mongoose.connection.asPromise(); // Wait for the connection to complete
        const connectionState = mongoose.connection.readyState;
        expect(connectionState).toBe(1); // 1 means connected
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });
});