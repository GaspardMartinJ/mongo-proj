import mongoose from 'mongoose';

const EnvironmentalDataSchema = new mongoose.Schema(
    {
        location: {
            type: { type: String, enum: ['Point'], required: true },
            coordinates: { type: [Number], required: true }, // [longitude, latitude]
        },
        value: Number, // e.g., air quality index or noise level
        type: { type: String, enum: ['air_quality', 'noise'], required: true },
    },
    { timestamps: true }
);

const EnvironmentalData = mongoose.model('EnvironmentalData', EnvironmentalDataSchema, {
    timeseries: {
        timeField: 'createdAt',
        metaField: 'type',
        granularity: 'minutes',
    },
});

export default EnvironmentalData;