import Tram from '../models/tram.js'

export const getTram = async (req, res) => {
    try {

        const trams = await Tram.find();
        res.status(200).json(trams)

    } catch (error) {

        res.status(404).json({ message: error.message })

    }
}

export const updateTram = async (req, res) => {

    const tram = req.body;
    const update = new Tram(tram);

    try {

        await update.save();
        res.status(201).json(update);

    } catch (error) {

        res.status(409).json({ message: error.message });

    }

}