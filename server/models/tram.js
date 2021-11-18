import mongoose from 'mongoose';

const tram_Schema = mongoose.Schema({
    tram_name: String,
    line: String,
    status: Number,
    address: {
        latitude: Number,
        longtitude: Number
    }
});

const tram = mongoose.model('tram', tram_Schema);

export default tram;

